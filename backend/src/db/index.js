import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `Database connection established! at ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Database Connection Failed! Error: ${error?.message}`);
  }
};
