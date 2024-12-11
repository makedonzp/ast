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
            <h5 className={styles.MainSubtitle}>
              Ребёнок «залипает» в гаджетах?{" "}
            </h5>
            <p className={styles.MainText}>
              Откроем маленькое путешествие в страну чудес с помощью
              удивительных 3D-книг!
            </p>
            <div className={styles.BtnWrapper}>
              <button className={styles.MainButton}>Смотреть книги</button>
            </div>
          </Col>
        </Row>
        <Row className={styles.MainRowBottom}>
          <Col className={styles.MainColBottom}>
            <div className={styles.MainTextBottomWrapper}>
              <h4 className={styles.MainSubtitleBottom}>
                Серия книг для детей
              </h4>
              <h5 className={styles.MainTextBottom}>3-6 лет</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
