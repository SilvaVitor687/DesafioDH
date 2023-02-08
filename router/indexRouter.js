const express = require('express');
const router = express.Router();

const indexController = require('../controller/indexController');
const timeController = require('../controller/timeController');
const projetoController = require('../controller/projetoController');
const escolaController = require('../controller/escolaController');



router.get('/', indexController.index);

router.get('/time', timeController.index)
router.get('/projeto', projetoController.index);
router.get('/escola', escolaController.index);

module.exports = router;