import { motion } from 'framer-motion';
import { Check, Lock, MailOpen } from 'lucide-react';
import { AdventActivity } from '../../types/advent';
import { FestiveIcon } from '../ui/FestiveIcon';

interface AdventCardProps {
  activity: AdventActivity;
  isOpened: boolean;
  isCompleted: boolean;
  isLocked: boolean;
  onSelect: (activity: AdventActivity) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Tarjetita individual del calendario de adviento.
 * Muestra el número del día, su icono festivo, estado (abierta/completada/bloqueada)
 * y responde con micro-animaciones cálidas al interactuar.
 */
export function AdventCard({
  activity,
  isOpened,
  isCompleted,
  isLocked,
  onSelect,
}: AdventCardProps) {
  const isFinale = activity.day === 24;

  const cardClasses = [
    'advent-card',
    isFinale ? 'advent-card--finale' : `advent-card--${activity.accent}`,
    isCompleted ? 'advent-card--completed' : '',
    isLocked ? 'advent-card--locked' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.button
      type="button"
      className={cardClasses}
      variants={cardVariants}
      whileHover={isLocked ? undefined : { y: -7, scale: 1.025 }}
      whileTap={isLocked ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      onClick={() => onSelect(activity)}
      aria-label={`Día ${activity.day}: ${activity.title}${isCompleted ? ' (completada)' : ''}`}
    >
      <div className="card-top-row">
        <span className="card-month-label">{isFinale ? 'Nochebuena' : 'Dic'}</span>

        {isCompleted ? (
          <span className="card-status-badge card-status-badge--done" title="Actividad completada">
            <Check size={14} strokeWidth={3} />
          </span>
        ) : isLocked ? (
          <span className="card-status-badge card-status-badge--locked" title="Disponible en su día de diciembre">
            <Lock size={13} />
          </span>
        ) : isOpened ? (
          <span className="card-status-badge card-status-badge--opened" title="Carta abierta">
            <MailOpen size={13} />
          </span>
        ) : null}
      </div>

      <div className="card-center">
        <span className="card-icon-wrap">
          <FestiveIcon name={activity.icon} size={22} />
        </span>
        <span className="card-day-number">{activity.day}</span>
      </div>

      <span className="card-footer-hint">
        {isLocked
          ? 'Se abre en diciembre'
          : isOpened || isCompleted
            ? activity.title
            : `Abrir carta · ${activity.category}`}
      </span>
    </motion.button>
  );
}

