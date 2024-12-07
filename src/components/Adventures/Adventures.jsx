import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Adventures.module.css";

export default function Adventures() {
  return (
    <Container fluid className={styles.Adventures}>
      <Container className={styles.AdventuresContainer}>
        <Row>
          <Col>
            <h1>О серии</h1>
          </Col>
        </Row>
        <Row>
          <Col className={styles.AdventuresColPlayer}></Col>
          <Col className={styles.AdventuresColTextWratter}>
            <div className={styles.AdventureText}>
              <div className={styles.AdventureTitle}>
                <h3>3D-сказки</h3>
                <p>
                  Путешествие в мир любимой <br /> сказки! Внутри ждет настоящий{" "}
                  <br />
                  сюрприз — объемные картинки <br />
                  -панорамы от лучших художников <br />
                  -конструкторов детской книги.{" "}
                </p>
              </div>
              <div className={styles.AdventureSocialWrapper}>
                <p className={styles.AdventureSocialText}>
                  Мы есть ещё в продаже:
                </p>
                <div className={styles.AdventureMarketPlaces}>
                  <a href="https://www.ozon.ru/">
                    <div
                      className={
                        styles.AdventureMarketPlace + " " + styles.OzoneMarket
                      }
                    ></div>
                  </a>
                  <a href="http://wildberries.ru/">
                    <div
                      className={
                        styles.AdventureMarketPlace + " " + styles.WBeMarket
                      }
                    ></div>
                  </a>

                  <a href="https://www.chitai-gorod.ru/">
                    <div
                      className={
                        styles.AdventureMarketPlace +
                        " " +
                        styles.ReedCityMarket
                      }
                    ></div>
                  </a>
                  <a href="https://www.bookvoed.ru/">
                    <div
                      className={
                        styles.AdventureMarketPlace +
                        " " +
                        styles.LetterEaterMarket
                      }
                    ></div>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={styles.AdventuresRowFilter}>
          <Col>Фильтр</Col>
        </Row>
        <Row className={styles.AdventuresRowCards}>
          <Col>Карточки</Col>
        </Row>
      </Container>
    </Container>
  );
}
