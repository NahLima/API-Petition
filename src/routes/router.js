const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/assinaturas', controller. getAssinaturas)

router.post('/assinaturas', controller.addAssinatura)

router.get('/assinaturas/:_id', controller. getAssinaturaById)

router.put('/assinaturas/:_id', controller. updateAssinatura)

router.delete('/assinaturas/:_id', controller.deleteAssinatura)

module.exports = router;