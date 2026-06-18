### Row attributes & conditional row styling

Return extra `data-*` attributes per row from `getRowAttributes`, then style rows with attribute selectors. Override both row-background variables so the rule wins regardless of zebra parity.

```tsx
const getRowAttributes = useCallback(
  (employee: Osdk.Instance<typeof Employee>) => ({
    "data-status": employee.status,
    "data-overdue": employee.daysOverdue > 0 ? "true" : undefined,
  }),
  [],
);

<ObjectTable
  objectType={Employee}
  className="employees-table"
  getRowAttributes={getRowAttributes}
/>;
```

```css
.employees-table tr[data-status="Inactive"] {
  --osdk-table-row-bg-default: #f3f4f6;
  --osdk-table-row-bg-alternate: #f3f4f6;
}
```

[Open the "row attributes for styling" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-display-states--row-attributes-for-styling)
