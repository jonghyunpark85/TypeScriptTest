"use strict";
//basic.ts
//let foo: string = 'hello';
//let bar: number = true; -> error TS2322: Type 'true' is not assignable to type 'number'.
// function declare
function multiply1(x, y) {
    return x * y;
}
// function expression
var multiply2 = function (x, y) { return x * y; };
console.log(multiply1(10, 2));
console.log(multiply2(10, 3));
//console.log(multiply1(true, 1)); -> error TS2345: Argument of type 'true' is not assignable to parameter of type 'number'.
// boolean
var isDone = false;
// null
var n = null;
// undefined
var u = undefined;
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// string
var color = "blue";
color = 'red';
var myName = "Joseph";
var greeting = "Hello, my name is " + myName + ".";
// object
var obj = {};
// array
var list1 = [1, 'two', true];
var list2 = [1, 2, 3];
var list3 = [1, 2, 3];
// tuple
var tuple;
tuple = ['hello', 10]; // OK
//tuple = [10, 'hello']; -> Error
//tuple = ['hello', 10, 'world', 100]; -> Error
//tuple.push(true); -> Error
// enum
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Green;
console.log(c1); // 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
console.log(c2); // 2
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
var c3 = Color3.Blue;
console.log(c3); // 4
/*
any: Used for variables that cannot be type inference or do not need type check.
Like variables declared with the var keyword, any type of value can be assigned.
*/
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
// void
function warnUser() {
    console.log("This is my warning message");
}
// never
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
// string
var primiteveStr;
primiteveStr = 'hello'; // OK
//primiteveStr = new String('hello'); -> Error
/*
Type 'String' is not assignable to type 'string'.
'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/
var objectStr;
objectStr = 'hello'; // OK
objectStr = new String('hello'); // OK
// Date
var today = new Date();
// HTMLElement
var elem = document.getElementById('myId');
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
