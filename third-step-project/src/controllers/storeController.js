const db = require('../db');

module.exports = {
    async trazerLoja(req, res) {
        const lojas = await db.trazerLojas();
        res.send(lojas[0]);
    },

    async cadastrarLojas(req, res) {
        // const { store_name, store_owner, email, password } = req.body;
        await db.cadastrarLoja(req.body);
        res.json(req.body);
    },

    async alterarLoja(req, res){
        const { id } = req.params;
        const loja = await db.alterarLoja(id, req.body);
        res.send(loja);
    },

    async deletarLoja(req, res) {
        const { id } = req.params;
        const loja = await db.deletarLoja(id);
        res.send(loja);
    },


}