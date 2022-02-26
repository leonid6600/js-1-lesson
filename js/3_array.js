'use strict';



// // Массивы
// const clients = ["Mango", "Ajax", "Poly"];
//   // console.log(clients[i]);
//   // Лучше писать так:
//  console.table(clients);


// const clients = ["Mango", "Ajax", "Poly"];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// const ex = ["паша", "марина", "леша", "женя", "юра", "света", "даша", "вадим"];
// // const clientNameToFind = "Poly";
// let message;

// const clientNameToFind = prompt('Введите имя. И мы проверим бывший/бывшая ли это.');

// for (const client of ex) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind.toLowerCase()) {
//     message = "Это бывший/бывшая. Имели доступ к писькам!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Это не бывшие. Все нормально!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"




// let cost;
// const subscription = prompt('Введите имя. Бывшего.');
// switch (subscription.toLowerCase()) {
//   case "вадим":
//     cost = "Старый интелегентный жигало. Опасен!";
//     break;

//   case "леша":
//     cost = "Неплохой парень.";
//     break;

//   case "паша":
//     cost = "Жестокий и красивый";
//     break;

//   default:
//     console.log("Про таких педиков нам ничего не известно!");
// }

// console.log(cost);


// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5




// Посчитать общую сумму покупок в корзине
// const cart = [54, 46, 78, 89, 34, 67, 5, 8, 123, 9];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1){
//  total += cart[i];
// }
// console.log('Total =', total);

// Однако можно написать короче использую метод for...of  (если НЕ нужен доступ к счетчику, если не нужно перезаписывать элементы массива)
// const cart = [54, 46, 78, 89, 34, 67, 5, 8, 123, 9];
// let total = 0;
// for (const value of cart){
//  total += value;
// }
// console.log('Total =', total);



//Скрипт для проверки, если в массиве верный логин
// const logins = ['pedik', 'krolik', 'gnomik', 'bich'];
// const loginToFiend = 'gnomik';
// console.log(logins.includes(loginToFiend));

//Можно сделать через тернарный оператор
// const logins = ['pedik', 'krolik', 'gnomik', 'bich'];
// const loginToFiend = 'gnomik';
// console.log(logins.includes(loginToFiend)? 'Да, есть такой логин в списке.' : 'Нет такого логина в спике.');



// Скрипт, который найдет в массиве самое маленькое число
// const numbers = [51, 45, 9, 99, 23, 15, 46];
// let smallestNumber = numbers[0];    //по умолчанию решаем что первое значение в массиве самое маленькое
// for (const number of numbers){     // перебираем все значен в массиве
//  if (number < smallestNumber) {     //  если значение меньше, чем то что мы определили самым мелким по умолчанию,
//   smallestNumber = number;         //  то переопределяем: то есть самым маленьким по умолчанию считаем уже это значение и еще раз запускаем цикл
//  }
// }
// console.log('smallestNumber = ', smallestNumber);


// Метод .join  Сшить строки (это не деструктивный метод, тоесть он не изменят значения в массиве, а просто создает новую строку и клдет туда измененную копию)
// const numbers = [51, 45, 9, 99, 23, 15, 46];
// const string = numbers.join('---');
// console.log(string);


//  Метод разбиения строки .split
// написать скрипт который заменит регистр каждого символа в с троке на противоположный
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//  // console.log(letter);
//  if (letter === letter.toLowerCase()) {
//   console.log('Этот символ в нижнем регистре');
//   invertedString += letter.toUpperCase();
//  } else {
//   invertedString += letter.toLowerCase();
//  }
// }
// console.log(`"${string}" с обратным регистром будет "${invertedString}".`);



// скрипт удаляет первое и последнее слово и выводит то что осталось
// const string = 'Welcome to the future';
// const strArr = string.split(' ');
// let newArr = strArr.slice(1, -1);
// console.log(newArr);


//  скрипт кoторый разворачивает строку задом на перед   (тут в коде есть ошибка!!!!)
// const string = 'Welcome to the future!';
// const reverseStr = string.split('');
// const reverseArr = [];
// for (let i = reverseStr.length - 1; i >= 0; i -= 1) {
//   reverseArr.push(reverseStr[i]);
// }
// console.log(reverseArr.join(''));




