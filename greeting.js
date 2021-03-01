var Greeting = /** @class */ (function () {
    function Greeting(name) {
        this.name = name;
    }
    Greeting.prototype.sayHello = function () {
        return "Hello, " + this.name;
    };
    return Greeting;
}());
var greeting = new Greeting('Joseph');
console.log(greeting.sayHello());
