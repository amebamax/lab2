// Клас Book реалізує LibraryItem
var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    Book.prototype.borrow = function () {
        if (this.isBorrowed) {
            console.log("".concat(this.title, " is already borrowed."));
        }
        else {
            this.isBorrowed = true;
            console.log("You have borrowed ".concat(this.title, "."));
        }
    };
    Book.prototype.getInfo = function () {
        return "".concat(this.title, " by ").concat(this.author, ", ").concat(this.pages, " pages");
    };
    return Book;
}());
// Клас Magazine реалізує LibraryItem
var Magazine = /** @class */ (function () {
    function Magazine(title, author, issueNumber) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    Magazine.prototype.borrow = function () {
        if (this.isBorrowed) {
            console.log("".concat(this.title, " is already borrowed."));
        }
        else {
            this.isBorrowed = true;
            console.log("You have borrowed ".concat(this.title, "."));
        }
    };
    Magazine.prototype.getInfo = function () {
        return "".concat(this.title, " by ").concat(this.author, ", Issue ").concat(this.issueNumber);
    };
    return Magazine;
}());
// Клас DVD реалізує LibraryItem
var DVD = /** @class */ (function () {
    function DVD(title, author, duration) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    DVD.prototype.borrow = function () {
        if (this.isBorrowed) {
            console.log("".concat(this.title, " is already borrowed."));
        }
        else {
            this.isBorrowed = true;
            console.log("You have borrowed ".concat(this.title, "."));
        }
    };
    DVD.prototype.getInfo = function () {
        return "".concat(this.title, " by ").concat(this.author, ", ").concat(this.duration, " minutes");
    };
    return DVD;
}());
// Клас Library
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("".concat(item.title, " has been added to the library."));
    };
    Library.prototype.findItemByName = function (name) {
        // @ts-ignore
        return this.items.find(function (item) { return item.title === name; });
    };
    Library.prototype.displayAvailableItems = function () {
        console.log('Available items in the library:');
        this.items.forEach(function (item) {
            console.log(item.getInfo());
        });
    };
    return Library;
}());
// Створюємо екземпляри елементів бібліотеки
var book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 281);
var magazine1 = new Magazine('National Geographic', 'Various', 2024);
var dvd1 = new DVD('The Matrix', 'Wachowski Brothers', 136);
// Створюємо бібліотеку і додаємо до неї елементи
var library = new Library();
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);
// Виводимо доступні елементи в бібліотеці
library.displayAvailableItems();
// Позичаємо деякі елементи
book1.borrow();
dvd1.borrow();
book1.borrow(); // Спроба позичити знову
magazine1.borrow(); // Позичаємо журнал
// Виводимо доступні елементи в бібліотеці після позичання
library.displayAvailableItems();
