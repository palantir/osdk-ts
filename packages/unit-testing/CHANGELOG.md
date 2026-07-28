# @osdk/unit-testing

## 0.20.0

### Minor Changes

- 27d7469: Export `MockClient`, `StubClient`, and `MockOsdkObjectOptions` types from the `@osdk/unit-testing/experimental` entry point so callers can annotate the value returned by `createMockClient` directly instead of `ReturnType<typeof createMockClient>`.

### Patch Changes

- @osdk/api@2.49.0
- @osdk/client@2.49.0

## 0.19.0

### Minor Changes

- 765ae4e: Re-registering a mock client stub with the same pattern now overrides the previous stub (latest registered wins) instead of being shadowed by it.

### Patch Changes

- Updated dependencies [db2bfa2]
- Updated dependencies [cbf692b]
  - @osdk/client@2.45.0
  - @osdk/api@2.45.0

## 0.18.0

### Minor Changes

- 1b33456: Enable the require-await lint rule: drop the redundant `async` keyword from test callbacks that never await, and keep intentionally-async (Promise-returning) functions as-is

### Patch Changes

- Updated dependencies [1b33456]
- Updated dependencies [ffa3daa]
- Updated dependencies [f733ceb]
  - @osdk/functions@1.17.0
  - @osdk/client@2.44.0
  - @osdk/api@2.44.0

## 0.17.0

### Minor Changes

- 566ecd3: Add the `u` (unicode) flag to regular expressions to satisfy the require-unicode-regexp lint rule

### Patch Changes

- Updated dependencies [3c48f5a]
- Updated dependencies [566ecd3]
  - @osdk/functions@1.16.0
  - @osdk/client@2.43.0
  - @osdk/api@2.43.0

## 0.16.0

### Minor Changes

- 830d791: Migrate @osdk/api, @osdk/functions, and @osdk/unit-testing to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (eleventh increment of the repo-wide oxc migration; the check-api core libraries). Each package is reformatted with oxfmt, with its newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving; the public API surface is unchanged.

### Patch Changes

- Updated dependencies [830d791]
- Updated dependencies [0021ee4]
  - @osdk/api@2.42.0
  - @osdk/functions@1.15.0
  - @osdk/client@2.42.0

## 0.15.0

### Minor Changes

- 08e921c: Bump `foundry-platform-typescript` catalog to 2.63.0 and surface the new CBAC/MANDATORY marking subtype on `ObjectMetadata.Property` via a new `typeMetadata` discriminated-union field. For marking properties, `typeMetadata` is `{ type: "marking"; subtype?: "CBAC" | "MANDATORY" }`, letting consumers distinguish classification-based markings from mandatory markings on object property columns. Future per-`type` metadata should be added as additional variants of `typeMetadata` rather than as new top-level optionals on `Property`.

### Patch Changes

- Updated dependencies [08e921c]
- Updated dependencies [4b38963]
- Updated dependencies [9081e32]
  - @osdk/api@2.29.0
  - @osdk/client@2.29.0

## 0.14.0

### Minor Changes

- 2803fd8: Move vitest from dependencies to devDependencies since it is only used in tests, not in the shipped output

### Patch Changes

- Updated dependencies [a5066b5]
- Updated dependencies [3e03544]
- Updated dependencies [13132b8]
  - @osdk/client@2.28.0
  - @osdk/functions@1.12.0
  - @osdk/api@2.28.0

## 0.13.0

### Minor Changes

