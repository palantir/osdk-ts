---
"@osdk/react-components": minor
---

Replace native `<input type="date">` in FilterList date inputs with `DatetimePickerField` so the visible date format is consistent across browser locales (previously en-US viewers saw mm/dd/yyyy and en-GB viewers saw dd/mm/yyyy for the same dashboard). `SingleDateInput`, `MultiDateInput`, and `RangeInput`'s date bounds now share the same popover-based picker as the action form.

`DatetimePickerField` gains optional `ariaLabel` and `modal` props. Pass `modal={false}` when nesting the picker inside another popover (e.g. `FilterPopover`) so its dismiss layer and focus trap don't fight the parent. `ariaLabel` lets the input expose an accessible name without a sibling `<label>`.

Calendar primitives (`DateCalendar`, `DateRangeCalendar`, `LazyDateCalendar`, `LazyDateRangeCalendar`, `calendarShared`, `DatePickerCommon.module.css`) move from `action-form/fields/` to a shared `shared/calendar/` location and are re-exported from `shared/calendar/index.ts` so both `action-form` and `filter-list` import from one place.
