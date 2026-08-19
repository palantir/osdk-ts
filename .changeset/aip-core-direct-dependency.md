---
"@osdk/react-components": patch
"@osdk/aip-core": patch
"@osdk/react": patch
---

`@osdk/aip-core` is now a direct dependency of `@osdk/react` and `@osdk/react-components` instead of an optional peer dependency, so consumers of `AipAgentChat` and `useChat` no longer have to install it themselves. For the same reason, `@osdk/aip-core` now depends on `@osdk/language-models` directly rather than declaring it as a peer.
