---
"@osdk/aip-core": minor
---

Add `@osdk/aip-core` package with `generateText` (v0) — the AIP SDK's non-streaming chat completion helper, routing through the Foundry Language Model Service's OpenAI-compatible proxy. Construct a model handle via `foundryModel({ client, model })`. v0 is single-step; multi-step tool loops, streaming, image/file content, and Zod tool schemas are deferred.
