'use strict';


// Оператор ветвления if. то что в круглых скобках это буль, если там верное значение,
// то if выполнится, если ложное, то не выполниться
// Внутри фигурных скобок само тело функции if
// if ('hghghgh') {
//  console.log('Функция срабатывает!');
// }

// Можно дополнить конструкцию if конструкцией else. Если в условии if верно, то выполнится тело if,
// Если в условии if ложь, то выполнится тело else
// if ('') {
//  console.log('Функция if срабатывает!');
// } else {
//  console.log('Функция else срабатывает!');
// }


// Можно добавить в конструкцию множество if и else при необходимости
// const salary = 3000;
// if (salary < 500) {
//  console.log('Уровень зарплаты - 1');
// } else  if (salary >= 500 && salary < 1000){
//  console.log('Уровень зарплаты - 2');
// } else  if (salary >= 1000 && salary < 3000 ){
//  console.log('Уровень зарплаты - 3');
// } else {
//  console.log('Уровень зарплаты - 4');
// }


// // Cкрипт который вычислит какой баланс в зависимости от суммы на счете
// const balance = 1000;
// let message;

// if (balance >= 0) {
//  message = 'Позитивный баланс';
// } else {
//  message = 'Негативный баланс';
// }

// console.log(message);

// // Можно написать этот скрипт короче с помощью Тернарного оператора (испольбзуется только для записи переменной по условию)
// // console.log(условие ? выражение1 (если правда) : выражение2 (если ложь));
// // Работает только, если варианта только два! да или нет.
// console.log(balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс');





// let balance = 10000;
// const payment = 6000;
// let result;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету!`)

// if (payment <= balance) {
//  result = balance - payment;
//  console.log(`На счету осталось ${result} кредитов.`);
// } else {
//  console.log(`На счету недостаточно средств для проведения операции.`);
// }

// console.log('Операция завершена!')




// const totalSpent = 500;   // ОБщая сумма потраченных денег
// let payment = 500;         // Сумма текущего платежа
// let discount = 0;          // Текущая скидка
// let result;

// if (totalSpent >= 100 && totalSpent < 1000) {
//  discount = 2;
//  result = (payment - payment/100*2)
//  console.log(`Вы - бронзовый партнер, ваша скидка ${discount}%, к опалте: ${result}`);
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//  discount = 5;
//  result = (payment - payment/100*5)
//  console.log(`Вы - бронзовый партнер, ваша скидка ${discount}%, к опалте: ${result}`);
// } else if (totalSpent >= 5000) {
//  discount = 10;
//  result = (payment - payment/100*10)
//  console.log(`Вы - бронзовый партнер, ваша скидка ${discount}%, к опалте: ${result}`);
// } else {
//  console.log('Вы не партнер, ваша скидка 0%');
// }


// Инструкция switch  используется только для знака равенства!!! для Больше или меньше используется if и else!!!!
// Присвоить скидку в зависимости от статуса
// const statusD = 'vip';   // Текущий статус
// let discount;            // Текущая скидка

// switch (statusD) {
//  case 'standart':
//   discount = 2;
//   break;
 
//  case 'vip':
//   discount = 5;
//   break;
 
//  case 'platinum':
//   discount = 10;
//   break;
 
//  default:
//   console.log('Такого статуса не существует!');
// }

// console.log(`Ваша скидка ${discount}%.`);


// Скрипт выбора стоимости отеля по количеству его звезд
// const stars = 2;
// let prise;

// switch (stars) {
//   case 1:
//   case 2:     // Если значения одинаковы на двух услових, то их можно объеденить вот так!
//   prise = 20;
//   break;
 
//   case 3:
//   prise = 50;
//   break;
 
//   case 4:
//   prise = 70;
//   break;
 
//   case 5:
//   prise = 120;
//   break;
 
//  default:
//   console.log('Такого количества звезд нет!');
// }
// console.log(`Стоисоть ${stars}-звездочного отеля составит ${prise}$.`)


 
// Циклы  while
// let counter = 0;
// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;   //это тоже самое что counter = counter + 1;
// }


// Циклы  do...while
// let password = "";
// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);
// console.log("Ввели пароль: ", password);


// Циклы  for
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;
// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }
// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// Оператор break в циклах
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }
// console.log("Лог после цикла");


// Оператор continue в циклах
// const number = 5;
// for (let i = 0; i <= number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log("Нечетное i: ", i); // 1, 3, 5
// }



// Скрипт, который подсчитываетобщую сумму зарплат работников. Зарплата каждого работника это случайная цифра от 500 до 5000.
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 6;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//  console.log(`ЗП работника №${i} составляет ${salary}.`);
//  totalSalary = totalSalary + salary;   // Лучше записать так: totalSalary += salary;
// }

// console.log('Общая сумма зарплат работников составляет ', totalSalary);



// Скрипт, который подсчитывает сумму всех четных чисел, которые входят в диапозон от 0 до 5.
// const min = 0;
// const max = 7;
// let total = 0;

// for (let i = 0; i <= max; i += 1) {
//    if (i % 2 === 1) {
//     continue;
//  }
//  total += i;
// }
//  console.log(`Общая сумма четных чисел в диапозоне от ${min} до ${max} равна`, total);