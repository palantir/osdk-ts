---
"@osdk/maker": patch
"@osdk/vite-plugin-oac": patch
---

fix maker cli to load .mts/.ts ontology files via jiti and read full ontology block from the ir json. unblocks vite-plugin-oac in a vanilla node 20+ environment without an esm loader flag.

also fix the plugin's auto-generated modifyObject action impl to dispatch by parameter type when the action uses a semantically-named object parameter (e.g. `passenger`) instead of the canonical `objectToModifyParameter`. previously, custom actions declaring `modifiedEntities` would 404 with `primaryKey: "undefined"`.
