// ITodo.ts
interface ITodo {
    id: number;
    content: string;
    completed: boolean;
}

// Todo class must implement the ITodo interface.
class Todo implements ITodo {
    constructor (
        public id: number,
        public content: string,
        public completed: boolean
    ) { }
}

const todo = new Todo(1, 'Typescript', false);

console.log(todo);
