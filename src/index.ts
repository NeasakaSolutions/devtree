// Importaciones:
import server from './server'

// Variables:
const port = process.env.PORT || 4000;

// Crear servidor:
server.listen(port, () => {
    console.log("Servidor funcionando en el puerto: " , port);
});
