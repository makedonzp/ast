import React from "react";
import styles from "./Layout.module.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import GoToPlayPage from "../GoToPlayPage/GoToPlayPage";
import ShineEffect from "../ShineEffect/ShineEffect";
import About from "../About/About";
import Magazine from "../Magazine/Magazine";
import Support from "../Support/Support";
import AdminPanel from "../AdminPanel/AdminPanel";
import Login from "../Login/Login";

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/go-to-play" element={<GoToPlayPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/support" element={<Support />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ShineEffect />
    </div>
  );
}
