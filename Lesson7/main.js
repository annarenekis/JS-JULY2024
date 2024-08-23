// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};
const users = [];

users.push(new User(1, 'John', 'Doe', 'john.doe@example.com', '+123456789'));
users.push(new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '+987654321'));
users.push(new User(3, 'Michael', 'Johnson', 'michael.johnson@example.com', '+112233445'));
users.push(new User(4, 'Emily', 'Brown', 'emily.brown@example.com', '+223344556'));
users.push(new User(5, 'David', 'Williams', 'david.williams@example.com', '+334455667'));
users.push(new User(6, 'Sophia', 'Jones', 'sophia.jones@example.com', '+445566778'));
users.push(new User(7, 'Daniel', 'Garcia', 'daniel.garcia@example.com', '+556677889'));
users.push(new User(8, 'Olivia', 'Martinez', 'olivia.martinez@example.com', '+667788990'));
users.push(new User(9, 'Matthew', 'Hernandez', 'matthew.hernandez@example.com', '+778899001'));
users.push(new User(10, 'Chloe', 'Lopez', 'chloe.lopez@example.com', '+889900112'));

console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filteredUsers = users.filter(user => user.id % 2 === 0);

console.log(filteredUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortedUsers = users.sort((a, b) => a.id - b.id);

console.log(sortedUsers);
// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
};
const clients = [];

clients.push(new Client(1, 'John', 'Doe', 'john.doe@example.com', '+123456789', ['item1', 'item2']));
clients.push(new Client(2, 'Jane', 'Smith', 'jane.smith@example.com', '+987654321', ['item3']));
clients.push(new Client(3, 'Michael', 'Johnson', 'michael.johnson@example.com', '+112233445', ['item4', 'item5', 'item6']));
clients.push(new Client(4, 'Emily', 'Brown', 'emily.brown@example.com', '+223344556', ['item7']));
clients.push(new Client(5, 'David', 'Williams', 'david.williams@example.com', '+334455667', ['item8', 'item9']));
clients.push(new Client(6, 'Sophia', 'Jones', 'sophia.jones@example.com', '+445566778', ['item10', 'item11']));
clients.push(new Client(7, 'Daniel', 'Garcia', 'daniel.garcia@example.com', '+556677889', ['item12', 'item13']));
clients.push(new Client(8, 'Olivia', 'Martinez', 'olivia.martinez@example.com', '+667788990', ['item14']));
clients.push(new Client(9, 'Matthew', 'Hernandez', 'matthew.hernandez@example.com', '+778899001', ['item15', 'item16', 'item17']));
clients.push(new Client(10, 'Chloe', 'Lopez', 'chloe.lopez@example.com', '+889900112', ['item18']));

console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort((a, b) => a.order.length - b.order.length);

console.log(clients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };

    this.info = function() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна: ${this.engineVolume} л`);
        if (this.driver) {
            console.log(`Водій: ${this.driver.name}`);
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

const myCar = new Car('Model S', 'Tesla', 2020, 250, 2.0);

myCar.drive();
myCar.info();

myCar.increaseMaxSpeed(20);
console.log(`Нова максимальна швидкість: ${myCar.maxSpeed} км/год`);

myCar.changeYear(2022);
console.log(`Новий рік випуску: ${myCar.year}`);

myCar.addDriver({name: 'John Doe', experience: 5});
myCar.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    }

    info() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна: ${this.engineVolume} л`);
        if (this.driver) {
            console.log(`Водій: ${this.driver.name}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const myCar = new Car('Model S', 'Tesla', 2020, 250, 2.0);

myCar.drive();
myCar.info();

myCar.increaseMaxSpeed(20);
console.log(`Нова максимальна швидкість: ${myCar.maxSpeed} км/год`);

myCar.changeYear(2022);
console.log(`Новий рік випуску: ${myCar.year}`);

myCar.addDriver({name: 'John Doe', experience: 5});
myCar.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('Anna', 18, 36),
    new Cinderella('Bella', 19, 37),
    new Cinderella('Clara', 20, 38),
    new Cinderella('Diana', 21, 36.5),
    new Cinderella('Eva', 22, 39),
    new Cinderella('Fiona', 23, 37.5),
    new Cinderella('Gina', 24, 40),
    new Cinderella('Hanna', 25, 38.5),
    new Cinderella('Ivy', 26, 36),
    new Cinderella('Jenna', 27, 39.5)
];

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    findCinderella(cinderellas) {
        for (const cinderella of cinderellas) {
            if (cinderella.footSize === this.foundShoeSize) {
                return cinderella;
            }
        }
    }
}

const prince = new Prince('Henry', 30, 36.5);

const matchingCinderella = prince.findCinderella(cinderellas);
console.log(`Принц знайшов свою попелюшку: ${matchingCinderella.name}`);

const foundCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.foundShoeSize);
console.log(`Принц знайшов свою попелюшку за допомогою find: ${foundCinderella.name}`);

// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myFilter = function(predicate) {
    const arr = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
};



