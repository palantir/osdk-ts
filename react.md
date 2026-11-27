# React SDK

Source: https://palantir.github.io/osdk-ts/react

> Build reactive Foundry apps with @osdk/react hooks backed by one shared, normalized cache.

Related Palantir Foundry documentation:
- [OSDK React applications](https://www.palantir.com/docs/foundry/ontology-sdk-react-applications/overview)

`@osdk/react` wraps the OSDK client in hooks. Every hook reads from one normalized cache, so a list, a detail view, and a link panel that show the same object stay in sync, and an action updates them all without manual refetching.

```tsx title="src/EmployeeList.tsx"
import { useOsdkObjects } from "@osdk/react";
import { Employee } from "@my-app/sdk";

export function EmployeeList() {
  const { data, isLoading, error } = useOsdkObjects(Employee, {
    where: { department: "Engineering" },
    orderBy: { fullName: "asc" },
  });

  return (
    <section aria-busy={isLoading}>
      {error != null && <p role="alert">Could not load employees.</p>}
      <ul>
        {data?.map((employee) => (
          <li key={employee.$primaryKey}>{employee.fullName}</li>
        ))}
      </ul>
    </section>
  );
}
```

New to OSDK? Start with the [Quickstart](https://palantir.github.io/osdk-ts/quickstart.md), then [create a client and add OsdkProvider](https://palantir.github.io/osdk-ts/client.md).

## Hooks

| Hook | Use it to | Guide |
| --- | --- | --- |
| `useOsdkObjects` | Load a list of objects with filters, sorting, and paging | [Query objects](https://palantir.github.io/osdk-ts/react/objects.md) |
| `useOsdkObject` | Load one object by primary key | [Query objects](https://palantir.github.io/osdk-ts/react/objects.md#load-one-object) |
| `useLinks` | Load the objects linked to an object | [Follow links](https://palantir.github.io/osdk-ts/react/links.md) |
| `useObjectSet` | Combine, intersect, subtract, or pivot object sets | [Work with object sets](https://palantir.github.io/osdk-ts/react/object-sets.md) |
| `useStableObjectSet` | Keep an object set referentially stable across renders | [Work with object sets](https://palantir.github.io/osdk-ts/react/object-sets.md) |
| `useOsdkAggregation` | Count, sum, average, and group on the server | [Aggregate data](https://palantir.github.io/osdk-ts/react/aggregations.md) |
| `useOsdkAction` | Apply and validate actions | [Apply actions](https://palantir.github.io/osdk-ts/react/actions.md) |
| `useDebouncedCallback` | Debounce validation while a user types | [Apply actions](https://palantir.github.io/osdk-ts/react/actions.md) |
| `useOsdkFunction`, `useOsdkFunctions` | Call Ontology functions with caching | [Call functions](https://palantir.github.io/osdk-ts/react/functions.md) |
| `useObservableClient` | Invalidate cached data by hand | [Invalidate the cache](https://palantir.github.io/osdk-ts/react/cache-invalidation.md) |
| `useOsdkClient` | Get the client for one-off, imperative calls | [Create a client](https://palantir.github.io/osdk-ts/client.md) |
| `useOsdkMetadata` | Read object and action type metadata | [Reference](https://palantir.github.io/osdk-ts/reference.md) |

User, group, and marking hooks live in `@osdk/react/platform-apis`; see [Users and markings](https://palantir.github.io/osdk-ts/react/platform-apis.md). Test utilities live in `@osdk/react/testing`; see [Test your app](https://palantir.github.io/osdk-ts/react/testing.md).

## How data flows

- [Caching and reactivity](https://palantir.github.io/osdk-ts/concepts/caching.md): How hooks share one cache and stay current.
- [Loading and errors](https://palantir.github.io/osdk-ts/concepts/loading-and-errors.md): Render without flashing while data refreshes.
- [Optimistic updates](https://palantir.github.io/osdk-ts/react/optimistic-updates.md): Show the result of an action before the server confirms it.
- [Devtools](https://palantir.github.io/osdk-ts/devtools.md): Inspect the cache, queries, and actions in your running app.