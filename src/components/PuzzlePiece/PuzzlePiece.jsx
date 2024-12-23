import React from "react";
import styles from "./PuzzlePiece.module.css";

const PuzzlePiece = ({ piece, onDrop }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("pieceId", piece.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const pieceId = e.dataTransfer.getData("pieceId");
    onDrop(pieceId, piece.id);
  };

  return (
    <div
      className={styles.piece}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img src={piece.image} alt={`Piece ${piece.id}`} />
    </div>
  );
};

export default PuzzlePiece;
