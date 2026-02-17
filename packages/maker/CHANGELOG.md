# @osdk/maker

## 0.16.0-beta.4

### Minor Changes

- ab50d31: Remove propertiesV2 from code-snippets
- 2b15836: Disallow ILCs on imported interfaces
- e0ba9eb: Shallow clone arrays in definition when passed in to defineFoo methods

### Patch Changes

- @osdk/api@2.8.0-beta.6

## 0.16.0-beta.3

### Minor Changes

- 8f92197: update code snippet to have interface dependent properties
- 6499ff9: Support reducers and struct main values in oac
- 5b938ef: Enforce OT and prop statuses match
- e9f9f58: Allow primitive struct main values to be title props

### Patch Changes

- @osdk/api@2.8.0-beta.5

## 0.16.0-beta.2

### Minor Changes

- e462938: Support PSGs in OAC

### Patch Changes

- @osdk/api@2.8.0-beta.2

## 0.15.0-beta.9

### Minor Changes

- ace2d68: Allow custom "then" configuration on visibility overrides
- 044f478: Wire propertiesV2 to implementsInterface
- 3693275: Add flag to add namespace prefix to value type api names

## 0.15.0-beta.8

### Minor Changes

- c773e8f: Expose more status options on OAC

### Patch Changes

- Updated dependencies [bb9d25c]
  - @osdk/api@2.7.0-beta.12

## 0.15.0-beta.7

### Minor Changes

- 8381ac2: Alias and render hint overrides for oac
- c95f3bc: Support IDPs in OAC

### Patch Changes

- @osdk/api@2.7.0-beta.9

## 0.15.0-beta.6

### Minor Changes

- 2fd6f6e: Fix self-referential derived datasources

## 0.15.0-beta.5

### Minor Changes

- 1cb0862: fix property parameter defaults

## 0.15.0-beta.4

### Minor Changes

- 9088072: Add users from static groups as action parameters in OAC
- bb8d059: Support customizations for delete object action parameters
- 33e10e3: Implement user and group action parameters

### Patch Changes

- Updated dependencies [c9ca08d]
  - @osdk/api@2.7.0-beta.6

## 0.15.0-beta.3

### Minor Changes

- e743064: Expose icon param in actions

### Patch Changes

- Updated dependencies [1e3c147]
- Updated dependencies [579e518]
  - @osdk/api@2.7.0-beta.4
  - @osdk/typescript-sdk-docs@0.6.0-beta.3

## 0.15.0-beta.2

### Minor Changes

- 448caa8: Support formatting for SPTs

### Patch Changes

- Updated dependencies [03db734]
  - @osdk/typescript-sdk-docs@0.6.0-beta.2
  - @osdk/api@2.7.0-beta.2

## 0.14.0-beta.15

### Minor Changes

- a26bfab: Remove import section from readme
- 88ac696: Remove apiName field from user object property definitions

### Patch Changes

- Updated dependencies [823c756]
- Updated dependencies [0e863aa]
  - @osdk/typescript-sdk-docs@0.5.0-beta.5
  - @osdk/api@2.6.0-beta.11

## 0.14.0-beta.14

### Minor Changes

- 9e2d70a: Interface actions have the option to not include namespaces on parameters for Java OSDK generation

### Patch Changes

- Updated dependencies [a035fdc]
  - @osdk/typescript-sdk-docs@0.5.0-beta.3

## 0.14.0-beta.13

### Minor Changes

- 9ddb3b4: Update snippet names and get latest template

### Patch Changes

- Updated dependencies [b307201]
  - @osdk/api@2.6.0-beta.9

## 0.14.0-beta.12

### Minor Changes

- 5e4aabd: Add decimal property type customizations

### Patch Changes

- @osdk/api@2.6.0-beta.7

## 0.14.0-beta.11

### Minor Changes

- 09242c5: Move mustache dependency

## 0.14.0-beta.10

### Minor Changes

- 6532b54: Move osdk/typescript-sdk-docs from dev dependencies to normal dep

### Patch Changes

- Updated dependencies [b959085]
  - @osdk/api@2.6.0-beta.6

## 0.14.0-beta.9

### Minor Changes

- 55e104e: Add code snippet generation into osdk/maker
- 949646b: Fix delete interface bug

### Patch Changes

- Updated dependencies [2556c64]
  - @osdk/api@2.6.0-beta.5

## 0.14.0-beta.8

### Minor Changes

- 296b34d: Add support for interface deletes

## 0.14.0-beta.7

### Minor Changes

- 7fd788b: Support derived properties

### Patch Changes

- Updated dependencies [e7bf02a]
  - @osdk/api@2.6.0-beta.4

## 0.14.0-beta.6

### Minor Changes

- 04bfbfc: Add default format and table config options to OAC interface actions
- 6ddabf4: Fix bug with action level validation on interface actions

## 0.14.0-beta.5

### Minor Changes

- a03ea8d: Sections, submission metadata, layout switching for OAC interface actions

### Patch Changes

- @osdk/api@2.6.0-beta.3

## 0.14.0-beta.4

### Minor Changes

- aca0e5d: Add parameter/property configuration for OAC interface actions
- 878c2eb: Add display name, api name, status customizations to OAC interface actions

### Patch Changes

