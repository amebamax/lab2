interface Animal {
    name: string;
    age: number;
    canFly?: boolean;
    canSwim?: boolean;

    move(): void;
}

class Cat implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} ходить на 4 лапах.`);
    }
}


class Bird implements Animal {
    name: string;
    age: number;
    canFly: boolean;

    constructor(name: string, age: number, canFly: boolean = true) {
        this.name = name;
        this.age = age;
        this.canFly = canFly;
    }

    move(): void {
        if (this.canFly) {
            console.log(`${this.name} літає у небі.`);
        } else {
            console.log(`${this.name} ходить на 2 лапах.`);
        }
    }
}


class Fish implements Animal {
    name: string;
    age: number;
    canSwim: boolean;

    constructor(name: string, age: number, canSwim: boolean = true) {
        this.name = name;
        this.age = age;
        this.canSwim = canSwim;
    }

    move(): void {
        if (this.canSwim) {
            console.log(`${this.name} плаває у воді.`);
        } else {
            console.log(`${this.name} стоїть на одному місці.`);
        }
    }
}


const cat = new Cat("Лео", 3);
const bird = new Bird("Петя", 2);
const fish = new Fish("Немо", 1);

cat.move();
bird.move();
fish.move();
