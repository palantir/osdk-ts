---
"@osdk/react-components": patch
---

Rename the `./primitives` subpath export to `./internal`, and wire up API Extractor (check-api) for the `experimental` entry point so public API changes surface as a committed report diff. The `internal` entry is intentionally not gated by check-api.
