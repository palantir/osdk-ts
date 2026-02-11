# @osdk/client

## 2.8.0-beta.3

### Minor Changes

- 26cec61: Improves invalid where clause undefined key error message
- 0d174a2: useOsdkFunction typing updates

### Patch Changes

- @osdk/api@2.8.0-beta.3
- @osdk/client.unstable@2.8.0-beta.3
- @osdk/generator-converters@2.8.0-beta.3

## 2.8.0-beta.2

### Patch Changes

- Updated dependencies [e462938]
  - @osdk/client.unstable@2.8.0-beta.2
  - @osdk/api@2.8.0-beta.2
  - @osdk/generator-converters@2.8.0-beta.2

## 2.7.0-beta.14

### Minor Changes

- 24730c7: fix rdp pivot behavior
- ecd18e2: fix pivotTo with where usage

### Patch Changes

- @osdk/api@2.7.0-beta.14
- @osdk/client.unstable@2.7.0-beta.14
- @osdk/generator-converters@2.7.0-beta.14

## 2.7.0-beta.13

### Minor Changes

- fb83808: Allow arrays to use all subtype filters

### Patch Changes

- Updated dependencies [fb83808]
  - @osdk/api@2.7.0-beta.13
  - @osdk/client.unstable@2.7.0-beta.13
  - @osdk/generator-converters@2.7.0-beta.13

## 2.7.0-beta.12

### Minor Changes

- 3fc5fe6: fix interface loading
- bb9d25c: Allow requesting rids for OSW updates

### Patch Changes

- Updated dependencies [bb9d25c]
  - @osdk/api@2.7.0-beta.12
  - @osdk/client.unstable@2.7.0-beta.12
  - @osdk/generator-converters@2.7.0-beta.12

## 2.7.0-beta.11

### Minor Changes

- 6cfe14a: add new useOsdkFunction hook and supporting client infrastructure
- ec6ad57: guard against empty ontology edits in actions
- 38d5958: fix order by via key stabilization
- d5cfc38: Add null option to actions to allow clearing data

### Patch Changes

- Updated dependencies [d5cfc38]
  - @osdk/api@2.7.0-beta.11
  - @osdk/client.unstable@2.7.0-beta.11
  - @osdk/generator-converters@2.7.0-beta.11

## 2.7.0-beta.10

### Minor Changes

- db44f6b: Add property security metadata to objects when requested
- 266b901: Fix queries that return arrays of objects.

### Patch Changes

- Updated dependencies [db44f6b]
- Updated dependencies [24a1e29]
  - @osdk/api@2.7.0-beta.10
  - @osdk/client.unstable@2.7.0-beta.10
  - @osdk/generator-converters@2.7.0-beta.10

## 2.7.0-beta.9

### Minor Changes

- 6b27d8a: fix sorting strategy initialization for ListQuery and ObjectSetQuery

### Patch Changes

- Updated dependencies [8381ac2]
- Updated dependencies [c95f3bc]
  - @osdk/client.unstable@2.7.0-beta.9
  - @osdk/api@2.7.0-beta.9
  - @osdk/generator-converters@2.7.0-beta.9

## 2.7.0-beta.8

### Minor Changes

- c6124eb: Add ability to flush edits to transactions

### Patch Changes

- @osdk/api@2.7.0-beta.8
- @osdk/client.unstable@2.7.0-beta.8
- @osdk/generator-converters@2.7.0-beta.8

## 2.7.0-beta.7

### Minor Changes

- adca853: fix fetchMore behavior
- 0b0be9f: fix object spread related bug by using createOsdkObject

### Patch Changes

- @osdk/api@2.7.0-beta.7
- @osdk/client.unstable@2.7.0-beta.7
- @osdk/generator-converters@2.7.0-beta.7

## 2.7.0-beta.6

### Minor Changes

- c332598: Adds experimental platform API hooks to fetch Foundry users
- 0b2cd91: fix SimplePropertyDef issue, wire RDPs through, update names

### Patch Changes

- Updated dependencies [c9ca08d]
  - @osdk/api@2.7.0-beta.6
  - @osdk/client.unstable@2.7.0-beta.6
  - @osdk/generator-converters@2.7.0-beta.6

## 2.7.0-beta.5

### Minor Changes

- dc33f68: Add Transaction ID to Queries

### Patch Changes

- Updated dependencies [dc33f68]
  - @osdk/generator-converters@2.7.0-beta.5
  - @osdk/api@2.7.0-beta.5
  - @osdk/client.unstable@2.7.0-beta.5

## 2.7.0-beta.4

### Minor Changes

- 1e3c147: Add experimental_asyncIterLinks method on object sets

### Patch Changes

- Updated dependencies [1e3c147]
  - @osdk/api@2.7.0-beta.4
  - @osdk/client.unstable@2.7.0-beta.4
  - @osdk/generator-converters@2.7.0-beta.4

## 2.7.0-beta.3

### Minor Changes

- a23784c: wire action edit response types through for useOsdkAction
- f0a57a5: Use new interface property fields to include interface property types in codegen

### Patch Changes

- Updated dependencies [448763f]
- Updated dependencies [f0a57a5]
  - @osdk/api@2.7.0-beta.3
  - @osdk/generator-converters@2.7.0-beta.3
  - @osdk/client.unstable@2.7.0-beta.3

## 2.7.0-beta.2

### Minor Changes

- 03db734: Move platform SDK deps to pnpm catalog
- c8da6b7: fix useLinks sorting strategy initialization

### Patch Changes

- @osdk/api@2.7.0-beta.2
- @osdk/client.unstable@2.7.0-beta.2
- @osdk/generator-converters@2.7.0-beta.2

## 2.6.0-beta.13

### Minor Changes

- 84f0eef: Bumping OSDK apis
- 486ef7e: Deprecate multiplicity in query params/outputs
- ea077c6: Change asType to narrowToType

### Patch Changes

- Updated dependencies [84f0eef]
- Updated dependencies [486ef7e]
- Updated dependencies [ea077c6]
  - @osdk/generator-converters@2.6.0-beta.13
  - @osdk/api@2.6.0-beta.13
  - @osdk/client.unstable@2.6.0-beta.13

## 2.6.0-beta.12

### Minor Changes

- 9961f06: fix order by via key stabilization

### Patch Changes

- @osdk/api@2.6.0-beta.12
- @osdk/client.unstable@2.6.0-beta.12
- @osdk/generator-converters@2.6.0-beta.12

## 2.6.0-beta.11

### Minor Changes

- c5a3815: Add new auto fetch more behavior to useOsdkObjects

### Patch Changes

- @osdk/api@2.6.0-beta.11
- @osdk/client.unstable@2.6.0-beta.11
- @osdk/generator-converters@2.6.0-beta.11

## 2.6.0-beta.10

### Minor Changes

- 3fbb596: Pipe through transactionId to endpoints that load data via object sets

### Patch Changes

- Updated dependencies [3fbb596]
  - @osdk/generator-converters@2.6.0-beta.10
  - @osdk/api@2.6.0-beta.10
  - @osdk/client.unstable@2.6.0-beta.10

## 2.6.0-beta.9

### Patch Changes

- Updated dependencies [b307201]
  - @osdk/api@2.6.0-beta.9
  - @osdk/client.unstable@2.6.0-beta.9
  - @osdk/generator-converters@2.6.0-beta.9

## 2.6.0-beta.8

### Minor Changes

- a1ffb20: Use new ephemeral media upload endpoint.
- e62c692: Allow all applicable filters for struct sub properties to be applied on struct arrays

### Patch Changes

- Updated dependencies [a1ffb20]
- Updated dependencies [e62c692]
  - @osdk/generator-converters@2.6.0-beta.8
  - @osdk/api@2.6.0-beta.8
  - @osdk/client.unstable@2.6.0-beta.8

## 2.6.0-beta.7

### Minor Changes

- 507ec7f: Allows top level filters with an implied and clause to support a combination of a not and and clause

### Patch Changes

- @osdk/api@2.6.0-beta.7
- @osdk/client.unstable@2.6.0-beta.7
- @osdk/generator-converters@2.6.0-beta.7

## 2.6.0-beta.6

### Minor Changes

- b959085: Fix nested array query param type handling

### Patch Changes

- Updated dependencies [b959085]
  - @osdk/generator-converters@2.6.0-beta.6
  - @osdk/api@2.6.0-beta.6
  - @osdk/client.unstable@2.6.0-beta.6

## 2.6.0-beta.5

### Minor Changes

- b48526f: fix ListQuery websocket subscription management

### Patch Changes

- Updated dependencies [2556c64]
  - @osdk/api@2.6.0-beta.5
  - @osdk/client.unstable@2.6.0-beta.5
  - @osdk/generator-converters@2.6.0-beta.5

## 2.6.0-beta.4

### Minor Changes

- 61eb5b0: Add heartbeat to object set subscriptions
- e7bf02a: Add RDP support to React toolkit

### Patch Changes

- Updated dependencies [7fd788b]
- Updated dependencies [e7bf02a]
  - @osdk/client.unstable@2.6.0-beta.4
  - @osdk/api@2.6.0-beta.4
  - @osdk/generator-converters@2.6.0-beta.4

## 2.6.0-beta.3

### Minor Changes

- 831a285: Added relative time formatting
- 3fa28d4: Add support for date and time formatting

### Patch Changes

- @osdk/api@2.6.0-beta.3
- @osdk/client.unstable@2.6.0-beta.3
- @osdk/generator-converters@2.6.0-beta.3

## 2.6.0-beta.2

### Minor Changes

- 84e61fc: Add propertyValueFormatting type to property metadata
- c4f8529: Add stub for getFormattedValue in experimental mode
- b762231: Add boolean formatting
- f7ae38a: Allow exact matching for arrays of structs
- f085283: Add support for numeric formatting

### Patch Changes

- Updated dependencies [84e61fc]
- Updated dependencies [c4f8529]
- Updated dependencies [f7ae38a]
  - @osdk/generator-converters@2.6.0-beta.2
  - @osdk/api@2.6.0-beta.2
  - @osdk/client.unstable@2.6.0-beta.2

## 2.5.0-beta.15

### Minor Changes

- b01375c: Fire and forget query metadata loads if no parameters
- 6e60727: Export extractPrimaryKetFromObjectSpecifier from client

### Patch Changes

- @osdk/api@2.5.0-beta.15
- @osdk/client.unstable@2.5.0-beta.15
- @osdk/generator-converters@2.5.0-beta.15

## 2.5.2

### Patch Changes

- @osdk/api@2.5.2
- @osdk/client.unstable@2.5.2
- @osdk/generator-converters@2.5.2

## 2.5.1

### Patch Changes

- 099b4d8: Fix nested array query param type handling
- Updated dependencies [099b4d8]
  - @osdk/generator-converters@2.5.1
  - @osdk/api@2.5.1
  - @osdk/client.unstable@2.5.1

## 2.5.0

### Patch Changes

- 322c5bc: Simulated release
- b05075d: Add fix for interface links.
- d797f0c: Falsy values other than undefined or null do not throw for query map responses
- 7160276: Add order by relevance support to nearest neighbors
- 7cdab1d: Update platform sdk dependencies
- a00d2ed: Update Platform SDK dependencies
- ab29baa: make dedupeIntervals dynamic
- 85e8edb: Fix unhandled promise rejection error.
- eeaf8eb: refactor ListQuery into InterfaceListQuery and ObjectListQuery
- 3d7461d: Fix applyQuery for marketplace installations
- 7bdac45: Update Platform SDK dependency
- 37eb75b: remove features not supported for RC
- 7b97128: add useObjectSet hook
- b9e9a88: Refactor Observable Client with enhanced observer architecture
  - Restructure observable implementation with dedicated observer classes (LinkObservers, ListObservers, ObjectObservers)
  - Improve type safety for link observation operations with enhanced generic constraints
  - Add QuerySubscription and UnsubscribableWrapper for better encapsulation
  - Maintain API compatibility while improving internal architecture

