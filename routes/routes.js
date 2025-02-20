const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para registrar usuarios
router.post('/signup', authController.signup);

module.exports = router;
