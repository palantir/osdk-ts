# useOsdkAggregation

Source: https://palantir.github.io/osdk-ts/reference/react/use-osdk-aggregation

> Run a server-side aggregation, such as counts or averages grouped by a property, and keep the result cached.

```ts
import { useOsdkAggregation } from "@osdk/react";

function useOsdkAggregation<
  Q extends ObjectOrInterfaceDefinition,
  const A extends AggregateOpts<Q>,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options: UseOsdkAggregationOptions<Q, A, RDPs>,
): UseOsdkAggregationResult<Q, A>;

function useOsdkAggregation<
  Q extends ObjectTypeDefinition,
  const A extends AggregateOpts<Q>,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options: UseOsdkAggregationOptionsWithObjectSet<Q, A, RDPs>,
): UseOsdkAggregationResult<Q, A>;
```

Aggregates the objects of `type`, or of `objectSet` when you pass one, after applying `where` and `intersectWith`. `aggregate` takes the same `$select` and `$groupBy` clauses as `ObjectSet.aggregate`.

## Options

### UseOsdkAggregationOptions

| Prop                | Type                                                          | Description                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `where?`            | `WhereClause<T, RDPs>`                                        | Standard OSDK Where clause to filter objects before aggregation                                                                                                                                                                                                                                                                                                          |
| `withProperties?`   | `{ [K in keyof RDPs]: DerivedProperty.Creator<T, RDPs[K]>; }` | Define derived properties (RDPs) to be computed server-side. The derived properties can be used in the where clause and aggregation groupBy/select.                                                                                                                                                                                                                      |
| `intersectWith?`    | `{ where: WhereClause<T, RDPs>; }[]`                          | Intersect the main query with additional filtered object sets. Each entry creates a separate object set with its own where clause, and the final result is the intersection of all sets.                                                                                                                                                                                 |
| `aggregate`         | `A`                                                           | Aggregation options including `$groupBy` and `$select`                                                                                                                                                                                                                                                                                                                   |
| `dedupeIntervalMs?` | `number`                                                      | The number of milliseconds to wait after the last observed aggregation change. Two uses of `useOsdkAggregation` with the same parameters will only trigger one network request if the second is within `dedupeIntervalMs`.                                                                                                                                               |
| `enabled?`          | `boolean`                                                     | Enable or disable the aggregation. When `false`, the hook does not subscribe or fetch from the server and reports `data: undefined`, `isLoading: false`, and `error: undefined`. `refetch()` is also a no-op while disabled, so it will not invalidate the object type or trigger network requests. Setting it back to `true` re-subscribes and fetches. Default: `true` |

The second overload (`UseOsdkAggregationOptionsWithObjectSet`) adds a required `objectSet: ObjectSet<Q>` to aggregate a pivoted, filtered, or composed set. It accepts object types only, not interfaces.

## Returns

| Field | Type | Description |
| --- | --- | --- |
| `data` | `AggregationsResults<Q, A> \| undefined` | The aggregation result. An array of groups when `$groupBy` is set, otherwise one object of metrics. |
| `isLoading` | `boolean` | `true` while enabled and the result has not loaded. |
| `error` | `Error \| undefined` | The error from the last run, if any. |
| `refetch` | `() => Promise<void>` | Invalidates cached data for `type` and reruns the aggregation. No-op while disabled. |

## Example

```tsx title="src/HeadcountByDepartment.tsx"
import { Employee } from "@my-app/sdk";
import { useOsdkAggregation } from "@osdk/react";

export function HeadcountByDepartment() {
  const { data, isLoading, error } = useOsdkAggregation(Employee, {
    aggregate: {
      $select: { $count: "unordered", "salary:avg": "unordered" },
      $groupBy: { department: "exact" },
    },
  });

  return (
    <table aria-busy={isLoading}>
      <tbody>
        {error && (
          <tr>
            <td role="alert">{error.message}</td>
          </tr>
        )}
        {data?.map((group) => (
          <tr key={group.$group.department}>
            <td>{group.$group.department}</td>
            <td>{group.$count}</td>
            <td>{group.salary.avg}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

## See also

- [Aggregations](https://palantir.github.io/osdk-ts/react/aggregations.md)
- [Aggregations in `@osdk/client`](https://palantir.github.io/osdk-ts/sdk/aggregations.md)