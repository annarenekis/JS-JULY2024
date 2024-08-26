// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б:

const square = (a, b) => {
    const result = a * b;
    console.log(result);
    return result;
};

square(5, 10);

///////////створити функцію яка обчислює та повертає площу кола з радіусом r
const roundSquare = radius => {
    const result = Math.PI * radius * radius;
    console.log(result);
    return result;
};

roundSquare(5);

//////////створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinderSquare = (r, h) => {
    const result = 2 * Math.PI * r * (r + h);
    return result;
};

console.log(cylinderSquare(10, 40));

///////////створити функцію яка приймає масив та виводить кожен його елемент

// const list = array => {
//     array.forEach(item => console.log(item));
// };


/////////створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}
paragraph(`blabla`);

//////////- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const itemList = text => {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);
};
itemList(`hello`);


//////////- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const list = (text, itemCount) => {
    document.write('<ul>');
    for (let i = 0; i < itemCount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};

list('hello', 3);


//////////- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const foobar = (arrayOfPrimitives) => {
    document.write('<ul>');
    arrayOfPrimitives.forEach(item => document.write(`<li>${item}</li>`));
    document.write('</ul>');
};
foobar ([1, 13, `asd`, 'Hello', true, 42, 'World']);

//////////- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const usersList = users => {
    users.forEach(user => {
        document.write(`<div>ID: ${user.id}, Name: ${user.name}, Age: ${user.age}</div>`);
    });
};
usersList([
    {id: 1, name: `Mia`, age: 26},
    {id: 2, name: `Lia`, age: 32},
    {id: 3, name: `Maya`, age: 23},
    {id: 4, name: `Ivan`, age: 40},
    {id: 5, name: `Bob`, age: 34},

]);

/////////////створити функцію яка повертає найменьше число з масиву
const arrayMinValue = numbers => Math.min(...numbers);

console.log(arrayMinValue([45, 2, 68, 1, 33, -10, 89]));

//////////////- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = arr => arr.reduce((acc, item) => acc + item, 0);

console.log(sum([1, 2, 10]));

////////- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, i1, i2) => {
    if (i1 < arr.length && i2 < arr.length) {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
        return arr;
    }
    return '!!!!!';
};
console.log(swap([11, 22, 33, 44], 0, 1));

/////////////Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const chosenCurrency = currencyValues.find(item => item.currency === exchangeCurrency);
    return chosenCurrency ? sumUAH / chosenCurrency.value : 'Currency not found';
};
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));