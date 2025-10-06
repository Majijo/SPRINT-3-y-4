// Configuraciones de animaciones para mantener consistencia visual
// Estética elegante y fluida para mueblería moderna

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const slideUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const cardHover = {
  whileHover: { 
    scale: 1.02, 
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  whileTap: { scale: 0.98 }
};

export const buttonHover = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  whileTap: { scale: 0.95 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};