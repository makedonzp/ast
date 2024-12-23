import React, { useState } from "react";
import ModalStart from "../ModalStart/ModalStart";
import PuzzleGame from "../PuzzleGame/PuzzleGame";
import styles from "./GoToPlayPage.module.css"; // Добавьте стили, если нужно
import { Container } from "react-bootstrap";

const GoToPlayPage = () => {
  const [showModal, setShowModal] = useState(true); // Модальное окно показывается изначально

  // Функция для закрытия модального окна
  const handleStartGame = () => {
    setShowModal(false);
  };

  return (
    <Container fluid className={styles.container}>
      {/* Компонент пазла всегда отображается */}
      <PuzzleGame />

      {/* Модальное окно показывается только в начале */}
      {showModal && <ModalStart onStart={handleStartGame} />}
    </Container>
  );
};

export default GoToPlayPage;
