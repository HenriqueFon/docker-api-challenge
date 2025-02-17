const { Router } = require("express");
const router = Router();

const atendimentoController = require("../controllers/atendimentoController");

//get post

router.get("/home", (req, res) => {
    atendimentoController
        .buscar()
        .then((resultados) => res.status(200).json(resultados))
        .catch((error) => res.status(400).json({ error: error.message }));
});


router.post("/atendimentos", (req, res) => {
    const resposta = atendimentoController.criar();
    res.send(resposta)
})

module.exports = router;