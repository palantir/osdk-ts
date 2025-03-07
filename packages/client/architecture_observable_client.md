# Architecture of ObservableClient and Internals

## External Contract

The `ObservableClient` provides a simple structure for observing Objects and Lists (and more in the future).

Observing an Object or List provides a subscription to the normalized data representing that object "now". Depending on the options provided, the observation also requests the data (or a page of it), streaming updates, and future incidental updates.

One important goal of the system is that any part of a UI showing a particular object (or something related to it) would always be consistent.

### Example of incidental update

For example, on an empty `Store`, `observeObject(Todo, 5, ...)` would trigger an initial load of the object (caveats). A subscription trigger would happen that informs the observer that the object is loading (and that there is currently no data). Upon the data becoming available, the observer would be called again, now knowing the `lastUpdated`, `data`, and the `status` (loaded) of the object.

Now, even if we are not streaming updates, the initial observer could be informed that an object `isLoading`, while still providing the old `data`. Or the data may instantly be updated without the `isLoading` ever being true again. Scenarios that may cause updates:

- An action being invoked (`applyAction` on `ObservableClient`), along with:
  - the action invocation result informing the system that it changed `Todo:5` (and invalidating it)
  - the action invocation result informing the system that we need to invalidate all `Todo`s
  - the action invocation result informing the system that a link was added or removed to `Todo:5` (and therefor the properties may not be valid any more).
  - an optimistic update being applied along with the action
- A separate call to `observerList` bringing back an updated version of `Todo:5`
- A streaming update to `Todo:5`.
- and in the future more.

## The Store

### Overview

The `Store` is the central data storage and orchestration unit for this system. It is made up of a multiple subsystems that together provide the infrastructure to support the observations.

### `CacheKeys`

Throughout this system, we rely heavily on `WeakMap`s to automatically clean up unneeded data. Internally, the VM is doing its own reference counting and we can leverage that instead of duplicating it multiple times.

In order to do that, we need a memory efficient way to take repeated requests and produce a reusable key that is not a string. Internally we use `@wry/trie` (also used by Apollo GraphQL Client) to efficiently retrieve a `===` object for a series of inputs. In the simple case, it uses a Trie structure to organize an array of data. For an `ObjectCacheKey` for our previous `Todo` with a pk of `5` we would look up in the Trie `"object"`, `"Todo"`, `5`. If there is already an object in the Trie at that location, we return it. If not, we create it.

The Trie also can handle complex objects as keys, which is useful because for a list we look up `"list"`, `"Todo"`, `whereClause`, `orderBy` (those last two are objects!). However, for efficiency reasons, we need those objects to be `===` and not just `deepEqual`. To do that, we need the `WhereClauseCanonicalizer` and the `OrderByCanonicalizer`.

### `WhereClauseCanonicalizer`

The `WhereClauseCanonicalizer` has the important job of both returning the exact same object reference for various `deepEqual` where clauses but also to do the same where the semantic meaning of the where clause is the same. For example, the following two where clauses are "the same" for our purposes:

```ts
// First
{
  $and: [
    { hello: "world" },
    { value: { $gt: 5 } },
  ];
}

// Second
{
  $and: [
    { hello: { $eq: "world" } },
    { value: { $gt: 5 } },
  ];
}
```

In order to do this, we first keep a cache (`WeakMap`) of `WhereClause`s we have seen and the resulting `WhereClause` we returned. Failing that lookup, we first convert the `WhereClause` into its canonical form as best we can. (At the time of me writing this, this component is far from complete!) The more variations we can support, the less memory and bandwidth we will waste.

### `OrderByCanonicalizer`

We do a similar task with orderBy but this easier as orderBy is implicitly ordered. We can simply flatten the object key/values, lookup in a Trie (with weak refs) and use that.

### `BehaviorSubject` from rxjs

For every cacheKey there is a lazily created `BehaviorSubject`. Internally in the store, every time a value associated with a `CacheKey` is updated, it is emitted through that `Subject` so that subscribers can retrieve the value.

