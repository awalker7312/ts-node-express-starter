import mongoose, { Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
}

const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const UserModel = mongoose.model<User>('User', userSchema);
