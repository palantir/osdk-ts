# Sample Ontology for OSDK

This package provides a sample ontology for the Ontology SDK (OSDK), along with code generation and example scripts. It serves as a reference implementation demonstrating how to use OSDK with a typical enterprise ontology.

## Overview

The sample ontology models a company's employee and equipment management system with three main object types:

1. **Employee** - Represents company employees with comprehensive properties like employeeId, fullName, department, etc.
2. **Equipment** - Represents physical assets with properties like equipmentId, type, manufacturer, etc.
3. **Office** - Represents company offices with properties like officeId, name, address, etc.

It also includes several action types for operations like promoting employees, creating offices, and assigning equipment.

## Project Structure

```
packages/sample-ontology/
├── ontology.json           # The source ontology definition
├── generateExample.mjs     # Script to generate example files from docs sections
├── updateDocsSnippets.mjs  # Script to update doc snippets from OSDK templates
├── src/
│   ├── generatedNoCheck/   # Generated TypeScript code (not checked into source control)
│   │   ├── index.ts        # Entry point for the generated code
│   │   ├── OntologyMetadata.ts
│   │   └── ontology/       # Generated object and action type definitions
│   │       ├── actions/    # Generated action type files
│   │       ├── objects/    # Generated object type files
│   │       └── queries/    # Generated query type files
│   ├── osdk-docs-mapping.json  # Maps doc section titles to SDK template keys
│   ├── osdk-docs-schema.json   # JSON schema for docs sections format
│   ├── osdk-docs-sections.json # Documentation sections with code examples
│   └── examples/           # Generated example scripts showing OSDK usage
│       └── typescript/
│           └── 2.0.0/      # Version-specific examples
```

## From Ontology to Code: The Complete Process

### 1. Ontology Definition

Everything starts with [`ontology.json`](./ontology.json), which defines:

- Object types with their properties, primary keys, and links
- Action types with their parameters and operations
- Query types (if any)

This JSON file follows the Foundry ontology schema and serves as the source of truth for code generation.

Example object type definition from ontology.json:

```json
"Employee": {
  "objectType": {
    "apiName": "Employee",
    "description": "A full-time or part-time employee of our firm",
    "primaryKey": "employeeId",
    "properties": {
      "employeeId": {
        "dataType": {
          "type": "integer"
        },
        "description": "Unique identifier for the employee"
      },
      "fullName": {
        "dataType": {
          "type": "string"
        },
        "description": "Full name of the employee"
      }
    }
  }
}
```

### 2. Code Generation

The package uses the official OSDK CLI to generate TypeScript code from the ontology definition:

1. **Preparation**: The CLI automatically cleans the output directory
2. **Parsing**: It reads and parses ontology.json, validating the structure
3. **Code Generation**: It generates:
   - Object type definitions with proper TypeScript types
   - Action type definitions with parameter validation
   - Helper files for SDK integration

Run the code generation with:

```bash
npm run codeGen
```

This command executes:

```bash
npx @osdk/cli@latest unstable typescript generate --version 0.1.0 --ontologyPath ./ontology.json --outDir ./src/generatedNoCheck --clean
```

The OSDK CLI ensures that all property types in our sample ontology are properly handled and translated to TypeScript types, with full type safety and validation.

### 3. Documentation Snippet Generation

The package includes two important scripts for documentation generation:

#### updateDocsSnippets.mjs

This script:

1. Reads the mapping defined in [`src/osdk-docs-mapping.json`](./src/osdk-docs-mapping.json)
2. For each entry, finds the corresponding template in the OSDK SDK documentation
3. Processes the template with Handlebars using the sample ontology context
4. Updates the code snippets in [`src/osdk-docs-sections.json`](./src/osdk-docs-sections.json)

Run this script with:

```bash
npm run updateDocsSnippets
```

#### generateExample.mjs

This script:

1. Reads the sections from [`src/osdk-docs-sections.json`](./src/osdk-docs-sections.json)
2. Extracts the code snippets from each section
3. Organizes them by language and version
4. Generates individual example files in `src/examples/typescript/2.0.0/`
5. Creates an index file and client.ts utility for each version

