import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTask } from './dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService){}

  @Get()
  getTasks(){
    return this.taskService.getTasks()
  }

  @Post()
  addTask(@Body() dto: CreateTask){
    return this.taskService.addTask(dto)
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number){
    return this.taskService.deleteTask(id)
  }

  @Put(':id')
  finishedTask(@Param('id', ParseIntPipe) id: number){
    return this.taskService.finishedTask(id)
  }
}
