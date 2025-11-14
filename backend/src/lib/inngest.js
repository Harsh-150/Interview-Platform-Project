import { Inngest } from "inngest";
import {connectDB} from './db.js';
import User from '../models/User.js';
import {upsertStreamUser, deleteStreamUser} from './stream.js'

export const inngest = new Inngest({id: "interview-platform"});

const syncUser = inngest.createFunction(
    {id: 'sync-user'},
    {event: 'clerk/user.created'},
    async({event}) => {
        await connectDB()

        const {id, email_addresses, first_name, last_name, image_url} = event.data;

        const newUser = {
            clerkId: id,
            email: email_addresses[0]?.email_address,
            name: `${first_name || ""} ${last_name || ""}`,
            profileImage: image_url || ""
        }

        const streamUser = {
            id: newUser.clerkId.toString(),
            name: newUser.name,
            profileImage: newUser.profileImage
        }

        await Promise.all([
            User.create(newUser),
            upsertStreamUser(streamUser)
        ])

        return {message: "User synced to MongoDB and Stream."}
    }
)
const deleteUserFromDB = inngest.createFunction(
    {id: "delete-user-from-db"},
    {event: 'clerk/user.deleted'},
    async({event}) => {
        await connectDB()

        const id = event.data.id

        await  Promise.all([
            User.deleteOne({clerkId: id}),
            deleteStreamUser(id.toString())
        ])

        return {message: "User deleted from both MongoDB  and Stream."}
    }
)


export const functions = [syncUser, deleteUserFromDB]; 