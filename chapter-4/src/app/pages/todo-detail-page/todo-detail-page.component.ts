import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-detail-page',
  templateUrl: './todo-detail-page.component.html',
  styleUrls: ['./todo-detail-page.component.css'],
})
export class TodoDetailPageComponent {
  todo!: TodoItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {
    this.route.params.subscribe((parameters) => {
      this.todoService
        .GetById(parameters['id'])
        .subscribe((fetchedTodo) => (this.todo = fetchedTodo));
    });
  }

  onBackClicked() {
    console.log('ok');
    this.router.navigate(['todo']);
  }

  onDeleteClicked(id: string) {
    this.todoService.Delete(id).subscribe((_) => {
      this.router.navigate(['todo']);
    });
  }

  onToggled(id: string) {
    this.todoService
      .Toggle(id, !this.todo?.isComplete)
      .subscribe((_) => (this.todo!.isComplete = !this.todo?.isComplete));
  }
}
