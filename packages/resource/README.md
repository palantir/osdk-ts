# `@osdk/resource`

`@osdk/resource` defines language agnostic references to Foundry resources, along with helpers for generating references in TypeScript.

## Creating and using references

A reference is JSON-serializable data with a resource `type` (such as `dataset`) and a `locator`. The TypeScript helpers exposed in this package accept a locator, add the resource type, and validate the result.

A locator identifies a resource by API name or an existing resource by RID.

```ts
import { createDatasetReference } from "@osdk/resource";

export const customers = createDatasetReference({
  type: "apiName",
  namespace: "com.acme.customer-data",
  apiName: "customers",
});

const existingCustomers = createDatasetReference({
  type: "rid",
  rid: "ri.foundry.main.dataset.11111111-1111-1111-1111-111111111111",
});
```

References can be authored directly or imported from generated resource packages. A deployment system like SuperRepo is responsible for resolving the API names to resources at compile time. An omitted `namespace` indicates to the deployment system to use the containing project's API namespace.

`resourceIdentity(reference)` returns an identity string based on resource type and locator, excluding schema annotations.

## Reference types

All constructors are exported from `@osdk/resource`.

| Resource (`type`)                          | Constructor                         | Accepted RID format                                |
| ------------------------------------------ | ----------------------------------- | -------------------------------------------------- |
| Dataset (`dataset`)                        | `createDatasetReference`            | `ri.foundry.<instance>.dataset.<UUID>`             |
| Stream (`stream`)                          | `createStreamReference`             | `ri.foundry.<instance>.stream.<UUID>`              |
| Restricted view (`restrictedView`)         | `createRestrictedViewReference`     | `ri.foundry.<instance>.restricted-view.<UUID>`     |
| Media set (`mediaSet`)                     | `createMediaSetReference`           | `ri.mio.<instance>.media-set.<UUID>`               |
| Time-series sync (`timeSeriesSync`)        | `createTimeSeriesSyncReference`     | `ri.time-series-catalog.<instance>.sync.<UUID>`    |
| Geotime integration (`geotimeIntegration`) | `createGeotimeIntegrationReference` | `ri.geotime-catalog.<instance>.integration.<UUID>` |
| Source (`source`)                          | `createSourceReference`             | `ri.magritte.<instance>.source.<UUID>`             |
| Function (`function`)                      | `createFunctionReference`           | `ri.function-registry.<instance>.function.<UUID>`  |
| Live deployment (`liveDeployment`)         | `createLiveDeploymentReference`     | `ri.foundry-ml-live.<instance>.deployment.<UUID>`  |

## Tabular schema contracts

Dataset, stream, and restricted-view constructors accept an optional second `{ schema }` argument, preserving column names and types as TypeScript literals. These contracts describe known physical schemas and can be leveraged for type safety and runtime checks.

```ts
const employees = createDatasetReference(
  { type: "apiName", namespace: "com.acme.data", apiName: "Employee" },
  {
    schema: {
      columns: {
        employee_id: { type: "string" },
        age: { type: "integer", nullable: true },
        salary: { type: "decimal", precision: 30, scale: 10 },
        tags: { type: "array", elementType: { type: "string" } },
        scores: {
          type: "map",
          keyType: { type: "string" },
          valueType: { type: "double", nullable: true },
        },
        address: { type: "struct", fields: { city: { type: "string" } } },
      },
    },
  },
);

const idType = employees.schema.columns.employee_id.type; // "string"
```

## JSON Schema bundle

`@osdk/resource/resource.schema.json` contains named definitions for resource references and column types under `$defs`. To validate a payload, select its definition, such as `#/$defs/DatasetRef`.

## Maintaining generated models

`src/schemas.ts` is the source of truth for wire models. The build uses `@osdk/internal.modeling` to validate these schemas and generate `src/types.ts` and `resource.schema.json` from the same named documents. Schema variable names determine model names through `collectModels`. For example, `datasetRefSchema` becomes `DatasetRef`.

From the repository root:

```sh
pnpm turbo generate-models --filter=@osdk/resource
pnpm --filter @osdk/resource check-models
```

Generation updates both artifacts, and the check command ensures they aren't stale.
