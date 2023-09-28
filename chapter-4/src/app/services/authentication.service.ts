import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  Login(email: any): Observable<string> {
    return this.http.post<string>(
      'http://localhost:8080/authentication/login',
      { email: email },
      {}
    );
  }
}
