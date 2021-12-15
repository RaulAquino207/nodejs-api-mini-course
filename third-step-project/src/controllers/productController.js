const db = require('../db');

module.exports = {

    async cadastrarProduto(req, res) {

        await db.cadastrarProduto(req.body);
        res.json(req.body);
    },
    
}