# FAQ for TypeScript OSDK v2

## Why do some packages include `$ontologyRid` while others do not?

Certain packages are designed for use across multiple foundry installations. Embedding an `$ontologyRid` within the generated code would only be beneficial for the originating foundry stack and would not function on other stacks.

To avoid confusion, when generating such packages, we do not include an `$ontologyRid`. You will need to provide this value separately when constructing your client.

## Why is the client passed an object? Why eliminate `client.ontology.Foo...`?

If you prefer discovery, you can always import as follows:

```ts
import * as MyOsdk from "@my/osdk";

MyOsdk.$Objects...
```

The reasons for this approach are:

1. Consumers can leverage tree shaking to produce more compact bundles, including the use of lazy loading, which only includes what is necessary.
2. Embedding client logic within the OSDK (as was done in v1) made it challenging to create generic libraries, as each client was effectively distinct.
3. Future platform features will support using multiple OSDK packages concurrently, ensuring users do not incur the cost of duplicated JavaScript downloads.
4. Upcoming features will necessitate referencing these objects for functionality. The `client(Foo)` syntax is designed to maintain consistency with these future enhancements.

## Why has the `where` clause syntax changed compared to v1?

1. Previously, users needed to import `Op` for operations like and/not/or. Now, you can simply use `CTRL+Space` to access `$and` and other property types.
2. The old syntax did not align with typical JavaScript practices. JavaScript APIs generally operate on object literals rather than builders.
3. We believe the new syntax is more readable. Philosophically, code is read hundreds of times for every time it is written. Optimizing for code longevity is therefore the approach we chose.