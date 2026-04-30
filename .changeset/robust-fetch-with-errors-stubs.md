---
"@osdk/functions-testing.experimental": minor
---

Fix `StubBuilderFor<T>` so `fetchOneWithErrors` / `fetchPageWithErrors` / `asyncIter` resolve to the correct stub builders instead of falling through to `AggregateStubBuilder`. Allow `Error` as a single-link stub value in `createMockOsdkObject` so link `fetchOne` rejects and `fetchOneWithErrors` returns `{ error }` (previously wrapped the Error in `{ value: ... }`, making `isOk` always true).