- Updated dependencies [84e61fc]
- Updated dependencies [c4f8529]
- Updated dependencies [f7ae38a]
  - @osdk/api@2.6.0-beta.2

## 0.14.0-beta.3

### Minor Changes

- 995064b: Make tests run synchronously

## 0.14.0-beta.2

### Minor Changes

- 7601f9f: Fix condition validation

## 0.13.0-beta.18

### Minor Changes

- 6dee3cc: Typechecks improvement
- 242cdb7: Remove uuid import from maker

## 0.13.0-beta.17

### Minor Changes

- 58e9f56: Add condition validations for oac actions

## 0.13.0-beta.16

### Minor Changes

- 7f22c27: Finish wiring up randomness key

### Patch Changes

- @osdk/api@2.5.0-beta.15

## 0.13.0

### Patch Changes

- 322c5bc: Simulated release
- 6da8fd2: Write value type IR correctly
- 37eb75b: readme update and missing changeset for wiring up randomness key
- a6f49e9: Intermediary links in oac
- a6f49e9: Fix Maker Rid Generation
- f025f30: Fix semantic merge conflict
- 1b60527: Remove foundry.ontologies dependency
- 7cdab1d: Update platform sdk dependencies
- a00d2ed: Update Platform SDK dependencies
- 40d43c2: Make codegen TS compiler friendly
- d815339: Allow interface props to be excluded from actions
- f9b6dc4: Write value types to ontology IR file
- 07083e1: Action submission conditions can have custom metadata
- b1c99bf: Revert .js -> .ts extension for codegen
- 11fd3fb: Add api name validation for object types
- 5f72188: Fix object action param optionality for non-array props
- 5fd12eb: Fix interface display metadata to include icon
- 7bdac45: Update Platform SDK dependency
- a96d89e: Update Platform SDK dependencies
- f2dbc3d: Fix test from semantic merge conflict
- cbcf2ad: Add branching support
- 04fe946: Use block data type for imports
- 7f0ad5c: Check extended interfaces when verifying interface actions
- 712dfbe: Improve interface action validation
- Updated dependencies [322c5bc]
- Updated dependencies [7160276]
- Updated dependencies [7bdac45]
- Updated dependencies [37eb75b]
- Updated dependencies [7b97128]
- Updated dependencies [76905f5]
- Updated dependencies [20962bc]
- Updated dependencies [052a96b]
- Updated dependencies [ca1fabe]
- Updated dependencies [e48be06]
  - @osdk/api@2.5.0

## 0.13.0-beta.15

### Minor Changes

- 04e664e: readme update and missing changeset for wiring up randomness key

## 0.13.0-beta.14

### Minor Changes

- 9dd5a63: Intermediary links in oac
- e62408b: Fix Maker Rid Generation

### Patch Changes

- Updated dependencies [b7edfb5]
  - @osdk/api@2.5.0-beta.14

## 0.13.0-beta.13

### Minor Changes

- d815339: Allow interface props to be excluded from actions

### Patch Changes

- @osdk/api@2.5.0-beta.13

## 0.13.0-beta.12

### Minor Changes

- f025f30: Fix semantic merge conflict
- 7f0ad5c: Check extended interfaces when verifying interface actions

### Patch Changes

- @osdk/api@2.5.0-beta.12

## 0.13.0-beta.11

### Minor Changes

- 5fd12eb: Fix interface display metadata to include icon
- f2dbc3d: Fix test from semantic merge conflict
- 712dfbe: Improve interface action validation

### Patch Changes

- Updated dependencies [7b97128]
  - @osdk/api@2.5.0-beta.11

## 0.13.0-beta.10

### Minor Changes

- 11fd3fb: Add api name validation for object types

### Patch Changes

- @osdk/api@2.5.0-beta.10

## 0.13.0-beta.9

### Minor Changes

- 1b60527: Remove foundry.ontologies dependency

### Patch Changes

- @osdk/api@2.5.0-beta.9

## 0.13.0-beta.8

### Minor Changes

- f9b6dc4: Write value types to ontology IR file
- b1c99bf: Revert .js -> .ts extension for codegen

### Patch Changes

- Updated dependencies [ca1fabe]
  - @osdk/api@2.5.0-beta.8

## 0.13.0-beta.7

### Minor Changes

- 6da8fd2: Write value type IR correctly

## 0.13.0-beta.6

### Minor Changes

- 07083e1: Action submission conditions can have custom metadata

### Patch Changes

- @osdk/api@2.5.0-beta.7

## 0.13.0-beta.5

### Minor Changes

- cbcf2ad: Add branching support
- 04fe946: Use block data type for imports

### Patch Changes

- @osdk/api@2.5.0-beta.6

## 0.13.0-beta.4

### Minor Changes

- a00d2ed: Update Platform SDK dependencies
- a96d89e: Update Platform SDK dependencies

### Patch Changes

- @osdk/api@2.5.0-beta.4

## 0.13.0-beta.3

### Minor Changes

- 7bdac45: Update Platform SDK dependency

### Patch Changes

- Updated dependencies [7bdac45]
- Updated dependencies [20962bc]
- Updated dependencies [e48be06]
  - @osdk/api@2.5.0-beta.3

## 0.13.0-beta.2

### Minor Changes

- 7cdab1d: Update platform sdk dependencies
- 40d43c2: Make codegen TS compiler friendly
- 5f72188: Fix object action param optionality for non-array props

