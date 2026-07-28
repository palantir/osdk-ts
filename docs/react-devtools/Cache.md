<!-- cspell:ignore revalidations -->

# Cache

Cache exposes the normalized observable cache and a timeline of recent cache operations.

![Cache tab](/img/react-devtools/cache.png)

## Cache inspector

Search matches cache keys, object types, and entry types. The summary reports the number of entries and estimated cache size.

Each entry header shows its status, age, and estimated size. Expand an entry to inspect its cache key, current value, and query details. Refresh reloads the current snapshot.

The refresh control on an object entry invalidates that object. On list, link, and object-set entries, it invalidates the object type. Clear cache invalidates the entire cache after confirmation and forces active queries to refetch.

## Cache history

Cache history lists recent cache hits and misses in time order. Each operation includes the query or object signature, timestamp, and response time when the monitor recorded one.

Use the history to confirm that a repeated read came from cache or see when a read fell through to the network.

## Related metrics

[Overview](./Overview.md) summarizes the same operation stream as Requests saved, Cache hit rate, and Avg response time. Select View in Cache from Overview to move from the aggregate metric to the entries and operations behind it.
