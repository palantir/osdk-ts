---
"@osdk/oauth": patch
---

Add proactive token refresh for both public and confidential OAuth clients, and treat tokens as expired 60s before actual expiry to account for clock drift and slow networks.
