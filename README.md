# Calendario de Adviento · 24 Días de Magia

Aplicación web en **React + TypeScript + Framer Motion** diseñada con una paleta cálida navideña (bosque invernal, rojo borgoña, canela, pergamino y dorado suave). Cada tarjetita del 1 al 24 abre una carta animada con una actividad bonita, una descripción motivadora, un pequeño reto diario y una frase especial.

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

Para generar la compilación de producción:

```bash
npm run build
```

## Arquitectura del código

La estructura está pensada para que cualquier persona que llegue al proyecto pueda entender rápidamente dónde vive cada responsabilidad:

```text
src/
├── main.tsx                           # Punto de entrada de React y estilos globales
├── App.tsx                            # Orquestador principal de estado, carga inicial y modal
├── types/
│   └── advent.ts                      # Interfaces TypeScript claras (actividad, categorías, progreso)
├── data/
│   └── adventActivities.ts            # Contenido de las 24 cartas navideñas
├── hooks/
│   └── useAdventProgress.ts           # Persistencia de días abiertos/completados en localStorage
├── styles/
│   ├── theme.css                      # Variables CSS con la paleta cálida y tipografías
│   └── global.css                     # Estilos base, tarjetas, carta de pergamino y animaciones CSS
└── components/
    ├── layout/
    │   ├── InitialLoader.tsx          # Pantalla de bienvenida con barra de progreso animada
    │   ├── SnowfallBackground.tsx     # Copos de nieve suaves y luces cálidas (bokeh)
    │   └── Header.tsx                 # Encabezado, barra de avance y controles
    ├── calendar/
    │   ├── AdventGrid.tsx             # Cuadrícula responsiva con entrada escalonada
    │   └── AdventCard.tsx             # Tarjetita navideña interactiva con estados visuales
    ├── letter/
    │   ├── LetterOpeningLoader.tsx    # Loading animado al romper el sello y abrir la carta
    │   └── LetterModal.tsx            # Carta de pergamino desplegable con navegación y celebración
    └── ui/
        ├── FestiveIcon.tsx            # Mapa centralizado de iconos navideños
        └── SparkleBurst.tsx           # Explosión de chispas doradas al completar un día
```

## Características principales

- **Presentación cálida y navideña**: fondo invernal con luces bokeh, copos de nieve opcionales y tarjetas en tonos pino, borgoña, canela y dorado.
- **Animaciones y loadings fluidos**: pantalla de carga inicial, entrada escalonada de tarjetas, animación de apertura de sobre con sello de lacre al hacer clic en cada tarjeta y chispas doradas al completar actividades.
- **Progreso guardado**: recuerda automáticamente qué cartas abriste y cuáles completaste usando `localStorage`.
- **Modo libre / Seguir fechas**: permite abrir cualquier día en cualquier momento o seguir el calendario real de diciembre.