- 76905f5: Remove undefined type from aggregation $group value
- 48d52b7: Parallelize network request for getting object metadata when doing simple object fetches.
- a96d89e: Update Platform SDK dependencies
- 48040a8: add exponential backoff behavior for ObjectSetListener websocket nextConnectTime
- 20962bc: Add a new experimental fetchPageByRidNoType method
- cbcf2ad: Add branching support
- 052a96b: Add $link support.
- f49171a: Remaps simple API names for orderby and select arguments to match expected fully qualified API names
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [badfbc4]
- Updated dependencies [a6f49e9]
- Updated dependencies [a6f49e9]
- Updated dependencies [7160276]
- Updated dependencies [7cdab1d]
- Updated dependencies [a00d2ed]
- Updated dependencies [7bdac45]
- Updated dependencies [37eb75b]
- Updated dependencies [7b97128]
- Updated dependencies [76905f5]
- Updated dependencies [a96d89e]
- Updated dependencies [7bdac45]
- Updated dependencies [20962bc]
- Updated dependencies [cbcf2ad]
- Updated dependencies [04fe946]
- Updated dependencies [052a96b]
- Updated dependencies [ca1fabe]
- Updated dependencies [e48be06]
  - @osdk/api@2.5.0
  - @osdk/client.unstable@2.5.0
  - @osdk/generator-converters@2.5.0
  - @osdk/shared.client.impl@1.5.0
  - @osdk/shared.net.errors@2.5.0
  - @osdk/shared.net.fetch@1.5.0

## 2.5.0-rc.15

### Patch Changes

- 37eb75b: remove features not supported for RC
- Updated dependencies [37eb75b]
  - @osdk/api@2.5.0-rc.15
  - @osdk/client.unstable@2.5.0-rc.15
  - @osdk/generator-converters@2.5.0-rc.15

## 2.5.0-beta.14

### Minor Changes

- b7edfb5: Add support for object type casts

### Patch Changes

- Updated dependencies [9dd5a63]
- Updated dependencies [e62408b]
- Updated dependencies [b7edfb5]
  - @osdk/client.unstable@2.5.0-beta.14
  - @osdk/api@2.5.0-beta.14
  - @osdk/generator-converters@2.5.0-beta.14

## 2.5.0-beta.13

### Patch Changes

- @osdk/api@2.5.0-beta.13
- @osdk/client.unstable@2.5.0-beta.13
- @osdk/generator-converters@2.5.0-beta.13

## 2.5.0-beta.12

### Minor Changes

- 85e8edb: Fix unhandled promise rejection error.

### Patch Changes

- @osdk/api@2.5.0-beta.12
- @osdk/client.unstable@2.5.0-beta.12
- @osdk/generator-converters@2.5.0-beta.12

## 2.5.0-beta.11

### Minor Changes

- 7b97128: add useObjectSet hook

### Patch Changes

- Updated dependencies [7b97128]
  - @osdk/api@2.5.0-beta.11
  - @osdk/client.unstable@2.5.0-beta.11
  - @osdk/generator-converters@2.5.0-beta.11

## 2.5.0-beta.10

### Minor Changes

- 48040a8: add exponential backoff behavior for ObjectSetListener websocket nextConnectTime

### Patch Changes

- @osdk/api@2.5.0-beta.10
- @osdk/client.unstable@2.5.0-beta.10
- @osdk/generator-converters@2.5.0-beta.10

## 2.5.0-beta.9

### Minor Changes

- eeaf8eb: refactor ListQuery into InterfaceListQuery and ObjectListQuery
- f49171a: Remaps simple API names for orderby and select arguments to match expected fully qualified API names

### Patch Changes

- @osdk/api@2.5.0-beta.9
- @osdk/client.unstable@2.5.0-beta.9
- @osdk/generator-converters@2.5.0-beta.9

## 2.5.0-beta.8

### Patch Changes

- Updated dependencies [ca1fabe]
  - @osdk/api@2.5.0-beta.8
  - @osdk/client.unstable@2.5.0-beta.8
  - @osdk/generator-converters@2.5.0-beta.8

## 2.5.0-beta.7

### Minor Changes

- ab29baa: make dedupeIntervals dynamic

### Patch Changes

- @osdk/api@2.5.0-beta.7
- @osdk/client.unstable@2.5.0-beta.7
- @osdk/generator-converters@2.5.0-beta.7

## 2.5.0-beta.6

### Minor Changes

- d797f0c: Falsy values other than undefined or null do not throw for query map responses
- cbcf2ad: Add branching support

### Patch Changes

- Updated dependencies [badfbc4]
- Updated dependencies [cbcf2ad]
- Updated dependencies [04fe946]
  - @osdk/shared.client.impl@1.5.0-beta.2
  - @osdk/shared.net.errors@2.5.0-beta.2
  - @osdk/shared.net.fetch@1.5.0-beta.2
  - @osdk/generator-converters@2.5.0-beta.6
  - @osdk/client.unstable@2.5.0-beta.6
  - @osdk/api@2.5.0-beta.6

## 2.5.0-beta.5

### Minor Changes

- 3d7461d: Fix applyQuery for marketplace installations
- 052a96b: Add $link support.

### Patch Changes

- Updated dependencies [052a96b]
  - @osdk/api@2.5.0-beta.5
  - @osdk/client.unstable@2.5.0-beta.5
  - @osdk/generator-converters@2.5.0-beta.5

## 2.5.0-beta.4

### Minor Changes

- a00d2ed: Update Platform SDK dependencies
- a96d89e: Update Platform SDK dependencies

### Patch Changes

- Updated dependencies [a00d2ed]
- Updated dependencies [a96d89e]
  - @osdk/generator-converters@2.5.0-beta.4
  - @osdk/api@2.5.0-beta.4
  - @osdk/client.unstable@2.5.0-beta.4

## 2.5.0-beta.3

### Minor Changes

- 7bdac45: Update Platform SDK dependency
- 20962bc: Add a new experimental fetchPageByRidNoType method

### Patch Changes

- Updated dependencies [7bdac45]
- Updated dependencies [7bdac45]
- Updated dependencies [20962bc]
- Updated dependencies [e48be06]
  - @osdk/generator-converters@2.5.0-beta.3
  - @osdk/api@2.5.0-beta.3
  - @osdk/client.unstable@2.5.0-beta.3

## 2.5.0-beta.2

### Minor Changes

- b05075d: Add fix for interface links.
- 7160276: Add order by relevance support to nearest neighbors
- 7cdab1d: Update platform sdk dependencies
- b9e9a88: Refactor Observable Client with enhanced observer architecture
  - Restructure observable implementation with dedicated observer classes (LinkObservers, ListObservers, ObjectObservers)
  - Improve type safety for link observation operations with enhanced generic constraints
  - Add QuerySubscription and UnsubscribableWrapper for better encapsulation
  - Maintain API compatibility while improving internal architecture

- 76905f5: Remove undefined type from aggregation $group value
- 48d52b7: Parallelize network request for getting object metadata when doing simple object fetches.

### Patch Changes

- Updated dependencies [7160276]
- Updated dependencies [7cdab1d]
- Updated dependencies [76905f5]
  - @osdk/api@2.5.0-beta.2
  - @osdk/generator-converters@2.5.0-beta.2
  - @osdk/client.unstable@2.5.0-beta.2

## 2.4.0-beta.17

### Minor Changes

- 06fd45a: Export createObjectSpecifierFromPrimaryKey

### Patch Changes

- @osdk/api@2.4.0-beta.17
- @osdk/client.unstable@2.4.0-beta.17
- @osdk/generator-converters@2.4.0-beta.17

## 2.4.0-beta.16

### Minor Changes

- c763807: Fix hydrate method for object rids to work with interfaces.

### Patch Changes

- @osdk/api@2.4.0-beta.16
- @osdk/client.unstable@2.4.0-beta.16
- @osdk/generator-converters@2.4.0-beta.16

## 2.4.0-beta.15

### Minor Changes

- d2d36e1: Fix module resolution for node when importing unstable code

### Patch Changes

- @osdk/api@2.4.0-beta.15
- @osdk/client.unstable@2.4.0-beta.15
- @osdk/generator-converters@2.4.0-beta.15

## 2.4.0-beta.14

### Patch Changes

- Updated dependencies [5c76e33]
  - @osdk/client.unstable@2.4.0-beta.14
  - @osdk/api@2.4.0-beta.14
  - @osdk/generator-converters@2.4.0-beta.14

## 2.4.0-beta.13

### Minor Changes

- 4bc848b: Add interface link support.

### Patch Changes

- Updated dependencies [4bc848b]
  - @osdk/generator-converters@2.4.0-beta.13
  - @osdk/api@2.4.0-beta.13
  - @osdk/client.unstable@2.4.0-beta.13

## 2.4.0-beta.12

### Minor Changes

- 402eb67: Fix hydrate to support interface object sets.

### Patch Changes

- @osdk/api@2.4.0-beta.12
- @osdk/client.unstable@2.4.0-beta.12
- @osdk/generator-converters@2.4.0-beta.12

## 2.4.0-beta.11

### Patch Changes

- Updated dependencies [f277b30]
  - @osdk/generator-converters@2.4.0-beta.11
  - @osdk/api@2.4.0-beta.11
  - @osdk/client.unstable@2.4.0-beta.11

## 2.4.0-beta.10

### Minor Changes

- f022ffe: Add experimental transactions shape

### Patch Changes

- @osdk/api@2.4.0-beta.10
- @osdk/client.unstable@2.4.0-beta.10
- @osdk/generator-converters@2.4.0-beta.10

## 2.4.0-beta.9

### Minor Changes

- 9101bad: Adds "includeNullValues" option for exact match filters

### Patch Changes

- Updated dependencies [9101bad]
  - @osdk/api@2.4.0-beta.9
  - @osdk/generator-converters@2.4.0-beta.9
  - @osdk/client.unstable@2.4.0-beta.9

## 2.4.0-beta.8

### Minor Changes

- 9f4fe9e: Add new types mapping for internal creation workflow.

### Patch Changes

- Updated dependencies [9f4fe9e]
  - @osdk/api@2.4.0-beta.8
  - @osdk/generator-converters@2.4.0-beta.8
  - @osdk/client.unstable@2.4.0-beta.8

## 2.4.0-beta.7

### Patch Changes

- @osdk/api@2.4.0-beta.7
- @osdk/client.unstable@2.4.0-beta.7
- @osdk/generator-converters@2.4.0-beta.7

## 2.4.0-beta.6

### Patch Changes

- Updated dependencies [764e5f1]
  - @osdk/client.unstable@2.4.0-beta.6
  - @osdk/api@2.4.0-beta.6
  - @osdk/generator-converters@2.4.0-beta.6

## 2.4.0-beta.5

### Patch Changes

- @osdk/api@2.4.0-beta.5
- @osdk/client.unstable@2.4.0-beta.5
- @osdk/generator-converters@2.4.0-beta.5

## 2.4.0-beta.4

### Patch Changes

- Updated dependencies [a01b8d4]
  - @osdk/client.unstable@2.4.0-beta.4
  - @osdk/api@2.4.0-beta.4
  - @osdk/generator-converters@2.4.0-beta.4

## 2.4.0-beta.3

### Patch Changes

- Updated dependencies [988bf66]
  - @osdk/client.unstable@2.4.0-beta.3
  - @osdk/api@2.4.0-beta.3
  - @osdk/generator-converters@2.4.0-beta.3

## 2.4.0-beta.2

### Minor Changes

- 8c95154: Add nearestNeighbor support
- c32dcf2: Add a metadata field to all loaded objects
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
  - @osdk/api@2.4.0-beta.2
  - @osdk/generator-converters@2.4.0-beta.2
  - @osdk/client.unstable@2.4.0-beta.2

