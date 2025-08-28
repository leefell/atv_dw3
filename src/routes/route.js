const express = require('express');
const router = express.Router();
const SalaController = require('../controller/SalaController');

router.get('/salas', SalaController.GetAllSalasDeAula);
router.get('/salas/:id', SalaController.GetSalasDeAulaByID);
router.post('/salas', SalaController.InsertSalasDeAula);
router.put('/salas/:id', SalaController.UpdateSalasDeAula);
router.delete('/salas/:id', SalaController.DeleteSalasDeAula);

module.exports = router;