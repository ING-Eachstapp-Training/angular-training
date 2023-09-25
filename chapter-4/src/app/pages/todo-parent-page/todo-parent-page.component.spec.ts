import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoParentPageComponent } from './todo-parent-page.component';

describe('TodoParentPageComponent', () => {
  let component: TodoParentPageComponent;
  let fixture: ComponentFixture<TodoParentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoParentPageComponent]
    });
    fixture = TestBed.createComponent(TodoParentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
