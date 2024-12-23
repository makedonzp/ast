import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <Container fluid className={styles.Main}>
      <Container className={styles.MainContainer}>
        <Row className={styles.MainRow}>
          <Col className={styles.MainCol}>
            <h1 className={styles.MainTitle}>Когда сказка становится ближе!</h1>

            <p className={styles.MainText}>
              Откроем маленькое путешествие в страну чудес с помощью
              удивительных <span className={styles.MainSpan}>3D-книг!</span>
            </p>
            <div className={styles.BtnWrapper}>
              <button className={styles.MainButton}>Смотреть книги</button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.CardOne}></div>
      <div className={styles.CardTwo}></div>
      <div className={styles.CardThree}></div>
      <div className={styles.Cat}></div>
    </Container>
  );
}
