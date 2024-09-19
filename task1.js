var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " \u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 4 \u043B\u0430\u043F\u0430\u0445."));
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name, age, canFly) {
        if (canFly === void 0) { canFly = true; }
        this.name = name;
        this.age = age;
        this.canFly = canFly;
    }
    Bird.prototype.move = function () {
        if (this.canFly) {
            console.log("".concat(this.name, " \u043B\u0456\u0442\u0430\u0454 \u0443 \u043D\u0435\u0431\u0456."));
        }
        else {
            console.log("".concat(this.name, " \u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 2 \u043B\u0430\u043F\u0430\u0445."));
        }
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(name, age, canSwim) {
        if (canSwim === void 0) { canSwim = true; }
        this.name = name;
        this.age = age;
        this.canSwim = canSwim;
    }
    Fish.prototype.move = function () {
        if (this.canSwim) {
            console.log("".concat(this.name, " \u043F\u043B\u0430\u0432\u0430\u0454 \u0443 \u0432\u043E\u0434\u0456."));
        }
        else {
            console.log("".concat(this.name, " \u0441\u0442\u043E\u0457\u0442\u044C \u043D\u0430 \u043E\u0434\u043D\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456."));
        }
    };
    return Fish;
}());
var cat = new Cat("Лео", 3);
var bird = new Bird("Петя", 2);
var fish = new Fish("Немо", 1);
cat.move();
bird.move();
fish.move();