## 2.3.0-beta.10

### Minor Changes

- 991dbd4: Async function metadata
- 266b756: Add consistency for async iter calls.
- 8d69555: Add hydrateObjectSetFromObjectRids util.

### Patch Changes

- Updated dependencies [0cc9cad]
  - @osdk/client.unstable@2.3.0-beta.10
  - @osdk/api@2.3.0-beta.10
  - @osdk/generator-converters@2.3.0-beta.10

## 2.3.0-beta.9

### Minor Changes

- 5a15cfd: Added fixed dependency to API for beta package.

### Patch Changes

- Updated dependencies [7d232fb]
  - @osdk/client.unstable@2.3.0-beta.9
  - @osdk/api@2.3.0-beta.9
  - @osdk/generator-converters@2.3.0-beta.9

## 2.3.0-beta.8

### Patch Changes

- Updated dependencies [12d599f]
  - @osdk/api@2.3.0-beta.8
  - @osdk/generator-converters@2.3.0-beta.8
  - @osdk/client.unstable@2.3.0-beta.8

## 2.3.0-beta.7

### Minor Changes

- 2a23cca: ObservableClient now adds to the fetch-user-agent
- f8db93d: improve media upload (beta)

### Patch Changes

- Updated dependencies [f8db93d]
  - @osdk/generator-converters@2.3.0-beta.7
  - @osdk/client.unstable@2.3.0-beta.7
  - @osdk/api@2.3.0-beta.7

## 2.3.0-beta.6

### Minor Changes

- 9839eab: Bumps conjure-lite
- cd911a6: Properly handles lat,long strings in action arguments
- 2c800e5: Fix bug where we sent over longitude/latitude for geohash properties, when the backend actually expects latitude/longitude.
- cd911a6: ObservableClient can now do optimistic writes for deletes

### Patch Changes

- Updated dependencies [9839eab]
  - @osdk/client.unstable@2.3.0-beta.6
  - @osdk/api@2.3.0-beta.6
  - @osdk/generator-converters@2.3.0-beta.6

## 2.3.0-beta.5

### Patch Changes

- Updated dependencies [d6bccdf]
- Updated dependencies [e8c4aed]
  - @osdk/client.unstable@2.3.0-beta.5
  - @osdk/api@2.3.0-beta.5
  - @osdk/generator-converters@2.3.0-beta.5

## 2.3.0-beta.4

### Minor Changes

- 43c5547: Add 'getMediaReference' method to Media
- 3736624: Ensure count operations return numbers
- 3b5ccaa: Fix orderBy argument on object load methods

### Patch Changes

- Updated dependencies [43c5547]
- Updated dependencies [cc2ce5f]
- Updated dependencies [a6c01ff]
- Updated dependencies [ef46ed6]
- Updated dependencies [3408ea9]
- Updated dependencies [3b5ccaa]
  - @osdk/api@2.3.0-beta.4
  - @osdk/client.unstable@2.3.0-beta.4
  - @osdk/generator-converters@2.3.0-beta.4

## 2.3.0-beta.3

### Patch Changes

- Updated dependencies [474f4ca]
  - @osdk/client.unstable@2.3.0-beta.3
  - @osdk/api@2.3.0-beta.3
  - @osdk/generator-converters@2.3.0-beta.3

## 2.3.0-beta.2

### Patch Changes

- @osdk/api@2.3.0-beta.2
- @osdk/client.unstable@2.3.0-beta.2
- @osdk/generator-converters@2.3.0-beta.2

## 2.2.0

### Patch Changes

- 322c5bc: Simulated release
- b61e9f5: Make Query Map Types Optional
- 7416ce4: Adds deleted objects and links returned from applyAction
- 1ba3871: Support $clone for interface objects
- 12843cb: Add ability to load all underlying properties of an interface.
- 18ba34f: Adds the ability to generate and execute functions at pinned versions
- cdd3154: Revert allowing explicitly passing undefined values to reset on actions
- 56aa502: Improves exposed APIs
- abe4897: Removes support for boolean primary keys
- 63b2e63: Update Platform SDK Dependencies
- cddfbf9: Adds default value option to group by
- 5a12181: Quick fix for geohash params.
- 2ce3659: Update underlying pagination size for async iter.
- 7416ce4: Update Platform SDK Dependencies
- 26c2d95: Add experimental function to load page of objects by rid.
- 430dee3: JSdoc for object properties are generated
- 397f906: Ensure count operations return numbers
- 488b51c: Add support for using aggregations and GeoJSON types from runtime derived properties
- fccd9ac: "Allow selecting derived properties"
- 5665b18: Remove selection RDPs from the API
- 761e69d: Added type safety to createMediaReference
- 889e84b: Release
- 62e5965: Removed unneeded lint statements.
- ed69666: Update conjure-lite to 0.7.1
- c92fe73: Add OsdkConfig utils to client/unstable
- 2517750: observeList should work for interfaces and have the fully loaded content
- 4183a55: Refactor OsdkBase to avoid breaks with type not being discoverable
- 1e16dcb: Exposes MinimalLogger and BrowserLogger via @osdk/client/internal
- 70b4464: Fix types for RDPs
- 2f6206c: Improvements to @osdk/react
- 81c0d8c: Client will now provide a default logger to console.error if none is provided
- 81c0d8c: ObservableClient now queues up object loads for bulk processing
- 791e655: Add support for geoshape and geohash action parameters.
- 317b555: Release
- 879b6c3: Include a more descriptive error message for multiple filters on a single property filter clause
- 63b2e63: Supports generating queries for entrySet function types
- 2517750: Provides efficient OrderByCanonicalizer
- 1e16dcb: Default logging is error level only
- f4370e3: Fixes error when using intersection, subtraction, or union object sets
- ea4e4b1: Fix attachments to be upload sequentially rather than in parallel.
- a146ce4: Cleanup RDP API
- cc380b5: Use the latest Platform APIs
- e873024: Fixes issues requiring msw and p-defer
- 88591f7: Small fixes for ObjectSpecifier
- 751e5b3: Use client as peer dep in functions package.
- 805df40: Fix interface action types.
- fe0cc43: Experimental react changes
- 2517750: Initial internal architecture document for ObservableClient
- 5467a0f: Fix orderBy argument on object load methods
- 2517750: subscribe in ObservableClient now uses Observer
- 63b2e63: Adds ObjectSpecifiers to generated OSDK objects
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [b68adea]
- Updated dependencies [c6bee50]
- Updated dependencies [7416ce4]
- Updated dependencies [6eeb423]
- Updated dependencies [7170fd1]
- Updated dependencies [12843cb]
- Updated dependencies [ad93d55]
- Updated dependencies [a08bdfb]
- Updated dependencies [18ba34f]
- Updated dependencies [6abf078]
- Updated dependencies [f82767c]
- Updated dependencies [56aa502]
- Updated dependencies [0e874b1]
- Updated dependencies [abe4897]
- Updated dependencies [63b2e63]
- Updated dependencies [cddfbf9]
- Updated dependencies [7416ce4]
- Updated dependencies [23ea0e4]
- Updated dependencies [26c2d95]
- Updated dependencies [10da391]
- Updated dependencies [488b51c]
- Updated dependencies [71462e9]
- Updated dependencies [6ac8f0b]
- Updated dependencies [fccd9ac]
- Updated dependencies [5e8e839]
- Updated dependencies [5665b18]
- Updated dependencies [46cede4]
- Updated dependencies [761e69d]
- Updated dependencies [889e84b]
- Updated dependencies [a6e5f89]
- Updated dependencies [ed69666]
- Updated dependencies [4183a55]
- Updated dependencies [70b4464]
- Updated dependencies [395ae07]
- Updated dependencies [37f8e60]
- Updated dependencies [791e655]
- Updated dependencies [317b555]
- Updated dependencies [63b2e63]
- Updated dependencies [a146ce4]
- Updated dependencies [3d0ab11]
- Updated dependencies [805df40]
- Updated dependencies [5467a0f]
- Updated dependencies [63b2e63]
  - @osdk/api@2.2.0
  - @osdk/client.unstable@2.2.0
  - @osdk/generator-converters@2.2.0
  - @osdk/shared.client.impl@1.2.0
  - @osdk/shared.net.errors@2.2.0
  - @osdk/shared.net.fetch@1.2.0

## 2.2.0-beta.23

### Minor Changes

- 4183a55: Refactor OsdkBase to avoid breaks with type not being discoverable

### Patch Changes

- Updated dependencies [4183a55]
  - @osdk/api@2.2.0-beta.23
  - @osdk/generator-converters@2.2.0-beta.23
  - @osdk/client.unstable@2.2.0-beta.23

## 2.2.0-beta.22

### Minor Changes

- 18ba34f: Adds the ability to generate and execute functions at pinned versions

### Patch Changes

- Updated dependencies [18ba34f]
  - @osdk/generator-converters@2.2.0-beta.22
  - @osdk/api@2.2.0-beta.22
  - @osdk/client.unstable@2.2.0-beta.22

## 2.2.0-beta.21

### Minor Changes

- 317b555: Release

### Patch Changes

- Updated dependencies [317b555]
  - @osdk/generator-converters@2.2.0-beta.21
  - @osdk/client.unstable@2.2.0-beta.21
  - @osdk/api@2.2.0-beta.21

## 2.2.0-beta.20

### Minor Changes

- 889e84b: Release

### Patch Changes

- Updated dependencies [889e84b]
  - @osdk/generator-converters@2.2.0-beta.20
  - @osdk/client.unstable@2.2.0-beta.20
  - @osdk/api@2.2.0-beta.20

## 2.2.0-beta.19

### Minor Changes

- 1f6842f: Send a null value for parameters explicitly set to undefined rather than dropping the field

### Patch Changes

- @osdk/api@2.2.0-beta.19
- @osdk/client.unstable@2.2.0-beta.19
- @osdk/generator-converters@2.2.0-beta.19

## 2.2.0-beta.18

### Minor Changes

- 56aa502: Improves exposed APIs

### Patch Changes

- Updated dependencies [56aa502]
- Updated dependencies [6ac8f0b]
  - @osdk/api@2.2.0-beta.18
  - @osdk/client.unstable@2.2.0-beta.18
  - @osdk/generator-converters@2.2.0-beta.18

## 2.2.0-beta.17

### Minor Changes

- b61e9f5: Make Query Map Types Optional
- abe4897: Removes support for boolean primary keys
- 5a12181: Quick fix for geohash params.
- 430dee3: JSdoc for object properties are generated
- 70b4464: Fix types for RDPs
- 791e655: Add support for geoshape and geohash action parameters.
- 751e5b3: Use client as peer dep in functions package.

### Patch Changes

- Updated dependencies [c6bee50]
- Updated dependencies [6eeb423]
- Updated dependencies [abe4897]
- Updated dependencies [70b4464]
- Updated dependencies [37f8e60]
- Updated dependencies [791e655]
  - @osdk/api@2.2.0-beta.17
  - @osdk/client.unstable@2.2.0-beta.17
  - @osdk/generator-converters@2.2.0-beta.17

## 2.2.0-beta.16

### Patch Changes

- Updated dependencies [395ae07]
  - @osdk/client.unstable@2.2.0-beta.16
  - @osdk/api@2.2.0-beta.16
  - @osdk/generator-converters@2.2.0-beta.16

## 2.2.0-beta.15

### Minor Changes

- ed69666: Update conjure-lite to 0.7.1
- 1e16dcb: Exposes MinimalLogger and BrowserLogger via @osdk/client/internal
- 1e16dcb: Default logging is error level only
- f4370e3: Fixes error when using intersection, subtraction, or union object sets
- cc380b5: Use the latest Platform APIs

### Patch Changes

