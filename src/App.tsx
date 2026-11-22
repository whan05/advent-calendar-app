import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { ADVENT_ACTIVITIES } from './data/adventActivities';
import { useAdventProgress } from './hooks/useAdventProgress';
import { AdventActivity } from './types/advent';
import { InitialLoader } from './components/layout/InitialLoader';
import { SnowfallBackground } from './components/layout/SnowfallBackground';
import { Header } from './components/layout/Header';
import { AdventGrid } from './components/calendar/AdventGrid';
import { LetterModal } from './components/letter/LetterModal';

const INITIAL_LOADING_MS = 1200;

/**
 * Componente raíz del Calendario de Adviento.
 * Coordina la pantalla de bienvenida, la cuadrícula de 24 días,
 * la carta interactiva y el progreso guardado del usuario.
 */
export function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState<AdventActivity | null>(null);
  const [snowEnabled, setSnowEnabled] = useState(true);
  // Activado por defecto para que cualquier persona pueda explorar las 24 cartas desde hoy
  const [unlockAllMode, setUnlockAllMode] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const {
    completedCount,
    completionPercentage,
    isOpened,
    isCompleted,
    markAsOpened,
    toggleCompleted,
    resetProgress,
  } = useAdventProgress(ADVENT_ACTIVITIES.length);

  // Loading inicial cálido y fluido antes de revelar las tarjetas
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsInitialLoading(false);
    }, INITIAL_LOADING_MS);

    return () => window.clearTimeout(timer);
  }, []);

  // Auto-cierre de mensajes informativos flotantes
  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  /**
   * Determina si un día está bloqueado cuando el usuario activa el modo "Seguir fechas".
   */
  const isDayLocked = useCallback(
    (day: number) => {
      if (unlockAllMode) return false;
      const today = new Date();
      const isDecember = today.getMonth() === 11;
      if (!isDecember) return true;
      return day > today.getDate();
    },
    [unlockAllMode]
  );

  const handleSelectActivity = useCallback(
    (activity: AdventActivity) => {
      if (isDayLocked(activity.day)) {
        setToastMessage(
          `El día ${activity.day} se abre el ${activity.day} de diciembre. Activa "Modo libre" para verlo ahora.`
        );
        return;
      }

      markAsOpened(activity.day);
      setSelectedActivity(activity);
    },
    [isDayLocked, markAsOpened]
  );

  const handleNavigateDay = useCallback(
    (targetDay: number) => {
      const nextActivity = ADVENT_ACTIVITIES.find((item) => item.day === targetDay);
      if (!nextActivity) return;
      handleSelectActivity(nextActivity);
    },
    [handleSelectActivity]
  );

  const canGoPrevious = selectedActivity
    ? selectedActivity.day > 1 && !isDayLocked(selectedActivity.day - 1)
    : false;

  const canGoNext = selectedActivity
    ? selectedActivity.day < ADVENT_ACTIVITIES.length && !isDayLocked(selectedActivity.day + 1)
    : false;

  return (
    <>
      <SnowfallBackground enabled={snowEnabled} />

      <AnimatePresence>{isInitialLoading && <InitialLoader />}</AnimatePresence>

      {!isInitialLoading && (
        <main className="app-shell">
          <Header
            completedCount={completedCount}
            totalDays={ADVENT_ACTIVITIES.length}
            completionPercentage={completionPercentage}
            snowEnabled={snowEnabled}
            onToggleSnow={() => setSnowEnabled((prev) => !prev)}
            unlockAllMode={unlockAllMode}
            onToggleUnlockMode={() => setUnlockAllMode((prev) => !prev)}
            onResetProgress={resetProgress}
          />

          <AdventGrid
            activities={ADVENT_ACTIVITIES}
            isOpened={isOpened}
            isCompleted={isCompleted}
            isDayLocked={isDayLocked}
            onSelectActivity={handleSelectActivity}
          />

          <footer className="advent-footer">
            Hecho con calidez navideña · Cada día es una oportunidad para celebrar lo sencillo.
          </footer>
        </main>
      )}

      <LetterModal
        activity={selectedActivity}
        isCompleted={selectedActivity ? isCompleted(selectedActivity.day) : false}
        onClose={() => setSelectedActivity(null)}
        onToggleComplete={toggleCompleted}
        onNavigateDay={handleNavigateDay}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
      />

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="toast-banner"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            role="status"
          >
            <Lock size={15} color="#f5d48a" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

