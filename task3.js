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
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getYear = function () {
        return this.year;
    };
    Car.prototype.displayInfo = function () {
        console.log(this.getDescription());
        console.log("Year: ".concat(this.getYear()));
    };
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, year, engineType) {
        var _this = _super.call(this, 'BMW', model, year) || this;
        _this.engineType = engineType;
        return _this;
    }
    BMW.prototype.getDescription = function () {
        return "Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Engine: ").concat(this.engineType);
    };
    return BMW;
}(Car));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(model, year, isLuxury) {
        var _this = _super.call(this, 'Audi', model, year) || this;
        _this.isLuxury = isLuxury;
        return _this;
    }
    Audi.prototype.getDescription = function () {
        return "Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Luxury: ").concat(this.isLuxury ? 'Yes' : 'No');
    };
    return Audi;
}(Car));
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(model, year, range) {
        var _this = _super.call(this, 'Tesla', model, year) || this;
        _this.range = range;
        return _this;
    }
    Tesla.prototype.getDescription = function () {
        return "Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Range: ").concat(this.range, " km");
    };
    return Tesla;
}(Car));
var bmw1 = new BMW('X5', 2024, 'V6');
var bmw2 = new BMW('M3', 2023, 'V8');
var audi1 = new Audi('A4', 2022, true);
var audi2 = new Audi('Q7', 2021, false);
var tesla1 = new Tesla('Model S', 2024, 650);
var tesla2 = new Tesla('Model 3', 2023, 500);
bmw1.displayInfo();
bmw2.displayInfo();
audi1.displayInfo();
audi2.displayInfo();
tesla1.displayInfo();
tesla2.displayInfo();
