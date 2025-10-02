const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const productsRouter = require("./routes/products.js");
const { notFound, errorHandler } = require("./middlewares/errorHandler.js"); // sin "s"
const logger = require("./middlewares/logger.js");

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Logger HTTP


// Rutas
app.use("/api/productos", productsRouter);

// Rutas no encontradas
app.use(notFound);

// Manejador de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));