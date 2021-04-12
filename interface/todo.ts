//todo.ts

interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

let todos: Todo[] = [];

// Todo interface is declared as the type of variable todo
function addTodo(todo: Todo) {
    todos = [...todos, todo];
}

// The variable todo must conform to the Todo interface.
const newTodo: Todo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
console.log(todos)
// [ { id: 1, content: 'typescript', completed: false } ]
