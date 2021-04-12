//queue2.ts
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
// Inheriting Queue class and defining NumberQueue class for number type
var NumberQueue = /** @class */ (function (_super) {
    __extends(NumberQueue, _super);
    function NumberQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Push only elements of type number.
    NumberQueue.prototype.push = function (item) {
        _super.prototype.push.call(this, item);
    };
    NumberQueue.prototype.pop = function () {
        return _super.prototype.pop.call(this);
    };
    return NumberQueue;
}(Queue));
var queue = new NumberQueue();
queue.push(0);
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// queue.push('1');
queue.push(+'1');
console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // 1
