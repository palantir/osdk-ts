# @osdkkit/react

## 0.9.0-beta.10

### Minor Changes

- db28747: rdp typing improvements

## 0.9.0-beta.9

### Minor Changes

- 43d342e: Fix fetchMore in useObjectSet and useLinks
- ecd18e2: fix pivotTo with where usage

### Patch Changes

- Updated dependencies [24730c7]
- Updated dependencies [ecd18e2]
  - @osdk/client@2.7.0-beta.14
  - @osdk/api@2.7.0-beta.14

## 0.9.0-beta.8

### Minor Changes

- 74e3ba7: Preserve aggregate option literal types in useOsdkAggregation using const type parameter

### Patch Changes

- Updated dependencies [3fc5fe6]
- Updated dependencies [bb9d25c]
  - @osdk/client@2.7.0-beta.12
  - @osdk/api@2.7.0-beta.12

## 0.9.0-beta.7

### Minor Changes

- acf6331: Include AGENTS.md and docs directory in published package for improved AI assistant support
- 6cfe14a: add new useOsdkFunction hook and supporting client infrastructure
- 38d5958: fix order by via key stabilization
- 56ba08f: support interfaces for osdk react hooks

### Patch Changes

- Updated dependencies [6cfe14a]
- Updated dependencies [ec6ad57]
- Updated dependencies [38d5958]
- Updated dependencies [d5cfc38]
  - @osdk/client@2.7.0-beta.11
  - @osdk/api@2.7.0-beta.11

## 0.9.0-beta.6

### Minor Changes

- ba3159c: improve loading logic to make loading state consistent / reduce flashing
- 0395d4b: Pins Foundry core and admin packages to monorepo version

### Patch Changes

- Updated dependencies [6b27d8a]
  - @osdk/client@2.7.0-beta.9
  - @osdk/api@2.7.0-beta.9

## 0.9.0-beta.5

### Minor Changes

- adca853: fix fetchMore behavior

### Patch Changes

- Updated dependencies [adca853]
- Updated dependencies [0b0be9f]
  - @osdk/client@2.7.0-beta.7
  - @osdk/api@2.7.0-beta.7

## 0.9.0-beta.4

### Minor Changes

- 0b2cd91: fix SimplePropertyDef issue, wire RDPs through, update names

### Patch Changes

- Updated dependencies [c9ca08d]
- Updated dependencies [c332598]
- Updated dependencies [0b2cd91]
  - @osdk/api@2.7.0-beta.6
  - @osdk/client@2.7.0-beta.6

## 0.9.0-beta.3

### Minor Changes

- a23784c: wire action edit response types through for useOsdkAction

### Patch Changes

- Updated dependencies [448763f]
- Updated dependencies [a23784c]
- Updated dependencies [f0a57a5]
  - @osdk/api@2.7.0-beta.3
  - @osdk/client@2.7.0-beta.3

## 0.9.0-beta.2

### Minor Changes

- ddef59f: update docs

### Patch Changes

- Updated dependencies [03db734]
- Updated dependencies [c8da6b7]
  - @osdk/client@2.7.0-beta.2
  - @osdk/api@2.7.0-beta.2

## 0.8.0-beta.5

### Minor Changes

- 4b13323: update OSDK toolkit docs

### Patch Changes

- Updated dependencies [84f0eef]
- Updated dependencies [486ef7e]
- Updated dependencies [ea077c6]
  - @osdk/client@2.6.0-beta.13
  - @osdk/api@2.6.0-beta.13

## 0.8.0-beta.4

### Minor Changes

- 9961f06: fix order by via key stabilization

### Patch Changes

- Updated dependencies [9961f06]
  - @osdk/client@2.6.0-beta.12
  - @osdk/api@2.6.0-beta.12

## 0.8.0-beta.3

### Minor Changes

- c5a3815: Add new auto fetch more behavior to useOsdkObjects

### Patch Changes

- Updated dependencies [c5a3815]
  - @osdk/client@2.6.0-beta.11
  - @osdk/api@2.6.0-beta.11

## 0.8.0-beta.2

### Minor Changes

- e7bf02a: Add RDP support to React toolkit

### Patch Changes

- Updated dependencies [61eb5b0]
- Updated dependencies [e7bf02a]
  - @osdk/client@2.6.0-beta.4
  - @osdk/api@2.6.0-beta.4

## 0.7.0

### Patch Changes

- 322c5bc: Simulated release
- 2348ddc: Make useOsdkAction validate less restrictive
- 46ae415: improve useOsdkObject, useOsdkObjects error handling
- 7b97128: add useObjectSet hook
- ccc85a3: Export useOsdkMetadata hook experimentally

## 0.7.0-beta.5

### Minor Changes

- 7b97128: add useObjectSet hook

### Patch Changes

