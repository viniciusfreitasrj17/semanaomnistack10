const express = require('express');
const monsoose = require('mongoose');

const app = express();

monsoose.connect('mongodb+srv://marcos:l4cun4@cluster0-hnlwd.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (filtros, ordenação, paginação, ...)
// Route Params: request.params (identificar um recurso na açteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

app.get('/', (request, response) => {
    const m = request.query;
    return response.json({ message: 'Hello OmniStack !!!', query: m });
});

app.delete('/:id', (request, response) => {
    const d = request.params.id;
    return response.json({ deleted: d });
})

app.post('/', (request, response) => {
    const b = request.body;
    return response.json({ posting: b });
})

app.listen(3333);
