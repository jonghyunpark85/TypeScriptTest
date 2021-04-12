//queue.ts

class Queue {
    protected data: any[] = [];

    push(item: any) {
        this.data.push(item);
    }

    pop() {
        return this.data.shift();
    }
}

const queue = new Queue();

queue.push(0);
queue.push('1');

console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // Runtime error
