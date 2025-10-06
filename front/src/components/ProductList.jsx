import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import Loader from './Loader';
import { slideUp, staggerContainer, buttonHover } from '../utils/animations';

function ProductList({
  productos,
  loading,
  error,
  onVerMas,
  fetchProductos
}) {
  useEffect(() => {
    fetchProductos();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <motion.div 
        className="error-container"
        {...slideUp}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Error al cargar los productos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          No se pudo conectar con el servidor. Por favor, intenta más tarde.
        </motion.p>
        <motion.button 
          className="btn btn-primary" 
          onClick={fetchProductos}
          {...buttonHover}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Reintentar
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="products-section"
      {...slideUp}
    >
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Nuestros Productos
      </motion.h2>
      <div className="products-grid">
        {productos.map((producto, index) => (
          <motion.div
            key={producto.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard
              producto={producto}
              onVerMas={onVerMas}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProductList;
