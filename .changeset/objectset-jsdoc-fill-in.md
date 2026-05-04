---
"@osdk/api": patch
"@osdk/client": patch
---

Fill in missing `@param`, `@example`, and `@returns` tags on JSDoc across the public surface of `@osdk/api` and `@osdk/client`: `ObjectSet` methods, the derived-property `Builder` chain and `NumericExpressions` / `DatetimeExpressions` chains, the `Logger` interface, `Attachment` and `Media` accessors, `TimeSeriesProperty` / `GeotimeSeriesProperty` single-point methods, the top-level `Client` callable and `fetchMetadata`, and the `createClient` factory.
