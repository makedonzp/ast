import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ModalStart.module.css";

const ModalStart = ({ onStart }) => {
  return (
    <Container fluid className={styles.modal}>
      <Container fluid className={styles.modalContent}>
        <div className={styles.StarsLeft}></div>
        <Row className={styles.modalBody}>
          <Col className={styles.modalCol}>
            <button className={styles.modalButton} onClick={onStart}>
              Начать игру
            </button>
          </Col>
        </Row>
        <div className={styles.StarsRight}></div>
      </Container>
    </Container>
  );
};

export default ModalStart;
