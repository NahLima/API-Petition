const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/assinaturas', controller.getAssinaturas)

router.post('/assinaturas', controller.addAssinatura)

router.get('/assinaturas/:id', controller.getAssinaturaById)

router.put('/assinaturas/:id', controller.updateAssinatura)

router.delete('/assinaturas/:id', controller.deleteAssinatura)

module.exports = router;