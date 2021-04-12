var Foo = /** @class */ (function () {
    function Foo(prop) {
        this.prop = prop;
    }
    Foo.staticMethod = function () {
        /*
         Static methods cannot use this.
         Inside a static method, this refers to the class itself, not an instance of the class.
        */
        return 'staticMethod';
    };
    Foo.prototype.prototypeMethod = function () {
        return this.prop;
    };
    return Foo;
}());
// Static methods are called by class name.
console.log(Foo.staticMethod());
var foo = new Foo(123);
// Static methods cannot be called by instance.
// console.log(foo.staticMethod()); -> Uncaught TypeError: foo.staticMethod is not a function
