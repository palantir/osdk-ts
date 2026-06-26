---
"@osdk/client": minor
"@osdk/react": minor
---

Add client-wide defaults to the observable client: `defaultDedupeInterval` and `defaultPageSize`. Subscriptions that do not set their own `dedupeInterval` or `pageSize` inherit these, so teams don't have to thread the same value through every hook. Exposed through `createObservableClient`'s options and the `OsdkProvider` props. A subscription's own option always overrides the default, including an explicit `dedupeInterval: 0` to opt out of a non-zero default.
