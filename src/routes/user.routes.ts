import { Router } from "express";
import { createUser } from "../controllers/user.controller";

export const router = Router();

router.post("/", createUser);
