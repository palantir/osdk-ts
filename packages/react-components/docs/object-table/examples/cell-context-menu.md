### Cell context menu

Provide `renderCellContextMenu` to render a custom menu when the user right-clicks a cell. It receives the row object and the cell value.

```tsx
<ObjectTable
  objectType={Employee}
  renderCellContextMenu={(employee, cellValue) => (
    <div className="my-context-menu">
      <div onClick={() => navigator.clipboard.writeText(String(cellValue))}>
        Copy value
      </div>
      <div onClick={() => console.log("View", employee.fullName)}>View</div>
    </div>
  )}
/>;
```

[Open the "with context menu" story →](https://palantir.github.io/osdk-ts/storybook/?path=/story/components-objecttable-features-interactions-events--with-context-menu)
