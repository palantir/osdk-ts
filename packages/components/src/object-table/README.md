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
  
  return <ObjectTable objectSet={objectSet} />;
}
```

## Props

The component follows the `ObjectTableProps` interface defined in `ObjectTableApi.ts`.

### MVP Implementation

Currently, only the `objectSet` prop is required:

- `objectSet`: The OSDK ObjectSet to display in the table

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

## Architecture

The component uses:
- **TanStack Table v8**: For table state management and rendering
- **@osdk/react/experimental**: For data fetching via `useObjectSet` hook
- **Headless UI**: No styling included, allowing full customization

## Next Steps

To complete the full ObjectTableApi implementation, the following features need to be added:
1. Custom column definitions support
2. Filtering and sorting
3. Row selection
4. Column visibility and pinning
5. Custom cell and header renderers
6. Event handlers for user interactions
