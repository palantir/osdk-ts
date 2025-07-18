# OSDK Maker Package

The Maker package provides a type-safe, programmatic way to define ontologies, which are the foundation for structured data in Palantir Foundry. This document provides examples of how to use the maker API to define various ontology entities.

## Table of Contents

- [Getting Started](#getting-started)
- [Key Concepts](#key-concepts)
- [Defining an Ontology](#defining-an-ontology)
- [Defining Shared Property Types](#defining-shared-property-types)
- [Defining Value Types](#defining-value-types)
- [Defining Interfaces](#defining-interfaces)
- [Defining Objects](#defining-objects)
- [Defining Links](#defining-links)
- [Interface Link Constraints](#interface-link-constraints)
- [Defining Actions](#defining-actions)
- [Importing Ontology Entities](#importing-ontology-entities)

## Getting Started

To get started with the maker package, install it as a dependency in your project:

```bash
npm install @osdk/maker
```

## Defining an Ontology

An ontology serves as a container for all your type definitions. You define an ontology using the `defineOntology` function:

```typescript
import { defineOntology } from "@osdk/maker";

await defineOntology("com.example.", async () => {
  // Define your ontology entities here
}, "path/to/output/directory");
```

The namespace parameter (`"com.example."` in this example) prefixes all entity names to avoid naming conflicts.

## Defining Shared Property Types

Shared Property Types (SPTs) are reusable property definitions that can be used across different object types and interfaces.

### Basic SPT

```typescript
import { defineSharedPropertyType } from "@osdk/maker";

// Define a simple string SPT
const nameProperty = defineSharedPropertyType({
  apiName: "name",
  type: "string",
  displayName: "Name",
  description: "The name of an entity",
});

// Define a numeric SPT
const ageProperty = defineSharedPropertyType({
  apiName: "age",
  type: "integer",
  displayName: "Age",
  description: "The age in years",
});

// Define a boolean SPT
const activeProperty = defineSharedPropertyType({
  apiName: "active",
  type: "boolean",
  displayName: "Active",
  description: "Whether the entity is active",
});

// Define a date SPT
const birthdateProperty = defineSharedPropertyType({
  apiName: "birthdate",
  type: "date",
  displayName: "Birth Date",
  description: "Date of birth",
});

// Define a timestamp SPT
const updatedAtProperty = defineSharedPropertyType({
  apiName: "updatedAt",
  type: "timestamp",
  displayName: "Last Updated",
  description: "When the entity was last updated",
});
```

### Array SPT

```typescript
const tagsProperty = defineSharedPropertyType({
  apiName: "tags",
  type: "string",
  array: true,
  displayName: "Tags",
  description: "List of tags",
});
```

### Struct SPT

```typescript
const addressProperty = defineSharedPropertyType({
  apiName: "address",
  type: {
    type: "struct",
    structDefinition: {
      street: "string",
      city: "string",
      state: "string",
      zipCode: {
        fieldType: "string",
        displayMetadata: {
          displayName: "ZIP Code",
          description: "The postal code",
        },
      },
      country: "string",
    },
  },
  displayName: "Address",
  description: "Physical address information",
});
```

### Specialized String SPT

```typescript
const descriptionProperty = defineSharedPropertyType({
  apiName: "description",
  type: {
    type: "string",
    isLongText: true,
    supportsEfficientLeadingWildcard: true,
    supportsExactMatching: false,
  },
  displayName: "Description",
  description: "Detailed description text",
});
```

### Marking Property

```typescript
const securityMarkingProperty = defineSharedPropertyType({
  apiName: "securityMarking",
  type: {
    type: "marking",
    markingType: "CBAC",
  },
  displayName: "Security Marking",
  description: "Security classification",
});
```

### Media Reference

```typescript
const imageProperty = defineSharedPropertyType({
  apiName: "image",
  type: "mediaReference",
  displayName: "Image",
  description: "Reference to an image file",
});
```

### Geographic Data

```typescript
const locationProperty = defineSharedPropertyType({
  apiName: "location",
  type: "geopoint",
  displayName: "Location",
  description: "Geographic coordinates",
});

const areaProperty = defineSharedPropertyType({
  apiName: "area",
  type: "geoshape",
  displayName: "Area",
  description: "Geographic area or region",
});
```

## Defining Value Types

Value types allow you to define custom data types with specific constraints and validation rules.

```typescript
import { defineValueType } from "@osdk/maker";

// Define a string value type with constraints
defineValueType({
  apiName: "emailAddress",
  displayName: "Email Address",
  type: {
    type: "string",
    constraints: [{
      constraint: {
        regex: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
      },
      failureMessage: "Must be a valid email address",
    }],
  },
  version: "1.0.0",
});

// Define a boolean value type with allowed values
defineValueType({
  apiName: "trueFalseValue",
  displayName: "True/False Value",
  type: {
    type: "boolean",
    constraints: [{
      constraint: {
        allowedValues: ["TRUE_VALUE"],
      },
    }],
  },
  version: "0.1.0",
});
```

## Defining Interfaces

Interfaces define a contract that objects can implement, specifying a set of properties that must be present.

### Basic Interface

```typescript
import { defineInterface } from "@osdk/maker";

// Define an interface with inline properties
const personInterface = defineInterface({
  apiName: "Person",
  displayName: "Person",
  description: "Represents a person",
  properties: {
    firstName: "string",
    lastName: "string",
    email: "string",
    age: "integer",
  },
});

// Define an interface with existing property types
const employeeInterface = defineInterface({
  apiName: "Employee",
  displayName: "Employee",
  description: "Represents an employee",
  properties: {
    firstName: nameProperty, // Using previously defined SPT
    lastName: nameProperty, // Using previously defined SPT
    employeeId: "string",
    department: "string",
    hireDate: "date",
    isActive: "boolean",
  },
});
```

### Interface with Optional Properties

```typescript
const customerInterface = defineInterface({
  apiName: "Customer",
  displayName: "Customer",
  properties: {
    name: "string",
    email: "string",
    // Define an optional property
    phoneNumber: {
      required: false,
      propertyDefinition: "string",
    },
  },
});
```

### Interface Extension

```typescript
// Define an interface that extends another interface
const managerInterface = defineInterface({
  apiName: "Manager",
  displayName: "Manager",
  properties: {
    managementLevel: "string",
    directReports: "integer",
  },
  extends: [employeeInterface], // Extends the Employee interface
});

// Alternative approach using apiNames
const executiveInterface = defineInterface({
  apiName: "Executive",
  displayName: "Executive",
  properties: {
    stockOptions: "boolean",
  },
  extends: ["Manager"], // Extends using apiName
});
```

### Interface with Icon

```typescript
const productInterface = defineInterface({
  apiName: "Product",
  displayName: "Product",
  icon: {
    locator: "cube",
    color: "#007bff",
  },
  properties: {
    name: "string",
    sku: "string",
    price: "decimal",
  },
});
```

### Interface with Status

```typescript
const legacyInterface = defineInterface({
  apiName: "LegacySystem",
  displayName: "Legacy System",
  properties: {
    systemName: "string",
    version: "string",
  },
  status: {
    type: "deprecated",
    message: "This interface is being phased out",
    deadline: "2026-01-01T00:00:00.000Z",
  },
});

const experimentalInterface = defineInterface({
  apiName: "ExperimentalFeature",
  displayName: "Experimental Feature",
  properties: {
    featureName: "string",
    enabled: "boolean",
  },
  status: {
    type: "experimental",
  },
});
```

## Defining Objects

Objects represent the core data entities in your ontology.

### Basic Object

```typescript
import { defineObject } from "@osdk/maker";

// Define an object type
const personObject = defineObject({
  apiName: "person",
  displayName: "Person",
  pluralDisplayName: "People",
  titlePropertyApiName: "name", // Property to use as the title
  primaryKeyPropertyApiName: "id", // Property to use as the primary key
  properties: {
    "id": { type: "string", displayName: "ID" },
    "name": { type: "string" },
    "email": { type: "string" },
    "age": { type: "integer" },
  },
});
```

### Object Implementing Interface

```typescript
// Define an object that implements an interface
const employeeObject = defineObject({
  apiName: "employee",
  displayName: "Employee",
  pluralDisplayName: "Employees",
  titlePropertyApiName: "name",
  primaryKeyPropertyApiName: "id",
  properties: {
    "id": { type: "string", displayName: "ID" },
    "name": { type: "string" },
    "email": { type: "string" },
    "department": { type: "string" },
    "hireDate": { type: "date", displayName: "Hire Date" },
    "isActive": { type: "boolean" },
  },
  implementsInterfaces: [
    {
      implements: employeeInterface,
      propertyMapping: [
        { interfaceProperty: "firstName", mapsTo: "name" },
        { interfaceProperty: "lastName", mapsTo: "name" },
        { interfaceProperty: "employeeId", mapsTo: "id" },
        { interfaceProperty: "department", mapsTo: "department" },
        { interfaceProperty: "hireDate", mapsTo: "hireDate" },
        { interfaceProperty: "isActive", mapsTo: "isActive" },
      ],
    },
  ],
});
```

### Object with Struct Property

```typescript
const customerObject = defineObject({
  apiName: "customer",
  displayName: "Customer",
  pluralDisplayName: "Customers",
  titlePropertyApiName: "name",
  primaryKeyPropertyApiName: "id",
  properties: {
    "id": { type: "string", displayName: "ID" },
    "name": { type: "string" },
    "address": {
      type: {
        type: "struct",
        structDefinition: {
          street: "string",
          city: "string",
          state: "string",
          zipCode: "string",
          country: "string",
        },
      },
      displayName: "Address",
    },
  },
});
```

### Object with Datasource

```typescript
// Stream-backed object with retention period
const eventObject = defineObject({
  apiName: "event",
  displayName: "Event",
  pluralDisplayName: "Events",
  titlePropertyApiName: "eventName",
  primaryKeyPropertyApiName: "eventId",
  properties: {
    "eventId": { type: "string", displayName: "Event ID" },
    "eventName": { type: "string", displayName: "Event Name" },
    "timestamp": { type: "timestamp" },
  },
  datasource: {
    type: "stream",
    retentionPeriod: "P90D", // 90 days retention (ISO 8601 duration format)
  },
});

// Dataset-backed object
const productObject = defineObject({
  apiName: "product",
  displayName: "Product",
  pluralDisplayName: "Products",
  titlePropertyApiName: "name",
  primaryKeyPropertyApiName: "id",
  properties: {
    "id": { type: "string", displayName: "ID" },
    "name": { type: "string" },
    "price": { type: "decimal" },
  },
  datasource: {
    type: "dataset",
  },
});
```

## Defining Links

Links define relationships between objects.

### One-to-Many Link

```typescript
import { defineLink } from "@osdk/maker";

// Define a one-to-many link between departments and employees
const departmentToEmployeesLink = defineLink({
  apiName: "departmentToEmployees",
  one: {
    object: departmentObject, // The "one" side of the relationship
    metadata: {
      apiName: "department",
      displayName: "Department",
      pluralDisplayName: "Departments",
      visibility: "NORMAL",
    },
  },
  toMany: {
    object: employeeObject, // The "many" side of the relationship
    metadata: {
      apiName: "employees",
      displayName: "Employee",
      pluralDisplayName: "Employees",
      visibility: "NORMAL",
    },
  },
  manyForeignKeyProperty: "departmentId", // Property on employeeObject that refers to departmentObject
});
```

### Many-to-Many Link

```typescript
// Define a many-to-many link between products and categories
const productToCategoriesLink = defineLink({
  apiName: "productToCategories",
  many: {
    object: productObject, // One side of the many-to-many relationship
    metadata: {
      apiName: "products",
      displayName: "Product",
      pluralDisplayName: "Products",
      visibility: "NORMAL",
    },
  },
  toMany: {
    object: categoryObject, // Other side of the many-to-many relationship
    metadata: {
      apiName: "categories",
      displayName: "Category",
      pluralDisplayName: "Categories",
      visibility: "NORMAL",
    },
  },
});
```

## Interface Link Constraints

Interface Link Constraints define relationships between interfaces.

```typescript
import { defineInterfaceLinkConstraint } from "@osdk/maker";

// Define a single link constraint between Manager and Employee interfaces
const managerToEmployeesLink = defineInterfaceLinkConstraint({
  apiName: "managerToEmployees",
  from: managerInterface,
  toMany: employeeInterface,
});

// Define a one-to-one link constraint
const personToAddressLink = defineInterfaceLinkConstraint({
  apiName: "personToAddress",
  from: personInterface,
  toOne: addressInterface,
});
```

## Defining Actions

Actions define operations that can be performed on objects and interfaces.

### Create Object Action

```typescript
import { defineCreateObjectAction } from "@osdk/maker";

// Define an action to create an employee
const createEmployeeAction = defineCreateObjectAction({
  objectType: employeeObject,
});
```

### Modify Object Action

```typescript
import { defineModifyObjectAction } from "@osdk/maker";

// Define an action to modify an employee
const modifyEmployeeAction = defineModifyObjectAction({
  objectType: employeeObject,
});
```

### Delete Object Action

```typescript
import { defineDeleteObjectAction } from "@osdk/maker";

// Define an action to delete an employee
const deleteEmployeeAction = defineDeleteObjectAction({
  objectType: employeeObject,
});
```

### Interface Actions

```typescript
import {
  defineCreateInterfaceObjectAction,
  defineModifyInterfaceObjectAction,
} from "@osdk/maker";

// Define an action to create objects implementing an interface
const createPersonAction = defineCreateInterfaceObjectAction(personInterface);

// Define an action for a specific object type that implements an interface
const createEmployeePersonAction = defineCreateInterfaceObjectAction(
  personInterface,
  employeeObject,
);

// Define an action to modify objects implementing an interface
const modifyPersonAction = defineModifyInterfaceObjectAction(personInterface);
```

### Custom Action

More customization such as security/submission criteria, constraints on parameter values, parameter overrides, etc.
can also be added.

```typescript
import {
  ActionParameterConditionalOverride,
  ConditionDefinition,
  defineModifyObjectAction,
  defineObject,
} from "@osdk/maker";

const employeeObject = defineObject({
  apiName: "employee",
  displayName: "Employee",
  pluralDisplayName: "Employees",
  titlePropertyApiName: "name",
  primaryKeyPropertyApiName: "id",
  properties: {
    "id": { type: "string", displayName: "ID" },
    "team": { type: "string" },
    "numDeals": { type: "integer" },
    "experience": { type: "integer" },
  },
});

const mustBeManagerCondition: ConditionDefinition = {
  type: "group",
  name: "managerGroup", // Actual group assigned during installation
};

const mustBeInTeamCondition: ConditionDefinition = {
  type: "group",
  name: "teamGroup",
};

const teamEqualsSalesParameterCondition: ConditionDefinition = {
  type: "parameter",
  parameterId: "team",
  matches: {
    type: "staticValue",
    staticValue: {
      type: "string",
      string: "sales",
    },
  },
};

const makeDealsVisible: ActionParameterConditionalOverride = {
  type: "visibility",
  condition: {
    type: "and",
    conditions: [
      mustBeInTeamCondition,
      teamEqualsSalesParameterCondition,
    ],
  },
};

const modifyObjectActionType = defineModifyObjectAction(
  {
    objectType: employeeObject,
    actionLevelValidation: {
      condition: mustBeManagerCondition,
    },
    parameterLevelValidations: {
      "numDeals": {
        defaultVisibility: "hidden",
        conditionalOverrides: [
          makeDealsVisible,
        ],
      },
    },
    excludedProperties: ["experience"],
  },
);
```
