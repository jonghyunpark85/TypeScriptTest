// Todo class must implement the ITodo interface.
var Todo = /** @class */ (function () {
    function Todo(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
    return Todo;
}());
var todo = new Todo(1, 'Typescript', false);
console.log(todo);
