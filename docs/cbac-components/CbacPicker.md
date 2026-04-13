# CbacPicker

A comprehensive guide for using the CBAC (Classification-Based Access Control) components from `@osdk/cbac-components`.

## Prerequisites

Before using CBAC components, make sure you have completed the library setup described in the [README](https://github.com/palantir/osdk-ts/blob/main/packages/cbac-components/README.md#setup), including:

- Installing the required dependencies
- Wrapping your app with `OsdkProvider2`
- Adding the CSS imports

## Table of Contents

- [Basic Usage](#basic-usage)
- [Props Reference](#props-reference)
- [Base Components](#base-components)
- [Types Reference](#types-reference)
- [Selection Logic Utilities](#selection-logic-utilities)
- [Examples](#examples)
- [Architecture](#architecture)
- [Troubleshooting](#troubleshooting)

## Import

```typescript
import {
  BaseCbacBanner,
  BaseCbacPicker,
  BaseCbacPickerDialog,
  CbacPicker,
  CbacPickerDialog,
} from "@osdk/cbac-components/experimental";
```

## Basic Usage

### Inline Picker

The simplest way to use the CBAC picker is inline with `CbacPicker`:

```typescript
import { CbacPicker } from "@osdk/cbac-components/experimental";
import { useState } from "react";

function ClassificationForm() {
  const [markingIds, setMarkingIds] = useState<string[]>([]);

  return (
    <CbacPicker
      initialMarkingIds={markingIds}
      onChange={setMarkingIds}
    />
  );
}
```

This renders a marking picker that fetches categories and markings from the OSDK, displays them grouped by category, shows a classification banner, and enforces marking restrictions (implied, disallowed, required markings).

### Picker in a Dialog

For modal workflows, use `CbacPickerDialog`:

```typescript
import { CbacPickerDialog } from "@osdk/cbac-components/experimental";
import { useState } from "react";

function ClassificationDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [markingIds, setMarkingIds] = useState<string[]>([]);

  const handleConfirm = (newMarkingIds: string[]) => {
    setMarkingIds(newMarkingIds);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Set Classification
      </button>
      <CbacPickerDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onConfirm={handleConfirm}
        initialMarkingIds={markingIds}
      />
    </>
  );
}
```

## Props Reference

### CbacPicker

| Prop                | Type                             | Required | Default | Description                          |
| ------------------- | -------------------------------- | -------- | ------- | ------------------------------------ |
| `initialMarkingIds` | `string[]`                       | No       | `[]`    | Initial set of selected marking IDs  |
| `onChange`          | `(markingIds: string[]) => void` | Yes      | -       | Called when the selection changes    |
| `readOnly`          | `boolean`                        | No       | `false` | Disables marking toggle interactions |
| `className`         | `string`                         | No       | -       | CSS class for the picker container   |

### CbacPickerDialog

| Prop                | Type                             | Required | Default | Description                                     |
| ------------------- | -------------------------------- | -------- | ------- | ----------------------------------------------- |
| `isOpen`            | `boolean`                        | Yes      | -       | Controls dialog visibility                      |
| `onOpenChange`      | `(open: boolean) => void`        | Yes      | -       | Called when dialog open state changes           |
| `onConfirm`         | `(markingIds: string[]) => void` | Yes      | -       | Called with the selected marking IDs on confirm |
| `initialMarkingIds` | `string[]`                       | No       | `[]`    | Initial set of selected marking IDs             |

The dialog title automatically adjusts: "Add classification" when no initial markings are provided, "Edit classification" when editing existing markings. The confirm button is disabled with a tooltip when the selection is invalid (e.g., missing required markings).

### CbacBanner (internal)

> **Note:** `CbacBanner` and `CbacBannerPopover` are internal OSDK-aware components not currently exported from `./experimental`. They are documented here for reference but cannot be imported by consumers. Classification banner display is available via the exported `BaseCbacBanner` component.

| Prop         | Type         | Required | Default | Description                                         |
| ------------ | ------------ | -------- | ------- | --------------------------------------------------- |
| `markingIds` | `string[]`   | Yes      | -       | Marking IDs to resolve into a classification banner |
| `onClick`    | `() => void` | No       | -       | Called when the banner is clicked                   |
| `onDismiss`  | `() => void` | No       | -       | Called when the dismiss button is clicked           |
| `className`  | `string`     | No       | -       | CSS class for the banner                            |

### CbacBannerPopover (internal)

> **Note:** Not exported. The popover wraps a `CbacBanner` with a dropdown showing applied markings and an "Edit classification" button that opens a `CbacPickerDialog`.

| Prop         | Type                             | Required | Default | Description                                                    |
| ------------ | -------------------------------- | -------- | ------- | -------------------------------------------------------------- |
| `markingIds` | `string[]`                       | Yes      | -       | Current marking IDs                                            |
| `onChange`   | `(markingIds: string[]) => void` | Yes      | -       | Called when markings are changed via the popover's edit dialog |
| `className`  | `string`                         | No       | -       | CSS class for the popover                                      |

## Base Components

The base components are OSDK-agnostic — they accept primitive data directly instead of fetching from the OSDK. Use these when you want to supply your own data or build a custom data fetching layer.

### BaseCbacPicker

| Prop                    | Type                                  | Required | Default | Description                                       |
| ----------------------- | ------------------------------------- | -------- | ------- | ------------------------------------------------- |
| `categories`            | `CategoryMarkingGroup[]`              | Yes      | -       | Marking categories with their markings            |
| `markingStates`         | `Map<string, MarkingSelectionState>`  | Yes      | -       | State for each marking (SELECTED, IMPLIED, etc.)  |
| `banner`                | `CbacBannerData`                      | No       | -       | Banner data (classification string, colors)       |
| `onMarkingToggle`       | `(markingId: string) => void`         | Yes      | -       | Called when a marking button is clicked           |
| `onDismissBanner`       | `() => void`                          | No       | -       | Called when the banner dismiss button is clicked  |
| `showInfoBanner`        | `boolean`                             | No       | -       | Show the "implied markings" info banner           |
| `requiredMarkingGroups` | `ReadonlyArray<RequiredMarkingGroup>` | No       | -       | Groups of markings that must be selected together |
| `isValid`               | `boolean`                             | No       | -       | Whether the current selection is valid            |
| `readOnly`              | `boolean`                             | No       | -       | Disable marking interactions                      |
| `isLoading`             | `boolean`                             | No       | -       | Show loading skeleton                             |
| `error`                 | `Error`                               | No       | -       | Show error message                                |
| `className`             | `string`                              | No       | -       | CSS class for the container                       |

### BaseCbacBanner

| Prop                   | Type         | Required | Default | Description                                          |
| ---------------------- | ------------ | -------- | ------- | ---------------------------------------------------- |
| `classificationString` | `string`     | Yes      | -       | Text displayed in the banner                         |
| `textColor`            | `string`     | Yes      | -       | Banner text color                                    |
| `backgroundColors`     | `string[]`   | Yes      | -       | Background colors (rendered as gradient if multiple) |
| `onClick`              | `() => void` | No       | -       | Makes banner clickable                               |
| `onDismiss`            | `() => void` | No       | -       | Shows a dismiss button                               |
| `className`            | `string`     | No       | -       | CSS class for the banner                             |

### BaseCbacPickerDialog

Extends all `BaseCbacPickerProps` plus:

| Prop                   | Type                      | Required | Default                   | Description                           |
| ---------------------- | ------------------------- | -------- | ------------------------- | ------------------------------------- |
| `isOpen`               | `boolean`                 | Yes      | -                         | Controls dialog visibility            |
| `onOpenChange`         | `(open: boolean) => void` | Yes      | -                         | Called when dialog open state changes |
| `onConfirm`            | `() => void`              | Yes      | -                         | Called when confirm button is clicked |
| `onCancel`             | `() => void`              | Yes      | -                         | Called when cancel button is clicked  |
| `title`                | `string`                  | No       | `"Select classification"` | Dialog title                          |
| `submitDisabledReason` | `string`                  | No       | -                         | Tooltip on disabled submit button     |

## Types Reference

### MarkingSelectionState

```typescript
type MarkingSelectionState =
  | "NONE"
  | "SELECTED"
  | "IMPLIED"
  | "DISALLOWED"
  | "IMPLIED_DISALLOWED";
```

| State                  | Description                                                      |
| ---------------------- | ---------------------------------------------------------------- |
| `"NONE"`               | Default state — marking is available but not selected            |
| `"SELECTED"`           | Marking is explicitly selected by the user                       |
| `"IMPLIED"`            | Marking is automatically included due to other selected markings |
| `"DISALLOWED"`         | Marking cannot be selected due to restrictions                   |
| `"IMPLIED_DISALLOWED"` | Marking is both implied and disallowed by the current selection  |

### CbacBannerData

```typescript
interface CbacBannerData {
  classificationString: string;
  textColor: string;
  backgroundColors: string[];
  markingIds: string[];
}
```

Returned by the `useCbacBanner` hook. Contains the resolved classification string and the display colors for the banner.

### PickerMarkingCategory

```typescript
interface PickerMarkingCategory {
  id: string;
  name: string;
  description: string;
  categoryType: "CONJUNCTIVE" | "DISJUNCTIVE";
  markingType: "MANDATORY" | "CBAC";
}
```

| Field          | Description                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `categoryType` | `"CONJUNCTIVE"` = multiple markings can be selected (checkbox-style). `"DISJUNCTIVE"` = only one marking per category (radio-style). |
| `markingType`  | `"MANDATORY"` = always present on all objects. `"CBAC"` = user-selectable.                                                           |

### PickerMarking

```typescript
interface PickerMarking {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
}
```

### CategoryMarkingGroup

```typescript
interface CategoryMarkingGroup {
  category: PickerMarkingCategory;
  markings: PickerMarking[];
}
```

A category paired with all markings that belong to it.

### RequiredMarkingGroup

```typescript
interface RequiredMarkingGroup {
  markingNames: string[];
}
```

A group of marking names that must be selected together for the classification to be valid.

## Selection Logic Utilities

These pure functions handle marking selection logic without any React or OSDK dependencies. Use them when building custom picker implementations.

### toggleMarking

```typescript
function toggleMarking(
  markingId: string,
  currentSelection: string[],
  categories: CategoryMarkingGroup[],
): string[];
```

Toggles a marking in the selection, respecting category type:

- **Conjunctive** categories: adds or removes the marking (checkbox behavior)
- **Disjunctive** categories: replaces the existing selection in that category (radio behavior)

### computeMarkingStates

```typescript
function computeMarkingStates(
  selectedIds: string[],
  impliedIds: string[],
  disallowedIds: string[],
): Map<string, MarkingSelectionState>;
```

Computes the display state for each marking based on the current selection, implied markings, and disallowed markings.

### groupMarkingsByCategory

```typescript
function groupMarkingsByCategory(
  markings: PickerMarking[],
  categories: PickerMarkingCategory[],
): CategoryMarkingGroup[];
```

Groups a flat list of markings into `CategoryMarkingGroup` arrays, ordered by category.

## Examples

### Example 1: Basic Inline Picker

```typescript
import { CbacPicker } from "@osdk/cbac-components/experimental";
import { useState } from "react";

function ClassificationForm() {
  const [markingIds, setMarkingIds] = useState<string[]>([]);

  return (
    <div>
      <h3>Classification</h3>
      <CbacPicker
        initialMarkingIds={markingIds}
        onChange={setMarkingIds}
      />
      <p>Selected markings: {markingIds.join(", ") || "None"}</p>
    </div>
  );
}
```

### Example 2: Picker in a Dialog with Confirmation

```typescript
import { CbacPickerDialog } from "@osdk/cbac-components/experimental";
import { useState } from "react";

function DocumentClassification() {
  const [isOpen, setIsOpen] = useState(false);
  const [markingIds, setMarkingIds] = useState<string[]>([]);

  const handleConfirm = (newMarkingIds: string[]) => {
    setMarkingIds(newMarkingIds);
    setIsOpen(false);
    // Save to your backend
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        {markingIds.length > 0 ? "Edit Classification" : "Add Classification"}
      </button>
      <CbacPickerDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onConfirm={handleConfirm}
        initialMarkingIds={markingIds}
      />
    </div>
  );
}
```

### Example 3: Read-Only Classification Display

```typescript
import { CbacPicker } from "@osdk/cbac-components/experimental";

interface ClassificationViewerProps {
  markingIds: string[];
}

const NOOP = () => {};

function ClassificationViewer({ markingIds }: ClassificationViewerProps) {
  return (
    <CbacPicker
      initialMarkingIds={markingIds}
      onChange={NOOP}
      readOnly={true}
    />
  );
}
```

### Example 4: Custom Data Fetching with BaseCbacPicker

Use `BaseCbacPicker` when you want to supply your own marking data instead of fetching from the OSDK:

```typescript
import {
  BaseCbacPicker,
  type CategoryMarkingGroup,
  computeMarkingStates,
  type MarkingSelectionState,
  toggleMarking,
} from "@osdk/cbac-components/experimental";
import { useCallback, useMemo, useState } from "react";

const CATEGORIES: CategoryMarkingGroup[] = [
  {
    category: {
      id: "cat-1",
      name: "Classification Level",
      description: "Overall classification",
      categoryType: "DISJUNCTIVE",
      markingType: "CBAC",
    },
    markings: [
      { id: "m-low", categoryId: "cat-1", name: "LOW" },
      { id: "m-medium", categoryId: "cat-1", name: "MEDIUM" },
      { id: "m-high", categoryId: "cat-1", name: "HIGH" },
    ],
  },
  {
    category: {
      id: "cat-2",
      name: "Access Groups",
      description: "Who can see this",
      categoryType: "CONJUNCTIVE",
      markingType: "CBAC",
    },
    markings: [
      { id: "m-internal", categoryId: "cat-2", name: "INTERNAL" },
      { id: "m-external", categoryId: "cat-2", name: "EXTERNAL" },
    ],
  },
];

function CustomClassificationPicker() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const markingStates = useMemo(
    () => computeMarkingStates(selectedIds, [], []),
    [selectedIds],
  );

  const handleToggle = useCallback(
    (markingId: string) => {
      setSelectedIds((prev) => toggleMarking(markingId, prev, CATEGORIES));
    },
    [],
  );

  return (
    <BaseCbacPicker
      categories={CATEGORIES}
      markingStates={markingStates}
      onMarkingToggle={handleToggle}
    />
  );
}
```

## Architecture

`@osdk/cbac-components` follows the same two-layer architecture as `@osdk/react-components`:

### OSDK Component Layer

Components like `CbacPicker` and `CbacPickerDialog` handle data fetching using `@osdk/react` hooks:

- `useMarkingCategories()` — fetches all marking categories
- `useMarkings()` — fetches all markings
- `useCbacBanner({ markingIds })` — resolves the classification string and colors
- `useCbacMarkingRestrictions({ markingIds })` — computes implied, disallowed, and required markings

These components convert OSDK data into primitive props and pass them to the base layer.

### Base Component Layer

Components like `BaseCbacPicker`, `BaseCbacBanner`, and `BaseCbacPickerDialog` are pure UI components with no OSDK imports. They accept primitive data (strings, arrays, Maps) and handle all rendering, interactions, and styling.

### Data Flow

```
  useCbacPickerState (hook)
  ├── useMarkingCategories() → categories
  ├── useMarkings() → markings
  ├── useCbacBanner() → banner data
  └── useCbacMarkingRestrictions() → implied, disallowed, required

  useCbacSelection (hook)
  ├── manages selectedIds state
  ├── calls useCbacPickerState
  └── provides toggle, dismiss, reset callbacks

  CbacPicker / CbacPickerDialog (OSDK layer)
  └── BaseCbacPicker / BaseCbacPickerDialog (base layer)
      ├── CategoryMarkingGroup → MarkingButton
      ├── BaseCbacBanner
      └── ValidationWarning
```

## Troubleshooting

### Picker shows "Loading..." indefinitely

- Ensure your app is wrapped with `OsdkProvider2` with a properly configured OSDK client
- Check that the OSDK client has access to the marking categories and markings APIs
- Verify network requests in browser DevTools for errors

### No markings appear

- Confirm that marking categories and markings are configured in your Foundry environment
- Check that the OSDK client's authentication token has the necessary permissions

### Banner shows default colors

- The banner resolves colors from the OSDK. If no marking IDs are provided, or the banner API returns no data, fallback colors are used
- Verify that the `useCbacBanner` hook is receiving the correct marking IDs

### Validation errors: "Selected markings do not include all required markings"

- Some marking combinations require additional markings. The `requiredMarkingGroups` in the picker state show which markings need to be added
- The confirm button in `CbacPickerDialog` is disabled with a tooltip when the selection is invalid

### CSS not applied

- Ensure you've imported `@osdk/cbac-components/styles.css` in your CSS entry file
- If using CSS layers, verify the layer order includes the cbac styles

### Type errors with imports

- All components and types should be imported from `@osdk/cbac-components/experimental`
- Ensure your `@osdk/react` and `@osdk/react-components` peer dependencies are installed

## Additional Resources

- [CbacPicker Implementation](https://github.com/palantir/osdk-ts/blob/main/packages/cbac-components/src/cbac-picker/CbacPicker.tsx)
- [CbacPickerDialog Implementation](https://github.com/palantir/osdk-ts/blob/main/packages/cbac-components/src/cbac-picker/CbacPickerDialog.tsx)
- [Selection Logic](https://github.com/palantir/osdk-ts/blob/main/packages/cbac-components/src/cbac-picker/utils/selectionLogic.ts)
- [Type Definitions](https://github.com/palantir/osdk-ts/blob/main/packages/cbac-components/src/cbac-picker/types.ts)
- [@osdk/react Documentation](https://github.com/palantir/osdk-ts/blob/main/docs/react/getting-started.md)
