class Foo {
    constructor(prop) {
        this.prop = prop;
    }

    static staticMethod() {
        /*
         Static methods cannot use this.
         Inside a static method, this refers to the class itself, not an instance of the class.
        */
        return 'staticMethod';
    }

    prototypeMethod() {
        return this.prop;
    }
}

// Static methods are called by class name.
console.log(Foo.staticMethod());

const foo = new Foo(123);
// Static methods cannot be called by instance.
// console.log(foo.staticMethod()); -> Uncaught TypeError: foo.staticMethod is not a function
