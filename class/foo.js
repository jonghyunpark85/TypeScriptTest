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
// foo.ts
var Foo = /** @class */ (function () {
    function Foo(x, y, z) {
        // All public, protected, and private access modifiers can be referenced inside the class.
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Foo;
}());
var foo = new Foo('x', 'y', 'z');
// The public access modifier can be referenced from outside the class through the class instance.
console.log(foo.x);
// The protected access modifier cannot be referenced outside the class through a class instance.
// console.log(foo.y); -> error TS2445: Property 'y' is protected and only accessible within class 'Foo' and its subclasses.
// The private access modifier cannot be referenced outside the class through the class instance.
// console.log(foo.z); -> error TS2341: Property 'z' is private and only accessible within class 'Foo'.
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar(x, y, z) {
        var _this = _super.call(this, x, y, z) || this;
        //The public access limiter can be referenced inside the child class.
        console.log(_this.x);
        //The protected access limiter can be referenced inside the child class.
        console.log(_this.y);
        return _this;
        //Private access modifiers cannot be referenced inside child classes.
        //console.log(this.z); ->error TS2341: Property 'z' is private and only accessible within class 'Foo'.
    }
    return Bar;
}(Foo));
