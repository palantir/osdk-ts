# @osdk/osdk-docs-context

A public NPM package that provides structured access to OSDK TypeScript code examples organized by version, with template variations for different usage contexts.

## Purpose

This package provides OSDK code examples in two formats:

- **Flat structure**: Direct access when you know exact template names
- **Nested structure**: Hierarchical organization with variations grouped under base templates

## What are Template Variations?

Many OSDK templates have different code examples based on properties or conditions. For example:

- `derivedPropertyNumericExpression` (base template)
  - `#isUnary` variation - shows unary numeric operations
  - `^isUnary` variation - shows non-unary numeric operations

This allows you to see different code contexts for the same concept.

## Installation

```bash
npm install @osdk/osdk-docs-context
# or
pnpm add @osdk/osdk-docs-context
```

## Usage

### Basic Example Access

```typescript
import {
  NestedOsdkExamplesContext,
  OSDK_DOCS_CONTEXT,
} from "@osdk/osdk-docs-context";

// Get all available OSDK versions
const versions = NestedOsdkExamplesContext.getAvailableVersions();

// Get a simple template (no variations)
const example = NestedOsdkExamplesContext.getExample("2.4.0", [
  "loadGeotimeSeriesPointsSnippet",
]);

// Get a template variation
const variation = NestedOsdkExamplesContext.getExample("2.4.0", [
  "derivedPropertyNumericExpression",
  "#isUnary",
]);
```

### Working with Template Variations

```typescript
// Check if a template has variations
const hasVariations = NestedOsdkExamplesContext.hasVariations(
  "2.4.0",
  "derivedPropertyNumericExpression",
);

// Get all variations for a template
const variations = NestedOsdkExamplesContext.getVariations(
  "2.4.0",
  "derivedPropertyNumericExpression",
);
// Returns: ["#isUnary", "^isUnary"]

// Access specific variations
variations.forEach(variation => {
  const code = NestedOsdkExamplesContext.getExample("2.4.0", [
    "derivedPropertyNumericExpression",
    variation,
  ]);
  console.log(`${variation}:`, code?.code);
});
```

### Search and Discovery

```typescript
// Search examples across all versions
const results = NestedOsdkExamplesContext.searchExamples("numeric");

// Search within a specific version
const versionResults = NestedOsdkExamplesContext.searchExamples(
  "load",
  "2.4.0",
);
```

### Version Compatibility

The package implements semantic version fallback - newer versions include examples from older compatible versions:

```typescript
// 2.4.0 includes examples from 2.0.0, 2.1.0, and 2.4.0
const examples240 = NestedOsdkExamplesContext.getBaseExamplesForVersion(
  "2.4.0",
);

// 2.1.0 includes examples from 2.0.0 and 2.1.0 (but NOT 2.4.0)
const examples210 = NestedOsdkExamplesContext.getBaseExamplesForVersion(
  "2.1.0",
);
```

## Data Structure

Each example includes:

- `filePath`: Location of the source file
- `code`: The actual TypeScript code
- Version and variation metadata

```typescript
{
  "2.4.0": {
    "examples": {
      "loadGeotimeSeriesPointsSnippet": {
        "filePath": "examples/typescript/2.4.0/loadGeotimeSeriesPointsSnippet.ts",
        "code": "// TypeScript code here..."
      },
      "derivedPropertyNumericExpression": {
        "#isUnary": {
          "filePath": "examples/typescript/2.4.0/derivedPropertyNumericExpression_#isUnary.ts",
          "code": "// Unary operation code..."
        },
        "^isUnary": {
          "filePath": "examples/typescript/2.4.0/derivedPropertyNumericExpression_^isUnary.ts",
          "code": "// Non-unary operation code..."
        }
      }
    }
  }
}
```

## MCP Server Integration

This package is designed for MCP servers and external tools:

```typescript
// Perfect for MCP servers - stable public API
import { NestedOsdkExamplesContext } from "@osdk/osdk-docs-context";

function getOsdkExamples(version: string, templateName?: string) {
  if (templateName) {
    return NestedOsdkExamplesContext.getExample(version, [templateName]);
  }
  return NestedOsdkExamplesContext.getExamplesWithVersionInfo(version);
}
```

## Build

```bash
pnpm build
```

Generates ES modules, CommonJS, and TypeScript declarations in the `build/` directory.
