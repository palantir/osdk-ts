# @osdk/react-components

Pre-built, Ontology-aware React components. Pass in OSDK entities and they handle data loading, caching, and state management automatically. Requires `@osdk/react` (see the `@osdk/react` package's `AGENTS.md` for hooks and provider setup).

## Components

All components import from `@osdk/react-components/experimental`.

| Component | Description |
| --- | --- |
| **ObjectTable** | Table for displaying OSDK object sets with sorting, filtering, inline editing, column pinning/resizing, row selection, and infinite scroll. |
| **BaseTable** | OSDK-agnostic base table — use when building custom data fetching on top of the table UI. |
| **FilterList** | Aggregation-based filter UI for object sets with draggable reordering. |
| **BaseFilterList** | OSDK-agnostic base filter list — use for custom filter implementations. |
| **ColumnConfigDialog** | Dialog for managing column visibility and drag-and-drop reordering. |

## Documentation

Read progressively — start with what you need, go deeper as required:

1. **Setup & installation**: [README.md](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/README.md) — provider, CSS layers, peer dependencies
2. **ObjectTable deep dive**: [docs/ObjectTable.md](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/docs/ObjectTable.md) — full props reference, column definitions, 14+ examples, theming, troubleshooting
