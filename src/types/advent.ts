/**
 * Categorías emocionales de las actividades del calendario de adviento.
 * Ayudan a dar identidad visual y propósito a cada carta.
 */
export type ActivityCategory =
  | 'Gratitud'
  | 'Conexión'
  | 'Calidez'
  | 'Creatividad'
  | 'Generosidad'
  | 'Paz';

/**
 * Variantes visuales para las tarjetas del calendario,
 * inspiradas en una paleta navideña cálida (pino, borgoña, dorado y canela).
 */
export type CardAccent = 'pine' | 'crimson' | 'gold' | 'cinnamon';

/**
 * Iconos decorativos disponibles para ilustrar cada día del calendario.
 */
export type FestiveIconName =
  | 'star'
  | 'gift'
  | 'heart'
  | 'sparkles'
  | 'coffee'
  | 'music'
  | 'snowflake'
  | 'flame'
  | 'mail'
  | 'cookie'
  | 'tree'
  | 'moon'
  | 'sun'
  | 'book'
  | 'camera'
  | 'bell'
  | 'film'
  | 'utensils'
  | 'palette'
  | 'pen';

/**
 * Estructura de una actividad diaria del Calendario de Adviento.
 */
export interface AdventActivity {
  /** Día de diciembre (1 al 24) */
  day: number;
  /** Título breve y evocador de la actividad */
  title: string;
  /** Etiqueta de categoría emocional */
  category: ActivityCategory;
  /** Saludo cálido con el que abre la carta */
  greeting: string;
  /** Descripción especial y motivadora en formato de carta */
  description: string;
  /** Acción concreta y bonita para realizar durante el día */
  dailyChallenge: string;
  /** Frase inspiradora al pie de la carta */
  quote: string;
  /** Tiempo estimado aproximado para la actividad */
  estimatedTime: string;
  /** Variante de color de la tarjeta */
  accent: CardAccent;
  /** Icono festivo asociado al día */
  icon: FestiveIconName;
}

/**
 * Estado persistente del progreso del usuario en el calendario.
 */
export interface AdventProgressState {
  /** Lista de días que ya han sido abiertos al menos una vez */
  openedDays: number[];
  /** Lista de días cuya actividad fue marcada como completada */
  completedDays: number[];
}

