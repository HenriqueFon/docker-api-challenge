const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "34418502",
    database: "controle_atendimento",
});

module.exports = conexao;

