import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI ?? "";

export async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to database');
  } catch (error) {
    console.error(error);
  }
}