### Patch Changes

- Updated dependencies [7160276]
- Updated dependencies [76905f5]
  - @osdk/api@2.5.0-beta.2

## 0.12.0-beta.21

### Minor Changes

- 3ff44da: Existing OTs as action parameters in OAC
- 367cc04: Add default value and constraint overrides to OAC action parameters
- 283905f: Better error message for invalid parameter ordering on actions
- e62a890: Custom submission options for OAC actions
- 94beece: Enable "other" option for oneOf constraints on OAC actions

### Patch Changes

- @osdk/api@2.4.0-beta.17

## 0.12.0-beta.20

### Minor Changes

- 45ed433: Target objects are configurable and default parameter ordering is better in OAC actions

## 0.12.0-beta.19

### Patch Changes

- @osdk/api@2.4.0-beta.16

## 0.12.0-beta.18

### Patch Changes

- @osdk/api@2.4.0-beta.15

## 0.12.0-beta.17

### Minor Changes

- f1f587b: Support custom parameters in OAC actions
- 641bc0c: Fix create-or-modify non parameter mapped property bug
- 25bae67: OAC modify object actions set parameter defaults to match the selected object
- 5c76e33: Trim value type before putting it in SPT IR

### Patch Changes

- @osdk/api@2.4.0-beta.14

## 0.12.0-beta.16

### Patch Changes

- Updated dependencies [4bc848b]
  - @osdk/api@2.4.0-beta.13

## 0.12.0-beta.15

### Minor Changes

- a1736f3: Actions can have properties that are not mapped to parameters
- c621638: Create or Modify actions in OAC

### Patch Changes

- @osdk/api@2.4.0-beta.12

## 0.12.0-beta.14

### Minor Changes

- d384b4c: Add custom display names and descriptions for action parameters in OAC
- 02be685: Remove jiti

### Patch Changes

- @osdk/api@2.4.0-beta.11

## 0.12.0-beta.13

### Minor Changes

- ed41359: Action sections in OAC

## 0.12.0-beta.12

### Minor Changes

- 666787f: fix text allowed values name

### Patch Changes

- @osdk/api@2.4.0-beta.10

## 0.12.0-beta.11

### Minor Changes

- b0955ef: Action parameter defaults and table forms
- defc2cf: change parameterLevelValidations to parameterConfiguration

### Patch Changes

- Updated dependencies [9101bad]
  - @osdk/api@2.4.0-beta.9

## 0.12.0-beta.10

### Minor Changes

- 4dffba1: Support extended string params in actions

### Patch Changes

- Updated dependencies [9f4fe9e]
  - @osdk/api@2.4.0-beta.8

## 0.12.0-beta.9

### Minor Changes

- ac0029e: Improve CRUD actions customization

### Patch Changes

- @osdk/api@2.4.0-beta.7

## 0.12.0-beta.8

### Minor Changes

- 764e5f1: Add marking constraints

### Patch Changes

- @osdk/api@2.4.0-beta.6

## 0.12.0-beta.7

### Minor Changes

- 75fbd09: Type classes and list validation for object actions

### Patch Changes

- @osdk/api@2.4.0-beta.5

## 0.12.0-beta.6

### Minor Changes

- 3dcd9b1: Modify object actions cannot modify pk

## 0.12.0-beta.5

### Minor Changes

- a01b8d4: Revert import block data changes

### Patch Changes

- @osdk/api@2.4.0-beta.4

## 0.12.0-beta.4

### Minor Changes

- e647175: Skip struct props for object create + modify actions

## 0.12.0-beta.3

### Minor Changes

- 988bf66: Use block data type for imports

### Patch Changes

- @osdk/api@2.4.0-beta.3

## 0.12.0-beta.2

### Minor Changes

- 8bb08eb: Turn on module cache
- 5994895: Interface struct properties are skipped in crud actions

### Patch Changes

- Updated dependencies [29d2ada]
- Updated dependencies [8c95154]
- Updated dependencies [c32dcf2]
  - @osdk/api@2.4.0-beta.2

## 0.11.0-beta.14

### Minor Changes

- 79cb6eb: Fix imported interface properties in IR

### Patch Changes

- @osdk/api@2.3.0-beta.10

## 0.11.0-beta.13

### Minor Changes

- 402aa94: Use namespaced api names for interface properties

## 0.11.0-beta.12

### Minor Changes

- 1847bcb: Support arrays in OT props
- 3ae0cfd: Remove import/dep from codegen
- 7d232fb: Added searchable field to interface definitions
- 60b0029: Check extended interfaces when validating object property mapping
- 0abeec3: Make codegen prettier

### Patch Changes

- @osdk/api@2.3.0-beta.9

## 0.11.0-beta.11

### Patch Changes

- Updated dependencies [12d599f]
  - @osdk/api@2.3.0-beta.8

## 0.11.0-beta.10

### Minor Changes

- 99b90af: Fix dependency injection to use OAC version and not maker version

## 0.11.0-beta.9

### Minor Changes

- 508ecd6: Improve defineLink syntax

## 0.11.0-beta.8

### Minor Changes

- f8db93d: improve media upload (beta)

### Patch Changes

- Updated dependencies [f8db93d]
  - @osdk/api@2.3.0-beta.7

