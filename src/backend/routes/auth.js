import express from "express";
import jwt from "jsonwebtoken";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const router = express.Router();
const file = `${process.cwd()}/db.json`;
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Логин
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  await db.read();
  const user = db.data.users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
