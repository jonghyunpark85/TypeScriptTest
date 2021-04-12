//queue.ts
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
var queue = new Queue();
queue.push(0);
queue.push('1');
console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // Runtime error
