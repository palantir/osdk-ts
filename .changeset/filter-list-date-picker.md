---
"@osdk/react-components": minor
---

Replace native `<input type="date">` in FilterList date inputs with the existing `DatetimePickerField` so the visible date format is consistent across browser locales (previously en-US viewers saw mm/dd/yyyy and en-GB viewers saw dd/mm/yyyy for the same dashboard). SingleDateInput, MultiDateInput, and RangeInput now use `DatetimePickerField` directly instead of a separate filter-list-only picker.

Calendar primitives (`DateCalendar`, `DateRangeCalendar`, `LazyDateCalendar`, `LazyDateRangeCalendar`, `calendarShared`, `DatePickerCommon.module.css`) move from `action-form/fields/` to a shared `shared/calendar/` location and are re-exported from `shared/calendar/index.ts`. `DatetimePickerField` gains an optional `ariaLabel` prop for use without an adjacent `<label>` element.
