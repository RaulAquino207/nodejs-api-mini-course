const express = require('express');
const storeController = require('./controllers/storeController');
const sectionController = require('./controllers/sectionController');
const productController = require('./controllers/productController');

const auth = require('./middleware/auth');

const routes = express.Router();


// GET, POST, PUT, DELETE ...
routes.get('/', auth ,(req, res) => {
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

routes.post('/cadastrar-sessao',  auth, sectionController.cadastrarSessao);

routes.post('/cadastrar-produto', auth, productController.cadastrarProduto);

module.exports = routes;