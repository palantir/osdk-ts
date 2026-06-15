### Submit edits

Provide `onSubmitEdits` to show a "Submit Edits" button in the edit footer. All pending edits are submitted together; return `true` to clear them on success.

```tsx
import { updateMultipleEmployees } from "@my/osdk";
import { useOsdkAction } from "@osdk/react";

function EditableEmployeesTable() {
  const { applyAction } = useOsdkAction(updateMultipleEmployees);

  return (
    <ObjectTable
      objectType={Employee}
      columnDefinitions={editableColumns}
      editMode="manual"
      onSubmitEdits={async (edits) => {
        await applyAction({
          updates: edits.map((e) => ({
            employeeId: e.rowId,
            field: e.columnId,
            value: e.newValue,
          })),
        });
        return true;
      }}
    />
  );
}
```

[Open the "with submit edits button" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-editing--with-submit-edits-button)
