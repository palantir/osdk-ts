---
"@osdk/oauth": patch
---

Add proactive token refresh for both public and confidential OAuth clients, and treat tokens as stale 5s before expiry to prevent 401s from race conditions.
