import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Task } from 'src/app/shared/models/task.model';
import { TodoService } from 'src/app/shared/service/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(
    private readonly todoService: TodoService,
    private readonly iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    const svgDelete = this.domSanitizer.bypassSecurityTrustResourceUrl('assets/delete.svg')
    this.iconRegistry.addSvgIcon('delete', svgDelete)
  }

  tasks: Task[] = []

  ngOnInit(){
    this.todoService.getTasks()
    this.todoService.tasksList$.subscribe(tasks => {
      this.tasks = tasks
    })
  }

  finishedTask(id: number){
    console.log('Task -> Finished task:', id)
    this.todoService.updateTask(id)
  }

  deleteTask(id: number){
    console.log('Task -> Delete task:', id)
    this.todoService.deleteTask(id)
  }
}
