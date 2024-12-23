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
            <div className={styles.RewardsHandsSteps}></div>
            <div className={styles.RewardsPazzleImage}>
              <p className={styles.RewardsPazzleText}>
                2. Выиграть <br />в мини-игру
              </p>
            </div>
          </Col>
        </Row>
        <Row className={styles.RewardsRowPaperNote}>
          <Col className={styles.RewardsPaperNoteWrapper}>
            <div className={styles.RewardsHandsImage}>
              <p className={styles.RewardsHandsText}>
                3. Поделиться <br /> сайтом с другом
              </p>
            </div>
          </Col>
        </Row>
        <Row className={styles.RewardsRowPazzle}>
          <Col className={styles.RewardsPazzleWrapper}>
            <div className={styles.RewardsPaperNoteSteps}></div>
            <div className={styles.RewardsPrizeImage}>
              <p className={styles.RewardsPrizeText}>
                4. Получить <br /> приз
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
