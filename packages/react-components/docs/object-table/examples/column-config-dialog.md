### Column configuration dialog

Use the exported `ColumnConfigDialog` to build a custom column show/hide and ordering experience, disabling the built-in one with `enableColumnConfig={false}`.

```tsx
import {
  ColumnConfigDialog,
  ObjectTable,
} from "@osdk/react-components/experimental/object-table";

<>
  <button onClick={() => setOpen(true)}>Configure columns</button>
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    enableColumnConfig={false}
  />
  <ColumnConfigDialog
    isOpen={open}
    onClose={() => setOpen(false)}
    columnOptions={columnOptions}
    currentVisibility={currentVisibility}
    currentColumnOrder={currentColumnOrder}
    onApply={handleApply}
  />
</>;
```

[Open the "with configure columns button" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-advanced--with-configure-columns-button)
