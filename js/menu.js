'use strict';

// const age = 10;
// const totalPrice = 200.74;
// // const userName = 'Chelsy';
// const message = 'Добро пожаловать!';
// const isOpen = true;
// const shouldConfirm = false;

// console.log('Я говорю вам смело:', message);

// const type = typeof isOpen;
// console.log(258);

// console.log('before');
// alert('Привет, я диалоговое окно!');
// console.log('after');

// const shouldRenew = confirm('Желаете продлить подписку?');
// console.log(shouldRenew)


// const quantity = prompt('Введите количество товара');      //"prompt" всегда возвращает именно строку (string)
// console.log(quantity);

// let quantity = prompt('Введите количество товара');
// // quantity = Number(quantity);   //Чтобы переделать строку в число нужно задать ей такое свойство конструктором "Number"
// console.log(quantity);
// console.log(typeof quantity);  //"typeof" проверяет данные на тип (Number, String, Boolean, null, undefined )

// let userName;
// console.log(userName);
// // console.log(typeof userName);


// let elementWidth = '50.56889999px';
// const result = Number.parseInt(elementWidth);  //"parseInt" нужен для того чтобы забрать из строки только число (причем целое число) и сразу объявить присвоить ему тип числа
// console.log(result);
// console.log(typeof result);

// let elementHight = '25.589645345px';
// const resultSecond = Number.parseFloat(elementHight);  //"parseFloat" нужен для того чтобы забрать из строки только число (можно дробное число) и сразу объявить присвоить ему тип числа
// console.log(resultSecond);
// console.log(typeof resultSecond);

// elementHight = Number.parseFloat(elementHight);
// console.log('Итого параметр elementHight равен', elementHight);

// let salary = 1300.574395634956;
// console.log(salary.toFixed(2));
// console.log(typeof salary.toFixed(2));  //отсекает на количество знаков после запятой (НЕ округляет, а именно отсекает)

// salary = Number(salary);
// console.log(salary);
// console.log(typeof salary);

// console.log(typeof undefined);
// console.log(typeof null);

// console.log(salary.lenght);

// console.log(1 !== 5);

// let num = 10;
// console.log(num % 3);  //10 делит на 3 получается 3. И если 3 умножить на три то получится 9, теперье если из 10 вычесть 9 то получится в остатке 1.

// let num = 14;
// console.log(num % 3);  //2

// let num = 12;
// console.log(num % 3);  //0

// let salary = 1300.5743956;
// salary = salary.toFixed(2);
// salary = Number(salary);   // можно записать так salary = Number(salary.toFixed(2));
// console.log(salary);   // или еще компактнее console.log(Number(salary.toFixed(2)));
// console.log(typeof salary);

// console.log(Number(true));  //1

// const base = 2;
// const power = 3;
// const result = Math.pow(2,3) // Math.pow(2,3) - возведение числа 2 в степень 3

// console.log(result);  //8
// console.log(2 ** 3);  // - возведение числа 2 в степень 3 (два раза умножить  = возвести в степень)




// Задача:
// 1. Попросить ввести число и сохранить ее в переменнную
// let base = prompt('Введите число');
// base = Number(base);
// console.log(base);

// // 2. Попросить ввести степень и сохранить ее в переменнную
// let power = prompt('Введите степень');
// power = Number(power);
// console.log(power);

// // 3. Возвести введенные данные в степень и вывести
// const result = base ** power;
// console.log(result);



// Генератор случайных чисел от 0 до 1
// console.log(Math.random());

// // Сгенерировать число от 10 до 30 можно с формулой: Math.random() * (max - min) + min
// console.log(Math.random() * (30 - 10) + 10);

// Правильно писать так
// const min = 10;
// const max = 30;
// let result = Math.random() * (max - min) + min;
// result = Math.round(result);   // Округлить до целого числа
// console.log(result);



// Рандомный выбор цвета из списка
// const colors = ['tomato', 'teal', 'orange', 'black', 'blue', 'skyblue', 'red', 'yellow'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// const message = 'В этой строке 26 символов! Пиздеж!';
// console.log(message.length);

