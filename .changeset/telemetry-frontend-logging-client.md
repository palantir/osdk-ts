---
"@osdk/telemetry": minor
"@osdk/client": minor
---

Rewrite `@osdk/telemetry` as an OpenTelemetry logs frontend that exports over OTLP/JSON. `createLoggingClient({ client, applicationRid })` returns a `Logger` (`debug`/`info`/`warn`/`error`) backed by the OTel logs SDK, batching log records and exporting them through the OSDK client's base URL and OAuth token, with a `minimumLevel` emission gate and an optional `beforeSend` redaction hook. The `applicationRid` and `applicationVersion` ride as OTLP resource attributes so logs are attributable to the calling app. On `@osdk/client`, outbound function, query, and action calls now carry W3C `traceparent`/`tracestate` headers so calls and the app's frontend logs share a trace id.
