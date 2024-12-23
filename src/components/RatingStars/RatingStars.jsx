import React from "react";
import styles from "./RatingStars.module.css"; // Стили для звезд

const RatingStars = ({ rating = 0 }) => {
  const totalStars = 5;
  return (
    <div className={styles.RatingStars}>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? styles.StarFilled : styles.StarEmpty}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