// скрипт считает сумму элементов из двух массивов
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total1 = 0;
// let total2 = 0;
// let total = total1 + total2;
// for (let i = 0; i < array1.length; i += 1) {
//  total += array1[i]
// }
// for (let i = 0; i < array2.length; i += 1) {
//  total += array2[i]
// }
//    console.log(total);

// Метод concat - сшивание массивов
// есть способ лучше:
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2); // создаем новый массив с помощью метода concat присоединяя второй массив к первому
// for (let i = 0; i < numbers.length; i += 1) {
// total += numbers[i];
// }
// console.log(total);

// есть способ еще лучше:
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2); // создаем новый массив с помощью метода concat присоединяя второй массив к первому
// for (const number of numbers) {
//  total += number;
// }
// console.log(total);







// splice - крутой метод, он может добавлть удалять и заменять (ДЕСТРУКТИТВНЫЙ метод!!! изменяет исходный массив)
//  Добавить в массив число 100 на индексе 0, удалить число 130 и заменить число 20 на 67
// const xArr = [1, 56, 89, 130, 58, 20, 767];
// xArr.splice(0, 0, 100);                //добавление
// const index130 = xArr.indexOf(130);
// xArr.splice(index130, 1);              // удаление
// const index20 = xArr.indexOf(20);
// xArr.splice(index20, 1, 67);           // замена (обновление)
// console.log(xArr);

// indexOf - метод, который возвращает индекс конкретного значения в массиве. Если искомого значения в массиве нет то метод вернет -1
// Нужно удалить 'card3'
// const cards = ['card1', 'card2', 'card3', 'card4', 'card5'];
// console.log(`Изначальный массив: ${cards}`);   //ищем индекс того элемента, который хотим удлать
// const index = cards.indexOf('card3');
// console.log(index);
// cards.splice(index, 1);   //первый элемент в скобках - передает индекс элемента который нужно удалить, второй элемент передает сколько элементов нужно удалить
// console.log(`После удаления получилось следующее: ${cards}`);
// // Нужно добавить 'card45' после 'card1'
// const index1 = cards.indexOf('card1') +1;
// cards.splice(index1, 0, 'card45'); //первый элемент в скобках - передает индекс элемента который нужно удалить, второй элемент "0" говорит что не удалить нужно, а добавить, третий и дальше через запятую перечисляем элементы, которые добавляем
// console.log(`После добавления получилось следующее: ${cards}`);
// // Нужно заменить 'card4' на 'card200'
// const index2 = cards.indexOf('card4');
// cards.splice(index2, 1, 'card200'); //первый элемент в скобках - передает индекс элемента который нужно удалить, второй элемент "1" говорит сколько нужно удалить, третий и дальше через запятую перечисляем элементы, которые добавляем
// console.log(`После добавления получилось следующее: ${cards}`);



















// arguments !!!!!!!!!!!!!!!!!!!!
// arguments - создает псевдомассив, он нужен тогда, когда не понятно количество данных придет в массив

// function multiply() {
//   return arguments;
// }
// console.log(multiply(1, 2, 3));
// console.log(multiply(1, 2, 3, 4));
// console.log(multiply(1, 2, 3, 4, 5));


// function multiply() {
//   let total = 1;
//   for (const argument of arguments) {
//     total *= argument;
//   }
//   return total;
// }




// ... (rest)  !!!!!!!!!!!!!!!!!!!!!!!!!!
// Однако псевдомассив не обладает все нужным набором свойств и методов,
// поэтому его можно перевести в полноценный массив с помощью операции ... (rest).
// function multiply(...args) {
//   console.log(args);
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


// function multiply() {
//   console.log(arguments);
//   const args = Array.from(arguments);   // Старый метод преобразвания псевдомассива в массив
//   console.log(args);
// }
// console.log(multiply(1, 2, 3));
// console.log(multiply(1, 2, 3, 4));


// function multiply(...arg) {   //Вставлять '...' нужно перед аргументоь в строке объявления функции
//   console.log(arg);
// }
// console.log(multiply(1, 2, 3));
// console.log(multiply(1, 2, 3, 4));


// Еще можно выводить некоторые элемнты из функии отдельно, а все остальное как массив 
// (массив всегда в самом колнце)
// function multiply(a, b, ...arg) {
//   console.log(`${a} ${b}`, arg);
//   console.log(arg);
// }
// console.log(multiply(1, 2, 3, 4));
// console.log(multiply(1, 2, 3, 4, 5, 6));


// Функция сложения произвольного количества чисел
// const sum = function (...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };
// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5, 6));