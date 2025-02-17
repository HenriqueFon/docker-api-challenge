const conexao = require("../database/conexao")

class AtendimentoModel {
    listar() {
        const sql = "SELECT * FROM atendimentos";
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
                if (error) {
                    console.log("Deu erro na busca");
                    reject(error);
                    return;
                }
                resolve(resposta);
            });
        });
    }
}

module.exports = new AtendimentoModel();