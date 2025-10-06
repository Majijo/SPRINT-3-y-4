import { motion } from 'framer-motion';
import { slideInLeft, slideInRight, buttonHover, fadeIn } from '../utils/animations';

function ProductDetail({ producto, onAgregarCarrito, onVolver }) {
  const handleAgregar = () => {
    onAgregarCarrito(producto);
    alert(`${producto.nombre} agregado al carrito`);
  };

  return (
    <motion.div 
      className="product-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button 
        className="btn btn-secondary" 
        onClick={onVolver}
        {...buttonHover}
      >
        ← Volver
      </motion.button>

      <div className="detail-container">
        <motion.img
          src={producto.srcImg}
          alt={producto.nombre}
          className="detail-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div 
          className="detail-info"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="detail-title">
            {producto.nombre}
          </h2>
          
          <p className="detail-description">
            {producto.descripcion}
          </p>
          
          <p className="detail-price">
            ${producto.precio.toLocaleString()}
          </p>

          <motion.button
            className="btn btn-primary btn-large"
            onClick={handleAgregar}
            {...buttonHover}
          >
            Agregar al carrito
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProductDetail;
