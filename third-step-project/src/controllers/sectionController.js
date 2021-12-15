const db = require('../db');

module.exports = {
    async cadastrarSessao(req, res) {

        await db.cadastrarSessao(req.body);
        res.json(req.body);
    },
}