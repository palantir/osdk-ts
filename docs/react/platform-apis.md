---
sidebar_position: 6
---

# Platform APIs

This guide covers available platform APIs that can used with OSDK React hooks.

## Handling errors with PalantirApiError

All platform-API hooks return errors as plain `Error` instances; when the failure originates from a Foundry API call, the error is a `PalantirApiError` (re-exported from `@osdk/client`). Narrow with `instanceof` to access the structured fields. All fields below are optional — narrow before you use them:

| Field              | Type      | Use                                                 |
| ------------------ | --------- | --------------------------------------------------- |
| `errorName`        | `string?` | Stable machine identifier (e.g. `UserNotFound`)     |
| `errorCode`        | `string?` | HTTP-style code (e.g. `NOT_FOUND`)                  |
| `errorDescription` | `string?` | Human-readable message                              |
| `statusCode`       | `number?` | HTTP status                                         |
| `errorInstanceId`  | `string?` | Server-side correlation ID — include in bug reports |
| `parameters`       | `object?` | Server-supplied context (e.g. `{ userId }`)         |

Switch on `errorName` for branching behavior; show `errorInstanceId` to support engineers when surfacing an opaque failure.

```tsx
import { PalantirApiError } from "@osdk/client";

function describe(error: Error): string {
  if (!(error instanceof PalantirApiError)) {
    return error.message;
  }
  if (error.errorName === "UserNotFound") {
    return "We couldn't find that user.";
  }
  return `${error.errorDescription} (id: ${error.errorInstanceId})`;
}
```

---

## useFoundryUser

Retrieves a specific Foundry user by their user ID.

### Basic Usage

```tsx
import { PalantirApiError } from "@osdk/client";
import { useFoundryUser } from "@osdk/react/platform-apis";

export function UserProfile({ userId }: { userId: string }) {
  const { user, isLoading, error } = useFoundryUser(userId);

  if (error != null) {
    const errorMessage = error instanceof PalantirApiError
      ? error.errorDescription
      : error.message;

    return <div>Failed to load user: {errorMessage}</div>;
  }

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {user && (
        <div>
          <h2>
            {user.givenName} {user.familyName}
          </h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}
```

### Return Values

- `user` - The user object, or undefined if not loaded
- `isLoading` - True while fetching from server
- `error` - Error object if fetch failed
- `refetch` - Function to manually refetch the user data

### Options

- `userId` (required) - The Foundry User ID to fetch
- `enabled` - Enable/disable the query (default: `true`)
- `status` - User status filter (default: `"ACTIVE"`)

---

## useCurrentFoundryUser

Retrieves the currently signed-in Foundry user.

### Basic Usage

```tsx
import { PalantirApiError } from "@osdk/client";
import { useCurrentFoundryUser } from "@osdk/react/platform-apis";

export function CurrentUserBadge() {
  const { currentUser, isLoading, error } = useCurrentFoundryUser();

  if (error != null) {
    const errorMessage = error instanceof PalantirApiError
      ? error.errorDescription
      : error.message;

    return <div>Failed to load current user: {errorMessage}</div>;
  }

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {currentUser && <span>Welcome, {currentUser.givenName}!</span>}
    </div>
  );
}
```

### Return Values

- `currentUser` - The current user object, or undefined if not loaded
- `isLoading` - True while fetching from server
- `error` - Error object if fetch failed
- `refetch` - Function to manually refetch the current user data

### Options

- `enabled` - Enable/disable the query (default: `true`)

---

## useFoundryUsersList

Lists all Foundry users with pagination support.

### Basic Usage

