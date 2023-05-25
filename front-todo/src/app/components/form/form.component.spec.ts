import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { TodoService } from 'src/app/shared/service/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TodoServiceMock } from 'src/app/shared/service/todoMock.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let service: TodoServiceMock

  beforeEach(async () => await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatIconModule
      ],
      declarations: [FormComponent],
      providers: [{provide: TodoService, useValue: TodoServiceMock}]
    }).compileComponents());

  beforeEach(()=>{
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TodoServiceMock)
    fixture.detectChanges();
  })

  it('Debe existir FormComponent', () => {
    expect(component).toBeTruthy();
  });
 
  it('Formulario invalido: Descripcion requerida', ()=>{
    const title = component.taskForm.controls['title']
    title.setValue('Titulo de prueba')
    expect(component.taskForm.invalid).toBeTrue()
  })

  it('Formulario invalido: Titulo requerido', ()=>{
    const desc = component.taskForm.controls['description']
    desc.setValue('Descripción de prueba')
    expect(component.taskForm.invalid).toBeTrue()
  })

  it('Formulario valido', ()=>{
    const title = component.taskForm.controls['title']
    const desc = component.taskForm.controls['description']
    title.setValue('Titulo de prueba')
    desc.setValue('Descripción de prueba')
    expect(component.taskForm.invalid).toBeFalse()
  })

  /* it('Agregar una tarea', ()=>{
    const title = component.taskForm.controls['title']
    const desc = component.taskForm.controls['description']
    title.setValue('Titulo de prueba')
    desc.setValue('Descripción de prueba')
    const btnSubmit = fixture.debugElement.query(By.css('button'))
    btnSubmit.nativeElement.click()   
    expect(service.tasks.length == 1).toBeTrue()
  }) */

});
