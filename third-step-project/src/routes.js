const express = require('express');
const storeController = require('./controllers/storeController');

const routes = express.Router();


// GET, POST, PUT, DELETE ...
routes.get('/', (req, res) => {
    res.send('Hello World');
});

routes.get('/send-salve', (req, res) => {
    res.send(`Salve ${req.query.name}`);
});

routes.post('/cadastrar-loja', storeController.cadastrarLojas);

routes.get('/lojas', storeController.trazerLoja);

routes.put('/loja/:id', storeController.alterarLoja);

routes.delete('/loja/:id', storeController.deletarLoja);

routes.post('/login', storeController.login);

module.exports = routes;