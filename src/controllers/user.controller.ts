import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  // Logic to create a user
  res.status(200).send("User created successfully");
}