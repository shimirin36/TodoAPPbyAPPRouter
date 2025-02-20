import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI!);
  } catch (error) {
    console.log("DB Connect failed");
    throw new Error();
  }
};
