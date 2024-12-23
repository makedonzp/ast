import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PuzzleGrid from "../PuzzleGrid/PuzzleGrid";
import PuzzlePreviewModal from "../PuzzlePreviewModal/PuzzlePreviewModal";
import styles from "./PuzzleGame.module.css";
import { Link } from "react-router-dom";

const PuzzleGame = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Container fluid className={styles.gameContainerFluid}>
      <Container fluid className={styles.gameContainer}>
        <div className={styles.header}>
          <button
            className={styles.headerBtn}
            onClick={() => setShowPreview(true)}
          >
            Посмотреть собранный пазл
          </button>
          <Link className={styles.headerLink} to="/">
            Выход
          </Link>
        </div>
        <PuzzleGrid />
      </Container>
      {showPreview && (
        <PuzzlePreviewModal
          show={showPreview}
          onHide={() => setShowPreview(false)}
        />
      )}
    </Container>
  );
};

export default PuzzleGame;
