import { motion } from 'framer-motion';
import { MailOpen } from 'lucide-react';

interface LetterOpeningLoaderProps {
  day: number;
}

/**
 * Estado de carga táctil y breve que simula romper el sello de lacre
 * y desplegar la carta navideña al hacer clic en una tarjetita.
 */
export function LetterOpeningLoader({ day }: LetterOpeningLoaderProps) {
  return (
    <motion.div
      className="envelope-loader-card"
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.03, y: -10 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      role="status"
      aria-live="polite"
    >
      <motion.div
        className="wax-seal-loader"
        animate={{
          scale: [1, 1.12, 0.96, 1.06],
          rotate: [0, -8, 8, 0],
        }}
        transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <MailOpen size={34} strokeWidth={1.8} />
      </motion.div>

      <h2 className="envelope-loader-title">Abriendo la carta del día {day}</h2>
      <p className="envelope-loader-sub">Desatando el lazo dorado y revelando tu actividad...</p>

      <div className="shimmer-lines" aria-hidden="true">
        <div className="shimmer-line" style={{ width: '92%' }} />
        <div className="shimmer-line" style={{ width: '78%' }} />
        <div className="shimmer-line" style={{ width: '64%' }} />
      </div>
    </motion.div>
  );
}

