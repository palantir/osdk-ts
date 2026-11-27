# @osdk/react/platform-apis

Source: https://palantir.github.io/osdk-ts/reference/react/platform-apis

> Hooks for Foundry users, markings, and CBAC banners and restrictions, built on @osdk/foundry.admin.

These hooks call Foundry platform APIs with the client from `OsdkProvider`. Install the optional peer dependencies first:

```npm
npm install @osdk/foundry.admin @osdk/foundry.core
```

All hooks share these behaviors:

- Each hook instance fetches on mount and keeps its result in component state. Results are not shared through the OSDK cache, so two components that call the same hook make two requests.
- `isLoading` is `true` while enabled and no successful response has arrived. If the request fails, `isLoading` stays `true` alongside `error`, so check `error` first. When `enabled` is `false`, the hook does not fetch and `isLoading` is `false`.
- `refetch()` reruns the request. The data field is `undefined` until the new response arrives.
- `error` holds the request error, if any.

## useCurrentFoundryUser

```ts
function useCurrentFoundryUser(
  options?: UseCurrentFoundryUserOptions,
): UseCurrentFoundryUserResult;
```

Gets the signed-in user.

### UseCurrentFoundryUserOptions

| Prop       | Type      | Description                                                                                                                                                                                                                                                                                        |
| ---------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled?` | `boolean` | Enable or disable the query. When `false`, the query will not automatically execute. This is useful for: - Lazy/on-demand queries that should wait for user interaction - Dependent queries that need data from another query first - Conditional queries based on component state Default: `true` |

Returns `{ currentUser, isLoading, error, refetch }`, where `currentUser` is a `User` from `@osdk/foundry.admin`.

## useFoundryUser

```ts
function useFoundryUser(
  userId: string,
  options?: UseFoundryUserOptions,
): UseFoundryUserResult;
```

Gets one user by ID.

### UseFoundryUserOptions

| Prop       | Type         | Description                                                                                                                                                                                                                                                                                        |
| ---------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled?` | `boolean`    | Enable or disable the query. When `false`, the query will not automatically execute. This is useful for: - Lazy/on-demand queries that should wait for user interaction - Dependent queries that need data from another query first - Conditional queries based on component state Default: `true` |
| `status?`  | `UserStatus` | The status filter applied when fetching the user. Default: `"ACTIVE"`                                                                                                                                                                                                                              |

Returns `{ user, isLoading, error, refetch }`, where `user` is a `User`.

## useFoundryUsersList

```ts
function useFoundryUsersList(
  options?: UseFoundryUsersListOptions,
): UseFoundryUsersListResult;
```

Lists users one page at a time. A page can hold more or fewer users than `pageSize`.

### UseFoundryUsersListOptions

| Prop         | Type         | Description                                                                                                                                                                                                                                                                                        |
| ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled?`   | `boolean`    | Enable or disable the query. When `false`, the query will not automatically execute. This is useful for: - Lazy/on-demand queries that should wait for user interaction - Dependent queries that need data from another query first - Conditional queries based on component state Default: `true` |
| `include?`   | `UserStatus` | The default status of the users returned in the list. Default: `"ACTIVE"`                                                                                                                                                                                                                          |
| `pageSize?`  | `number`     | The preferred page size for the list. Default: `1000`                                                                                                                                                                                                                                              |
| `pageToken?` | `string`     | The page token indicates where to start paging. This should be omitted from the first page's request. To fetch the next page, clients should take the value from the nextPageToken field of the previous response and use it to populate the pageToken field of the next request.                  |

Returns `{ users, nextPageToken, isLoading, error, refetch }`. Pass `nextPageToken` as `pageToken` to load the next page; it is `undefined` on the last page.

## useMarkings

```ts
function useMarkings(options?: UseMarkingsOptions): UseMarkingsResult;
```

Lists markings.

### UseMarkingsOptions

| Prop              | Type          | Description                                                                                                                                                                                                                                                                                        |
| ----------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled?`        | `boolean`     | Enable or disable the query. When `false`, the query will not automatically execute. This is useful for: - Lazy/on-demand queries that should wait for user interaction - Dependent queries that need data from another query first - Conditional queries based on component state Default: `true` |
| `includeDeleted?` | `boolean`     | Whether to include deleted markings in the results. Default: `true`                                                                                                                                                                                                                                |
| `markingType?`    | `MarkingType` | Filter markings by type. When omitted, returns all marking types. Default: `undefined`                                                                                                                                                                                                             |

Returns `{ markings, isLoading, error, refetch }`, where `markings` is a `Marking[]`.

## useMarkingCategories

