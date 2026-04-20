# FilterList

A comprehensive guide for using the FilterList component from `@osdk/react-components`.

## Prerequisites

Before using FilterList, make sure you have completed the library setup described in the [README](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/README.md#setup), including:

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
          filterComponent: "LISTOGRAM",
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
| `onFilterStateChanged`  | `(definition, newState) => void` | -       | Called when any filter's state changes                         |
| `initialFilterStates`   | `Map<string, FilterState>`       | -       | Initial states for hydrating from external storage             |

### UI Features

| Prop                    | Type                  | Default | Description                               |
| ----------------------- | --------------------- | ------- | ----------------------------------------- |
| `title`                 | `ReactNode`           | -       | Title displayed in the filter list header |
| `titleIcon`             | `React.ReactNode`     | -       | Icon displayed next to the title          |
| `collapsed`             | `boolean`             | `false` | Whether the panel is collapsed            |
| `onCollapsedChange`     | `(collapsed) => void` | -       | Called when collapsed state changes       |
| `showResetButton`       | `boolean`             | `false` | Show reset filters button in header       |
| `onReset`               | `() => void`          | -       | Called when reset button is clicked       |
| `showActiveFilterCount` | `boolean`             | `false` | Show count of active filters in header    |
| `className`             | `string`              | -       | Additional CSS class name                 |

### Advanced

| Prop                    | Type                               | Default          | Description                                                                                                                                                                            |
| ----------------------- | ---------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addFilterMode`         | `"controlled" \| "uncontrolled"`   | `"uncontrolled"` | How filter visibility (add/remove) is managed. In uncontrolled mode, an "Add filter" popover is rendered. In controlled mode, the consumer manages visibility via `filterDefinitions`. |
| `onFilterAdded`         | `(filterKey, definitions) => void` | -                | Called when a filter is added (shown). In uncontrolled mode, fires when a user selects a hidden filter from the "Add filter" popover.                                                  |
| `onFilterRemoved`       | `(filterKey) => void`              | -                | Called when a filter is removed (hidden). In uncontrolled mode, fires as a notification after the filter is hidden internally.                                                         |
| `enableSorting`         | `boolean`                          | `false`          | Enable drag-and-drop reordering of filters. Drag handles are rendered and filters can be reordered.                                                                                    |
| `renderAddFilterButton` | `() => React.ReactNode`            | -                | Custom trigger for the add-filter button. In uncontrolled mode, customizes the popover trigger; in controlled mode, replaces the entire button area.                                   |

## Filter Definitions

### Filter Definition Types

| Type              | Description                                      |
| ----------------- | ------------------------------------------------ |
| `PROPERTY`        | Filter on a direct property of the object type   |
| `KEYWORD_SEARCH`  | Full-text keyword search across objects          |
| `CUSTOM`          | Custom filter with user-provided render function |
| `HAS_LINK`        | Toggle filter for whether a link exists          |
| `LINKED_PROPERTY` | Filter on a property of a linked object type     |

### Property Filter Definition

When using `type: "PROPERTY"`, the definition supports:

| Field             | Type                        | Description                                                                                   |
| ----------------- | --------------------------- | --------------------------------------------------------------------------------------------- |
| `key`             | `string`                    | Property key on the object type                                                               |
| `label`           | `string`                    | Display label for the filter                                                                  |
| `filterComponent` | `FilterComponentType`       | Which UI component to render (see table below)                                                |
| `filterState`     | `FilterState`               | Initial state for the filter                                                                  |
| `isVisible`       | `boolean`                   | Whether the filter is initially visible (default: `true`)                                     |
| `colorMap`        | `Record<string, string>`    | Custom colors for LISTOGRAM bar values                                                        |
| `listogramConfig` | `ListogramConfig`           | Configuration for LISTOGRAM display (see below)                                               |
| `renderValue`     | `(value: string) => string` | Custom display and search text for filter values in dropdown items, chips, and listogram rows |

#### Listogram Configuration

| Field             | Type                             | Default  | Description                                                     |
| ----------------- | -------------------------------- | -------- | --------------------------------------------------------------- |
| `displayMode`     | `"full" \| "count" \| "minimal"` | `"full"` | `full`: bar + count, `count`: count only, `minimal`: label only |
| `maxVisibleItems` | `number`                         | `5`      | Number of items shown before "View all" link appears            |

### Filter Components

When using `type: "PROPERTY"` or `type: "LINKED_PROPERTY"`, specify a `filterComponent`:

| Component       | Best For                          | State Type      |
| --------------- | --------------------------------- | --------------- |
| `LISTOGRAM`     | Categorical data with bar chart   | `EXACT_MATCH`   |
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
    <div style={{ display: "flex", gap: 16, height: 600 }}>
      <div style={{ width: 320, flexShrink: 0 }}>
        <FilterList
          objectSet={objectSet}
          filterDefinitions={[
            {
              type: "PROPERTY",
              key: "department",
              filterComponent: "LISTOGRAM",
            },
            { type: "PROPERTY", key: "team", filterComponent: "LISTOGRAM" },
            {
              type: "PROPERTY",
              key: "fullName",
              filterComponent: "CONTAINS_TEXT",
            },
          ]}
          title="Employee Filters"
          showResetButton={true}
          showActiveFilterCount={true}
          enableSorting={true}
          filterClause={filterClause}
          onFilterClauseChanged={setFilterClause}
        />
      </div>
      <div style={{ flex: 1 }}>
        <ObjectTable objectType={Employee} filter={filterClause} />
      </div>
    </div>
  );
}
```

### Add/Remove Filters (Uncontrolled Mode)

Use `addFilterMode="uncontrolled"` with `isVisible: false` on some filters to let users add and remove filters dynamically:

```typescript
const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    key: "team",
    label: "Team",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    key: "fullName",
    label: "Full Name",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
    isVisible: false,
  },
  {
    type: "PROPERTY",
    key: "startDate",
    label: "Start Date",
    filterComponent: "DATE_RANGE",
    filterState: { type: "DATE_RANGE" },
    isVisible: false,
  },
];

<FilterList
  objectSet={$(Employee)}
  filterDefinitions={filterDefinitions}
  addFilterMode="uncontrolled"
  showResetButton={true}
/>;
```

Filters marked `isVisible: false` appear in the "Add filter" popover. Users can add them to the list and remove visible filters via the close button. Reset restores the original visibility.

### Removable Filters (Controlled Mode)

When `addFilterMode="controlled"` and `onFilterRemoved` is provided, each filter shows a remove button on hover. The consumer manages the definitions array:

```typescript
const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectSet={$(Employee)}
  filterDefinitions={definitions}
  addFilterMode="controlled"
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>;
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
        { type: "PROPERTY", key: "location", filterComponent: "LISTOGRAM" },
      ]}
    />
  );
}
```

The filter dropdowns will only show job titles and locations that exist within the Engineering department.

### Keyword Search Filter

Add a full-text search filter that searches across multiple properties:

```typescript
const filterDefinitions = [
  {
    type: "KEYWORD_SEARCH",
    properties: ["fullName", "department", "jobTitle", "locationCity"],
    label: "Search",
  },
  { type: "PROPERTY", key: "department", filterComponent: "LISTOGRAM" },
  { type: "PROPERTY", key: "locationCity", filterComponent: "LISTOGRAM" },
];

<FilterList objectSet={$(Employee)} filterDefinitions={filterDefinitions} />;
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

### Custom Value Rendering

Use `renderValue` to customize how filter values are displayed and searched. The returned string replaces the raw value for both display and search matching. This is useful for showing human-readable names instead of IDs:

```typescript
const USER_NAMES: Record<string, string> = {
  "abc-123": "Alice Smith",
  "def-456": "Bob Jones",
};

<FilterList
  objectSet={$(Task)}
  filterDefinitions={[
    {
      type: "PROPERTY",
      key: "assigneeUserId",
      filterComponent: "LISTOGRAM",
      renderValue: (userId) => USER_NAMES[userId] ?? userId,
    },
  ]}
/>;
```

`renderValue` works with `LISTOGRAM`, `SINGLE_SELECT`, and `MULTI_SELECT` filter components. For `MULTI_SELECT`, it applies to both dropdown items and selected chips. Searching within a filter dropdown matches against the `renderValue` output.

For best performance, memoize `renderValue` with `useCallback` to avoid unnecessary re-renders:

### Listogram Display Modes

Control how much detail each listogram row shows:

```typescript
// "full" (default): checkbox + label + colored bar + count number
// "count": checkbox + label + count number (no bar)
// "minimal": checkbox + label only

<FilterList
  objectSet={$(Employee)}
  filterDefinitions={[
    {
      type: "PROPERTY",
      key: "department",
      filterComponent: "LISTOGRAM",
      listogramConfig: { displayMode: "count" },
    },
  ]}
/>;
```

### Limiting Visible Items

By default, LISTOGRAM filters show at most 5 items with a "View all" link. Override with `maxVisibleItems`:

```typescript
<FilterList
  objectSet={$(Employee)}
  filterDefinitions={[
    {
      type: "PROPERTY",
      key: "department",
      filterComponent: "LISTOGRAM",
      listogramConfig: { maxVisibleItems: 10 },
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
      showActiveFilterCount={true}
      filterDefinitions={[
        { type: "PROPERTY", key: "department", filterComponent: "LISTOGRAM" },
      ]}
    />
  );
}
```

### Drag-and-Drop Sorting

Enable reordering of filters via drag and drop:

```typescript
<FilterList
  objectSet={$(Employee)}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>;
```

### Exclude Toggle

LISTOGRAM and TEXT_TAGS filters support an exclude/include toggle. Hover a filter item and click the three-dot menu to toggle between "Keeping" and "Excluding" modes. When excluding, selected values are excluded from results and appear with a strikethrough.

```typescript
// Exclude mode is built into LISTOGRAM filters automatically.
// Users access it via the overflow menu (three dots) on each filter item.
<FilterList
  objectSet={$(Employee)}
  filterDefinitions={[
    {
      type: "PROPERTY",
      key: "department",
      filterComponent: "LISTOGRAM",
      filterState: { type: "EXACT_MATCH", values: [] },
    },
  ]}
/>;
```

## Styling

FilterList uses CSS custom properties included in `@osdk/react-components/styles.css` for theming. Override `--osdk-*` tokens to customize FilterList without affecting other components, or override `--bp-*` tokens for global theming.

```css
@layer osdk.styles, user.theme;

@import "@osdk/react-components/styles.css" layer(osdk.styles);

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
/>
```

For a full reference of CSS tokens, see the [CSS Variables documentation](./CSSVariables.md).

## Best Practices

- **Memoize filterDefinitions** -- define the array outside the component or wrap in `useMemo` to avoid unnecessary re-renders
- **Use controlled mode for persistence** -- provide `filterClause` and `onFilterClauseChanged` to persist filter state across navigation
- **Use objectSet constraints to scope filter values** -- pass a prefiltered objectSet (e.g. `$(Employee).where(...)`) so filter dropdowns only show relevant values
- **Keep filter lists focused** -- show 3-8 filters; too many filters overwhelm users
- **Use `addFilterMode="uncontrolled"` for progressive disclosure** -- start with a few visible filters and let users add more as needed
