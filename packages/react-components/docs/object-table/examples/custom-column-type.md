### Custom column type

Render anything in a column with `type: "custom"` by supplying `renderHeader` and `renderCell`. Custom columns have no underlying value, so disable ordering.

```tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: { type: "custom", id: "actions" },
    renderHeader: () => "Actions",
    renderCell: (employee) => (
      <button onClick={() => alert(`View ${employee.$title}`)}>View</button>
    ),
    orderable: false,
    width: 120,
  },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
```

[Open the "with custom column" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-columns--with-custom-column)
