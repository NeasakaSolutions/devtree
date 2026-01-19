/*
 Punto de entrada principal del servidor.
 Este archivo se encarga de arrancar la aplicación Express
 y ponerla a escuchar peticiones en el puerto configurado.
*/

// Importaciones:
import colors from "colors";
import server from './server';

// Variables:
const port = process.env.PORT || 4000;

// Crear servidor:
server.listen(port, () => {
    console.log(colors.blue.bold(`Servidor funcionando en el puerto: ${port}`));
});
