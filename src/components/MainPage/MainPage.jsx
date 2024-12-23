import React from "react";
import styles from "./MainPage.module.css";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Series from "../Series/Series";
import WhyBlock from "../WhyBlock/WhyBlock";
import Libery from "../Libery/Libery";
import Adventures from "../Adventures/Adventures";
import Rewards from "../Rewards/Rewards";
import Reviews from "../Reviews/Reviews";
import Active from "../Active/Active";
import Footer from "../Footer/Footer";

export default function MainPage() {
  return (
    <Container fluid className={styles.MainPage}>
      <Header />
      <Main />
      <Series />
      <WhyBlock />
      <Libery />
      <Adventures />
      <Rewards />
      <Reviews />
      <Active />
      <Footer />
    </Container>
  );
}
