---
"@osdk/client": patch
---

Fire `onSuccessfulSubscription` only on the initial subscribe response, not on every heartbeat response, and ignore responses for subscriptions cancelled before the response arrived
