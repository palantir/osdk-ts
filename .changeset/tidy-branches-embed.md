---
"@osdk/client": minor
---

Read the `foundryBranchRid` query parameter from `window.location` when creating a client, allowing iframe hosts to select a Foundry branch at runtime. Explicit client branch options take precedence over the URL, which takes precedence over the branch meta tag injected by build tooling. Missing or blank query values fall back to the meta tag; an explicit `null` continues to select the default branch.
