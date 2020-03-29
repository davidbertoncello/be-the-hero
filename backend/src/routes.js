const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

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
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);


// TODO: Validate IncidentController.create
routes.post('/incidents', IncidentController.create);


routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);


routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

module.exports = routes;
