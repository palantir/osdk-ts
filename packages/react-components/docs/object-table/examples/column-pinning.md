### Column pinning

Pin columns to the left or right edge so they stay visible while the rest of the table scrolls horizontally.

```tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  { locator: { type: "property", id: "fullName" }, pinned: "left" },
  { locator: { type: "property", id: "emailPrimaryWork" } },
  { locator: { type: "property", id: "department" }, pinned: "right" },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />;
```

[Open the "with default column pinning" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-columns--with-default-column-pinning)
