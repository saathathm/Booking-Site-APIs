import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Database Connected");
  } catch (error) {
    throw error;
  }
};

export default connectDB;
