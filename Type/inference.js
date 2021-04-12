"use strict";
// inference.ts
var joo = 123;
//joo = 'hi';  -> error: Type '"hi"' is not assignable to type 'number'.
var koo; // let joo: any와 동치
koo = 'Hello';
console.log(typeof koo); // string
koo = true;
console.log(typeof koo); // boolean
