import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { TodoService } from 'src/app/shared/service/todo.service';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let service: TodoService

  beforeEach(async () => await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatIconModule
      ],
      declarations: [TaskComponent]
    }).compileComponents())
  
  beforeEach(()=> {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TodoService)
    fixture.detectChanges();
  });

  it('Lista de tareas debe existir', () => {
    expect(component).toBeTruthy();
  });

  
});
