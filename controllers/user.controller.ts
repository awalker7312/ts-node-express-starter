import { UserModel, User } from '../models/user.model';

export class UserController {
  async getUsers(): Promise<User[]> {
    const users = await UserModel.find();
    return users;
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id);
    return user;
  }
}
