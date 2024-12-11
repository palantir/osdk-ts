---
"@osdk/client": minor
---

OSDK Client no longer uses javascript proxies for its objects. This results in a 13% increase in construction time but at 1kb per object reduction in memory
