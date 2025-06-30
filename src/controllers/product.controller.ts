import { Request, Response, NextFunction } from 'express';
import mongoose from "mongoose";
import { ProductModel } from '../models/ProductModel'; // Adjust path if necessary

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await ProductModel.find();
    console.log(products); // Good for debugging, remove in production if not needed
    res.status(200).json({
      message: "Lista de productos obtenida exitosamente",
      products,
    });
  } catch (error) {
    next(error);
  }
};



export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "ID de producto inválido" });
  }

  try {
    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json({
      message: "Producto encontrado",
      product,
    });
  } catch (error) {
    next(error);
  }
};



export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productData = req.body;
    const product = new ProductModel(productData);
    await product.save();
    res.status(201).json({
      message: "Producto creado exitosamente",
      product,
    });
  } catch (error) {
    next(error);
  }
};



export const searchProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { query } = req.query; // Get the search term from query parameters

  console.log("Search query:", query); // Log the search query for debugging

  if (!query) {
    return res.status(400).json({ message: "Por favor, proporcione un término de búsqueda." });
  }

  try {
    let products;

    // 1. Check if the query is a valid MongoDB ObjectId (for searching by ID)
    if (mongoose.Types.ObjectId.isValid(query as string)) {
      products = await ProductModel.findById(query as string);

      console.log(products); // Log the found products for debugging

      if (products) {
        // If found by ID, wrap it in an array to maintain consistent response structure
        return res.status(200).json({
          message: "Producto encontrado por ID",
          products: [products],
        });
      }
    }

    // 2. If not found by ID or not a valid ID, search by product name or category
    // Using a case-insensitive regex for broader search
    products = await ProductModel.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },       // Search by product name (case-insensitive)
        { category: { $regex: query, $options: 'i' } },    // Search by category (case-insensitive)
        { description: { $regex: query, $options: 'i' } }, // Optional: Search by description (case-insensitive)
      ],
    });

    

    if (products.length === 0) {
      return res.status(404).json({ message: "No se encontraron productos que coincidan con la búsqueda." });
    }

    res.status(200).json({
      message: "Productos encontrados exitosamente",
      products,
    });
  } catch (error) {
    next(error);
  }
};