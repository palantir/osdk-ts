### Multiple selection

Set `selectionMode="multiple"` to show per-row checkboxes plus a header select-all. Observe changes with `onRowSelectionChanged`.

```tsx
<ObjectTable
  objectType={Employee}
  selectionMode="multiple"
  onRowSelectionChanged={({ selectedRows, isSelectAll, objectSet }) => {
    // selectedRows: loaded, selected row instances
    // isSelectAll:  true only when the user invoked "select all"
    // objectSet:    covers the selection, including unloaded rows on select-all
    if (objectSet) void applyBulkAction({ targets: objectSet });
  }}
/>;
```

[Open the "multiple selection" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-selection-focus--multiple-selection)