## 0.11.0-beta.7

### Minor Changes

- 77674dd: Remove alias
- c305ea8: link id sanitation
- ab2ef22: Fix dependency injection
- 1608ba5: Make modify action params optional
- dc7d201: Fix geopoint bug

### Patch Changes

- @osdk/api@2.3.0-beta.6

## 0.11.0-beta.6

### Minor Changes

- e34ee12: Add output dir CLI flag
- 37cdc7e: Propagate interface extension to static objects
- 982d3ce: Start tracking and injecting OAC dependencies

### Patch Changes

- Updated dependencies [e8c4aed]
  - @osdk/api@2.3.0-beta.5

## 0.11.0-beta.5

### Minor Changes

- 4d13e4d: Restricted view datasources in OAC
- b8d0526: OAC edit only properties for dataset backed objects
- 0d5feaa: Docs for maker
- e20c5d6: Validate edit only properties are not primary keys
- 27cdb1d: Adding concrete object value type support
- c177bf0: Update property default typeClasses to match SPT default typeClasses

### Patch Changes

- Updated dependencies [43c5547]
- Updated dependencies [ef46ed6]
- Updated dependencies [3b5ccaa]
  - @osdk/api@2.3.0-beta.4

## 0.11.0-beta.4

### Minor Changes

- 474f4ca: Group permissions for OAC actions

### Patch Changes

- @osdk/api@2.3.0-beta.3

## 0.11.0-beta.3

### Minor Changes

- 3c840d9: Support array type SPTs in legacy OAC importing workflow

## 0.11.0-beta.2

### Minor Changes

- fea541b: Support old importing workflow

### Patch Changes

- @osdk/api@2.3.0-beta.2

## 0.10.0

### Patch Changes

- 322c5bc: Simulated release
- 6eeb423: Simple create and modify actions for interfaces
- 4a02a1f: Make string more configurable
- 38ad25b: Make properties nullable
- 489ea17: Wire through nullability to SPT
- 1a09a8e: Enforce that struct, mediaReference, and GTSR type SPTs cannot have render hints
- 12843cb: Add ability to load all underlying properties of an interface.
- a08bdfb: Support stream datasources in OAC
- 0a41cec: Support optional interface properties
- 18ba34f: Adds the ability to generate and execute functions at pinned versions
- 21e33a5: Upgrade consola to 3.4.0
- 63b2e63: Update Platform SDK Dependencies
- 75f6b51: Propagate required/optional fields from interfaces to actions
- 7416ce4: Update Platform SDK Dependencies
- 10da391: Links as Code
- c0aa106: Add visibility field to shared property type in maker
- 7bb2971: OAC support for actions on objects
- f1b1188: OAC Imports v0
- cff551a: Update OAC codegen
- 5745d3e: Make Object PKs singular
- ca5d920: Fix marking/list validation
- e287c5b: Support marking types in SPTs in Interfaces in Actions
- 5e8e839: Bump OMS API to include links in ontology IR
- 24c4b12: Add geotime and mediaset datasources to OAC
- 889e84b: Release
- 395ae07: Actions as code
- 94663ab: Change the status definitions for objects and add validation for timestamps.
- 791e655: Add support for geoshape and geohash action parameters.
- f12caa4: Fix marking list for modify action
- 317b555: Release
- c7f7a99: Export defineOntology method
- 8f67e1e: OAC Struct Property Field Mapping Support
- cc380b5: Use the latest Platform APIs
- 340ba44: Fix test
- Updated dependencies [322c5bc]
- Updated dependencies [c6bee50]
- Updated dependencies [7416ce4]
- Updated dependencies [7170fd1]
- Updated dependencies [12843cb]
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
- Updated dependencies [488b51c]
- Updated dependencies [71462e9]
- Updated dependencies [fccd9ac]
- Updated dependencies [5665b18]
- Updated dependencies [46cede4]
- Updated dependencies [761e69d]
- Updated dependencies [889e84b]
- Updated dependencies [a6e5f89]
- Updated dependencies [ed69666]
- Updated dependencies [4183a55]
- Updated dependencies [70b4464]
- Updated dependencies [791e655]
- Updated dependencies [317b555]
- Updated dependencies [63b2e63]
- Updated dependencies [a146ce4]
- Updated dependencies [3d0ab11]
- Updated dependencies [805df40]
- Updated dependencies [5467a0f]
- Updated dependencies [63b2e63]
  - @osdk/api@2.2.0

## 0.10.0-beta.25

### Minor Changes

- 1a09a8e: Enforce that struct, mediaReference, and GTSR type SPTs cannot have render hints
- 8f67e1e: OAC Struct Property Field Mapping Support

## 0.10.0-beta.24

### Patch Changes

- Updated dependencies [4183a55]
  - @osdk/api@2.2.0-beta.23

## 0.10.0-beta.23

### Minor Changes

- 18ba34f: Adds the ability to generate and execute functions at pinned versions
- f1b1188: OAC Imports v0

### Patch Changes

- Updated dependencies [18ba34f]
  - @osdk/api@2.2.0-beta.22

## 0.10.0-beta.22

### Minor Changes

- 75f6b51: Propagate required/optional fields from interfaces to actions

## 0.10.0-beta.21

### Minor Changes

- 94663ab: Change the status definitions for objects and add validation for timestamps.
- f12caa4: Fix marking list for modify action
- 317b555: Release

