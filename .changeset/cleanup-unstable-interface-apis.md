---
"@osdk/api": minor
"@osdk/client": patch
"@osdk/generator": patch
"@osdk/generator-converters": minor
---

Clean up unstable interface code: remove the `$__UNSTABLE_useOldInterfaceApis` fetch option and its old `OntologyInterfaces.search`-based code path, consolidate `convertWireToOsdkObjects` / `convertWireToOsdkObjects2` into a single factory backed by `loadMultipleObjectTypes`, and rename `__UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition` / `__UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst` (the latter is generator-internal). The unused `v2` parameter on `wireInterfaceTypeV2ToSdkObjectDefinition` is also removed.
