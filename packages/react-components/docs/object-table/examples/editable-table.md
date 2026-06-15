### Editable table

Mark columns `editable` to enable inline editing. The editor is auto-detected from the property type, or set `editFieldConfig` for a dropdown or date picker. `editMode` controls whether editing is always on or toggled with an "Edit Table" button.

```tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  { locator: { type: "property", id: "fullName" }, editable: true },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: ["Engineering", "Product", "Design", "Sales"],
      }),
    },
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DATE_PICKER",
      getFieldComponentProps: () => ({ showTime: false }),
    },
  },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  editMode="manual"
  onCellValueChanged={(info) => console.log(info)}
/>;
```

[Open the "editable table" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-editing--editable-table)
