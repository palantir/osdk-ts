---
"@osdk/react-components": minor
"@osdk/react-components-styles": minor
---

Align ActionForm input-like controls with Blueprint-style shadows, focus rings, and button hover behavior.

Migration: remove overrides for the legacy input focus width, color, and offset CSS variables, plus the removed file picker trigger, date picker, and time picker border/border-color/focus/error border color variables (e.g. `--osdk-datetime-input-border-color`, `--osdk-datetime-input-border-color-focus`, `--osdk-datetime-input-error-border-color`, `--osdk-time-picker-input-border-color-focus`). Use `--osdk-input-focus-outline`, `--osdk-input-focus-shadow`, and the matching date picker, file picker, or time picker focus shadow tokens instead.
