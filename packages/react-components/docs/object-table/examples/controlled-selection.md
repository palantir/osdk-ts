### Controlled selection

Own the selection by passing `selectedRows` (and `isAllSelected`) together with `onRowSelectionChanged`.

```tsx
import { useState } from "react";

function EmployeesTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  return (
    <ObjectTable
      objectType={Employee}
      selectionMode="multiple"
      selectedRows={selectedRows}
      isAllSelected={isAllSelected}
      onRowSelectionChanged={(change) => {
        setSelectedRows(change.selectedRows.map((r) => r.$primaryKey));
        setIsAllSelected(change.isSelectAll);
      }}
    />
  );
}
```

[Open the "controlled selection" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-selection-focus--controlled-selection)
