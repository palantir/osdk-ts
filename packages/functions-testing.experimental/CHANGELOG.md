# @osdk/functions-testing.experimental

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
