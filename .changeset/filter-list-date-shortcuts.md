---
"@osdk/react-components": minor
---

Add opt-in relative-range shortcut rail to FilterList date filters (DATE_RANGE, SINGLE_DATE) via the new `dateShortcuts` property on date-typed `PropertyFilterDefinition`s. Pass `true` for the built-in defaults or a `DatePickerShortcut[]` of custom `{ label, range }` entries to own the list. The rail lives in the shared date picker.
