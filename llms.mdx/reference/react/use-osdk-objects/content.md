# useOsdkObjects

Source: https://palantir.github.io/osdk-ts/reference/react/use-osdk-objects

> Load a live, cached list of objects of one type or interface.

```ts
import { useOsdkObjects } from "@osdk/react";

function useOsdkObjects<T extends ObjectOrInterfaceDefinition>(
  type: T,
  options?: UseOsdkObjectsOptions<T>,
): UseOsdkListResult<T>;
```

Subscribes the component to a list in the shared cache and re-renders when the list or any object in it changes. With `pivotTo`, the list holds the linked type instead of `T`; with `rids`, each object also carries `$rid`.

## Options

### UseOsdkObjectsOptions

| Prop                               | Type                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rids?`                            | `readonly string[]`                                           | Fetch objects by their RIDs (Resource Identifiers). When provided, starts with a static objectset containing these RIDs. Can be combined with `where` to filter the RID set, and with `orderBy` to sort results.                                                                                                                                                                                         |
| `where?`                           | `WhereClause<T, RDPs>`                                        | Standard OSDK Where clause with RDP support. When used with `rids`, filters the RID set. When used alone, filters all objects of the type.                                                                                                                                                                                                                                                               |
| `orderBy?`                         | `{ [K in PropertyKeys<T>]?: "asc" \| "desc" \| undefined; }`  | Sort results by one or more properties.                                                                                                                                                                                                                                                                                                                                                                  |
| `pageSize?`                        | `number`                                                      | The preferred page size for the list.                                                                                                                                                                                                                                                                                                                                                                    |
| `withProperties?`                  | `{ [K in keyof RDPs]: DerivedProperty.Creator<T, RDPs[K]>; }` | Define derived properties (RDPs) to be computed server-side and attached to each object. These properties will be available on the returned objects alongside their regular properties.                                                                                                                                                                                                                  |
| `dedupeIntervalMs?`                | `number`                                                      | The number of milliseconds to wait after the last observed list change. Two uses of `useOsdkObjects` with the same parameters will only trigger one network request if the second is within `dedupeIntervalMs`.                                                                                                                                                                                          |
| `enabled?`                         | `boolean`                                                     | Enable or disable the query. When `false`, the query does not run and the hook returns no data, even if the cache already holds a result. Default: `true`                                                                                                                                                                                                                                                |
| `intersectWith?`                   | `{ where: WhereClause<T, RDPs>; }[]`                          | Intersect the results with additional object sets. Each element defines a where clause for an object set to intersect with. The final result will only include objects that match ALL conditions.                                                                                                                                                                                                        |
| `pivotTo?`                         | `LinkNames<T>`                                                | Pivot to related objects through a link. This changes the return type from T to the linked object type. Cannot be combined with `streamUpdates`. The server does not support websocket subscriptions for link-traversal queries.                                                                                                                                                                         |
| `autoFetchMore?`                   | `number \| boolean`                                           | Causes the list to automatically fetch more as soon as the previous page has been loaded. If a number is provided, it will continue to automatically fetch more until the list is at least that long. - `true`: Fetch all available pages automatically - `number`: Fetch pages until at least this many items are loaded - `undefined` (default): Only fetch the first page, user must call fetchMore() |
| `streamUpdates?`                   | `boolean`                                                     | Enable streaming updates via websocket subscription. Cannot be combined with `pivotTo`. The server does not support websocket subscriptions for link-traversal queries.                                                                                                                                                                                                                                  |
| `$select?`                         | `readonly PropertyKeys<T>[]`                                  | Restrict which properties are returned for each object. When provided, only the specified properties will be fetched, reducing payload sizes for list views.                                                                                                                                                                                                                                             |
| `$loadPropertySecurityMetadata?`   | `boolean`                                                     | When true, loads per-property security metadata (marking requirements) alongside each object. The returned objects will have `$propertySecurities` populated with conjunctive/disjunctive marking requirements per property.                                                                                                                                                                             |
| `$includeAllBaseObjectProperties?` | `boolean`                                                     | When true, includes all properties of the underlying concrete object type for interface queries. Has no effect for non-interface queries.                                                                                                                                                                                                                                                                |
| `resolveToObjectType?`             | `boolean`                                                     |                                                                                                                                                                                                                                                                                                                                                                                                          |

## Returns

### UseOsdkListResult

| Prop           | Type                                                                                            | Description                                                                                                                                                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fetchMore`    | `(() => Promise<void>) \| undefined`                                                            | Function to fetch more pages (undefined if no more pages)                                                                                                                                                                      |
| `data`         | `Osdk.Instance<T, "$allBaseProperties" \| EXTRA_OPTIONS, PropertyKeys<T>, RDPs>[] \| undefined` | The fetched data with derived properties                                                                                                                                                                                       |
| `isLoading`    | `boolean`                                                                                       | Whether data is currently being loaded                                                                                                                                                                                         |
| `error`        | `Error \| undefined`                                                                            | Any error that occurred during fetching                                                                                                                                                                                        |
| `isOptimistic` | `boolean`                                                                                       | Refers to whether the ordered list of objects (only considering the $primaryKey) is optimistic or not. If you need to know if the contents of the list are optimistic you can do that on a per object basis with useOsdkObject |
| `totalCount?`  | `string`                                                                                        | The total count of objects matching the query (if available from the API)                                                                                                                                                      |
| `hasMore`      | `boolean`                                                                                       |                                                                                                                                                                                                                                |
| `objectSet`    | `ObjectSet<T, RDPs> \| undefined`                                                               |                                                                                                                                                                                                                                |
| `refetch`      | `() => Promise<void>`                                                                           |                                                                                                                                                                                                                                |

## Example

```tsx title="src/EngineeringList.tsx"
import { Employee } from "@my-app/sdk";
import { useOsdkObjects } from "@osdk/react";

export function EngineeringList() {
  const { data, isLoading, error, fetchMore } = useOsdkObjects(Employee, {
    where: { department: "Engineering" },
    orderBy: { fullName: "asc" },
    pageSize: 50,
  });

  return (
    <section>
      {error && <p role="alert">{error.message}</p>}
      <ul>
        {data?.map((employee) => (
          <li key={employee.$primaryKey}>{employee.fullName}</li>
        ))}
      </ul>
      {isLoading && <p>Loading…</p>}
      {fetchMore && <button onClick={() => void fetchMore()}>Load more</button>}
    </section>
  );
}
```

## See also

- [Load objects](https://palantir.github.io/osdk-ts/react/objects.md)
- [Filtering](https://palantir.github.io/osdk-ts/sdk/filtering.md)