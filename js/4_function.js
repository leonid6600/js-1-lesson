'use strict';


// ФУНКЦИИ  !!!!

// const add = function () {    // Это фукциональное выражение тоесть мы объявили функцию и ее название объявили переменной
//   console.log('Функция работает!');    // все что внутри фигурных скобок - это тело функции (его не видно пока не вызвали функцию)
// }
// add();    // вот так вызывается функция
// add();    // вот так можно вызвать фунуцию еще раз (причем аргументы внутри овальных скобок можно каждый раз вставлять разные)


// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   return x + y;
// }
// const result = add(5, 2);       // Правильно днлать именно так: после фукции вызывать ее сразу присвоев ей переменную!
// console.log(result);            // Апотом консолить или что-то еще уже переменную этой функции!



// const fn = function (value) {
//   console.log(1);
//   console.log(2);
//   if (value > 100) {
//     return 'Число больше 100';

//     console.log(3);
//   }
//   console.log(4);
//   return 'Число меньше 100';
//   console.log(5);
// }
// const result = fn(30);
// console.log(result);  



// const cart = [54, 46, 78, 89, 34, 67, 5, 8, 123, 9];
// let total = 0;
// for (const value of cart){
//  total += value;
// }
// console.log('Total =', total);



// АБСТРАКЦИЯ !!!!   Это когда внутри функции создаются переменные, которые существуют 
// только внутри нее, отрабатывают и возвращают готовый результат наружи из функции
// const calcTotalPrice = function (items) {
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total
// }
// console.log('Total =', calcTotalPrice([1, 2, 3]));
// console.log('Total =', calcTotalPrice([5, 10, 15, 20]));
// console.log('Total =', calcTotalPrice([100, 200, 300]));



// Функция принимает все логины, которые уже есть и еще один логин (тот который ввели). 
// Функция сравнивает тот ллогин, что ввели, со списком тех что уже есть
// const logins = ['piska', 'siska', 'lariska'];
// const findLogin = function (allLogins, loginToFind) {
//   for (const log of allLogins){
//     if (log === loginToFind) return 'Логин найдет'
//   }
//   return 'Такого логина нет!'
// };
// console.log(findLogin(logins, "siska"));
// console.log(findLogin(logins, "viski"));
// console.log(findLogin(logins, "pulka"));

// Можно написать функцию еще короче!
// const logins = ['piska', 'siska', 'lariska'];
// const findLogin = function (allLogins, loginToFind) {
//   const message = allLogins.includes(loginToFind) ? 'Логин найдет' : 'Такого логина нет!';
//   return message;
// };
// console.log(findLogin(logins, "siska"));
// console.log(findLogin(logins, "viski"));
// console.log(findLogin(logins, "pulka"));

// Можно написать функцию и еще короче!
// const logins = ['piska', 'siska', 'lariska'];
// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind) ? 'Логин найдет' : 'Такого логина нет!';
// };
// console.log(findLogin(logins, "siska"));
// console.log(findLogin(logins, "viski"));
// console.log(findLogin(logins, "pulka"));


// Функция находит самое маленькое число в масссиве
// const findSmallestNumber = function (numbers) {
//   let SmallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < SmallestNumber) {
//       SmallestNumber = number;
//     }
//   }
//   return SmallestNumber;
// }
// console.log(findSmallestNumber([0, 5, 9, 234, -35, 100]));



// Функция переделывает буквы из нижнего регистра в верхний и наоборот
// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';
//   for (const letter of letters) {
//     if (letter === letter.toLowerCase()) {
//       invertedString += letter.toUpperCase();
//     } else {
//       invertedString += letter.toLowerCase();
//     }
//   }
//   return invertedString;
// };
// console.log(changeCase('ПрИвЕт, КаК дЕлА?'));


