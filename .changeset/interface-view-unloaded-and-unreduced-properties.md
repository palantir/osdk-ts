---
"@osdk/client": patch
---

Stop interface views from exposing struct properties as objects of undefined fields when their backing properties were not loaded, and stop casting a directly loaded object to an interface from throwing on reduced implementations over struct arrays
