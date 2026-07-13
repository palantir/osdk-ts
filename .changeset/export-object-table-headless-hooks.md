---
"@osdk/react-components": minor
---

Export ObjectTable's hooks so consumers can build a custom table. `useObjectTableData` now takes a single options object instead of positional arguments. Consumers building their own table with these hooks should install a `@tanstack/react-table` version matching the one this package depends on to avoid type incompatibilities.
