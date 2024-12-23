import React, { useRef } from "react";
import styles from "./Reviews.module.css";
import { Col, Container, Row } from "react-bootstrap";
import RatingStars from "../RatingStars/RatingStars";

export default function Reviews() {
  const reviewsData = [
    {
      id: 1,
      rating: 5,
      title: `Снежная королева. Щелкунчик. Госпожа Метелица`,
      text: `Даже я не удержалась и с таким удовольствием разглядывала каждую страницу вместе с сыном. 
          Эти книги — настоящие произведения искусства! Они помогают детям воспринимать чтение не как обязанность, а как самое увлекательное путешествие.`,
      name: "Надежда",
      city: "Пермь",
    },
    {
      id: 2,
      rating: 5,
      title: `Волшебник 
      Изумрудного города`,
      text: `Когда Илья открыл первую панораму, его глаза загорелись от восторга! 
          Он не просто слушает сказку — он словно путешествует по ней. Эти книги не дают заскучать и развивают воображение, как никакие другие.`,
      name: "Василиса",
      city: "Калуга",
    },
    {
      id: 3,
      rating: 4,
      title: `Алиса в Зазеркалье`,
      text: `Эта серия — находка для любого учителя или родителя. Объёмные картинки и простое изложение классических сказок делают чтение настоящим праздником. Дети 
не просто слушают — они переживают каждую историю!`,
      name: "Мирослав",
      city: "Москва",
    },
    {
      id: 4,
      rating: 4,
      title: `Сказка о царе Салтане`,
      text: `Каждая страница этой книги — новое открытие! Дочь в восторге от того, как оживают персонажи на панорамных разворотах. Эти сказки учат доброте, справедливости и дружбе, делая чтение увлекательным и познавательным.`,
      name: "Оксана",
      city: "Нижний Новгород",
    },
    {
      id: 5,
      rating: 5,
      title: `Буратино`,
      text: `Поучительная история о маленьком, но очень любимом персонаже. Эти сказки учат доброте, справедливости и дружбе, делая чтение увлекательным и познавательным.`,
      name: "Виктор",
      city: "Саратов",
    },
    {
      id: 6,
      rating: 5,
      title: `Снежная королева. Щелкунчик. Госпожа Метелица`,
      text: `Даже я не удержалась и с таким удовольствием разглядывала каждую страницу вместе с сыном. 
            Эти книги — настоящие произведения искусства! Они помогают детям воспринимать чтение не как обязанность, а как самое увлекательное путешествие.`,
      name: "Надежда",
      city: "Пермь",
    },
    {
      id: 7,
      rating: 5,
      title: `Волшебник 
        Изумрудного города`,
      text: `Когда Илья открыл первую панораму, его глаза загорелись от восторга! 
            Он не просто слушает сказку — он словно путешествует по ней. Эти книги не дают заскучать и развивают воображение, как никакие другие.`,
      name: "Василиса",
      city: "Калуга",
    },
    {
      id: 8,
      rating: 4,
      title: `Алиса в Зазеркалье`,
      text: `Эта серия — находка для любого учителя или родителя. Объёмные картинки и простое изложение классических сказок делают чтение настоящим праздником. Дети 
  не просто слушают — они переживают каждую историю!`,
      name: "Мирослав",
      city: "Москва",
    },
    {
      id: 9,
      rating: 4,
      title: `Сказка о царе Салтане`,
      text: `Каждая страница этой книги — новое открытие! Дочь в восторге от того, как оживают персонажи на панорамных разворотах. Эти сказки учат доброте, справедливости и дружбе, делая чтение увлекательным и познавательным.`,
      name: "Оксана",
      city: "Нижний Новгород",
    },
    {
      id: 10,
      rating: 5,
      title: `Буратино`,
      text: `Поучительная история о маленьком, но очень любимом персонаже. Эти сказки учат доброте, справедливости и дружбе, делая чтение увлекательным и познавательным.`,
      name: "Виктор",
      city: "Саратов",
    },
  ];

  const scrollerRef = useRef(null);

  // Прокрутка на фиксированное расстояние (370px)
  const scrollTo = (direction) => {
    const container = scrollerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -380 : 380;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container fluid className={styles.Reviews}>
        <Row>
          <Col>
            <h1 className={styles.ReviewsTitle}>Отзывы</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.ReviewsCardsWrapper} ref={scrollerRef}>
              <div className={styles.ReviewsCardsScroller}>
                {reviewsData.map((review) => (
                  <div className={styles.ReviewsCards} key={review.id}>
                    <div className={styles.ReviewsCardsRaiting}>
                      <RatingStars rating={review.rating} />
                      <div className={styles.ReviewsCardsText}>
                        <h2>{review.title}</h2>
                        <p>{review.text}</p>
                      </div>
                    </div>
                    <div className={styles.ReviewsCardsAuthor}>
                      <div className={styles.ReviewsCardsAuthorImage}></div>
                      <h3>{review.name}</h3>
                      <p>{review.city}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.ReviewsButtons}>
        <Row>
          <Col>
            <div className={styles.ReviewsControls}>
              <button
                className={styles.ReviewsControlButton}
                onClick={() => scrollTo("left")}
              >
                {"<"} {/* Левая кнопка */}
              </button>
              <button
                className={styles.ReviewsControlButton}
                onClick={() => scrollTo("right")}
              >
                {">"} {/* Правая кнопка */}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
