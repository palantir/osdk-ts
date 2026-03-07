# @osdk/react-components

Pre-built UI components for OSDK data. Requires `@osdk/react` (see `packages/react/AGENTS.md` for hooks and provider setup).

## Setup

All components import from `@osdk/react-components/experimental`. Requires `OsdkProvider2` from `@osdk/react/experimental`.

### CSS (required)

```css
@layer osdk.tokens, osdk.components;
@import "@osdk/react-components-styles" layer(osdk.tokens);
@import "@osdk/react-components/styles.css" layer(osdk.components);

.root {
  isolation: isolate;
}
```

## ObjectTable

```tsx
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "@your-osdk-package";

function EmployeeDirectory() {
  return <ObjectTable objectType={Employee} />;
}
```

### Key Props

| Prop                         | Type                                 | Description                                                         |
| ---------------------------- | ------------------------------------ | ------------------------------------------------------------------- |
| `objectType`                 | ObjectType                           | **Required.** The OSDK object type to display.                      |
| `columnDefinitions`          | `ColumnDefinition[]`                 | Column config: visibility, order, custom renderers, pinning, width. |
| `enableFiltering`            | boolean                              | Allow user filtering (default: true)                                |
| `enableOrdering`             | boolean                              | Allow user sorting (default: true)                                  |
| `enableColumnPinning`        | boolean                              | Allow column pinning (default: true)                                |
| `enableColumnResizing`       | boolean                              | Allow column resizing (default: true)                               |
| `enableColumnConfig`         | boolean                              | Show column config dialog (default: true)                           |
| `selectionMode`              | `"single"` / `"multiple"` / `"none"` | Row selection mode (default: "none")                                |
| `orderBy` / `defaultOrderBy` | OrderByClause[]                      | Controlled/uncontrolled sorting                                     |
| `filter`                     | WhereClause                          | Controlled filtering                                                |
| `rowHeight`                  | number                               | Row height in pixels (default: 40)                                  |
| `renderCellContextMenu`      | function                             | Custom right-click menu                                             |

### Column Definition

```ts
type ColumnDefinition = {
  locator:
    | { type: "property"; id: string } // object property
    | { type: "rdp"; id: string; creator: fn } // derived property
    | { type: "custom"; id: string }; // custom column
  renderHeader?: () => ReactNode;
  renderCell?: (object) => ReactNode;
  width?: number;
  pinned?: "left" | "right";
  isVisible?: boolean;
  orderable?: boolean;
  columnName?: string;
};
```

### ColumnConfigDialog

Standalone dialog for column visibility/ordering:

```tsx
import { ColumnConfigDialog } from "@osdk/react-components/experimental";

<ColumnConfigDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[{ id: "fullName", name: "Full Name" }]}
  currentVisibility={{ fullName: true }}
  currentColumnOrder={["fullName"]}
  onApply={(columns) => {/* [{ columnId, isVisible }] */}}
/>;
```
