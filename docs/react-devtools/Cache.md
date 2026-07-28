<!-- cspell:ignore revalidations -->

# Cache

Cache exposes the normalized observable cache and a timeline of recent cache operations.

![Cache tab](/img/react-devtools/cache.png)

## Cache inspector

Search matches cache keys, object types, and entry types. The summary reports the number of entries and estimated cache size.

Expand an entry to inspect its cache key, current value, query parameters, and metadata. Refresh reloads the current snapshot. The refresh control on an entry invalidates that entry, while Clear cache invalidates the entire cache after confirmation and forces active queries to refetch.

## Cache history

Cache history lists recent cache hits, misses, revalidations, and deduplicated requests in time order. Each operation includes the query or object signature, timestamp, and response time when the monitor recorded one.

Use the history to confirm that a repeated read came from cache, spot a revalidation immediately after a fetch, or verify that multiple subscribers deduplicated onto one request.

## Related metrics

[Overview](./Overview.md) summarizes the same operation stream as Requests saved, Cache hit rate, and Avg response time. Select View in Cache from Overview to move from the aggregate metric to the entries and operations behind it.
