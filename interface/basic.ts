//basic.ts

interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

// Todo interface is declared as the type of variable todo
let todo: Todo;

// The variable todo must conform to the Todo interface.
todo = { id: 1, content: 'typescript', completed: false }
