import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { TodoService } from './shared/service/todo.service';

@NgModule({
  schemas: [],
  declarations: [
    AppComponent,
    FormComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
