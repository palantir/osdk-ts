---
"@osdk/api": minor
"@osdk/foundry-sdk-generator": patch
"@osdk/generator": patch
"@osdk/generator-converters": minor
---

Add types for function-backed action return values: `ActionMetadata.returnType` (an `ActionDataTypeDefinition`), the `ActionResult` namespace, `ActionReturnValue`, and a `ReturnValue` type parameter on `ActionEditResponse` and `ActionReturnTypeForOptions` (defaults keep existing types unchanged). The action metadata converter now fills in `returnType` and omits return types the OSDK cannot represent; the SDK generator's metadata resolver warns about them.
