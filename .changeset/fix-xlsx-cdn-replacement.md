---
"@osdk/react-components": patch
---

Replace `xlsx` dependency with `xlsx-republish`, a community republish of the latest SheetJS CDN release (`0.20.3`) back to npm. The maintainer-published `xlsx` on npm is pinned at `0.18.5` (which has a known prototype-pollution CVE) and SheetJS now distributes fixed releases only via their own CDN, so npm consumers cannot get a patched version through the registry.
