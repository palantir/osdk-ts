# FAQ for the Typescript OSDK v2

## Why do some packages have $ontologyRid and others don't?

Some packages are designed for usage across multiple foundry installs. As such, putting an $ontologyRid within the generated code would only be useful for the foundry stack that the package originated from. On other stacks it would not work.

In order to avoid confusion, when we generate these types of packages we do not generate an `$ontologyRid` and you will need to provide that value another way when constructing your client.

## Why does the client get passed an object? Why get rid of client.ontology.Foo...?

First, if you want the discovery you can always import like this:

```ts
import * as MyOsdk from "@my/osdk";

MyOsdk.$Objects...
```

Why?

1. Our consumers can tree shake and produce more compact bundles that only include whats needed, including using lazy loading.
2. When the client logic was embedded in the OSDK (as it was in v1) it made it very difficult to create generic libraries as each client was effectively different.
3. Future features of the platform will include the ability to use multiple osdk packages together at the same time and your users don't have to pay for the duplicated js downloads.
4. There are features coming soon that are very exciting but will necessitate referencing these objects to work. The `client(Foo)` syntax is part of keeping that consistent.

## Why did the where clause change compared to v1?

1. In the old way, you had to know about importing `Op` to do things like and/not/or, whereas now you can just CTRL+Space and see that you can use `$and` as well as your property types.
2. The old syntax didn't feel like javascript. In javascript, you generally see APIs that work on object literals, not on builders.
3. We think its more legible. Philosophically, you read code 100s of times for every time you write it and so optimizing for the longevity of every code base seems best.