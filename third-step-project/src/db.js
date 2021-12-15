const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config({path : 'src/.env'});

async function connect(){

    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }
    
    const connection = await mysql.createConnection(`mysql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:3306/${process.env.DATABASE}`);
    console.log('conectou');
    global.connection = connection;
    return connection
}
connect();

async function cadastrarProduto(produto) {
    const { product_name, product_image, minimum_quantity, current_quantity, section_id, store_id } = produto;

    const conn = await connect();
    const sql = `INSERT INTO tbproduct(product_name, product_image, minimum_quantity, current_quantity, section_id, store_id) VALUES (?,?,?,?,?,?);`;
    const values = [ product_name, product_image, minimum_quantity, current_quantity, section_id, store_id ];

    return conn.query(sql, values);
}

async function cadastrarSessao(sessao) {
    const { section_name, store_id } = sessao;

    const conn = await connect();
    const sql = `INSERT INTO curso_lead.tbsection(section_name, store_id) VALUES (?,?);`;
    const values = [ section_name, store_id ];

    return conn.query(sql, values);
}

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

async function login(email, password){
    // console.log("🚀 ~ file: db.js ~ line 48 ~ login ~ email, password", email, password);
    if(!email || !password){
        return {message : 'Please provide an email and password'}
    }

    const conn = await connect();
    const sql = `SELECT * FROM curso_lead.tbstore WHERE email = '${email}';`
    
    try {
        const result = await conn.query(sql);
        console.log(result[0][0]);
        if(result.length == 0 || password != result[0][0].password){
            return {message : 'Email or password is incorrect'}
        } else {
            const id = result[0][0].store_id;
            const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn : process.env.JWT_EXPIRES_IN
            });

            console.log(`The token is : ${token}`);
            return { token, id }
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {cadastrarLoja, trazerLojas, alterarLoja, deletarLoja, login, cadastrarProduto, cadastrarSessao}