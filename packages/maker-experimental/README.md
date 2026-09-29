# OSDK Maker-Experimental Package

The Maker-Experimental package provides experimental functions relating to programmatically defining ontologies (see the @osdk/maker package). These functions are unstable and may have unexpected behavior.

## Dataset datasources

Pass the result of `defineDataset` to a dataset datasource in `defineObject`:

```ts
import { defineObject } from "@osdk/maker";
import { defineDataset } from "@osdk/maker-experimental";

const events = defineDataset({
  name: "Events",
  columns: {
    event_id: { type: "string" },
    description: { type: "string" },
  },
});

defineObject({
  apiName: "Event",
  displayName: "Event",
  pluralDisplayName: "Events",
  primaryKeyPropertyApiName: "id",
  titlePropertyApiName: "id",
  properties: {
    id: { type: "string" },
    description: { type: "string" },
  },
  datasources: [
    {
      type: "dataset",
      dataset: events,
      propertyMapping: { id: "event_id" },
    },
  ],
});
```

Columns default to property API names. `propertyMapping` overrides column names
for the referenced dataset; struct fields continue to match by name. Edit-only
and derived properties do not need dataset columns. Each mapped column must
exist and have the same physical type as its property.

One dataset can back multiple objects, and unused columns are allowed. The dataset
starts empty and is connected automatically when generating the product. Omit
`includeEmptyBackingDatasource` when referencing a defined dataset.

## Datasets from another product

Generate the upstream product with `--apiNamespace` set to its product namespace.
Its generated package exports a `datasets` object keyed by dataset name:

```ts
import { datasets } from "@example/events-product";
import { defineObject } from "@osdk/maker";

defineObject({
  apiName: "Event",
  displayName: "Event",
  pluralDisplayName: "Events",
  primaryKeyPropertyApiName: "id",
  titlePropertyApiName: "id",
  properties: { id: { type: "string" } },
  datasources: [
    {
      type: "dataset",
      dataset: datasets.Events,
      propertyMapping: { id: "event_id" },
    },
  ],
});
```

This emits an external recommendation for the upstream dataset and each consumed
column. The consumer does not generate another dataset. The exported reference
preserves the upstream product namespace, schema, and randomness key, and uses
the same version compatibility range as other product recommendations.

You can also declare a reference to an upstream Maker dataset explicitly:

```ts
import { importDataset } from "@osdk/maker-experimental";

const events = importDataset({
  packageName: "com.example.events",
  name: "Events",
  columns: { event_id: { type: "string" } },
  // Set randomnessKey if the upstream product was generated with one.
});
```

Imported references use the same column mapping and schema validation as local
datasets. Dataset-only products also generate these exports when a namespace is
provided. The generated `datasets` export must not conflict with an ontology export.
