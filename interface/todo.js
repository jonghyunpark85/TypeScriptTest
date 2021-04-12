//todo.ts
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var todos = [];
// Todo interface is declared as the type of variable todo
function addTodo(todo) {
    todos = __spreadArray(__spreadArray([], todos), [todo]);
}
// The variable todo must conform to the Todo interface.
var newTodo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
console.log(todos);
// [ { id: 1, content: 'typescript', completed: false } ]
