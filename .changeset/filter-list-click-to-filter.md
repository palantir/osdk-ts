---
"@osdk/react-components": minor
---

Add `clickToFilter` to `DATE_RANGE` and `NUMBER_RANGE` property filter definitions in FilterList. When set to true, clicking a histogram bar selects that bucket and dragging across bars selects the covered range; clicking inside an existing selection band clears the filter. Adds an HTML overlay tooltip on bar hover, a translucent selection band overlay, and a Clear button when a filter is active. Off by default.
