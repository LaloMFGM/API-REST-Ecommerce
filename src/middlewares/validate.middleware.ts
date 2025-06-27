import { Request, Response, NextFunction } from "express";

export const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { name, price, description, category, imageUrl } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ message: "El nombre es obligatorio y debe ser una cadena." });
  }

  if (!description || typeof description !== "string") {
    return res.status(400).json({ message: "La descripción es obligatoria y debe ser una cadena." });
  }

  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({ message: "El precio debe ser un número mayor a 0." });
  }

  if (!category || typeof category !== "string") {
    return res.status(400).json({ message: "La categoría es obligatoria y debe ser una cadena." });
  }

  if (!imageUrl || typeof imageUrl !== "string") {
    return res.status(400).json({ message: "La URL de imagen es obligatoria y debe ser una cadena." });
  }

  next(); 
};
