// Exercise 1 

// Objective: Understand the "this" keyword in different contexts.
// Instructions:

// 1. Create three functions: one global, one as an object method, and an arrow function inside an object.
// 2. Print the value of this inside each function.
// 3. Discuss or note down the differences you observe in the value of this across the three scenarios.

function global() {
    console.log(this);
}

global();

const car = {
    make: 'Chevy',
    model: 'Impala',
    year: 1967,
    return: function() {
        console.log('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
    },
}

car.return();

const otherCar = {
    otherMake: 'Ford',
    otherModel: 'Mustang',
    otherYear: 1969,
    return: () => 
        console.log('I have a ' + this.otherYear + ' ' + this.otherMake + ' ' + this.otherModel + '.'),
}

otherCar.return();

// Observations: the global functin returned the window object, the object method returned the return function for the object, and the arrow function returned undefined for each property.

// Exercise 1 complete


// Exercise 2

// Objective: Delve into Object-Oriented Programming by creating and interacting with classes.
// Instructions:
// Define a Person class with properties name and age.
// Add a method greet() to this class which outputs a greeting.
// Instantiate two different Person objects and invoke their greet methods.

// class Person {
//     name = name;
//     age = age;
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const person1 = new Person('Valory', 25);
// const person2 = new Person('Zane', 26);

// person1.greet();
// person2.greet();
    

// Exercise 2 complete


// Exercise 3

// Objective: Understand the role of constructor methods within classes.
// Instructions:
// 1. Modify your Person class. The constructor should now accept and initialize name and age properties.
// 2. Create two different Person instances with unique names and ages.

class OtherPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person3 = new OtherPerson('Valory', 25);
const person4 = new OtherPerson('Zane', 26);

person3.greet();
person4.greet();

// Exercise 3 complete


// Exercise 4

// Objective: Familiarize with static methods in classes.
// Instructions:
// 1. Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
// 2. Try accessing this method both from the class itself and from an instance of the class. Document the outcomes

class AnotherPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    static info() {
        console.log('This is a Person class.');
    }
}

const person5 = new AnotherPerson('Michelle', 27);

AnotherPerson.info();
// person5.info();

// The static method was only accessible through the class itself, not through an instance of the class. The result when trying to access through an instance of the class was "person5.info is not a function".

// Exercise 4 complete


// Exercise 5

// Objective: Implement getters and setters for class properties.
// Instructions:
// 1. Within your Person class, add getters and setters for the age property.
// 2. Ensure with the setter that age can't be set to a negative value.
// 3. Instantiate a Person object, try setting a negative age, and observe the results.

class YetAnotherPerson { 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    static info() {
        console.log('This is a Person class.');
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            console.log('Age cannot be negative.');
        } else {
        this._age = value;
        }
    }
}

const person6 = new YetAnotherPerson('Britney', -1);

person6.greet();

// It returned "Age cannot be negative." in the console, but it also returned the object with the age property set to undefined.

// Exercise 5 complete


// Exercise 6

// Objective: Understand and implement private fields in classes.
// Instructions:
// 1. Visit a linked repository.
// 2. Click Use this template followed by Create new repository.
// 3. Give this repository a name of private fields in classes.
// 4. Make sure this is a public repository.
// 5. Read the readMe.md file for further instructions.

// Exercise 6 to be completed in separate repository


// Exercise 7

// Objective: Integrate multiple concepts: classes, methods, and private fields.

// Instructions:
// 1. As a challenge, design a Library class. This class should be able to store book objects.
// 2. For book objects, you should have a Book class. This class should have private fields for ISBN and public fields like title, author, and yearPublished.
// 3. The Library should feature methods that allow a user to add a book, remove a book, and list all books.
// 4. Implement this system and run a series of operations, such as adding a book, listing books, etc.


class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(book) {
        this.books.splice(this.books.indexOf(book), 1);
    }
    listBooks() {
        console.log(this.books);
    }
}

class Book {
    #isbn;
    constructor(title, author, yearPublished, isbn) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.#isbn = isbn;
    }
}

const library = new Library();

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 9780261103283);
const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 1954, 9780261102354);
const book3 = new Book('The Two Towers', 'J.R.R. Tolkien', 1954, 9780261102361);
const book4 = new Book('The Return of the King', 'J.R.R. Tolkien', 1955, 9780261102378);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

library.listBooks();

library.removeBook(book3);

// Exercise 7 complete


// Exercise 8

// Instructions:
// Create a class Student with properties name and grades. Implement methods to add grades and compute the average. How does the this keyword behave differently in arrow funcitons compared to regular funcitons?

class Student {
    constructor (name, grades) {
        this.name = name;
        this.grades = grades;
    }

    addGrades(grade) {
        this.grades.push(grade);
    }

    computeAverage() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    }

    computeAverageArrow = () => {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    }
}

const student1 = new Student('Valory', [100, 95, 90, 85, 80]);
const student2 = new Student('Zane', [95, 90, 90, 85, 80]);

console.log(student1.computeAverage());
console.log(student2.computeAverageArrow());

// The this keyword behaves the same in both regular functions and arrow functions.

// Exercise 8 complete