- Updated dependencies [ed69666]
  - @osdk/client.unstable@2.2.0-beta.15
  - @osdk/api@2.2.0-beta.15
  - @osdk/generator-converters@2.2.0-beta.15

## 2.2.0-beta.14

### Patch Changes

- Updated dependencies [a08bdfb]
- Updated dependencies [6abf078]
  - @osdk/client.unstable@2.2.0-beta.14
  - @osdk/api@2.2.0-beta.14
  - @osdk/generator-converters@2.2.0-beta.14

## 2.2.0-beta.13

### Minor Changes

- 2ce3659: Update underlying pagination size for async iter.
- 488b51c: Add support for using aggregations and GeoJSON types from runtime derived properties
- e873024: Fixes issues requiring msw and p-defer
- 88591f7: Small fixes for ObjectSpecifier

### Patch Changes

- Updated dependencies [488b51c]
- Updated dependencies [71462e9]
  - @osdk/api@2.2.0-beta.13
  - @osdk/generator-converters@2.2.0-beta.13
  - @osdk/client.unstable@2.2.0-beta.13

## 2.2.0-beta.12

### Minor Changes

- c92fe73: Add OsdkConfig utils to client/unstable

### Patch Changes

- @osdk/api@2.2.0-beta.12
- @osdk/client.unstable@2.2.0-beta.12
- @osdk/generator-converters@2.2.0-beta.12

## 2.2.0-beta.11

### Patch Changes

- Updated dependencies [7170fd1]
- Updated dependencies [10da391]
  - @osdk/api@2.2.0-beta.11
  - @osdk/client.unstable@2.2.0-beta.11
  - @osdk/generator-converters@2.2.0-beta.11

## 2.2.0-beta.10

### Minor Changes

- 81c0d8c: Client will now provide a default logger to console.error if none is provided
- 81c0d8c: ObservableClient now queues up object loads for bulk processing

### Patch Changes

- Updated dependencies [23ea0e4]
- Updated dependencies [5e8e839]
- Updated dependencies [46cede4]
  - @osdk/api@2.2.0-beta.10
  - @osdk/client.unstable@2.2.0-beta.10
  - @osdk/generator-converters@2.2.0-beta.10

## 2.2.0-beta.9

### Minor Changes

- 12843cb: Add ability to load all underlying properties of an interface.
- 2517750: observeList should work for interfaces and have the fully loaded content
- 2517750: Provides efficient OrderByCanonicalizer
- 2517750: Initial internal architecture document for ObservableClient
- 2517750: subscribe in ObservableClient now uses Observer

### Patch Changes

- Updated dependencies [12843cb]
- Updated dependencies [f82767c]
  - @osdk/api@2.2.0-beta.9
  - @osdk/generator-converters@2.2.0-beta.9
  - @osdk/client.unstable@2.2.0-beta.9

## 2.2.0-beta.8

### Minor Changes

- 1ba3871: Support $clone for interface objects
- 63b2e63: Update Platform SDK Dependencies
- 26c2d95: Add experimental function to load page of objects by rid.
- 63b2e63: Supports generating queries for entrySet function types
- 63b2e63: Adds ObjectSpecifiers to generated OSDK objects

### Patch Changes

- Updated dependencies [ad93d55]
- Updated dependencies [0e874b1]
- Updated dependencies [63b2e63]
- Updated dependencies [26c2d95]
- Updated dependencies [63b2e63]
- Updated dependencies [63b2e63]
  - @osdk/shared.net.errors@2.2.0-beta.2
  - @osdk/shared.net.fetch@1.2.0-beta.2
  - @osdk/api@2.2.0-beta.8
  - @osdk/generator-converters@2.2.0-beta.8
  - @osdk/shared.client.impl@1.2.0-beta.2
  - @osdk/client.unstable@2.2.0-beta.8

## 2.2.0-beta.7

### Minor Changes

- 7416ce4: Adds deleted objects and links returned from applyAction
- 7416ce4: Update Platform SDK Dependencies
- 879b6c3: Include a more descriptive error message for multiple filters on a single property filter clause
- 805df40: Fix interface action types.

### Patch Changes

- Updated dependencies [7416ce4]
- Updated dependencies [7416ce4]
- Updated dependencies [805df40]
  - @osdk/api@2.2.0-beta.7
  - @osdk/generator-converters@2.2.0-beta.7
  - @osdk/client.unstable@2.2.0-beta.7

## 2.2.0-beta.6

### Minor Changes

- cddfbf9: Adds default value option to group by
- ea4e4b1: Fix attachments to be upload sequentially rather than in parallel.

### Patch Changes

- Updated dependencies [b68adea]
- Updated dependencies [cddfbf9]
- Updated dependencies [a6e5f89]
  - @osdk/generator-converters@2.2.0-beta.6
  - @osdk/api@2.2.0-beta.6
  - @osdk/client.unstable@2.2.0-beta.6

## 2.2.0-beta.5

### Minor Changes

- 62e5965: Removed unneeded lint statements.
- 2f6206c: Improvements to @osdk/react

### Patch Changes

- @osdk/api@2.2.0-beta.5
- @osdk/client.unstable@2.2.0-beta.5
- @osdk/generator-converters@2.2.0-beta.5

## 2.2.0-beta.4

### Minor Changes

- fe0cc43: Experimental react changes

### Patch Changes

- @osdk/api@2.2.0-beta.4
- @osdk/client.unstable@2.2.0-beta.4
- @osdk/generator-converters@2.2.0-beta.4

## 2.2.0-beta.3

### Minor Changes

- 761e69d: Added type safety to createMediaReference

### Patch Changes

- Updated dependencies [761e69d]
  - @osdk/api@2.2.0-beta.3
  - @osdk/generator-converters@2.2.0-beta.3
  - @osdk/client.unstable@2.2.0-beta.3

## 2.2.0-beta.2

### Minor Changes

- fccd9ac: "Allow selecting derived properties"

### Patch Changes

- Updated dependencies [fccd9ac]
  - @osdk/api@2.2.0-beta.2
  - @osdk/generator-converters@2.2.0-beta.2
  - @osdk/client.unstable@2.2.0-beta.2

## 2.1.0

### Minor Changes

- 966d408: Rename type for base action parameter types.
- b773513: Fix onOutOfDate handler from being fired twice
- cddc196: Try-catches handlers called during subscription
- d794c19: Adding support for struct action params.
- 05febf4: Adds Reference Update support in subscribe
- 55c05f2: Remove runtime derived properties from external types.
- a06ec35: Fixes the lastFetchedValue on a Geotime Series property from reference updates
- 0dc40b0: Switch to OSDK.Instance
- 3703d81: Changed shared context to a version less error prone
- 6f50516: Fix bug where object return types in a query were not properly mapped when wrapped in a struct.
- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.
- 11a05cc: Updated subscribe api to make requesting properties optional
- 7865cb6: Add support for search on struct properties.
- e6fbd94: Export Attachment from client
- 9c4efe6: Support uploading media parameters through actions
- 0a7c747: Add support for timeseries sensors.
- 3ea2e79: Creates new export for internal helper functions
- 1812118: Add geotime support for OSDK.
- d927a1d: Throws error in createClient when passed an invalid ontology RID
- bc1761c: Update platform API dependencies.
- 656f975: Fixes attachment upload inputs sending incorrect in browser contexts
- f1145ff: Adds support for runtime derived properties
- 1c59d93: Allows interfaces to be used with subscribe
- f446d0c: Exposes $clone from OSDK Object instances
- c80ca45: Add ability to create interfaces through actions now.
- bb8b219: Use new external packages instead of the internal ones.
- 44e62f6: Updating fetch for auth and other packages.
- 03f95eb: Add support for interface params in actions.
- 91cfa3a: Fixing url parsing for client.
- 94463b6: Support objects as code
- 14624f7: Supports custom formatters in browser
- 1a89f23: Removing support for augmenting interfaces when fetching them.
- 9d35a1f: Remove unused imports
- c691c8b: Package now has experimental support for commonjs
- 749cf69: Remove experimental non null for now.
- f03e39f: Add a namespace type for listeners.
- d464009: improves interface api name mapping with api namespaces
- 11088aa: Fix where clause types so we don't accept more than one key in the clauses.
- 720218d: OSDK Client no longer uses javascript proxies for its objects. This results in a 13% increase in construction time but at 1kb per object reduction in memory
- 9298f75: Using new interface APIs for backend.
- eb27b54: Fix URL for experimental method
- 7a95618: Generate new OMS APIs
- f34b3d4: Add ability to fetch by rid, experimentally.
- d88fdb9: Adds methods to extract date strings from Dates and ISO-8601 strings
- 8eb2378: Fixes where clauses when objects have an api namespace
- acbfab9: Fixes where clauses for interfaces with no properties.
- c9da74c: Improves code quality by fixing linting errors
- 27f0f77: Interface instances are immutable just like object instances
- 015279b: Fix use of new interfaces api with preview flag.
- 62c1d63: Add support for reading media reference property in OSDK.
- 3c9ac22: Cleaning up where clause types.
- 91cfa3a: Fixing URL parsing for custom entry points.
- e86e91d: Internal property of Client is removed from output
- abfe4b3: Add support for reading struct properties.
- 27866a8: Removing interface argument for selecting object types. This is not supported in the new apis, and is not being used internally anywhere with the old apis.
- 0cd1603: Fixes AttachmentUpload for browser contexts
- a7a4aef: Removes dependency on crypto
- e5fe7c0: Adds experimental method to convert an object set into RID
- 1b2e8c9: Adds subscribe feature directly to client
- 9f3807c: Allows $in to take a readonly array
- d12c92b: Fixes process.env.NODE_ENV handling
- 0c56d21: Exposing fuzzy searching.
- e548b9b: Updates subscribe to return object updates
- 6671a39: Upgrade execa where used
- 5e78575: Fix queries that have response types with nested values, like arrays.
- ee6224b: Explicitly type aggregation types in queries.
- 1dc0228: Change experimental code style to prevent future breaks
- fa02ebf: Adds SLS dependency for object-set-watcher API
- 9af346e: Fixing proxy handlers.
- d3b3f35: Add's onSuccessfulSubscribe handler to subscribe functionality
- c682504: Locks dependency version of 3 internal libraries
- 9018dc2: Updating platform api dependencies.
- a6c320d: Internal optimization to reduce memory usage for unused interface objects
- 8026baf: Update interface support for .subscribe
- 6b6c8a1: Updates gateway endpoints and changes fetchContents for attachments to return a response
- c537e2d: Remove unused imports.
- 3fc2ee6: Include more descriptive JS docs for public utils
- 0d8ac3b: Remove attachment from exports.
- 73fa373: Exports helper method to construct object sets from RIDs from internal utils
- 8e6a5f4: Avoid type-fest's IsAny as it doesn't always work
- 09eaf24: Update to latest platform sdks
- 71dfb4c: Now export all api shapes from client, so use that dependency instead.
- 2d5e648: Remove subscribe from experimental gate.
- c4f88a8: Removes circular dependency that may upset legacy tools like react-native
- d665147: Update platform sdk deps
- f19da8e: Remove where clause from aggregate options. This option was never actually doing anything before as it was not passed to the backend for processing, so we are removing it to prevent future confusion.

### Patch Changes

