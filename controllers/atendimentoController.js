const atendimentoModel = require("../models/atendimentoModel")

class AtendimentoController {

    buscar() {
        return atendimentoModel.listar();
    }

    criar() {
        return "Criando atendimento...";
    }
}

module.exports = new AtendimentoController();