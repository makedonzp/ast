import React from "react";
import styles from "./Layout.module.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import GoToPlayPage from "../GoToPlayPage/GoToPlayPage";
import ShineEffect from "../ShineEffect/ShineEffect";

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/go-to-play" element={<GoToPlayPage />} />{" "}
        {/* Добавленный маршрут */}
      </Routes>
      <ShineEffect />
    </div>
  );
}
