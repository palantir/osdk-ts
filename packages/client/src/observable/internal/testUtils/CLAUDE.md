# Test Utilities

This directory contains specialized testing utilities for the ObservableClient implementation. These utilities provide standardized patterns for testing reactive observations, mocking clients, and validating data flow.

## Core Utilities (testUtils.ts)

The main `testUtils.ts` file provides essential testing infrastructure:

- **Mock Creation**:
  - `createClientMockHelper()` - Creates client mocks with deferred promise control
  - `createTestLogger()` - Provides a colorized logger for test environments
  - `createDefer()` - Manages test subscriptions with automatic cleanup

- **Observation Testing**:
  - `expectSingleObjectCallAndClear()` - Validates object payload emissions
  - `expectSingleListCallAndClear()` - Validates list payload emissions
  - `expectSingleLinkCallAndClear()` - Validates link payload emissions

- **Mock Observers**:
  - `mockObserver<T>()` - Generic observer mock for any payload type
  - `mockSingleSubCallback()` - Specialized mock for object observations
  - `mockListSubCallback()` - Specialized mock for list observations
  - `mockLinkSubCallback()` - Specialized mock for link observations

- **Payload Matchers**:
  - `objectPayloadContaining()` - Creates matchers for object payloads
  - `listPayloadContaining()` - Creates matchers for list payloads
  - `linkPayloadContaining()` - Creates matchers for link payloads

## Specialized Test Helpers

### observeObject/expectStandardObserveObject.ts

Provides a standardized test flow for object observations:

```typescript
// Example usage
const { payload, mockSub } = await expectStandardObserveObject({
  store,
  objectType: "Person",
  primaryKey: "123",
  options: { /* observation options */ },
  expectedObject: personObject
});
```

This validates:
1. Initial loading state is emitted
2. Loaded state arrives with expected object
3. Proper error propagation

### observeLink/expectStandardObserveLink.ts

Provides a standardized test flow for link observations:

```typescript
// Example usage
const { payload, mockSub } = await expectStandardObserveLink({
  store,
  sourceObject,
  linkName: "employees",
  options: { /* link options */ },
  expectedLinks: [emp1, emp2]
});
```

This validates:
1. Initial loading state with empty results
2. Loaded state with expected linked objects
3. Proper error handling

## Best Practices for Testing

1. **Use Standard Helpers**: Prefer the `expectStandard*` helpers for consistent testing patterns

2. **Subscription Cleanup**: Always use `createDefer()` to register subscriptions for automatic cleanup

3. **State Transitions**: Test both initial loading state and final loaded state

4. **Isolation**: Use fresh mocks and subscriptions for each test to prevent interference

5. **Type Safety**: Leverage the strongly typed nature of the testing utilities

6. **Async Testing**: Use the provided async helpers for testing observable streams

7. **Partial Matching**: Use payload matchers for flexible assertions that focus on important fields

These utilities ensure consistent and reliable testing of the reactive data flow patterns in the ObservableClient system.