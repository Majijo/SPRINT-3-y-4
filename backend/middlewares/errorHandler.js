// 404 - ruta no encontrada
const notFound = (req, res, next) => {
  res.status(404).json({ message: "Ruta no encontrada" });
};

// Manejador de errores centralizado
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Error del servidor" });
};

module.exports = {
  notFound,
  errorHandler
};