// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let phrase1 = `hello world`;
console.log(phrase1.length);
let phrase2 = `lorem ipsum`;
console.log(phrase2.length);
let phrase3 = `javascript is cool`;
console.log(phrase3.length);

const  strings = [phrase1, phrase2, phrase3];
for (const phrase of strings) {
    console.log(phrase.length);
}

// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let text = `hello world`;
// const text1 = text.toUpperCase();
// console.log(text1);

// let text = `lorem ipsum`;
// const text2 = text.toUpperCase();
// console.log(text2);

// let text = `javascript is cool`;
// const text3 = text.toUpperCase();
// console.log(text3);
let phrase = 'hello world';
console.log(phrase.toUpperCase());

phrase = 'lorem ipsum';
console.log(phrase.toUpperCase());

phrase = 'javascript is cool';
console.log(phrase.toUpperCase());

// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let text = `hello world`;
// const text1 = text.toLowerCase();
// console.log(text);
// console.log(text1);
// text = text1;
// console.log(text);

let text = 'HELLO WORLD';
console.log(text.toLowerCase());

text = 'LOREM IPSUM';
console.log(text.toLowerCase());

text = 'JAVASCRIPT IS COOL';
console.log(text.toLowerCase());

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
const s = str.trim();
console.log(s);
console.log(s.length);
console.log(str.length);

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str) {
    if (str) {
        const split = str.split (` `);
        return split;
    }
  return [``];
}
console.log(stringToArray(`Ревуть воли як ясла повні`));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const  numbers = [10,8,-7,55,987,-1011,0,1050,0];
const stringNumbers = numbers.map(number => number + '');
console.log(stringNumbers);

// створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function sortNums(arrayofNums, direction) {
    if (direction === 'ascending') return arrayofNums.sort((a, b) => a - b);
    if (direction === 'descending') return arrayofNums.sort((a, b) => b - a);
    return arrayofNums;
}
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const  map1 = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => ({...value, id: index + 1}));
console.log(map1);
////////////////////////
// описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
const suits = ['spade', 'diamond', 'club', 'heart'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit : suit,  value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
console.log(cards);
}
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'club' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const reduce = cards.reduce((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
    }

    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(reduce);
//////////////////////
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));
