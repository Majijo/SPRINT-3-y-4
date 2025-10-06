const productos = require('../data/productos.js');

// GET /api/productos
const getAll = (req, res) => {
  res.json(productos);
};

// GET /api/productos/:id
const getById = (req, res) => {
  const id = Number(req.params.id);
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(producto);
};

module.exports = {
  getAll,
  getById
};