- Updated dependencies [7b97128]
  - @osdk/client@2.5.0-beta.11
  - @osdk/api@2.5.0-beta.11

## 0.7.0-beta.4

### Minor Changes

- 46ae415: improve useOsdkObject, useOsdkObjects error handling

### Patch Changes

- Updated dependencies [ab29baa]
  - @osdk/client@2.5.0-beta.7
  - @osdk/api@2.5.0-beta.7

## 0.7.0-beta.3

### Minor Changes

- ccc85a3: Export useOsdkMetadata hook experimentally

### Patch Changes

- Updated dependencies [3d7461d]
- Updated dependencies [052a96b]
  - @osdk/client@2.5.0-beta.5
  - @osdk/api@2.5.0-beta.5

## 0.7.0-beta.2

### Minor Changes

- 2348ddc: Make useOsdkAction validate less restrictive

### Patch Changes

- Updated dependencies [b05075d]
- Updated dependencies [7160276]
- Updated dependencies [7cdab1d]
- Updated dependencies [b9e9a88]
- Updated dependencies [76905f5]
- Updated dependencies [48d52b7]
  - @osdk/client@2.5.0-beta.2
  - @osdk/api@2.5.0-beta.2

## 0.6.0-beta.3

### Minor Changes

- 47f1bf1: Add backward compatibility to OsdkProvider2 by also providing OsdkContext

  OsdkProvider2 now provides both OsdkContext2 and the original OsdkContext, enabling existing hooks like useOsdkClient and useOsdkMetadata to work with OsdkProvider2. This allows OsdkProvider2 to serve as a complete replacement for OsdkProvider while maintaining backward compatibility.

### Patch Changes

- @osdk/client@2.4.0-beta.4
- @osdk/api@2.4.0-beta.4

## 0.6.0-beta.2

### Minor Changes

- 37c7c0b: Add validateAction support to useOsdkAction hook

  The `useOsdkAction` hook in `@osdk/react` now provides a `validateAction` function that allows you to check if an action is valid without executing it. This is useful for providing real-time validation feedback to users before they commit to performing an action.

  ### New features:
  - **validateAction**: A new async function that validates action parameters without executing the action
  - **isValidating**: A boolean state that indicates when validation is in progress
  - **validationResult**: Contains the validation response from the server, including whether the action is valid and any validation errors

  ### Example usage:

  ```tsx
  const { applyAction, validateAction, isValidating, validationResult } =
    useOsdkAction(myAction);

  // Validate without executing
  await validateAction({ param1: "value" });

  // Check validation result
  if (validationResult?.result === "VALID") {
    console.log("Action is valid!");
  } else {
    console.log("Validation failed:", validationResult);
  }
  ```

  ### Implementation details:
  - Multiple validation calls can be made - new calls automatically cancel previous pending validations
  - Validation and action execution are mutually exclusive - you cannot validate while an action is being applied and vice versa
  - The underlying `ObservableClient` in `@osdk/client` has been extended with a `validateAction` method to support this functionality

### Patch Changes

- Updated dependencies [29d2ada]
- Updated dependencies [8c95154]
- Updated dependencies [c32dcf2]
- Updated dependencies [37c7c0b]
  - @osdk/api@2.4.0-beta.2
  - @osdk/client@2.4.0-beta.2

## 0.5.0-beta.4

### Minor Changes

- f8db93d: improve media upload (beta)

### Patch Changes

- Updated dependencies [2a23cca]
- Updated dependencies [f8db93d]
  - @osdk/client@2.3.0-beta.7
  - @osdk/api@2.3.0-beta.7

## 0.5.0-beta.3

### Minor Changes

- cd911a6: applyAction can now take a batch

### Patch Changes

- Updated dependencies [9839eab]
- Updated dependencies [cd911a6]
- Updated dependencies [2c800e5]
- Updated dependencies [cd911a6]
  - @osdk/client@2.3.0-beta.6
  - @osdk/api@2.3.0-beta.6

## 0.5.0-beta.2

### Minor Changes

- 595a81c: Remove dangling comma in root render function

### Patch Changes

- @osdk/api@2.3.0-beta.2
- @osdk/client@2.3.0-beta.2

## 0.4.0

### Patch Changes

