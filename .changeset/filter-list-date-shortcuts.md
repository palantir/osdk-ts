---
"@osdk/react-components": minor
---

Add opt-in relative-date shortcut rail to FilterList date filters via the new `dateShortcuts` property on date-typed `PropertyFilterDefinition`s. SINGLE_DATE filters take `DatePickerShortcut`s (each resolves to a single `Date`); DATE_RANGE filters take `DateRangePickerShortcut`s (each resolves to a `DateRange` applied to both bounds). Pass `dateShortcuts: true` for the built-in defaults (`DEFAULT_DATE_SHORTCUTS` / `DEFAULT_DATE_RANGE_SHORTCUTS`) or supply a custom array. The single-date rail renders in the picker popover; the range rail renders above the From / To inputs.
