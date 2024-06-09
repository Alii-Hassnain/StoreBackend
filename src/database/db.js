import mongoose from "mongoose";

const mongodbURI = "mongodb://127.0.0.1:27017/store";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(mongodbURI);
        console.log(`MongoDB connected: ${connect.connection.host}`);
        
    } catch (error) {
        console.log(`Error: connection failed ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;