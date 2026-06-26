---
"@osdk/react-components": patch
---

Lazy-load the CBAC banner in ObjectTable marking cells so consumers no longer pull the CBAC picker (and the optional `@osdk/foundry.admin` peer it reaches) into their main bundle unless a CBAC/MANDATORY marking column actually renders. Falls back to the raw marking ids if the banner chunk fails to load.
