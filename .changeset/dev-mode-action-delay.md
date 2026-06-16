---
"@osdk/client": minor
"@osdk/react": minor
---

Make the dev-mode action delay smart, configurable, and discoverable. The delay now only applies to actions with an optimistic update (function-backed actions stay fast), is tunable via `OsdkProvider`'s `devMode={{ actionDelayMs }}` prop and the `createObservableClient` `devMode.actionDelayMs` option (0 disables), and logs a one-time message explaining it.
