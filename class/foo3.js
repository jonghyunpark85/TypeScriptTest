//foo3.ts
var Foo = /** @class */ (function () {
    // x is a local variable that is only valid inside the constructor.
    function Foo(x) {
        console.log(x);
    }
    return Foo;
}());
var foo = new Foo('Hello');
console.log(foo); // Foo {}
