import { useMemo } from 'react';

interface SnowfallBackgroundProps {
  enabled: boolean;
}

/**
 * Fondo atmosférico con copos suaves y luces cálidas desenfocadas (bokeh).
 * Usa animaciones CSS puras para mantener 60fps fluidos.
 */
export function SnowfallBackground({ enabled }: SnowfallBackgroundProps) {
  const snowflakes = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${(index * 3.7 + (index % 5) * 2.1) % 100}%`,
        size: 3 + (index % 4) * 1.6,
        duration: 10 + (index % 7) * 2.3,
        delay: -(index * 0.9),
        opacity: 0.28 + (index % 5) * 0.12,
      })),
    []
  );

  return (
    <div className="snowfall-layer" aria-hidden="true">
      {/* Orbes cálidos tipo luces de árbol de Navidad */}
      <div
        className="bokeh-orb"
        style={{
          width: 240,
          height: 240,
          left: '8%',
          top: '14%',
          background: 'rgba(223, 176, 86, 0.5)',
        }}
      />
      <div
        className="bokeh-orb"
        style={{
          width: 280,
          height: 280,
          right: '6%',
          top: '28%',
          background: 'rgba(182, 50, 60, 0.45)',
          animationDelay: '-4s',
        }}
      />
      <div
        className="bokeh-orb"
        style={{
          width: 220,
          height: 220,
          left: '42%',
          bottom: '8%',
          background: 'rgba(223, 176, 86, 0.35)',
          animationDelay: '-7s',
        }}
      />

      {enabled &&
        snowflakes.map((flake) => (
          <span
            key={flake.id}
            className="snowflake"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
            }}
          />
        ))}
    </div>
  );
}

