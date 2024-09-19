// Інтерфейс Course
interface Course {
    title: string;
    duration: number; // Тривалість в годинах
    students: string[]; // Масив студентів
}

// Клас OnlineCourse реалізує Course
class OnlineCourse implements Course {
    title: string;
    duration: number;
    students: string[] = [];

    constructor(title: string, duration: number) {
        this.title = title;
        this.duration = duration;
    }

    // Метод для реєстрації студентів
    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} has been registered for ${this.title}.`);
        } else {
            console.log(`${student} is already registered for ${this.title}.`);
        }
    }

    // Метод для перевірки реєстрації студента
    isStudentRegistered(student: string): boolean {
        // @ts-ignore
        return this.students.includes(student);
    }
}

// Клас CourseManager
class CourseManager {
    private courses: OnlineCourse[] = [];

    // Метод для додавання курсу
    addCourse(course: OnlineCourse): void {
        this.courses.push(course);
        console.log(`Course ${course.title} has been added.`);
    }

    // Метод для видалення курсу
    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(course => course.title !== courseName);
        console.log(`Course ${courseName} has been removed.`);
    }

    // Метод для пошуку курсу за назвою
    findCourse(courseName: string): OnlineCourse | undefined {
        // @ts-ignore
        return this.courses.find(course => course.title === courseName);
    }

    // Метод для виведення всіх курсів
    displayCourses(): void {
        this.courses.forEach(course => {
            console.log(`Course Title: ${course.title}, Duration: ${course.duration} hours`);
            console.log(`Registered Students: ${course.students.join(', ')}`);
        });
    }
}

// Створюємо курси
const course1 = new OnlineCourse('JavaScript Basics', 20);
const course2 = new OnlineCourse('Advanced TypeScript', 15);
const course3 = new OnlineCourse('Web Development Fundamentals', 30);

// Створюємо менеджер курсів
const manager = new CourseManager();

// Додаємо курси до менеджера
manager.addCourse(course1);
manager.addCourse(course2);
manager.addCourse(course3);

// Реєструємо студентів на курси
course1.registerStudent('Alice');
course1.registerStudent('Bob');
course2.registerStudent('Charlie');
course3.registerStudent('Dana');
course3.registerStudent('Alice'); // Alice already registered for Web Development Fundamentals

// Виводимо всі курси і зареєстрованих студентів
manager.displayCourses();
