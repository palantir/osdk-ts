---
"@osdk/unit-testing": minor
---

Export `MockClient`, `StubClient`, and `MockOsdkObjectOptions` types from the `@osdk/unit-testing/experimental` entry point so callers can annotate the value returned by `createMockClient` directly instead of `ReturnType<typeof createMockClient>`.
