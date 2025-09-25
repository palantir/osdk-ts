# Template Variable Changes Analysis

## Overview

This document lists all template variable changes between the current branch and main branch in `documentation.yml`, organized by template name.

## Variable Changes by Template

### Global Import Changes (All Templates)

**Changed Variables:**

- `{{{packageName}}}/ontology/objects` → `{{{packageName}}}` (import path simplification)

### applyAction (2.0.0)

**Major Restructure - New Conditional Variables:**

- `{{#hasAttachmentProperty}}` / `{{^hasAttachmentProperty}}`
- `{{#hasAttachmentUpload}}` / `{{^hasAttachmentUpload}}`
- `{{attachmentParameter}}`

**Removed Variables:**

- `{{#hasAttachmentImports}}`
- `{{#hasMediaParameter}}`
- `{{#attachmentProperty}}`
- `{{#needsImports}}`
- `objectType: {{objectType}},`

**Added Variables:**

- `type {{objectType}}` (in imports)
- Complex conditional import structure

### batchApplyAction (2.0.0)

**Similar restructure to applyAction with same variable changes**

### uploadAttachment (2.0.0)

**Removed Variables:**

- `Result<>` wrapper types
- Generic `attachmentUploadingAction`

**Added Variables:**

- `{{actionApiName}}` (specific action)
- `{{primaryKeyPropertyV2.apiName}}`
- `{{property}}`
- `{{{actionParameterSampleValuesV2}}}`

### executeFunction (2.0.0)

**Major Restructure - Similar to applyAction:**

- `{{#hasAttachmentProperty}}` / `{{^hasAttachmentProperty}}`
- `{{#hasAttachmentUpload}}` / `{{^hasAttachmentUpload}}`
- `{{attachmentProperty}}`

**Removed Variables:**

- `{{#needsImports}}`
- `{{#hasAttachmentImports}}`

**Added Variables:**

- `{{{functionInputValuesV2}}}` (direct usage)

### String Query Templates (2.0.0)

**Changed Variables (All String Query Templates):**

- `{{#structSubPropertyApiName}}` → `{{#hasStructSubProperty}}`
- `{{^structSubPropertyApiName}}` → `{{^hasStructSubProperty}}`

**Affected Templates:**

- `stringStartsWithTemplate`
- `containsAllTermsInOrderTemplate`
- `containsAnyTermTemplate`
- `containsAllTermsTemplate`
- `equalityTemplate`
- `inFilterTemplate`
- `nullTemplate`
- `rangeTemplate`
- `withinDistanceTemplate`
- `withinBoundingBoxTemplate`
- `withinPolygonTemplate`
- `intersectsPolygonTemplate`
- `intersectsBboxTemplate`

### Logical Query Templates (2.0.0)

**Changed Variables:**

- `{{primaryKeyPropertyV1.apiName}}` → `{{primaryKeyPropertyV2.apiName}}`
- Updated property value variables to V2 versions

**Affected Templates:**

- `notTemplate`
- `andTemplate`
- `orTemplate`

### Time Series Templates (2.1.0)

**Function Signature Changes:**

- `function getAllTimeSeriesPoints(obj: {{objectType}})` → `function getAllTimeSeriesPoints(obj: Osdk.Instance<{{objectType}}>)`
- Added `Osdk.Instance<>` wrapper for all time series functions

### New Templates Variables (2.0.0)

**castInterfaceToObjectReference:**

- `{{objectTypeApiName}}`
- `{{interfaceApiName}}`
- `{{interfaceApiNameCamelCase}}`
- `{{objectTypeApiNameCamelCase}}`

**containsTemplate:**

- `{{arrayElementValue}}`

**Object Set Operations:**

- Standard `{{objectType}}` and `{{titleProperty}}` usage

**Derived Property Templates:**

- `{{linkName}}`
- `{{otherProperty}}`
- Various aggregation-specific variables

### Subscription Template (2.1.0)

**Changed Variables:**

- `{{#propertyNames}}"{{.}}", {{/propertyNames}}` → `{{{propertyNames}}}`
- `{{objectOrInterfaceApiName}}.OsdkInstance` → `{{objectOrInterfaceApiName}}`

### Vector Search Templates (2.4.0)

**New Variables:**

- `{{vectorDimensionSize}}` (for vector dimension specification)

### Search Around Template (2.0.0)

**New Variables:**

- `{{rawLinkedPrimaryKeyProperty.apiName}}`

**Changed Variables:**

- Link description comments updated to be more specific

## Summary of Major Variable Patterns

1. **Version Suffix Changes**: Most variables migrated from V1 to V2 versions
2. **Type Import Changes**: Added `type` keyword in many imports
3. **Conditional Logic**: Extensive use of conditional blocks for attachment handling
4. **Property Access**: More consistent dot notation and object structure
5. **Error Handling**: Removed Result wrapper types in favor of direct async/await
6. **Function Signatures**: Added proper TypeScript types throughout

## Impact

These changes represent a major API modernization:

- Simplified import paths
- Better TypeScript typing
- More flexible attachment handling
- Cleaner error handling patterns
- Enhanced conditional template logic
