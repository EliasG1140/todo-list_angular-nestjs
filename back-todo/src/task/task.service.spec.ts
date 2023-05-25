import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('Servicio fue creado', () => {
    expect(service).toBeDefined();
  });

  it('Crear tarea', () => {
    service.addTask({title:'Titulo de prueba', description:'Descripcion de prueba'})
    expect(service.getTasks().length == 1).toBeTruthy()
  });

  it('Obtener tareas', () => {
    service.addTask({title:'Titulo de prueba', description:'Descripcion de prueba'})
    service.addTask({title:'Titulo de prueba 2', description:'Descripcion de prueba 2'})
    const response = service.getTasks()
    expect(response.length == 2).toBeTruthy()
  });

  it('Finaizar tarea', () => {
    const response = service.addTask({title:'Titulo de prueba', description:'Descripcion de prueba'})
    const id = response.task.id
    expect(service.finishedTask(id).statusCode).toBe(202)
  });

  it('Eliminar tarea', () => {
    const response = service.addTask({title:'Titulo de prueba', description:'Descripcion de prueba'})
    const id = response.task.id
    expect(service.deleteTask(id).statusCode).toBe(202)
  });
});
