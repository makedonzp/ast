import React from "react";
import styles from "./Libery.module.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Libery() {
  return (
    <Container fluid className={styles.Libery}>
      <Container>
        <Row>
          <Col>
            <h1>Библиотека 3D-книг</h1>
          </Col>
        </Row>
        <Row>
          <Col className={styles.LiberyColStroke}></Col>
        </Row>
      </Container>
    </Container>
  );
}
