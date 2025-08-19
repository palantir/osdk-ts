# ObservableClient Folder

Type definitions and interfaces for the ObservableClient system using RxJS/Observable patterns.

## Files Overview

### common.ts

- `Status`: Core state enum for observation states
- `Observer<T>`: Standard observer pattern interface
- `CommonObserveOptions`: Base options for observation behavior
- `ObserveOptions`: Mode configuration for data fetching strategies
- `OrderBy<Q>`: Generic type for sort order specification

### ObserveLink.ts

- `ObserveLink.Options<Q>`: Configuration for link observations with filtering, pagination, and cache invalidation
- `ObserveLink.CallbackArgs<T>`: Callback data structure with resolved links, optimistic updates, and pagination
