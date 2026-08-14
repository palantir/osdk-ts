# @osdk/seed-compiler

Merges seed data files (`.mts`) into a single JSON output for the local ontology
server to load into SQLite on startup.

## Usage

### CLI

```bash
seed-compiler \
  --metadata path/to/ontology-metadata.json \
  --seed-dir path/to/seed/ \
  --output path/to/seed-data.json
```

| Flag         | Description                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--metadata` | Path to the `ontology-metadata.json` file written by the SDK generator. Backs the `SeedBuilder` the files are merged through.           |
| `--seed-dir` | Directory containing seed `.mts` files. All top-level `.mts` files are loaded, sorted by filename for deterministic output, and merged. |
| `--output`   | Path where the merged seed JSON is written.                                                                                             |

## Authoring seed files

Seed files use a metadata-bound `createSeed` — `createSeedWithMetadata()` from
`@osdk/seed-helpers` partially applied to your ontology's metadata — together with
the user's generated `@ontology/sdk`. Each file must **default-export either the
`createSeed(...)` result** (the `{ output, context }` object) **or its `.output`**
(a bare `SeedOutput`); the compiler tells the two apart structurally and treats
them identically. Exporting the result itself is the recommended form, since
`context` stays available to anything else importing the file:

```ts
import { Product, Seller } from "@ontology/sdk";

import { createSeed } from "./createSeed.js";

export default createSeed((seed) => {
  const widget = seed.create(Product, {
    productId: "prod-001",
    title: "Widget",
    price: 100,
  });
  const alice = seed.create(Seller, {
    sellerId: "seller-001",
    name: "Alice",
  });

  // Link by reference — full compile-time validation on link names and target types.
  seed.link(widget, "sellers", alice);
});
```

`seed.link()` also accepts an array of targets:

```ts
seed.link(widget, "sellers", [alice, bob]);
```

where `createSeed` is defined once per project as:

```ts
import metadata from "@ontology/sdk/UNSTABLE_DO_NOT_USE/ontology-metadata";
import {
  createSeedWithMetadata,
  type SeedFunction,
  type SeedOutput,
} from "@osdk/seed-helpers";

export const createSeed = <T>(
  fn: SeedFunction<T>,
): { output: SeedOutput; context: T } => createSeedWithMetadata(metadata, fn);
```

## Validation

Validation is not this package's job. `@osdk/seed-helpers` validates every object as
`seed.create()` / `seed.update()` inserts it, and again when the compiler feeds each
file's output into its shared `SeedBuilder`:

- **Object types** must be defined in the ontology (via the metadata file).
- **Property names** must exist on the object type, and values must be non-null and
  match the wire type's expected JS type.
- **String-encoded property values** must match the regex format for their wire type
  (`timestamp`, `date`, `datetime`, `long`, `decimal`).
- **Primary keys** must be unique within an object type.

Because all files are merged through one `SeedBuilder`, primary-key uniqueness holds
across the whole directory, not just within a file. The compiler's only addition is
the seed file's name in the error message, so a conflict points at the file that
introduced it.

Links are deduplicated by their identity (source, link type, target). Link entries
may reference objects created in any seed file in the directory, and a link's `name`
is derived from that identity rather than taken from the input.
