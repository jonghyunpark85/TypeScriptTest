//foo2.ts
var Foo = /** @class */ (function () {
    /*
    The constructor parameter x in which the access modifier is declared is declared as a class property and initialized automatically.
    Since public is declared, x can be referenced outside the class.
    */
    function Foo(x) {
        this.x = x;
    }
    return Foo;
}());
var foo = new Foo('Hello');
console.log(foo); // Foo { x: 'Hello' }
console.log(foo.x); // Hello
var Bar = /** @class */ (function () {
    /*
    The constructor parameter x in which the access modifier is declared is declared as a member variable and automatically initialized.
    Since private is declared, x can only be referenced inside the class.
    */
    function Bar(x) {
        this.x = x;
    }
    return Bar;
}());
var bar = new Bar('Hello');
console.log(bar); // Bar { x: 'Hello' }
// bar.x declared private can only be referenced inside the class
// console.log(bar.x); -> Property 'x' is private and only accessible within class 'Bar'.
