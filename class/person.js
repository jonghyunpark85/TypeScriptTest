// person.ts
var Person = /** @class */ (function () {
    function Person(name) {
        // Assign a value to the number of class properties
        this.name = name;
    }
    Person.prototype.walk = function () {
        console.log(this.name + " is walking.");
    };
    return Person;
}());
var person = new Person('Joseph');
person.walk(); // Joseph is walking
