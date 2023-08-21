interface Todo {
  title: string;
  isChecked: boolean;
}

const todos: Todo[] = [];

function readTodos() {
  console.log("Todo List:");
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. [${todo.isChecked ? "x" : " "}] ${todo.title}`);
  });
}

function createTodo(title: string) {
  const newTodo: Todo = {
    title,
    isChecked: false,
  };
  todos.push(newTodo);
  console.log("New todo created:", title);
}

function deleteTodo(id: number) {
  if (id >= 1 && id <= todos.length) {
    todos.splice(id - 1, 1);
    console.log("Todo deleted.");
  } else {
    console.log("Invalid todo ID.");
  }
}

function checkTodo(id: number) {
  if (id >= 1 && id <= todos.length) {
    todos[id - 1].isChecked = true;
    console.log("Todo checked off.");
  } else {
    console.log("Invalid todo ID.");
  }
}

function uncheckTodo(id: number) {
  if (id >= 1 && id <= todos.length) {
    todos[id - 1].isChecked = false;
    console.log("Todo unchecked.");
  } else {
    console.log("Invalid todo ID.");
  }
}

createTodo("Buy groceries");
createTodo("Finish homework");
readTodos();
checkTodo(1);
readTodos();
uncheckTodo(1);
readTodos();
deleteTodo(1);
readTodos();
