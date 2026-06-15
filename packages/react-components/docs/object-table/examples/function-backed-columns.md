### Function-backed columns

Display values computed by an OSDK function (query) with `type: "function"`. The table calls the query with the current object set and maps each result back to its row, with loading, caching, and dedupe handled for you.

```tsx
import { Employee, getEmployeeMetrics } from "@my/osdk";
import {
  type ColumnDefinition,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

type EmployeeFunctionColumns = { metrics: typeof getEmployeeMetrics };

const columnDefinitions: Array<
  ColumnDefinition<typeof Employee, Record<string, never>, EmployeeFunctionColumns>
> = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: {
      type: "function",
      id: "metrics",
      queryDefinition: getEmployeeMetrics,
      getFunctionParams: (objectSet) => ({ employees: objectSet }),
      getKey: (employee) => `${employee.$objectType}:${employee.$primaryKey}`,
      getValue: (cellData) => (cellData as { score: number } | undefined)?.score,
    },
    columnName: "Performance score",
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
```

[Open the "with function column" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-columns--with-function-column)
