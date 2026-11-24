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
| `--metadata` | Path to the `ontology-metadata.json` file written by the SDK generator. Backs the `OntologySeedBuilder` the files are merged through.   |
| `--seed-dir` | Directory containing seed `.mts` files. All top-level `.mts` files are loaded, sorted by filename for deterministic output, and merged. |
| `--output`   | Path where the merged seed JSON is written.                                                                                             |
| `--format`   | Output format. Use `ontology` (default) for objects and links, or `foundry` to also include admin users.                                |

Both functions accept ontology and Foundry seed files. `mergeSeedData(files, metadata)`
returns a `Promise<FoundrySeedOutput>` containing `{ ontology, admin }`.
`compileSeedData(files, outputPath, metadata)` writes `{ objects, links }` to disk
and returns a `Promise<void>`. Pass `"foundry"` as the fourth argument to write
`{ ontology, admin }` instead.

A file can select an active user defined in that file or
an earlier one. The last file to set `currentUserId` determines the current user.

## Authoring seed files

Foundry seed files default-export the result of `createFoundrySeed` from
`@osdk/seed-helpers` or its `.output`.

Ontology seed files use a metadata-bound `createSeed` — `createOntologySeedWithMetadata()` from
`@osdk/seed-helpers` partially applied to your ontology's metadata — together with
the user's generated `@ontology/sdk`. Each file must **default-export either the
`createSeed(...)` result** (the `{ output, context }` object) **or its `.output`**
(a bare `OntologySeedOutput`); the compiler tells the two apart structurally and treats
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
import metadata from "@ontology/sdk/experimental/ontology-metadata";
import {
  createOntologySeedWithMetadata,
  type OntologySeedFunction,
  type OntologySeedOutput,
} from "@osdk/seed-helpers";

export const createSeed = <T>(
  fn: OntologySeedFunction<T>,
): { output: OntologySeedOutput; context: T } =>
  createOntologySeedWithMetadata(metadata, fn);
```

## Validation

Validation is not this package's job. `@osdk/seed-helpers` validates every object as
`seed.create()` / `seed.update()` inserts it, and again when the compiler feeds each
file's output into its shared `OntologySeedBuilder`:

- **Object types** must be defined in the ontology (via the metadata file).
- **Property names** must exist on the object type, and values must be non-null and
  match the wire type's expected JS type.
- **String-encoded property values** must match the regex format for their wire type
  (`timestamp`, `date`, `datetime`, `long`, `decimal`).
- **Primary keys** must be unique within an object type.

Because all files are merged through one `OntologySeedBuilder`, primary-key uniqueness holds
across the whole directory, not just within a file. The compiler's only addition is
the seed file's name in the error message, so a conflict points at the file that
introduced it.

Links are deduplicated by their identity (source, link type, target). Link entries
may reference objects created in any seed file in the directory, and a link's `name`
is derived from that identity rather than taken from the input.
