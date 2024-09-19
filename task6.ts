// Інтерфейс LibraryItem
interface LibraryItem {
    title: string;
    author: string;
    borrow(): void;
    getInfo(): string; // Додано метод getInfo()
}

// Клас Book реалізує LibraryItem
class Book implements LibraryItem {
    title: string;
    author: string;
    private pages: number;
    private isBorrowed: boolean = false;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`${this.title} is already borrowed.`);
        } else {
            this.isBorrowed = true;
            console.log(`You have borrowed ${this.title}.`);
        }
    }

    getInfo(): string {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

// Клас Magazine реалізує LibraryItem
class Magazine implements LibraryItem {
    title: string;
    author: string;
    private issueNumber: number;
    private isBorrowed: boolean = false;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`${this.title} is already borrowed.`);
        } else {
            this.isBorrowed = true;
            console.log(`You have borrowed ${this.title}.`);
        }
    }

    getInfo(): string {
        return `${this.title} by ${this.author}, Issue ${this.issueNumber}`;
    }
}

// Клас DVD реалізує LibraryItem
class DVD implements LibraryItem {
    title: string;
    author: string;
    private duration: number; // Duration in minutes
    private isBorrowed: boolean = false;

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`${this.title} is already borrowed.`);
        } else {
            this.isBorrowed = true;
            console.log(`You have borrowed ${this.title}.`);
        }
    }

    getInfo(): string {
        return `${this.title} by ${this.author}, ${this.duration} minutes`;
    }
}

// Клас Library
class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`${item.title} has been added to the library.`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        // @ts-ignore
        return this.items.find(item => item.title === name);
    }

    displayAvailableItems(): void {
        console.log('Available items in the library:');
        this.items.forEach(item => {
            console.log(item.getInfo());
        });
    }
}

// Створюємо екземпляри елементів бібліотеки
const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 281);
const magazine1 = new Magazine('National Geographic', 'Various', 2024);
const dvd1 = new DVD('The Matrix', 'Wachowski Brothers', 136);

// Створюємо бібліотеку і додаємо до неї елементи
const library = new Library();
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
