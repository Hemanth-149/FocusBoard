# FocusBoard

A responsive single-user task dashboard built with React + Vite (JavaScript). Frontend only.

- **Live URL:** https://YOUR-APP.vercel.app
- **GitHub:** https://github.com/YOUR-USERNAME/focusboard

## Setup
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Features
Create / edit / delete (with confirmation), status updates, case-insensitive title search + status tabs + priority filter (all combine), derived statistics, Focus Notes carousel (3 slides, prev/next, indicators), localStorage persistence, keyboard-accessible dialogs and controls.

## State management
`useReducer` inside a custom `useTasks` hook. One tasks array is the single source of truth; all mutations are pure reducer actions (add, update, status, delete) that return new arrays. Statistics, filtered lists and tab counts are derived with `useMemo`, never stored. The hook loads from `localStorage` once (sample data is used only when nothing is saved) and writes on every change inside try/catch. The task set is small and local to one screen, so Redux/Zustand would be unnecessary. Carousel index is local state in `FocusNotes`.

## Structure
`src/hooks/useTasks.js`, `src/data/*`, `src/components/*`, `src/index.css`.

## Limitations
- The JD account button in the header is a visual placeholder; "View all tasks" clears all filters.
- Focus Notes copy and exact visual details should be compared against the Figma frames.
