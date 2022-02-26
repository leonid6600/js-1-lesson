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












































































































