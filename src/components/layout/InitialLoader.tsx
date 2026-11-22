import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * Pantalla de carga inicial navideña que da la bienvenida con calidez
 * mientras se prepara la experiencia del calendario.
 */
export function InitialLoader() {
  return (
    <motion.div
      className="initial-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
      role="status"
      aria-live="polite"
    >
      <motion.div
        className="loader-emblem"
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 6, -6, 0],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Sparkles size={38} strokeWidth={1.8} />
      </motion.div>

      <motion.h1
        className="loader-title"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.45 }}
      >
        Calendario de Adviento
      </motion.h1>

      <motion.p
        className="loader-subtitle"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24, duration: 0.45 }}
      >
        Encendiendo las luces y sellando 24 cartas especiales para ti...
      </motion.p>

      <div className="loader-bar-track">
        <motion.div
          className="loader-bar-fill"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

