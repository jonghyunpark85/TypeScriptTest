//queue2.ts

class Queue {
    protected data: any[] = [];

    push(item: any) {
        this.data.push(item);
    }

    pop() {
        return this.data.shift();
    }
}

// Inheriting Queue class and defining NumberQueue class for number type
class NumberQueue extends Queue {
    // Push only elements of type number.
    push(item: number) {
        super.push(item);
    }

    pop(): number {
        return super.pop();
    }
}

const queue = new NumberQueue();

queue.push(0);
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// queue.push('1');
queue.push(+'1'); 

console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // 1
