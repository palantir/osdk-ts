# createPublicOauthClient

Source: https://palantir.github.io/osdk-ts/reference/oauth/create-public-oauth-client

> Create a browser token provider that signs users in with the OAuth authorization code flow and PKCE.

```ts
import { createPublicOauthClient } from "@osdk/oauth";

function createPublicOauthClient(
  clientId: string,
  url: string,
  redirectUrl: string,
  options?: PublicOauthClientOptions,
): PublicOauthClient;
```

Returns a function you pass as the `tokenProvider` of `createClient`. The first call without a stored token redirects the browser to Foundry to sign in. After the redirect back to `redirectUrl`, the client exchanges the code, stores the refresh token per `tokenStorage`, and refreshes the access token one minute before it expires.

An older overload takes `useHistory`, `loginPage`, `postLoginPage`, `scopes`, `fetchFn`, and `ctxPath` as positional arguments. Prefer `options`, which also accepts `refreshTokenMarker`, `tokenStorage`, and `logger`.

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `clientId` | `string` | The client ID of your Developer Console application. |
| `url` | `string` | The base URL of your Foundry stack. |
| `redirectUrl` | `string` | The redirect URL registered on the application. It must be a route of your app. |
| `options` | `PublicOauthClientOptions` | See below. |

## Options

### PublicOauthClientOptions

| Prop                  | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `realmId?`            | `string`                                                                 | Realm of the authentication provider to use when the user needs to log in, sent as the `_realm` authorize parameter. Users who already have a Foundry session keep that session's identity. Takes precedence over the domain's default authentication provider. If it does not match an enabled provider, Foundry shows the provider picker. To ignore stored refresh tokens when `realmId` changes, also pass it as `refreshTokenMarker`.                                                                           |
| `useHistory?`         | `boolean`                                                                | If true, uses `history.replaceState()`, otherwise uses `window.location.assign()` (defaults to true)                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `loginPage?`          | `string`                                                                 | Custom landing page URL prior to logging in                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `postLoginPage?`      | `string`                                                                 | URL to return to after completed authentication cycle (defaults to `window.location.toString()`)                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `scopes?`             | `string[]`                                                               | OAuth scopes to request. Defaults to `["api:read-data", "api:write-data", "api:use-ontologies-read", "api:use-ontologies-write"]`.                                                                                                                                                                                                                                                                                                                                                                                   |
| `fetchFn?`            | `((input: RequestInfo \| URL, init?: RequestInit) => Promise<Response>)` | Custom fetch function to use for requests (defaults to `globalThis.fetch`)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `ctxPath?`            | `string`                                                                 | Context path for the authorization server (defaults to "multipass")                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `refreshTokenMarker?` | `string`                                                                 | Value stored with the refresh token. A stored refresh token is only reused when its marker matches this value, so changing it (for example when the SDK version or `realmId` changes) forces a new authorization.                                                                                                                                                                                                                                                                                                    |
| `tokenStorage?`       | `TokenStorageType`                                                       | Controls how refresh tokens are stored. Affects security vs. convenience tradeoff. - `'localStorage'` (default): Tokens persist across browser sessions. Best UX but vulnerable on shared devices. - `'sessionStorage'`: Tokens cleared when browser/tab closes. Recommended for shared devices. Users re-authenticate each browser session. - `'none'`: Tokens never stored. Users re-authenticate on every page load. Most secure but worst UX. Does not request `offline_access` scope. Default: `'localStorage'` |
| `logger?`             | `OauthLogger`                                                            | Optional logger for warning messages. If not provided, warnings are silently dropped. Structurally compatible with `@osdk/api`'s `Logger`.                                                                                                                                                                                                                                                                                                                                                                           |

When `scopes` is omitted, the client requests `api:read-data`, `api:write-data`, `api:use-ontologies-read`, and `api:use-ontologies-write`. Unless `tokenStorage` is `"none"`, it also requests `offline_access` to get a refresh token.

## Returns

`PublicOauthClient`. The interface has no JSDoc, so this table is written by hand.

| Member | Type | Description |
| --- | --- | --- |
| `()` | `() => Promise<string>` | Returns a valid access token, signing in or refreshing first if needed. |
| `getTokenOrUndefined` | `() => string \| undefined` | The current access token without signing in, or `undefined`. |
| `signIn` | `() => Promise<Token>` | Signs in: uses the stored refresh token, completes a pending redirect, or redirects to Foundry. Concurrent calls share one attempt. |
| `signOut` | `() => Promise<void>` | Revokes the access token and removes the stored refresh token. Throws when not signed in. |
| `refresh` | `() => Promise<Token \| undefined>` | Refreshes the access token with the stored refresh token. Throws when none is stored or the refresh fails. |
| `addEventListener` | `(type, listener, options?) => void` | Listens for `"signIn"`, `"signOut"`, or `"refresh"`. `signIn` and `refresh` events carry the `Token` in `detail`. |
| `removeEventListener` | `(type, listener, options?) => void` | Removes a listener. |

`Token` is `{ access_token: string; expires_in: number; refresh_token?: string; expires_at: number }`.

## Example

```ts title="src/auth.ts"
import { createPublicOauthClient } from "@osdk/oauth";

export const auth = createPublicOauthClient(
  "<your-client-id>",
  "https://example.palantirfoundry.com",
  "http://localhost:8080/auth/callback",
  {
    scopes: ["api:use-ontologies-read", "api:use-ontologies-write"],
    tokenStorage: "sessionStorage",
  },
);

auth.addEventListener("signOut", () => {
  window.location.assign("/");
});
```

## See also

- [Authentication](https://palantir.github.io/osdk-ts/authentication.md)
- [createClient](https://palantir.github.io/osdk-ts/reference/client/create-client.md)