- 5ff7aa5: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.61.0` to `2.63.0`. The OntologyScenarios endpoints now expose a `preview` query-param slot, so `createScenario` and the `EXPERIMENTAL_ScenarioClient` read methods pass `{ preview: true }` directly instead of relying on a fetch-level URL rewrite.

### Patch Changes

- Updated dependencies [5ff7aa5]
  - @osdk/client@2.27.0
  - @osdk/api@2.27.0

## 0.12.0

### Minor Changes

- 8965bdf: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.

### Patch Changes

- Updated dependencies [8965bdf]
- Updated dependencies [8965bdf]
- Updated dependencies [bd90dba]
- Updated dependencies [643c450]
- Updated dependencies [d0845dd]
  - @osdk/client@2.25.0
  - @osdk/api@2.25.0

## 0.11.0

### Minor Changes

- 60aff19: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.

### Patch Changes

- Updated dependencies [a492285]
- Updated dependencies [60aff19]
- Updated dependencies [35ad6d1]
- Updated dependencies [6923158]
  - @osdk/api@2.24.0
  - @osdk/client@2.24.0

## 0.10.0

### Minor Changes

- 46df2e9: Rename `@osdk/functions-testing.experimental` to `@osdk/unit-testing`.

### Patch Changes

- Updated dependencies [f90a2da]
- Updated dependencies [9eb67e4]
- Updated dependencies [51b3bce]
- Updated dependencies [75f877f]
  - @osdk/client@2.20.0
  - @osdk/api@2.20.0
  - @osdk/functions@1.10.0

## 0.9.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

### Patch Changes

- Updated dependencies [56c5630]
- Updated dependencies [17d7ba2]
  - @osdk/api@2.16.0
  - @osdk/client@2.16.0
  - @osdk/functions@1.9.0

## 0.8.0

### Minor Changes

- d1a7d90: Accessing a link that wasn't configured on a `createMockOsdkObject` mock no longer silently returns `undefined`. The accessor now exists, and its `fetchOne()` rejects / `fetchOneWithErrors()` resolves with a descriptive error naming the link, object type, and primary key.
- 9a06a62: Move user-facing types (`MockClient`, `StubClient`, `StubBuilderFor`, `FetchPageStubBuilder`, `FetchOneStubBuilder`, `AggregateStubBuilder`, `QueryStubBuilder`, `MockOsdkObjectOptions`) to dedicated files under `src/api/`. No public API changes.
- 9a06a62: Fix `StubBuilderFor<T>` so `fetchOneWithErrors` / `fetchPageWithErrors` / `asyncIter` resolve to the correct stub builders instead of falling through to `AggregateStubBuilder`. Allow `Error` as a single-link stub value in `createMockOsdkObject` so link `fetchOne` rejects and `fetchOneWithErrors` returns `{ error }` (previously wrapped the Error in `{ value: ... }`, making `isOk` always true).

### Patch Changes

- Updated dependencies [f12977d]
- Updated dependencies [eb36e21]
- Updated dependencies [d892397]
- Updated dependencies [c5a6047]
- Updated dependencies [45be476]
- Updated dependencies [2c51525]
- Updated dependencies [20e9678]
  - @osdk/client@2.14.0
  - @osdk/functions@1.8.0
  - @osdk/api@2.14.0

## 0.7.0

### Minor Changes

- 9e9d948: `deepEqual` (used to match stub args in `when` / `whenQuery`) now recognizes Vitest/Jest asymmetric matchers (`expect.any(...)`, `expect.anything()`, `expect.stringContaining(...)`, `expect.objectContaining(...)`, etc.). Previously matchers were compared by raw object shape and silently never matched.

### Patch Changes

- Updated dependencies [19b7913]
- Updated dependencies [01fbb74]
- Updated dependencies [91f34a9]
- Updated dependencies [df1a4f8]
- Updated dependencies [46a00bc]
- Updated dependencies [267f324]
  - @osdk/client@2.12.0
  - @osdk/api@2.12.0

## 0.6.0

### Minor Changes

- 8e4472c: Add `thenThrow(error)` to `whenQuery(...)` stub builder. Lets tests explicitly configure a query's `executeFunction` to reject with a specific error, instead of only being able to exercise the implicit "no stub registered" error path.

## 0.5.0

### Minor Changes

- 40fb8c1: Attach a `SharedClientContext` to the mock client so Foundry Platform API helpers (e.g. `Users.getCurrent(client)`) don't crash inside `foundryPlatformFetch` on an undefined `baseUrl` before a request is made. Callers mock the HTTP layer themselves (MSW, `vi.spyOn(globalThis, "fetch")`, etc.).

### Patch Changes

- Updated dependencies [58248f8]
- Updated dependencies [e456da5]
  - @osdk/client@2.11.0
  - @osdk/api@2.11.0

## 0.4.0

### Minor Changes

- 29ab35a: Use workspace:^ for peer dependencies to prevent changesets from propagating major bumps when a peer dep receives a minor version change. The internal codegen (`osdk-unstable-typescript generate --internal`) now emits `workspace:^` for peer deps while keeping `workspace:~` for regular/dev deps.
- f01a8f4: improvements(build): significant reduction in build task graphs

### Patch Changes

- Updated dependencies [29ab35a]
- Updated dependencies [0fb9c8a]
- Updated dependencies [f01a8f4]
- Updated dependencies [f34a1ce]
- Updated dependencies [7e7f70b]
  - @osdk/client@2.10.0
  - @osdk/functions@1.7.0
  - @osdk/api@2.10.0

## 0.3.0

### Minor Changes

- c08d97b: Rework mock client stubbing API: rename whenObjectSet to when, add standalone createMockObjectSet with whenObjectSet for registering stubs on object sets directly, and support ObjectSet as many-link value in createMockOsdkObject

### Patch Changes

- Updated dependencies [f8b9f12]
- Updated dependencies [bcf359f]
- Updated dependencies [0b349bd]
- Updated dependencies [12f9b36]
- Updated dependencies [cbc8e9c]
- Updated dependencies [9171453]
- Updated dependencies [e8d14a0]
- Updated dependencies [51ccca8]
- Updated dependencies [fb85818]
- Updated dependencies [ec06b26]
- Updated dependencies [2394ca7]
  - @osdk/client@2.9.0
  - @osdk/api@2.9.0

## 0.2.0

### Minor Changes

- 0b3ce80: Query Stubbing and Exports
- 0df859a: Read primaryKeyApiName from object type const instead of options, move links into options, and add createMockAttachment helper
- 48e1409: Add basic utils for OSDK Testing
- 35f2f1a: Add Media inputs/outputs for Queries
- 68d0bef: Basic object set mocking

### Patch Changes

- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [776ae8a]
- Updated dependencies [c40444b]
- Updated dependencies [4bb9769]
- Updated dependencies [09e5659]
- Updated dependencies [7538b79]
- Updated dependencies [abb0e0f]
- Updated dependencies [fceb4ce]
- Updated dependencies [520398c]
- Updated dependencies [73e617e]
- Updated dependencies [cbfa135]
- Updated dependencies [c8384de]
- Updated dependencies [f294f5a]
- Updated dependencies [dfc8019]
- Updated dependencies [599426b]
- Updated dependencies [e64bf0b]
- Updated dependencies [27a5902]
- Updated dependencies [0a0d7cb]
- Updated dependencies [f4604c2]
- Updated dependencies [642be5f]
- Updated dependencies [baba327]
- Updated dependencies [8825f8c]
- Updated dependencies [2b01323]
- Updated dependencies [8c60682]
- Updated dependencies [dda14be]
- Updated dependencies [ffc6efe]
- Updated dependencies [2855223]
- Updated dependencies [15e1686]
- Updated dependencies [26cec61]
- Updated dependencies [0df859a]
- Updated dependencies [d1ad4d1]
- Updated dependencies [0d174a2]
- Updated dependencies [d284bf2]
- Updated dependencies [4ef6adc]
- Updated dependencies [2ebe62c]
- Updated dependencies [60b5ffb]
- Updated dependencies [abb0e0f]
- Updated dependencies [8c30908]
- Updated dependencies [4cd7389]
- Updated dependencies [4a856cb]
- Updated dependencies [92e7297]
- Updated dependencies [b68cebd]
- Updated dependencies [35f2f1a]
- Updated dependencies [c9d954d]
- Updated dependencies [34a5ad2]
- Updated dependencies [044eb80]
- Updated dependencies [9d234b9]
- Updated dependencies [f5f95e2]
- Updated dependencies [46f0a47]
- Updated dependencies [4470c0d]
- Updated dependencies [d80c234]
- Updated dependencies [61e33ab]
- Updated dependencies [71e28ef]
- Updated dependencies [5848e3c]
  - @osdk/api@2.8.0
  - @osdk/client@2.8.0
  - @osdk/functions@1.6.0

## 0.2.0-beta.4

### Minor Changes

- 0df859a: Read primaryKeyApiName from object type const instead of options, move links into options, and add createMockAttachment helper

### Patch Changes

- Updated dependencies [0df859a]
  - @osdk/api@2.8.0-beta.25
  - @osdk/client@2.8.0-beta.25

## 0.2.0-beta.3

### Minor Changes

- 35f2f1a: Add Media inputs/outputs for Queries

### Patch Changes

- Updated dependencies [e64bf0b]
- Updated dependencies [baba327]
- Updated dependencies [d1ad4d1]
- Updated dependencies [35f2f1a]
- Updated dependencies [71e28ef]
  - @osdk/client@2.8.0-beta.14
  - @osdk/api@2.8.0-beta.14
  - @osdk/functions@1.6.0-beta.3

## 0.2.0-beta.2

### Minor Changes

- 0b3ce80: Query Stubbing and Exports

## 0.2.0-beta.1

### Minor Changes

- 48e1409: Add basic utils for OSDK Testing

## 0.2.0-beta.0

### Minor Changes

- 68d0bef: Basic object set mocking

### Patch Changes

- Updated dependencies [0a0d7cb]
  - @osdk/functions@1.6.0-beta.2
  - @osdk/api@2.8.0-beta.8
  - @osdk/client@2.8.0-beta.8