- Updated dependencies [966d408]
- Updated dependencies [cddc196]
- Updated dependencies [d794c19]
- Updated dependencies [05febf4]
- Updated dependencies [55c05f2]
- Updated dependencies [0dc40b0]
- Updated dependencies [3703d81]
- Updated dependencies [25fd9f0]
- Updated dependencies [1b60b3d]
- Updated dependencies [11a05cc]
- Updated dependencies [7865cb6]
- Updated dependencies [9c4efe6]
- Updated dependencies [0a7c747]
- Updated dependencies [f0b519d]
- Updated dependencies [3ea2e79]
- Updated dependencies [1812118]
- Updated dependencies [bc1761c]
- Updated dependencies [656f975]
- Updated dependencies [f1145ff]
- Updated dependencies [f446d0c]
- Updated dependencies [c80ca45]
- Updated dependencies [bb8b219]
- Updated dependencies [44e62f6]
- Updated dependencies [03f95eb]
- Updated dependencies [91cfa3a]
- Updated dependencies [94463b6]
- Updated dependencies [1a89f23]
- Updated dependencies [9d35a1f]
- Updated dependencies [c691c8b]
- Updated dependencies [749cf69]
- Updated dependencies [f03e39f]
- Updated dependencies [11088aa]
- Updated dependencies [72c1905]
- Updated dependencies [9298f75]
- Updated dependencies [7a95618]
- Updated dependencies [f34b3d4]
- Updated dependencies [acbfab9]
- Updated dependencies [c9da74c]
- Updated dependencies [62c1d63]
- Updated dependencies [3c9ac22]
- Updated dependencies [1591f04]
- Updated dependencies [03e1941]
- Updated dependencies [963addb]
- Updated dependencies [abfe4b3]
- Updated dependencies [b79becf]
- Updated dependencies [27866a8]
- Updated dependencies [caf1abc]
- Updated dependencies [e5fe7c0]
- Updated dependencies [1b2e8c9]
- Updated dependencies [81b2fb2]
- Updated dependencies [9f3807c]
- Updated dependencies [ecd4aee]
- Updated dependencies [0c56d21]
- Updated dependencies [e548b9b]
- Updated dependencies [83e7ea3]
- Updated dependencies [ee6224b]
- Updated dependencies [1dc0228]
- Updated dependencies [6c60414]
- Updated dependencies [5fe2c8d]
- Updated dependencies [7d777eb]
- Updated dependencies [1132993]
- Updated dependencies [d3b3f35]
- Updated dependencies [c682504]
- Updated dependencies [785f663]
- Updated dependencies [9018dc2]
- Updated dependencies [6b6c8a1]
- Updated dependencies [c537e2d]
- Updated dependencies [73fa373]
- Updated dependencies [bf0e3b4]
- Updated dependencies [8e6a5f4]
- Updated dependencies [2b35ed4]
- Updated dependencies [09eaf24]
- Updated dependencies [2d5e648]
- Updated dependencies [06e66dc]
- Updated dependencies [31e7d70]
- Updated dependencies [d665147]
- Updated dependencies [f19da8e]
  - @osdk/generator-converters@2.1.0
  - @osdk/api@2.1.0
  - @osdk/shared.client.impl@1.1.0
  - @osdk/client.unstable@2.1.0
  - @osdk/shared.net.errors@2.1.0
  - @osdk/shared.net.fetch@1.1.0

## 2.1.0-beta.31

### Minor Changes

- bb8b219: Use new external packages instead of the internal ones.
- ee6224b: Explicitly type aggregation types in queries.

### Patch Changes

- Updated dependencies [bb8b219]
- Updated dependencies [81b2fb2]
- Updated dependencies [ecd4aee]
- Updated dependencies [ee6224b]
- Updated dependencies [5fe2c8d]
  - @osdk/generator-converters@2.1.0-beta.31
  - @osdk/api@2.1.0-beta.31
  - @osdk/client.unstable@2.1.0-beta.31

## 2.1.0-beta.30

### Minor Changes

- 966d408: Rename type for base action parameter types.
- f03e39f: Add a namespace type for listeners.
- 0d8ac3b: Remove attachment from exports.
- 2d5e648: Remove subscribe from experimental gate.

### Patch Changes

- Updated dependencies [966d408]
- Updated dependencies [f03e39f]
- Updated dependencies [1591f04]
- Updated dependencies [785f663]
- Updated dependencies [2d5e648]
  - @osdk/generator-converters@2.1.0-beta.30
  - @osdk/api@2.1.0-beta.30
  - @osdk/client.unstable@2.1.0-beta.30

## 2.1.0-beta.29

### Minor Changes

- f1145ff: Adds support for runtime derived properties
- 8026baf: Update interface support for .subscribe

### Patch Changes

- Updated dependencies [f1145ff]
  - @osdk/api@2.1.0-beta.29
  - @osdk/generator-converters@2.1.0-beta.29
  - @osdk/client.unstable@2.1.0-beta.29

## 2.1.0-beta.28

### Minor Changes

- f446d0c: Exposes $clone from OSDK Object instances

### Patch Changes

- Updated dependencies [f446d0c]
  - @osdk/api@2.1.0-beta.28
  - @osdk/generator-converters@2.1.0-beta.28
  - @osdk/client.unstable@2.1.0-beta.28

## 2.1.0-beta.27

### Patch Changes

- @osdk/api@2.1.0-beta.27
- @osdk/client.unstable@2.1.0-beta.27
- @osdk/generator-converters@2.1.0-beta.27

## 2.1.0-beta.26

### Minor Changes

- 7865cb6: Add support for search on struct properties.
- e6fbd94: Export Attachment from client
- 9c4efe6: Support uploading media parameters through actions
- 44e62f6: Updating fetch for auth and other packages.
- 94463b6: Support objects as code
- f19da8e: Remove where clause from aggregate options. This option was never actually doing anything before as it was not passed to the backend for processing, so we are removing it to prevent future confusion.

### Patch Changes

- Updated dependencies [7865cb6]
- Updated dependencies [9c4efe6]
- Updated dependencies [44e62f6]
- Updated dependencies [94463b6]
- Updated dependencies [f19da8e]
  - @osdk/api@2.1.0-beta.26
  - @osdk/generator-converters@2.1.0-beta.26
  - @osdk/client.unstable@2.1.0-beta.26

## 2.1.0-beta.25

### Minor Changes

- c80ca45: Add ability to create interfaces through actions now.

### Patch Changes

- Updated dependencies [c80ca45]
  - @osdk/generator-converters@2.1.0-beta.25
  - @osdk/api@2.1.0-beta.25
  - @osdk/client.unstable@2.1.0-beta.25

## 2.1.0-beta.24

### Minor Changes

- 03f95eb: Add support for interface params in actions.
- c691c8b: Package now has experimental support for commonjs
- 3c9ac22: Cleaning up where clause types.

### Patch Changes

- Updated dependencies [03f95eb]
- Updated dependencies [c691c8b]
- Updated dependencies [3c9ac22]
  - @osdk/generator-converters@2.1.0-beta.24
  - @osdk/api@2.1.0-beta.24
  - @osdk/shared.client.impl@1.1.0-beta.5
  - @osdk/shared.net.errors@2.1.0-beta.2
  - @osdk/shared.net.fetch@1.1.0-beta.3
  - @osdk/client.unstable@2.1.0-beta.24

## 2.1.0-beta.23

### Minor Changes

- d794c19: Adding support for struct action params.
- 7a95618: Generate new OMS APIs
- 62c1d63: Add support for reading media reference property in OSDK.
- 3fc2ee6: Include more descriptive JS docs for public utils
- d665147: Update platform sdk deps

### Patch Changes

- Updated dependencies [d794c19]
- Updated dependencies [f0b519d]
- Updated dependencies [7a95618]
- Updated dependencies [62c1d63]
- Updated dependencies [83e7ea3]
- Updated dependencies [d665147]
  - @osdk/generator-converters@2.1.0-beta.23
  - @osdk/api@2.1.0-beta.23
  - @osdk/client.unstable@2.1.0-beta.23

## 2.1.0-beta.22

### Minor Changes

- c9da74c: Improves code quality by fixing linting errors
- 73fa373: Exports helper method to construct object sets from RIDs from internal utils

### Patch Changes

- Updated dependencies [c9da74c]
- Updated dependencies [73fa373]
  - @osdk/generator-converters@2.1.0-beta.22
  - @osdk/api@2.1.0-beta.22
  - @osdk/client.unstable@2.1.0-beta.22

## 2.1.0-beta.21

### Minor Changes

- 3ea2e79: Creates new export for internal helper functions
- 656f975: Fixes attachment upload inputs sending incorrect in browser contexts
- f34b3d4: Add ability to fetch by rid, experimentally.
- e86e91d: Internal property of Client is removed from output

### Patch Changes

- Updated dependencies [3ea2e79]
- Updated dependencies [656f975]
- Updated dependencies [f34b3d4]
- Updated dependencies [1132993]
  - @osdk/api@2.1.0-beta.21
  - @osdk/shared.net.fetch@1.1.0-beta.2
  - @osdk/generator-converters@2.1.0-beta.21
  - @osdk/shared.client.impl@1.1.0-beta.4
  - @osdk/client.unstable@2.1.0-beta.21

## 2.1.0-beta.20

### Minor Changes

- b773513: Fix onOutOfDate handler from being fired twice
- 9d35a1f: Remove unused imports
- abfe4b3: Add support for reading struct properties.
- c537e2d: Remove unused imports.

### Patch Changes

- Updated dependencies [9d35a1f]
- Updated dependencies [abfe4b3]
- Updated dependencies [c537e2d]
- Updated dependencies [bf0e3b4]
- Updated dependencies [06e66dc]
  - @osdk/generator-converters@2.1.0-beta.20
  - @osdk/client.unstable@2.1.0-beta.20
  - @osdk/api@2.1.0-beta.20

## 2.1.0-beta.19

### Minor Changes

- cddc196: Try-catches handlers called during subscription
- 720218d: OSDK Client no longer uses javascript proxies for its objects. This results in a 13% increase in construction time but at 1kb per object reduction in memory
- eb27b54: Fix URL for experimental method
- 27f0f77: Interface instances are immutable just like object instances
- a7a4aef: Removes dependency on crypto
- 6671a39: Upgrade execa where used
- a6c320d: Internal optimization to reduce memory usage for unused interface objects

### Patch Changes

- Updated dependencies [cddc196]
  - @osdk/api@2.1.0-beta.19
  - @osdk/generator-converters@2.1.0-beta.19
  - @osdk/client.unstable@2.1.0-beta.19

## 2.1.0-beta.18

### Patch Changes

- @osdk/api@2.1.0-beta.18
- @osdk/client.unstable@2.1.0-beta.18
- @osdk/generator-converters@2.1.0-beta.18

## 2.1.0-beta.17

### Patch Changes

- Updated dependencies [1b60b3d]
  - @osdk/shared.client.impl@1.1.0-beta.3
  - @osdk/api@2.1.0-beta.17
  - @osdk/client.unstable@2.1.0-beta.17
  - @osdk/generator-converters@2.1.0-beta.17

## 2.1.0-beta.16

### Minor Changes

- e5fe7c0: Adds experimental method to convert an object set into RID

### Patch Changes

- Updated dependencies [e5fe7c0]
  - @osdk/api@2.1.0-beta.16
  - @osdk/generator-converters@2.1.0-beta.16
  - @osdk/client.unstable@2.1.0-beta.16

## 2.1.0-beta.15

### Minor Changes

- 1c59d93: Allows interfaces to be used with subscribe

### Patch Changes

- @osdk/api@2.1.0-beta.15
- @osdk/client.unstable@2.1.0-beta.15
- @osdk/generator-converters@2.1.0-beta.15

## 2.1.0-beta.14

### Minor Changes

- 0a7c747: Add support for timeseries sensors.
- 91cfa3a: Fixing url parsing for client.
- 015279b: Fix use of new interfaces api with preview flag.
- 91cfa3a: Fixing URL parsing for custom entry points.
- 0c56d21: Exposing fuzzy searching.
- 6b6c8a1: Updates gateway endpoints and changes fetchContents for attachments to return a response

### Patch Changes

