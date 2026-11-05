---
"@osdk/client": patch
---

Distinguish observable refreshes from pagination requests. Forced refreshes replace active requests without allowing late responses to overwrite current results, while shared request handling preserves loading state and coordinates optimistic updates.
