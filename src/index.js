const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require('./database');

const app = express();


// Settings - Configuraciones
app.set('port', process.env.PORT || 3000);

// Middlewares - Funciones que se ejecutan antes de que lleguen a las rutas
app.use(morgan('dev'));
app.use(express.json());



// Routes - Rutas
app.use('/api/tasks', require('./routes/task.routes'));

// Static files - Archivos estaticos, index, css, js, etc

app.use(express.static(path.join(__dirname, 'public')));

// starting the server - Iniciando el servidor



app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);

});