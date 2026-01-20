### Estructura del proyecto:

```bash
src/
│
├── main.tsx
│   Punto de entrada de React. Crea el root y renderiza el Router.
│
├── router.tsx
│   Configuración de rutas de la aplicación.
│   Define qué vistas se muestran según la URL.
│
├── layouts/
│   └── AuthLayout.tsx
│       Layout reutilizable para pantallas de autenticación.
│       Contiene logo, fondo y el <Outlet /> de React Router.
│
├── views/
│   ├── LoginView.tsx
│   Vista de inicio de sesión.
│
│   └── RegisterView.tsx
│   Vista de registro de usuarios.
│   Contiene formulario, validaciones y envío al backend.
│
├── components/
│   └── ErrorMessage.tsx
│       Componente reutilizable para mostrar mensajes de error.
│
├── types/
│   └── index.ts
│       Definición de tipos globales de TypeScript.
│       Modelos de usuario y formulario de registro.
│
└── index.css
    Estilos globales y configuración de Tailwind CSS.
```

### Creacion de archivos

```bash
index.html
│
│ Contiene el <div id="root"></div> donde React monta toda la aplicación.
│
└── src/
    │
    ├── main.tsx
    │   Punto de entrada de React.
    │   Crea el root y renderiza el componente Router.
    │
    ├── router.tsx
    │   Configuración de rutas de la aplicación.
    │   Define qué vistas se muestran según la URL.
    │
    ├── layouts/
    │   └── AuthLayout.tsx
    │       Layout principal para autenticación.
    │       Contiene estructura visual común y el <Outlet />.
    │
    ├── views/
    │   ├── LoginView.tsx
    │   Vista de inicio de sesión.
    │
    │   └── RegisterView.tsx
    │   Vista de registro de usuarios.
    │   Contiene formulario, validaciones y envío al backend.
    │
    ├── components/
    │   └── ErrorMessage.tsx
    │       Componente reutilizable para mostrar mensajes de error.
    │
    ├── types/
    │   └── index.ts
    │       Tipos globales de TypeScript.
    │       Modelos de usuario y formularios.
    │
    └── index.css
        Estilos globales y configuración de Tailwind CSS.
```
