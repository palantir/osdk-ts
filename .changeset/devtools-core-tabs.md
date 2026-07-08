---
"@osdk/react-devtools": patch
---

render only the Components, Console, and Cache tabs in the devtools panel, replacing the Performance, Compute, Intercept, and Debugging tabs. The cache sections now render flush, dropping the extra section padding via an `OverviewSection` `padded` prop
