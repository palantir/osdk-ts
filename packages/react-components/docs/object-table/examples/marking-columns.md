### Marking columns

Columns backed by marking properties render automatically: CBAC markings render via a banner, and mandatory markings render one pill per marking on the row. No extra configuration is required — include the marking property as a column.

```tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "classification" } }, // a marking property
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
```

[Open the "marking columns" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-advanced--marking-columns)
