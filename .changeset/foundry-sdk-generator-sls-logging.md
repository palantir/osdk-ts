---
"@osdk/foundry-sdk-generator": minor
"@osdk/generator": patch
"@osdk/generator-converters": patch
---

Emit structured `service.1` JSON logs to stdout for log forwarders, with timing for ontology metadata loading and OSDK package generation phases. Reads `JOB_ID` and `TRACE_ID` from env and threads them into every record's params for cross-process correlation. The previous human-readable console output (via consola) has been removed; the CLI now exits with a non-zero status code on failure.

Add `GeneratorError` class to `@osdk/generator-converters` that carries structured `unsafeParams` separately from the error message, keeping user-controlled data (API names, object type names) out of the SLS `stacktrace` field and routing it to the `unsafeParams` log field instead.
