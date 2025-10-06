import { motion } from 'framer-motion';
import { cardHover, buttonHover } from '../utils/animations';

function ProductCard({ producto, onVerMas }) {
  const handleClick = () => {
    onVerMas(producto);
  };

  return (
    <motion.div 
      className="product-card"
      {...cardHover}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={producto.srcImg}
        alt={producto.nombre}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">
          {producto.nombre}
        </h3>
        <p className="product-price">
          ${producto.precio.toLocaleString()}
        </p>
        <motion.button
          className="btn btn-primary"
          onClick={handleClick}
          {...buttonHover}
        >
          Ver más
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
