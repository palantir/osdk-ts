# Documentation Examples

This file shows complete documentation examples for different types of components.

## Example 1: React Hook Documentation

This shows how to document a React hook like `useOsdkObject`.

---

````markdown
---
sidebar_position: 3
---

# useOsdkObject

Fetch and observe a single object by its primary key with automatic cache management and real-time updates.

*Experimental - import from `@osdk/react/experimental`*

## Basic Usage

```tsx
import { Employee } from "@my/osdk";
import { useOsdkObject } from "@osdk/react/experimental";

function EmployeeProfile({ employeeId }: { employeeId: string }) {
  const { data, isLoading, error } = useOsdkObject(Employee, employeeId);

  if (!data && isLoading) {
    return <div>Loading employee...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data.fullName}</h1>
      <p>Email: {data.email}</p>
      <p>Department: {data.department}</p>
    </div>
  );
}
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectType` | `OsdkObjectType<T>` | Yes | The object type (from your generated SDK) |
| `primaryKey` | `string \| number` | Yes | The primary key of the object to fetch |
| `options` | `UseOsdkObjectOptions` | No | Additional query options |

### Options

| Option | Type | Description |
|--------|------|-------------|
| `enabled` | `boolean` | Whether to execute the query (default: true) |
| `select` | `string[]` | Specific properties to fetch (fetches all by default) |

## Return Value

The hook returns an object with:

- `data` - The fetched object (undefined while initially loading)
- `isLoading` - True while fetching from server
- `isOptimistic` - True if the object has pending optimistic updates
- `error` - Error object if fetch failed
- `refetch` - Function to manually refetch the object

## Examples

### Conditional Fetching

Only fetch when a primary key is available:

```tsx
function UserProfile({ userId }: { userId: string | null }) {
  const { data: user } = useOsdkObject(User, userId ?? "", {
    enabled: userId !== null,
  });

  if (!userId) {
    return <div>Select a user to view profile</div>;
  }

  return <div>{user?.name}</div>;
}
```

### Selecting Specific Properties

Fetch only the properties you need:

```tsx
const { data: employee } = useOsdkObject(Employee, employeeId, {
  select: ["fullName", "email", "department"],
});

// Only these properties are available on `employee`
console.log(employee?.fullName, employee?.email);
```

### Manual Refetching

```tsx
function ProductDetail({ productId }: { productId: string }) {
  const { data: product, refetch, isLoading } = useOsdkObject(
    Product,
    productId,
  );

  return (
    <div>
      <h1>{product?.name}</h1>
      <button onClick={refetch} disabled={isLoading}>
        {isLoading ? "Refreshing..." : "Refresh"}
      </button>
    </div>
  );
}
```

## Real-time Updates

The hook automatically revalidates when:
- An action modifies the object
- The object is deleted
- Related objects change (via links)

Changes appear instantly with optimistic updates, then sync with the server.

```tsx
function EmployeeCard({ employeeId }: { employeeId: string }) {
  const { data: employee, isOptimistic } = useOsdkObject(Employee, employeeId);
  const { applyAction } = useOsdkAction($Actions.promoteEmployee);

  const handlePromote = () => {
    // Optimistic update happens instantly
    applyAction({ employee });
  };

  return (
    <div>
      <h2>{employee.title}</h2>
      {isOptimistic && <Badge>Saving...</Badge>}
      <button onClick={handlePromote}>Promote</button>
    </div>
  );
}
```

## Best Practices

:::tip
✓ DO: Keep components rendering during loading states

```tsx
// Show loading indicator while displaying cached data
function Profile({ userId }: { userId: string }) {
  const { data, isLoading } = useOsdkObject(User, userId);

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {data && <UserDetails user={data} />}
    </div>
  );
}
```
:::

:::warning
✗ DON'T: Use conditional hook calls

```tsx
// WRONG - violates Rules of Hooks
if (userId) {
  const { data } = useOsdkObject(User, userId);
}

// CORRECT - use enabled option
const { data } = useOsdkObject(User, userId ?? "", {
  enabled: userId !== null,
});
```
:::

:::tip
✓ DO: Use select when you only need specific properties

```tsx
// More efficient - only fetches needed properties
const { data } = useOsdkObject(Employee, id, {
  select: ["fullName", "email"],
});
```
:::

## Troubleshooting

### Data is undefined after loading

**Problem:** `data` remains undefined even when `isLoading` is false

**Possible causes:**
1. Object doesn't exist
2. Object was deleted
3. User lacks permission to view the object

**Solution:** Check the `error` property for details:

```tsx
const { data, error, isLoading } = useOsdkObject(Employee, employeeId);

if (!data && !isLoading) {
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return <div>Employee not found</div>;
}
```

### "Cannot read property of undefined" errors

**Problem:** Trying to access properties on undefined data

**Solution:** Use optional chaining or check for data first:

```tsx
// Wrong - crashes if data is undefined
<h1>{data.fullName}</h1>

// Correct - safely handles undefined
<h1>{data?.fullName ?? "Loading..."}</h1>

// Or conditional rendering
{data && <h1>{data.fullName}</h1>}
```

