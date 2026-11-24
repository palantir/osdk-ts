---
"@osdk/client": patch
---

Allow createScenario and withScenario on scenario and transaction clients. New scenarios use the client’s branch, or main if no branch is set. Both helpers preserve the branch and replace the prior transaction or scenario scope without changing the original client.
