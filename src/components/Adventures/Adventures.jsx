import React, { useRef, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Adventures.module.css";
import { booksCardsData } from "../../components/booksCardsData/booksCardsData";
// import preview from "../../assets/preview.mp4";
import playIcon from "../../assets/play-icon.png"; // Иконка плей
import previewImg from "../../assets/player__place.png";

export default function Adventures() {
  const [isPlaying, setIsPlaying] = useState(false); // Состояние для проигрывания видео
  const [activeIndexes, setActiveIndexes] = useState({}); // Состояние для хранения активного индекса картинки
  const [activeCardIndex, setActiveCardIndex] = useState(0); // Активная карточка
  const touchStartX = useRef(null); // Сохраняем начальную точку касания
  const cardContainerRef = useRef(null); // Ссылка на контейнер с карточками
  const [filter, setFilter] = useState("books"); // Состояние для фильтра

  // Создаем массив ссылок для каждой карточки
  const containerRefs = useRef([]);

  const handlePlayClick = () => {
    const video = document.getElementById("myVideo"); // Получаем элемент видео
    if (video) {
      if (video.paused) {
        video.play(); // Запускаем видео
        setIsPlaying(true); // Устанавливаем состояние "играет"
      } else {
        video.pause(); // Останавливаем видео
        setIsPlaying(false); // Устанавливаем состояние "пауза"
      }
    }
  };

  // Извлекаем массив books из объекта booksCardsData
  const books = booksCardsData.books;

  // Фильтрация книг
  const filteredBooks = filter === "books" ? books : [...books].reverse();

  // Обработчик клика на точку для картинок
  const handleDotClick = (index, cardIndex, pictureWidth, containerWidth) => {
    if (containerWidth === 0 || pictureWidth === 0) return;

    // Рассчитываем смещение с учетом центрального выравнивания
    const offset = index * pictureWidth - (containerWidth - pictureWidth) / 2;

    console.log(
      `[handleDotClick] Точка ${index} нажата для карточки ${cardIndex}. Смещение: ${offset}, Ширина контейнера: ${containerWidth}, Ширина картинки: ${pictureWidth}`
    );

    // Обновляем состояние
    setActiveIndexes((prevIndexes) => ({
      ...prevIndexes,
      [cardIndex]: index, // Обновляем активный индекс для конкретной карточки
    }));

    // Прокручиваем контейнер до нужной позиции
    const container = containerRefs.current[cardIndex];
    if (container) {
      container.scrollTo({
        left: offset,
        behavior: "smooth", // Плавная прокрутка
      });
    }
  };

  // Обработчик события scroll для обновления активного индекса картинки
  const handleScroll = (
    cardIndex,
    scrollLeft,
    pictureWidth,
    containerWidth
  ) => {
    if (containerWidth === 0 || pictureWidth === 0) return;

    // Рассчитываем активный индекс с учетом центрального выравнивания
    const activeIndex = Math.round(
      (scrollLeft + (containerWidth - pictureWidth) / 2) / pictureWidth
    );

    console.log(
      `[handleScroll] Карточка ${cardIndex}. Скролл: ${scrollLeft}, Активный индекс: ${activeIndex}, Ширина контейнера: ${containerWidth}, Ширина картинки: ${pictureWidth}`
    );

    setActiveIndexes((prevIndexes) => ({
      ...prevIndexes,
      [cardIndex]: activeIndex, // Обновляем активный индекс для конкретной карточки
    }));
  };

  // Обработка свайпов для картинок
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX; // Сохраняем начальную точку касания
    console.log(
      `[handleTouchStart] Начальная точка касания: ${touchStartX.current}`
    );
  };

  const handleTouchMove = (e, cardIndex, pictureWidth, containerWidth) => {
    if (!touchStartX.current) return;

    const touchEndX = e.touches[0].clientX; // Конечная точка касания
    const deltaX = touchStartX.current - touchEndX; // Разница между начальной и конечной точками

    console.log(
      `[handleTouchMove] Карточка ${cardIndex}. Дельта: ${deltaX}, Конечная точка: ${touchEndX}`
    );

    const container = containerRefs.current[cardIndex];
    if (!container) return;

    if (deltaX > 50) {
      // Свайп влево (вперед)
      container.scrollBy({
        left: pictureWidth,
        behavior: "smooth",
      });
      touchStartX.current = null; // Сбрасываем начальную точку
    } else if (deltaX < -50) {
      // Свайп вправо (назад)
      container.scrollBy({
        left: -pictureWidth,
        behavior: "smooth",
      });
      touchStartX.current = null; // Сбрасываем начальную точку
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null; // Сбрасываем начальную точку при окончании касания
    console.log(`[handleTouchEnd] Касание завершено`);
  };

  // Обработчик клика на точку для карточек
  const handleCardDotClick = (index) => {
    const cardWidth = 300; // Ширина карточки
    const gap = 60; // Gap между карточками
    const offset = index * (cardWidth + gap); // Смещение для прокрутки с учетом gap
    cardContainerRef.current.scrollTo({
      left: offset,
      behavior: "smooth", // Плавная прокрутка
    });
    setActiveCardIndex(index); // Обновляем активную карточку
  };

  // Обработчик прокрутки для карточек
  const handleCardScroll = () => {
    const cardWidth = 300; // Ширина карточки
    const gap = 60; // Gap между карточками
    const scrollLeft = cardContainerRef.current.scrollLeft; // Текущее смещение
    const activeIndex = Math.round(scrollLeft / (cardWidth + gap)); // Активный индекс с учетом gap
    setActiveCardIndex(activeIndex); // Обновляем активную карточку
  };

  // При монтировании компонента инициализируем состояние для каждой карточки
  useEffect(() => {
    const initialIndexes = books.reduce((acc, _, index) => {
      acc[index] = 0; // Изначально активный индекс 0
      return acc;
    }, {});

    setActiveIndexes(initialIndexes);
  }, [books]);

  const handleFilterBooks = () => {
    setFilter("books");
  };

  const handleFilterNew = () => {
    setFilter("new");
  };

  return (
    <Container fluid className={styles.Adventures}>
      <Container className={styles.AdventuresContainer}>
        <Row>
          <Col>
            <h1>О серии</h1>
          </Col>
        </Row>
        <Row className={styles.AdventuresColPlayerWrapper}>
          <Col className={styles.AdventuresColPlayer}>
            <div
              className={styles.videoWrapper}
              onClick={handlePlayClick} // Добавляем обработчик клика на контейнер
            >
              {/* <video id="myVideo" className={styles.video} loop controls>
                <source src={preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              {/* Кнопка плей */}
              <img src={previewImg} alt="" />
              <button
                className={styles.playButton}
                onClick={handlePlayClick}
                style={{
                  opacity: isPlaying ? 0 : 1, // Скрываем кнопку, если видео играет
                  pointerEvents: isPlaying ? "none" : "auto", // Отключаем клики, если видео играет
                }}
              >
                <img src={playIcon} alt="Play" /> {/* Иконка плей */}
              </button>
            </div>
          </Col>
          <Col className={styles.AdventuresColTextWratter}>
            <div className={styles.AdventureText}>
              <div className={styles.AdventureTitle}>
                <h3>3D-сказки</h3>
                <p>
                  Путешествие в мир любимой сказки! Внутри ждет настоящий
                  сюрприз — объемные картинки -панорамы от лучших художников
                  -конструкторов детской книги.
                </p>
              </div>
              <div className={styles.AdventureSocialWrapper}>
                <p className={styles.AdventureSocialText}>
                  Мы есть ещё в продаже:
                </p>
                <div className={styles.AdventureMarketPlaces}>
                  <a href="https://www.ozon.ru/">
                    <div
                      className={
                        styles.AdventureMarketPlace + " " + styles.OzoneMarket
                      }
                    ></div>
                  </a>
                  <a href="http://wildberries.ru/">
                    <div
                      className={
                        styles.AdventureMarketPlace + " " + styles.WBeMarket
                      }
                    ></div>
                  </a>

                  <a href="https://www.chitai-gorod.ru/">
                    <div
                      className={
                        styles.AdventureMarketPlace +
                        " " +
                        styles.ReedCityMarket
                      }
                    ></div>
                  </a>
                  <a href="https://www.bookvoed.ru/">
                    <div
                      className={
                        styles.AdventureMarketPlace +
                        " " +
                        styles.LetterEaterMarket
                      }
                    ></div>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={styles.AdventuresRowFilter}>
          <Col>
            <button
              className={`${styles.FilterButton} ${
                filter === "books" ? styles.ActiveFilterButton : ""
              }`}
              onClick={handleFilterBooks}
            >
              Книги
            </button>
            <button
              className={`${styles.FilterButton} ${
                filter === "new" ? styles.ActiveFilterButton : ""
              }`}
              onClick={handleFilterNew}
            >
              Новинки
            </button>
          </Col>
        </Row>
        <Row
          className={styles.AdventuresRowCards}
          ref={cardContainerRef}
          onScroll={handleCardScroll}
        >
          {/* Используем массив books для отображения карточек */}
          {filteredBooks.map((card, cardIndex) => {
            const pictures = Object.values(card.pictures); // Получаем массив картинок
            const activeIndex = activeIndexes[cardIndex] || 0; // Получаем активный индекс для данной карточки
            const pictureWidth = 266; // Ширина картинки

            return (
              <Col className={styles.Card} key={card.id}>
                <div className={styles.wrapper}>
                  <div className={styles.CardImageWrapper}>
                    {/* Отображаем все картинки с помощью map() */}
                    <div
                      className={styles.CardImagesContainer}
                      ref={(el) => (containerRefs.current[cardIndex] = el)} // Привязываем ссылку к контейнеру
                      onScroll={(e) =>
                        handleScroll(
                          cardIndex,
                          e.currentTarget.scrollLeft,
                          pictureWidth,
                          containerRefs.current[cardIndex]?.offsetWidth || 300
                        )
                      } // Обработчик скролла
                      onTouchStart={handleTouchStart} // Обработка начала касания
                      onTouchMove={(e) =>
                        handleTouchMove(
                          e,
                          cardIndex,
                          pictureWidth,
                          containerRefs.current[cardIndex]?.offsetWidth || 300
                        )
                      } // Обработка движения касания
                      onTouchEnd={handleTouchEnd} // Обработка окончания касания
                    >
                      {pictures.map((picture, index) => (
                        <div
                          key={index}
                          className={styles.CardImage}
                          style={{ backgroundImage: `url(${picture})` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  {/* Точки для переключения */}
                  <div className={styles.DotsContainer}>
                    {pictures.map((_, index) => {
                      return (
                        <div
                          key={index}
                          className={`${styles.Dot} ${
                            index === activeIndex ? styles.ActiveDot : ""
                          }`}
                          onClick={() =>
                            handleDotClick(
                              index,
                              cardIndex,
                              pictureWidth,
                              containerRefs.current[cardIndex]?.offsetWidth ||
                                300
                            )
                          }
                        ></div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.CardBottomSection}>
                  <div className={styles.text__wrapper}>
                    <p className={styles.CardTitle}>{card.title}</p>
                    <p className={styles.CardDesscription}>
                      {card.description}
                    </p>
                  </div>
                  <button className={styles.CardButton}>Купить</button>
                </div>
              </Col>
            );
          })}
        </Row>
        {/* Точки управления для блока карточек */}
        <div
          className={styles.DotsContainer + " " + styles.DotsContainerBottom}
        >
          {filteredBooks.map((_, index) => (
            <div
              key={index}
              className={`${styles.Dot} ${
                index === activeCardIndex ? styles.ActiveDot : ""
              }`}
              onClick={() => handleCardDotClick(index)}
            ></div>
          ))}
        </div>
      </Container>
    </Container>
  );
}
