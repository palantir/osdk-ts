---
sidebar_position: 4
---

# Platform APIs with MSW

`createMockClient` only stubs ontology calls (object types, queries, object sets). It does **not** intercept the Foundry Platform APIs in `@osdk/foundry.*` and `@osdk/internal.foundry.*` — those go through the regular `fetch` path. To keep them off the network in tests, intercept them with [MSW](https://mswjs.io/).

## How it works

The mock client allows users to stub platform SDK requests using a network request stubbing library. It uses a placeholder base URL:

```
https://mock.invalid/
```

Every platform call your code makes will resolve against that origin. Your job in tests is to give MSW handlers for the specific paths your function hits.

## Setup

Install MSW as a dev dependency:

```bash
npm install --save-dev msw
```

Stand up a Node server in your test file. The standard MSW lifecycle hooks reset handlers between tests so each `it` is isolated:

```ts
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";

const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

`onUnhandledRequest: "error"` is recommended — it surfaces accidental platform calls without a handler instead of letting them fall through.

## Example

A function that loads the current user and gates on a username suffix:

```ts
import type { Client } from "@osdk/client";
import { Users } from "@osdk/foundry.admin";

export async function requireAdminUser(client: Client): Promise<string> {
  const user = await Users.getCurrent(client);
  if (!user.username.endsWith("@admin")) {
    throw new Error(`User ${user.username} is not an admin`);
  }
  return user.username;
}
```

The test stubs the platform endpoint with MSW and uses `createMockClient()` for the `Client`:

```ts
import type { getCurrent } from "@osdk/foundry.admin/User";
import { createMockClient } from "@osdk/functions-testing.experimental/experimental";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { requireAdminUser } from "./requireAdminUser.js";

type User = Awaited<ReturnType<typeof getCurrent>>;

const server = setupServer();
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("requireAdminUser", () => {
  it("resolves when the current user is an admin", async () => {
    server.use(
      http.get(
        "https://mock.invalid/api/v2/admin/users/getCurrent",
        () =>
          HttpResponse.json(
            {
              id: "user-1",
              username: "alice@admin",
              givenName: "Alice",
              familyName: "Admin",
              realm: "default",
              status: "ACTIVE",
              attributes: {},
            } satisfies User,
          ),
      ),
    );

    const mockClient = createMockClient();
    expect(await requireAdminUser(mockClient)).toBe("alice@admin");
  });

  it("rejects when the user is not an admin", async () => {
    server.use(
      http.get(
        "https://mock.invalid/api/v2/admin/users/getCurrent",
        () =>
          HttpResponse.json(
            {
              id: "user-2",
              username: "bob@example.com",
              givenName: "Bob",
              familyName: "Example",
              realm: "default",
              status: "ACTIVE",
              attributes: {},
            } satisfies User,
          ),
      ),
    );

    const mockClient = createMockClient();
    await expect(requireAdminUser(mockClient)).rejects.toThrow(
      "User bob@example.com is not an admin",
    );
  });
});
```

:::tip Type your fixtures against the real platform type
The MSW response body is just a JSON literal, so it's easy for it to drift from the actual `@osdk/foundry.*` shape (a renamed field, a new required property, etc.) and only blow up at runtime.

To keep the fixture tied to the real type, derive it from the platform function itself:

```ts
import type { somePlatformFn } from "@osdk/foundry.<service>/<Resource>";

type ResponseShape = Awaited<ReturnType<typeof somePlatformFn>>;
```

Then assert the response body with `satisfies ResponseShape`:

```ts
HttpResponse.json(
  {/* ...response fields... */} satisfies ResponseShape,
);
```

`Awaited<ReturnType<typeof fn>>` unwraps the `Promise<T>` returned by an `async` function, giving you `T` directly. The next time `@osdk/foundry.*` ships a breaking change, your fixture fails to compile rather than your test hanging on a malformed response.

In the example above, the concrete instance of this pattern is `type User = Awaited<ReturnType<typeof getCurrent>>` — name the alias after whatever the endpoint returns.
:::

## Tips

- **Use `onUnhandledRequest: "error"`.** Easier to spot a missing handler than to debug a hung test.
- **One server, many handlers.** `setupServer()` once at module scope; `server.use(...)` inside each `it` for the per-test handler. `afterEach(server.resetHandlers)` clears them.
- **Mixing with ontology stubs.** A single `mockClient` handles both kinds of call simultaneously — ontology calls go through `when` / `whenObjectSet` / `whenQuery`, platform calls go through MSW.
