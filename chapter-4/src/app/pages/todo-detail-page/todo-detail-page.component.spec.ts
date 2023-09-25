import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailPageComponent } from './todo-detail-page.component';

describe('TodoDetailPageComponent', () => {
  let component: TodoDetailPageComponent;
  let fixture: ComponentFixture<TodoDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDetailPageComponent]
    });
    fixture = TestBed.createComponent(TodoDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