// Можно написать так
// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';
//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();
//     isInLowerCase 
//       ? invertedString += letter.toUpperCase()
//       : invertedString += letter.toLowerCase();
//   }
//   return invertedString;
// };
// console.log(changeCase('ПрИвЕт, КаК дЕлА?'));


// Можно написать еще короче
// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//     // То есть к invertedString мы плюсуем результат функции 
//     // "isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();"
//     // Это функция проверяет каждую букву на правду или лож, 
//     // если правда, то выдает букву в верхнем регистре, если ложь - то в нижнем
//   }

//   return invertedString;
// };

// console.log(changeCase('ПрИвЕт, КаК дЕлА?'));




// function calculateEngravingPrice(message, pricePerWord) {

//   const calculateWords = message.split(' ').length;
//   const total = pricePerWord * calculateWords;
//   return total;

// }
// console.log(calculateEngravingPrice('Привет, супер детка!', 10))






/**
 *
 * 1. Напиши функцию calcBMI(weight, height) которая
 * рассчитывает и возвращает индекс массы тела человека.
 * Для этого необходимо разделить вес в киллограммах на
 * квадрат высоты человека в метрах.
 */

// function calcBMI(weight, height = 1.8) {
//   if (!weight || !height) return "Один из параметров пустой";
//   // if(weight && height) return "Один из параметров пустой";
//   if (typeof weight !== "number") return "Тут строка";
//   return weight / Math.pow(height, 2);
// }

// console.log(calcBMI(80, 1.9));

/**
 * 2. Напиши функцию min(a,b), которая возвращает меньшее
 * из чисел a и b.
 */

// function min(a = 0, b = 0) {
//   if (typeof a !== "number" || typeof b !== "number") return "Строка";
//   if (a === b) return "Числа ровны";
//   return a < b ? a : b;
// }

// console.log(min(14, 8));

/**
 * 3. Напиши функцию logItems(items), которая получает массив
 * и использует цикл for,
 * который для каждого элемента массива будет выводить
 * в консоль сообщение в формате
 * <номер элемента> - <значение элемента>. Нумерация элементов
 * должна начинаться с 1
 */

