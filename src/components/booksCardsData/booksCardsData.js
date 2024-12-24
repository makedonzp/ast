import aliceFirst from "../../assets/alice_book.webp";
import buratino from "../../assets/treeman.webp";
import catHouse from "../../assets/catHouse.webp";
import snowQueen from "../../assets/snowQueen.webp";
import wizard from "../../assets/wizardIzumrudCity.webp";
import saltanKing from "../../assets/SaltanKingStory.webp";
import twelwe from "../../assets/twelweMon.webp";
import aliceSecond from "../../assets/aliceBookSecond.webp";
import storyes from "../../assets/storyes.webp";
export const booksCardsData = {
  books: [
    {
      id: 1,
      title: "Алиса в Стране Чудес",
      description: "Иллюстрации: М.Митрофанова",
      author: "Автор: Кэрролл Льюис",
      pictures: {
        first: aliceFirst,
        second: aliceFirst,
        third: aliceFirst,
      },
    },
    {
      id: 2,
      title: `Приключения Буратино, 
  или Золотой ключик`,
      description: "Иллюстрации: Л. Владимирского",
      author: "Автор: Толстой Алексей Николаевич",
      pictures: {
        first: buratino,
        second: buratino,
        third: buratino,
      },
    },
    {
      id: 3,
      title: `Кошкин дом`,
      description: `Иллюстрации: О. Ионайтис`,
      author: `Автор: Маршак Самуил Яковлевич`,
      pictures: {
        first: catHouse,
        second: catHouse,
        third: catHouse,
      },
    },
    {
      id: 4,
      title: `Снежная королева. Щелкунчик. Госпожа Метелица`,
      description: ``,
      author: `Авторы: Андерсен Ганс Христиан, Гофман Эрнст Теодор Амадей, Гримм Вильгельм, Гримм Якоб`,
      pictures: {
        first: snowQueen,
        second: snowQueen,
        third: snowQueen,
      },
    },
    {
      id: 5,
      title: `Волшебник Изумрудного города`,
      description: `Иллюстрации: В. Челака`,
      author: `Автор: Волков Александр Мелентьевич`,
      pictures: {
        first: wizard,
        second: wizard,
        third: wizard,
      },
    },
    {
      id: 6,
      title: `Сказка о царе Салтане`,
      description: `Иллюстрации: В. Челака`,
      author: `Автор: Пушкин Александр Сергеевич`,
      pictures: {
        first: saltanKing,
        second: saltanKing,
        third: saltanKing,
      },
    },
    {
      id: 7,
      title: `Двенадцать месяцев`,
      description: `Иллюстрации: В. Шварова и Е. Алмазовой`,
      author: `Автор: Маршак Самуил Яковлевич`,
      pictures: {
        first: twelwe,
        second: twelwe,
        third: twelwe,
      },
    },
    {
      id: 8,
      title: `Алиса в Зазеркалье`,
      description: `Иллюстрации: В. Шварова и Е. Алмазовой`,
      author: `Автор: Льютс Кэрролл`,
      pictures: {
        first: aliceSecond,
        second: aliceSecond,
        third: aliceSecond,
      },
    },
    {
      id: 9,
      title: `Сказки`,
      description: ``,
      author: `Автор: Сутеев Владимир Григорьевич`,
      pictures: {
        first: storyes,
        second: storyes,
        third: storyes,
      },
    },
  ],
};
