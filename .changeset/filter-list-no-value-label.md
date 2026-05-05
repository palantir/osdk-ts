---
"@osdk/react-components": minor
---

Standardize "No value" rendering in FilterList — introduce a shared `NoValueLabel` component (italic, muted) used by listogram buckets, single-select and multi-select dropdown options, multi-select chips, text-tag chips, and the `NullValueWrapper` include-null row. Adds an `isEmptyValue` helper. Legacy `--osdk-filter-listogram-empty-label-*` and `--osdk-filter-null-label-color` tokens remain as forwarders onto the canonical `--osdk-filter-no-value-color` / `--osdk-filter-no-value-font-style` tokens so existing theme overrides continue to work.
