const { Router } = require('express');
const { store, index } = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController')

const routes = Router();

routes.get('/devs', index);
routes.post('/devs', store);

routes.get('/search', SearchController.index);

module.exports = routes;
