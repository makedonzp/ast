import express from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const router = express.Router();
const file = `${process.cwd()}/db.json`;
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Получить все книги
router.get("/", async (req, res) => {
  await db.read();
  const books = db.data.books;
  res.json(books);
});

// Добавить книгу
router.post("/", async (req, res) => {
  await db.read();
  const book = req.body;
  db.data.books.push(book);
  await db.write();
  res.status(201).json(book);
});

// Удалить книгу
router.delete("/:id", async (req, res) => {
  await db.read();
  const { id } = req.params;
  db.data.books = db.data.books.filter((book) => book.id !== parseInt(id));
  await db.write();
  res.json({ message: "Book deleted" });
});

export default router;
