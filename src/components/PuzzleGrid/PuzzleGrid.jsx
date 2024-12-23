import React, { useState } from "react";
import styles from "./PuzzleGrid.module.css";

// Функция для перемешивания массива
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const PuzzleGrid = () => {
  // Создаем 30 пазлов
  const [pieces, setPieces] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      position: null, // Позиция пазла в сетке (null означает, что пазл находится в контейнере)
      backgroundPosition: `-${(i % 6) * 141.67}px -${Math.floor(i / 6) * 97}px`,
      borderRadius: i % 2 === 0 ? "5px" : "100%",
    }))
  );

  // Создаем сетку для сборки пазла
  const [grid, setGrid] = useState(Array(30).fill(null));

  // Создаем массив пазлов в контейнере
  const [containerPieces, setContainerPieces] = useState(shuffleArray(pieces)); // Перемешиваем пазлы при инициализации

  const handleDragStart = (e, piece) => {
    e.dataTransfer.setData("pieceId", piece.id);
    console.log(
      `[DragStart] Piece ID: ${piece.id}, Position: ${piece.position}`
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const pieceId = e.dataTransfer.getData("pieceId");
    const piece = pieces.find((p) => p.id === +pieceId);

    if (piece) {
      console.log(
        `[Drop] Dropping Piece ID: ${piece.id} into Grid Cell: ${index}`
      );

      // Если ячейка уже занята, запрещаем установку пазла
      if (grid[index]) {
        console.log(`[Block] Cell ${index} is already occupied.`);
        return;
      }

      // Удаляем пазл из контейнера
      const newContainerPieces = containerPieces.filter(
        (p) => p.id !== piece.id
      );
      setContainerPieces(newContainerPieces);

      // Обновляем позицию пазла в сетке
      const newPieces = pieces.map((p) =>
        p.id === piece.id ? { ...p, position: index } : p
      );
      const newGrid = [...grid];
      newGrid[index] = piece; // Занимаем новую ячейку

      console.log(
        `[Update] Updated Grid Cell: ${index} with Piece ID: ${piece.id}`
      );
      console.log(`[State] New Grid:`, newGrid);
      console.log(`[State] New Pieces:`, newPieces);

      setPieces(newPieces);
      setGrid(newGrid);
    }
  };

  const handleDropToContainer = (e) => {
    const pieceId = e.dataTransfer.getData("pieceId");
    const piece = pieces.find((p) => p.id === +pieceId);

    if (piece && piece.position !== null) {
      console.log(
        `[DropToContainer] Dropping Piece ID: ${piece.id} back to Container`
      );

      // Удаляем пазл из сетки, если он был перетащен обратно в контейнер
      const newGrid = [...grid];
      newGrid[piece.position] = null; // Освобождаем ячейку
      setGrid(newGrid);

      // Обновляем позицию пазла (устанавливаем ее в null)
      const newPieces = pieces.map((p) =>
        p.id === piece.id ? { ...p, position: null } : p
      );
      setPieces(newPieces);

      // Добавляем пазл обратно в контейнер
      const newContainerPieces = shuffleArray([...containerPieces, piece]); // Перемешиваем пазлы при добавлении
      setContainerPieces(newContainerPieces);

      console.log(`[State] New Grid:`, newGrid);
      console.log(`[State] New Pieces:`, newPieces);
      console.log(`[State] New Container Pieces:`, newContainerPieces);
    }
  };

  console.log("[Render] Rendering PuzzleGrid");

  return (
    <div className={styles.gridContainer}>
      {/* Поле сбора пазла */}
      <div className={styles.grid}>
        {grid.map((piece, index) => (
          <div
            key={index}
            className={`${styles.gridCell} ${piece ? "" : styles.empty}`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {piece && (
              <div
                className={styles.piece}
                draggable
                onDragStart={(e) => handleDragStart(e, piece)}
                style={{ backgroundPosition: piece.backgroundPosition }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Контейнер для пазлов */}
      <div
        className={styles.piecesContainer}
        onDragOver={handleDragOver}
        onDrop={handleDropToContainer}
      >
        {containerPieces.map((piece) => (
          <div
            key={piece.id}
            className={styles.piece}
            draggable
            onDragStart={(e) => handleDragStart(e, piece)}
            style={{ backgroundPosition: piece.backgroundPosition }}
          />
        ))}
      </div>
    </div>
  );
};

export default PuzzleGrid;
