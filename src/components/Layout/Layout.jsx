import React from "react";
import styles from "./Layout.module.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}