- 322c5bc: Simulated release
- a1f5bdc: Adds react 19 as valid peer deps
- 2f6206c: Improvements to @osdk/react
- 81c0d8c: ObservableClient now queues up object loads for bulk processing
- 2517750: Errors should now propagate via useOsdkObject and useOsdkObjects
- fe0cc43: Experimental react changes
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [b61e9f5]
- Updated dependencies [c6bee50]
- Updated dependencies [7416ce4]
- Updated dependencies [1ba3871]
- Updated dependencies [7170fd1]
- Updated dependencies [12843cb]
- Updated dependencies [18ba34f]
- Updated dependencies [6abf078]
- Updated dependencies [f82767c]
- Updated dependencies [cdd3154]
- Updated dependencies [56aa502]
- Updated dependencies [0e874b1]
- Updated dependencies [abe4897]
- Updated dependencies [63b2e63]
- Updated dependencies [cddfbf9]
- Updated dependencies [5a12181]
- Updated dependencies [2ce3659]
- Updated dependencies [7416ce4]
- Updated dependencies [23ea0e4]
- Updated dependencies [26c2d95]
- Updated dependencies [430dee3]
- Updated dependencies [397f906]
- Updated dependencies [488b51c]
- Updated dependencies [71462e9]
- Updated dependencies [fccd9ac]
- Updated dependencies [5665b18]
- Updated dependencies [46cede4]
- Updated dependencies [761e69d]
- Updated dependencies [889e84b]
- Updated dependencies [a6e5f89]
- Updated dependencies [62e5965]
- Updated dependencies [ed69666]
- Updated dependencies [c92fe73]
- Updated dependencies [2517750]
- Updated dependencies [4183a55]
- Updated dependencies [1e16dcb]
- Updated dependencies [70b4464]
- Updated dependencies [2f6206c]
- Updated dependencies [81c0d8c]
- Updated dependencies [81c0d8c]
- Updated dependencies [791e655]
- Updated dependencies [317b555]
- Updated dependencies [879b6c3]
- Updated dependencies [63b2e63]
- Updated dependencies [2517750]
- Updated dependencies [1e16dcb]
- Updated dependencies [f4370e3]
- Updated dependencies [ea4e4b1]
- Updated dependencies [a146ce4]
- Updated dependencies [cc380b5]
- Updated dependencies [3d0ab11]
- Updated dependencies [e873024]
- Updated dependencies [88591f7]
- Updated dependencies [751e5b3]
- Updated dependencies [805df40]
- Updated dependencies [fe0cc43]
- Updated dependencies [2517750]
- Updated dependencies [5467a0f]
- Updated dependencies [2517750]
- Updated dependencies [63b2e63]
  - @osdk/api@2.2.0
  - @osdk/client@2.2.0

## 0.4.0-beta.6

### Minor Changes

- a1f5bdc: Adds react 19 as valid peer deps

### Patch Changes

- Updated dependencies [4183a55]
  - @osdk/client@2.2.0-beta.23
  - @osdk/api@2.2.0-beta.23

## 0.4.0-beta.5

### Minor Changes

- 81c0d8c: ObservableClient now queues up object loads for bulk processing

### Patch Changes

- Updated dependencies [23ea0e4]
- Updated dependencies [46cede4]
- Updated dependencies [81c0d8c]
- Updated dependencies [81c0d8c]
  - @osdk/api@2.2.0-beta.10
  - @osdk/client@2.2.0-beta.10

## 0.4.0-beta.4

### Minor Changes

- 2517750: Errors should now propagate via useOsdkObject and useOsdkObjects

### Patch Changes

- Updated dependencies [12843cb]
- Updated dependencies [f82767c]
- Updated dependencies [2517750]
- Updated dependencies [2517750]
- Updated dependencies [2517750]
- Updated dependencies [2517750]
  - @osdk/client@2.2.0-beta.9
  - @osdk/api@2.2.0-beta.9

## 0.4.0-beta.3

### Minor Changes

- 2f6206c: Improvements to @osdk/react

### Patch Changes

- Updated dependencies [62e5965]
- Updated dependencies [2f6206c]
  - @osdk/client@2.2.0-beta.5
  - @osdk/api@2.2.0-beta.5

## 0.4.0-beta.2

### Minor Changes

- fe0cc43: Experimental react changes

### Patch Changes

- Updated dependencies [fe0cc43]
  - @osdk/client@2.2.0-beta.4
  - @osdk/api@2.2.0-beta.4

## 0.3.0

### Minor Changes

- 9d35a1f: Remove unused imports
- c691c8b: Package now has experimental support for commonjs
- 287de1d: Adjusts dependencies on @osdk/client and @osdk/api to work with prerelease packages
- c9da74c: Improves code quality by fixing linting errors
- 66a8ee4: Adding support for react caching work.

### Patch Changes