```tsx
import { PalantirApiError } from "@osdk/client";
import { useFoundryUsersList } from "@osdk/react/platform-apis";

export function UsersList() {
  const { users, isLoading, error } = useFoundryUsersList();

  if (error != null) {
    const errorMessage = error instanceof PalantirApiError
      ? error.errorDescription
      : error.message;

    return <div>Failed to load user list: {errorMessage}</div>;
  }

  return (
    <div>
      {isLoading && <span>Loading users...</span>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### Return Values

- `users` - Array of users, or undefined if not loaded
- `nextPageToken` - Page token for the next page (undefined if no more pages)
- `isLoading` - True while fetching from server
- `error` - Error object if fetch failed
- `refetch` - Function to manually refetch the users list

### Options

- `enabled` - Enable/disable the query (default: `true`)
- `include` - User status filter (default: `"ACTIVE"`)
- `pageSize` - Preferred page size (default: `1000`)
- `pageToken` - Page token for fetching subsequent pages (omit for first page)

### Pagination

```tsx
import { PalantirApiError } from "@osdk/client";
import { useFoundryUsersList } from "@osdk/react/platform-apis";
import { useState } from "react";

export function UsersList() {
  const [pageToken, setPageToken] = useState<string | undefined>(undefined);

  const { users, nextPageToken, error, isLoading } = useFoundryUsersList({
    pageSize: 10,
    pageToken,
  });

  if (error != null) {
    const errorMessage = error instanceof PalantirApiError
      ? error.errorDescription
      : error.message;

    return <div>Failed to load users: {errorMessage}</div>;
  }

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {users && (
        <>
          <ul>
            {users.map((user) => <li key={user.id}>{user.username}</li>)}
          </ul>

          {nextPageToken && (
            <button
              onClick={() => setPageToken(nextPageToken)}
              disabled={isLoading}
            >
              Next page
            </button>
          )}
        </>
      )}
    </div>
  );
}
```

---

## useMarkings and useMarkingCategories

`useMarkings` returns markings in `markings`; `useMarkingCategories` returns
categories in `categories`. Both fetch the first page by default and expose the
same pagination controls as `useOsdkObjects` and `useObjectSet`.

### Options

- `enabled`: Enable automatic fetching (default: `true`).
- `pageSize`: Preferred items per page (default and maximum: `100`).
- `autoFetchMore`: `true` loads all pages; a number loads until at least that many
  items are available or no pages remain. `false` or `undefined` (default) loads
  one page and leaves subsequent pages to `fetchMore()`.

### Manual pagination

```tsx
import { useMarkings } from "@osdk/react/platform-apis";

export function MarkingsList() {
  const { markings, isLoading, error, fetchMore, hasMore, refetch } =
    useMarkings({
      pageSize: 25,
    });

  return (
    <div>
      {isLoading && <span>Loading markings...</span>}
      {error && <button onClick={refetch}>Retry from the first page</button>}
      <ul>
        {markings?.map((marking) => <li key={marking.id}>{marking.name}</li>)}
      </ul>
      {hasMore && (
        <button
          disabled={isLoading}
          onClick={() => void fetchMore?.()}
        >
          Load more
        </button>
      )}
    </div>
  );
}
```

`fetchMore()` appends the next page in API response order. Concurrent calls on the
same hook instance share the pending request. `fetchMore` becomes undefined when
there are no more pages; `hasMore` indicates that the server returned a continuation
token. Check loading and errors as well as `hasMore` before treating data as complete.

### Automatic pagination

```tsx
const { markings, isLoading, error, hasMore } = useMarkings({
  autoFetchMore: true,
});
const { categories } = useMarkingCategories({ autoFetchMore: 200 });
```

Automatic pagination follows continuation tokens even after short or empty pages.
A numeric target is a minimum, so the last page can take the list above that count.
`isLoading` stays true until the target is reached, the catalogue is exhausted, or
an error occurs. Loaded pages remain available during loading and errors. A failed
page sets `error` and ends loading; it does not mark the catalogue complete.
`fetchMore()` can retry that page. Repeated tokens and cycles report an error.

`refetch()` clears the list and error and starts again from the first page, using
the current automatic-fetch setting. Changing the client, `pageSize`, or
`autoFetchMore` also starts a new traversal. Superseded requests cannot replace the
current result. Disabling the hook stops automatic continuation.

The stock CBAC picker and banner popover use `autoFetchMore: true` and wait for
complete catalogues before displaying their groups. Direct hook consumers can
choose manual or automatic pagination.

Large catalogues require multiple sequential requests per hook. Separate mounts
fetch independently; shared in-flight requests and a catalogue cache remain
separate work.
