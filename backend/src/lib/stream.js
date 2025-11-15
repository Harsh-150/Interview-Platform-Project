import {StreamChat} from 'stream-chat';
import {StreamClient} from "@stream-io/node-sdk"
import {ENV} from '../../env.js';

const apiKey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET

if(!apiKey || !apiSecret){
    console.error("STREAM API_KEY or STREAM SECRET_KEY NOT FOUND")
    throw new Error("Missing stream API Keys")
}

// chatclient is for chat features
export const chatClient = StreamChat.getInstance(apiKey,apiSecret)

// StreamClient will be used for video calls
export const streamClient = new StreamClient(apiKey, apiSecret)

export const upsertStreamUser = async(userData) => {
    try{
        await chatClient.upsertUser(userData)
        console.log("Stream user upserted successfully: ", userData)
    }
    catch(error){
        console.log('Error upserting stream User: ', error)
        throw error
    }
}

export const deleteStreamUser = async(userId) => {
    try{
        await chatClient.deleteUser(userId, {hard: true})
        console.log('User deleted succesfully', userId)
    }
    catch(error){
        console.log('Error deleting user: ', error)
        throw error
    }
}

