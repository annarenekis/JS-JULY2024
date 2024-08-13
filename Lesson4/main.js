// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б:

function square(a, b) {
    const result = a * b;
    console.log(result);
    return result;
}

square()

///////////створити функцію яка обчислює та повертає площу кола з радіусом r
function roundSquare(radius) {
    let result = Math.PI * radius * radius
    console.log(result);
    return result;
}

roundSquare()

//////////створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(r, h) {
    return 2 * Math.PI * r + h
}

console.log(cylinder(10, 40));

///////////створити функцію яка приймає масив та виводить кожен його елемент

// function list(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }

/////////створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph(`blabla`);
//////////створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function itemList(text) {
    document.write(`
            <ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>
        `)
}
itemList(`hello`);


//////////створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function list(text, itemCount) {
    document.write('<ul>');
    for (let i = 0; i < itemCount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

list(50);

//////////створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function foobar(arrayOfPrimitives) {
    document.write('<ul>');
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

foobar ([1, 13, `asd`, 'Hello', true, 42, 'World']);

//////////- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function usersList(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
usersList([
    {id: 1, name: `Mia`, age: 26},
    {id: 2, name: `Lia`, age: 32},
    {id: 3, name: `Maya`, age: 23},
    {id: 4, name: `Ivan`, age: 40},
    {id: 5, name: `Bob`, age: 34},

]);

///////////// - створити функцію яка повертає найменьше число з масиву
function arrayMinValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }
    return min;
}

console.log(arrayMinValue([45, 2, 68, 1, 33, -10, 89]));

//////////////- створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let basket = 0;
    for (const item of arr) {
        basket = basket + item;
    }
    return basket;
}
console.log(sum([1, 2, 10]));

////////- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах:Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, i1, i2) {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return `!!!!!!`;
}
console.log(swap([11, 22, 33, 44], 0, 1));

///////////// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency):Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    let result = sumUAH/chosenCurrency.value
    return result;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));