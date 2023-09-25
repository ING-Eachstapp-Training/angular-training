import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input({ required: true }) todo!: TodoItem;
  @Input() isNavigationBack: boolean = false;
  @Output() deleteClicked = new EventEmitter<string>();
  @Output() toggled = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  onDeleteTodoClicked() {
    this.deleteClicked.emit(this.todo.id);
  }

  onToggle() {
    this.toggled.emit(this.todo.id);
  }

  onDetailTodoClicked() {
    if (this.isNavigationBack) {
      this.router.navigate(['todo']);
    } else {
      this.router.navigate([`detail/${this.todo.id}`], {
        relativeTo: this.route,
      });
    }
  }
}
