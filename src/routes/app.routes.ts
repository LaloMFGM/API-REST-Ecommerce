import { Router } from "express";
import { router as productRouter } from "./product.routes";
import { router as userRouter } from "./user.routes";

export const router = Router();

router.use("/products", productRouter);
router.use("/users", userRouter);
