import React from "react";
import styles from "./MoreInfo.module.css";
import { Col, Container, Row } from "react-bootstrap";

export default function MoreInfo() {
  return (
    <Container fluid className={styles.MoreInfo}>
      <Container className={styles.MoreInfoContainer}>
        <Row className={styles.MoreInfoRow}>
          <Col md={7} className={styles.MoreInfoCol}>
            <div className={styles.PinkBgrCard}>
              <h3 className={styles.MoreInfoTitle}>
                Узнайте первыми о выгодных предложениях и акциях{" "}
              </h3>
              <p className={styles.MoreInfoText}>
                Оставьте свой e-mail и подпишитесь на полезную рассылку (без
                спама, только выгодные предложения)
              </p>
              <div className={styles.FormInputWrapper}>
                <input
                  type="email"
                  name="form"
                  id="form-sending"
                  placeholder="Заполнить e-mail"
                  className={styles.MoreInfoInput}
                />
                <button className={styles.MoreInfoButton}>Отправить</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
