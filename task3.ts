abstract class Car {
    // Абстрактний метод
    abstract getDescription(): string;

    // Загальна властивість, доступна лише для похідних класів
    protected brand: string;
    protected model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public getYear(): number {
        return this.year;
    }

    public displayInfo(): void {
        console.log(this.getDescription());
        console.log(`Year: ${this.getYear()}`);
    }
}

class BMW extends Car {
    private engineType: string;

    constructor(model: string, year: number, engineType: string) {
        super('BMW', model, year);
        this.engineType = engineType;
    }

    getDescription(): string {
        return `Brand: ${this.brand}, Model: ${this.model}, Engine: ${this.engineType}`;
    }
}

class Audi extends Car {
    private isLuxury: boolean;

    constructor(model: string, year: number, isLuxury: boolean) {
        super('Audi', model, year);
        this.isLuxury = isLuxury;
    }

    getDescription(): string {
        return `Brand: ${this.brand}, Model: ${this.model}, Luxury: ${this.isLuxury ? 'Yes' : 'No'}`;
    }
}

class Tesla extends Car {
    private range: number;

    constructor(model: string, year: number, range: number) {
        super('Tesla', model, year);
        this.range = range;
    }

    getDescription(): string {
        return `Brand: ${this.brand}, Model: ${this.model}, Range: ${this.range} km`;
    }
}

const bmw1 = new BMW('X5', 2024, 'V6');
const bmw2 = new BMW('M3', 2023, 'V8');
const audi1 = new Audi('A4', 2022, true);
const audi2 = new Audi('Q7', 2021, false);
const tesla1 = new Tesla('Model S', 2024, 650);
const tesla2 = new Tesla('Model 3', 2023, 500);

bmw1.displayInfo();
bmw2.displayInfo();
audi1.displayInfo();
audi2.displayInfo();
tesla1.displayInfo();
tesla2.displayInfo();
