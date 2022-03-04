'use strict';


// ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект)
// const temps = [14, -4, 25, 8, 11];   // В консоли будет набор отдельных чисел
// console.log(...temps);  //14 -4 25 8 11   // ✅ Распылим коллекцию элементов как отдельные аргументы

// Math.max() - позволяет найти самый большой из аргументов (чисел)
// console.log(Math.max(...temps)); // 25



// // ... (spread) позволяет создать копию массива или «склеить»
// // произвольное количество массивов в один новый.
// const temps = [14, -4, 25, 8, 11];
// const copyOfTemps = [...temps];  // Это точная, но независимая копия массива temps
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]


// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// ... Очередность добавления объектов имеет значение!
// свойства с одинаковыми ключами переписываются!
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // {propC: 50, propD: 20, propA: 5, propB: 10}


// ... Когда мы заранее не знаем сколько будет аргументов у функции можно использовать rest ...
// так как рест соберет их всех в один массив
// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// а можно собрать только часть аргументов в массивы
// function multiply(x, y, ...args) {
//   console.log(args); // массив всех аргументов
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);




// Деструктуризация объектов  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// // Деструктуризируем
// const { title, author, isPublic, rating, coverImage } = book;
// // тут мы по сути сокращаем эту запись 'console.log(book.author);' в такую
// console.log(author);
// // мы как бы говорим ко всему тому, что в фигурных скобках доставь спереди 'book.'

// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// console.log(message);



// При деструкторизации можно добавлять новые свойства
// (в которых сразу можно прописать ключ и значение)
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Добавим картинку обложки если её нет в объекте книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// // еще можно изменять имя переменной
// const firstBook = {
//   title: "The Last Kingdom",
// };
// const {
//   title: firstTitle,
// } = firstBook;
// console.log(firstTitle); // The Last Kingdom

// // и езе можно изменять имя и значение переменной (оно перезапишется)
// const Book = {
//   title: "Привяу!",
// };
// const {
//   title: name1 = "Котяу!",
// } = Book;
// console.log(name1); // The Last Kingdom


// Деструктуризация массивов   !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;
// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// При деструкторизации элементы можно пропускать.
// const rgb = [200, 100, 255];
// const [ , , blue] = rgb;
// console.log(`Blue: ${blue}`); // "Blue: 255"
// console.log(rgb[rgb.length-1]);


// Паттерн «Объект параметров»  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// вместо такого вида объявления и вызова функции, где хрен размеберешь что такое 10283, 8.38
// function doStuffWithBook(downloads, rating) {
//   console.log(downloads);
//   console.log(rating);
// }
// doStuffWithBook(10283, 8.38);



// Используем такой вид, где все наглядно расписано
// function doStuffWithBook(book) {
//   const {downloads, rating} = book;  // деструктуризировали объект чтобы меньше писать
//   console.log(downloads);
//   console.log(rating);
// }
// doStuffWithBook({
//   downloads: 10283,
//   rating: 8.38,
// });