// // Конкатенация строк - сшивание нескольких строк в одну
// const firstName = 'Банан';
// const lastName = 'Орех';
// console.log(firstName + ' ' + lastName);


// // Шаблонные строки или шаблонные литералы (когда нужно в одну строку нужно динамически подставлять значения)
// const quantity = 10;
// const messageBlobs = `Мы создали для вас ${quantity} прекрасных пузырей`;
// console.log(messageBlobs);


// НОрмализация регистра (используется для поиска, когда юзер вводит в поисковую строку запрос написанный не в том регистре что лежит в базе данных)
// let brand = 'Samsung';
// brand = brand.toLowerCase();
// console.log(brand);  //samsung

// let brand = prompt('Введитое бренд');
// brand = brand.toLowerCase();
// console.log(brand);


//  Обратиться к конкретному символу в строке можно по номеру его индекса
// let joke = 'Говножуй3000';
// console.log(joke[8]);
// console.log(joke[0]);


// // Найти в строке что-лтбо
// const blacklistWord1 = 'спам';
// const blacklistWord2 = 'распродажа';

// const string1 = 'Привет, это точно спам, бро!';
// const string2 = 'Приходите, у нас РАСПРОДАЖА!';

// console.log(string1.includes(blacklistWord1));  //true
// console.log(string1.includes(blacklistWord2));  //false

// console.log(string2.toLowerCase().includes(blacklistWord2));  //true



// //  Привести значение к числу
// console.log(Number(0));            //0
// console.log(Number(false));        //0
// console.log(Number('0'));          //0
// console.log(Number(null));         //0

// // Привести значение к булю
// // Важно! и просто!
// // Запомните 6 значений, приводящихся к false в логическом преобразовании:
// // 0, NaN, null, undefined, пустая строка и false. Абсолютно все остальное приводится к true.
// console.log(Boolean(0));           //false
// console.log(Boolean(5));           //true
// console.log(Boolean(-5));          //true
// console.log(Boolean('dfgdfgdf'));  //true

// console.log(Boolean('0'));         //true
// console.log(Boolean(''));          //false

// console.log(Boolean(false));       //false
// console.log(Boolean(null));        //false
// console.log(Boolean(NaN));         //false




// Логические операторы и, или, не.    &&    ||     !
// &&  -  если все операнды истины (true), то возвращается последний операнд,
// // если один из операндов ложный (false), то возвращается первый попавшийся такой операнд
// console.log(5 && 6);                             //6
// console.log(5 && 6 && 10 && 1 && 'Привет!');     //Привет!
// console.log(5 && 6 && 10 && 0 && 'Привет!');     //0

// // || запинается на правде и выводит то на чем запнулось или последний операнд
// console.log(5 || 6 || 10 || 1 || 'Привет!');     //5
// console.log(0 || NaN || 'Привет!' || '' );       //Привет!
// console.log(0 || NaN || null || '' || false);    //false

// !
// console.log(!false);      //true
// console.log(!true);       //false
// console.log(!0);          //true
// console.log(!NaN);        //true
// console.log(!'mango');    //false
// console.log(!-25);        //false


// Скрипт, который проверяет входит ли число в отрезок х1 - х2
// const x1 = 10;
// const x2 = 30;
// const number = 5;

// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок до ${x2}?`, number > x2);
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}?`, number > x1 && number < x2);
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}?`, number < x1 || number > x2);



// Скрпит который проверяет возможность открыть чат с пользоваетелем, который: друг, онлайн, без режима не беспокоить
// const isFriend = true;
// const isOnline = true;
// const isDnd = false;

// const canOpenChat = isFriend && isOnline && !isDnd;
// console.log('Можно открыть чат?', canOpenChat);


// Скрипт проваерит статус юзера и если его статус pro или vip, то даст доступ к контенту
// const sub = 'pro';
// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Можно ли показать контент?', canAccessContent);


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
















// Урок 4

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

/**
 * 8*. Написать функцию которая принимает массив с цифрами,
 * получить целое число и прибавить 1,
 * результат вернуть в виде массива
 */

// [1,2,3]

// function plusOne(numbersArr) {}












































































