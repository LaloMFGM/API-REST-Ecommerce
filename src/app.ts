import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { loggerMiddleware } from './middlewares/logger.middleware';
import cors from 'cors';
import { connectDB } from './database/db';
import { router as routes } from "./routes/app.routes";
// import { errorMiddleware } from './middlewares/error.middleware';




dotenv.config();

// Importing the logger middleware

const app = express();
app.use(loggerMiddleware);
// app.use(errorMiddleware);
app.use(cors());
app.use(express.json());
app.use("/api", routes);

connectDB(); 

const port = process.env.PORT || 4000;



app.get('/', (_req: Request, res: Response) => {
  res.send('¡Hola desde Node.js con TypeScript!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
