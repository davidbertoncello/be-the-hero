const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

/*
    Métodos HTTP:
    GET: Buscar e retornar uma informação do back-end
    POST: Inserir uma informação do back-end
    PUT: Alterar uma informação do back-end
    DELETE: Deletar uma informação do back-end
*/

/*
    Tipos de parâmetros:
    Query Params: Parâmetros nomeados enviados na rota, após "?" e concatenados com "&" (filtros, paginacao, ...) [request.query]
    Route Params: Parâmetros usados para identificar recursos. ( /users/1) [request.params]
    Request Body: Corpo da requisição para criar ou alterar recursos [request.body]
*/


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
