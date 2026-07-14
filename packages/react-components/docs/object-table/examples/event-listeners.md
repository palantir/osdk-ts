### Event listeners

Layer side effects (analytics, navigation, telemetry) on top of the table's default behavior with non-controlling `on*` listeners — the defaults still run.

```tsx
<ObjectTable
  objectType={Employee}
  onRowClick={(employee) => router.push(`/employees/${employee.$primaryKey}`)}
  onColumnHeaderClick={(columnId) => console.log("header", columnId)}
  onOrderByChanged={(orderBy) => console.log("sort", orderBy)}
  onColumnVisibilityChanged={(states) => console.log("visibility", states)}
  onColumnsPinnedChanged={(states) => console.log("pinned", states)}
  onColumnResize={(columnId, newWidth) =>
    console.log("resize", columnId, newWidth)
  }
/>
```

[Open the "event listeners" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-interactions-events--event-listeners)
