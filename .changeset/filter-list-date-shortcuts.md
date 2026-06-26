---
"@osdk/react-components": minor
---

Add opt-in relative-range shortcut rail to FilterList DATE_RANGE filters via the new `dateShortcuts` property on date-typed `PropertyFilterDefinition`s. Pass `dateShortcuts: true` for the built-in defaults (`DEFAULT_DATE_RANGE_SHORTCUTS`) or a custom `DateRangePickerShortcut[]`, where each shortcut resolves to a `DateRange` applied to both bounds. The shortcuts render as a list to the left of the calendar inside the date range picker popover (matching Workshop / Blueprint); the DATE_RANGE filter now uses the shared combined `DateRangePicker`. Single-date filters have no shortcut rail.
