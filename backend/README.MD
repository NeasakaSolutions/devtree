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