// function logItems(items) {
//   if (items.length === 0) return "Массив пустой";
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} : ${items[i]}`);
//   }
// }

// const arr = ["item1", "item2"];

// console.log(logItems(arr));

/**
 * 4. Напиши функцию findLargestNumber(numbers)которая ищет
 * самое большое число в массиве.
 */

// function findLargestNumber(numbers) {
//   if (numbers.length === 0) return "Массив пустой";
//   if (numbers.length === 1) return numbers[0];
//   let max = numbers[0];
//   for (const number of numbers) {
//     if (max < number) max = number;
//   }

//   return max;
// }

// console.log(findLargestNumber([-1, -1111145, -234]));

/**
 * 5. Напишите функцию calAverage() которая принимает
 * произвольное кол-во аргументов и возвращает их
 * среднее значение. Все аругменты будут только числами.
 */

// TODO: обработать строку в массиве

// function calcAverage() {
//   let sum = 0;
//   for (const number of arguments) {
//     sum += number;
//   }

//   return sum / arguments.length;
// }

// console.log(calcAverage(2, -2));

/**
 * 6. Напиши функцию formatTime(minutes) которая переведёт
 * значение minutes (количество минут) в строку
 * в формате часов и минут HH:MM.
 */

// function formatTime(minutes) {
//   if (minutes < 0) return "Это не минуты";
//   const hours = Math.floor(minutes / 60);
//   const minute = minutes % 60;
//   return `${hours}:${minute}`;
// }

// console.log(formatTime(45));

/**
 * 7. Напишите функции для работы с коллекцией обучающих 
 * курсов courses:
  a. addCourse(name) - добавляет курс в конец коллекции
  b. removeCourse(name) - удаляет курс из коллекции
  c. updateCourse(oldName, newName) - изменяет имя на новое
 */

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
//   if (!name) return "Ошибка";
//   courses.push(name);
// }

// addCourse("Vue");

// console.log(courses);

// function removeCourse(name) {
//   const index = courses.indexOf(name);
//   if (index !== -1) {
//     courses.splice(index, 1);
//   } else {
//     console.log("Такого курса нет");
//   }
// }

// removeCourse("HTML");

// console.log(courses);

// function updateCourse(oldName, newName) {
//   const index = courses.indexOf(oldName);
//   if (index !== -1) {
//     courses.splice(index, 1, newName);
//   } else {
//     console.log("Такого курса нет");
//   }
// }

// updateCourse("CSS", "C++");

// console.log(courses);




// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. 
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
// function getExtremeElements(array) {
// return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));





/**
 * 8*. Написать функцию которая принимает массив с цифрами,
 * получить целое число и прибавить 1,
 * результат вернуть в виде массива
 */
// // [1,2,3]
// function plusOne(numbersArr) {
//   for (let i = 0; i < numbersArr.length; i += 1) {
//     if (typeof(numbersArr[i]) === 'string') {
//       return "В массиве присутствует НЕ число!";
//     }
//   }
//   const stringFromArray = numbersArr.join("");
//   const numberFromString = Number(stringFromArray);
//   const sum = numberFromString + 1;
//   const stringFromNumber = String(sum);
//   const arrayFromString = stringFromNumber.split("");
//   return arrayFromString;
// }
// console.log(plusOne([100, 'rt', 0]));




// Функция сравнивает два массива и выдает только совпадения, выдает в массиве.
// const filterNumber = function (arg1, arg2) {
//   const NewArray = [];
//   for (const element of arg1) {
//     if (arg2.includes(element)){
//       NewArray.push(element);
//     }
//   }
//   return NewArray;
// };
// console.log(filterNumber([1, 20, 6, 25, 0, 4, 36], [2, 20, 15, 36, 4, 100]));
// console.log(filterNumber([13, 20, 6, 25, 0, 88], [2, 10,13,15, 4, 88]));


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// console.log(fruits.slice(0, 2));
// console.log(fruits.slice(1, fruits.length - 1));
// console.log(fruits.slice(-3))


// function calculateTotal(number) {
//  let sum = 0;
//  for (let i = 0; i <= number; i += 1){
//   sum += i;
//  }
//  return sum;
// }
// console.log(calculateTotal(3));


// const planets = ["Earth", "Mars", "Venus"];
// for (let i = planets.length - 1; i >= 0; i -= 1) {
//   console.log(planets[i]);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   let totalArray = [];
//   for (const number of order){
//     total += number
//   }
//   totalArray.push(total);
//   return totalArray;
// }
// console.log(calculateTotalPrice([0, 2022, 10, 5]));


// const numbers = [];
// numbers.push(250);
// console.log(numbers);



// function findLongestWord(string) {
//   const arrayOfWords = string.split(' ');
//   let smallestWord = arrayOfWords[0];

//   for (const word of arrayOfWords) {
//     if (word.length < smallestWord.length) {
//       smallestWord = word;
//     }
//   }
//  return smallestWord;
// }
// console.log(findLongestWord('Привет че как дерьмоеды'));



// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1){
//   console.log(i);
//   numbers.push(i);
// }
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34));




// function filterArray(numbers, value) {
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));



// function getCommonElements(array1, array2) {
//   const array3 = [];
//   for (const number of array1) {
//     if (array2.includes(number)) {
//       array3.push(number);
//     }
//   }
//   return array3;
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));



// function getEvenNumbers(start, end) {
//   const newArray = [];
//   for (let i = start; i <= end; i += 1){
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//   return newArray;
// }
// console.log(getEvenNumbers(6, 12));




// function includes(array, value) {
//   for (const unit of array) {
//     if (unit === value){
//       return "true"
//     }
//   }
//       return "false"
// }
// console.log(includes([1, 2, 9, 4, 5], 3));