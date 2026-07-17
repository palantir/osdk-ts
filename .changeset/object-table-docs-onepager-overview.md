---
"@osdk/react-components": patch
---

Add an `ObjectTableOverview.md` one-pager (usage, a direct `ObjectTableProps` props reference, and the styling/`Style API` token table) rendered by the Storybook ObjectTable Docs page, and reorder `ObjectTableProps` so the props reference reads `objectType`, `objectSet`, `columnDefinitions` first and then groups the remaining props by feature (data source, filtering, columns, sorting, selection, focus, editing, interactions, display). Marked `draft` so the overview stays out of the published docs site while iterating.
