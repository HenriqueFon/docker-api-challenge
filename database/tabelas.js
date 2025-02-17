class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos() {
        const sql = `CREATE TABLE IF NOT EXISTS atendimentos (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
            data DATE,
            servico VARCHAR(100),
            cliente VARCHAR(100),
            STATUS ENUM("ativo","realizado","cancelado") DEFAULT "ativo"
        );
            `;
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log("Não foi possível criar a tabela");
                console.log(error.message);
                return;
            }

            console.log("Tabela criada com sucesso...");
        });
    }
}

module.exports = new Tabelas();