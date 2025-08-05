# Create Common Streaming Updates Framework

## Objective
Extract the WebSocket/streaming updates logic from ListQuery into a reusable framework in BaseCollectionQuery that can be used by SpecificLinkQuery and other collection types.

## Current State
Currently, ListQuery has extensive WebSocket subscription logic (lines 589-737) that includes:
- Registering for updates
- Handling connection success/errors
- Processing object changes (added, updated, removed)
- Error handling

SpecificLinkQuery lacks this functionality, but could benefit from it to provide real-time updates.

## Implementation Plan

1. Create a common streaming updates framework in BaseCollectionQuery:

```typescript
/**
 * Base class for streaming update handlers
 */
protected abstract class StreamingUpdateHandler<T extends Osdk.Instance<any>> {
  /**
   * Process an object that was added or updated
   */
  abstract onObjectAddedOrUpdated(object: T, batch: BatchContext): void;
  
  /**
   * Process an object that was removed
   */
  abstract onObjectRemoved(objectType: string, primaryKey: string, batch: BatchContext): void;
  
  /**
   * Handle subscription errors
   */
  onError(errors: { subscriptionClosed: boolean; error: any }): void {
    if (this.logger) {
      this.logger.error("Subscription errors", errors);
    }
  }
  
  /**
   * Handle successful subscription
   */
  onSuccessfulSubscription(): void {
    this.logDebug("onSuccessfulSubscription", "");
  }
  
  /**
   * Handle out of date notification
   */
  onOutOfDate(): void {
    this.logDebug("onOutOfDate", "");
  }
}

/**
 * Register for streaming updates with the given subscription
 */
protected registerStreamingUpdates(
  handler: StreamingUpdateHandler<any>,
  subscription: Subscription,
  streamingSource: {
    subscribe(callbacks: {
      onChange: (update: any) => void;
      onError: (errors: any) => void;
      onOutOfDate: () => void;
      onSuccessfulSubscription: () => void;
    }): { unsubscribe: () => void };
  }
): void {
  const websocketSubscription = streamingSource.subscribe({
    onChange: (update) => {
      const { object, state } = update;
      this.store.batch({}, (batch) => {
        if (state === "ADDED_OR_UPDATED") {
          handler.onObjectAddedOrUpdated(object, batch);
        } else if (state === "REMOVED") {
          handler.onObjectRemoved(
            object.$objectType,
            object.$primaryKey,
            batch
          );
        }
      });
    },
    onError: handler.onError.bind(handler),
    onOutOfDate: handler.onOutOfDate.bind(handler),
    onSuccessfulSubscription: handler.onSuccessfulSubscription.bind(handler),
  });
  
  // Clean up subscription when parent subscription is unsubscribed
  subscription.add(websocketSubscription.unsubscribe);
}
```

2. Implement the handler for ListQuery:

```typescript
private class ListQueryStreamingHandler extends StreamingUpdateHandler<Osdk.Instance<any>> {
  onObjectAddedOrUpdated(object: Osdk.Instance<any>, batch: BatchContext): void {
    // Existing ListQuery implementation
  }
  
  onObjectRemoved(objectType: string, primaryKey: string, batch: BatchContext): void {
    // Existing ListQuery implementation
  }
}
```

3. Create a handler for SpecificLinkQuery:

```typescript
private class LinkQueryStreamingHandler extends StreamingUpdateHandler<Osdk.Instance<any>> {
  onObjectAddedOrUpdated(object: Osdk.Instance<any>, batch: BatchContext): void {
    // Implementation for links
  }
  
  onObjectRemoved(objectType: string, primaryKey: string, batch: BatchContext): void {
    // Implementation for links
  }
}
```

4. Update the `registerStreamUpdates` method in both classes to use the new framework.

## Expected Benefits
- SpecificLinkQuery gains real-time update capability
- Reduced code duplication
- Consistent streaming update behavior across collection types
- Easier to add streaming updates to new collection types in the future

## Acceptance Criteria
- Common streaming updates framework in BaseCollectionQuery
- ListQuery uses the new framework with identical behavior
- SpecificLinkQuery uses the new framework to gain streaming update capability
- All tests continue to pass
- WebSocket subscriptions are properly cleaned up