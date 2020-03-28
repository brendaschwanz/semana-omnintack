const express = require('express');
const routes = express.Router();

const IncidentController = require('./controllers/IncidentControllers')
const OngController = require('./controllers/OngController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// Rotas de ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Rotas de incidents
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

// Rotas de profile
routes.get('/profile', ProfileController.index);

// Rotas de sessão
routes.post('/sessions', SessionController.create);


module.exports = routes;