- Updated dependencies [0a7c747]
- Updated dependencies [91cfa3a]
- Updated dependencies [0c56d21]
- Updated dependencies [6b6c8a1]
  - @osdk/generator-converters@2.1.0-beta.14
  - @osdk/api@2.1.0-beta.14
  - @osdk/client.unstable@2.1.0-beta.14

## 2.1.0-beta.13

### Minor Changes

- c4f88a8: Removes circular dependency that may upset legacy tools like react-native

### Patch Changes

- @osdk/api@2.1.0-beta.13
- @osdk/client.unstable@2.1.0-beta.13
- @osdk/generator-converters@2.1.0-beta.13

## 2.1.0-beta.12

### Patch Changes

- @osdk/api@2.1.0-beta.12
- @osdk/client.unstable@2.1.0-beta.12
- @osdk/generator-converters@2.1.0-beta.12

## 2.1.0-beta.11

### Minor Changes

- bc1761c: Update platform API dependencies.
- 9298f75: Using new interface APIs for backend.

### Patch Changes

- Updated dependencies [bc1761c]
- Updated dependencies [9298f75]
- Updated dependencies [caf1abc]
  - @osdk/generator-converters@2.1.0-beta.11
  - @osdk/api@2.1.0-beta.11
  - @osdk/client.unstable@2.1.0-beta.11

## 2.1.0-beta.10

### Minor Changes

- 11a05cc: Updated subscribe api to make requesting properties optional
- 14624f7: Supports custom formatters in browser
- 11088aa: Fix where clause types so we don't accept more than one key in the clauses.
- d88fdb9: Adds methods to extract date strings from Dates and ISO-8601 strings

### Patch Changes

- Updated dependencies [11a05cc]
- Updated dependencies [11088aa]
  - @osdk/api@2.1.0-beta.10
  - @osdk/generator-converters@2.1.0-beta.10
  - @osdk/client.unstable@2.1.0-beta.10

## 2.1.0-beta.9

### Minor Changes

- acbfab9: Fixes where clauses for interfaces with no properties.

### Patch Changes

- Updated dependencies [acbfab9]
  - @osdk/api@2.1.0-beta.9
  - @osdk/generator-converters@2.1.0-beta.9
  - @osdk/client.unstable@2.1.0-beta.9

## 2.1.0-beta.8

### Minor Changes

- 9f3807c: Allows $in to take a readonly array
- 71dfb4c: Now export all api shapes from client, so use that dependency instead.

### Patch Changes

- Updated dependencies [9f3807c]
  - @osdk/api@2.1.0-beta.8
  - @osdk/generator-converters@2.1.0-beta.8
  - @osdk/client.unstable@2.1.0-beta.8

## 2.1.0-beta.7

### Minor Changes

- 27866a8: Removing interface argument for selecting object types. This is not supported in the new apis, and is not being used internally anywhere with the old apis.
- 0cd1603: Fixes AttachmentUpload for browser contexts
- 9018dc2: Updating platform api dependencies.

### Patch Changes

- Updated dependencies [27866a8]
- Updated dependencies [9018dc2]
- Updated dependencies [31e7d70]
  - @osdk/api@2.1.0-beta.7
  - @osdk/generator-converters@2.1.0-beta.7
  - @osdk/client.unstable@2.1.0-beta.7

## 2.1.0-beta.6

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.
- 1a89f23: Removing support for augmenting interfaces when fetching them.
- 1b2e8c9: Adds subscribe feature directly to client

### Patch Changes

- Updated dependencies [25fd9f0]
- Updated dependencies [1a89f23]
- Updated dependencies [1b2e8c9]
  - @osdk/api@2.1.0-beta.6
  - @osdk/client.unstable@2.1.0-beta.6
  - @osdk/generator-converters@2.1.0-beta.6
  - @osdk/shared.client.impl@1.1.0-beta.2
  - @osdk/shared.net.errors@2.1.0-beta.1
  - @osdk/shared.net.fetch@1.1.0-beta.1

## 2.1.0-beta.5

### Minor Changes

- fa02ebf: Adds SLS dependency for object-set-watcher API

### Patch Changes

- Updated dependencies [963addb]
- Updated dependencies [2b35ed4]
  - @osdk/shared.client.impl@1.1.0-beta.1
  - @osdk/shared.net.errors@2.1.0-beta.0
  - @osdk/client.unstable@2.1.0-beta.5
  - @osdk/shared.net.fetch@1.1.0-beta.0
  - @osdk/api@2.1.0-beta.5
  - @osdk/generator-converters@2.1.0-beta.5

## 2.1.0-beta.4

### Minor Changes

- 0dc40b0: Remove experimental non null for now.
- d12c92b: Fixes process.env.NODE_ENV handling
- 1dc0228: Change experimental code style to prevent future breaks
- d3b3f35: Add's onSuccessfulSubscribe handler to subscribe functionality

### Patch Changes

- Updated dependencies [0dc40b0]
- Updated dependencies [1dc0228]
- Updated dependencies [d3b3f35]
  - @osdk/api@2.1.0-beta.4
  - @osdk/generator-converters@2.1.0-beta.4
  - @osdk/client.unstable@2.1.0-beta.4

## 2.1.0-beta.3

### Minor Changes

- 05febf4: Adds Reference Update support in subscribe
- a06ec35: Fixes the lastFetchedValue on a Geotime Series property from reference updates
- 3703d81: Changed shared context to a version less error prone
- 6f50516: Fix bug where object return types in a query were not properly mapped when wrapped in a struct.
- 09eaf24: Update to latest platform sdks

### Patch Changes

- Updated dependencies [05febf4]
- Updated dependencies [3703d81]
- Updated dependencies [b79becf]
- Updated dependencies [09eaf24]
  - @osdk/api@2.1.0-beta.3
  - @osdk/shared.client.impl@1.1.0-beta.0
  - @osdk/generator-converters@2.1.0-beta.3
  - @osdk/client.unstable@2.1.0-beta.3

## 2.1.0-beta.2

### Patch Changes

- Updated dependencies [7d777eb]
  - @osdk/generator-converters@2.1.0-beta.2
  - @osdk/client.unstable@2.1.0-beta.2
  - @osdk/api@2.1.0-beta.2

## 2.1.0-beta.1

### Minor Changes

- 1812118: Add geotime support for OSDK.
- 8e6a5f4: Avoid type-fest's IsAny as it doesn't always work

### Patch Changes

- Updated dependencies [1812118]
- Updated dependencies [72c1905]
- Updated dependencies [6c60414]
- Updated dependencies [8e6a5f4]
  - @osdk/generator-converters@2.1.0-beta.1
  - @osdk/api@2.1.0-beta.1
  - @osdk/client.unstable@2.1.0-beta.1

## 2.1.0-beta.0

### Minor Changes

- 0dc40b0: Switch to OSDK.Instance
- d927a1d: Throws error in createClient when passed an invalid ontology RID
- d464009: improves interface api name mapping with api namespaces
- 8eb2378: Fixes where clauses when objects have an api namespace
- e548b9b: Updates subscribe to return object updates
- 5e78575: Fix queries that have response types with nested values, like arrays.
- 9af346e: Fixing proxy handlers.
- c682504: Locks dependency version of 3 internal libraries

### Patch Changes

- Updated dependencies [0dc40b0]
- Updated dependencies [03e1941]
- Updated dependencies [e548b9b]
- Updated dependencies [c682504]
  - @osdk/api@2.1.0-beta.0
  - @osdk/generator-converters@2.1.0-beta.0
  - @osdk/client.unstable@2.1.0-beta.0

## 2.0.0

### Major Changes

- 56df85a: We now generate minimal object and interface types

### Minor Changes

- 39525b8: We now have a hard dependency on pino for type resolution. This has no effect on a project if it doesn't provide a logger to the client.
- ac4f4fd: Notable changes:
  - `{{actionApiName}}$Params` is deprecated in favor of `ActionParams${{actionApiName}}`.
  - All generated `{{actionApiName}}$Params` objects are now exported from generated code.
  - All `{{actionApiName}}$Params` are marked as `readonly`.
  - Some types that are now only needed in `@osdk/client` have been moved back out of `@osdk/client.api`.
  - Generated `ActionParams${{actionApiName}}` are simpler and do not rely on type mapping for the keys, the array'ness, nor multiplicity.
  - `AttachmentUpload.name` is now `readonly`.
- f86f8d0: Re-enable X-OSDK-Request-Context header
- dc25fb4: Code generation now uses MinQueryDef
- b946e00: Emitted action definition is minimal size now
- a2c7b37: Add docs for object sets and attachments.
- dc25fb4: Improve query generics
- 0b20066: Fixes an import
- 76a7adb: Use OntologyMetadataService.bulkLoadOntologyEntities in place of deprecated loadOntologyEntities
- dc25fb4: Rename MinimumActionDefinition to MinActionDef
- 51fe88c: Fix edge case with never in newly generated types
- 68a8dc7: Fixes an issue that could cause an object with sub-selection to be assigned as a full object
- a2c7b37: Enables better tree shaking
- dc25fb4: Further simplify types
- e6ade8b: Adds fetchMetadata method to client
- f009bb2: Remove the direct dependency on pino in favor of a similar shape
- dc25fb4: Renamed definition types to metadata
- dc25fb4: Fixes edge cases in inferred return types especially when changing object types
- 5a41e5e: Adds version compatibility checks to Queries
- a2c7b37: Internal refactor for TimeSeriesProperty
- 795777a: Change how queries are executed, now use executeFunction call instead
- d2f75f9: Adding support for arguments in asyncIter similar to fetchPage. Arguments that are not permitted in asyncIter are nextPageToken and pageSize.
- b7cd0a1: Exposes unstable experimental features directly on client
- 512ee35: Exposed editedObjectTypes for all action results and split edits based on edit type.
- 0ae2b07: Pino is no longer listed as a peer dep due to an issue with some versions of pnpm
- 6eeca39: Internally refactored Action Edits types
- dc25fb4: Modified return type of fetchMetadata to return Object/Interface Definitions
- 0ce2858: Improves casting between Foo.ObjectSet and ObjectSet<Foo>
- dc25fb4: Expose parameters on action metadata
- 5d6d5ab: Internally refactored to support new API versions
- dc25fb4: Simplified types
- dc25fb4: Updates return types of fetchMetadata to be Action and Query Definitions
- fc28eae: Fetching interfaces learns $\_\_EXPERIMENTAL_selectedObjectTypes
- 5d6d5ab: Autofill Content-Length and Content-Type headers in API's that accept Blobs
- dc25fb4: Renamed Min_Definition to \_Definition
- 96ea876: Add namespaces for objects,actions,queries so that you can enumerate them.
- 5d6d5ab: SLS dependencies are optional
- a9923f3: Adds exactDistinct to aggregations
- 1f633f7: Removed dependency on @osdk/client.api
- d4d6605: Audited and cleaned up deps
- 64818dc: Drop support for internal gateway package
- 081114f: Splits batchApplyAction out of applyAction

### Patch Changes

- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [3affe49]
- Updated dependencies [b946e00]
- Updated dependencies [a2c7b37]
- Updated dependencies [0ea1a17]
- Updated dependencies [dc25fb4]
- Updated dependencies [b60e107]
- Updated dependencies [9b0617d]
- Updated dependencies [76a7adb]
- Updated dependencies [1770490]
- Updated dependencies [94105a5]
- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [5dc1241]
- Updated dependencies [a2c7b37]
- Updated dependencies [dc25fb4]
- Updated dependencies [1252d94]
- Updated dependencies [ee39a61]
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
- Updated dependencies [ee39a61]
- Updated dependencies [56df85a]
- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [5d6d5ab]
- Updated dependencies [a9923f3]
- Updated dependencies [1f633f7]
- Updated dependencies [d4d6605]
- Updated dependencies [5dc1241]
- Updated dependencies [64818dc]
  - @osdk/internal.foundry.ontologiesv2@0.2.0
  - @osdk/internal.foundry.core@0.2.0
  - @osdk/generator-converters@2.0.0
  - @osdk/api@2.0.0
  - @osdk/shared.client@1.0.0
  - @osdk/client.unstable@2.0.0
  - @osdk/client.unstable.osw@0.2.0
  - @osdk/shared.client.impl@1.0.0
  - @osdk/shared.net.errors@2.0.0
  - @osdk/shared.net.fetch@1.0.0

