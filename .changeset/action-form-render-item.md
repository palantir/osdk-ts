---
"@osdk/react-components": minor
---

Action form fields now support rich `ReactNode` rendering for values. `DropdownField` and `ObjectSelectField` accept a `ReactNode`-returning `itemToStringLabel`, plus new `itemToSearchText` and `itemToAriaLabel` props for the combobox client-side filter and chip remove `aria-label`. `RadioButtonsField` now accepts `ReactNode` for `Option.label`; internal state identity moved from the label string to the option index so selection by `value` is unchanged. All changes are backward compatible — existing string callers see no behavior change.
