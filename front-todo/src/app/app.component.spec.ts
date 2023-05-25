import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from './components/task/task.component';

describe('AppComponent', () => {
  let fixtureApp: ComponentFixture<AppComponent>
  let appComponent: AppComponent

  beforeEach(async () => await TestBed.configureTestingModule({
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      MatIconModule
    ],
    declarations: [AppComponent, FormComponent, TaskComponent]
  }).compileComponents());

  beforeEach(()=> {
    fixtureApp = TestBed.createComponent(AppComponent);
    appComponent  = fixtureApp.componentInstance;
  })

  //TODO AppComponent
  it('0 Debe existir AppComponent', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`1 AppComponent tiene un titulo: 'TODOLIST'`, () => {
    expect(appComponent.title).toEqual('TODOLIST');
  });

  it('2 Titulo TODOLIST se renderiza', () => {
    fixtureApp.detectChanges();
    const compiled = fixtureApp.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('TODOLIST');
  });

});
