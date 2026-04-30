---
"@osdk/aip-core": minor
"@osdk/react": minor
---

Add `@osdk/aip-core` — the AIP SDK's chat completion primitives, backed by the Foundry Language Model Service's OpenAI-compatible proxy. Construct a model via `foundryModel({ client, model })` and call `generateText` for non-streaming completions or `streamText` for streaming. `LmsChatTransport` plugs into UI hooks; `useChat` is exposed from `@osdk/react/experimental/aip` and returns `messages`, `status`, `sendMessage`, `regenerate`, `stop`, `clearError`, and accepts a `transport` override. v0 is text-only and single-step — tool round-trips, multi-step loops, image/file content, Zod tool schemas, and stream resume are deferred.
