# @osdk/unit-testing

## Rules

- Whenever you add a new feature to this package, also add a basic end-to-end example under `src/example-function-tests/<featureName>/`:
  - `<featureName>.ts`: a small, realistic function that uses the feature the way a consumer would (typed against `Client` / `WriteableClient`, not the mock types)
  - `<featureName>.test.ts`: a test that drives that function with the mock APIs from this package
- These examples double as documentation for consumers, so keep them minimal and readable. Unit tests for edge cases belong in `src/mock/__tests__/`
