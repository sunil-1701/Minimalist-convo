import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("Connecting to:", process.env.MONGODB_URI);

        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MONGODB connected: ");
    } catch(error){
        console.log("MONGODB connection error: ", error);
    }
};