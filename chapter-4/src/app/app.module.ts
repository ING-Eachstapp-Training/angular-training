import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TodoListPageComponent } from './pages/todo-parent-page/todo-list-page/todo-list-page.component';
import { TodoDetailPageComponent } from './pages/todo-parent-page/todo-detail-page/todo-detail-page.component';
import { TodoParentPageComponent } from './pages/todo-parent-page/todo-parent-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    LoginPageComponent,
    TodoListPageComponent,
    TodoDetailPageComponent,
    TodoParentPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
