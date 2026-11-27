# useLinks

Source: https://palantir.github.io/osdk-ts/reference/react/use-links

> Load the objects linked from one or more source objects through a named link.

```ts
import { useLinks } from "@osdk/react";

function useLinks<T extends ObjectOrInterfaceDefinition, L extends LinkNames<T>>(
  objects: Osdk.Instance<T> | Array<Osdk.Instance<T>> | undefined,
  linkName: L,
  options?: UseLinksOptions<LinkedType<T, L>>,
): UseLinksResult<LinkedType<T, L>>;
```

Follows `linkName` from each source object and returns the linked objects as one list. Pass `undefined` while the source object is still loading; on the first render `links` is `undefined`, and once the hook subscribes it returns `links: []` with `isLoading: false` until the source arrives.

## Options

### UseLinksOptions

| Prop                               | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `where?`                           | `WhereClause<T>`                                             | Standard OSDK Where clause for filtering linked objects                                                                                                                                                                                                                                                                                                 |
| `pageSize?`                        | `number`                                                     | The preferred page size for the links list.                                                                                                                                                                                                                                                                                                             |
| `autoFetchMore?`                   | `number \| boolean`                                          | Fetch all pages when true, or at least this many linked objects per source when a number is provided. Defaults to manual pagination.                                                                                                                                                                                                                    |
| `orderBy?`                         | `{ [K in PropertyKeys<T>]?: "asc" \| "desc" \| undefined; }` | Sorting options for the linked objects                                                                                                                                                                                                                                                                                                                  |
| `$select?`                         | `readonly PropertyKeys<T>[]`                                 | Restrict which properties are returned for each linked object. When provided, only the specified properties will be fetched, reducing payload sizes for list views.                                                                                                                                                                                     |
| `mode?`                            | `"force" \| "offline"`                                       | The mode to use for fetching data. - undefined: Fetch data if not already in cache - "force": Always fetch fresh data - "offline": Only use cached data, don't make network requests                                                                                                                                                                    |
| `dedupeIntervalMs?`                | `number`                                                     | The number of milliseconds to wait after the last observed link change. Two uses of `useLinks` with the same parameters will only trigger one network request if the second is within `dedupeIntervalMs`.                                                                                                                                               |
| `enabled?`                         | `boolean`                                                    | Enable or disable the query. When `false`, the query does not run and the hook returns no data, even if the cache already holds a result. This is useful for: - Lazy/on-demand queries that should wait for user interaction - Dependent queries that need data from another query first - Conditional queries based on component state Default: `true` |
| `$includeAllBaseObjectProperties?` | `boolean`                                                    | When true, includes all properties of the underlying concrete object type for interface link targets. Has no effect when the link target is a plain object type.                                                                                                                                                                                        |
| `resolveToObjectType?`             | `boolean`                                                    |                                                                                                                                                                                                                                                                                                                                                         |

## Returns

### UseLinksResult

| Prop                              | Type                                                                                                    | Description                                                                                                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                           | `Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, {}>[] \| undefined`                            |                                                                                                                                                                                  |
| `linkedObjectsBySourcePrimaryKey` | `ReadonlyMap<string \| number, readonly Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, {}>[]>` | Maps each source object's primary key to its linked object instances. Useful when observing links from multiple source objects to determine which source links to which targets. |
| `isLoading`                       | `boolean`                                                                                               |                                                                                                                                                                                  |
| `error`                           | `Error \| undefined`                                                                                    |                                                                                                                                                                                  |
| `isOptimistic`                    | `boolean`                                                                                               | Refers to whether the links are optimistic or not.                                                                                                                               |
| `fetchMore`                       | `(() => Promise<unknown>) \| undefined`                                                                 | Fetch more linked objects if pagination is supported                                                                                                                             |
| `hasMore`                         | `boolean`                                                                                               | Indicates if there are more linked objects available to fetch                                                                                                                    |

## Example

```tsx title="src/DirectReports.tsx"
import { Employee } from "@my-app/sdk";
import { useLinks, useOsdkObject } from "@osdk/react";

export function DirectReports({ employeeId }: { employeeId: number }) {
  const { object: employee } = useOsdkObject(Employee, employeeId);
  const { links: reports, isLoading, error } = useLinks(employee, "reports", {
    orderBy: { fullName: "asc" },
  });

  return (
    <section aria-busy={isLoading}>
      {error && <p role="alert">{error.message}</p>}
      <ul>
        {reports?.map((report) => (
          <li key={report.$primaryKey}>{report.fullName}</li>
        ))}
      </ul>
    </section>
  );
}
```

## See also

- [Load linked objects](https://palantir.github.io/osdk-ts/react/links.md)