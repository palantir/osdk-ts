---
"@osdk/client": patch
---

Allow createScenario and withScenario on scenario and transaction clients. New scenarios always start from committed main. Both helpers replace the prior scope without changing the original client.
