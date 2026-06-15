### Controlled focused row

Highlight the "last interacted" row with `focusedRow` (a primary key) and observe changes via `onFocusedRowChanged`. When controlled, outside clicks don't auto-clear — the caller owns clearing.

```tsx
import type { Osdk } from "@osdk/api";
import { useState } from "react";

function EmployeesTable() {
  const [focused, setFocused] = useState<Osdk.Instance<typeof Employee> | null>(
    null,
  );

  return (
    <ObjectTable
      objectType={Employee}
      focusedRow={focused?.$primaryKey ?? null}
      onFocusedRowChanged={setFocused}
    />
  );
}
```

[Open the "controlled focused row" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-selection-focus--controlled-focused-row)
