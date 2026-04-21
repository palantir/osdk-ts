---
"@osdk/functions-testing.experimental": patch
---

Attach a `SharedClientContext` to the mock client so Foundry Platform API helpers (e.g. `Users.getCurrent(client)`) don't crash inside `foundryPlatformFetch` on an undefined `baseUrl` before a request is made. Callers mock the HTTP layer themselves (MSW, `vi.spyOn(globalThis, "fetch")`, etc.).
