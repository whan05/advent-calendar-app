import { useCallback, useEffect, useState } from 'react';
import { AdventProgressState } from '../types/advent';

const STORAGE_KEY = 'advent-calendar-progress-v1';

const DEFAULT_STATE: AdventProgressState = {
  openedDays: [],
  completedDays: [],
};

/**
 * Lee el progreso guardado en localStorage de forma segura.
 */
function loadSavedProgress(): AdventProgressState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;

    const parsed = JSON.parse(raw) as Partial<AdventProgressState>;
    return {
      openedDays: Array.isArray(parsed.openedDays) ? parsed.openedDays : [],
      completedDays: Array.isArray(parsed.completedDays) ? parsed.completedDays : [],
    };
  } catch {
    return DEFAULT_STATE;
  }
}

/**
 * Hook personalizado que gestiona qué tarjetas de adviento se han abierto
 * y qué actividades ha completado el usuario, persistiendo todo en localStorage.
 */
export function useAdventProgress(totalDays: number) {
  const [progress, setProgress] = useState<AdventProgressState>(loadSavedProgress);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Si el almacenamiento no está disponible, continuamos en memoria sin interrumpir la UX
    }
  }, [progress]);

  /** Marca un día como abierto la primera vez que se consulta su carta */
  const markAsOpened = useCallback((day: number) => {
    setProgress((prev) => {
      if (prev.openedDays.includes(day)) return prev;
      return {
        ...prev,
        openedDays: [...prev.openedDays, day],
      };
    });
  }, []);

  /** Alterna el estado de completado de una actividad */
  const toggleCompleted = useCallback((day: number) => {
    setProgress((prev) => {
      const alreadyCompleted = prev.completedDays.includes(day);
      const completedDays = alreadyCompleted
        ? prev.completedDays.filter((item) => item !== day)
        : [...prev.completedDays, day];

      const openedDays = prev.openedDays.includes(day)
        ? prev.openedDays
        : [...prev.openedDays, day];

      return { openedDays, completedDays };
    });
  }, []);

  /** Reinicia todo el calendario para empezar de nuevo */
  const resetProgress = useCallback(() => {
    setProgress(DEFAULT_STATE);
  }, []);

  const isOpened = useCallback(
    (day: number) => progress.openedDays.includes(day),
    [progress.openedDays]
  );

  const isCompleted = useCallback(
    (day: number) => progress.completedDays.includes(day),
    [progress.completedDays]
  );

  const completedCount = progress.completedDays.length;
  const completionPercentage = Math.round((completedCount / totalDays) * 100);

  return {
    openedDays: progress.openedDays,
    completedDays: progress.completedDays,
    completedCount,
    completionPercentage,
    isOpened,
    isCompleted,
    markAsOpened,
    toggleCompleted,
    resetProgress,
  };
}

