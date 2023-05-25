import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from '../models/task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private readonly http: HttpClient) {}

  tasks: Task[] = []
  tasksSubject = new Subject<Task[]>()
  tasksList$ = this.tasksSubject.asObservable()

  getTasks(){
    this.http.get<Task[]>('http://localhost:3000/api/task').subscribe( data =>{
      this.tasks = data
      this.tasksSubject.next(this.tasks)
    })
  }

  addTask(value: any){
    this.http.post('http://localhost:3000/api/task', value).subscribe( _ => {
      this.getTasks()
    })
  }

  updateTask(id: number){
    this.http.put(`http://localhost:3000/api/task/${id}`, null).subscribe( _ => {
      this.getTasks()
    })  
  }

  deleteTask(id: number){
    this.http.delete(`http://localhost:3000/api/task/${id}`).subscribe( _ => {
      this.getTasks()
    })
  }
}