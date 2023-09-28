import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  authHeaders = { Authorization: localStorage.getItem('token')! };
  constructor(private http: HttpClient) {}

  GetAll(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('http://localhost:8080/task', {
      headers: this.authHeaders,
    });
  }

  GetById(taskId: string): Observable<TodoItem> {
    return this.http.get<TodoItem>(`http://localhost:8080/task/${taskId}`, {
      headers: this.authHeaders,
    });
  }

  Create(title: any): Observable<TodoItem> {
    return this.http.post<TodoItem>(
      'http://localhost:8080/task',
      { title: title },
      { headers: this.authHeaders }
    );
  }

  Delete(taskId: string): Observable<void> {
    return this.http.delete<void>(
      `http://localhost:8080/task?taskId=${taskId}`,
      {
        headers: this.authHeaders,
      }
    );
  }

  Toggle(taskId: string, isComplete: boolean): Observable<void> {
    return this.http.put<void>(
      `http://localhost:8080/task/toggletask?taskId=${taskId}&newIsComplete=${isComplete}`,
      {},
      {
        headers: this.authHeaders,
      }
    );
  }
}
