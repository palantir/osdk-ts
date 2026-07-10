# @osdk/aip-core

## 0.8.0

### Minor Changes

- 566ecd3: Add the `u` (unicode) flag to regular expressions to satisfy the require-unicode-regexp lint rule

### Patch Changes

- Updated dependencies [3c48f5a]
- Updated dependencies [566ecd3]
  - @osdk/client@2.43.0

## 0.7.0

### Minor Changes

- 6010d45: Migrate @osdk/aip-core, @osdk/foundry-config-json, @osdk/seed-compiler, @osdk/seed-helpers, @osdk/oauth, @osdk/faux, and @osdk/osdk-docs-context to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (eleventh increment of the repo-wide oxc migration; the standard libraries). Each package is reformatted with oxfmt, with its newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving.

### Patch Changes

- Updated dependencies [0021ee4]
  - @osdk/client@2.42.0

## 0.6.0

### Minor Changes

- afc63a7: Restore the AIP chat entry points (`@osdk/react/experimental/aip` and `@osdk/react-components/experimental/aip-agent-chat`) and publish `@osdk/aip-core` so the optional peer dependency resolves from the registry.

### Patch Changes

- Updated dependencies [9b150d7]
- Updated dependencies [15a35f2]
  - @osdk/client@2.41.0

## 0.5.0

### Minor Changes

- 86f6b19: Widen the `@osdk/language-models` peer dependency range to `>=0.6.0 <1.0.0` so that minor (0.x) bumps of `@osdk/language-models` no longer force a major version bump on `@osdk/aip-core`.

### Patch Changes

- Updated dependencies [57cbc6d]
  - @osdk/client@2.31.0

## 0.4.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

### Patch Changes

- Updated dependencies [56c5630]
- Updated dependencies [17d7ba2]
  - @osdk/client@2.16.0
  - @osdk/language-models@0.6.0

## 0.3.0

### Minor Changes

- 72fcb52: mark `@osdk/aip-core` as private to unblock the release pipeline; the package isn't ready to ship to npm yet

### Patch Changes

- Updated dependencies [203331e]
  - @osdk/client@2.15.0

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
