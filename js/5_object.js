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