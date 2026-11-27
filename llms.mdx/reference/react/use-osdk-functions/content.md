# useOsdkFunctions

Source: https://palantir.github.io/osdk-ts/reference/react/use-osdk-functions

> Execute several Foundry functions from one hook and get their results in input order.

```ts
import { useOsdkFunctions } from "@osdk/react";

function useOsdkFunctions(props: UseOsdkFunctionsProps): UseOsdkFunctionsResult;

type UseOsdkFunctionsResult = Array<UseOsdkFunctionResult<QueryDefinition<unknown>>>;
```

Use it when the number of function calls varies at runtime, which rules out calling `useOsdkFunction` in a loop. Each query shares the cache with `useOsdkFunction`, so identical calls elsewhere do not hit the network twice.

## Props

### UseOsdkFunctionsProps

| Prop             | Type                                              | Description                                                                                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `queries`        | `FunctionQueryParams<QueryDefinition<unknown>>[]` | Array of query configurations to execute                                                                                                                                                                                                                                                                 |
| `enabled?`       | `boolean`                                         | Whether to enable all queries. When false, no queries will execute. Individual query enabled states are also respected. Default: `true`                                                                                                                                                                  |
| `maxConcurrent?` | `number`                                          | Maximum number of queries to execute concurrently. When set, queries are subscribed in batches — the next query starts only after a running one completes (status "loaded" or "error"). Useful for large payloads that may exceed server time limits. Default: `undefined (all queries run in parallel)` |

### `FunctionQueryParams`

| Field | Type | Description |
| --- | --- | --- |
| `queryDefinition` | `Q` | The function from your generated SDK. |
| `options` | `UseOsdkFunctionOptions<Q>` | The same options as [`useOsdkFunction`](https://palantir.github.io/osdk-ts/reference/react/use-osdk-function.md): `params`, `dependsOn`, `dependsOnObjects`, `dedupeIntervalMs`, and `enabled`. |

## Returns

An array with one [`UseOsdkFunctionResult`](https://palantir.github.io/osdk-ts/reference/react/use-osdk-function.md#returns) per query, in the order of `queries`.

`queries` is typed with `QueryDefinition<unknown>`, so an entry with typed `params` does not type-check as written, and each result's `data` loses the function's return type. Cast each entry to `UseOsdkFunctionsProps["queries"][number]`, as the example does, and narrow `data` where you read it.

## Example

```tsx title="src/DepartmentHeadcounts.tsx"
import { getEmployeeMetrics } from "@my-app/sdk";
import { useOsdkFunctions, type UseOsdkFunctionsProps } from "@osdk/react";

type FunctionCall = UseOsdkFunctionsProps["queries"][number];

export function DepartmentHeadcounts({ departments }: { departments: string[] }) {
  const results = useOsdkFunctions({
    queries: departments.map(
      (department) =>
        ({
          queryDefinition: getEmployeeMetrics,
          options: { params: { department } },
        }) as unknown as FunctionCall,
    ),
    maxConcurrent: 4,
  });

  return (
    <ul>
      {departments.map((department, i) => (
        <li key={department}>
          {department}: {results[i].isLoading ? "…" : JSON.stringify(results[i].data)}
        </li>
      ))}
    </ul>
  );
}
```

## See also

- [Functions](https://palantir.github.io/osdk-ts/react/functions.md)