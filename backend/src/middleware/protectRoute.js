import { requireAuth} from '@clerk/express'
import User from '../models/User.js'

export const protectRoute = [ // array of middlewares
    requireAuth(),
    async(req,res,next) => {
        try{
            const clerkId  = req.auth().userId
            if(!clerkId) return res.status(401).json({message: "Unauthorized token"})

            // find user in DB using clerkId
            const user = await User.findOne({clerkId})

            if(!user) return res.status(404).json({messgae: "User not found"})

            req.user = user // user attached to request
            next()
        }       
        catch(error){
            console.error("Error in protectRoute middleware. ", error)
            res.status(500).json({message: "Internal Server Error."})
        }
    }
]   