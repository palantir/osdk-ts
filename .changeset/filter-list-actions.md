---
"@osdk/react-components": minor
---

add configurable filter actions, move remove into overflow menu, surface overflow on every filter

• every filter row now renders the `...` overflow menu, including linked, range, and timeline filters
• the standalone remove (X) button moves into the overflow menu by default
• new `actions` field on `FilterDefinition` controls search/overflow/remove visibility
