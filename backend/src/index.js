const express = require('express');
const monsoose = require('mongoose');
const routes = require('./routes');

const app = express();

monsoose.connect('mongodb+srv://marcos:l4cun4@cluster0-hnlwd.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (filtros, ordenação, paginação, ...)
// Route Params: request.params (identificar um recurso na açteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

app.listen(3333);
