import React, { useEffect, useState } from "react";
import styles from "./ShineEffect.module.css";

export default function ShineEffect() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        size: Math.random() * 30 + 20, // Размер звездочки
        left: Math.random() * 100, // Позиция по ширине
        top: Math.random() * 100, // Позиция по высоте
      };
      setStars((prevStars) => [...prevStars, newStar]);

      // Удаляем старые звездочки через 3 секунды
      setTimeout(() => {
        setStars((prevStars) =>
          prevStars.filter((star) => star.id !== newStar.id)
        );
      }, 3000);
    }, 700); // Частота появления звездочек

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.ShineEffect}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.Star}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
        ></div>
      ))}
    </div>
  );
}
