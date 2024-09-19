abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number;

    public getInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }
}

interface Payable {
    pay(): void;
}

class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.10; // 10% бонусу
    }

    pay(): void {
        console.log(`${this.name} has been paid.`);
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.20; // 20% бонусу
    }

    pay(): void {
        console.log(`${this.name} has been paid.`);
    }
}

const employees: Employee[] = [
    new Developer('Alice', 30, 80000),
    new Developer('Bob', 25, 90000),
    new Manager('Charlie', 40, 120000),
    new Manager('Dana', 35, 110000),
];

let totalBonus = 0;

for (const employee of employees) {
    totalBonus += employee.getAnnualBonus();
}


console.log(`Total annual bonuses: ${totalBonus}`);

for (const employee of employees) {
    if (employee instanceof Developer || employee instanceof Manager) {
        (employee as Payable).pay();
    }
}
