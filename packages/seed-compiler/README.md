# @osdk/seed-compiler

Compiles seed data files (`.mts`) into a single merged JSON output for the
local ontology server to load into SQLite on startup.

## Usage

### CLI

```bash
seed-compiler \
  --metadata path/to/ontology-metadata.json \
  --seed-dir path/to/seed/ \
  --output path/to/seed-data.json
```

| Flag | Description |
|---|---|
| `--metadata` | Path to the `ontology-metadata.json` file written by the SDK generator. Provides per-property wire types for format validation and per-object-type primary key field names. |
| `--seed-dir` | Directory containing seed `.mts` files. All top-level `.mts` files are loaded, sorted by filename for deterministic output, and merged. |
| `--output` | Path where the merged seed JSON is written. |


## Authoring seed files

Seed files use `@osdk/seed-helpers` and the user's generated `@ontology/sdk`:

```ts
import { Product, Seller } from "@ontology/sdk";
import { createSeed } from "@osdk/seed-helpers";

export default createSeed((seed) => {
  const widget = seed.add(Product, {
    pk: "prod-001",
    title: "Widget",
    price: 100,
  });
  const alice = seed.add(Seller, {
    pk: "seller-001",
    name: "Alice",
  });

  // Link by reference — full compile-time validation on link names and target types.
  seed.link("widget-seller", widget, "sellers", alice, "products");
});
```

The `link()` method also supports a type + primary-key form for cases where
keeping refs in scope is awkward:

```ts
seed.add(Product, { pk: "prod-001", title: "Widget", price: 100 });
seed.add(Seller, { pk: "seller-001", name: "Alice" });

seed.link(
  "widget-seller",
  Product, "prod-001", "sellers",
  Seller, "seller-001", "products",
);
```

Both forms produce identical output.

## Validation

The compiler validates:

- **Object types** in seed data must be defined in the ontology (via the metadata file).
- **Primary keys** must be unique within an object type, across all seed files in the directory.
- **String-encoded property values** must match the regex format for their wire type
  (`timestamp`, `date`, `datetime`, `long`, `decimal`).
- **Links** must reference objects that were `add`-ed in the same seed file.
  Cross-file linking is not supported — the link source and target must be
  registered in the same `createSeed(...)` call.

Duplicate links (same source, target, link type) across files are deduplicated
with a warning rather than an error.
