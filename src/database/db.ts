// src/config/db.ts
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce_db';
    await mongoose.connect(mongoURI);
    console.log('🟢 Conectado a MongoDB');
  } catch (err) {
    console.error('❌ Error al conectar con MongoDB:', err);
    process.exit(1);
  }
};
