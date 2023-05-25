## Description
API TodoList

## Instalación

```bash
$ npm install
```

## Correr la App

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Endpoints

```bash
# Entry
http://localhost:3000/api/
```

### Task controller
```bash
## Controler task
http://localhost:3000/api/task
```

GET /api/task
- Obtener la ista de tareas

POST /api/task
* Crear una tarea
```bash
# Payload
{
  title: string,
  description: string
}
```

PUT /api/task/:id
* Finaliza una tarea

DELETE /api/task/:id
* Elimina una tarea