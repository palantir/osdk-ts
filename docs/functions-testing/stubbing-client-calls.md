---
sidebar_position: 3
---

# Stubbing client calls

`createMockClient()` returns a value that satisfies the OSDK `Client` interface, plus four extra methods for setting up stubs:

- **`client.when(callback)`** — stub a call rooted at the client. Pass a callback that re-builds the chain your code under test will make (`stub(Employee).where(...).fetchPage()`, etc.). Returns a builder whose `.thenReturn*` matcher depends on the call shape.
- **`client.whenObjectSet(set, callback)`** — stub a call on a specific `MockObjectSet` (from `createMockObjectSet`). Use this when your code is handed an object set directly, or for a many-link backed by a mock object set.
- **`client.whenQuery(query, params?)`** — stub a query call (a generated function on the ontology). Returns a builder with `.thenReturn(value)` and `.thenThrow(error)`.
- **`client.clearStubs()`** — remove every stub registered on this client.

Each registrar is covered in turn below.

## `when` — ontology calls rooted at the client

Re-build the call chain your code under test will make. The argument is a `Client`-like factory; chain `where`, `aggregate`, `fetchPage`, `fetchOne`, etc. on it just as your code would.

### `fetchPage` → `thenReturnObjects`

```ts
const mockClient = createMockClient();
const emp = createMockOsdkObject(Employee, { employeeId: 1, fullName: "John" });

mockClient
  .when((stub) => stub(Employee).fetchPage())
  .thenReturnObjects([emp]);

const page = await mockClient(Employee).fetchPage();
page.data; // [emp]
```

`thenReturnObjects` also wires up `asyncIter` — if your code iterates instead of paginating, the same stub serves both.

### `fetchOne` → `thenReturnObject`

```ts
mockClient
  .when((stub) => stub(Employee).fetchOne(1))
  .thenReturnObject(emp);
```

### `aggregate` → `thenReturnAggregation`

```ts
mockClient
  .when((stub) =>
    stub(Employee)
      .where({ employeeId: { $eq: 5 } })
      .aggregate({ $select: { "employeeLocation:exactDistinct": "asc" } })
  )
  .thenReturnAggregation({ employeeLocation: { exactDistinct: 3 } });
```

Stub `$groupBy` aggregations the same way — return an array of group rows:

```ts
mockClient
  .when((stub) =>
    stub(Employee).aggregate({
      $select: { "employeeId:max": "unordered" },
      $groupBy: { employeeId: "exact" },
    })
  )
  .thenReturnAggregation([
    { $group: { employeeId: 5 }, employeeId: { max: 5 } },
  ]);
```

### Multiple stubs on the same client

You can register as many stubs as you want. They're matched against the calls your code makes; the order you register them in doesn't matter beyond that.

## `whenObjectSet` — calls on a `MockObjectSet` {#when-object-set}

When code receives an `ObjectSet` directly (not built from `client(Type)`) — or when you're stubbing aggregate/fetch behavior for a many-link backed by a `MockObjectSet` — register stubs against the set itself.

```ts
import { createMockObjectSet } from "@osdk/functions-testing.experimental/experimental";

const empSet = createMockObjectSet(Employee);
const emp1 = createMockOsdkObject(Employee, {
  employeeId: 1,
  fullName: "Alice",
});
const emp2 = createMockOsdkObject(Employee, { employeeId: 2, fullName: "Bob" });

mockClient
  .whenObjectSet(empSet, (os) => os.fetchPage())
  .thenReturnObjects([emp1, emp2]);

mockClient
  .whenObjectSet(
    empSet,
    (os) => os.aggregate({ $select: { $count: "unordered" } }),
  )
  .thenReturnAggregation({ $count: 42 });
```

The same `empSet` can then be passed wherever your code expects an `ObjectSet<Employee>` — to a function under test, or as a many-link target on a parent mock object.

## `whenQuery` — Foundry queries

Queries (functions on the ontology) have a dedicated registrar:

```ts
import { addOne } from "your-app-sdk";

mockClient.whenQuery(addOne, { n: 5 }).thenReturn(6);
mockClient.whenQuery(addOne, { n: 99 }).thenThrow(new Error("boom"));
```

`thenReturn(value)` resolves the query promise to `value`; `thenThrow(error)` rejects it. Different param objects can be stubbed independently:

```ts
mockClient.whenQuery(addOne, { n: 10 }).thenReturn(11);
mockClient.whenQuery(addOne, { n: 20 }).thenReturn(21);
```

Queries with array params follow the same pattern — match the params your code passes:

```ts
mockClient
  .whenQuery(queryTypeReturnsArray, { people: ["Alice", "Bob"] })
  .thenReturn(["Alice - processed", "Bob - processed"]);
```

## How stub builders are picked

The matcher you call (`thenReturnObjects` / `thenReturnObject` / `thenReturnAggregation`) is determined by the type of expression inside the `when` callback. Roughly:

| Expression returns                                                            | Builder                   | Matcher                        |
| ----------------------------------------------------------------------------- | ------------------------- | ------------------------------ |
| `Promise<PageResult<T>>`, `AsyncIterableIterator<T>`, `Result<PageResult<T>>` | `FetchPageStubBuilder<T>` | `thenReturnObjects(items)`     |
| `Promise<Osdk.Instance<T>>`, `Result<Osdk.Instance<T>>`                       | `FetchOneStubBuilder<T>`  | `thenReturnObject(obj)`        |
| Anything else (aggregations, scalars)                                         | `AggregateStubBuilder<T>` | `thenReturnAggregation(value)` |

The result-wrapped variants (`fetchPageWithErrors`, `fetchOneWithErrors`, etc.) resolve to the same builder as their non-`WithErrors` cousins — they carry the success branch through and are typed accordingly.

## Resetting between tests

`mockClient.clearStubs()` removes every stub registered on the client. Useful if you reuse a client across multiple `it` blocks; otherwise just construct a fresh `createMockClient()` per test for isolation.
