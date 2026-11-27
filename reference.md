# API reference

Source: https://palantir.github.io/osdk-ts/reference

> Signatures, options, and return types for the public APIs of @osdk/react, @osdk/client, @osdk/oauth, and @osdk/aip-core.

Look up the exact signature, options, and return type of each public API. Most option and return tables are generated from the TypeScript source and its JSDoc; a page says so when a table is written by hand. For walkthroughs, follow the "See also" links on each page.

## `@osdk/react`

| API | Description |
| --- | --- |
| [`OsdkProvider`](https://palantir.github.io/osdk-ts/reference/react/osdk-provider.md) | Shares a client and its cache with the hooks below it. |
| [`useOsdkObjects`](https://palantir.github.io/osdk-ts/reference/react/use-osdk-objects.md) | Loads a list of objects of one type or interface. |
| [`useOsdkObject`](https://palantir.github.io/osdk-ts/reference/react/use-osdk-object.md) | Loads one object by primary key, or observes an instance. |
| [`useLinks`](https://palantir.github.io/osdk-ts/reference/react/use-links.md) | Loads the objects linked from one or more objects. |
| [`useObjectSet`](https://palantir.github.io/osdk-ts/reference/react/use-object-set.md) | Loads a list from an `ObjectSet`, with set operations and pivots. |
| [`useStableObjectSet`](https://palantir.github.io/osdk-ts/reference/react/use-stable-object-set.md) | Keeps an `ObjectSet` referentially stable across renders. |
| [`useOsdkAggregation`](https://palantir.github.io/osdk-ts/reference/react/use-osdk-aggregation.md) | Runs a server-side aggregation. |
| [`useOsdkFunction`](https://palantir.github.io/osdk-ts/reference/react/use-osdk-function.md) | Executes a function and caches the result. |
| [`useOsdkFunctions`](https://palantir.github.io/osdk-ts/reference/react/use-osdk-functions.md) | Executes several functions from one hook. |
| [`useOsdkAction`](https://palantir.github.io/osdk-ts/reference/react/use-osdk-action.md) | Applies or validates an action. |
| [`useDebouncedCallback`](https://palantir.github.io/osdk-ts/reference/react/use-debounced-callback.md) | Debounces a callback, with cancel and flush. |
| [`useOsdkMetadata`](https://palantir.github.io/osdk-ts/reference/react/use-osdk-metadata.md) | Fetches metadata for an object type, interface, or action. |
| [`useOsdkClient`](https://palantir.github.io/osdk-ts/reference/react/use-osdk-client.md) | Returns the `Client` from `OsdkProvider`. |
| [`useObservableClient`](https://palantir.github.io/osdk-ts/reference/react/use-observable-client.md) | Returns the `ObservableClient` that backs the cache. |
| [`@osdk/react/testing`](https://palantir.github.io/osdk-ts/reference/react/testing.md) | `TestOsdkProvider` and `fakeObservableClient` for unit tests. |

## `@osdk/react/platform-apis`

| API | Description |
| --- | --- |
| [`useCurrentFoundryUser`](https://palantir.github.io/osdk-ts/reference/react/platform-apis.md#usecurrentfoundryuser) | Gets the signed-in user. |
| [`useFoundryUser`](https://palantir.github.io/osdk-ts/reference/react/platform-apis.md#usefoundryuser) | Gets a user by ID. |
| [`useFoundryUsersList`](https://palantir.github.io/osdk-ts/reference/react/platform-apis.md#usefoundryuserslist) | Lists users, one page at a time. |
| [`useMarkings`](https://palantir.github.io/osdk-ts/reference/react/platform-apis.md#usemarkings) | Lists markings. |
| [`useMarkingCategories`](https://palantir.github.io/osdk-ts/reference/react/platform-apis.md#usemarkingcategories) | Lists marking categories. |
| [`useUserViewMarkings`](https://palantir.github.io/osdk-ts/reference/react/platform-apis.md#useuserviewmarkings) | Gets the markings a user can view. |
| [`useCbacBanner`](https://palantir.github.io/osdk-ts/reference/react/platform-apis.md#usecbacbanner) | Gets the classification banner for marking IDs. |
| [`useCbacMarkingRestrictions`](https://palantir.github.io/osdk-ts/reference/react/platform-apis.md#usecbacmarkingrestrictions) | Gets implied, disallowed, and required markings. |

## `@osdk/client`

| API | Description |
| --- | --- |
| [`createClient`](https://palantir.github.io/osdk-ts/reference/client/create-client.md) | Creates the client for one Ontology. |
| [`createPlatformClient`](https://palantir.github.io/osdk-ts/reference/client/create-platform-client.md) | Creates a client for platform APIs only. |
| [`ObjectSet`](https://palantir.github.io/osdk-ts/reference/client/object-set.md) | Filters, set operations, pivots, aggregation, paging, and subscriptions. |
| [`Osdk.Instance`](https://palantir.github.io/osdk-ts/reference/client/osdk-instance.md) | The type of a loaded object and its `$` fields. |
| [`WhereClause`](https://palantir.github.io/osdk-ts/reference/client/where-clause.md) | Filter operators by property type. |
| [`PalantirApiError`, `ActionValidationError`](https://palantir.github.io/osdk-ts/reference/client/errors.md) | Errors thrown by the client. |

## `@osdk/oauth`

| API | Description |
| --- | --- |
| [`createPublicOauthClient`](https://palantir.github.io/osdk-ts/reference/oauth/create-public-oauth-client.md) | Browser sign-in with the authorization code flow and PKCE. |
| [`createConfidentialOauthClient`](https://palantir.github.io/osdk-ts/reference/oauth/create-confidential-oauth-client.md) | Server-side tokens from a client ID and secret. |
| [`createAuthlessClient`](https://palantir.github.io/osdk-ts/reference/oauth/create-authless-client.md) | A token provider for public resources. |

## `@osdk/aip-core`

| API | Description |
| --- | --- |
| [`foundryModel`](https://palantir.github.io/osdk-ts/reference/aip-core/foundry-model.md) | Creates a model handle for the Language Model Service. |
| [`generateText`](https://palantir.github.io/osdk-ts/reference/aip-core/generate-text.md) | Generates a complete response. |
| [`streamText`](https://palantir.github.io/osdk-ts/reference/aip-core/stream-text.md) | Streams a response as it is generated. |
| [`LmsChatTransport`](https://palantir.github.io/osdk-ts/reference/aip-core/lms-chat-transport.md) | A `ChatTransport` for chat UIs. |
| [`generateMessageId`, `getUIMessageText`](https://palantir.github.io/osdk-ts/reference/aip-core/utilities.md) | Helpers for `UIMessage` conversations. |