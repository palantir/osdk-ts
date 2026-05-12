---
"@osdk/client": minor
---

Add `@osdk/client/experimental` entry point exposing `createClientWithTransaction` and a new `createClientFromWriteableClient` that clones a writeable client's base URL, ontology, token provider, and transaction id while discarding its fetch implementation.
