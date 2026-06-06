---
"@osdk/telemetry": minor
---

Add `@osdk/telemetry`, a frontend logging library for OSDK apps. `createLoggingClient({ client, applicationRid })` returns a `Logger` (`debug`/`info`/`warn`/`error`) that buffers entries client-side and flushes one `Log.write` request per flush on a 5s interval, on buffer fill, and on `pagehide` (keepalive). Reuses the OSDK client's base URL and OAuth token, serializes errors with their `cause` chain, and supports an optional `beforeSend` redaction hook. Emission is isolated behind a single Foundry `Transport` seam built against the upstream `Log.write` stub contract.