## 2.0.0-beta.16

### Minor Changes

- dc25fb4: Improve query generics
- dc25fb4: Further simplify types

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
- Updated dependencies [5dc1241]
  - @osdk/generator-converters@2.0.0-beta.16
  - @osdk/api@2.0.0-beta.16
  - @osdk/shared.client@1.0.0-beta.3
  - @osdk/internal.foundry.core@0.2.0-beta.10
  - @osdk/internal.foundry.ontologiesv2@0.2.0-beta.10
  - @osdk/shared.client.impl@1.0.0-beta.3
  - @osdk/client.unstable@2.0.0-beta.16

## 2.0.0-beta.15

### Minor Changes

- dc25fb4: Simplified types

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/generator-converters@2.0.0-beta.15
  - @osdk/api@2.0.0-beta.15
  - @osdk/client.unstable@2.0.0-beta.15

## 2.0.0-beta.14

### Minor Changes

- a2c7b37: Enables better tree shaking
- 1f633f7: Removed dependency on @osdk/client.api
- d4d6605: Audited and cleaned up deps

### Patch Changes

- Updated dependencies [b60e107]
- Updated dependencies [5d6d5ab]
- Updated dependencies [a2c7b37]
- Updated dependencies [fe9547e]
- Updated dependencies [1f633f7]
- Updated dependencies [d4d6605]
  - @osdk/shared.client@1.0.0-beta.2
  - @osdk/internal.foundry.ontologiesv2@0.2.0-beta.9
  - @osdk/internal.foundry.core@0.2.0-beta.9
  - @osdk/api@2.0.0-beta.14
  - @osdk/generator-converters@2.0.0-beta.14
  - @osdk/client.unstable.osw@0.2.0-beta.1
  - @osdk/shared.client.impl@1.0.0-beta.2
  - @osdk/shared.net.errors@2.0.0-beta.1
  - @osdk/shared.net.fetch@1.0.0-beta.1
  - @osdk/client.unstable@2.0.0-beta.14

## 2.0.0-beta.13

### Minor Changes

- 1488144: Renamed definition types to metadata
- d2f75f9: Adding support for arguments in asyncIter similar to fetchPage. Arguments that are not permitted in asyncIter are nextPageToken and pageSize.
- b7cd0a1: Exposes unstable experimental features directly on client
- c28792e: Modified return type of fetchMetadata to return Object/Interface Definitions
- 26ee3bd: Updates return types of fetchMetadata to be Action and Query Definitions
- 6ab5d2e: Renamed Min_Definition to \_Definition

### Patch Changes

- Updated dependencies [5dc1241]
- Updated dependencies [1488144]
- Updated dependencies [d2f75f9]
- Updated dependencies [b7cd0a1]
- Updated dependencies [c28792e]
- Updated dependencies [26ee3bd]
- Updated dependencies [6ab5d2e]
  - @osdk/shared.client@1.0.0-beta.1
  - @osdk/generator-converters@2.0.0-beta.13
  - @osdk/api@2.0.0-beta.13
  - @osdk/client.api@2.0.0-beta.13
  - @osdk/shared.client.impl@1.0.0-beta.1
  - @osdk/client.unstable@2.0.0-beta.13

## 2.0.0-beta.12

### Minor Changes

- dc25fb4: Expose parameters on action metadata

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/generator-converters@2.0.0-beta.12
  - @osdk/client.api@2.0.0-beta.12
  - @osdk/client.unstable@2.0.0-beta.12
  - @osdk/api@2.0.0-beta.12

## 2.0.0-beta.11

### Minor Changes

- f009bb2: Remove the direct dependency on pino in favor of a similar shape
- 6eeca39: Internally refactored Action Edits types

### Patch Changes

- @osdk/client.api@2.0.0-beta.11
- @osdk/generator-converters@2.0.0-beta.11
- @osdk/client.unstable@2.0.0-beta.11
- @osdk/api@2.0.0-beta.11

## 2.0.0-beta.10

### Major Changes

- 56df85a: We now generate minimal object and interface types

### Minor Changes

- dc25fb4: Code generation now uses MinQueryDef
- 0b20066: Fixes an import
- dc25fb4: Rename MinimumActionDefinition to MinActionDef
- e6ade8b: Adds fetchMetadata method to client
- 0ae2b07: Pino is no longer listed as a peer dep due to an issue with some versions of pnpm
- 5d6d5ab: Internally refactored to support new API versions

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [94105a5]
- Updated dependencies [dc25fb4]
- Updated dependencies [1252d94]
- Updated dependencies [e6ade8b]
- Updated dependencies [95f9247]
- Updated dependencies [56df85a]
  - @osdk/generator-converters@2.0.0-beta.10
  - @osdk/client.api@2.0.0-beta.10
  - @osdk/api@2.0.0-beta.10
  - @osdk/client.unstable.osw@0.2.0-beta.0
  - @osdk/client.unstable@2.0.0-beta.10
  - @osdk/shared.client.impl@1.0.0-beta.0
  - @osdk/shared.client@1.0.0-beta.0
  - @osdk/shared.net.errors@2.0.0-beta.0
  - @osdk/shared.net.fetch@1.0.0-beta.0

## 2.0.0-beta.9

### Minor Changes

- b946e00: Emitted action definition is minimal size now

### Patch Changes

- Updated dependencies [b946e00]
  - @osdk/api@2.0.0-beta.9
  - @osdk/client.api@2.0.0-beta.9
  - @osdk/generator-converters@2.0.0-beta.9
  - @osdk/client.unstable@2.0.0-beta.9

## 2.0.0-beta.8

### Minor Changes

- 64818dc: Drop support for internal gateway package

### Patch Changes

- Updated dependencies [64818dc]
  - @osdk/client.api@2.0.0-beta.8
  - @osdk/api@2.0.0-beta.8
  - @osdk/generator-converters@2.0.0-beta.8
  - @osdk/client.unstable@2.0.0-beta.8

## 2.0.0-beta.7

### Minor Changes

- 39525b8: We now have a hard dependency on pino for type resolution. This has no effect on a project if it doesn't provide a logger to the client.
- 512ee35: Exposed editedObjectTypes for all action results and split edits based on edit type.
- fc28eae: Fetching interfaces learns $\_\_EXPERIMENTAL_selectedObjectTypes

### Patch Changes

- Updated dependencies [9b0617d]
- Updated dependencies [512ee35]
- Updated dependencies [e86c505]
- Updated dependencies [fc28eae]
- Updated dependencies [ee39a61]
  - @osdk/api@2.0.0-beta.7
  - @osdk/client.api@2.0.0-beta.7
  - @osdk/client.unstable@2.0.0-beta.7
  - @osdk/generator-converters@2.0.0-beta.7

## 2.0.0-beta.6

### Minor Changes

- 76a7adb: Use OntologyMetadataService.bulkLoadOntologyEntities in place of deprecated loadOntologyEntities
- a2c7b37: Internal refactor for TimeSeriesProperty
- 0ce2858: Improves casting between Foo.ObjectSet and ObjectSet<Foo>
- 5d6d5ab: Autofill Content-Length and Content-Type headers in API's that accept Blobs
- 96ea876: Add namespaces for objects,actions,queries so that you can enumerate them.
- 5d6d5ab: SLS dependencies are optional
- a9923f3: Adds exactDistinct to aggregations

### Patch Changes

- Updated dependencies [3affe49]
- Updated dependencies [76a7adb]
- Updated dependencies [a2c7b37]
- Updated dependencies [0ce2858]
- Updated dependencies [a9923f3]
  - @osdk/api@2.0.0-beta.6
  - @osdk/client.unstable@2.0.0-beta.6
  - @osdk/client.api@2.0.0-beta.6
  - @osdk/generator-converters@2.0.0-beta.6

## 0.22.0-beta.5

### Minor Changes

- dc25fb4: Fixes edge cases in inferred return types especially when changing object types

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/client.api@0.22.0-beta.5
  - @osdk/api@1.10.0-beta.1
  - @osdk/generator-converters@0.8.0-beta.1

## 0.22.0-beta.4

### Patch Changes

- Updated dependencies [0ea1a17]
  - @osdk/client.api@0.22.0-beta.4

## 0.22.0-beta.3

### Patch Changes

- Updated dependencies [7c2db00]
  - @osdk/api@1.10.0-beta.0
  - @osdk/client.api@0.22.0-beta.3
  - @osdk/generator-converters@0.8.0-beta.0

## 0.22.0-beta.2

### Minor Changes

- 68a8dc7: Fixes an issue that could cause an object with sub-selection to be assigned as a full object
- 081114f: Splits batchApplyAction out of applyAction

### Patch Changes

- Updated dependencies [68a8dc7]
  - @osdk/client.api@0.22.0-beta.2

## 0.22.0-beta.1

### Minor Changes

- 51fe88c: Fix edge case with never in newly generated types

### Patch Changes

- Updated dependencies [51fe88c]
  - @osdk/client.api@0.22.0-beta.1

## 0.22.0-beta.0

### Minor Changes

- ac4f4fd: Notable changes:
  - `{{actionApiName}}$Params` is deprecated in favor of `ActionParams${{actionApiName}}`.
  - All generated `{{actionApiName}}$Params` objects are now exported from generated code.
  - All `{{actionApiName}}$Params` are marked as `readonly`.
  - Some types that are now only needed in `@osdk/client` have been moved back out of `@osdk/client.api`.
  - Generated `ActionParams${{actionApiName}}` are simpler and do not rely on type mapping for the keys, the array'ness, nor multiplicity.
  - `AttachmentUpload.name` is now `readonly`.
- f86f8d0: Re-enable X-OSDK-Request-Context header
- a2c7b37: Add docs for object sets and attachments.
- 5a41e5e: Adds version compatibility checks to Queries
- 795777a: Change how queries are executed, now use executeFunction call instead

### Patch Changes

- Updated dependencies [a2c7b37]
- Updated dependencies [795777a]
  - @osdk/client.api@0.22.0-beta.0

## 0.21.0

### Minor Changes

- 2deb4d9: Fixing types for within and intersects so they don't take more than the permitted keys
- e54f413: Marks things as @internal to clean up API requirements
- 6387a92: Makes defining process.env.NODE_ENV optional
- f91cd58: Temporarily disable X-OSDK-Request-Context header
- 651c1b8: Fixes rids in interfaces

### Patch Changes

- Updated dependencies [2deb4d9]
- Updated dependencies [e54f413]
  - @osdk/client.api@0.21.0

## 0.21.0-beta.1

### Minor Changes

- f91cd58: Temporarily disable X-OSDK-Request-Context header

### Patch Changes

- @osdk/client.api@0.21.0-beta.1

## 0.21.0-beta.0

### Minor Changes

- 2deb4d9: Fixing types for within and intersects so they don't take more than the permitted keys
- e54f413: Marks things as @internal to clean up API requirements
- 6387a92: Makes defining process.env.NODE_ENV optional
- 651c1b8: Fixes rids in interfaces

### Patch Changes

- Updated dependencies [2deb4d9]
- Updated dependencies [e54f413]
  - @osdk/client.api@0.21.0-beta.0

## 0.20.0

### Minor Changes

