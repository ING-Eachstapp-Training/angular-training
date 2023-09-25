import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { TodoDetailPageComponent } from './pages/todo-detail-page/todo-detail-page.component';
import { TodoParentPageComponent } from './pages/todo-parent-page/todo-parent-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'todo',
    component: TodoParentPageComponent,
    children: [
      { path: '', component: TodoListPageComponent },
      {
        path: 'detail/:id',
        component: TodoDetailPageComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
