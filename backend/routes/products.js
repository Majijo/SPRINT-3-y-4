//Definir los endpoints y conectarlos con los controladores.

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productController');

// Definir las rutas y asociarlas con los controladores
router.get('/', ctrl.getAll); // LISTA PRODUCTOS
router.get('/:id', ctrl.getById); // OBTIENE PRODUCTO POR ID

module.exports = router;