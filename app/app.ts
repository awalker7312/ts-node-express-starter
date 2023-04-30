import express, { Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const userController = new UserController();
const port = process.env.PORT || 3000;

app.get('/users', async (req: Request, res: Response) => {
  const users = await userController.getUsers();
  res.json(users);
});

app.get('/users/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await userController.getUserById(id);
  if (!user) {
    res.status(404).send('User not found');
    return;
  }
  res.json(user);
});

export { app, port };
