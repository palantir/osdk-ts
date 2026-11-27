# useOsdkFunction

Source: https://palantir.github.io/osdk-ts/reference/react/use-osdk-function

> Execute a Foundry function and cache its result, refetching when the objects it depends on change.

```ts
import { useOsdkFunction } from "@osdk/react";

function useOsdkFunction<Q extends QueryDefinition<unknown>>(
  queryDef: Q,
  options?: UseOsdkFunctionOptions<Q>,
): UseOsdkFunctionResult<Q>;
```

Runs the function when the component mounts and again when `params` change. Calls with the same function and `params` share one cached result. Use `dependsOn` or `dependsOnObjects` to refetch after actions change related objects.

## Options

### UseOsdkFunctionOptions

| Prop                | Type                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params?`           | `(CompileTimeMetadata<Q>["parameters"] extends Record<string, never> ? undefined : QueryParameterType<CompileTimeMetadata<Q>["parameters"]>)` | Parameters to pass to the function. Must include all required parameters; optional parameters can be omitted.                                                                                                                                                                                                                         |
| `dependsOn?`        | `(string \| ObjectTypeDefinition)[]`                                                                                                          | Object types this function depends on. When actions modify objects of these types, the function will automatically refetch.                                                                                                                                                                                                           |
| `dependsOnObjects?` | `(ObjectSet<ObjectTypeDefinition, never> \| Osdk.Instance<ObjectTypeDefinition, never, any, {}>)[]`                                           | Specific object instances or ObjectSets this function depends on. When any of these specific objects change, the function will refetch. More fine-grained than dependsOn for precise invalidation control. For ObjectSets, the object type is extracted asynchronously and changes to any object of that type will trigger a refetch. |
| `dedupeIntervalMs?` | `number`                                                                                                                                      | The number of milliseconds to dedupe identical function calls. Two calls with the same function and params will share results if the second call is within this interval of the first. Default: `2000`                                                                                                                                |
| `enabled?`          | `boolean`                                                                                                                                     | Whether to enable the query. When false, the query will not execute. Useful for: - Dependent queries that need to wait for other data - Conditional queries based on component state Default: `true`                                                                                                                                  |

## Returns

### UseOsdkFunctionResult

| Prop          | Type                                                                                                            | Description                                                                    |
| ------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `data`        | `(CompileTimeMetadata<Q>["signature"] extends (...args: never[]) => infer R ? Awaited<R> : never) \| undefined` | The function result, or undefined if not yet loaded or on error.               |
| `isLoading`   | `boolean`                                                                                                       | True while the function is executing.                                          |
| `error`       | `Error \| undefined`                                                                                            | Error if the function execution failed.                                        |
| `lastUpdated` | `number`                                                                                                        | Timestamp (ms since epoch) of when the result was last fetched.                |
| `refetch`     | `() => Promise<void>`                                                                                           | Manually refetch the function. Useful for "pull to refresh" or retry patterns. |

`isLoading` is `true` only while a request is in flight. On the first render, before the hook subscribes, and while it is disabled, `isLoading` is `false` and `data` is `undefined`, so check both.

## Example

```tsx title="src/EmployeeReport.tsx"
import { Employee, getEmployeeReport } from "@my-app/sdk";
import { useOsdkFunction } from "@osdk/react";

export function EmployeeReport({ employee }: { employee: Employee.OsdkInstance }) {
  const { data, isLoading, error, refetch } = useOsdkFunction(getEmployeeReport, {
    params: { employeeId: employee.$primaryKey },
    dependsOnObjects: [employee],
  });

  return (
    <section aria-busy={isLoading}>
      {error && <p role="alert">{error.message}</p>}
      <p>{data}</p>
      <button onClick={() => void refetch()}>Refresh</button>
    </section>
  );
}
```

## See also

- [Functions](https://palantir.github.io/osdk-ts/react/functions.md)
- [useOsdkFunctions](https://palantir.github.io/osdk-ts/reference/react/use-osdk-functions.md)