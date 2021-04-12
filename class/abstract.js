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
//abstract.ts
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // normal method
    Animal.prototype.move = function () {
        console.log('roaming the earth...');
    };
    return Animal;
}());
// new Animal();
// error TS2511: Cannot create an instance of the abstract class 'Animal'.
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // A class that inherits an abstract class must implement the abstract method of the abstract class.
    Dog.prototype.makeSound = function () {
        console.log('bowwow~~');
    };
    return Dog;
}(Animal));
var myDog = new Dog();
myDog.makeSound();
myDog.move();
