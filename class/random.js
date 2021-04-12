//random.ts
var Foo = /** @class */ (function () {
    function Foo() {
        this.MAX_LEN = 5;
        this.MSG = 'hello';
    }
    Foo.prototype.log = function () {
        // Properties declared readonly are prohibited from reassignment.
        this.MAX_LEN = 10; // Cannot assign to 'MAX_LEN' because it is a constant or a read-only property.
        this.MSG = 'Hi'; // Cannot assign to 'MSG' because it is a constant or a read-only property.
        console.log("MAX_LEN: " + this.MAX_LEN); // MAX_LEN: 5
        console.log("MSG: " + this.MSG); // MSG: hello
    };
    return Foo;
}());
new Foo().log();
