// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let word = 'hello';
let company = 'owu';
let domain = 'com';
let country = 'ua';
let one = 1;
let ten = 10;
let negative = -999;
let num = 123;
let pi = 3.14;
let e = 2.7;
let age = 16;
let isTrue = true;
let isFalse = false;

console.log(word);
console.log(company);
console.log(domain);
console.log(country);
console.log(one);
console.log(ten);
console.log(negative);
console.log(num);
console.log(pi);
console.log(e);
console.log(age);
console.log(isTrue);
console.log(isFalse);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Anna';
let middleName = 'Volodumurivna';
let lastName = 'Kis';
// 1st option

// let person = firstName + ' ' + middleName + ' ' + lastName;
// console.log(person);

// 2nd option
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);


//     - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//         let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//     Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль

let firstNamePrompt = prompt("Введіть ваше ім'я:");
let middleNamePrompt = prompt("Введіть ваше по-батькові:");
let agePrompt = prompt("Введіть ваш вік:");

console.log(firstNamePrompt);
console.log(middleNamePrompt);
console.log(agePrompt);
