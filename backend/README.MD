### Estructura del backend:

```bash
src/
│
├── config/
│ ├── cors.ts # Configuración de CORS
│ └── db.ts # Conexión a MongoDB
│
├── handlers/
│ └── index.ts # Lógica de registro y login
│
├── middleware/
│ └── validation.ts # Middleware de validación de datos
│
├── models/
│ └── user.ts # Modelo de usuario (Mongoose)
│
├── router/
│ └── index.ts # Definición de rutas de la API
│
├── utils/
│ └── auth.ts # Funciones de hash y comparación de contraseñas
│
├── server.ts # Configuración principal del servidor Express
└── index.ts # Punto de entrada que inicia el servidor
```

### Creacion de los archivos:

```bash
src/
│
├── index.ts # Punto de entrada del servidor
├── server.ts # Configuración principal de Express
│
├── config/
│ ├── db.ts # Conexión a MongoDB
│ └── cors.ts # Configuración de CORS
│
├── router/
│ └── index.ts # Definición de rutas
│
├── middleware/
│ └── validation.ts # Middleware de validación
│
├── handlers/
│ └── index.ts # Lógica de registro y login
│
├── models/
│ └── user.ts # Modelo de Usuario
│
├── utils/
│ └── auth.ts # Hash y verificación de contraseñas
```