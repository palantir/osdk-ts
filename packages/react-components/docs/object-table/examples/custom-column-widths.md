### Custom column widths

Set `width` (and optionally `minWidth` / `maxWidth`) per column to control sizing.

```tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  { locator: { type: "property", id: "fullName" }, width: 250 },
  { locator: { type: "property", id: "department" }, width: 300, minWidth: 150 },
  { locator: { type: "property", id: "jobTitle" }, width: 150 },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
```

[Open the "custom column widths" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-display-states--custom-column-widths)
