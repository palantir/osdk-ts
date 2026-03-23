# FilterList

A comprehensive guide for using the FilterList component from `@osdk/react-components`.

## Prerequisites

Before using FilterList, make sure you have completed the library setup described in the [README](../README.md#setup), including:

- Installing the required dependencies
- Wrapping your app with `OsdkProvider2`
- Adding the CSS imports

## Table of Contents

- [Import](#import)
- [Basic Usage](#basic-usage)
- [Props Reference](#props-reference)
- [Filter Definitions](#filter-definitions)
- [Examples](#examples)
- [Styling](#styling)
- [Best Practices](#best-practices)

## Import

```typescript
import { FilterList } from "@osdk/react-components/experimental";
```

## Basic Usage

The simplest way to use FilterList is with an objectSet and a few filter definitions:

```typescript
import { FilterList } from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";
import { $ } from "@YourApp/sdk";

function EmployeeFilters() {
  return (
    <FilterList
      objectSet={$(Employee)}
      filterDefinitions={[
        {
          type: "PROPERTY",
          key: "department",
          filterComponent: "LISTOGRAM",
        },
        {
          type: "PROPERTY",
          key: "jobTitle",
          filterComponent: "CHECKBOX_LIST",
        },
      ]}
    />
  );
}
```

## Props Reference

### Core Props

| Prop                | Type                              | Required | Default | Description                                                           |
| ------------------- | --------------------------------- | -------- | ------- | --------------------------------------------------------------------- |
| `objectSet`         | `ObjectSet<Q>`                    | Yes      | -       | The object set to filter. Supports prefiltered sets (e.g. `.where()`) |
| `filterDefinitions` | `Array<FilterDefinitionUnion<Q>>` | No       | -       | Filter items to display. If omitted, all filterable properties shown  |

### Filter Management

| Prop                    | Type                             | Default | Description                                                    |
| ----------------------- | -------------------------------- | ------- | -------------------------------------------------------------- |
| `filterClause`          | `WhereClause<Q>`                 | -       | Current where clause (controlled mode)                         |
| `onFilterClauseChanged` | `(newClause) => void`            | -       | Called when filter clause changes. Required in controlled mode |
| `filterOperator`        | `"and" \| "or"`                  | `"and"` | Logical operator to join multiple filters                      |
| `onFilterStateChanged`  | `(definition, newState) => void` | -       | Called when any filter's state changes                         |
| `initialFilterStates`   | `Map<string, FilterState>`       | -       | Initial states for hydrating from external storage             |

### UI Features

| Prop                    | Type                  | Default | Description                               |
| ----------------------- | --------------------- | ------- | ----------------------------------------- |
| `title`                 | `string`              | -       | Title displayed in the filter list header |
| `titleIcon`             | `React.ReactNode`     | -       | Icon displayed next to the title          |
| `collapsed`             | `boolean`             | -       | Whether the panel is collapsed            |
| `onCollapsedChange`     | `(collapsed) => void` | -       | Called when collapsed state changes       |
| `showResetButton`       | `boolean`             | -       | Show reset filters button in header       |
| `onReset`               | `() => void`          | -       | Called when reset button is clicked       |
| `showActiveFilterCount` | `boolean`             | -       | Show count of active filters in header    |
| `className`             | `string`              | -       | Additional CSS class name                 |

### Advanced

| Prop                    | Type                               | Default        | Description                                        |
| ----------------------- | ---------------------------------- | -------------- | -------------------------------------------------- |
| `addFilterMode`         | `"controlled" \| "uncontrolled"`   | `"controlled"` | How filter add/remove is managed                   |
| `onFilterAdded`         | `(filterKey, definitions) => void` | -              | Called when a filter is added                      |
| `onFilterRemoved`       | `(filterKey) => void`              | -              | Called when a filter is removed                    |
| `enableSorting`         | `boolean`                          | -              | Enable drag-and-drop reordering of filters         |
| `renderAddFilterButton` | `() => React.ReactNode`            | -              | Custom render function for the "Add filter" button |

## Filter Definitions

### Filter Definition Types

| Type              | Description                                      |
| ----------------- | ------------------------------------------------ |
| `PROPERTY`        | Filter on a direct property of the object type   |
| `KEYWORD_SEARCH`  | Full-text keyword search across objects          |
| `CUSTOM`          | Custom filter with user-provided render function |
| `HAS_LINK`        | Toggle filter for whether a link exists          |
| `LINKED_PROPERTY` | Filter on a property of a linked object type     |

### Filter Components

When using `type: "PROPERTY"` or `type: "LINKED_PROPERTY"`, specify a `filterComponent`:

| Component       | Best For                          | State Type      |
| --------------- | --------------------------------- | --------------- |
| `LISTOGRAM`     | Categorical data with bar chart   | `EXACT_MATCH`   |
| `CHECKBOX_LIST` | Multi-select with checkboxes      | `SELECT`        |
| `SINGLE_SELECT` | Single value dropdown             | `SELECT`        |
| `MULTI_SELECT`  | Multi-select dropdown with search | `SELECT`        |
| `TEXT_TAGS`     | Tag-based input with suggestions  | `EXACT_MATCH`   |
| `CONTAINS_TEXT` | Free-text search on a property    | `CONTAINS_TEXT` |
| `NUMBER_RANGE`  | Min/max range slider for numbers  | `NUMBER_RANGE`  |
| `DATE_RANGE`    | Date range picker                 | `DATE_RANGE`    |
| `TOGGLE`        | Boolean on/off toggle             | `TOGGLE`        |
| `SINGLE_DATE`   | Single date picker                | `SELECT`        |
| `MULTI_DATE`    | Multiple date picker              | `SELECT`        |
| `TIMELINE`      | Date range with start/end         | `TIMELINE`      |

## Examples

### Combining with ObjectTable

Use controlled `filterClause` to connect FilterList and ObjectTable:

```typescript
import type { WhereClause } from "@osdk/api";
import { FilterList, ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";
import { $ } from "@YourApp/sdk";
import { useMemo, useState } from "react";

function EmployeeDashboard() {
  const [filterClause, setFilterClause] = useState<
    WhereClause<typeof Employee>
  >({});
  const objectSet = useMemo(() => $(Employee), []);

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <FilterList
        objectSet={objectSet}
        filterClause={filterClause}
        onFilterClauseChanged={setFilterClause}
        filterDefinitions={[
          { type: "PROPERTY", key: "department", filterComponent: "LISTOGRAM" },
          {
            type: "PROPERTY",
            key: "jobTitle",
            filterComponent: "CHECKBOX_LIST",
          },
        ]}
      />
      <ObjectTable
        objectType={Employee}
        filter={filterClause}
      />
    </div>
  );
}
```

### Prefiltered ObjectSet

Pass a `.where()` objectSet to scope filter dropdown values. For example, to only show Engineering employees:

```typescript
import { FilterList } from "@osdk/react-components/experimental";
import { Employee } from "@YourApp/sdk";
import { $ } from "@YourApp/sdk";
import { useMemo } from "react";

function EngineeringFilters() {
  const engineeringSet = useMemo(
    () => $(Employee).where({ department: "Engineering" }),
    [],
  );

  return (
    <FilterList
      objectSet={engineeringSet}
      filterDefinitions={[
        { type: "PROPERTY", key: "jobTitle", filterComponent: "LISTOGRAM" },
        { type: "PROPERTY", key: "location", filterComponent: "CHECKBOX_LIST" },
      ]}
    />
  );
}
```

The filter dropdowns will only show job titles and locations that exist within the Engineering department.

### Keyword Search Filter

Add a full-text search filter:

```typescript
const filterDefinitions = [
  {
    type: "KEYWORD_SEARCH" as const,
    key: "search",
    label: "Search employees...",
  },
  {
    type: "PROPERTY" as const,
    key: "department",
    filterComponent: "LISTOGRAM" as const,
  },
];

<FilterList
  objectSet={$(Employee)}
  filterDefinitions={filterDefinitions}
/>;
```

### Custom Listogram Colors

Assign colors to specific values in a listogram:

```typescript
<FilterList
  objectSet={$(Employee)}
  filterDefinitions={[
    {
      type: "PROPERTY",
      key: "department",
      filterComponent: "LISTOGRAM",
      colorMap: {
        Engineering: "#3b82f6",
        Marketing: "#f59e0b",
        Sales: "#10b981",
        Design: "#8b5cf6",
      },
    },
  ]}
/>;
```

### Collapsible Panel

Make the filter list collapsible:

```typescript
import { useState } from "react";

function CollapsibleFilters() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <FilterList
      objectSet={$(Employee)}
      title="Filters"
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
      filterDefinitions={[
        { type: "PROPERTY", key: "department", filterComponent: "LISTOGRAM" },
      ]}
    />
  );
}
```

### Filter Operator OR vs AND

By default, multiple filters are combined with AND. Use `filterOperator` to switch to OR:

```typescript
<FilterList
  objectSet={$(Employee)}
  filterOperator="or"
  filterDefinitions={[
    { type: "PROPERTY", key: "department", filterComponent: "CHECKBOX_LIST" },
    { type: "PROPERTY", key: "location", filterComponent: "CHECKBOX_LIST" },
  ]}
/>;
```

## Styling

FilterList uses CSS custom properties from `@osdk/react-components-styles` for theming. Override `--osdk-*` tokens to customize FilterList without affecting other components, or override `--bp-*` tokens for global theming.

```css
@layer osdk.tokens, osdk.components, user.theme;

@import "@osdk/react-components/styles.css" layer(osdk.components);
@import "@osdk/react-components-styles" layer(osdk.tokens);

@layer user.theme {
  :root {
    --osdk-intent-primary-rest: #2563eb;
    --osdk-intent-primary-hover: #1d4ed8;
  }
}
```

Use the `className` prop for scoped styling:

```typescript
<FilterList
  objectSet={$(Employee)}
  className="my-custom-filters"
  filterDefinitions={[...]}
/>;
```

For a full reference of CSS tokens, see the [@osdk/react-components-styles documentation](../../react-components-styles/README.md).

## Best Practices

- **Memoize filterDefinitions** — define the array outside the component or wrap in `useMemo` to avoid unnecessary re-renders
- **Use controlled mode for persistence** — provide `filterClause` and `onFilterClauseChanged` to persist filter state across navigation
- **Use objectSet constraints to scope filter values** — pass a prefiltered objectSet (e.g. `$(Employee).where(...)`) so filter dropdowns only show relevant values
- **Keep filter lists focused** — show 3-8 filters; too many filters overwhelm users
