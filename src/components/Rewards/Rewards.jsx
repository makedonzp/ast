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
            <div className={styles.RewardsHandsImage}>
              <p className={styles.RewardsHandsText}>
                2. Поделиться <br /> сайтом с другом
              </p>
            </div>
          </Col>
        </Row>
        <Row className={styles.RewardsRowPaperNote}>
          <Col className={styles.RewardsPaperNoteWrapper}>
            <div className={styles.RewardsPaperNoteImage}>
              <p className={styles.RewardsPaperNoteText}>
                3. Оставить <br /> отзыв на книгу
              </p>
            </div>
            <div className={styles.RewardsPaperNoteSteps}></div>
          </Col>
        </Row>
        <Row className={styles.RewardsRowPazzle}>
          <Col className={styles.RewardsPazzleWrapper}>
            <div className={styles.RewardsPazzleImage}>
              <p className={styles.RewardsPazzleText}>
                4. Выиграть <br />в мини-игру
              </p>
            </div>
          </Col>
        </Row>
        <Row className={styles.RewardsRowPrize}>
          <Col className={styles.RewardsPrizeWrapper}>
            <div className={styles.RewardsPrizeImage}>
              <p className={styles.RewardsPrizeText}>
                5. Получить <br /> приз
              </p>
            </div>
            <div className={styles.RewardsPrizeSteps}></div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
