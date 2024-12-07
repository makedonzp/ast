import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Rewards.module.css";

export default function Rewards() {
  return (
    <Container fluid className={styles.Rewards}>
      <Container className={styles.RewardsContainer}>
        <Row className={styles.RewardsRow}>
          <Col className={styles.RewardsCol}>
            <h1 className={styles.RewardsTitle}>Дарим призы за участие</h1>
          </Col>
        </Row>
        <Row className={styles.RewardsRowBook}>
          <Col className={styles.RewardsBookWrapper}>
            <div className={styles.RewardsBookImage}>
              <p className={styles.RewardsBookText}>
                1. Посмотреть книгу <br /> на полке Библиотеки
              </p>
            </div>
            <div className={styles.RewardsBookSteps}></div>
          </Col>
        </Row>
        <Row className={styles.RewardsRowHands}>
          <Col className={styles.RewardsHandsWrapper}>
            <div className={styles.RewardsHandsImage}>
              <p className={styles.RewardsHandsText}>
                2. Поделиться <br /> сайтом с другом
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
