### Per-row editable & field config

Pass a function to `editable` to gate editing per row, and a `getFieldComponentProps` function to compute editor props from the row's data.

```tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "salary" },
    // Only editable for active employees
    editable: (employee) => employee.status === "Active",
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      // Items depend on the employee's role
      getFieldComponentProps: (employee) => ({
        items: getCompatibleDepartments(employee.role),
      }),
    },
  },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  editMode="manual"
/>;
```

[Open the "per row editable and field config" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-editing--per-row-editable-and-field-config)
