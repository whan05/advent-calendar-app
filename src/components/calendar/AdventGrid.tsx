import { motion } from 'framer-motion';
import { AdventActivity } from '../../types/advent';
import { AdventCard } from './AdventCard';

interface AdventGridProps {
  activities: AdventActivity[];
  isOpened: (day: number) => boolean;
  isCompleted: (day: number) => boolean;
  isDayLocked: (day: number) => boolean;
  onSelectActivity: (activity: AdventActivity) => void;
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.08,
    },
  },
};

/**
 * Cuadrícula responsiva con las 24 tarjetas navideñas y entrada escalonada.
 */
export function AdventGrid({
  activities,
  isOpened,
  isCompleted,
  isDayLocked,
  onSelectActivity,
}: AdventGridProps) {
  return (
    <motion.section
      className="advent-grid"
      aria-label="Tarjetas de los 24 días de adviento"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {activities.map((activity) => (
        <AdventCard
          key={activity.day}
          activity={activity}
          isOpened={isOpened(activity.day)}
          isCompleted={isCompleted(activity.day)}
          isLocked={isDayLocked(activity.day)}
          onSelect={onSelectActivity}
        />
      ))}
    </motion.section>
  );
}

