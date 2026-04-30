---
"@osdk/foundry-sdk-generator": minor
---

Emit structured `service.1` JSON logs to stdout for log forwarders, with timing for ontology metadata loading and OSDK package generation phases. Reads `JOB_ID` and `TRACE_ID` from env and threads them into every record's params for cross-process correlation. The previous human-readable console output (via consola) has been removed; the CLI now exits with a non-zero status code on failure.
