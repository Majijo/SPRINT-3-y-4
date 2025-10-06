import { motion, AnimatePresence } from 'framer-motion';
import { slideUp } from '../utils/animations';

function Navbar({ cartCount }) {
  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <motion.h1 
          className="navbar-title"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          Mueblería Hermanos Jota
        </motion.h1>
        
        <motion.div 
          className="cart-badge"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <span className="cart-icon">🛒</span>
          <AnimatePresence mode="wait">
            <motion.span 
              key={cartCount}
              className="cart-count"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {cartCount}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
