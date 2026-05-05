# @osdk/react-components

Pre-built, Ontology-aware React components. Pass in OSDK entities and they handle data loading, caching, and state management automatically. Requires `@osdk/react` (see the `@osdk/react` package's `AGENTS.md` for hooks and provider setup).

## Installing

**Default: `pnpm add @osdk/react-components@latest @osdk/react@latest`** — use prereleases only if you specifically need an unreleased feature. Everything below is for when you are NOT on the latest stable.

Requires `@osdk/react` AND `@osdk/client` AND `@osdk/api` together. Versions must line up tighter than the declared peer ranges. Both `@osdk/react-components` and `@osdk/react` import from the unstable `@osdk/client` surface, which moves between releases without deprecation.

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

See `@osdk/react`'s `AGENTS.md` for optional peers (`@osdk/foundry.admin`, `@osdk/foundry.core`) used by the admin hooks.

## Install-time errors

| Error                                                                                                                           | Cause                                                                                                             | Fix                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"<name>" is not exported by @osdk/client/.../observable.js` (or `@osdk/client/.../unstable-do-not-use.js`, or `@osdk/api/...`) | `@osdk/client` or `@osdk/api` or `@osdk/react` version mismatches what `@osdk/react-components` was built against | Do NOT delete the import or downgrade silently. Follow the CHANGELOG recipe in `## Installing` and pin all three peers to the exact versions listed. |
| `"<name>" is not exported by @osdk/react/...`                                                                                   | `@osdk/react` version mismatches what `@osdk/react-components` was built against                                  | Do NOT delete the import or downgrade silently. Follow the CHANGELOG recipe in `## Installing` and pin `@osdk/react` to the exact version listed.    |
| `Rollup failed to resolve import "@osdk/foundry.admin"` (or `@osdk/foundry.core`)                                               | Transitive import from `@osdk/react/platform-apis` without the optional peers                                     | Install `@osdk/foundry.admin` + `@osdk/foundry.core`, OR avoid surfaces that use the admin hooks.                                                    |
| pnpm/npm peer warning about `@osdk/client` or `@osdk/react` range                                                               | Declared peer ranges are broad; prerelease coupling is tighter                                                    | Follow the CHANGELOG recipe; pin to exact versions.                                                                                                  |

## Components

Components are imported from their individual entry points under `@osdk/react-components/experimental/`:

- `@osdk/react-components/experimental/object-table` — ObjectTable, BaseTable, ColumnConfigDialog
- `@osdk/react-components/experimental/filter-list` — FilterList, BaseFilterList
- `@osdk/react-components/experimental/pdf-viewer` — PdfViewer, BasePdfViewer, and building blocks/hooks
- `@osdk/react-components/experimental/tiff-renderer` — TiffRenderer
- `@osdk/react-components/experimental/markdown-renderer` — MarkdownRenderer

| Component              | Description                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **ObjectTable**        | Table for displaying OSDK object sets with sorting, filtering, inline editing, column pinning/resizing, row selection, and infinite scroll. |
| **BaseTable**          | OSDK-agnostic base table — use when building custom data fetching on top of the table UI.                                                   |
| **FilterList**         | Aggregation-based filter UI for object sets with draggable reordering.                                                                      |
| **BaseFilterList**     | OSDK-agnostic base filter list — use for custom filter implementations.                                                                     |
| **ColumnConfigDialog** | Dialog for managing column visibility and drag-and-drop reordering.                                                                         |
| **PdfViewer**          | PDF viewer for OSDK Media objects with toolbar, search, annotations, sidebar (thumbnails/outline), highlight mode, and form fields.         |
| **BasePdfViewer**      | OSDK-agnostic base PDF viewer — accepts a URL or ArrayBuffer directly. Use when building custom data fetching on top of the viewer UI.      |
| **TiffRenderer**       | TIFF image renderer — accepts a `Uint8Array` and renders onto a canvas with size validation and error handling.                             |
| **MarkdownRenderer**   | Markdown renderer that accepts a markdown string and renders it with styled headings, code blocks, tables, and links.                       |

## Documentation

Before using any component, read the relevant doc from this package:

- **Setup & installation**: Read [README.md](./README.md) for provider, CSS layers, and peer dependencies
- **ObjectTable**: Read [docs/ObjectTable.md](./docs/ObjectTable.md) for props, column definitions, examples, theming, and troubleshooting
- **PdfViewer**: Read [docs/PdfViewer.md](./docs/PdfViewer.md) for props, annotations, building blocks, hooks, examples, and theming
- **TiffRenderer**: Read [docs/TiffViewer.md](./docs/TiffViewer.md) for props and usage
- **MarkdownRenderer**: Read [docs/MarkdownRenderer.md](./docs/MarkdownRenderer.md) for props, examples, and theming
- **FilterList**: Read [docs/FilterList.md](./docs/FilterList.md) for props, examples, and usage
