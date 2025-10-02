import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Para obtener la ruta absoluta del JSON
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/productos.json");

// Función para leer productos desde JSON
const readProducts = () => {
  const jsonData = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(jsonData);
};

// GET /api/productos
export const getAllProducts = (req, res) => {
  const products = readProducts();
  res.json(products);
};

// GET /api/productos/:id
export const getProductById = (req, res) => {
  const products = readProducts();
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(product);
};