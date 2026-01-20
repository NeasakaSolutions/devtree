# Librerías utilizadas en este proyecto:

### Frontend:

- **React**  
  Biblioteca principal para construir la interfaz de usuario mediante componentes reutilizables.

- **TypeScript**  
  Superset de JavaScript que añade tipado estático, ayudando a prevenir errores y mejorar el mantenimiento del código.

- **Vite**  
  Herramienta de desarrollo y bundler que proporciona un entorno rápido con Hot Module Reload (HMR).

- **React Router DOM**  
  Librería encargada de manejar la navegación entre páginas dentro de la aplicación sin recargar el navegador.

- **React Hook Form**  
  Librería para la gestión de formularios y validaciones de manera simple y eficiente.

- **Axios**  
  Cliente HTTP utilizado para realizar peticiones al backend y manejar respuestas de la API.

- **Tailwind CSS**  
  Framework de estilos basado en clases utilitarias que permite diseñar interfaces de forma rápida y consistente.

- **Sonner**  
  Librería para mostrar notificaciones tipo *toast* de manera elegante y ligera, útil para informar al usuario sobre acciones exitosas, errores o advertencias en tiempo real.


---

# Backend:

- **express**  
  Framework web para Node.js. Permite crear el servidor, definir rutas y manejar peticiones HTTP.

- **mongoose**  
  ODM (Object Data Modeling) para MongoDB. Facilita la conexión a la base de datos y la creación de modelos y esquemas.

- **cors**  
  Middleware que configura qué dominios pueden comunicarse con el backend, evitando accesos no autorizados desde otros sitios web.

- **dotenv**  
  Permite cargar variables de entorno desde un archivo `.env` (puertos, credenciales, URLs, etc.).

- **bcrypt**  
  Librería para encriptar contraseñas mediante hashes seguros y comparar credenciales en el login.

- **express-validator**  
  Middleware para validar los datos que llegan en las peticiones (por ejemplo: email válido, contraseña mínima, campos obligatorios).

- **slug**  
  Convierte textos en cadenas limpias y amigables para URLs. En este proyecto se usa para generar el `handle` único de usuario.

- **colors**  
  Agrega colores a los mensajes mostrados en la consola. Se usa solo para mejorar la lectura de logs.

---

### Dependencias de desarrollo

- **typescript**  
  Añade tipado estático a JavaScript, ayudando a prevenir errores y mejorar el mantenimiento del código.

- **ts-node**  
  Permite ejecutar archivos TypeScript directamente sin compilarlos manualmente.

- **nodemon**  
  Reinicia automáticamente el servidor cuando detecta cambios en el código durante el desarrollo.

- **@types/express, @types/cors, @types/bcrypt, @types/slug**  
  Definiciones de tipos para TypeScript. Permiten que estas librerías tengan autocompletado y verificación de tipos.




