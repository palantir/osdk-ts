---
"@osdk/react-components": minor
---

Replace the div-based date and number range histograms in FilterList with SVG that adds y-axis grid lines at "nice" tick values, count labels above each non-empty bar, x-axis tick labels (per-bucket for date histograms; first/last only for number histograms), and a period subtitle for date ranges that fit inside one calendar period. New `createDateHistogramBuckets` helper picks day/month/year granularity from the data span and snaps bucket boundaries to calendar starts. Date histograms route their subtitle through `formatDate` (Item 5) when provided.
