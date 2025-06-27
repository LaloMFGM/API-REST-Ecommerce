import { RequestHandler, Router } from "express";
import { validateProduct } from "../middlewares/validate.middleware";

import {
  createProduct,
  getAllProducts,
  getProductById
} from "../controllers/product.controller";


export const router = Router();

router.post("/", validateProduct as RequestHandler , createProduct as RequestHandler);
router.get("/", getAllProducts as RequestHandler);
router.get("/:id", getProductById as RequestHandler);
