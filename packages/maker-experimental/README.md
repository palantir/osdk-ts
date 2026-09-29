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
