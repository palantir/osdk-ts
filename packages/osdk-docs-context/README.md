# @osdk/osdk-docs-context

**A public NPM package** that provides convenient access to OSDK TypeScript examples for tooling and documentation purposes.

> 🎯 **Primary Use Case**: This package is designed specifically for **MCP servers** and other external tools that need structured access to OSDK code examples without depending on internal monorepo packages.

## Purpose

This package exists as a **separate public package** to:

- **🔑 Enable MCP Server Integration**: Provide a stable, public API that MCP servers can import to access OSDK examples
- **📦 Avoid Internal Dependencies**: External tools don't need to depend on private monorepo packages like `@osdk/typescript-sdk-docs-examples`
- **🏗️ Stable Public API**: Maintain consistent versioning and API surface independent of internal refactoring
- **🎯 Dual Format Support**: Export examples in both flat and nested structures for different use cases
- **⚡ Performance Optimized**: Pre-generated nested structures avoid runtime transformation overhead

## Two Export Formats for Different Use Cases

This public package exports OSDK examples in **two complementary formats**:

### 1. **Flat Structure** (`TYPESCRIPT_OSDK_EXAMPLES`)
- **Direct re-export** from internal `@osdk/typescript-sdk-docs-examples`
- **Use case**: Simple access when you know exact template names
- **Format**: `{ "2.4.0": { "examples": { "templateName_variation": {...} } } }`

### 2. **Nested Structure** (`OSDK_DOCS_CONTEXT`)
- **Hierarchical organization** with variations nested under base templates
- **Pre-generated at build time** for optimal performance
- **Use case**: MCP servers, documentation tools, exploration interfaces
- **Format**: Base templates contain variation objects like `{ "#condition": {...}, "^condition": {...} }`

### Key Features

- **🌐 Public NPM Package**: Published to npmjs.org with `"access": "public"`
- **📚 Comprehensive Examples**: All OSDK TypeScript code examples with full context
- **🔄 Version Fallback Logic**: Semantic version-based inheritance (2.4.0 includes 2.0.0, 2.1.0, and 2.4.0)
- **🛠️ Rich Utility API**: Helper methods for searching, filtering, and accessing examples
- **⚡ Build-Time Generation**: Nested structure pre-computed for runtime performance

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

### Installation

```bash
npm install @osdk/osdk-docs-context
# or
pnpm add @osdk/osdk-docs-context
```

### Basic Usage (MCP Servers)

```typescript
import {
  NestedOsdkExamplesContext,
  OSDK_DOCS_CONTEXT,
  TYPESCRIPT_OSDK_EXAMPLES,
} from "@osdk/osdk-docs-context";

// 🎯 Perfect for MCP servers - get all available OSDK versions
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

### MCP Server Integration

This package is specifically designed to be consumed by MCP servers:

```typescript
// MCP server can directly import this public package
import { NestedOsdkExamplesContext, TYPESCRIPT_OSDK_EXAMPLES } from "@osdk/osdk-docs-context";

// Provide OSDK examples to LLMs through MCP protocol
function getOsdkExamples(version: string, templateName?: string) {
  if (templateName) {
    // Get specific example with all its variations
    return NestedOsdkExamplesContext.getExample(version, [templateName]);
  } else {
    // Get all examples for a version (with fallback logic)
    return NestedOsdkExamplesContext.getExamplesWithVersionInfo(version);
  }
}

// Search functionality for LLM queries
function searchOsdkExamples(query: string, version?: string) {
  return NestedOsdkExamplesContext.searchExamples(query, version);
}
```

**Benefits for MCP Servers:**

- ✅ **No internal dependencies**: Only depends on public packages
- ✅ **Stable API**: Won't break when internal monorepo changes
- ✅ **Rich metadata**: Each example includes file paths, code, and variation info
- ✅ **Version awareness**: Semantic version fallback logic built-in
- ✅ **Performance**: Pre-generated structures, no runtime overhead

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
