# OSDK Docs Context in MCP Tools

This document outlines how the `@osdk/osdk-docs-context` package will be used to build MCP (Model Context Protocol) tools that provide ad-hoc contextual examples to AI agents.

## Overview

The MCP tool will leverage the structured OSDK examples to provide relevant code snippets based on high-level topics or use cases. Instead of requiring agents to know specific template names, they can request examples by conceptual topic.

## Template-to-Topic Mapping

We organize OSDK templates into logical groups based on common development tasks. The mapping is structured as JSON with topic-level descriptions:

```json
{
  "version": "2.0.0",
  "topics": {
    "loading": {
      "description": "Templates for retrieving objects and data from the ontology",
      "aliases": ["load", "fetch", "get", "retrieve"],
      "templates": [
        "loadSingleObjectGuide",
        "loadObjectPageGuide",
        "orderObjectsGuide",
        "loadGeotimeSeriesPointsSnippet"
      ]
    },
    "aggregation": {
      "description": "Templates for aggregating and summarizing data across objects",
      "aliases": ["aggregate", "summarize", "calculate", "stats"],
      "templates": [
        "aggregationTemplate",
        "countAggregationTemplate",
        "approximateDistinctAggregationTemplate",
        "minAggregationTemplate",
        "maxAggregationTemplate",
        "sumAggregationTemplate",
        "avgAggregationTemplate"
      ]
    }
  }
}
```

## MCP Tool Interface

### Tool Description

Using this tool you can get detailed OSDK TypeScript examples on the following topics:

- **loading**: Templates for retrieving objects and data from the ontology
- **aggregation**: Templates for aggregating and summarizing data across objects
- **queries**: Templates for querying and filtering objects with conditions
- **actions**: Templates for modifying data through ontology actions
- **properties**: Templates for working with object properties and relationships
- **timeseries**: Templates for time-based data and analytics operations

### Tool Parameters

The tool takes two parameters and returns a JSON string:

```typescript
interface GetOsdkExamplesParams {
  topic: string; // Topic name (e.g., "loading", "aggregation")
  version: string; // OSDK version (e.g., "2.4.0")
}

// Returns: JSON string containing the examples for the requested topic
function getOsdkExamples(params: GetOsdkExamplesParams): string;
```

## Usage Examples

### Basic Topic Request

```typescript
// Agent requests loading examples
const jsonResponse = getOsdkExamples({
  topic: "loading",
  version: "2.4.0",
});
// Returns JSON string containing loadSingleObjectGuide, loadObjectPageGuide, etc.
// with full code examples, file paths, and metadata
```

### Aggregation Examples

```typescript
// Agent requests aggregation examples
const jsonResponse = getOsdkExamples({
  topic: "aggregation",
  version: "2.4.0",
});
// Returns JSON string with countAggregationTemplate,
// approximateDistinctAggregationTemplate, etc.
```

### Example Response Format

The tool returns a JSON string with this structure:

```json
{
  "topic": "loading",
  "version": "2.4.0",
  "examples": [
    {
      "templateName": "loadSingleObjectGuide",
      "code": "// Full TypeScript code here...",
      "variations": {
        "#condition": "// Variation code if applicable"
      }
    }
  ]
}
```
