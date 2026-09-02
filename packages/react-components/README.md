# @osdk/react-components

> **⚠️ Beta Release**: This package is currently in beta. Please use the latest beta version for the most up-to-date features and fixes.

React components for building Foundry applications. These components are Ontology-aware — pass in OSDK entities, and they handle data loading, caching, and state management automatically.

Built on top of [@osdk/react](https://github.com/palantir/osdk-ts/tree/main/packages/react), these components use OSDK hooks internally to provide ready-to-use UI elements. While @osdk/react gives you low-level hooks for data fetching, @osdk/react-components provides UI widgets for common patterns like tables and forms.

## Table of Contents

- [Installation](#installation)
  - [Matching peer versions](#matching-peer-versions)
  - [Install-time errors](#install-time-errors)
- [Setup](#setup)
  - [App Setup](#app-setup)
  - [CSS Setup](#css-setup)
- [Components](#components)
- [Component Architecture](#component-architecture)
  - [Core layers](#core-layers-all-components)
  - [Building blocks](#building-blocks-select-components)
  - [Export Strategy](#export-strategy)
- [Custom Styling](#custom-styling)
- [Example Usage](#example-usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Why this package?](#why-this-package)
- [What this package is (and isn't)](#what-this-package-is-and-isnt)
- [License](#license)

## Installation

**Default: `pnpm add @osdk/react-components@latest @osdk/react@latest`** — use prereleases only if you specifically need an unreleased feature.

```sh
npm install @osdk/react-components
```

**Peer Dependencies:**

The following peer dependencies are required:

```sh
npm install react react-dom classnames @osdk/react @osdk/client @osdk/api
```

- `react`, `@types/react`, `react-dom` - React 17, 18, or 19
- `classnames` - Utility for conditionally joining CSS class names
- `@osdk/react`, `@osdk/api`, `@osdk/client` - The packages required for data-handling

**Prerequisites:**

- A configured OSDK client
- An OsdkProvider wrapping your application

### Matching peer versions

`@osdk/react`, `@osdk/client`, and `@osdk/api` must be installed together, and the versions must line up tighter than the declared peer ranges. Both `@osdk/react-components` and `@osdk/react` import from the unstable `@osdk/client` surface, which moves between releases without deprecation.

- **Stable `@osdk/react-components`** → latest stable `@osdk/react`, `@osdk/client`, and `@osdk/api`.
- **Prerelease `@osdk/react-components`** → MUST use matching prerelease versions of all three peers. Mismatches will break at build time.

To find the exact compatible peer versions:

1. Open `node_modules/@osdk/react-components/CHANGELOG.md`
2. Find the heading matching your installed `@osdk/react-components` version
3. If that entry has an `Updated dependencies` section, install the exact versions it lists for `@osdk/react`, `@osdk/client`, and `@osdk/api`
4. If it does NOT, walk backwards to the most recent prior entry that does, and use those versions

**Worked example** — installed `@osdk/react-components@0.2.0-beta.26`:

- Entry lists `@osdk/client@2.8.0-beta.29`, `@osdk/api@2.8.0-beta.29`, `@osdk/react@0.10.0-beta.14`
- Run: `pnpm add @osdk/client@2.8.0-beta.29 @osdk/api@2.8.0-beta.29 @osdk/react@0.10.0-beta.14`

See [@osdk/react's README](https://github.com/palantir/osdk-ts/blob/main/packages/react/README.md) for optional peers (`@osdk/foundry.admin`, `@osdk/foundry.core`) used by the admin hooks.

### Install-time errors

| Error                                                                                                                          | Cause                                                                                                            | Fix                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"<name>" is not exported by @osdk/client/.../observable.js` (or `@osdk/client/.../unstable-do-not-use.js`, or `@osdk/api/...`) | `@osdk/client` or `@osdk/api` or `@osdk/react` version mismatches what `@osdk/react-components` was built against | Do NOT delete the import or downgrade silently. Follow the CHANGELOG recipe in [Matching peer versions](#matching-peer-versions) and pin all three peers to the exact versions listed. |
| `"<name>" is not exported by @osdk/react/...`                                                                                  | `@osdk/react` version mismatches what `@osdk/react-components` was built against                                 | Do NOT delete the import or downgrade silently. Follow the CHANGELOG recipe and pin `@osdk/react` to the exact version listed.                       |
| `Rollup failed to resolve import "@osdk/foundry.admin"` (or `@osdk/foundry.core`)                                              | Transitive import from `@osdk/react/platform-apis` without the optional peers                                    | Install `@osdk/foundry.admin` + `@osdk/foundry.core`, OR avoid surfaces that use the admin hooks.                                                   |
| pnpm/npm peer warning about `@osdk/client` or `@osdk/react` range                                                              | Declared peer ranges are broad; prerelease coupling is tighter                                                   | Follow the CHANGELOG recipe; pin to exact versions.                                                                                                 |

## Setup

### App Setup

**REQUIRED:** Wrap app with OsdkProvider:

```tsx
import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";

const client = createClient(/* config */);

function App() {
  return <OsdkProvider client={client}>{/* components */}</OsdkProvider>;
}
```

### CSS Setup

Add the OSDK style import to your application's entry CSS file (e.g., `index.css`). This single import includes both design tokens and component styles.

#### Understanding CSS Layers

OSDK uses CSS [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) to make theming predictable. If you're not familiar with `@layer`, here's what you need to know:

**What is `@layer`?** CSS `@layer` lets you group styles into named layers and control the order in which they apply. When two styles target the same element, the style in the _later_ layer always wins — regardless of selector specificity. This is what makes the theming system maintainable.
**Adding your own layer:** You can add a custom layer (e.g., `user.brand`) after the OSDK layers to override any token or component style. Later layers always win.

**When styles conflict, CSS resolves them in this order:**

1. **Layer order** — Later layers always win (`osdk.components` < `user.brand`)
2. **Selector specificity** — More specific selectors win _within the same layer_
3. **Source order** — Later declarations win when specificity is equal

#### With Tailwind CSS v4

> **Important:** The `@layer` declaration defines the cascade order. Wrapping the Tailwind import in `layer(tailwind)` nests all of Tailwind's styles into a single named layer. By listing `tailwind` before the OSDK layers, OSDK styles take priority over Tailwind's resets and utilities.

```css
/* index.css */
@layer tailwind, osdk.styles, user.brand;

@import "tailwindcss" layer(tailwind);
@import "@osdk/react-components/styles.css" layer(osdk.styles);

/* To add your own brand overrides on top, append a custom layer: */
@import "./user-brand.css" layer(user.brand);
```

To add your own brand overrides on top:

```css
/* index.css */
@layer osdk.styles, user.brand;

@import "@osdk/react-components/styles.css" layer(osdk.styles);
@import "./user-brand.css" layer(user.brand);
```

#### Portal isolation (required)

Add `isolation: isolate` to your app's root element. This is required for Base UI portals. See https://base-ui.com/react/overview/quick-start#portals

```css
#root {
  isolation: isolate;
}
```

## Components

> **Note:** This package is under active development. Not all components listed below are available yet.

Components are imported from their individual entry points under `@osdk/react-components/experimental/`:

- `@osdk/react-components/experimental/object-table` — ObjectTable, BaseTable, ColumnConfigDialog
- `@osdk/react-components/experimental/filter-list` — FilterList, BaseFilterList
- `@osdk/react-components/experimental/action-form` — ActionForm, BaseForm, and form field definitions
- `@osdk/react-components/experimental/pdf-viewer` — PdfViewer, BasePdfViewer, and building blocks/hooks
- `@osdk/react-components/experimental/tiff-renderer` — TiffViewer, BaseTiffViewer
- `@osdk/react-components/experimental/markdown-renderer` — MarkdownViewer, BaseMarkdownViewer
- `@osdk/react-components/experimental/aip-agent-chat` — AipAgentChat, BaseAipAgentChat
- `@osdk/react-components/experimental/document-viewer` — DocumentViewer
- `@osdk/react-components/experimental/email-viewer` — EmailViewer, BaseEmailViewer
- `@osdk/react-components/experimental/spreadsheet-viewer` — SpreadsheetViewer, BaseSpreadsheetViewer
- `@osdk/react-components/experimental/image-viewer` — ImageViewer, BaseImageViewer
- `@osdk/react-components/experimental/video-viewer` — VideoViewer, BaseVideoViewer
- `@osdk/react-components/experimental/xml-viewer` — XmlViewer, BaseXmlViewer
- `@osdk/react-components/experimental/cbac-picker` — CbacPicker, CbacPickerDialog, CbacBanner, and their base components

| Component                  | Description                                                                                                                                       | Documentation                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **ObjectTable**            | Table for displaying OSDK object sets with sorting, filtering, inline editing, column pinning/resizing, row selection, and infinite scroll.       | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/ObjectTable.md)       |
| **BaseTable**              | OSDK-agnostic base table — use when building custom data fetching on top of the table UI.                                                         | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/ObjectTable.md)       |
| **ColumnConfigDialog**     | Dialog for managing column visibility and drag-and-drop reordering.                                                                               | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/ObjectTable.md)       |
| **FilterList**             | Aggregation-based filter UI for object sets with draggable reordering.                                                                            | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/FilterList.md)        |
| **BaseFilterList**         | OSDK-agnostic base filter list — use for custom filter implementations.                                                                           | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/FilterList.md)        |
| **ActionForm**             | Form for applying OSDK actions with generated or custom field definitions.                                                                        | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/ActionForm.md)        |
| **BaseForm**               | OSDK-agnostic base action form — use when supplying explicit field content and submit handling.                                                   | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/ActionForm.md)        |
| **PdfViewer**              | PDF viewer for OSDK Media objects with toolbar, search, annotations, sidebar (thumbnails/outline), highlight mode, and form fields.               | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/PdfViewer.md)         |
| **BasePdfViewer**          | OSDK-agnostic base PDF viewer — `src` takes a URL, `ArrayBuffer`, `Uint8Array`, or `Blob`. Use when building custom data fetching on top of it.   | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/PdfViewer.md)         |
| **TiffViewer**             | TIFF viewer for OSDK Media objects — fetches the TIFF contents and renders them onto a canvas.                                                    | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/TiffViewer.md)        |
| **BaseTiffViewer**         | OSDK-agnostic base TIFF viewer — `src` takes a `Uint8Array`, rendered onto a canvas with size validation and error handling.                      | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/TiffViewer.md)        |
| **MarkdownViewer**         | Markdown viewer for OSDK Media objects — fetches the markdown text and renders it with styled headings, code blocks, tables, and links.           | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/MarkdownViewer.md)    |
| **BaseMarkdownViewer**     | OSDK-agnostic base markdown viewer — accepts a markdown string directly. Use when building custom data fetching on top of the viewer UI.          | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/MarkdownViewer.md)    |
| **AipAgentChat**           | Chat surface backed by Foundry LMS via `useChat`. Takes a `PlatformClient` + model API name and renders messages, composer, and streaming.        | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/AipAgentChat.md)      |
| **BaseAipAgentChat**       | OSDK-agnostic base chat — accepts `messages`/`status`/`onSendMessage` directly. Use for custom chat-state plumbing.                               | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/AipAgentChat.md)      |
| **DocumentViewer**         | Unified media viewer that auto-detects file type (PDF, TIFF, image, video, spreadsheet, email, markdown, XML) and renders the appropriate viewer. | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/DocumentViewer.md)    |
| **EmailViewer**            | Email viewer — parses and renders `.eml` files with headers, HTML body (sandboxed iframe), and plain text fallback.                               | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/EmailViewer.md)       |
| **SpreadsheetViewer**      | Spreadsheet viewer — parses and renders `.xlsx` spreadsheets with sheet tabs and column/row headers.                                              | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/SpreadsheetViewer.md) |
| **ImageViewer**            | Image viewer — renders images (PNG, JPEG, GIF, SVG, WebP, BMP) with object-fit contain.                                                           | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/ImageViewer.md)       |
| **VideoViewer**            | Video viewer — renders video with native browser controls.                                                                                        | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/VideoViewer.md)       |
| **XmlViewer**              | XML viewer — renders XML content with syntax preservation.                                                                                        | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/XmlViewer.md)         |
| **CbacPicker**             | Picker for classification-based access control (CBAC) markings — disjunctive/conjunctive categories, restriction enforcement, banner.             | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/CbacPicker.md)        |
| **CbacPickerDialog**       | Dialog wrapper for `CbacPicker` with confirm/cancel actions and validation.                                                                       | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/CbacPicker.md)        |
| **CbacBanner**             | OSDK-aware classification banner that resolves a marking-set into a colored banner.                                                               | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/CbacPicker.md)        |
| **BaseCbacPicker**         | OSDK-agnostic base CBAC picker — use when building custom data fetching on top of the picker UI.                                                  | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/CbacPicker.md)        |
| **BaseCbacBanner**         | OSDK-agnostic classification banner display with customizable colors and text.                                                                    | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/CbacPicker.md)        |
| **BaseCbacPickerDialog**   | OSDK-agnostic dialog wrapper for `BaseCbacPicker`.                                                                                                | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/CbacPicker.md)        |
| **MaxClassificationField** | Field that lets users constrain the maximum classification allowed for a marking selection.                                                       | [Guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/CbacPicker.md)        |

## Component Architecture

This package follows a layered architecture pattern to maximize flexibility and reusability.

### Core layers (all components)

1. **OSDK Component Layer** (e.g., `ObjectTable`, `PdfViewer`)
   - Handles data fetching and processing using @osdk/react hooks
   - Converts OSDK types to primitive data structures
   - Manages OSDK-specific operations like filtering and actions
   - No styling or component interactions

2. **Base Component Layer** (e.g., `BaseTable`, `BasePdfViewer`)
   - Pure component layer with no OSDK imports
   - Contains all component interactions and styling
   - Accepts primitive props like `string[]`, arrays, and objects
   - Can be reused with custom data fetching layers

### Building blocks (select components)

Some components also provide a **building blocks** tier — individual sub-components and hooks that can be composed into fully custom layouts. Not every component needs this; it's offered where the UI is complex enough that users may want to rearrange or replace parts of it.

For example, the PDF viewer offers three levels of customization:

| Tier            | What you use                                                     | What you get                                                     |
| --------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Drop-in         | `PdfViewer` / `BasePdfViewer`                                    | Full viewer with toolbar, sidebar, search — zero assembly        |
| Building blocks | `PdfViewerToolbar`, `PdfViewerSidebar`, `PdfViewerContent`, etc. | Custom layout using standard parts                               |
| Hooks           | `usePdfViewerState` / `usePdfViewerCore` / primitive hooks       | Build entirely custom components; hooks do all the heavy lifting |

See the [PdfViewer guide](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/PdfViewer.md) for the full API reference.

### Example: ObjectTable and BaseTable

```tsx
// ObjectTable - Data layer
- Fetches OSDK object data using useOsdkObjects
- Handles OSDK-specific operations (filtering, sorting, actions)
- Converts OSDK objects to table row data
- Manages object property metadata
- Passes primitive data to BaseTable

// BaseTable - Component layer
- Pure table component with no OSDK imports
- Handles all UI interactions (sorting, selection, editing)
- Manages component state
```

### Benefits

- **Flexibility**: Users can build custom components using the Base layer with their own data sources
- **Separation of Concerns**: Data fetching logic is cleanly separated from UI logic
- **Reusability**: Base components can be exported and used independently
- **Testing**: Base components can be tested without OSDK dependencies

### Export Strategy

- **OSDK Components**: Exported through individual entry points under `experimental/` (e.g., `experimental/object-table`, `experimental/filter-list`)
- **Base Components**: Select base components are exported for advanced use cases (e.g., `BaseTable`, `BaseFilterList`)
- **UI Primitives**: Internal UI primitives (buttons, inputs, dialogs) are **NOT exported**

#### Why Not Export UI Primitives?

This package focuses on complex, Ontology-aware components with built-in data fetching. For simple UI components (buttons, inputs, dialogs), users should use established component libraries like Blueprint.js or their preferred design system. This approach:

- Keeps the package focused on its core value proposition
- Avoids duplicating well-solved UI problems
- Reduces maintenance burden
- Encourages consistent use of existing design systems

## Custom Styling

See the [CSS Variables Reference](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/CSSVariables.md) on how to apply custom themes and styling to the components.

## Example Usage

### Object Table

```ts
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import { Employee } from "@your-osdk-package";

function EmployeeDirectory() {
  return (
    <ObjectTable
      objectType={Employee}
    />
  );
}
```

## Documentation

Before using any component, read the relevant guide:

- **ObjectTable**: [docs/ObjectTable.md](./docs/ObjectTable.md) — props, column definitions, examples, theming, troubleshooting, and hooks to build custom tables
- **ActionForm**: [docs/ActionForm.md](./docs/ActionForm.md) — generated fields, title behavior, custom field definitions, switch fields, and date/time behavior
- **PdfViewer**: [docs/PdfViewer.md](./docs/PdfViewer.md) — props, annotations, building blocks, hooks, examples, and theming
- **TiffViewer**: [docs/TiffViewer.md](./docs/TiffViewer.md) — props and usage
- **MarkdownViewer**: [docs/MarkdownViewer.md](./docs/MarkdownViewer.md) — props, examples, and theming
- **FilterList**: [docs/FilterList.md](./docs/FilterList.md) — props, examples, and usage
- **CbacPicker**: [docs/CbacPicker.md](./docs/CbacPicker.md) — props, examples, base components, and troubleshooting
- **CSS variables**: [docs/CSSVariables.md](./docs/CSSVariables.md) — every themeable token

## Contributing

Looking to contribute to the codebase? Read the [contribution guidelines](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/CONTRIBUTING.md), then [`AGENTS.md`](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/AGENTS.md) for the engineering rules this package enforces (architecture, API design, styling, testing, Storybook, metrics) and its development workflow.

If you use an agentic coding tool, this package ships two skills that wrap `CONTRIBUTING.md`:

- Run `/add-new-component` (or describe the component you want to add) — the [`add-new-component` skill](../../.agents/skills/add-new-component/SKILL.md) walks you through the API-first PR, MVP checklist, and verification loop.
- Run `/contribute` (or describe the bug to fix / feature to add on an existing component) — the [`contribute` skill](../../.agents/skills/contribute/SKILL.md) adds a failing-test-first gate for bugs, an API-change checkpoint when the diff touches public props, and a verification loop.

## Why this package?

**OSDK-native.** These components understand Foundry concepts like Objects, Object Sets, and Actions. They are purpose-built for Ontology data.

**Best practices included.** Loading states, error handling, caching, and data freshness are handled for you — no need to reimplement these patterns for each component.

**Fully customizable.** Supports custom styling for any design system.

## What this package is (and isn't)

**Included:** Components that consume OSDK entities directly — tables, forms, filtering patterns.

**Not included:** Generic UI primitives (buttons, inputs, modals). Use [Blueprint.js](blueprintjs.com) or your preferred component library for those.

## License

Apache 2.0
