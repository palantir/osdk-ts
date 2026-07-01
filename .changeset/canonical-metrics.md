---
"@osdk/react-devtools": patch
---

Add a canonical, request-based metrics source (getCanonicalMetrics + useCanonicalMetrics) that derives the nine shared devtools metrics from a MetricsSnapshot and gates each one behind a per-metric sample-count readiness flag so cold-start values no longer read as broken
