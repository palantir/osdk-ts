---
title: "@osdk/react Documentation"
---

# @osdk/react

React hooks and components for building reactive applications with OSDK.

**Note:** The experimental features are under active development and APIs may change.

## Features

- **Data Fetching Hooks**: Query objects, links, aggregations, and metadata with automatic caching
- **Real-time Updates**: Stream live data changes via WebSocket with `streamUpdates`
- **Normalized Caching**: Automatic cache invalidation and synchronization
- **Optimistic Updates**: Instant UI feedback with automatic rollback on errors
- **Advanced Querying**: Set operations, link traversal, derived properties, and server-side aggregations
- **Action Management**: Execute and validate actions with full loading/error states

## Documentation

- [Getting Started](./getting_started.md) - Installation, setup, first app
- [Querying Data](./querying-data.md) - useOsdkObjects, useOsdkObject, useLinks
- [Actions](./actions.md) - useOsdkAction, validation, optimistic updates
- [Advanced Queries](./advanced-queries.md) - useObjectSet, derived properties, aggregations
- [Cache Management](./cache-management.md) - Cache behavior and invalidation

## Quick Reference

### Stable Features (`@osdk/react`)

```tsx
import { OsdkProvider, useOsdkClient, useOsdkMetadata } from "@osdk/react";
```

### Experimental Features (`@osdk/react/experimental`)

```tsx
import {
  OsdkProvider2,
  useOsdkObjects,
  useOsdkObject,
  useOsdkAction,
  useLinks,
  useObjectSet,
  useOsdkAggregation,
  useDebouncedCallback,
} from "@osdk/react/experimental";
```

[Back to Home](../)