## Related

- [useOsdkObjects](/react/querying-data#useosdkobjects) - Query collections of objects
- [useOsdkAction](/react/actions) - Modify objects
- [useLinks](/react/querying-data#uselinks) - Navigate object relationships
````

---

## Example 2: Provider Component Documentation

This shows how to document a provider component like `OsdkProvider2`.

---

````markdown
---
sidebar_position: 1
---

# OsdkProvider2

Context provider that enables experimental OSDK React hooks throughout your application.

*Experimental - import from `@osdk/react/experimental`*

:::tip Recommended
Use `OsdkProvider2` for new applications to access modern features like reactive queries, automatic caching, and optimistic updates.
:::

## Basic Usage

```tsx
import { OsdkProvider2 } from "@osdk/react/experimental";
import { createClient } from "@osdk/client";
import ReactDOM from "react-dom/client";

// Create client once
const client = createClient(
  "https://your-stack.palantirfoundry.com",
  () => getAuthToken(),
);

// Wrap your app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client}>
    <App />
  </OsdkProvider2>,
);
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `client` | `Client` | Yes | OSDK client instance from `createClient()` |
| `children` | `ReactNode` | Yes | Your application components |

## Features Enabled

When wrapped in `OsdkProvider2`, components can use:

- **Query Hooks**
  - `useOsdkObjects` - Query collections
  - `useOsdkObject` - Fetch single objects
  - `useLinks` - Navigate relationships
  - `useObjectSet` - Advanced set operations
  - `useOsdkAggregation` - Server-side aggregations

- **Action Hooks**
  - `useOsdkAction` - Execute actions with validation and optimistic updates

- **Function Hooks**
  - `useOsdkFunction` - Execute OSDK functions

- **Platform API Hooks**
  - `useCurrentFoundryUser` - Get current user
  - `useFoundryUser` - Fetch specific user
  - `useFoundryUsersList` - Query users

- **Utilities**
  - `useOsdkClient` - Direct client access
  - `useOsdkMetadata` - Type metadata
  - `useDebouncedCallback` - Debouncing

## Complete Setup Example

```tsx
// client.ts - Create client once
import { createClient } from "@osdk/client";
import { $ontologyRid } from "@my/osdk";

export const client = createClient(
  import.meta.env.VITE_FOUNDRY_URL,
  $ontologyRid,
  async () => {
    // Your auth token logic
    return localStorage.getItem("auth_token") ?? "";
  },
);

// main.tsx - Setup provider
import { OsdkProvider2 } from "@osdk/react/experimental";
import { client } from "./client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider2 client={client}>
      <App />
    </OsdkProvider2>
  </React.StrictMode>,
);

// App.tsx - Use hooks anywhere
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function App() {
  const { data: todos } = useOsdkObjects(Todo);

  return (
    <div>
      {todos?.map(todo => (
        <div key={todo.$primaryKey}>{todo.title}</div>
      ))}
    </div>
  );
}
```

## Best Practices

:::tip
✓ DO: Create the client once and reuse it

```tsx
// client.ts
export const client = createClient(/* ... */);

// main.tsx
import { client } from "./client";
<OsdkProvider2 client={client}>
```
:::

:::warning
✗ DON'T: Create a new client on each render

```tsx
// WRONG - creates new client every render
<OsdkProvider2 client={createClient(/* ... */)}>
```
:::

:::tip
✓ DO: Place OsdkProvider2 at the root of your application

```tsx
// main.tsx or index.tsx
ReactDOM.render(
  <OsdkProvider2 client={client}>
    <App /> {/* All components can use hooks */}
  </OsdkProvider2>
);
```
:::

:::warning
✗ DON'T: Place OsdkProvider2 inside your components

```tsx
// WRONG - components outside can't use hooks
function App() {
  return (
    <>
      <Header /> {/* Can't use OSDK hooks! */}
      <OsdkProvider2 client={client}>
        <Content /> {/* Only this can use hooks */}
      </OsdkProvider2>
    </>
  );
}
```
:::

## Comparison with OsdkProvider

| Feature | OsdkProvider (stable) | OsdkProvider2 (experimental) |
|---------|----------------------|------------------------------|
| Client access | ✓ `useOsdkClient` | ✓ `useOsdkClient` |
| Metadata | ✓ `useOsdkMetadata` | ✓ `useOsdkMetadata` |
| Reactive queries | ✗ | ✓ `useOsdkObjects`, `useOsdkObject` |
| Actions | ✗ | ✓ `useOsdkAction` |
| Automatic caching | ✗ | ✓ Built-in |
| Optimistic updates | ✗ | ✓ Built-in |
| Real-time subscriptions | ✗ | ✓ Automatic |

## Troubleshooting

### "Cannot read property 'observableClient' of undefined"

**Problem:** A component using experimental hooks is not wrapped in `OsdkProvider2`

**Solution:** Ensure `OsdkProvider2` is at the root of your app:

```tsx
// Wrong
ReactDOM.render(<App />); // Missing provider!

// Correct
ReactDOM.render(
  <OsdkProvider2 client={client}>
    <App />
  </OsdkProvider2>
);
```

### "Property 'store' is missing in type"

**Problem:** Version mismatch between `@osdk/client` and `@osdk/react`

**Solution:** Ensure all OSDK packages use compatible versions:

```bash
pnpm install @osdk/client@beta @osdk/react@beta @osdk/api@beta
```

### Hooks return stale data

**Problem:** Creating a new client instance on each render

**Solution:** Create the client once outside your components:

```tsx
// Wrong - new client every render
function App() {
  const client = createClient(/* ... */); // DON'T DO THIS
  return <OsdkProvider2 client={client}>...</OsdkProvider2>;
}

// Correct - client created once
const client = createClient(/* ... */);
function App() {
  return <OsdkProvider2 client={client}>...</OsdkProvider2>;
}
```

## Related

- [Getting Started](/react/getting-started) - Full setup guide
- [useOsdkObjects](/react/querying-data#useosdkobjects) - Query collections
- [useOsdkAction](/react/actions) - Execute actions
````

---

## Example 3: Utility Function Documentation

This shows how to document a utility function like `createClient`.

---

````markdown
---
sidebar_position: 1
---

# createClient

Creates an OSDK client instance for interacting with your Foundry ontology.

*Stable - import from `@osdk/client`*

## Basic Usage

```ts
import { createClient } from "@osdk/client";
import { $ontologyRid } from "@my/osdk";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  $ontologyRid,
  async () => {
    // Return a valid auth token
    return await getAuthToken();
  },
);
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | `string` | Yes | Your Foundry stack URL |
| `ontologyRid` | `string` | Yes | RID of your ontology (from generated SDK) |
| `auth` | `() => string \| Promise<string>` | Yes | Function that returns an auth token |
| `options` | `ClientOptions` | No | Additional configuration |

