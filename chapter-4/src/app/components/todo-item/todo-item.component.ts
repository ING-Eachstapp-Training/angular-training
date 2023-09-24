import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input({ required: true }) todo!: TodoItem;
  @Output() deleteClicked = new EventEmitter<number>();
  @Output() toggled = new EventEmitter<number>();

  onDeleteTodoClicked() {
    this.deleteClicked.emit(this.todo.id);
  }

  onToggle() {
    this.toggled.emit(this.todo.id);
  }
}
