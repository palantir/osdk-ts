### Custom cell & header renderers

Use `renderCell` and `renderHeader` on a property column to override only its display while keeping the underlying value (so sorting and editing still work).

```tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
    renderHeader: () => <strong>Employee name</strong>,
    renderCell: (employee) => <strong>{employee.fullName}</strong>,
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    renderCell: (employee) => {
      const date = employee.firstFullTimeStartDate;
      return date ? new Date(date).toLocaleDateString() : "—";
    },
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
```

[Open the "with custom renderers" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-columns--with-custom-renderers)