While every `observe*` call ends up a down-stream subscriber to one of these `Subject`s, internally there are additional subscribers. For example, `observeList` ends up with a subscriber for the observation on the `ListCacheKey` AND internally a subscriber for every object it has in its list. There does not have to be any `observerObject` calls for there to be subscribers to the `Subject`s associated with `ObjectCacheKey`s.

### `Query` (`ObjectQuery` and `ListQuery`)

For every call to `observeObject` or `observeList`, after canonicalizing into a `CacheKey`, a `ObjectQuery` or `ListQuery` object is created if one does not yet exist. So 2 different observations with the same objects will have just one `Query` object.

These objects have a number of jobs currently:

- providing a call for reloading data after it has been invalidated
- mutating/mapping the underlying data in the `Store` into its final form (via rxjs)
- invaliding and updating itself based on batch store changes
- retaining / releasing cacheKey references (besides self)

### `Layer`s

For the optimistic updates to happen concurrently and still resolve properly, we have a series of layers of mutations that stack. We also have a single layer that represents `truth`. If you roll back all the optimistic layers, the `truth` layer is all that you have left.

Every batch of optimistic writes has an `OptimisticId` and each layer (excluding the truth layer) also has a corresponding `OptimisticId`. However, there may be multiple `Layer`s that have the same `OptimisticId`.

`Layer`s are fairly "dumb". They are simple tree/linked list structure with each node having a set of "writes" saved per `CacheKey`. The `Layer` is agnostic to what is contained in those writes besides that they conform to the `CacheKey` definitions.

The easiest way to think about these is that the top of the stack of `Layer`s represents the sum of the current "perception" and that the bottom of the stack is the current "truth".

### Batch Updates (Including Optimistic)

All writes to the store happen in "batches" and each batch has an `OptimisticId` (or undefined for "truth"). If the top layer does not match that `OptimisticId`, one is added to the top and writes happen there. If the `OptimisticId` is undefined, then the write happens straight to the truth layer.

If we are about to write to `CacheKey<"object", "Todo", 5>`, we first save the existing value from the topLayer. Then after applying the edit, if the value changed, we emit an update to the `Subject` for that `CacheKey`.

So, in a very simplified example, if we have the following writes:

```
|| cacheKey || OptimisticId || value || changed? ||
|------------|---------------|--------|-----------|
| Todo:5     | undefined     | "Hi"   | true      |
| Todo:5     | { id: 1 }     | "Hi"   | false     |
| Todo:5     | { id: 2 }     | "Bye"  | true      |
```

The first write goes straight to the truth layer and emits the value. The second write creates a new layer and sets the value but does not trigger any updates. The third (id: 2) does emit a change.

Additionally, we generally read from the top layer but the read continues through the parent layers if the current layer does not have a value for the given cacheKey.

### removeLayer

We remove layers by OptimisticId, which means we may remove multiple layers in one pass.

First, we need to figure out all the cacheKey/value pairs from those layers (higher layer wins). Then we can actually remove the layer(s) by adjusting the stack. Finally, for each key we saved earlier, we need to know if the (potentially different) top layer has a different value than the one we saved.

Finally, we can use our previously discussed `Subject`s to inform the downstream subscribers about the change. Finally, if the value in the truth layer does not match the current top layer, we mark the update as optimistic before emitting.

Given the above table, we can work through a few scenarios.

Scenario: `write(Todo:5, undefined, "adios")` and `removeLayer({ id: 2 })`. First we are setting the value in the truthLayer, however since the value before the write was "Bye" (`{id: 2}` layer), there will be no updates to the UI. However, after we remove all layers with `{id: 2}` we have to send an update because the topLayer value for `Todo:5` has changed from "Bye" to "Hi". Therefore an optimistic update goes out setting the value to "Hi".

Scenario: Continuing, we also get a `write(Todo:5, undefined, "Hola")` and `removeLayer({ id: 1 })`. Again, the write to the truth layer creates no emitted change as the resulting value of the `topLayer` has not changed. However, the subsequent removal of layers with `{id: 1}` makes the new top layer the same as the truth layer, which is a change in the top layer value. This will result in an update to the `Subject` for `Todo:5` and `isOptimistic` will be false.
