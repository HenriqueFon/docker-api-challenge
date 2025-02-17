const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/home");
const conexao = require("./database/conexao");
const tabelas = require("./database/tabelas");

tabelas.init(conexao);

router(app);

app.listen(port, (error) => {
    if(error) {
        console.log("Deu erro")
        return;
    }

    console.log("Aplicação subiu na porta:" + port )
});