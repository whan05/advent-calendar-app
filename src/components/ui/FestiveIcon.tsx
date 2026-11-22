import {
  Bell,
  BookOpen,
  Camera,
  Coffee,
  Cookie,
  Film,
  Flame,
  Gift,
  Heart,
  Mail,
  Moon,
  Music,
  Palette,
  PenTool,
  Snowflake,
  Sparkles,
  Star,
  Sun,
  Trees,
  Utensils,
} from 'lucide-react';
import { FestiveIconName } from '../../types/advent';

interface FestiveIconProps {
  name: FestiveIconName;
  size?: number;
}

const ICON_MAP = {
  star: Star,
  gift: Gift,
  heart: Heart,
  sparkles: Sparkles,
  coffee: Coffee,
  music: Music,
  snowflake: Snowflake,
  flame: Flame,
  mail: Mail,
  cookie: Cookie,
  tree: Trees,
  moon: Moon,
  sun: Sun,
  book: BookOpen,
  camera: Camera,
  bell: Bell,
  film: Film,
  utensils: Utensils,
  palette: Palette,
  pen: PenTool,
} as const;

/**
 * Renderiza el icono navideño correspondiente a cada actividad.
 */
export function FestiveIcon({ name, size = 20 }: FestiveIconProps) {
  const IconComponent = ICON_MAP[name];
  return <IconComponent size={size} strokeWidth={1.85} aria-hidden="true" />;
}

