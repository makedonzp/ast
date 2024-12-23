import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Series.module.css";

export default function Series() {
  return (
    <Container fluid className={styles.Series}>
      <Container className={styles.SeriesContainer}>
        <Row className={styles.SeriesRow}>
          <Col className={styles.SeriesCol}>
            <div className={styles.Card}>
              <div className={styles.SeriesTitleWrapper}>
                <h1 className={styles.SeriesTitle}>Серия книг </h1>
                <p className={styles.SeriesSubtitle}>
                  «Самая удивительная книга с объемными картинками» для детей
                  3-6 лет
                </p>
              </div>
              <div className={styles.SeriesInformationWrapper}>
                <div className={styles.SeriesInformation + " " + styles.First}>
                  <h3 className={styles.SeriesInformationNumber}>250 000+</h3>
                  <p className={styles.SeriesInformationText}>
                    маленьких читателей <br /> по всей стране
                  </p>
                </div>
                <div className={styles.SeriesInformation + " " + styles.Second}>
                  <h3 className={styles.SeriesInformationNumber}>10</h3>
                  <p className={styles.SeriesInformationText}>
                    книг всего <br /> в этой серии
                  </p>
                </div>
                <div className={styles.SeriesInformation + " " + styles.Third}>
                  <h3 className={styles.SeriesInformationNumber}>100 000+</h3>
                  <p className={styles.SeriesInformationText}>
                    общий тираж <br /> книг в серии{" "}
                  </p>
                </div>
                <div className={styles.SeriesInformation + " " + styles.Fourth}>
                  <h3 className={styles.SeriesInformationNumber}>13</h3>
                  <p className={styles.SeriesInformationText}>
                    авторов <br /> сказок
                  </p>
                </div>
              </div>
              <div className={styles.SeriesCardTextWrapper}>
                <h5 className={styles.SeriesCardText}>
                  Мудрые и весёлые сказки воспитывают лучшие качества,
                  заставляют подумать, смешат, развивают воображение
                  и эмоциональный интеллект
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
