import React from "react";
import styles from "./MainPage.module.css";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Series from "../Series/Series";
import WhyBlock from "../WhyBlock/WhyBlock";

export default function MainPage() {
  return (
    <Container fluid className={styles.MainPage}>
      <Header />
      <Main />
      <Series />
      <WhyBlock />
    </Container>
  );
}
