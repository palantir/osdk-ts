# @osdk/react-components

Pre-built, Ontology-aware React components. Pass in OSDK entities and they handle data loading, caching, and state management automatically. Requires `@osdk/react` (see the `@osdk/react` package's `AGENTS.md` for hooks and provider setup).

## Components

All components import from `@osdk/react-components/experimental`.

| Component              | Description                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **ObjectTable**        | Table for displaying OSDK object sets with sorting, filtering, inline editing, column pinning/resizing, row selection, and infinite scroll. |
| **BaseTable**          | OSDK-agnostic base table — use when building custom data fetching on top of the table UI.                                                   |
| **FilterList**         | Aggregation-based filter UI for object sets with draggable reordering.                                                                      |
| **BaseFilterList**     | OSDK-agnostic base filter list — use for custom filter implementations.                                                                     |
| **ColumnConfigDialog** | Dialog for managing column visibility and drag-and-drop reordering.                                                                         |
| **PdfViewer**          | PDF viewer for OSDK Media objects with toolbar, search, annotations, sidebar (thumbnails/outline), highlight mode, and form fields.         |
| **BasePdfViewer**      | OSDK-agnostic base PDF viewer — accepts a URL or ArrayBuffer directly. Use when building custom data fetching on top of the viewer UI.      |

## Documentation

Before using any component, read the relevant doc from this package:

- **Setup & installation**: Read [README.md](./README.md) for provider, CSS layers, and peer dependencies
- **ObjectTable**: Read [docs/ObjectTable.md](./docs/ObjectTable.md) for props, column definitions, examples, theming, and troubleshooting
- **PdfViewer**: Read [docs/PdfViewer.md](./docs/PdfViewer.md) for props, annotations, building blocks, hooks, examples, and theming
- **FilterList**: Read [docs/FilterList.md](./docs/FilterList.md) for props, examples, and usage
