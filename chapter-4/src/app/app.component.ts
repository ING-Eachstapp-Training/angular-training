import { Component } from '@angular/core';
import { TodoItem } from './models/todo-item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myTodos: TodoItem[] = [];
  todoForm: FormGroup;
  globalId: number = 1;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      todoText: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.myTodos.push({
        title: this.todoForm.value.todoText,
        isChecked: false,
        id: this.globalId++,
      });
      this.todoForm.reset();
    }
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
