const express = require ('express');
const router = express.Router();

//importa controlador 'apiControler.js' da pasta '../controllers/apiControler'
const apiControler = require('../controllers/apiController');

// url do teste será: http://localhost:5000/api/test
router.get('/teste', apiControler.test)

// TODO: listar pontos de interesse da BD
router.get('/details', apiControler.details);

// TODO: adicionar novo ponto de interesse
router.post('/interest', apiControler.add);

// TODO: adicionar novo ponto de interesse
router.post('/create-interest', apiControler.create);

// TODO: atualizar ponto de interesse
router.put('/interest/:id', apiControler.update);

// TODO: apagar ponto de interesse
router.delete('/interest/:id', apiControler.delete);

module.exports = router;