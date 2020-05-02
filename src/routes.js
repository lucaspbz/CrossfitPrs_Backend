const express = require('express');
const movimentosController = require('./controllers/movimentosController');
const personalRecordsController = require('./controllers/personalRecordsController');

const routes = express.Router();

routes.get('/movimentos', movimentosController.index);
routes.post('/movimentos', movimentosController.create);

routes.post('/personalrecords', personalRecordsController.create);
routes.get('/personalrecords', personalRecordsController.index);
routes.delete('/personalrecords/:id', personalRecordsController.delete);

module.exports = routes;