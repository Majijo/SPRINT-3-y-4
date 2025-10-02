//Definir los endpoints y conectarlos con los controladores.

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productController');

// Definir las rutas y asociarlas con los controladores
router.get('/', ctrl.getAll); // LISTA PRODUCTOS
router.get('/:id', ctrl.getById); //OBTIENE
router.post('/', ctrl.create); // CREA
router.put('/:id', ctrl.update); // ACTUALIZA
router.delete('/:id', ctrl.remove); // ELIMINA

module.exports = router;