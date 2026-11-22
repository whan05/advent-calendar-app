import { motion } from 'framer-motion';
import { Calendar, RotateCcw, Snowflake, Sparkles, Unlock } from 'lucide-react';

interface HeaderProps {
  completedCount: number;
  totalDays: number;
  completionPercentage: number;
  snowEnabled: boolean;
  onToggleSnow: () => void;
  unlockAllMode: boolean;
  onToggleUnlockMode: () => void;
  onResetProgress: () => void;
}

/**
 * Encabezado principal del calendario con barra de progreso animada
 * y controles de ambiente y modo de apertura.
 */
export function Header({
  completedCount,
  totalDays,
  completionPercentage,
  snowEnabled,
  onToggleSnow,
  unlockAllMode,
  onToggleUnlockMode,
  onResetProgress,
}: HeaderProps) {
  return (
    <motion.header
      className="advent-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header-badge">
        <Sparkles size={14} />
        <span>24 Días de Magia y Calidez</span>
      </div>

      <h1 className="header-title">Calendario de Adviento</h1>

      <p className="header-subtitle">
        Cada tarjetita guarda una carta escrita con cariño y un pequeño ritual para disfrutar
        diciembre sin prisas. Elige un día y descubre tu mensaje especial.
      </p>

      <div className="header-dashboard">
        <div className="progress-block">
          <div className="progress-meta">
            <span className="progress-label">
              <Sparkles size={15} color="#f5d48a" />
              Tu camino navideño
            </span>
            <span className="progress-count">
              {completedCount} de {totalDays} completadas ({completionPercentage}%)
            </span>
          </div>
          <div className="progress-track" role="progressbar" aria-valuenow={completionPercentage} aria-valuemin={0} aria-valuemax={100}>
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        </div>

        <div className="header-actions">
          <button
            type="button"
            className={`pill-btn ${unlockAllMode ? 'active' : ''}`}
            onClick={onToggleUnlockMode}
            title="Alterna entre abrir cualquier día libremente o respetar las fechas de diciembre"
          >
            {unlockAllMode ? <Unlock size={15} /> : <Calendar size={15} />}
            <span>{unlockAllMode ? 'Modo libre' : 'Seguir fechas'}</span>
          </button>

          <button
            type="button"
            className={`pill-btn ${snowEnabled ? 'active' : ''}`}
            onClick={onToggleSnow}
            title="Activar o pausar la nieve ambiental"
          >
            <Snowflake size={15} />
            <span>{snowEnabled ? 'Nieve activa' : 'Sin nieve'}</span>
          </button>

          {completedCount > 0 && (
            <button
              type="button"
              className="pill-btn"
              onClick={onResetProgress}
              title="Reiniciar días abiertos y completados"
            >
              <RotateCcw size={15} />
              <span>Reiniciar</span>
            </button>
          )}
        </div>
      </div>
    </motion.header>
  );
}

