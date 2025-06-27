
import mongoose, { Document, Schema } from "mongoose";
import { Product } from "../interfaces/Product";

export interface ProductDocument extends Product, Document {}


const ProductSchema: Schema = new Schema({ // si usas el campo id personalizado
  name:         { type: String, required: true },
  description:  { type: String, required: true },
  price:        { type: Number, required: true },
  category:     { type: String, required: true },
  imageUrl:     { type: String, required: true },
});

export const ProductModel = mongoose.model<ProductDocument>("Product", ProductSchema);