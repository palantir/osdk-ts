# Test Utilities Reference

Testing utilities for ObservableClient reactive observations, mocking, and data flow validation.

## Core Utilities (testUtils.ts)

- `createClientMockHelper()` - Client mocks with deferred promise control
- `createTestLogger()` - Colorized logger for test environments
- `createDefer()` - Test subscription management with automatic cleanup
- `expectSingleObjectCallAndClear()` - Validates object payload emissions
- `expectSingleListCallAndClear()` - Validates list payload emissions
- `expectSingleLinkCallAndClear()` - Validates link payload emissions
- `mockObserver<T>()` - Generic observer mock for any payload type
- `mockSingleSubCallback()` - Mock for object observations
- `mockListSubCallback()` - Mock for list observations
- `mockLinkSubCallback()` - Mock for link observations
- `objectPayloadContaining()` - Matcher for object payloads
- `listPayloadContaining()` - Matcher for list payloads
- `linkPayloadContaining()` - Matcher for link payloads

## Specialized Helpers

- `expectStandardObserveObject()` - Standard object observation test flow
- `expectStandardObserveLink()` - Standard link observation test flow