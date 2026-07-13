---
"@osdk/react-devtools": minor
"@osdk/ontology-explorer-app": minor
---

add an ontology graph tab that visualizes the object types the app uses and their links, with a detail panel showing each type's properties and the components using it

the graph rendering (React Flow canvas, layout, node and detail components) now lives in `@osdk/ontology-explorer-app` under the `/ontology-graph` entry point, and `@osdk/react-devtools` imports it from there instead of maintaining its own copy
