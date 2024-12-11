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
              <p className={styles.Subtitle}>Расскажите друзьям про нас</p>
            </div>
            <div>
              <Link to="https://vk.com" className={styles.ActiveSocialWrapper}>
                <div className={styles.ActiveSocialImage}></div>
                <p className={styles.ActiveSocialText}>
                  Книги. Издательство АСТ
                </p>
              </Link>
            </div>
            <div className={styles.ActiveButtonWrapper}>
              <button className={styles.ActiveButton}>
                Подписаться на группу
              </button>
            </div>
          </Col>
        </Row>
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
            <div className={styles.ActiveBottomInfoSocialWrapper}>
              <a
                className={styles.ActiveSocialsLink}
                href="https://wa.me/79200070058"
              >
                <div className={styles.ActiveSocialsImageWhatsapp}></div>
              </a>
              <a
                className={styles.ActiveSocialsLink}
                href="https://t.me/astmagazines"
              >
                <div className={styles.ActiveSocialsImageTelegram}></div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
