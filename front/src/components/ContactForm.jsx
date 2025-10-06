import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideUp, buttonHover, staggerContainer, staggerItem } from '../utils/animations';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: '', email: '', mensaje: '' });
    }, 3000);
  };

  return (
    <motion.div 
      className="contact-section"
      {...slideUp}
    >
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contacto
      </motion.h2>

      <AnimatePresence>
        {submitted && (
          <motion.div 
            className="success-message"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            ¡Gracias por contactarnos! Te responderemos pronto.
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form 
        className="contact-form" 
        onSubmit={handleSubmit}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div className="form-group" variants={staggerItem}>
          <label htmlFor="nombre">Nombre:</label>
          <motion.input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.div className="form-group" variants={staggerItem}>
          <label htmlFor="email">Email:</label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.div className="form-group" variants={staggerItem}>
          <label htmlFor="mensaje">Mensaje:</label>
          <motion.textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="5"
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.button 
          type="submit" 
          className="btn btn-primary"
          variants={staggerItem}
          {...buttonHover}
        >
          Enviar
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default ContactForm;
