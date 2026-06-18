### Disable header-menu features

Turn off individual column-header menu items with the `enable*` flags (all default to `true`).

```tsx
<ObjectTable
  objectType={Employee}
  enableOrdering={false}
  enableColumnPinning={false}
  enableColumnResizing={false}
  enableColumnConfig={false}
/>;
```

[Open the "disable all header menu features" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-display-states--disable-all-header-menu-features)
