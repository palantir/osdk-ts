# @osdk/shared.test

## 2.1.0-beta.27

### Patch Changes

- @osdk/api@2.1.0-beta.27

## 2.1.0-beta.26

### Minor Changes

- 9c4efe6: Support uploading media parameters through actions

### Patch Changes

- Updated dependencies [7865cb6]
- Updated dependencies [9c4efe6]
- Updated dependencies [f19da8e]
  - @osdk/api@2.1.0-beta.26

## 2.1.0-beta.25

### Minor Changes

- c80ca45: Add ability to create interfaces through actions now.

### Patch Changes

- Updated dependencies [c80ca45]
  - @osdk/api@2.1.0-beta.25

## 2.1.0-beta.24

### Minor Changes

- 03f95eb: Add support for interface params in actions.

### Patch Changes

- Updated dependencies [03f95eb]
- Updated dependencies [c691c8b]
- Updated dependencies [3c9ac22]
  - @osdk/api@2.1.0-beta.24

## 2.1.0-beta.23

### Minor Changes

- d794c19: Adding support for struct action params.
- 62c1d63: Add support for reading media reference property in OSDK.
- d665147: Update platform sdk deps

### Patch Changes

- Updated dependencies [d794c19]
- Updated dependencies [62c1d63]
  - @osdk/api@2.1.0-beta.23

## 2.1.0-beta.22

### Minor Changes

- c9da74c: Improves code quality by fixing linting errors

### Patch Changes

- Updated dependencies [73fa373]
  - @osdk/api@2.1.0-beta.22

## 2.1.0-beta.21

### Minor Changes

- f34b3d4: Add ability to fetch by rid, experimentally.

### Patch Changes

- Updated dependencies [3ea2e79]
- Updated dependencies [656f975]
- Updated dependencies [f34b3d4]
  - @osdk/api@2.1.0-beta.21

## 2.1.0-beta.20

### Minor Changes

- 9d35a1f: Remove unused imports
- abfe4b3: Add support for reading struct properties.

### Patch Changes

- Updated dependencies [9d35a1f]
- Updated dependencies [abfe4b3]
- Updated dependencies [c537e2d]
  - @osdk/api@2.1.0-beta.20

## 2.1.0-beta.19

### Patch Changes

- Updated dependencies [cddc196]
  - @osdk/api@2.1.0-beta.19

## 2.1.0-beta.18

### Patch Changes

- @osdk/api@2.1.0-beta.18

## 2.1.0-beta.17

### Patch Changes

- @osdk/api@2.1.0-beta.17

## 2.1.0-beta.16

### Patch Changes

- Updated dependencies [e5fe7c0]
  - @osdk/api@2.1.0-beta.16

## 2.1.0-beta.15

### Patch Changes

- @osdk/api@2.1.0-beta.15

## 2.1.0-beta.14

### Minor Changes

- 91cfa3a: Fixing url parsing for client.
- 91cfa3a: Fixing URL parsing for custom entry points.
- 6b6c8a1: Updates gateway endpoints and changes fetchContents for attachments to return a response

### Patch Changes

- Updated dependencies [0c56d21]
- Updated dependencies [6b6c8a1]
  - @osdk/api@2.1.0-beta.14

## 2.1.0-beta.13

### Patch Changes

- @osdk/api@2.1.0-beta.13

## 2.1.0-beta.12

### Patch Changes

- @osdk/api@2.1.0-beta.12

## 2.1.0-beta.11

### Minor Changes

- bc1761c: Update platform API dependencies.
- 9298f75: Using new interface APIs for backend.

### Patch Changes

- Updated dependencies [bc1761c]
- Updated dependencies [9298f75]
  - @osdk/api@2.1.0-beta.11

## 2.1.0-beta.10

### Patch Changes

- Updated dependencies [11a05cc]
- Updated dependencies [11088aa]
  - @osdk/api@2.1.0-beta.10

## 2.1.0-beta.9

### Minor Changes

- acbfab9: Fixes where clauses for interfaces with no properties.

### Patch Changes

