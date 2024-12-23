import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // Подключите стили, если они есть

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Sending login request:", { username, password }); // Логирование данных

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login", // Убедитесь, что URL правильный
        { username, password }
      );
      console.log("Login successful:", response.data); // Логирование успешного ответа
      localStorage.setItem("token", response.data.token);
      navigate("/admin");
    } catch (err) {
      console.error(
        "Login failed:",
        err.response ? err.response.data : err.message
      ); // Логирование ошибки
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
}
