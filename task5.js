// Клас OnlineCourse реалізує Course
var OnlineCourse = /** @class */ (function () {
    function OnlineCourse(title, duration) {
        this.students = [];
        this.title = title;
        this.duration = duration;
    }
    // Метод для реєстрації студентів
    OnlineCourse.prototype.registerStudent = function (student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log("".concat(student, " has been registered for ").concat(this.title, "."));
        }
        else {
            console.log("".concat(student, " is already registered for ").concat(this.title, "."));
        }
    };
    // Метод для перевірки реєстрації студента
    OnlineCourse.prototype.isStudentRegistered = function (student) {
        // @ts-ignore
        return this.students.includes(student);
    };
    return OnlineCourse;
}());
// Клас CourseManager
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
    }
    // Метод для додавання курсу
    CourseManager.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("Course ".concat(course.title, " has been added."));
    };
    // Метод для видалення курсу
    CourseManager.prototype.removeCourse = function (courseName) {
        this.courses = this.courses.filter(function (course) { return course.title !== courseName; });
        console.log("Course ".concat(courseName, " has been removed."));
    };
    // Метод для пошуку курсу за назвою
    CourseManager.prototype.findCourse = function (courseName) {
        // @ts-ignore
        return this.courses.find(function (course) { return course.title === courseName; });
    };
    // Метод для виведення всіх курсів
    CourseManager.prototype.displayCourses = function () {
        this.courses.forEach(function (course) {
            console.log("Course Title: ".concat(course.title, ", Duration: ").concat(course.duration, " hours"));
            console.log("Registered Students: ".concat(course.students.join(', ')));
        });
    };
    return CourseManager;
}());
// Створюємо курси
var course1 = new OnlineCourse('JavaScript Basics', 20);
var course2 = new OnlineCourse('Advanced TypeScript', 15);
var course3 = new OnlineCourse('Web Development Fundamentals', 30);
// Створюємо менеджер курсів
var manager = new CourseManager();
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
