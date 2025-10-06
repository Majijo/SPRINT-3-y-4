import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="footer-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          &copy; 2025 Mueblería Hermanos Jota. Todos los derechos reservados.
        </motion.p>
      </div>
    </motion.footer>
  );
}

export default Footer;