### Patch Changes

- Updated dependencies [317b555]
  - @osdk/api@2.2.0-beta.21

## 0.10.0-beta.20

### Minor Changes

- 7bb2971: OAC support for actions on objects
- ca5d920: Fix marking/list validation
- 889e84b: Release

### Patch Changes

- Updated dependencies [889e84b]
  - @osdk/api@2.2.0-beta.20

## 0.10.0-beta.19

### Minor Changes

- e287c5b: Support marking types in SPTs in Interfaces in Actions

### Patch Changes

- @osdk/api@2.2.0-beta.19

## 0.10.0-beta.18

### Minor Changes

- 489ea17: Wire through nullability to SPT

### Patch Changes

- Updated dependencies [56aa502]
  - @osdk/api@2.2.0-beta.18

## 0.10.0-beta.17

### Minor Changes

- 6eeb423: Simple create and modify actions for interfaces
- 38ad25b: Make properties nullable
- 5745d3e: Make Object PKs singular
- 791e655: Add support for geoshape and geohash action parameters.

### Patch Changes

- Updated dependencies [c6bee50]
- Updated dependencies [abe4897]
- Updated dependencies [70b4464]
- Updated dependencies [791e655]
  - @osdk/api@2.2.0-beta.17

## 0.10.0-beta.16

### Minor Changes

- 4a02a1f: Make string more configurable
- c0aa106: Add visibility field to shared property type in maker
- 395ae07: Actions as code
- c7f7a99: Export defineOntology method

### Patch Changes

- @osdk/api@2.2.0-beta.16

## 0.10.0-beta.15

### Minor Changes

- 24c4b12: Add geotime and mediaset datasources to OAC
- cc380b5: Use the latest Platform APIs

### Patch Changes

- Updated dependencies [ed69666]
  - @osdk/api@2.2.0-beta.15

## 0.10.0-beta.14

### Minor Changes

- a08bdfb: Support stream datasources in OAC

### Patch Changes

- Updated dependencies [6abf078]
  - @osdk/api@2.2.0-beta.14

## 0.10.0-beta.13

### Patch Changes

- Updated dependencies [488b51c]
- Updated dependencies [71462e9]
  - @osdk/api@2.2.0-beta.13

## 0.10.0-beta.12

### Patch Changes

- @osdk/api@2.2.0-beta.12

## 0.10.0-beta.11

### Minor Changes

- 10da391: Links as Code
- 340ba44: Fix test

### Patch Changes

- Updated dependencies [7170fd1]
  - @osdk/api@2.2.0-beta.11

## 0.10.0-beta.10

### Minor Changes

- 0a41cec: Support optional interface properties
- 5e8e839: Bump OMS API to include links in ontology IR

### Patch Changes

- Updated dependencies [23ea0e4]
- Updated dependencies [46cede4]
  - @osdk/api@2.2.0-beta.10

## 0.10.0-beta.9

### Minor Changes

- 12843cb: Add ability to load all underlying properties of an interface.

### Patch Changes

- Updated dependencies [12843cb]
- Updated dependencies [f82767c]
  - @osdk/api@2.2.0-beta.9

## 0.10.0-beta.8

### Minor Changes

- 63b2e63: Update Platform SDK Dependencies

### Patch Changes

- Updated dependencies [0e874b1]
- Updated dependencies [63b2e63]
- Updated dependencies [26c2d95]
- Updated dependencies [63b2e63]
- Updated dependencies [63b2e63]
  - @osdk/api@2.2.0-beta.8

## 0.10.0-beta.7

### Minor Changes

- 21e33a5: Upgrade consola to 3.4.0
- 7416ce4: Update Platform SDK Dependencies

### Patch Changes

- Updated dependencies [7416ce4]
- Updated dependencies [7416ce4]
- Updated dependencies [805df40]
  - @osdk/api@2.2.0-beta.7

## 0.10.0-beta.6

### Patch Changes

- Updated dependencies [cddfbf9]
- Updated dependencies [a6e5f89]
  - @osdk/api@2.2.0-beta.6

## 0.10.0-beta.5

### Patch Changes

- @osdk/api@2.2.0-beta.5

## 0.10.0-beta.4

### Patch Changes

- @osdk/api@2.2.0-beta.4

## 0.10.0-beta.3

### Patch Changes

- Updated dependencies [761e69d]
  - @osdk/api@2.2.0-beta.3

## 0.10.0-beta.2

### Patch Changes

- Updated dependencies [fccd9ac]
  - @osdk/api@2.2.0-beta.2

## 0.9.0

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.
- f0b519d: Upgrade to vitest 3 and vite 6
- 1812118: Add geotime support for OSDK.
- bc1761c: Update platform API dependencies.
- bb8b219: Use new external packages instead of the internal ones.
- 44e62f6: Updating fetch for auth and other packages.
- 91cfa3a: Fixing url parsing for client.
- c9e855d: Allowing interfaces to extend other interfaces for ontology as code.
- 94463b6: Support objects as code
- 9d35a1f: Remove unused imports
- 8d8bebb: Fix nullability
- 7a95618: Generate new OMS APIs
- c9da74c: Improves code quality by fixing linting errors
- abfe4b3: Add support for reading struct properties.
- caf1abc: Support generating linked products for marketplace
- cd8d657: Support importing foreign SPTs
- b8a1a58: Add nullability to markings because of course they need to be nullable. This sucks in the data model, I should talk to the ontology team about this.
- b0544d4: Add additional marking configuration
- 9018dc2: Updating platform api dependencies.
- f569124: Add media reference to maker
- 0a4f131: Fix value types so they actually serialize correctly.
- 8e5e49a: Add optional link constraints
- 6b6c8a1: Updates gateway endpoints and changes fetchContents for attachments to return a response
- 2b35ed4: Structs in maker package
- 09eaf24: Update to latest platform sdks
- 06e66dc: Making interface type status configurable
- d665147: Update platform sdk deps

