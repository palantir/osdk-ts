---
sidebar_position: 1
---

# Getting Started

`@osdk/functions-testing.experimental` lets you unit-test code that takes an OSDK `Client` — including Foundry Functions — without hitting a real Foundry. It gives you:

- **`createMockClient`** — a `Client` you stub with fluent `.when` / `.whenObjectSet` / `.whenQuery` matchers.
- **`createMockOsdkObject`** — construct fully-shaped `Osdk.Instance` values (`$primaryKey`, `$title`, `$rid`, `$link`, `$clone`).
- **`createMockObjectSet`** — a standalone `ObjectSet` you can pass anywhere a real one would go (or use as a many-link target for aggregates).
- **`createMockAttachment`** — a stand-in for attachment values.

:::warning Experimental
The package is published as `@osdk/functions-testing.experimental` and only exports through the `/experimental` subpath. The surface may evolve before promotion to a stable name.
:::

## Install

```bash
npm install --save-dev @osdk/functions-testing.experimental
```

The package has the following peer dependencies — they should already be in your project:

- `@osdk/api`
- `@osdk/client`
- `@osdk/functions`

It uses `vitest` internally for example tests; you can use any test runner in your own code.

## Import

Everything is exported from the `/experimental` subpath:

```ts
import {
  createMockAttachment,
  createMockClient,
  createMockObjectSet,
  createMockOsdkObject,
} from "@osdk/functions-testing.experimental/experimental";

import type {
  AggregateStubBuilder,
  FetchOneStubBuilder,
  FetchPageStubBuilder,
  QueryStubBuilder,
  StubBuilderFor,
} from "@osdk/functions-testing.experimental/experimental";
```

## Your first test

Suppose you have a Foundry Function that reads the first `Employee` from a page:

```ts
import type { Osdk } from "@osdk/api";
import type { Client } from "@osdk/client";
import { Employee } from "your-app-sdk";

export async function basicFetchPage(
  client: Client,
): Promise<Osdk.Instance<Employee>> {
  const objects = await client(Employee).fetchPage();
  const object = objects.data[0];
  if (object == null) throw new Error("No objects returned");
  return object;
}
```

A unit test with the mock client looks like this:

```ts
import {
  createMockClient,
  createMockOsdkObject,
} from "@osdk/functions-testing.experimental/experimental";
import { describe, expect, it } from "vitest";
import { Employee } from "your-app-sdk";
import { basicFetchPage } from "./basicFetchPage.js";

describe("basicFetchPage", () => {
  it("returns the first Employee", async () => {
    const mockClient = createMockClient();
    const mockEmployee = createMockOsdkObject(Employee, {
      employeeId: 1,
      fullName: "John",
    });

    mockClient
      .when((stub) => stub(Employee).fetchPage())
      .thenReturnObjects([mockEmployee]);

    const actual = await basicFetchPage(mockClient);
    expect(actual).toEqual(mockEmployee);
  });
});
```

Three things are happening:

1. **`createMockClient()`** returns a `MockClient` that satisfies the `Client` interface — pass it anywhere your code expects a real client.
2. **`createMockOsdkObject(Employee, { ... })`** builds a real-shaped instance.
3. **`mockClient.when(stub => stub(Employee).fetchPage()).thenReturnObjects([...])`** records a stub. The `stub` argument is a `Client`-like factory; you re-build the same call chain your code will execute.

## Where to next

- **[Mock objects and links](./mock-objects.md)** — single/many links, simulating link errors, and using a `MockObjectSet` for aggregate calls on a link.
- **[Stubbing client calls](./stubbing-client-calls.md)** — `when`, `whenObjectSet`, `whenQuery`, and which `.thenReturn*` matcher applies to each call shape.
- **[Platform APIs with MSW](./platform-apis-with-msw.md)** — testing functions that call `@osdk/foundry.*` (admin, etc.).
