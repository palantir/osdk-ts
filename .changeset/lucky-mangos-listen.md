---
"@osdk/unit-testing": minor
"@osdk/integration-testing": minor
---

Support dynamic query mocks: `whenQuery(query, (params) => result)` registers an implementation that computes the result from the caller's params, and may be async. `IntegrationClient.whenQuery` inherits the new overload.
