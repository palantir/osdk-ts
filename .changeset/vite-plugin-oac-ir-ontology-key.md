---
"@osdk/vite-plugin-oac": patch
---

Read ontology block data from the `ontology` key of the maker IR instead of the nonexistent `blockData` key, fixing `Cannot read properties of undefined (reading 'interfaceTypes')` during IR to full metadata conversion.
