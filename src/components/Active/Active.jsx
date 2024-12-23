import React from "react";
import styles from "./Active.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Active() {
  return (
    <Container fluid className={styles.Active}>
      <Container className={styles.ActiveContainer}>
        <Row className={styles.ActiveRow}>
          <Col className={styles.ActiveColTop}>
            <div className={styles.TitleWrapper}>
              <h1 className={styles.Title}>Мы любим активных</h1>
              <p className={styles.Subtitle}>
                Будьте всегда в курсе новых событий
              </p>
            </div>
            <div className={styles.wrapper}>
              <Link to="https://vk.com" className={styles.ActiveSocialWrapper}>
                <div className={styles.ActiveSocialImage}></div>
                <p className={styles.ActiveSocialText}>
                  Книги. Издательство АСТ
                </p>
              </Link>
              <div className={styles.ActiveButtonWrapper}>
                <button className={styles.ActiveButton}>
                  Подписаться на группу
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
