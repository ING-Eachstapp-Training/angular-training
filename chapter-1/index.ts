interface Todo {
  title: string;
  isChecked: boolean;
}

class TodoList {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  readTodos(): void {
    console.log("Todo List:");
    this.todos.forEach((todo, index) => {
      console.log(
        `${index + 1}. [${todo.isChecked ? "x" : " "}] ${todo.title}`
      );
    });
  }

  createTodo(title: string): void {
    const newTodo: Todo = { title: title, isChecked: false };
    this.todos.push(newTodo);
    console.log("New todo created:", title);
  }

  deleteTodo(id: number): void {
    if (id >= 1 && id <= this.todos.length) {
      this.todos.splice(id - 1, 1);
      console.log("Todo deleted.");
    } else {
      console.log("Invalid todo ID.");
    }
  }

  checkTodo(id: number): void {
    if (id >= 1 && id <= this.todos.length) {
      this.todos[id - 1].isChecked = true;
      console.log("Todo checked off.");
    } else {
      console.log("Invalid todo ID.");
    }
  }

  uncheckTodo(id: number): void {
    if (id >= 1 && id <= this.todos.length) {
      this.todos[id - 1].isChecked = false;
      console.log("Todo unchecked.");
    } else {
      console.log("Invalid todo ID.");
    }
  }
}

const todoList = new TodoList();

todoList.createTodo("Buy groceries");
todoList.createTodo("Finish homework");
todoList.readTodos();
todoList.checkTodo(1);
todoList.readTodos();
todoList.uncheckTodo(1);
todoList.readTodos();
todoList.deleteTodo(1);
todoList.readTodos();
