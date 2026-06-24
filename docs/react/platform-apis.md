---
sidebar_position: 7
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
