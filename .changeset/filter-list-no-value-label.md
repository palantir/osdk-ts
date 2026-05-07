---
"@osdk/react-components": minor
---

Standardize "No value" rendering in FilterList — introduce a shared `NoValueLabel` component (italic, muted) used by listogram buckets, single-select and multi-select dropdown options, multi-select chips, text-tag chips, and the `NullValueWrapper` include-null row. Adds an `isEmptyValue` helper. The `NullValueWrapper` include-null row's default visual flips from upright/default-color to italic/muted so it matches the dropdown and listogram surfaces. Legacy `--osdk-filter-listogram-empty-label-color`, `--osdk-filter-listogram-empty-label-font-style`, `--osdk-filter-null-label-color`, `--osdk-filter-null-label-font-family`, `--osdk-filter-null-label-font-size`, and `--osdk-filter-null-label-line-height` tokens are honored as opt-in overrides on the listogram and null-wrapper containers; consumers who explicitly set them continue to override the new italic-muted defaults.
