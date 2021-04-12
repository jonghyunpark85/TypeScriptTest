//generic.ts
var _a, _b, _c, _d, _e, _f;
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
// number dedicated Queue.
var numberQueue = new Queue();
numberQueue.push(0);
// numberQueue.push('1');
numberQueue.push(+'1');
// ?. => optional chaining
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining
console.log((_a = numberQueue.pop()) === null || _a === void 0 ? void 0 : _a.toFixed()); // 0
console.log((_b = numberQueue.pop()) === null || _b === void 0 ? void 0 : _b.toFixed()); // 1
console.log((_c = numberQueue.pop()) === null || _c === void 0 ? void 0 : _c.toFixed()); // undefined
// string dedicated Queue
var stringQueue = new Queue();
stringQueue.push('Hello');
stringQueue.push('World');
console.log((_d = stringQueue.pop()) === null || _d === void 0 ? void 0 : _d.toUpperCase()); // HELLO
console.log((_e = stringQueue.pop()) === null || _e === void 0 ? void 0 : _e.toUpperCase()); // WORLD
console.log((_f = stringQueue.pop()) === null || _f === void 0 ? void 0 : _f.toUpperCase()); // undefined
// 커스텀 객체 전용 Queue
var myQueue = new Queue();
myQueue.push({ name: 'Joseph', age: 10 });
myQueue.push({ name: 'Joe', age: 20 });
console.log(myQueue.pop()); // { name: 'Joseph', age: 10 }
console.log(myQueue.pop()); // { name: 'Joe', age: 20 }
console.log(myQueue.pop()); // undefined
