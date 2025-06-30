import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { ProductModel } from '../models/ProductModel';

// ✅ Obtener todos los productos
export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({
      message: "Lista de productos obtenida exitosamente",
      products,
    });
  } catch (error) {
    console.error("❌ Error en getAllProducts:", error);
    next(error);
  }
};

// ✅ Obtener producto por ID
export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID de producto inválido" });
    }

    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json({
      message: "Producto encontrado",
      product,
    });
  } catch (error) {
    console.error("❌ Error en getProductById:", error);
    next(error);
  }
};

// ✅ Crear producto
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
    console.error("❌ Error en createProduct:", error);
    next(error);
  }
};

// ✅ Buscar productos (por ID, nombre, categoría o descripción)
export const searchProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({
        message: "Por favor, proporcione un término de búsqueda.",
      });
    }

    // Buscar por ID si es válido
    if (mongoose.Types.ObjectId.isValid(query)) {
      const foundById = await ProductModel.findById(query);

      if (foundById) {
        return res.status(200).json({
          message: "Producto encontrado por ID",
          products: [foundById],
        });
      }
    }

    // Buscar por nombre, categoría o descripción
    const products = await ProductModel.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ],
    });

    if (products.length === 0) {
      return res.status(404).json({
        message: "No se encontraron productos que coincidan con la búsqueda.",
      });
    }

    res.status(200).json({
      message: "Productos encontrados exitosamente",
      products,
    });
  } catch (error) {
    console.error("❌ Error en searchProducts:", error);
    next(error);
  }
};
