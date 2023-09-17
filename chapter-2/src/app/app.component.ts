import { Component } from '@angular/core';
import { TodoItem } from './models/todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myTodos: TodoItem[] = [];
  todoText: string = '';
  globalId: number = 1;

  onCreateButtonClicked() {
    this.myTodos.push({
      title: this.todoText,
      isChecked: false,
      id: this.globalId++,
    });
    this.todoText = '';
  }

  onDeleteClicked(id: number) {
    this.myTodos = this.myTodos.filter((todo) => todo.id !== id);
  }

  onToggled(id: number) {
    const indexOfTodoToUpdate = this.myTodos.findIndex(
      (todo) => todo.id === id
    );
    if (indexOfTodoToUpdate !== -1) {
      this.myTodos[indexOfTodoToUpdate].isChecked =
        !this.myTodos[indexOfTodoToUpdate].isChecked;
    }
  }
}