- Updated dependencies [acbfab9]
  - @osdk/api@2.1.0-beta.9

## 2.1.0-beta.8

### Patch Changes

- Updated dependencies [9f3807c]
  - @osdk/api@2.1.0-beta.8

## 2.1.0-beta.7

### Minor Changes

- 9018dc2: Updating platform api dependencies.

### Patch Changes

- Updated dependencies [27866a8]
- Updated dependencies [31e7d70]
  - @osdk/api@2.1.0-beta.7

## 2.1.0-beta.6

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.

### Patch Changes

- Updated dependencies [25fd9f0]
- Updated dependencies [1a89f23]
- Updated dependencies [1b2e8c9]
  - @osdk/api@2.1.0-beta.6

## 2.1.0-beta.5

### Patch Changes

- @osdk/api@2.1.0-beta.5

## 2.1.0-beta.4

### Patch Changes

- Updated dependencies [0dc40b0]
- Updated dependencies [1dc0228]
- Updated dependencies [d3b3f35]
  - @osdk/api@2.1.0-beta.4

## 2.1.0-beta.3

### Minor Changes

- 6f50516: Fix bug where object return types in a query were not properly mapped when wrapped in a struct.
- 09eaf24: Update to latest platform sdks

### Patch Changes

- Updated dependencies [05febf4]
- Updated dependencies [b79becf]
  - @osdk/api@2.1.0-beta.3

## 2.1.0-beta.2

### Patch Changes

- @osdk/api@2.1.0-beta.2

## 2.1.0-beta.1

### Minor Changes

- 1812118: Add geotime support for OSDK.

### Patch Changes

- Updated dependencies [1812118]
- Updated dependencies [72c1905]
- Updated dependencies [6c60414]
- Updated dependencies [8e6a5f4]
  - @osdk/api@2.1.0-beta.1

## 2.1.0-beta.0

### Minor Changes

- d927a1d: Throws error in createClient when passed an invalid ontology RID
- 5e78575: Fix queries that have response types with nested values, like arrays.
- 9af346e: Fixing proxy handlers.

### Patch Changes

- Updated dependencies [0dc40b0]
- Updated dependencies [03e1941]
- Updated dependencies [e548b9b]
  - @osdk/api@2.1.0-beta.0

## 2.0.0

### Major Changes

- 1252d94: ESM Only

### Minor Changes

- dc25fb4: Further simplify types
- e6ade8b: Adds fetchMetadata method to client
- dc25fb4: Renamed definition types to metadata
- c94e4dd: Internal file refactor for query endpoints
- 01724ae: Remove unnecessary dependency
- dc25fb4: Modified return type of fetchMetadata to return Object/Interface Definitions
- 5d6d5ab: Internally refactored to support new API versions
- dc25fb4: Simplified types
- dc25fb4: Renamed Min_Definition to \_Definition
- d4d6605: Audited and cleaned up deps
- 64818dc: Drop support for internal gateway package

### Patch Changes

- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [3affe49]
- Updated dependencies [b946e00]
- Updated dependencies [a2c7b37]
- Updated dependencies [0ea1a17]
- Updated dependencies [dc25fb4]
- Updated dependencies [9b0617d]
- Updated dependencies [1770490]
- Updated dependencies [94105a5]
- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [a2c7b37]
- Updated dependencies [dc25fb4]
- Updated dependencies [1252d94]
- Updated dependencies [e6ade8b]
- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [a2c7b37]
- Updated dependencies [795777a]
- Updated dependencies [fe9547e]
- Updated dependencies [95f9247]
- Updated dependencies [5d6d5ab]
- Updated dependencies [d2f75f9]
- Updated dependencies [b7cd0a1]
- Updated dependencies [512ee35]
- Updated dependencies [e86c505]
- Updated dependencies [dc25fb4]
- Updated dependencies [0ce2858]
- Updated dependencies [dc25fb4]
- Updated dependencies [5d6d5ab]
- Updated dependencies [7c2db00]
- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
- Updated dependencies [fc28eae]
- Updated dependencies [56df85a]
- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [5d6d5ab]
- Updated dependencies [a9923f3]
- Updated dependencies [1f633f7]
- Updated dependencies [d4d6605]
- Updated dependencies [64818dc]
  - @osdk/internal.foundry.ontologiesv2@0.2.0
  - @osdk/internal.foundry.ontologies@0.2.0
  - @osdk/internal.foundry.core@0.2.0
  - @osdk/internal.foundry.geo@0.1.0
  - @osdk/api@2.0.0