- Updated dependencies [966d408]
- Updated dependencies [b773513]
- Updated dependencies [cddc196]
- Updated dependencies [d794c19]
- Updated dependencies [05febf4]
- Updated dependencies [55c05f2]
- Updated dependencies [a06ec35]
- Updated dependencies [0dc40b0]
- Updated dependencies [3703d81]
- Updated dependencies [6f50516]
- Updated dependencies [25fd9f0]
- Updated dependencies [11a05cc]
- Updated dependencies [7865cb6]
- Updated dependencies [e6fbd94]
- Updated dependencies [9c4efe6]
- Updated dependencies [0a7c747]
- Updated dependencies [3ea2e79]
- Updated dependencies [1812118]
- Updated dependencies [d927a1d]
- Updated dependencies [bc1761c]
- Updated dependencies [656f975]
- Updated dependencies [f1145ff]
- Updated dependencies [1c59d93]
- Updated dependencies [f446d0c]
- Updated dependencies [c80ca45]
- Updated dependencies [bb8b219]
- Updated dependencies [44e62f6]
- Updated dependencies [03f95eb]
- Updated dependencies [91cfa3a]
- Updated dependencies [94463b6]
- Updated dependencies [14624f7]
- Updated dependencies [1a89f23]
- Updated dependencies [9d35a1f]
- Updated dependencies [c691c8b]
- Updated dependencies [749cf69]
- Updated dependencies [f03e39f]
- Updated dependencies [d464009]
- Updated dependencies [11088aa]
- Updated dependencies [72c1905]
- Updated dependencies [720218d]
- Updated dependencies [9298f75]
- Updated dependencies [eb27b54]
- Updated dependencies [7a95618]
- Updated dependencies [f34b3d4]
- Updated dependencies [d88fdb9]
- Updated dependencies [8eb2378]
- Updated dependencies [acbfab9]
- Updated dependencies [c9da74c]
- Updated dependencies [27f0f77]
- Updated dependencies [015279b]
- Updated dependencies [62c1d63]
- Updated dependencies [3c9ac22]
- Updated dependencies [1591f04]
- Updated dependencies [91cfa3a]
- Updated dependencies [03e1941]
- Updated dependencies [e86e91d]
- Updated dependencies [abfe4b3]
- Updated dependencies [b79becf]
- Updated dependencies [27866a8]
- Updated dependencies [0cd1603]
- Updated dependencies [a7a4aef]
- Updated dependencies [e5fe7c0]
- Updated dependencies [1b2e8c9]
- Updated dependencies [9f3807c]
- Updated dependencies [d12c92b]
- Updated dependencies [0c56d21]
- Updated dependencies [e548b9b]
- Updated dependencies [6671a39]
- Updated dependencies [5e78575]
- Updated dependencies [ee6224b]
- Updated dependencies [1dc0228]
- Updated dependencies [6c60414]
- Updated dependencies [5fe2c8d]
- Updated dependencies [fa02ebf]
- Updated dependencies [9af346e]
- Updated dependencies [d3b3f35]
- Updated dependencies [c682504]
- Updated dependencies [785f663]
- Updated dependencies [9018dc2]
- Updated dependencies [a6c320d]
- Updated dependencies [8026baf]
- Updated dependencies [6b6c8a1]
- Updated dependencies [c537e2d]
- Updated dependencies [3fc2ee6]
- Updated dependencies [0d8ac3b]
- Updated dependencies [73fa373]
- Updated dependencies [8e6a5f4]
- Updated dependencies [09eaf24]
- Updated dependencies [71dfb4c]
- Updated dependencies [2d5e648]
- Updated dependencies [31e7d70]
- Updated dependencies [c4f88a8]
- Updated dependencies [d665147]
- Updated dependencies [f19da8e]
  - @osdk/client@2.1.0
  - @osdk/api@2.1.0

## 0.3.0-beta.3

### Minor Changes

- c691c8b: Package now has experimental support for commonjs

### Patch Changes

- Updated dependencies [03f95eb]
- Updated dependencies [c691c8b]
- Updated dependencies [3c9ac22]
  - @osdk/client@2.1.0-beta.24
  - @osdk/api@2.1.0-beta.24

## 0.3.0-beta.2

### Minor Changes

- c9da74c: Improves code quality by fixing linting errors

### Patch Changes

- Updated dependencies [c9da74c]
- Updated dependencies [73fa373]
  - @osdk/client@2.1.0-beta.22
  - @osdk/api@2.1.0-beta.22

## 0.3.0-beta.1

### Minor Changes

- 9d35a1f: Remove unused imports

### Patch Changes

- Updated dependencies [b773513]
- Updated dependencies [9d35a1f]
- Updated dependencies [abfe4b3]
- Updated dependencies [c537e2d]
  - @osdk/client@2.1.0-beta.20
  - @osdk/api@2.1.0-beta.20

## 0.3.0-beta.0

### Minor Changes

- 287de1d: Adjusts dependencies on @osdk/client and @osdk/api to work with prerelease packages

### Patch Changes

- @osdk/client@2.1.0-beta.17
- @osdk/api@2.1.0-beta.17

## 0.2.1

### Patch Changes

- 0fec606: Code properly compiles under isolatedDeclarations

## 0.2.0

### Minor Changes

- 03be047: Introduce useOsdkMetadata()

## 0.1.0

### Minor Changes

- 6a6444f: Removes false browser entry from exports
