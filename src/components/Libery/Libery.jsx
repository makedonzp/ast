import React, { useState } from "react";
import styles from "./Libery.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookModal from "../BookModal/BookModal"; // Импортируем компонент модального окна
import bookbgr from "../../assets/book_bgr.webp";
import secongbgr from "../../assets/secongBook.webp";
import thirdbgr from "../../assets/third_bgr.webp";
import firstModalBgr from "../../assets/modal_bgr.webp";
import secondModalBgr from "../../assets/secondModalBgr.webp";
import alice from "../../assets/alice.gif";
import queen from "../../assets/queen.gif";
// import aliceVideoAbout from "../../assets/player__place.webp";
// import snowQueenAbout from "";

export default function Libery() {
  const [modalIsOpen, setModalIsOpen] = useState(false); // Состояние для управления модальным окном
  const [selectedBook, setSelectedBook] = useState(null); // Состояние для хранения данных о книге

  // Данные о книгах
  const books = [
    {
      id: 1,
      title: "«Алиса в Зазеркалье» ",
      description:
        "— продолжение знаменитой сказки «Алиса в Стране Чудес», в которой Льюис Кэрролл вновь ведёт и маленьких, и взрослых читателей в загадочный мир, полный сказки и волшебства. ",
      videoUrl:
        "https://www.dropbox.com/scl/fi/6b8lkcrk2gtyqeclmihp7/aliceVideoUrl.mp4?rlkey=f1mha6zymn5h1j7kgnedjwbog&st=7fdxnwco&dl=1",
      modadlBgr: firstModalBgr,
      bookBgr: bookbgr,
      maxWidth: 130, // Максимальная ширина в пикселях
      animation: alice,
      author: "Льюис Кэрролл",
    },
    {
      id: 2,
      title: "«Снежная королева.",
      description:
        " Щелкунчик. Госпожа Метелица» — переверните страницу — и вот уже сражение с мышами вместе со Щелкунчиком, прогулка вместе с Гердой, а служанка госпожи Метелицы взбивает подушки.",
      videoUrl:
        "https://www.dropbox.com/scl/fi/ujnyr84b6ba0c4yqa34fb/snowQueen.mp4?rlkey=fbt895cquf7zcu5yycsr9f87g&st=63yn3bd0&dl=1",
      modadlBgr: secondModalBgr,
      bookBgr: secongbgr,
      maxWidth: 85, // Максимальная ширина в пикселях,
      animation: queen,
      author: "Г. Андерсен",
    },
    {
      id: 3,
      title: "Книга 3",
      description: "Описание книги",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      bgrImg: "../../assets/boy_img.webp",
      bookBgr: thirdbgr,
      maxWidth: 85, // Максимальная ширина в пикселях
      animation: alice,
      author: "Александр Дудников",
    },
    {
      id: 4,
      title: "«Алиса в Зазеркалье» ",
      description:
        "— продолжение знаменитой сказки «Алиса в Стране Чудес», в которой Льюис Кэрролл вновь ведёт и маленьких, и взрослых читателей в загадочный мир, полный сказки и волшебства. ",
      videoUrl:
        "https://www.dropbox.com/scl/fi/6b8lkcrk2gtyqeclmihp7/aliceVideoUrl.mp4?rlkey=f1mha6zymn5h1j7kgnedjwbog&st=7fdxnwco&dl=1",
      modadlBgr: firstModalBgr,
      bookBgr: bookbgr,
      maxWidth: 130, // Максимальная ширина в пикселях
      animation: alice,
      author: "Льюис Кэрролл",
    },
    {
      id: 5,
      title: "«Снежная королева.",
      description:
        " Щелкунчик. Госпожа Метелица» — переверните страницу — и вот уже сражение с мышами вместе со Щелкунчиком, прогулка вместе с Гердой, а служанка госпожи Метелицы взбивает подушки.",
      videoUrl:
        "https://www.dropbox.com/scl/fi/ujnyr84b6ba0c4yqa34fb/snowQueen.mp4?rlkey=fbt895cquf7zcu5yycsr9f87g&st=63yn3bd0&dl=1",
      modadlBgr: secondModalBgr,
      bookBgr: secongbgr,
      maxWidth: 85, // Максимальная ширина в пикселях,
      animation: queen,
      author: "Г. Андерсен",
    },
    {
      id: 6,
      title: "Книга 3",
      description: "Описание книги",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      bgrImg: "../../assets/boy_img.webp",
      bookBgr: thirdbgr,
      maxWidth: 85, // Максимальная ширина в пикселях
      animation: alice,
      author: "Александр Дудников",
    },
  ];

  // Функция для открытия модального окна
  const openModal = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setSelectedBook(null);
    setModalIsOpen(false);
  };

  return (
    <Container fluid className={styles.Libery}>
      <Container>
        <Row>
          <Col>
            <h1 className={styles.Title}>Библиотека 3D-книг</h1>
          </Col>
        </Row>
        <Row className={styles.LiberyBooksRow}>
          {books.map((book) => (
            <Col
              key={book.id}
              className={styles.LiberyBooksCol}
              style={{
                backgroundImage: `url(${book.bookBgr})`, // Устанавливаем фон для каждой книги
                maxWidth: `${book.maxWidth}px`, // Устанавливаем максимальную ширину
              }}
            >
              <Link
                to="#"
                className={styles.LiberyBooksColLink}
                onClick={(e) => {
                  e.preventDefault(); // Предотвращаем переход по ссылке
                  openModal(book); // Открываем модальное окно с данными книги
                }}
              ></Link>
              <div className={styles.bookTextWrapper}>
                <p className={styles.LiberyBooksColAuthor}>{book.author}</p>
                <p className={styles.LiberyBooksColTitle}>{book.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid className={styles.StrokeContainer}>
        <Row className={styles.LiberyColStrokeRow}>
          <Col className={styles.LiberyColStroke}></Col>
          <Col className={styles.LiberyColLights}></Col>
        </Row>
      </Container>
      {/* Модальное окно */}
      <BookModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        book={selectedBook}
      />
    </Container>
  );
}
