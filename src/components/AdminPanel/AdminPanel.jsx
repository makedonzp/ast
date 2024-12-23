import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    description: "",
    author: "",
    videoUrl: "",
    coverImage: "",
    maxWidth: 0,
    animation: "",
    pictures: {
      first: "",
      second: "",
      third: "",
    },
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:5000/api/books");
    setBooks(response.data);
  };

  const handleAddBook = async () => {
    await axios.post("http://localhost:5000/api/books", newBook);
    fetchBooks();
  };

  const handleDeleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    fetchBooks();
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newBook.description}
          onChange={(e) =>
            setNewBook({ ...newBook, description: e.target.value })
          }
        />
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} - {book.author}
            <button onClick={() => handleDeleteBook(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
