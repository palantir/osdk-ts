---
sidebar_position: 2
---

# Mock objects and links

`createMockOsdkObject` builds a fully-shaped `Osdk.Instance<T>` that you can pass to your code under test or stash inside a `.thenReturnObjects([...])` stub. This page covers the object shape, the `links` option (single, many, errors, mock object sets), and `createMockAttachment`.

## Arguments

`createMockOsdkObject` takes three arguments:

```ts
createMockOsdkObject(objectType, properties, options);
```

1. **`objectType`** — the generated object type constant from your SDK (e.g. `Employee`). The mock reads its `apiName` and `primaryKeyApiName` from this.
2. **`properties`** — the property values you want on the mock. Must include the primary key property; everything else is optional and only matters if your code reads it.
3. **`options`** — three optional fields:
   - **`links`** — mock data for the object's `$link` accessor. See [Links](#links) below.
   - **`titlePropertyApiName`** — the API name of the property that should back `$title`. See [Setting `$title`](#setting-title) below.
   - **`$rid`** — override the auto-generated `$rid`. Default is `"ri.mock.main.object.<apiName>.<primaryKey>"`.

The returned mock has the same shape as a real OSDK instance:

| Field                     | What it holds                                                             |
| ------------------------- | ------------------------------------------------------------------------- |
| `$apiName`, `$objectType` | The object type's API name.                                               |
| `$primaryKey`             | The value of the primary key property in `properties`.                    |
| `$title`                  | The value of the `titlePropertyApiName` property; `undefined` if not set. |
| `$rid`                    | `options.$rid` if provided, otherwise an auto-generated mock RID.         |
| `$objectSpecifier`        | `"<apiName>:<primaryKey>"`.                                               |
| `$link`                   | A proxy backed by `options.links`.                                        |
| `$clone(updates?)`        | Returns a fresh mock with merged property values.                         |

`$as` and the `$__EXPERIMENTAL__NOT_SUPPORTED_YET__*` accessors throw — they are not modelled in mocks.

## Basic usage

```ts
import { createMockOsdkObject } from "@osdk/functions-testing.experimental/experimental";
import { Employee } from "your-app-sdk";

const emp = createMockOsdkObject(
  Employee,
  { employeeId: 1, fullName: "John Doe" },
  { titlePropertyApiName: "fullName" },
);

emp.$primaryKey; // 1
emp.$title; // "John Doe"
emp.$objectSpecifier; // "Employee:1"
```

The primary key property is required. `createMockOsdkObject` reads `objectType.primaryKeyApiName` and throws if that key isn't present in `properties`.

## Setting `$title` {#setting-title}

OSDK doesn't know which property on a given object type is its "title" — that mapping lives in the ontology, not in the generated TypeScript. So if your code under test reads `obj.$title`, you have to tell the mock which property to surface there by passing `titlePropertyApiName`:

```ts
const emp = createMockOsdkObject(
  Employee,
  { employeeId: 1, fullName: "John Doe" },
  { titlePropertyApiName: "fullName" },
);

emp.$title; // "John Doe"
```

`titlePropertyApiName` must name a property you actually included in `properties` — `createMockOsdkObject` throws if it's missing. If you omit `titlePropertyApiName` entirely, `$title` is `undefined`.

## Links

The `links` option mirrors the link API names from the object type. Each value can be:

| Link multiplicity | Allowed values                                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Single            | A mock object &nbsp; or &nbsp; an `Error`                                                                              |
| Many              | An array of mock objects &nbsp; or &nbsp; a `MockObjectSet` (see [Mock object sets](#mock-object-sets) for the latter) |

### Single link — happy path

```ts
const office = createMockOsdkObject(Office, {
  officeId: "nyc",
  name: "New York Office",
});

const employee = createMockOsdkObject(
  Employee,
  { employeeId: 1, fullName: "John Doe" },
  { links: { officeLink: office } },
);

await employee.$link.officeLink.fetchOne();
// → office

(await employee.$link.officeLink.fetchOneWithErrors()).value;
// → office
```

### Single link — error path

Pass an `Error` instance to drive the failure branch of the calling code. `fetchOne()` rejects with the error, and `fetchOneWithErrors()` resolves to `{ error }`:

```ts
const employee = createMockOsdkObject(
  Employee,
  { employeeId: 1 },
  { links: { officeLink: new Error("link unavailable") } },
);

await expect(employee.$link.officeLink.fetchOne()).rejects.toThrow(
  "link unavailable",
);

const result = await employee.$link.officeLink.fetchOneWithErrors();
result.error; // the Error
result.value; // undefined
```

### Missing links throw a descriptive error

If your code reaches for `$link.someLink` and you didn't configure it, the accessor still exists — its `fetchOne` rejects (and `fetchOneWithErrors` resolves with `{ error }`) carrying the link name, object type, and primary key:

```ts
const employee = createMockOsdkObject(Employee, { employeeId: 1 });

await employee.$link.officeLink.fetchOne();
// rejects
```

### Many link — array

Pass an array; the `$link` accessor exposes the same call shapes a real many-link does:

```ts
const peep1 = createMockOsdkObject(Employee, {
  employeeId: 10,
  fullName: "Alice",
});
const peep2 = createMockOsdkObject(Employee, {
  employeeId: 11,
  fullName: "Bob",
});

const employee = createMockOsdkObject(
  Employee,
  { employeeId: 1 },
  { links: { peeps: [peep1, peep2] } },
);

(await employee.$link.peeps.fetchPage()).data;
// → [peep1, peep2]

await employee.$link.peeps.fetchOne(11);
// → peep2 (matched by $primaryKey)

for await (const peep of employee.$link.peeps.asyncIter()) {
  // peep1, peep2
}
```

`fetchOne(primaryKey)` throws when no array element has a matching `$primaryKey`. `aggregate()` is **not** supported on the array form — pass a [`MockObjectSet`](#mock-object-sets) instead.

### Many link — passing a `MockObjectSet`

A many-link can also be backed by a `MockObjectSet` instead of an array. Use this when your code calls `aggregate()`, `where()`, or other object-set methods on the link:

```ts
const employee = createMockOsdkObject(
  Employee,
  { employeeId: 1 },
  { links: { peeps: peepsSet } },
);
```

See [Mock object sets](#mock-object-sets) below for how to build `peepsSet` and stub calls on it.

## Mock object sets {#mock-object-sets}

`createMockObjectSet(objectType)` returns an `ObjectSet<T>` you can pass anywhere a real one would go — directly into a function under test, or as the value of a many-link in `createMockOsdkObject`. By itself the mock object set holds no data; you wire up its behavior by registering stubs against it on a `MockClient`.

```ts
import {
  createMockClient,
  createMockObjectSet,
  createMockOsdkObject,
} from "@osdk/functions-testing.experimental/experimental";

const mockClient = createMockClient();
const peepsSet = createMockObjectSet(Employee);

mockClient
  .whenObjectSet(
    peepsSet,
    (os) => os.aggregate({ $select: { $count: "unordered" } }),
  )
  .thenReturnAggregation({ $count: 7 });
```

Now `peepsSet.aggregate(...)` resolves to `{ $count: 7 }`. You can attach the same set to a parent mock object as a many-link:

```ts
const employee = createMockOsdkObject(
  Employee,
  { employeeId: 1 },
  { links: { peeps: peepsSet } },
);

const result = await employee.$link.peeps.aggregate({
  $select: { $count: "unordered" },
});
result.$count; // 7
```

You can register `fetchPage`, `where`, and other call shapes on the same set the same way — see [Stubbing client calls](./stubbing-client-calls.md#when-object-set) for the full builder reference.

## `createMockAttachment`

For function inputs of type `Attachment`, `createMockAttachment` returns a stand-in value with the surface your code can call against. Use it the same way you'd use `createMockOsdkObject`:

```ts
import { createMockAttachment } from "@osdk/functions-testing.experimental/experimental";

const att = createMockAttachment({
  rid: "ri.attachments.main.attachment.abc",
  filename: "report.pdf",
});
```

## Cloning and updates

`$clone` is supported and returns a fresh frozen mock with merged properties. Updating the primary key to a different value throws.

```ts
const updated = employee.$clone({ fullName: "Jane Doe" });
updated.$primaryKey; // unchanged
updated.fullName; // "Jane Doe"
```
