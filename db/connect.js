import mongoose from "mongoose";

export const connectDB = (url) => {
  console.log("Connected to database...");
  return mongoose.connect(url);
};
