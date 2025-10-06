import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ContactForm from './components/ContactForm';
import { fadeIn } from './utils/animations';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProductos = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('http://localhost:3000/api/productos');

      if (!response.ok) {
        throw new Error('Error al obtener productos');
      }

      const data = await response.json();
      setProductos(data);
    } catch (err) {
      console.error('Error fetching productos:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleVerMas = (producto) => {
    setProductoSeleccionado(producto);
  };

  const handleVolver = () => {
    setProductoSeleccionado(null);
  };

  const handleAgregarCarrito = (producto) => {
    setCarrito(prev => [...prev, producto]);
  };

  return (
    <motion.div 
      className="app"
      {...fadeIn}
    >
      <Navbar cartCount={carrito.length} />

      <main className="main-content">
        {productoSeleccionado ? (
          <ProductDetail
            producto={productoSeleccionado}
            onAgregarCarrito={handleAgregarCarrito}
            onVolver={handleVolver}
          />
        ) : (
          <div>
            <ProductList
              productos={productos}
              loading={loading}
              error={error}
              onVerMas={handleVerMas}
              fetchProductos={fetchProductos}
            />
            <ContactForm />
          </div>
        )}
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;
