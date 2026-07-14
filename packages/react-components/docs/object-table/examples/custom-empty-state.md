### Custom empty state

Override the default "No Data" indicator with `renderEmptyState`, shown when the table has no rows and no error.

```tsx
<ObjectTable
  objectType={Employee}
  renderEmptyState={() => (
    <div className="empty">No employees match your filters.</div>
  )}
/>
```

[Open the "custom empty state" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-display-states--custom-empty-state)
