---
"@osdk/client": minor
"@osdk/react": minor
---

Add dev-mode observable client debugging knobs. `devMode.logLevel` raises the client's log level so its `debug` tracing is visible, and `devMode.debug.refCounts` / `devMode.debug.cacheKeys` turn on cache-internals logging. They are exposed through `createObservableClient`'s `devMode` option and the `OsdkProvider` `devMode` prop, and are stripped from production builds.