## 2.0.0-beta.12

### Minor Changes

- dc25fb4: Further simplify types

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
  - @osdk/api@2.0.0-beta.16
  - @osdk/internal.foundry.core@0.2.0-beta.10
  - @osdk/internal.foundry.geo@0.1.0-beta.3
  - @osdk/internal.foundry.ontologies@0.2.0-beta.10
  - @osdk/internal.foundry.ontologiesv2@0.2.0-beta.10

## 2.0.0-beta.11

### Minor Changes

- dc25fb4: Simplified types

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/api@2.0.0-beta.15

## 2.0.0-beta.10

### Minor Changes

- d4d6605: Audited and cleaned up deps

### Patch Changes

- Updated dependencies [5d6d5ab]
- Updated dependencies [a2c7b37]
- Updated dependencies [fe9547e]
- Updated dependencies [1f633f7]
- Updated dependencies [d4d6605]
  - @osdk/internal.foundry.ontologiesv2@0.2.0-beta.9
  - @osdk/internal.foundry.ontologies@0.2.0-beta.9
  - @osdk/internal.foundry.core@0.2.0-beta.9
  - @osdk/internal.foundry.geo@0.1.0-beta.2
  - @osdk/api@2.0.0-beta.14

## 2.0.0-beta.9

### Minor Changes

- 1488144: Renamed definition types to metadata
- c28792e: Modified return type of fetchMetadata to return Object/Interface Definitions
- 6ab5d2e: Renamed Min_Definition to \_Definition

### Patch Changes

- Updated dependencies [1488144]
- Updated dependencies [c28792e]
- Updated dependencies [26ee3bd]
- Updated dependencies [6ab5d2e]
  - @osdk/api@2.0.0-beta.13
  - @osdk/internal.foundry.core@0.2.0-beta.8
  - @osdk/internal.foundry.geo@0.1.0-beta.1
  - @osdk/internal.foundry.ontologies@0.2.0-beta.8
  - @osdk/internal.foundry.ontologiesv2@0.2.0-beta.8

## 2.0.0-beta.8

### Patch Changes

- @osdk/api@2.0.0-beta.12

## 2.0.0-beta.7

### Patch Changes

- @osdk/api@2.0.0-beta.11

## 2.0.0-beta.6

### Major Changes

- 1252d94: ESM Only

### Minor Changes

- e6ade8b: Adds fetchMetadata method to client
- 5d6d5ab: Internally refactored to support new API versions

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
- Updated dependencies [1252d94]
- Updated dependencies [5d6d5ab]
- Updated dependencies [56df85a]
  - @osdk/api@2.0.0-beta.10
  - @osdk/internal.foundry.core@0.2.0-beta.7
  - @osdk/internal.foundry.ontologiesv2@0.2.0-beta.7
  - @osdk/internal.foundry.ontologies@0.2.0-beta.7
  - @osdk/internal.foundry.geo@0.1.0-beta.0

## 1.7.0-beta.5

### Minor Changes

- 01724ae: Remove unnecessary dependency

### Patch Changes

- Updated dependencies [b946e00]
  - @osdk/api@2.0.0-beta.9
  - @osdk/internal.foundry.core@0.2.0-beta.6
  - @osdk/internal.foundry.ontologies@0.2.0-beta.6
  - @osdk/internal.foundry.ontologiesv2@0.2.0-beta.6

## 1.7.0-beta.4

### Minor Changes

- 64818dc: Drop support for internal gateway package

### Patch Changes

- @osdk/api@2.0.0-beta.8
- @osdk/internal.foundry.core@0.2.0-beta.5
- @osdk/internal.foundry.ontologies@0.2.0-beta.5
- @osdk/internal.foundry.ontologiesv2@0.2.0-beta.5

