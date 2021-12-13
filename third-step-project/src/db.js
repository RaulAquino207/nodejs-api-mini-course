const mysql = require('mysql2/promise');

async function connect(){

    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }
    
    const connection = await mysql.createConnection("mysql://root:password@localhost:3306/curso_lead");
    console.log('conectou');
    global.connection = connection;
    return connection
}
connect();

async function cadastrarLoja(loja){
    const { store_name, store_owner, email, password } = loja;
    const conn = await connect();
    const sql = 'INSERT INTO tbStore(store_name, store_owner, email, password) VALUES (?,?,?,?);';
    const values = [ store_name, store_owner, email, password ];
    await conn.query(sql, values);
}

async function trazerLojas(){
    const conn = await connect();
    const sql = 'SELECT * FROM curso_lead.tbstore;';
    return conn.query(sql);
}

async function alterarLoja(id, loja){
    const { store_name, store_owner, email, password } = loja;
    const conn = await connect();
    const sql = `UPDATE curso_lead.tbstore SET store_name = '${store_name}', store_owner = '${store_owner}', email = '${email}', password = '${password}' WHERE (store_id = '${id}');`;
    return conn.query(sql);
}

async function deletarLoja(id){
    const conn = await connect();
    const sql = `DELETE FROM curso_lead.tbstore WHERE (store_id = '${id}');`
    return conn.query(sql);
}

module.exports = {cadastrarLoja, trazerLojas, alterarLoja, deletarLoja}