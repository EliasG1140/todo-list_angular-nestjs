import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceMock {
  tasks: Task[] = []
  tasksSubject = new Subject<Task[]>()
  tasksList$ = this.tasksSubject.asObservable()

  addTask(value: any){
    const count = this.tasks.length +1
    this.tasks.push({...value, id: count, finished: false})
    this.tasksSubject.next(this.tasks)
  }

  updateTask(id: number){
    const index = this.tasks.findIndex(task => task.id == id)
    if(index !== -1){
      const task = this.tasks[index]
      const finished = !task.finished
      this.tasks[index] = {...task, finished}
      this.tasksSubject.next(this.tasks)
    }    
  }

  deleteTask(id: number){
    const index = this.tasks.findIndex(task => task.id == id)
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.tasksSubject.next(this.tasks);
    }
  }
}