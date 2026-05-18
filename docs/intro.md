---
slug: /
sidebar_position: 1
---

# OSDK TypeScript

Documentation for the OSDK TypeScript packages.

## Packages

### [@osdk/react](/react/prerequisites)

React hooks for building front-end applications with OSDK.

- [Prerequisites](/react/prerequisites) - Installation and setup
- [Getting Started](/react/getting-started) - First app walkthrough
- [Querying Data](/react/querying-data) - useOsdkObjects, useOsdkObject, useLinks
- [Actions](/react/actions) - useOsdkAction, validation, optimistic updates
- [Advanced Queries](/react/advanced-queries) - useObjectSet, derived properties, aggregations
- [Cache Management](/react/cache-management) - Cache behavior and invalidation
- [Platform APIs](/react/platform-apis) - useCurrentFoundryUser, useFoundryUser, useFoundryUsersList

### [Components](/react-components/Prerequisites)

Pre-built, Ontology-aware React components with data loading, caching, and state management.

- [Prerequisites](/react-components/Prerequisites) - Installation, CSS layers, and theming setup
- [ObjectTable](/react-components/ObjectTable) - Sortable, filterable table with inline editing
- [FilterList](/react-components/FilterList) - Aggregation-based filter UI
- [PdfViewer](/react-components/PdfViewer) - PDF viewer with annotations and search
- [CbacPicker](/cbac-components/CbacPicker) - Classification marking picker, dialog, and banner

### [Devtools](/react-devtools/Prerequisites)

In-app monitoring panel and Vite plugin for inspecting, debugging, and tuning OSDK React applications during development.

- [Prerequisites](/react-devtools/Prerequisites) - Installation and Vite plugin setup
- [Getting Started](/react-devtools/GettingStarted) - Panel tour and tab overview
- [Performance](/react-devtools/Performance) - Object loads, cache hits, dedupe, and revalidation
- [Compute](/react-devtools/Compute) - Per-request Foundry compute attribution
- [Intercept](/react-devtools/Intercept) - Mock OSDK queries and actions inline
- [Debugging](/react-devtools/Debugging) - Errors, active hooks, and the cache inspector

### Other Guides

- [Using OSDK with Vite](/guides/vite) - Fixing common Vite configuration issues
