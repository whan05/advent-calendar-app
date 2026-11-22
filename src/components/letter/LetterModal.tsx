import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, Clock, Sparkles, X } from 'lucide-react';
import { AdventActivity } from '../../types/advent';
import { FestiveIcon } from '../ui/FestiveIcon';
import { SparkleBurst } from '../ui/SparkleBurst';
import { LetterOpeningLoader } from './LetterOpeningLoader';

interface LetterModalProps {
  activity: AdventActivity | null;
  isCompleted: boolean;
  onClose: () => void;
  onToggleComplete: (day: number) => void;
  onNavigateDay: (targetDay: number) => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

/** Duración breve del loading de apertura del sobre para dar sensación fluida y mágica */
const LETTER_OPENING_DELAY_MS = 520;

/**
 * Modal que presenta cada actividad en formato de carta navideña de pergamino,
 * con animación de apertura de sobre, navegación entre días y celebración al completar.
 */
export function LetterModal({
  activity,
  isCompleted,
  onClose,
  onToggleComplete,
  onNavigateDay,
  canGoPrevious,
  canGoNext,
}: LetterModalProps) {
  const [isOpeningLetter, setIsOpeningLetter] = useState(true);
  const [sparkleKey, setSparkleKey] = useState(0);

  // Muestra un breve y agradable loading cada vez que se abre una nueva carta
  useEffect(() => {
    if (!activity) return;

    setIsOpeningLetter(true);
    const timer = window.setTimeout(() => {
      setIsOpeningLetter(false);
    }, LETTER_OPENING_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [activity]);

  // Permite cerrar la carta presionando la tecla Escape
  useEffect(() => {
    if (!activity) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activity, onClose]);

  const handleCompleteClick = () => {
    if (!activity) return;
    if (!isCompleted) {
      setSparkleKey((prev) => prev + 1);
    }
    onToggleComplete(activity.day);
  };

  return (
    <AnimatePresence>
      {activity && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="letter-modal-title"
        >
          <div className="modal-stage" onClick={(event) => event.stopPropagation()}>
            <AnimatePresence mode="wait">
              {isOpeningLetter ? (
                <LetterOpeningLoader key={`loader-${activity.day}`} day={activity.day} />
              ) : (
                <motion.article
                  key={`letter-${activity.day}`}
                  className="letter-paper"
                  initial={{ opacity: 0, y: 26, scale: 0.94, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: 16, scale: 0.96 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    type="button"
                    className="letter-close-btn"
                    onClick={onClose}
                    aria-label="Cerrar carta"
                  >
                    <X size={20} />
                  </button>

                  {/* Encabezado de la carta con sello de lacre */}
                  <div className="letter-header">
                    <motion.div
                      className="letter-wax-badge"
                      initial={{ scale: 0.7, rotate: -14 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                    >
                      <span className="letter-wax-day">{activity.day}</span>
                      <span className="letter-wax-month">Dic</span>
                    </motion.div>

                    <div>
                      <div className="letter-meta">
                        <span className="letter-tag">
                          <FestiveIcon name={activity.icon} size={13} />
                          {activity.category}
                        </span>
                        <span className="letter-time">
                          <Clock size={13} />
                          {activity.estimatedTime}
                        </span>
                      </div>
                      <h2 id="letter-modal-title" className="letter-title">
                        {activity.title}
                      </h2>
                    </div>
                  </div>

                  {/* Cuerpo motivador de la carta */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.36 }}
                  >
                    <p className="letter-greeting">{activity.greeting}</p>
                    <p className="letter-description">{activity.description}</p>
                  </motion.div>

                  {/* Pequeño reto práctico del día */}
                  <motion.div
                    className="letter-challenge-box"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.36 }}
                  >
                    <span className="letter-challenge-label">
                      <Sparkles size={14} />
                      Tu misión bonita de hoy
                    </span>
                    <p className="letter-challenge-text">{activity.dailyChallenge}</p>
                  </motion.div>

                  {/* Frase cálida al pie */}
                  <motion.blockquote
                    className="letter-quote"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    “{activity.quote}”
                  </motion.blockquote>

                  {/* Acciones: completar y navegar entre cartas */}
                  <div className="letter-actions">
                    <div className="complete-btn-wrap">
                      <SparkleBurst burstKey={sparkleKey} />
                      <motion.button
                        type="button"
                        className={`complete-btn ${isCompleted ? 'complete-btn--done' : ''}`}
                        whileTap={{ scale: 0.96 }}
                        onClick={handleCompleteClick}
                      >
                        <Check size={18} strokeWidth={2.5} />
                        <span>
                          {isCompleted
                            ? '¡Actividad completada!'
                            : 'Marcar como completada'}
                        </span>
                      </motion.button>
                    </div>

                    <div className="letter-nav-group">
                      <button
                        type="button"
                        className="nav-day-btn"
                        disabled={!canGoPrevious}
                        onClick={() => onNavigateDay(activity.day - 1)}
                      >
                        <ChevronLeft size={16} />
                        <span>Anterior</span>
                      </button>

                      <button
                        type="button"
                        className="nav-day-btn"
                        disabled={!canGoNext}
                        onClick={() => onNavigateDay(activity.day + 1)}
                      >
                        <span>Siguiente</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

