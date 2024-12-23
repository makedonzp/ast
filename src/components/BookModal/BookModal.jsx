import React, { useState, useEffect, useRef } from "react";
import styles from "./BookModal.module.css";

const BookModal = ({ isOpen, onClose, book }) => {
  const [activePage, setActivePage] = useState(0);
  const touchStartX = useRef(null); // Сохраняем начальную точку касания

  // Обработка прокрутки колесом мыши
  const handleWheelScroll = (e) => {
    if (e.deltaY > 0 && activePage < 2) {
      setActivePage(activePage + 1); // Скролл вперед
    } else if (e.deltaY < 0 && activePage > 0) {
      setActivePage(activePage - 1); // Скролл назад
    }
  };

  // Обработка свайпов
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX; // Сохраняем начальную точку касания
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;

    const touchEndX = e.touches[0].clientX; // Конечная точка касания
    const deltaX = touchStartX.current - touchEndX; // Разница между начальной и конечной точками

    if (deltaX > 50 && activePage < 2) {
      // Свайп влево (вперед)
      setActivePage(activePage + 1);
      touchStartX.current = null; // Сбрасываем начальную точку
    } else if (deltaX < -50 && activePage > 0) {
      // Свайп вправо (назад)
      setActivePage(activePage - 1);
      touchStartX.current = null; // Сбрасываем начальную точку
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null; // Сбрасываем начальную точку при окончании касания
  };

  // Отключение прокрутки основного контента
  useEffect(() => {
    if (isOpen) {
      // Блокируем прокрутку основного контента
      document.body.style.overflow = "hidden";
    } else {
      // Восстанавливаем прокрутку основного контента
      document.body.style.overflow = "auto";
    }

    // Очистка при размонтировании
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Закрытие модального окна при нажатии на фон
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen || !book) return null; // Проверяем, что модальное окно открыто и книга выбрана

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheelScroll} // Обработка прокрутки колесом мыши
        onTouchStart={handleTouchStart} // Обработка начала касания
        onTouchMove={handleTouchMove} // Обработка движения касания
        onTouchEnd={handleTouchEnd} // Обработка окончания касания
      >
        {/* Крестик для закрытия */}
        <button className={styles.closeButton} onClick={onClose}></button>

        {/* Контейнер для страниц */}
        <div
          className={styles.pagesContainer}
          style={{
            backgroundImage: `url(${book.modadlBgr})`,
            transform: `translateX(-${activePage * (100 / 3)}%)`,
          }} // Устанавливаем фон из массива
        >
          {/* Страница 1: Описание книги */}
          <div className={styles.page}>
            <div
              className={styles.pageContainer}
              style={{ backgroundImage: `url(${book.bgrImg})` }} // Устанавливаем фон из массива
            >
              <h2 className={styles.pageTitle}>
                <strong className={styles.pageTitleSpan}>{book.title}</strong>{" "}
                {book.description}
              </h2>
            </div>
            <button className={styles.buyButton}>Купить</button>
          </div>

          {/* Страница 2: Анимация (статический блок) */}
          <div className={styles.page}>
            <div className={styles.animationPlaceholder}>
              <img className={styles.animation} src={book.animation} alt="" />
            </div>
          </div>

          {/* Страница 3: Видео */}
          <div className={styles.page}>
            <video className={styles.video} controls>
              <source src={book.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className={styles.prizeButton}>Получить приз</button>
          </div>
        </div>

        {/* Кнопки навигации */}
        <button
          className={styles.prevButton}
          onClick={() => setActivePage(activePage - 1)}
          disabled={activePage === 0}
        >
          <div className={styles.prevImg}></div>
        </button>
        <button
          className={styles.nextButton}
          onClick={() => setActivePage(activePage + 1)}
          disabled={activePage === 2}
        >
          <div className={styles.nextImg}></div>
        </button>

        {/* Пагинация (точки) */}
        <div className={styles.pagination}>
          {[0, 1, 2].map((pageIndex) => (
            <button
              key={pageIndex}
              className={`${styles.paginationDot} ${
                activePage === pageIndex ? styles.activeDot : ""
              }`}
              onClick={() => setActivePage(pageIndex)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookModal;
