import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./WhyBlock.module.css";

export default function WhyBlock() {
  return (
    <Container fluid className={styles.WhyBlock}>
      <Container className={styles.WhyBlockContainer}>
        <Row>
          <Col>
            <h1 className={styles.WhyBlockTitle}>Почему это важно?</h1>
            <p className={styles.WhyBlockText}>
              Объёмные картинки стимулируют ребёнка к творчеству, позволяют ему
              самостоятельно дополнять историю и вдыхать жизнь в персонажей —
              то, что обычные книги в столь юном возрасте не могут дать ребёнку
            </p>
          </Col>
        </Row>
        <Row className={styles.WhyBlockRowImages}>
          <Col className={styles.WhyBlockColBoy}></Col>
          <Col className={styles.WhyBlockColGirl}></Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.Advantages}>
              <div
                className={styles.AdvantagesItem + " " + styles.BookItem}
              ></div>
              <div
                className={styles.AdvantagesItem + " " + styles.StarsItem}
              ></div>
              <div
                className={styles.AdvantagesItem + " " + styles.StrokeItem}
              ></div>
              <div
                className={styles.AdvantagesItem + " " + styles.ThingsItem}
              ></div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
