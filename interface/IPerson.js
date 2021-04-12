//IPerson.ts
/*
The class implementing the interface must implement the properties and abstract methods defined in the interface.
*/
var Person = /** @class */ (function () {
    // Implementation of the properties defined in the interface
    function Person(name) {
        this.name = name;
    }
    // Implementation of abstract method defined in interface
    Person.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
function greeter(person) {
    person.sayHello();
}
var me = new Person('Joseph');
greeter(me); // Hello Joseph
