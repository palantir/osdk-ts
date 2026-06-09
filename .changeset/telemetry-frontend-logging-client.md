---
"@osdk/telemetry": minor
"@osdk/client": minor
---

<!-- cspell:ignore traceparent tracestate -->

Rewrite `@osdk/telemetry` as an OpenTelemetry logs frontend that exports over OTLP. `createLoggingClient({ client, applicationRid })` returns a `Logger` (`debug`/`info`/`warn`/`error`) backed by the OTel logs SDK, batching log records and exporting them as OTLP through the OSDK client's base URL and OAuth token, with an optional `beforeSend` redaction processor. The `applicationRid` is attached as an OTLP resource attribute so emitted logs are attributable to the calling app. On `@osdk/client`, outbound function, query, and action calls now carry W3C `traceparent`/`tracestate` headers so traces propagate end to end across the call boundary.