- 7505880: Fix exports from client
- 02c65c5: Rework $select syntax in aggregations to add support for ordering by metrics
- 564adbf: Fixing attachment creation when converting objects from the wire
- 141953f: Expose $title property in OsdkBase
- 505b993: Experimental subscription no longer fires outOfDate when first subscribing
- a6119bd: Attachments reworked so that you can now fetch directly from object properties. Also added a helper to create an attachment object directly from a rid.
- bfdb123: WARNING: Breaking: change action invocation to require `.applyAction`
- 62bae76: Upgrades 'ws' to avoid false flag CVE
- 034f7ea: Add support for no query time series pulls.
- f6d8850: Removed get, which is now replaced by fetchOne(). This has the exact same functionality and is essentially just a rename.
- 388dba9: Change all internal dependencies to be tilde not caret
- 527e8ab: Objects that are $as are now linked directly to changes from source object
- a519655: Fixed issue accessing $rid when requested on an object.
- 7afa226: Fix action params that take objects to correctly parse out primary key.
- 57b68db: It is possible to pass a Promise<string> for ontologyRid on client creation
- 5378312: Added batch action support for 2.0 client
- 3ec7c38: Add support for queries in 2.0
- b3563e0: OSDK learns \_\_EXPERIMENTAL_strictNonNull to throw, drop objects, or return `| undefined` for properties, allowing for correct typesafety.
- 7adf5c7: Refactoring packages
- 4824449: Fix asyncIter to fetch subsequent pages
- dd6033a: Adds a createPlatformClient if you only need platform apis
- bc89b62: Spelling fixes and spell check in CI
- 4dbac7e: Fixes link direction for experimental bulk loads
- 489d13f: Add support for timeseries in 2.0 syntax.
- 8cff4f0: Adding more package exports
- dec005b: Add final method call to request context header
- 5e9d7d2: Refactored packages to move types over to client.api
- 413e511: Added attachment uploading, reading, and metadata fetching support to 2.0.
- 44add10: Standardize the use of dollar signs as prefixes for object properties that are specific to the OSDK.
- a92e032: ClientCache now uses a key field as the cache key instead of the entire client

### Patch Changes

- Updated dependencies [b5ac8a8]
- Updated dependencies [141953f]
- Updated dependencies [a6119bd]
- Updated dependencies [034f7ea]
- Updated dependencies [388dba9]
- Updated dependencies [d8edf10]
- Updated dependencies [3ec7c38]
- Updated dependencies [7adf5c7]
- Updated dependencies [700c894]
- Updated dependencies [bc89b62]
- Updated dependencies [3615522]
- Updated dependencies [489d13f]
- Updated dependencies [dec005b]
- Updated dependencies [5e9d7d2]
- Updated dependencies [413e511]
- Updated dependencies [67c1fd6]
  - @osdk/client.api@0.20.0
  - @osdk/generator-converters@0.7.0
  - @osdk/shared.client.impl@0.1.0
  - @osdk/shared.net.fetch@0.1.0
  - @osdk/api@1.9.0
  - @osdk/client.unstable.osw@0.1.0
  - @osdk/shared.net.errors@1.1.0
  - @osdk/client.unstable@0.1.0

## 0.20.0-beta.4

### Minor Changes

- 7afa226: Fix action params that take objects to correctly parse out primary key.
- 3ec7c38: Add support for queries in 2.0
- 4824449: Fix asyncIter to fetch subsequent pages
- bc89b62: Spelling fixes and spell check in CI
- a92e032: ClientCache now uses a key field as the cache key instead of the entire client

### Patch Changes

- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/client.api@0.20.0-beta.4
  - @osdk/api@1.9.0-beta.1
  - @osdk/generator-converters@0.7.0-beta.1
  - @osdk/client.unstable.osw@0.1.0-beta.0
  - @osdk/shared.client.impl@0.1.0-beta.1
  - @osdk/shared.net.errors@1.1.0-beta.0
  - @osdk/shared.net.fetch@0.1.0-beta.1
  - @osdk/client.unstable@0.1.0-beta.0

## 0.20.0-beta.3

### Minor Changes

- 62bae76: Upgrades 'ws' to avoid false flag CVE
- 388dba9: Change all internal dependencies to be tilde not caret
- 57b68db: It is possible to pass a Promise<string> for ontologyRid on client creation

### Patch Changes

- Updated dependencies [b5ac8a8]
- Updated dependencies [388dba9]
- Updated dependencies [700c894]
  - @osdk/client.api@0.20.0-beta.3
  - @osdk/generator-converters@0.7.0-beta.0
  - @osdk/shared.client.impl@0.1.0-beta.0
  - @osdk/shared.net.fetch@0.1.0-beta.0
  - @osdk/api@1.9.0-beta.0

## 0.20.0-beta.2

### Minor Changes

- 7505880: Fix exports from client
- 141953f: Expose $title property in OsdkBase

### Patch Changes

- Updated dependencies [141953f]
  - @osdk/client.api@0.20.0-beta.2

## 0.20.0-beta.1

### Minor Changes

- 02c65c5: Rework $select syntax in aggregations to add support for ordering by metrics
- bfdb123: WARNING: Breaking: change action invocation to require `.applyAction`
- 7adf5c7: Refactoring packages
- 5e9d7d2: Refactored packages to move types over to client.api

### Patch Changes

- Updated dependencies [7adf5c7]
- Updated dependencies [5e9d7d2]
- Updated dependencies [67c1fd6]
  - @osdk/client.api@0.20.0-beta.1

## 0.20.0-beta.0

### Minor Changes

- 564adbf: Fixing attachment creation when converting objects from the wire
- 505b993: Experimental subscription no longer fires outOfDate when first subscribing
- a6119bd: Attachments reworked so that you can now fetch directly from object properties. Also added a helper to create an attachment object directly from a rid.
- f6d8850: Removed get, which is now replaced by fetchOne(). This has the exact same functionality and is essentially just a rename.
- 527e8ab: Objects that are $as are now linked directly to changes from source object
- a519655: Fixed issue accessing $rid when requested on an object.
- 5378312: Added batch action support for 2.0 client
- b3563e0: OSDK learns \_\_EXPERIMENTAL_strictNonNull to throw, drop objects, or return `| undefined` for properties, allowing for correct typesafety.
- dd6033a: Adds a createPlatformClient if you only need platform apis
- 4dbac7e: Fixes link direction for experimental bulk loads
- 413e511: Added attachment uploading, reading, and metadata fetching support to 2.0.
- 44add10: Standardize the use of dollar signs as prefixes for object properties that are specific to the OSDK.

### Patch Changes

- Updated dependencies [a6119bd]
- Updated dependencies [413e511]
  - @osdk/client.api@0.20.0-beta.0

## 0.19.0

### Minor Changes

- 0a64def: Adds experimental batch link support
- f9b3c72: Support importing the unstable-do-not-use from moduleResolution: node
- 978ecd5: Reexport PalantirApiError
- 978ecd5: Client is now usable for calling Platform SDK
- c9f3214: Interfaces are now mapped as views

### Patch Changes

- Updated dependencies [c9f3214]
  - @osdk/api@1.8.0
  - @osdk/generator-converters@0.6.0
  - @osdk/shared.net@1.11.0

## 0.18.0

### Minor Changes

- d183d92: Deprecated get and added fetchOne as a replacement. They function exactly the same.
- c68983b: Add fetchOneWithErrors that will add a result wrapper when fetching one object. This wrapper will either contain the data value, or an error if an error was thrown.
- f810576: Separate unstable client features from regular import

## 0.17.0

### Minor Changes

- 63ff4b2: Only producing ESM now

## 0.16.0

### Minor Changes

- 97f627e: Supports more than one concurrent subscription

  Also:
  - Introduced an optional pino logger to the client
  - Fixes issues with where clauses for equality in subscriptions
  - Fixes issues with inconsistent id name and apiName's in the mapping data

- 9906a41: Foundry Platform API support
- 9906a41: Compatible version checks now use versions that are both embedded in the code and updated automatically as part of the release process.

### Patch Changes

- Updated dependencies [9906a41]
  - @osdk/shared.net@1.10.0
  - @osdk/api@1.7.0
  - @osdk/generator-converters@0.5.0

## 0.5.0

### Minor Changes

- 05a1d36b: Making list of objects enumerable in 2.0 syntax

## 0.4.1

### Patch Changes

- e1a94f22: Revert change to how we generate the built package types
- Updated dependencies [e1a94f22]
  - @osdk/shared.net@1.1.1
  - @osdk/gateway@1.1.1
  - @osdk/api@1.1.1

## 0.4.0

### Minor Changes

- a0d5e431: Update build to ship packages compliant with @arethetypeswrong/cli

### Patch Changes

- Updated dependencies [a0d5e431]
  - @osdk/shared.net@1.1.0
  - @osdk/gateway@1.1.0
  - @osdk/api@1.1.0

## 0.3.1

### Patch Changes

- 206c2275: Bump conjure-lite dependency to pick up an explicit license

## 0.3.0

### Minor Changes

- af6a26c0: Add support for object->object links through the object.$link namespace

### Patch Changes

- 07107577: Add where clause support for contains filter

## 0.2.1

### Patch Changes

- Updated dependencies [25dd12ae]
  - @osdk/shared.net@1.0.2
  - @osdk/gateway@1.0.2
  - @osdk/api@1.0.2

## 0.2.0

### Minor Changes

- 14067ad: Fix subscriptions in v2

## 0.1.1

### Patch Changes

- b07ff14: CLI can now request ontology data directly from the backend
- Updated dependencies [b07ff14]
  - @osdk/shared.net@1.0.1
  - @osdk/gateway@1.0.1
  - @osdk/api@1.0.1

## 0.1.0

### Minor Changes

- 6d81f7f: Add preliminary action support to v2

## 0.0.11

### Patch Changes

- Updated dependencies [bfd4d9a]
  - @osdk/api@1.0.0
  - @osdk/gateway@1.0.0
  - @osdk/shared.net@1.0.0

## 0.0.10

### Patch Changes

- ed78694: Fixes imports from older module resolution
- Updated dependencies [ed78694]
  - @osdk/gateway@0.0.10
  - @osdk/api@0.0.17

## 0.0.9

### Patch Changes

- 23a3515: Add deprecation notice to objects-api types
- Updated dependencies [23a3515]
  - @osdk/gateway@0.0.9
  - @osdk/api@0.0.16

## 0.0.8

### Patch Changes

- 4f73749: Re-add the types to support the ObjectSet APIs
- Updated dependencies [4f73749]
  - @osdk/gateway@0.0.8
  - @osdk/api@0.0.15

## 0.0.7

### Patch Changes

- ad425f9: Fix query return type for objects
- Updated dependencies [ad425f9]
  - @osdk/gateway@0.0.7
  - @osdk/api@0.0.14

## 0.0.6

### Patch Changes

- 25de57b: Small fixes
- Updated dependencies [11ac931]
- Updated dependencies [25de57b]
  - @osdk/api@0.0.13
  - @osdk/gateway@0.0.6

## 0.0.5

### Patch Changes

- dfc2b94: Fix OAuth login process
- Updated dependencies [dfc2b94]
  - @osdk/gateway@0.0.5
  - @osdk/api@0.0.12

## 0.0.4

### Patch Changes

- f3120fb: Move 2.0 client into @osdk/client to fix typescript 4.9 compatibility in @osdk/api"
- 848404c: Handle conflicts between object, action, and query names
- Updated dependencies [f3120fb]
- Updated dependencies [848404c]
  - @osdk/gateway@0.0.4
  - @osdk/api@0.0.11

## 0.0.3

### Patch Changes

- 1674b35: Releasing clients for integration
- Updated dependencies [1674b35]
  - @osdk/gateway@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies [90cc3ae]
  - @osdk/gateway@0.0.2

## 0.0.1

### Patch Changes

- d2e9964: Removing subpath imports since TS does not resolve them when creating `.d.ts` files
- Updated dependencies [d2e9964]
  - @osdk/gateway@0.0.1
