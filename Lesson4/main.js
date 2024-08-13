// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б:

// function calculateRectangleArea(a, b) {
//     return a * b;
// }
// let area = calculateRectangleArea(5, 10);
// console.log("Площа прямокутника:", area);

///////////створити функцію яка обчислює та повертає площу кола з радіусом r
function calculateCircleArea(r) {
    return Math.PI * r * r;
}
let area = calculateCircleArea(5);
console.log("Площа кола:", area);

//////////створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calculateCylinderSurfaceArea(r, h) {
    return 2 * Math.PI * r * (r + h);
}
let surfaceArea = calculateCylinderSurfaceArea(5, 10);
console.log("Площа поверхні циліндра:", surfaceArea);

///////////створити функцію яка приймає масив та виводить кожен його елемент

function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
let myArray = [1, 2, 3, 4, 5];
printArrayElements(myArray);

/////////створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function createParagraph(text) {
    document.write('<p>' + text + '</p>');
}
createParagraph('Lorem lorem lorem.');

//////////створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function createItemList(text) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
createItemList('Lorem');

//////////створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function createList(text, itemCount) {
    document.write('<ul>');
    for (let i = 0; i < itemCount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
createList('Item', 5);

//////////створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function createListFromArray(arr) {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}
const primitiveArray = [1, 'Hello', true, 42, 'World', false];
createListFromArray(primitiveArray);

//////////- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function displayObjects(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write('<div>');
        document.write(`<p>ID: ${arr[i].id}</p>`);
        document.write(`<p>Name: ${arr[i].name}</p>`);
        document.write(`<p>Age: ${arr[i].age}</p>`);
        document.write('</div>');
        document.write('<hr>');
    }
}
const users = [
    {id: 1, name: 'John Doe', age: 25},
    {id: 2, name: 'Jane Smith', age: 30},
    {id: 3, name: 'Alice Johnson', age: 28}
];

displayObjects(users);
///////////// - створити функцію яка повертає найменьше число з масиву
function findMinNumber(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const numbers = [45, 2, 68, 1, 33, -10, 89];
const minNumber = findMinNumber(numbers);
console.log(minNumber);

//////////////- створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }
// const result = sum([1, 2, 10]);
// console.log(result);

////////- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах:Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr;
// }
// const result = swap([11, 22, 33, 44], 0, 1);
// console.log(result);

///////////// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency):Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
    return null;
}
const result = exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD');
console.log(result);