var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Employee.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Salary: ").concat(this.salary);
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    Developer.prototype.getAnnualBonus = function () {
        return this.salary * 0.10; // 10% бонусу
    };
    Developer.prototype.pay = function () {
        console.log("".concat(this.name, " has been paid."));
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    Manager.prototype.getAnnualBonus = function () {
        return this.salary * 0.20; // 20% бонусу
    };
    Manager.prototype.pay = function () {
        console.log("".concat(this.name, " has been paid."));
    };
    return Manager;
}(Employee));
var employees = [
    new Developer('Alice', 30, 80000),
    new Developer('Bob', 25, 90000),
    new Manager('Charlie', 40, 120000),
    new Manager('Dana', 35, 110000),
];
var totalBonus = 0;
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    totalBonus += employee.getAnnualBonus();
}
console.log("Total annual bonuses: ".concat(totalBonus));
for (var _a = 0, employees_2 = employees; _a < employees_2.length; _a++) {
    var employee = employees_2[_a];
    if (employee instanceof Developer || employee instanceof Manager) {
        employee.pay();
    }
}
