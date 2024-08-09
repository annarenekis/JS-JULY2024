// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [42, 'hello', true, null, 1, 3.14, 'world', undefined, false, 'blabla'];
console.log(array);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'To Kill a Mockingbird',
    pageCount: 281,
    genre: 'Fiction'
};

let book2 = {
    title: '1984',
    pageCount: 328,
    genre: 'Dystopian'
};

let book3 = {
    title: 'The Hobbit',
    pageCount: 310,
    genre: 'Fantasy'
};

// console.log(book1);
// console.log(book2);
// console.log(book3);
let books = [book1, book2, book3];
console.log(books);
// or
console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'To Kill a Mockingbird',
    pageCount: 281,
    genre: 'Fiction',
    authors: [
        { name: 'Harper Lee', age: 89 }
    ]
};

let book5 = {
    title: '1984',
    pageCount: 328,
    genre: 'Dystopian',
    authors: [
        { name: 'George Orwell', age: 46 }
    ]
};

let book6 = {
    title: 'Good Omens',
    pageCount: 432,
    genre: 'Fantasy',
    authors: [
        { name: 'Neil Gaiman', age: 62 },
        { name: 'Terry Pratchett', age: 66 }
    ]
};

console.log(book4, book5, book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    { name: 'John Doe', username: 'johndoe', password: 'pass123' },
    { name: 'Jane Smith', username: 'janesmith', password: 'abc456' },
    { name: 'Alice Johnson', username: 'alicej', password: 'qwerty' },
    { name: 'Bob Brown', username: 'bobbrown', password: 'zxcvbn' },
    { name: 'Charlie White', username: 'charliew', password: 'letmein' },
    { name: 'David Green', username: 'davidg', password: 'password' },
    { name: 'Emma Black', username: 'emmab', password: '123456' },
    { name: 'Franklin Grey', username: 'frankg', password: 'monkey' },
    { name: 'Grace Blue', username: 'graceb', password: 'iloveyou' },
    { name: 'Henry Yellow', username: 'henryy', password: 'sunshine' }
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temperatures = [
    { morning: 10, day: 15, evening: 12 },
    { morning: 11, day: 16, evening: 13 },
    { morning: 12, day: 17, evening: 14 },
    { morning: 13, day: 18, evening: 15 },
    { morning: 14, day: 19, evening: 16 },
    { morning: 15, day: 20, evening: 17 },
    { morning: 16, day: 21, evening: 18 }
];

for (let i = 0; i < temperatures.length; i++) {
    let dayTemperature = temperatures[i];

    console.log(`Day ${i + 1}:`);
    console.log(`  Morning - ${dayTemperature.morning}°C`);
    console.log(`  Day - ${dayTemperature.day}°C`);
    console.log(`  Evening - ${dayTemperature.evening}°C`);

    // Логічні розгалуження:
    //     - Є змінна х, якій ви надаєте довільне числове значення.
    //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
    // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
    // (в першу, другу, третю или четверту частину години).
    // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
    // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
    //     - Користувач вводить або має два числа.
    //         Потрібно знайти та вивести максимальне число з тих двох .
    //         Також потрібно врахувати коли введені рівні числа.


    let x = 1;

    if (x !== 0) {
        console.log('Вірно');
    } else {
        console.log('Невірно');
    }

    let time = 35;

    if (time >= 0 && time < 15) {
        console.log('Перша чверть');
    } else if (time >= 15 && time < 30) {
        console.log('Друга чверть');
    } else if (time >= 30 && time < 45) {
        console.log('Третя чверть');
    } else if (time >= 45 && time < 60) {
        console.log('Четверта чверть');
    } else {
        console.log('Некоректне значення часу');
    }

    let day = 17;

    if (day >= 1 && day <= 10) {
        console.log('Перша декада');
    } else if (day >= 11 && day <= 20) {
        console.log('Друга декада');
    } else if (day >= 21 && day <= 31) {
        console.log('Третя декада');
    } else {
        console.log('Некоректне значення дня');
    }

    let dayOfWeek = 3;

    switch (dayOfWeek) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('Некоректний номер дня тижня');
    }

    let num1 = 10;
    let num2 = 20;

    if (num1 > num2) {
        console.log(`Максимальне число: ${num1}`);
    } else if (num2 > num1) {
        console.log(`Максимальне число: ${num2}`);
    } else {
        console.log('Числа рівні');
    }

    // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    //     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


    // let x = null;
    //
    // x = x || "default";
    //
    // console.log(x);



    // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

    let coursesAndDurationArray = [
        { title: 'JavaScript Complex', monthDuration: 5 },
        { title: 'Java Complex', monthDuration: 6 },
        { title: 'Python Complex', monthDuration: 4 },
        { title: 'QA Complex', monthDuration: 7 },
        { title: 'FullStack', monthDuration: 6 },
        { title: 'Frontend', monthDuration: 4 }
    ];


    coursesAndDurationArray.forEach(course => {
        if (course.monthDuration > 5) {
            console.log('Супер');
        }
    });
}