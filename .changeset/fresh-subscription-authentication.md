---
"@osdk/client": patch
---

Reconnect object-set subscriptions with the current authentication token after `Default:Unauthorized` errors. Preserve pending and active subscriptions during recovery, coordinate concurrent connection attempts, and stop after three unsuccessful authentication retries.