```ts
function useMarkingCategories(
  options?: UseMarkingCategoriesOptions,
): UseMarkingCategoriesResult;
```

Lists marking categories.

### UseMarkingCategoriesOptions

| Prop              | Type          | Description                                                                                                                                                                                                                                                                                        |
| ----------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled?`        | `boolean`     | Enable or disable the query. When `false`, the query will not automatically execute. This is useful for: - Lazy/on-demand queries that should wait for user interaction - Dependent queries that need data from another query first - Conditional queries based on component state Default: `true` |
| `includeDeleted?` | `boolean`     | Whether to include deleted marking categories in the results. Default: `true`                                                                                                                                                                                                                      |
| `markingType?`    | `MarkingType` | Filter marking categories by type. When omitted, returns all marking types. Default: `undefined`                                                                                                                                                                                                   |

Returns `{ categories, isLoading, error, refetch }`, where `categories` is a `MarkingCategory[]`.

## useUserViewMarkings

```ts
function useUserViewMarkings(
  options?: UseUserViewMarkingsOptions,
): UseUserViewMarkingsResult;
```

Gets the IDs of the markings a user can view. Without `userId`, the hook first looks up the current user, then fetches their markings.

### UseUserViewMarkingsOptions

| Prop       | Type      | Description                                                                                                                                                                                                                                                                                        |
| ---------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId?`  | `string`  | The user ID to fetch view markings for. When omitted, fetches markings for the current user.                                                                                                                                                                                                       |
| `enabled?` | `boolean` | Enable or disable the query. When `false`, the query will not automatically execute. This is useful for: - Lazy/on-demand queries that should wait for user interaction - Dependent queries that need data from another query first - Conditional queries based on component state Default: `true` |

Returns `{ markingIds, isLoading, error, refetch }`, where `markingIds` is a `string[]`.

## useCbacBanner

```ts
function useCbacBanner(options: UseCbacBannerOptions): UseCbacBannerResult;
```

Gets the classification banner for a set of marking IDs. The hook does not fetch while `markingIds` is empty.

### UseCbacBannerOptions

| Prop         | Type       | Description                                                                                                                                                                                                                                                                                        |
| ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `markingIds` | `string[]` |                                                                                                                                                                                                                                                                                                    |
| `enabled?`   | `boolean`  | Enable or disable the query. When `false`, the query will not automatically execute. This is useful for: - Lazy/on-demand queries that should wait for user interaction - Dependent queries that need data from another query first - Conditional queries based on component state Default: `true` |

Returns `{ banner, isLoading, error, refetch }`, where `banner` is:

### CbacBannerData

| Prop                   | Type       | Description |
| ---------------------- | ---------- | ----------- |
| `classificationString` | `string`   |             |
| `textColor`            | `string`   |             |
| `backgroundColors`     | `string[]` |             |
| `markingIds`           | `string[]` |             |

## useCbacMarkingRestrictions

```ts
function useCbacMarkingRestrictions(
  options: UseCbacMarkingRestrictionsOptions,
): UseCbacMarkingRestrictionsResult;
```

Gets the markings that a set of marking IDs implies, disallows, and requires, and whether the current user satisfies them. The hook does not fetch while `markingIds` is empty. It calls a preview endpoint.

### UseCbacMarkingRestrictionsOptions

| Prop         | Type       | Description                                                                                                                                                                                                                                                                                        |
| ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `markingIds` | `string[]` |                                                                                                                                                                                                                                                                                                    |
| `enabled?`   | `boolean`  | Enable or disable the query. When `false`, the query will not automatically execute. This is useful for: - Lazy/on-demand queries that should wait for user interaction - Dependent queries that need data from another query first - Conditional queries based on component state Default: `true` |

Returns `{ restrictions, isLoading, error, refetch }`, where `restrictions` is:

### CbacMarkingRestrictionsData

| Prop                    | Type         | Description |
| ----------------------- | ------------ | ----------- |
| `disallowedMarkings`    | `string[]`   |             |
| `impliedMarkings`       | `string[]`   |             |
| `requiredMarkings`      | `string[][]` |             |
| `userSatisfiesMarkings` | `boolean`    |             |
| `isValid`               | `boolean`    |             |

## Example

```tsx title="src/CurrentUserBadge.tsx"
import { useCurrentFoundryUser } from "@osdk/react/platform-apis";

export function CurrentUserBadge() {
  const { currentUser, isLoading, error } = useCurrentFoundryUser();

  return (
    <span aria-busy={isLoading}>
      {error ? "Unknown user" : (currentUser?.givenName ?? currentUser?.username)}
    </span>
  );
}
```

## See also

- [Users and markings](https://palantir.github.io/osdk-ts/react/platform-apis.md)