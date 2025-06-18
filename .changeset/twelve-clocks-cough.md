---
"@osdk/shared.test": patch
"@osdk/client": patch
---

Fix bug where we sent over longitude/latitude for geohash properties, when the backend actually expects latitude/longitude.
