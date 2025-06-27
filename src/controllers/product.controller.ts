import { Request, Response, NextFunction } from 'express';
import mongoose from "mongoose";
import { ProductModel } from '../models/ProductModel';


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

// export const updateProduct = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ message: "ID de producto inválido" });
//   }

//   try {
//     const productData = req.body;
//     const updatedProduct = await ProductModel.findByIdAndUpdate(id, productData, { new: true });

//     if (!updatedProduct) {
//       return res.status(404).json({ message: "Producto no encontrado" });
//     }

//     res.status(200).json({
//       message: "Producto actualizado exitosamente",
//       product: updatedProduct,
//     });
//   } catch (error) {
//     next(error);
//   }
// };


