# Links Implementation

Specialized implementation for observing object relationships (links) in the ObservableClient.

## Link-Specific Components

• **SpecificLinkCacheKey.ts**: Link cache keys with structure `{sourceType}:{sourcePk}:{linkName}:{whereClause}:{orderByClause}`

• **SpecificLinkQuery.ts**: Extends `BaseCollectionQuery` for link-specific behaviors:
  - Fetches linked objects via pivot queries
  - Manages pagination for linked collections
  - Supports optimistic updates for relationships

## Link Storage & Resolution

• Links stored as arrays of object cache keys (not duplicated object data)
• Reactive resolution: retrieves object keys → resolves to current object values → combines into observable stream
• Updates automatically when any linked object changes

## Link-Specific Features

• **Indirect Dependencies**: Link observations create dependencies on all linked objects
• **Reference Consistency**: Same object appears identically across multiple relationships
• **Pivot Query Support**: Handles complex relationship traversal efficiently

## Testing

• Use `expectStandardObserveLink` utility for validating link observation behavior