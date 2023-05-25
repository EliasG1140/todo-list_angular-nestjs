## Estructura
```bash
├── back-todo/
│   ├── src/
│   │   ├── shared/
│   │   │   └── shared/
│   │   │       └── Entities/
│   │   │   ├── shared/
│   │   ├── task/
│   │   │   ├── dto/
│   │   │   └── task.controller.ts/
│   │   │   └── task.module.ts/
│   │   │   └── task.service.ts/
│   │   │   └── task.service.spec.ts/
│   │   ├── app.modue.ts
│   │   └── main.ts
│   └── test/
└── front-todo/
    └── src/
        ├── aseets/
        ├── app/
        │   ├── components/
        │   │   ├── form/
        │   │   │   ├── form.components.css
        │   │   │   ├── form.components.tml
        │   │   │   ├── form.components.spec.ts
        │   │   │   └── form.components.ts
        │   │   └── task/
        │   │       ├── task.components.css
        │   │       ├── task.components.tml
        │   │       ├── task.components.spec.ts
        │   │       └── task.components.ts
        │   ├── shared/
        │   │   ├── models/
        │   │   │   └── task.model.ts
        │   │   └── service/
        │   │       ├── todo.service.ts
        │   │       └── todo.service.spec.ts
        │   └── app.components.css
        │   └── app.components.html
        │   └── app.components.spect.ts
        │   └── app.components.ts
        ├── styes.css
        ├── index.html
        └── main.ts
```
* **back-todo/**: Carpeta raiz del front
  * src/: Carpeta del proyecto
    * shared/: Carpeta donde se encuentra recursos compartidos para todo el proyecto, como typados, entidades y servicios compartidos.
    * task/: Modulo task
* **front-todo/**: Carpeta raiz del front
  * src/: Carpeta del proyecto
    * app/: 
      * shared/: Carpeta donde se encuentra recursos compartidos para todo el proyecto, como typados, entidades y servicios compartidos.
      * components:/ Carpeta donde se guardaran los componentes
    * assets/: Recursos estaticos de la aplicacion