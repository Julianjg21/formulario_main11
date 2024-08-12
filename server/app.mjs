import express from 'express';
import path from 'path';
import cors from "cors";
import { fileURLToPath } from 'url';
import routerPage2 from './routes/page2.mjs';
import mysql from 'mysql2';



const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);

// Servir los archivos estáticos de la aplicación React
app.use(express.static(path.join(__dirname, '../build')));

app.use(cors()); //allow the Express server to respond to HTTP requests from other domains
app.use(express.json()); // Enable JSON parsing for incoming requests
app.use("/", routerPage2); //connect the login route
// Ruta para servir el archivo HTML principal de React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const db = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conectado como id ' + db.threadId);
});

export default db;
