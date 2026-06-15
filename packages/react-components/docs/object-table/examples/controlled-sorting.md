### Controlled sorting

Own the sort state by passing `orderBy` and `onOrderByChanged`. The table renders exactly what you pass.

```tsx
import { useState } from "react";

function EmployeesTable() {
  const [orderBy, setOrderBy] = useState([
    { property: "fullName", direction: "asc" } as const,
  ]);

  return (
    <ObjectTable
      objectType={Employee}
      orderBy={orderBy}
      onOrderByChanged={setOrderBy}
    />
  );
}
```

[Open the "controlled sorting" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-sorting--controlled-sorting)
