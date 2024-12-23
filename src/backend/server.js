import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import jwt from "jsonwebtoken";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { fileURLToPath } from "url";
import { dirname } from "path";
import booksRoutes from "./routes/books.js";
import authRoutes from "./routes/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Настройка lowdb
const file = `${__dirname}/db.json`;
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Инициализация базы данных
await db.read();
db.data ||= { books: [], users: [] };
await db.write();

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Разрешить запросы с фронтенда
app.use(bodyParser.json());

// Роуты

app.use("/api/books", booksRoutes);
app.use("/api/auth", authRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
