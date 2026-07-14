---
"@osdk/client": minor
---

Add `ObservableClient.applyChanges` for pushing externally-sourced object upserts and deletes directly into the observable cache. Changes flow through the same ingest path as server fetches and websocket stream updates, so all observing hooks update reactively without a network round trip. This lets an embedded or offline ontology stream locally-synced deltas into the hooks.
