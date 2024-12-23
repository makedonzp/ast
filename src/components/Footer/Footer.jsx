import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container fluid className={styles.Footer}>
      <Container>
        <Row className={styles.ActiveRowBottom}>
          <Col className={styles.ActiveColBottom}>
            <div className={styles.ActiveContactsWrapper}>
              <p className={styles.ActiveContactsPhoneName}>Телефон</p>
              <p className={styles.ActiveContactsPhone}>8 (499) 951 60 00</p>
            </div>
            <div className={styles.ActiveEmailWrapper}>
              <p className={styles.ActiveEmailName}>E-mail</p>
              <p className={styles.ActiveEmail}>support@ast.ru</p>
            </div>
          </Col>
        </Row>
        <Row className={styles.ActiveRowBottomInfoCompany}>
          <Col className={styles.ActiveColBottomInfoCompany}>
            <Link to="/">
              <div className={styles.HeaderLogoImage}></div>
            </Link>
            <p className={styles.ActiveColBottomInfoCompanyName}>
              АСТ издательство
            </p>
          </Col>
          <Col className={styles.ActiveColBottomInfoListWrapper}>
            <ul className={styles.ActiveColBottomInfoList}>
              <li className={styles.ActiveColBottomInfoItem}>
                <Link className={styles.ActiveColBottomInfoLink} to={"/about"}>
                  О нас
                </Link>
              </li>
              <li className={styles.ActiveColBottomInfoItem}>
                <Link
                  className={styles.ActiveColBottomInfoLink}
                  to={"/magazine"}
                >
                  Магазины
                </Link>
              </li>
              <li className={styles.ActiveColBottomInfoItem}>
                <Link
                  className={styles.ActiveColBottomInfoLink}
                  to={"/support"}
                >
                  Поддержка
                </Link>
              </li>
            </ul>
          </Col>
          <Col className={styles.ActiveColBottomInfoSocialWrapper}>
            <div className={styles.HeaderSocialsWrapper}>
              <a
                className={styles.HeaderSocialsLink}
                href="https://vk.com/astmagazines"
              >
                <div className={styles.HeaderSocialsImageVk}></div>
              </a>
              <a
                className={styles.HeaderSocialsLink}
                href="https://wa.me/79200070058"
              >
                <div className={styles.HeaderSocialsImageWhatsapp}></div>
              </a>
              <a
                className={styles.HeaderSocialsLink}
                href="https://t.me/astmagazines"
              >
                <div className={styles.HeaderSocialsImageTelegram}></div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
