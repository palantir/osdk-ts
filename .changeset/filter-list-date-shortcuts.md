---
"@osdk/react-components": minor
---

Add opt-in relative-range shortcut rail to FilterList DATE_RANGE filters via the new `dateShortcuts` property on date-typed `PropertyFilterDefinition`s. Pass `dateShortcuts: true` for the built-in defaults (`DEFAULT_DATE_RANGE_SHORTCUTS`) or a custom `DateRangePickerShortcut[]`, where each shortcut resolves to a `DateRange` applied to both bounds. The rail renders above the From / To inputs. Single-date filters have no shortcut rail, matching Workshop.
