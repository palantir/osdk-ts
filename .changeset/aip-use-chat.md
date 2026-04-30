---
"@osdk/aip-core": minor
"@osdk/react": minor
---

Add `streamText` and `LmsChatTransport` to `@osdk/aip-core` and `useChat` to `@osdk/react/experimental/aip` — the AIP SDK's streaming chat primitives, backed by the Foundry Language Model Service's OpenAI-compatible proxy. The hook returns `messages`, `status`, `sendMessage`, `regenerate`, `stop`, `clearError`, and accepts a `transport` override. v0 is text-only — tool round-trips, multi-step loops, and stream resume are deferred.
