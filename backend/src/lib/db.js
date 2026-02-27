import mongoose from 'mongoose'
import {ENV} from './env.js'
export const connectDB=async()=>{
    try{
        if(!ENV.DB_URL){
            throw new Error("DB_URL is not defined in .env");
        }
        const conn=await mongoose.connect(ENV.DB_URL);
        console.log("connected to MongoDb:",conn.connection.host)
    } catch{
        console.error("Error During connection to mongoDb contact developer :Vinay Pandey")
        process.exit(1);
    }
}