### Patch Changes

- Updated dependencies [966d408]
- Updated dependencies [cddc196]
- Updated dependencies [d794c19]
- Updated dependencies [05febf4]
- Updated dependencies [55c05f2]
- Updated dependencies [0dc40b0]
- Updated dependencies [25fd9f0]
- Updated dependencies [11a05cc]
- Updated dependencies [7865cb6]
- Updated dependencies [9c4efe6]
- Updated dependencies [3ea2e79]
- Updated dependencies [1812118]
- Updated dependencies [bc1761c]
- Updated dependencies [656f975]
- Updated dependencies [f1145ff]
- Updated dependencies [f446d0c]
- Updated dependencies [c80ca45]
- Updated dependencies [bb8b219]
- Updated dependencies [03f95eb]
- Updated dependencies [1a89f23]
- Updated dependencies [9d35a1f]
- Updated dependencies [c691c8b]
- Updated dependencies [749cf69]
- Updated dependencies [f03e39f]
- Updated dependencies [11088aa]
- Updated dependencies [72c1905]
- Updated dependencies [9298f75]
- Updated dependencies [f34b3d4]
- Updated dependencies [acbfab9]
- Updated dependencies [62c1d63]
- Updated dependencies [3c9ac22]
- Updated dependencies [1591f04]
- Updated dependencies [03e1941]
- Updated dependencies [abfe4b3]
- Updated dependencies [b79becf]
- Updated dependencies [27866a8]
- Updated dependencies [e5fe7c0]
- Updated dependencies [1b2e8c9]
- Updated dependencies [9f3807c]
- Updated dependencies [0c56d21]
- Updated dependencies [e548b9b]
- Updated dependencies [ee6224b]
- Updated dependencies [1dc0228]
- Updated dependencies [6c60414]
- Updated dependencies [5fe2c8d]
- Updated dependencies [d3b3f35]
- Updated dependencies [785f663]
- Updated dependencies [6b6c8a1]
- Updated dependencies [c537e2d]
- Updated dependencies [73fa373]
- Updated dependencies [8e6a5f4]
- Updated dependencies [2d5e648]
- Updated dependencies [31e7d70]
- Updated dependencies [f19da8e]
  - @osdk/api@2.1.0

## 0.9.0-beta.31

### Minor Changes

- bb8b219: Use new external packages instead of the internal ones.

### Patch Changes

- Updated dependencies [bb8b219]
- Updated dependencies [ee6224b]
- Updated dependencies [5fe2c8d]
  - @osdk/api@2.1.0-beta.31

## 0.9.0-beta.30

### Patch Changes

- Updated dependencies [966d408]
- Updated dependencies [f03e39f]
- Updated dependencies [1591f04]
- Updated dependencies [785f663]
- Updated dependencies [2d5e648]
  - @osdk/api@2.1.0-beta.30

## 0.9.0-beta.29

### Patch Changes

- Updated dependencies [f1145ff]
  - @osdk/api@2.1.0-beta.29

## 0.9.0-beta.28

### Patch Changes

- Updated dependencies [f446d0c]
  - @osdk/api@2.1.0-beta.28

## 0.9.0-beta.27

### Patch Changes

- @osdk/api@2.1.0-beta.27

## 0.9.0-beta.26

### Minor Changes

- 44e62f6: Updating fetch for auth and other packages.
- 94463b6: Support objects as code

### Patch Changes

- Updated dependencies [7865cb6]
- Updated dependencies [9c4efe6]
- Updated dependencies [f19da8e]
  - @osdk/api@2.1.0-beta.26

## 0.9.0-beta.25

### Patch Changes

- Updated dependencies [c80ca45]
  - @osdk/api@2.1.0-beta.25

## 0.9.0-beta.24

### Patch Changes

- Updated dependencies [03f95eb]
- Updated dependencies [c691c8b]
- Updated dependencies [3c9ac22]
  - @osdk/api@2.1.0-beta.24

## 0.9.0-beta.23

### Minor Changes

- f0b519d: Upgrade to vitest 3 and vite 6
- 7a95618: Generate new OMS APIs
- d665147: Update platform sdk deps

### Patch Changes

- Updated dependencies [d794c19]
- Updated dependencies [62c1d63]
  - @osdk/api@2.1.0-beta.23

## 0.9.0-beta.22

### Minor Changes

- 8d8bebb: Fix nullability
- c9da74c: Improves code quality by fixing linting errors

### Patch Changes

- Updated dependencies [73fa373]
  - @osdk/api@2.1.0-beta.22

## 0.9.0-beta.21

### Patch Changes

