# useObjectSet

Source: https://palantir.github.io/osdk-ts/reference/react/use-object-set

> Load a live, paged list from an ObjectSet, with filters, set operations, pivots, and derived properties applied on top.

```ts
import { useObjectSet } from "@osdk/react";

function useObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  BaseRDPs extends Record<string, SimplePropertyDef> = never,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  baseObjectSet: ObjectSet<Q, BaseRDPs> | undefined,
  options?: UseObjectSetOptions<Q, RDPs>,
): UseObjectSetResult<Q, RDPs>;
```

Starts from an `ObjectSet` you build with the client and applies `options` before fetching. Pass `undefined` to wait; the hook does not fetch until it has a set. The hook keys the query on the set's wire definition, so a new `ObjectSet` instance with the same definition does not refetch.

## Options

### UseObjectSetOptions

| Prop                | Type                                                          | Description                                                                                                                                                                                                                                                                                                                                             |
| ------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `where?`            | `WhereClause<Q, RDPs>`                                        | Where clause for filtering                                                                                                                                                                                                                                                                                                                              |
| `withProperties?`   | `{ [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]>; }` | Derived properties to add to the object set                                                                                                                                                                                                                                                                                                             |
| `union?`            | `ObjectSet<Q, never>[]`                                       | Object sets to union with                                                                                                                                                                                                                                                                                                                               |
| `intersect?`        | `ObjectSet<Q, never>[]`                                       | Object sets to intersect with                                                                                                                                                                                                                                                                                                                           |
| `subtract?`         | `ObjectSet<Q, never>[]`                                       | Object sets to subtract from                                                                                                                                                                                                                                                                                                                            |
| `pivotTo?`          | `LinkNames<Q>`                                                | Link to pivot to (changes the type). Cannot be combined with `streamUpdates`. The server does not support websocket subscriptions for link-traversal queries.                                                                                                                                                                                           |
| `pageSize?`         | `number`                                                      | The preferred page size for the list                                                                                                                                                                                                                                                                                                                    |
| `orderBy?`          | `{ [K in PropertyKeys<Q>]?: "asc" \| "desc" \| undefined; }`  | Sort order for the results                                                                                                                                                                                                                                                                                                                              |
| `dedupeIntervalMs?` | `number`                                                      | Minimum time between fetch requests in milliseconds (defaults to 2000ms)                                                                                                                                                                                                                                                                                |
| `autoFetchMore?`    | `number \| boolean`                                           | Automatically fetch additional pages on initial load. - `true`: Fetch all available pages automatically - `number`: Fetch pages until at least this many items are loaded - `undefined` (default): Only fetch the first page, user must call fetchMore()                                                                                                |
| `streamUpdates?`    | `boolean`                                                     | Enable streaming updates via websocket subscription. When true, the object set will automatically update when matching objects are added, updated, or removed. Cannot be combined with `pivotTo`. The server does not support websocket subscriptions for link-traversal queries. Default: `false`                                                      |
| `$select?`          | `readonly PropertyKeys<Q>[]`                                  | Restrict which properties are returned for each object. When provided, only the specified properties will be fetched, reducing payload sizes for list views.                                                                                                                                                                                            |
| `enabled?`          | `boolean`                                                     | Enable or disable the query. When `false`, the query does not run and the hook returns no data, even if the cache already holds a result. This is useful for: - Lazy/on-demand queries that should wait for user interaction - Dependent queries that need data from another query first - Conditional queries based on component state Default: `true` |

## Returns

### UseObjectSetResult

| Prop           | Type                                                                           | Description                                                               |
| -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `data`         | `Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[] \| undefined` | The fetched data with derived properties                                  |
| `isLoading`    | `boolean`                                                                      | Whether data is currently being loaded                                    |
| `error`        | `Error \| undefined`                                                           | Any error that occurred during fetching                                   |
| `isOptimistic` | `boolean`                                                                      |                                                                           |
| `fetchMore`    | `(() => Promise<void>) \| undefined`                                           | Function to fetch more pages (undefined if no more pages)                 |
| `hasMore`      | `boolean`                                                                      |                                                                           |
| `objectSet`    | `ObjectSet<Q, RDPs> \| undefined`                                              | The final ObjectSet after all transformations                             |
| `totalCount?`  | `string`                                                                       | The total count of objects matching the query (if available from the API) |
| `refetch`      | `() => Promise<void>`                                                          |                                                                           |

While a new query loads, `data` keeps the last completed result for the same object type, so the list does not flash empty between filters.

## Example

```tsx title="src/OfficeOccupants.tsx"
import { Office } from "@my-app/sdk";
import { useObjectSet, useOsdkClient } from "@osdk/react";
import { useMemo } from "react";

export function OfficeOccupants({ city }: { city: string }) {
  const client = useOsdkClient();
  const occupants = useMemo(
    () => client(Office).where({ city }).pivotTo("occupants"),
    [client, city],
  );
  const { data, isLoading, error } = useObjectSet(occupants, {
    orderBy: { fullName: "asc" },
  });

  return (
    <section aria-busy={isLoading}>
      {error && <p role="alert">{error.message}</p>}
      <ul>
        {data?.map((employee) => (
          <li key={employee.$primaryKey}>{employee.fullName}</li>
        ))}
      </ul>
    </section>
  );
}
```

## See also

- [Object sets](https://palantir.github.io/osdk-ts/react/object-sets.md)
- [useStableObjectSet](https://palantir.github.io/osdk-ts/reference/react/use-stable-object-set.md)
- [ObjectSet](https://palantir.github.io/osdk-ts/reference/client/object-set.md)