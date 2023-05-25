import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTask } from './dto';
import { TaskEntity } from 'src/shared/Entities';

@Injectable()
export class TaskService {
  private taskList: TaskEntity[] = []

  getTasks(){
    return this.taskList
  }

  addTask(dto: CreateTask){
    const id = this.taskList.length + 1
    const task = {...dto, id, finished: false}
    this.taskList.push(task)
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Tarea creada.',
      task
    };
  }
  
  deleteTask(id: number){
    const index = this.taskList.findIndex(task => task.id == id)    
    if(index !== -1){
      this.taskList.splice(index, 1)
      return {
        statusCode: HttpStatus.ACCEPTED,
        message: 'Tarea eliminada.',
      };
    } else {
      throw new HttpException('ID no encontrado', HttpStatus.BAD_REQUEST)
    }
  }
  
  finishedTask(id: number){
    const index = this.taskList.findIndex(task => task.id == id)
    if(index !== 1){
      const task = this.taskList[index]
      const finished = !task.finished
      this.taskList[index] = {...task, finished}
      return {
        statusCode: HttpStatus.ACCEPTED,
        message: 'Tarea actualizada.',
      };
    } else {
      throw new HttpException('ID no encontrado', HttpStatus.BAD_REQUEST)
    }
  }
}
