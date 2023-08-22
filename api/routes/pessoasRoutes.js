const { Router } = require ('express') //Router pertence ao express
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)

module.exports = router