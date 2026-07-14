### Default sorting

Seed an initial sort with `defaultOrderBy`. Sorting stays uncontrolled — the user can re-sort from the column header menu.

```tsx
<ObjectTable
  objectType={Employee}
  defaultOrderBy={[{ property: "fullName", direction: "desc" }]}
/>
```

[Open the "with default sorting" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-sorting--with-default-sorting)
