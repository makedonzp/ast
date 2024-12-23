import React from "react";
import styles from "./Header.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header() {
  return (
    <Container fluid className={styles.Header}>
      <Container className={styles.HeaderContainer}>
        <Row>
          <Col className={styles.HeaderLogo_and_nav}>
            <div className={styles.HeaderLinksWrapper}>
              <Link to="/">
                <div className={styles.HeaderLogoImage}></div>
              </Link>
              <Link className={styles.HeaderLink} to="/magazine">
                Магазины
              </Link>
              <Link className={styles.HeaderLink} to="/go-to-play">
                Онлайн-игра
              </Link>
            </div>
          </Col>
          <Col className={styles.HeaderNav}>
            <a className={styles.HeaderLink} href="mailto:support@ast.ru">
              support@ast.ru
            </a>
            <a className={styles.HeaderLink} href="tel:8 800 700-58-00">
              8 800 700-58-00
            </a>
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
      <BurgerMenu />
    </Container>
  );
}
