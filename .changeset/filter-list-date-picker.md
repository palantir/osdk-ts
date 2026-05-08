---
"@osdk/react-components": minor
---

Replace native `<input type="date">` in FilterList date inputs with a custom popover-based date picker so the visible date format is consistent across browser locales (previously en-US viewers saw mm/dd/yyyy and en-GB viewers saw dd/mm/yyyy for the same dashboard). The new `FilterDatePicker` is built on `react-day-picker` (already a dependency) and uses an ISO `YYYY-MM-DD` text input paired with a popover calendar. SingleDateInput, MultiDateInput, and DateRangeInput now use this picker. Mobile viewers no longer see the OS-native wheel picker; the popover calendar is used everywhere.

Calendar primitives (`DateCalendar`, `DateRangeCalendar`, `LazyDateCalendar`, `LazyDateRangeCalendar`, `calendarShared`, `DatePickerCommon.module.css`) move from `action-form/fields/` to a shared `shared/calendar/` location and are re-exported from `shared/calendar/index.ts` so both `action-form` and `filter-list` import from one place.
