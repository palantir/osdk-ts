# ObjectTable Component

A headless table component for displaying OSDK object sets using React TanStack Table.

## MVP Features

This is the initial MVP implementation that provides:
- Basic table rendering with minimal props
- Automatic data fetching using `useObjectSet` hook from `@osdk/react/experimental`
- Automatic column generation from object type properties
- Loading and error states
- Type-safe integration with OSDK ObjectSet API

## Usage

```tsx
import { ObjectTable } from "@osdk/components";
import { Employee } from "./ontology";

function MyComponent() {
  const objectSet = Employee.all();
  
  return <ObjectTable objectSet={objectSet} objectType={Employee} />;
}
```

## Props

The component follows the `ObjectTableProps` interface defined in `ObjectTableApi.ts`.

### MVP Implementation

Currently, only the `objectSet` and `objectType` props are required:

- `objectSet`: The OSDK ObjectSet to display in the table
- `objectType`: The type of the ObjectSet

### Future Props (Not Yet Implemented)

The following props are defined in the API but not yet implemented:
- `columnDefinitions`: Custom column configuration
- `filterable`: Enable/disable filtering
- `filter`: Controlled filter state
- `orderable`: Enable/disable sorting
- `orderBy`: Controlled sort state
- `selectionMode`: Row selection mode
- `selectedRows`: Controlled selection state
- Event handlers: `onFilterChanged`, `onOrderByChanged`, `onRowClick`, etc.

## Styling

The ObjectTable component comes with default styles using CSS variables for easy theming.

### Importing Styles

Import the styles in your application entry point:

```tsx
import "@osdk/components/styles";
```

The component will now render with default styling.

### Customizing the Theme

Override CSS variables to customize the appearance:

```css
/* Your app's CSS file */
@import "@osdk/components/styles";

:root {
  /* Change colors */
  --osdk-color-accent: #8b5cf6;
  --osdk-table-header-background: #f3f4f6;

  /* Adjust spacing */
  --osdk-table-cell-padding-x: 1rem;
  --osdk-table-cell-padding-y: 0.875rem;
}
```

### Component-Specific Customization

Target only the ObjectTable without affecting other components:

```css
.osdk-object-table-wrapper {
  --osdk-table-border-radius: 0.5rem;
  --osdk-table-row-background-hover: #fef3c7;
}
```

### Dark Mode Example

```css
[data-theme="dark"] {
  --osdk-color-background: #171717;
  --osdk-color-surface: #262626;
  --osdk-color-border: #404040;
  --osdk-color-text: #fafafa;
}
```

For complete theming documentation and all available CSS variables, see the [Theming Guide](../styles/README.md).

## Architecture

The component uses:
- **TanStack Table v8**: For table state management and rendering
- **@osdk/react/experimental**: For data fetching via `useObjectSet` hook
- **CSS Variables**: For theming and customization

## Next Steps

To complete the full ObjectTableApi implementation, the following features need to be added:
1. Custom column definitions support
2. Filtering and sorting
3. Row selection
4. Column visibility and pinning
5. Custom cell and header renderers
6. Event handlers for user interactions
