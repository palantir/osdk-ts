---
"@osdk/react-devtools": minor
"@osdk/ontology-explorer-app": minor
---

add a shared ontology graph that visualizes object, action and query types together, with edges for links and for the objects each action creates or modifies, a detail panel of each entity's properties, parameters, edits or output, a per-node type label, and a top bar to filter the graph by entity type

`@osdk/ontology-explorer-app` now renders the graph as its main view, sourced from the local ontology dump served at `/api/ontology`, and owns the reusable rendering layer (React Flow canvas, dagre layout, node and detail components) plus an `OntologyGraphView` component and `OntologySource` abstraction under the `/ontology-graph` entry point. The graph styles itself through its own `--og-*` theme tokens so it renders correctly anywhere, not just inside the devtools panel.

`@osdk/react-devtools` consumes that view in a compact form and adds a source toggle: "Used" shows the object and action types the app has queried or cached, "Generated Ontology" lists every object, action and query type in the client's ontology.
