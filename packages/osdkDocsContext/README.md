# OSDK Documentation Context

This package provides utilities for working with OSDK examples and creates a nested hierarchy structure from the flat TYPESCRIPT_OSDK_EXAMPLES.

## Features

- **Original Structure**: Re-exports `TYPESCRIPT_OSDK_EXAMPLES` from `@osdk/typescript-sdk-docs-examples`
- **Static Nested Structure**: Provides `OSDK_DOCS_CONTEXT` with template variations nested under their base names (generated at build time)
- **Utility Classes**: Helper methods for working with both flat and nested structures
- **Version Fallback**: Semantic version-based fallback logic - requesting examples from version 2.4.0 includes examples from 2.0.0 and 2.1.0

## Build Process

The package uses a build-time generation approach for optimal performance:

1. **Generation Script**: `scripts/generateNestedContext.ts` processes the source TYPESCRIPT_OSDK_EXAMPLES
2. **Static Output**: Creates `src/generated/osdkDocsContext.ts` with the nested structure
3. **Build Integration**: The generation runs automatically as part of `pnpm build`

## Nested Structure

The package transforms flat template names like:

- `loadGeotimeSeriesPointsSnippet` → remains as-is
- `derivedPropertyNumericExpression_#isUnary` → nested under `derivedPropertyNumericExpression["#isUnary"]`
- `derivedPropertyNumericExpression_^isUnary` → nested under `derivedPropertyNumericExpression["^isUnary"]`

**Why Static Generation?**

- ✅ **Performance**: No runtime transformation overhead
- ✅ **Reliability**: Build fails if source data is malformed
- ✅ **Maintainability**: Generated file can be inspected and versioned
- ✅ **Type Safety**: Full TypeScript support for the nested structure

### Example Structure

```typescript
{
  "kind": "examples",
  "versions": {
    "2.4.0": {
      "examples": {
        "loadGeotimeSeriesPointsSnippet": {
          "filePath": "examples/typescript/2.4.0/loadGeotimeSeriesPointsSnippet.ts",
          "code": "..."
        },
        "derivedPropertyNumericExpression": {
          "#isUnary": {
            "filePath": "examples/typescript/2.4.0/derivedPropertyNumericExpression_#isUnary.ts",
            "code": "..."
          },
          "^isUnary": {
            "filePath": "examples/typescript/2.4.0/derivedPropertyNumericExpression_^isUnary.ts", 
            "code": "..."
          }
        }
      }
    }
  }
}
```

## Usage

```typescript
import {
  NestedOsdkExamplesContext,
  OSDK_DOCS_CONTEXT,
  TYPESCRIPT_OSDK_EXAMPLES,
} from "@osdk/osdkDocsContext";

// Get available versions
const versions = NestedOsdkExamplesContext.getAvailableVersions();

// Check if an example has variations
const hasVariations = NestedOsdkExamplesContext.hasVariations(
  "2.4.0",
  "derivedPropertyNumericExpression",
);

// Get all variations for a base example
const variations = NestedOsdkExamplesContext.getVariations(
  "2.4.0",
  "derivedPropertyNumericExpression",
);

// Get a specific variation
const example = NestedOsdkExamplesContext.getExample("2.4.0", [
  "derivedPropertyNumericExpression",
  "#isUnary",
]);

// Search examples (optionally within a specific version)
const results = NestedOsdkExamplesContext.searchExamples("numeric", "2.4.0");

// Get examples with version fallback information
const examplesWithVersionInfo = NestedOsdkExamplesContext
  .getExamplesWithVersionInfo("2.4.0");

// Convert back to flat structure for compatibility
const flatStructure = NestedOsdkExamplesContext.flatten();
```

### Version Fallback Logic

The package implements semantic version-based fallback:

- **2.4.0**: Includes examples from 2.0.0, 2.1.0, and 2.4.0
- **2.1.0**: Includes examples from 2.0.0 and 2.1.0 (but NOT 2.4.0)
- **2.0.0**: Only includes examples from 2.0.0

```typescript
// When requesting examples for 2.4.0, you get examples from all compatible versions
const examplesFor240 = NestedOsdkExamplesContext.getBaseExamplesForVersion(
  "2.4.0",
); // 70 examples

// Examples from 2.0.0 are accessible when requesting 2.4.0
const example = NestedOsdkExamplesContext.getExample("2.4.0", [
  "loadSingleObjectGuide",
]); // ✅ Found

// But 2.4.0 examples are NOT accessible when requesting 2.1.0
const futureExample = NestedOsdkExamplesContext.getExample("2.1.0", [
  "derivedPropertyNumericExpression",
  "#isUnary",
]); // undefined
```

## Build

```bash
pnpm build
```

This will generate:

- `build/esm/` - ES modules
- `build/cjs/` - CommonJS modules
- `build/types/` - TypeScript declarations
