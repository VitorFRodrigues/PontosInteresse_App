const express = require ('express');
const router = express.Router();

//importa controlador 'apiControler.js' da pasta '../controllers/apiControler'
const apiControler = require('../controllers/apiController');

// url do teste será: http://localhost:5000/api/test
router.get('/teste', apiControler.test)

module.exports = router;