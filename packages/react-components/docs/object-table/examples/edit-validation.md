### Edit validation

Add `validateEdit` to a column to validate a cell asynchronously. Returning a string shows an error icon and tooltip; returning `undefined` accepts the value.

```tsx
const columnDefinitions: Array<ColumnDefinition<typeof Employee>> = [
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
    validateEdit: async (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value ?? ""))
        ? undefined
        : "Please enter a valid email address",
  },
];

<ObjectTable
  objectType={Employee}
  columnDefinitions={columnDefinitions}
  editMode="manual"
/>;
```

[Open the "editable with validation" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-editing--editable-with-validation)
