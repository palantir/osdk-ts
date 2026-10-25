---
"@osdk/client": patch
---

Observable list queries now refetch when their websocket subscription reports it is out of date, instead of only logging.
