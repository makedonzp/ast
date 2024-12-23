import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.BurgerMenuWrapper}>
      {/* Кнопка бургер-меню */}
      <div
        className={`${styles.BurgerMenu} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      ></div>

      {/* Меню */}
      <div
        className={`${styles.Menu} ${isOpen ? styles.MenuOpen : ""}`}
        onClick={toggleMenu} // Закрытие при клике на фон
      >
        <div
          className={styles.MenuContent}
          onClick={(e) => e.stopPropagation()} // Остановить закрытие при клике внутри
        >
          <div className={styles.HeaderLinksWrapper}>
            <Link className={styles.HeaderLinkBurger} to="/">
              <div className={styles.HeaderLogoImage}></div>
              <span>Издательство АСТ</span>
            </Link>

            <a className={styles.HeaderLink} href="mailto:support@ast.ru">
              Наша почта: support@ast.ru
            </a>
            <a className={styles.HeaderLink} href="tel:8 800 700-58-00">
              Наш телефон: 8 800 700-58-00
            </a>
          </div>
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
        </div>
      </div>
    </div>
  );
}
