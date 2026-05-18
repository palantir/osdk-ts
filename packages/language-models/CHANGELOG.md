# @osdk/language-models

## 0.6.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

### Patch Changes

- Updated dependencies [56c5630]
- Updated dependencies [17d7ba2]
  - @osdk/client@2.16.0

## 0.5.0

### Minor Changes

- d9c891e: Add getGoogleBaseUrl utility for Google's model provider SDK

### Patch Changes

- Updated dependencies [f12977d]
- Updated dependencies [eb36e21]
- Updated dependencies [d892397]
- Updated dependencies [c5a6047]
- Updated dependencies [45be476]
- Updated dependencies [20e9678]
  - @osdk/client@2.14.0

## 0.4.0

### Minor Changes

- df1a4f8: Build Anthropic and OpenAI proxy URLs via the URL constructor so they work correctly regardless of whether `client.baseUrl` carries a trailing slash or a path prefix.

### Patch Changes

- Updated dependencies [19b7913]
- Updated dependencies [01fbb74]
- Updated dependencies [df1a4f8]
- Updated dependencies [46a00bc]
- Updated dependencies [267f324]
  - @osdk/client@2.12.0

## 0.3.0

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

## 0.2.0

### Minor Changes

- 9c0ff4e: Add @osdk/language-models package with utilities for calling language models through the Foundry proxy endpoint

### Patch Changes

- Updated dependencies [322c5bc]
- Updated dependencies [c40444b]
- Updated dependencies [09e5659]
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
- Updated dependencies [d1ad4d1]
- Updated dependencies [0d174a2]
- Updated dependencies [d284bf2]
- Updated dependencies [4ef6adc]
- Updated dependencies [2ebe62c]
- Updated dependencies [60b5ffb]
- Updated dependencies [abb0e0f]
- Updated dependencies [8c30908]
- Updated dependencies [4cd7389]
- Updated dependencies [92e7297]
- Updated dependencies [35f2f1a]
- Updated dependencies [c9d954d]
- Updated dependencies [044eb80]
- Updated dependencies [9d234b9]
- Updated dependencies [f5f95e2]
- Updated dependencies [46f0a47]
- Updated dependencies [4470c0d]
- Updated dependencies [d80c234]
- Updated dependencies [61e33ab]
- Updated dependencies [71e28ef]
- Updated dependencies [5848e3c]
  - @osdk/client@2.8.0

## 0.2.0-beta.0

### Minor Changes

- 9c0ff4e: Add @osdk/language-models package with utilities for calling language models through the Foundry proxy endpoint

### Patch Changes

- Updated dependencies [e64bf0b]
- Updated dependencies [baba327]
- Updated dependencies [d1ad4d1]
- Updated dependencies [35f2f1a]
- Updated dependencies [71e28ef]
  - @osdk/client@2.8.0-beta.14
