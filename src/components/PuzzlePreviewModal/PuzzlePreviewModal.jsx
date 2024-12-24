import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./PuzzlePreviewModal.module.css";
import puzzle from "../../assets/puzzle_complete.webp";

const PuzzlePreviewModal = ({ onHide }) => {
  return (
    <Container fluid className={styles.modalContent}>
      <Row className={styles.modalBody}>
        <Col className={styles.modalBodyCol}>
          <img src={puzzle} alt="Собранный пазл" />
          <button className={styles.closeButton} onClick={onHide}>
            &times;
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default PuzzlePreviewModal;
