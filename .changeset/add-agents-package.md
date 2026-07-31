---
"@osdk/agents": patch
---

Add the `@osdk/agents` package, exporting `AgentConfig`: the `export const config` an agent declares alongside itself. It extends `FunctionConfig` and adds `locator`, which is where the agent definition lives in Compass (a path on the first publish, the rid it created on every publish after).
