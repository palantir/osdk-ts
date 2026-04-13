# @osdk/cbac-components

React components for [classification-based access control (CBAC)](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/). CBAC markings control who can access data — users select markings from categories (disjunctive = pick one, conjunctive = pick many) and the server computes restrictions (implied, disallowed, required markings) and resolves a classification banner. Pass in marking IDs and these components handle all of that automatically. Requires `@osdk/react` (see the `@osdk/react` package's `AGENTS.md` for hooks and provider setup).

## Components

All components import from `@osdk/cbac-components/experimental`.

| Component                | Description                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| **CbacPicker**           | Inline CBAC marking picker with OSDK data fetching, selection state, restriction enforcement, and classification banner. |
| **CbacPickerDialog**     | Dialog wrapper for CbacPicker with confirm/cancel actions and validation.                                                |
| **BaseCbacPicker**       | OSDK-agnostic base picker — use when building custom data fetching on top of the picker UI.                              |
| **BaseCbacBanner**       | OSDK-agnostic classification banner display with customizable colors and text.                                           |
| **BaseCbacPickerDialog** | OSDK-agnostic dialog wrapper for BaseCbacPicker with confirm/cancel actions.                                             |

## Utilities

| Export                    | Description                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------ |
| `toggleMarking`           | Toggle a marking in a selection, respecting category type (CONJUNCTIVE/DISJUNCTIVE). |
| `computeMarkingStates`    | Compute the state (SELECTED, IMPLIED, DISALLOWED, etc.) for each marking.            |
| `groupMarkingsByCategory` | Organize markings into groups by their category.                                     |

## Types

| Type                    | Description                                                                      |
| ----------------------- | -------------------------------------------------------------------------------- |
| `MarkingSelectionState` | Union: "NONE" \| "SELECTED" \| "IMPLIED" \| "DISALLOWED" \| "IMPLIED_DISALLOWED" |
| `CbacBannerData`        | Classification string, text color, background colors, marking IDs.               |
| `PickerMarkingCategory` | Category metadata (id, name, description, type).                                 |
| `PickerMarking`         | Marking metadata (id, categoryId, name, description).                            |
| `CategoryMarkingGroup`  | Pairing of a category with its markings.                                         |
| `RequiredMarkingGroup`  | Group of marking names that must be selected together.                           |

## Documentation

Before using any component, read the relevant doc from this package:

- **Setup & installation**: Read [README.md](./README.md) for provider, CSS, and peer dependencies
- **CbacPicker**: Read [docs/CbacPicker.md](./docs/CbacPicker.md) for props, examples, base components, and troubleshooting