- Updated dependencies [3ea2e79]
- Updated dependencies [656f975]
- Updated dependencies [f34b3d4]
  - @osdk/api@2.1.0-beta.21

## 0.9.0-beta.20

### Minor Changes

- 9d35a1f: Remove unused imports
- abfe4b3: Add support for reading struct properties.
- 06e66dc: Making interface type status configurable

### Patch Changes

- Updated dependencies [9d35a1f]
- Updated dependencies [abfe4b3]
- Updated dependencies [c537e2d]
  - @osdk/api@2.1.0-beta.20

## 0.9.0-beta.19

### Patch Changes

- Updated dependencies [cddc196]
  - @osdk/api@2.1.0-beta.19

## 0.9.0-beta.18

### Patch Changes

- @osdk/api@2.1.0-beta.18

## 0.9.0-beta.17

### Patch Changes

- @osdk/api@2.1.0-beta.17

## 0.9.0-beta.16

### Minor Changes

- 0a4f131: Fix value types so they actually serialize correctly.
- 8e5e49a: Add optional link constraints

### Patch Changes

- Updated dependencies [e5fe7c0]
  - @osdk/api@2.1.0-beta.16

## 0.9.0-beta.15

### Patch Changes

- @osdk/api@2.1.0-beta.15

## 0.9.0-beta.14

### Minor Changes

- 91cfa3a: Fixing url parsing for client.
- 6b6c8a1: Updates gateway endpoints and changes fetchContents for attachments to return a response

### Patch Changes

- Updated dependencies [0c56d21]
- Updated dependencies [6b6c8a1]
  - @osdk/api@2.1.0-beta.14

## 0.9.0-beta.13

### Patch Changes

- @osdk/api@2.1.0-beta.13

## 0.9.0-beta.12

### Patch Changes

- @osdk/api@2.1.0-beta.12

## 0.9.0-beta.11

### Minor Changes

- bc1761c: Update platform API dependencies.
- caf1abc: Support generating linked products for marketplace

### Patch Changes

- Updated dependencies [bc1761c]
- Updated dependencies [9298f75]
  - @osdk/api@2.1.0-beta.11

## 0.9.0-beta.10

### Patch Changes

- Updated dependencies [11a05cc]
- Updated dependencies [11088aa]
  - @osdk/api@2.1.0-beta.10

## 0.9.0-beta.9

### Patch Changes

- Updated dependencies [acbfab9]
  - @osdk/api@2.1.0-beta.9

## 0.9.0-beta.8

### Minor Changes

- b8a1a58: Add nullability to markings because of course they need to be nullable. This sucks in the data model, I should talk to the ontology team about this.

### Patch Changes

- Updated dependencies [9f3807c]
  - @osdk/api@2.1.0-beta.8

## 0.9.0-beta.7

### Minor Changes

- cd8d657: Support importing foreign SPTs
- 9018dc2: Updating platform api dependencies.

### Patch Changes

- Updated dependencies [27866a8]
- Updated dependencies [31e7d70]
  - @osdk/api@2.1.0-beta.7

## 0.9.0-beta.6

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.

### Patch Changes

- Updated dependencies [25fd9f0]
- Updated dependencies [1a89f23]
- Updated dependencies [1b2e8c9]
  - @osdk/api@2.1.0-beta.6

## 0.9.0-beta.5

### Minor Changes

- b0544d4: Add additional marking configuration
- 2b35ed4: Structs in maker package

### Patch Changes

- @osdk/api@2.1.0-beta.5

## 0.9.0-beta.4

### Patch Changes

- Updated dependencies [0dc40b0]
- Updated dependencies [1dc0228]
- Updated dependencies [d3b3f35]
  - @osdk/api@2.1.0-beta.4

## 0.9.0-beta.3

### Minor Changes

- 09eaf24: Update to latest platform sdks

### Patch Changes

- Updated dependencies [05febf4]
- Updated dependencies [b79becf]
  - @osdk/api@2.1.0-beta.3

## 0.9.0-beta.2

### Patch Changes

- @osdk/api@2.1.0-beta.2

## 0.9.0-beta.1

### Minor Changes

- 1812118: Add geotime support for OSDK.

### Patch Changes

- Updated dependencies [1812118]
- Updated dependencies [72c1905]
- Updated dependencies [6c60414]
- Updated dependencies [8e6a5f4]
  - @osdk/api@2.1.0-beta.1

## 0.9.0-beta.0

### Minor Changes

- c9e855d: Allowing interfaces to extend other interfaces for ontology as code.
- f569124: Add media reference to maker

### Patch Changes

- Updated dependencies [0dc40b0]
- Updated dependencies [03e1941]
- Updated dependencies [e548b9b]
  - @osdk/api@2.1.0-beta.0

## 0.8.0

### Minor Changes

