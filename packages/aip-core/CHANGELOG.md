# @osdk/aip-core

## 0.2.0

### Minor Changes

- 86cc68c: Add AI SDK custom provider under `@osdk/aip-core/ai-sdk` implementing LanguageModelV3 with `doGenerate` and `doStream`, enabling usage with the `ai` package's `generateText` and `streamText` functions.
- f747fa3: Add `@osdk/aip-core` — the AIP SDK's chat completion primitives, backed by the Foundry Language Model Service's OpenAI-compatible proxy. Construct a model via `foundryModel({ client, model })` and call `generateText` for non-streaming completions or `streamText` for streaming. `LmsChatTransport` plugs into UI hooks; `useChat` is exposed from `@osdk/react/experimental/aip` and returns `messages`, `status`, `sendMessage`, `regenerate`, `stop`, `clearError`, and accepts a `transport` override. v0 is text-only and single-step — tool round-trips, multi-step loops, image/file content, Zod tool schemas, and stream resume are deferred.

### Patch Changes

- Updated dependencies [d9c891e]
- Updated dependencies [f12977d]
- Updated dependencies [eb36e21]
- Updated dependencies [d892397]
- Updated dependencies [c5a6047]
- Updated dependencies [45be476]
- Updated dependencies [20e9678]
  - @osdk/language-models@0.5.0
  - @osdk/client@2.14.0
