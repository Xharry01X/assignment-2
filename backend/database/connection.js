import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        const MONGODB_URL = process.env.MONGODB_URL;
        console.log("MONGODB_URL:", MONGODB_URL);  // Debugging line to check if the variable is loaded correctly
        if (!MONGODB_URL) {
            throw new Error("MongoDB URL is not provided in the environment variables.");
        }

        await mongoose.connect(MONGODB_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with a failure code
    }
};

export default connectDB;
