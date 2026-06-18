---
"@osdk/client": patch
---

withScenario / createScenario now ignore an active transaction on the supplied client (logging a console.warn and scoping to the scenario) instead of throwing.
