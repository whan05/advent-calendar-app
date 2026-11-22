import { motion } from 'framer-motion';

interface SparkleBurstProps {
  /** Incrementar esta clave dispara una nueva explosión de chispas doradas */
  burstKey: number;
}

const PARTICLES = Array.from({ length: 12 }, (_, index) => {
  const angle = (index / 12) * Math.PI * 2;
  const distance = 42 + (index % 3) * 16;
  return {
    id: index,
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    scale: 0.7 + (index % 3) * 0.25,
  };
});

/**
 * Micro-interacción celebratoria: libera destellos dorados al completar una actividad.
 */
export function SparkleBurst({ burstKey }: SparkleBurstProps) {
  if (burstKey === 0) return null;

  return (
    <div key={burstKey} className="sparkle-burst" aria-hidden="true">
      {PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          className="sparkle-dot"
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: [0, particle.scale, 0],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

