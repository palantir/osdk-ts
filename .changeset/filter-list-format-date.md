---
"@osdk/react-components": minor
---

Add per-property `formatDate` and `parseDate` callbacks to date-typed property filter definitions in `FilterList`. When provided, `formatDate` is used by the date-range histogram tooltip, multi-date chip text, and timeline labels. The HTML `<input type="date">` value attribute is unaffected and always uses ISO `YYYY-MM-DD`. The conditional intersection type `PropertyFilterDateExtras` gates `formatDate` / `parseDate` to `datetime` and `timestamp` properties only — setting them on number- or string-typed property filters is a TypeScript error.