## 1.7.0-beta.3

### Patch Changes

- Updated dependencies [9b0617d]
  - @osdk/api@2.0.0-beta.7

## 1.7.0-beta.2

### Patch Changes

- Updated dependencies [3affe49]
- Updated dependencies [5d6d5ab]
  - @osdk/api@2.0.0-beta.6
  - @osdk/gateway@2.5.0-beta.0

## 1.7.0-beta.1

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/api@1.10.0-beta.1

## 1.7.0-beta.0

### Minor Changes

- c94e4dd: Internal file refactor for query endpoints

### Patch Changes

- Updated dependencies [7c2db00]
  - @osdk/api@1.10.0-beta.0

## 1.6.0

### Minor Changes

- e2ab8db: Fix long aggregations in legacy-client

## 1.6.0-beta.0

### Minor Changes

- e2ab8db: Fix long aggregations in legacy-client

## 1.5.0

### Minor Changes

- 141953f: Expose $title property in OsdkBase
- 034f7ea: Add support for no query time series pulls.
- 388dba9: Change all internal dependencies to be tilde not caret
- 3ec7c38: Add support for queries in 2.0
- bc89b62: Spelling fixes and spell check in CI
- 489d13f: Add support for timeseries in 2.0 syntax.
- 413e511: Added attachment uploading, reading, and metadata fetching support to 2.0.

### Patch Changes

- Updated dependencies [388dba9]
- Updated dependencies [d8edf10]
- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/api@1.9.0
  - @osdk/gateway@2.4.0

## 1.5.0-beta.3

### Minor Changes

- 3ec7c38: Add support for queries in 2.0
- bc89b62: Spelling fixes and spell check in CI

### Patch Changes

- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/api@1.9.0-beta.1
  - @osdk/gateway@2.4.0-beta.0

## 1.5.0-beta.2

### Minor Changes

- 388dba9: Change all internal dependencies to be tilde not caret

### Patch Changes

- Updated dependencies [388dba9]
  - @osdk/api@1.9.0-beta.0

## 1.5.0-beta.1

### Minor Changes

- 141953f: Expose $title property in OsdkBase

## 1.5.0-beta.0

### Minor Changes

- 413e511: Added attachment uploading, reading, and metadata fetching support to 2.0.

## 1.4.0

### Minor Changes

- c9f3214: Adds support for latest api definitions

### Patch Changes

- Updated dependencies [c9f3214]
- Updated dependencies [c9f3214]
  - @osdk/gateway@2.3.0
  - @osdk/api@1.8.0

## 1.3.0

### Minor Changes

- 9906a41: Initial Interfaces Support
- 9906a41: Tweak openapi gen
- 9906a41: Partial interface down selection and conversion to object and back
- 9906a41: Use readonly for arrays in the gateway
- 9906a41: Bump TS and make writing test network mocks easier
- 9906a41: Minor improvements everywhere
- 9906a41: Improves tsconfig
- 9906a41: add asyncIter

### Patch Changes

- @osdk/api@1.7.0

## 1.1.1

### Patch Changes

- e1a94f22: Revert change to how we generate the built package types
- Updated dependencies [e1a94f22]
  - @osdk/gateway@1.1.1
  - @osdk/api@1.1.1
  - @osdk/cli@0.1.1

## 1.1.0

### Minor Changes

- a0d5e431: Update build to ship packages compliant with @arethetypeswrong/cli

### Patch Changes

- Updated dependencies [a0d5e431]
  - @osdk/gateway@1.1.0
  - @osdk/api@1.1.0
  - @osdk/cli@0.1.0

## 1.0.4

### Patch Changes

- Updated dependencies [206c2275]
  - @osdk/cli@0.0.20

## 1.0.3

### Patch Changes

- Updated dependencies [25dd12ae]
  - @osdk/legacy-client@1.0.2
  - @osdk/gateway@1.0.2
  - @osdk/cli@0.0.19

## 1.0.2

### Patch Changes

- @osdk/cli@0.0.18