- b916b3d: Fix api namespacing of shared property types
- 465660b: Add icon support to maker
- dc25fb4: Further simplify types
- 1252d94: ESM Only
- ee39a61: Adding value types to ont as code
- 6e3726b: Support namespacing maker generate ontologies
- 465660b: Fix double namespacing bug.
- ee39a61: Add support for gotham mapping of SPTs in maker
- 7282cf6: Add Default Type Classes to maker
- d4d6605: Audited and cleaned up deps
- 64818dc: Drop support for internal gateway package

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [3affe49]
- Updated dependencies [b946e00]
- Updated dependencies [a2c7b37]
- Updated dependencies [0ea1a17]
- Updated dependencies [dc25fb4]
- Updated dependencies [9b0617d]
- Updated dependencies [94105a5]
- Updated dependencies [dc25fb4]
- Updated dependencies [a2c7b37]
- Updated dependencies [dc25fb4]
- Updated dependencies [1252d94]
- Updated dependencies [e6ade8b]
- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
- Updated dependencies [a2c7b37]
- Updated dependencies [795777a]
- Updated dependencies [fe9547e]
- Updated dependencies [95f9247]
- Updated dependencies [d2f75f9]
- Updated dependencies [b7cd0a1]
- Updated dependencies [512ee35]
- Updated dependencies [e86c505]
- Updated dependencies [dc25fb4]
- Updated dependencies [0ce2858]
- Updated dependencies [dc25fb4]
- Updated dependencies [7c2db00]
- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
- Updated dependencies [fc28eae]
- Updated dependencies [56df85a]
- Updated dependencies [dc25fb4]
- Updated dependencies [a9923f3]
- Updated dependencies [1f633f7]
- Updated dependencies [d4d6605]
- Updated dependencies [64818dc]
  - @osdk/api@2.0.0

## 0.8.0-beta.12

### Minor Changes

- dc25fb4: Further simplify types

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
  - @osdk/api@2.0.0-beta.16

## 0.8.0-beta.11

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/api@2.0.0-beta.15

## 0.8.0-beta.10

### Minor Changes

- d4d6605: Audited and cleaned up deps

### Patch Changes

- Updated dependencies [a2c7b37]
- Updated dependencies [fe9547e]
- Updated dependencies [1f633f7]
- Updated dependencies [d4d6605]
  - @osdk/api@2.0.0-beta.14

## 0.8.0-beta.9

### Patch Changes

- Updated dependencies [1488144]
- Updated dependencies [c28792e]
- Updated dependencies [26ee3bd]
- Updated dependencies [6ab5d2e]
  - @osdk/api@2.0.0-beta.13

## 0.8.0-beta.8

### Patch Changes

- @osdk/api@2.0.0-beta.12

## 0.8.0-beta.7

### Patch Changes

- @osdk/api@2.0.0-beta.11

## 0.8.0-beta.6

### Minor Changes

- 1252d94: ESM Only
- 465660b: Fix double namespacing bug.

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
- Updated dependencies [1252d94]
- Updated dependencies [56df85a]
  - @osdk/api@2.0.0-beta.10

## 0.8.0-beta.5

### Patch Changes

- Updated dependencies [b946e00]
  - @osdk/api@2.0.0-beta.9

## 0.8.0-beta.4

### Minor Changes

- 7282cf6: Add Default Type Classes to maker
- 64818dc: Drop support for internal gateway package

### Patch Changes

- @osdk/api@2.0.0-beta.8

## 0.8.0-beta.3

### Minor Changes

- b916b3d: Fix api namespacing of shared property types
- 465660b: Add icon support to maker
- ee39a61: Add support for gotham mapping of SPTs in maker

### Patch Changes

- Updated dependencies [9b0617d]
  - @osdk/api@2.0.0-beta.7

## 0.8.0-beta.2

### Patch Changes

- Updated dependencies [3affe49]
- Updated dependencies [5d6d5ab]
  - @osdk/api@2.0.0-beta.6
  - @osdk/gateway@2.5.0-beta.0

## 0.8.0-beta.1

### Minor Changes

- 6e3726b: Support namespacing maker generate ontologies

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/api@1.10.0-beta.1

## 0.8.0-beta.0

### Patch Changes

- Updated dependencies [7c2db00]
  - @osdk/api@1.10.0-beta.0

## 0.7.0

### Minor Changes

- 1112433: Adds support for defining interface link constraints
- 388dba9: Change all internal dependencies to be tilde not caret
- dc93aa6: Update ontology as code interface link types to reflect internal expectations of ontology integration
- 1112433: Align syntax to be easier to read
- bc89b62: Spelling fixes and spell check in CI

### Patch Changes

- Updated dependencies [388dba9]
- Updated dependencies [d8edf10]
- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/api@1.9.0
  - @osdk/gateway@2.4.0

## 0.7.0-beta.2

### Minor Changes

- bc89b62: Spelling fixes and spell check in CI

### Patch Changes

- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/api@1.9.0-beta.1
  - @osdk/gateway@2.4.0-beta.0

## 0.7.0-beta.1

### Minor Changes

- 388dba9: Change all internal dependencies to be tilde not caret
- dc93aa6: Update ontology as code interface link types to reflect internal expectations of ontology integration

### Patch Changes

- Updated dependencies [388dba9]
  - @osdk/api@1.9.0-beta.0

## 0.7.0-beta.0

### Minor Changes

- 1112433: Adds support for defining interface link constraints
- 1112433: Align syntax to be easier to read

## 0.6.0

### Minor Changes

- c9f3214: Adds support for latest api definitions

### Patch Changes

- Updated dependencies [c9f3214]
- Updated dependencies [c9f3214]
  - @osdk/gateway@2.3.0
  - @osdk/api@1.8.0

## 0.5.0

### Patch Changes

- @osdk/api@1.7.0