### ClientOptions

| Option | Type | Description |
|--------|------|-------------|
| `logger` | `Logger` | Custom logger for debugging |
| `fetch` | `typeof fetch` | Custom fetch implementation |

## Return Value

Returns a `Client` instance with methods for:
- Querying objects
- Executing actions
- Fetching metadata
- Managing subscriptions

## Examples

### With Environment Variables

```ts
const client = createClient(
  import.meta.env.VITE_FOUNDRY_URL,
  $ontologyRid,
  async () => localStorage.getItem("token") ?? "",
);
```

### With OAuth

```ts
import { createClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";

const auth = createPublicOauthClient(
  "your-client-id",
  "https://your-stack.palantirfoundry.com",
  "https://localhost:8080/auth/callback",
);

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  $ontologyRid,
  () => auth.getTokenOrUndefined() ?? "",
);
```

### With Custom Logger

```ts
import { createClient, Logger } from "@osdk/client";

const logger: Logger = {
  debug: console.debug,
  info: console.info,
  warn: console.warn,
  error: console.error,
};

const client = createClient(
  foundryUrl,
  $ontologyRid,
  authProvider,
  { logger },
);
```

## Usage with React

Create the client once and pass to `OsdkProvider2`:

```tsx
// client.ts
import { createClient } from "@osdk/client";
import { $ontologyRid } from "@my/osdk";

export const client = createClient(
  import.meta.env.VITE_FOUNDRY_URL,
  $ontologyRid,
  async () => localStorage.getItem("token") ?? "",
);

// main.tsx
import { OsdkProvider2 } from "@osdk/react/experimental";
import { client } from "./client";

ReactDOM.render(
  <OsdkProvider2 client={client}>
    <App />
  </OsdkProvider2>
);
```

## Best Practices

:::tip
✓ DO: Create the client once at the module level

```ts
// client.ts
export const client = createClient(/* ... */);
```
:::

:::warning
✗ DON'T: Create a new client for each request

```ts
// WRONG - inefficient and breaks caching
function fetchData() {
  const client = createClient(/* ... */);
  return client(MyObject).fetchPage();
}
```
:::

:::tip
✓ DO: Use environment variables for URLs

```ts
const client = createClient(
  import.meta.env.VITE_FOUNDRY_URL,
  $ontologyRid,
  authProvider,
);
```
:::

## Troubleshooting

### "Invalid auth token" errors

**Problem:** Auth function returns an empty or expired token

**Solution:** Ensure your auth provider returns a valid token:

```ts
const client = createClient(
  foundryUrl,
  $ontologyRid,
  async () => {
    const token = await getAuthToken();
    if (!token) {
      throw new Error("No auth token available");
    }
    return token;
  },
);
```

### TypeScript errors about client type

**Problem:** Generated SDK version doesn't match client version

**Solution:** Regenerate your SDK with matching versions:

1. Update `@osdk/client` to latest beta
2. Regenerate your SDK in Developer Console
3. Ensure all `@osdk/*` packages use compatible versions

## Related

- [createMinimalClient](/client/create-minimal-client) - Lightweight client
- [OAuth Setup](/client/oauth) - OAuth authentication
- [OsdkProvider2](/react/getting-started#osdkprovider2) - React integration
````
