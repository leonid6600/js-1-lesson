'use strict';


// ОБЪЕКТЫ   !!!!!!
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3


// Обращение к свойствам объекта
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// console.log(book.title);
// console.log(book.genres);


// Обращение к вложенным свойствам объекта
// const propName = "name";
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   [propName]: "Генри Сибола",  // так вставляется объект, имя которого изначального неопределено
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//     hobbies: ["swiming", "music", "sci-fi"],
//   },
// };
// console.log(user.location.country);
// console.log(user.location.hobbies[1]);
// console.log(user.name);
// console.log(user);




// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }


/* 
1. Напиши скрипт, который, для объекта user, последовательно:
добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате 
ключ:значение используя Object.keys() и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const objKeys = Object.keys(user);

// // for (const key of objKeys) {
// //   console.log(`${key}:${user[key]}`);
// // }

// // console.log(user);

// /**
//  * 2. У нас есть объект, в котором хранятся зарплаты нашей команды.
//  * Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
//  * Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
//  *
//  */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// function getSalariesSum(obj) {
//   const objVals = Object.values(obj);
//   if (objVals.length === 0) return 0;
//   let sum = 0;
//   for (const val of objVals) {
//     sum += val;
//   }
//   return sum;
// }

// // console.log(getSalariesSum(salaries));

// /* 

// 3. Напишите ф-цию calcTotalPrice(stones, stoneName), которая 
// принимает массив обьектов и строку с названием камня. 
// Ф-ция считает и возвращает общую стоимость камней с таким именем, 
// ценой и количеством из обьекта

// */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 }
// ];

// function calcTotalPrice(stones, stoneName) {
//   if (stones.length === 0) return;
//   if (!stoneName) return;
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// }
// // console.log(calcTotalPrice(stones, "Сапфир"));







// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// this - это способ доступа к методам (функциям, циклам и т.д.)
// храянщимся в свойствах объекта
// Значением this будет объект перед «точкой», то есть объект который вызвал этот метод

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   }
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}



// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]

// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");

// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']

// bookShelf.removeBook("The Mist");

// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']






// /**
//  * 4. Для объекта garage написать функцию addCar и removeCar
//  *
//  */

// const garage = {
//   cars: [],
//   addCar(carName) {
//     // console.log(typeof this);
//     this.cars.push(carName);
//   },
//   removeCar(carName) {
//     const index = this.cars.indexOf(carName);
//     if (index !== -1) {
//       this.cars.splice(index, 1);
//     }
//   }
// };

// garage.addCar("car1");
// garage.removeCar("car1");

// // console.log(garage.cars);

// /**
//  * 5. Есть объект Animal, у которого есть свойство walk(), скопировать объект
//  * в другой - Dog с свойством bark(), проверить является ли walk свойством Dog
//  *
//  */

// const Animal = {
//   walk() {
//     console.log("walk");
//   }
// };

// const Dog = Object.create(Animal);
// Dog.x = 7;
// Dog.bark = function () {
//   console.log("bark");
// };
// // Dog.walk();

// // console.log(Dog);

// // console.log(Dog.hasOwnProperty("bark"));

// const newObj = Object.create({});

// // console.log(newObj);

// /*

// 6. Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы 
// для работы с балансом и историей транзакций.

// */

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw"
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],
//   id: 0,

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return { amount, type, id: (this.id += 1) };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return "Недостаточно средств";
//     } else {
//       this.balance -= amount;
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//     }
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) return transaction;
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     const transactionTyped = [];
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         transactionTyped.push(transaction);
//       }
//     }

//     return transactionTyped;
//   }
// };

// account.deposit(1500);
// account.deposit(500);
// account.deposit(2500);
// console.log(account.getBalance());
// console.log(account.transactions);
// account.withdraw(500);
// account.withdraw(100);
// account.withdraw(1500);
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(2));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));



// const findSmallestNumber = function (numbers) {
//   return numbers;
// }
// console.log(findSmallestNumber([0, 5, 9, 234, -35, 100]));
// console.log(Math.max(...findSmallestNumber([891, 234])));




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Object.create() - Создает новый объект на сонове старого, 
// при этом все новые свойсива нового объекта хранятся прямо в нем,
// а все старые свойство от старого объекта лежат в прототипе!
// Соответственно если меняются свойства старого объекта, 
// то и у нового они тоже изменяться в его прототипе,
// а в новый объект можно добавлять новые свойства, 
// которые не отобразятся в старом.
// Если в новый объект добавить свойство с таким же именем как в старом,
// то оно отобразится сразу в нем, а старое свойство останется в прототипе неизменнным! 

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);

// console.log(animal);
// console.log(dog);

// dog.name = "Манго";
// dog.legs = 10;

// console.log(dog);

// console.log(dog.name);
// console.log(dog.legs);




// hasOwnProperty() - метод, который узнает собственное ли свойство у объекта или
// это свойства от старого объекта которое лежит в прототипе.
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false





// Object.keys(), который возвращает массив ключей его собственных свойств
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys);  //['title', 'author', 'genres', 'rating']

// // можно удобно перебрать собственные свойства объект
// for (const key of keys) {
//   console.log(key);     // Ключ
//   console.log(book[key]);     // Значение свойства
// }




// Object.values() возвращает массив значений его собственных свойств
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]



// Object.entries(obj) возвращает массив записей, каждым элементом которого
// будет еще один массив из 2 - х элементов: имени свойства
// и значения этого свойства из объекта obj.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]



// Массив объектов   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// let totalRating = 0;
// for (const book of books) {
//   totalRating += books.rating;
// };
// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

