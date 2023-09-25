import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css'],
})
export class TodoListPageComponent {
  myTodos: TodoItem[] = [];
  todoForm: FormGroup;
  globalId: number = 1;

  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.todoForm = this.fb.group({
      todoText: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
    });
    this.todoService
      .GetAll()
      .subscribe((allTodos) => (this.myTodos = allTodos));
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.todoService
        .Create(this.todoForm.value.todoText)
        .subscribe((newTodo) => this.myTodos.push(newTodo));
      this.todoForm.reset();
    }
  }

  onDeleteClicked(id: string) {
    this.todoService.Delete(id).subscribe((_) => {
      this.myTodos = this.myTodos.filter((todo) => todo.id !== id);
    });
  }

  onToggled(id: string) {
    const todoToUpdate = this.myTodos.find((todo) => todo.id === id);
    this.todoService
      .Toggle(id, !todoToUpdate?.isComplete)
      .subscribe((_) => (todoToUpdate!.isComplete = !todoToUpdate?.isComplete));
  }
}