Run this script with:

```bash
npm run generateExamples
```

### 4. TypeScript Compilation

After code generation, the TypeScript compiler transforms the generated code into JavaScript:

```bash
npm run build
```

This runs the full build pipeline:

1. Code generation via `npm run codeGen`
2. Documentation snippet updates via `npm run updateDocsSnippets`
3. TypeScript compilation via `tsc`

### 5. Using the Generated SDK

The compiled code can now be used in applications:

```typescript
import { Employee } from "@osdk/sample-ontology";
import { client } from "./client";

// Fetch an employee
const employee = await client(Employee).fetchOne("12345");

// Access properties
console.log(employee.fullName);
```

## Object Types in the Sample Ontology

The sample ontology includes three main object types:

### Employee

Represents company employees with properties like:

- `employeeId` (integer, primary key)
- `fullName` (string)
- `title` (string)
- `department` (string)
- `salary` (double)
- `contactInfo` (struct with phone, email)

### Equipment

Represents physical assets with properties like:

- `equipmentId` (string, primary key)
- `type` (string)
- `manufacturer` (string)
- `model` (string)
- `purchaseDate` (date)

### Office

Represents company offices with properties like:

- `officeId` (string, primary key)
- `name` (string)
- `address` (string)
- `capacity` (integer)

## Action Types

The ontology defines several action types:

### promoteEmployee

Updates an employee's title and compensation:

- `employeeId` (integer)
- `newTitle` (string)
- `newCompensation` (double)
- `promotionDocument` (attachment, optional)

### createOffice

Creates a new office:

- `officeId` (string)
- `address` (string, optional)
- `capacity` (integer, optional)
- `officeNames` (array of strings, optional)
- `floorPlanAttachment` (attachment, optional)

### assignEquipment

Assigns equipment to an employee:

- `employeeId` (integer)
- `equipmentId` (string)
- `assignmentDocument` (attachment, optional)

### recordTraining

Records employee training completion:

- `employeeId` (integer)
- `trainingName` (string)
- `completionDate` (date)
- `certificate` (attachment, optional)
- `videoRecording` (mediaReference, optional)

### documentEquipment

Adds documentation for equipment:

- `equipmentId` (string)
- `documentType` (string)
- `documentTitle` (string)
- `document` (attachment, optional)
- `documentation` (mediaReference, optional)

## Type Mapping

The code generation process maps ontology data types to TypeScript types:

| Ontology Type  | TypeScript Type                       |
| -------------- | ------------------------------------- |
| string         | string                                |
| integer        | number                                |
| boolean        | boolean                               |
| double         | number                                |
| date           | string                                |
| attachment     | AttachmentUpload (for actions)        |
| mediaReference | MediaReferenceUpload (for actions)    |
| array          | Array\<T\> (where T is the item type) |
| struct         | Interface with fields                 |

## Running the Examples

To run the example scripts:

```bash
npm run generateExamples
```

This will generate example files in `src/examples/typescript/2.0.0/` based on the documentation sections.

## Contributing

When modifying this package:

1. Never edit files in the `generatedNoCheck` directory directly - these are regenerated
2. If you need to modify the ontology, edit [`ontology.json`](./ontology.json) and regenerate code
3. For changes to documentation snippets, edit [`src/osdk-docs-sections.json`](./src/osdk-docs-sections.json) or update the templates in `@osdk/sdk-docs`
4. For changes to the mapping, edit [`src/osdk-docs-mapping.json`](./src/osdk-docs-mapping.json)

### Documentation Workflow

1. Define or update sections in [`src/osdk-docs-sections.json`](./src/osdk-docs-sections.json)
2. Map section titles to SDK template keys in [`src/osdk-docs-mapping.json`](./src/osdk-docs-mapping.json)
3. Run `npm run updateDocsSnippets` to refresh code examples
4. Run `npm run generateExamples` to create standalone example files
5. Run `npm run build` for a full rebuild

## License

Apache License 2.0
