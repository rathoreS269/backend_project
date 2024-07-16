import mongoose from 'mongoose'
import {DB_NAME} from "../constants.js"

const connectDB = async () =>{
    try {
     const connectionInstance = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`\n Mongoo DB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('mongoo db connection error', error);
        process.exit(1) //it's nodejs function explore it a little
    }
}

export default connectDB