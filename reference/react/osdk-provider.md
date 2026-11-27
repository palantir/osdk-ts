# OsdkProvider

Source: https://palantir.github.io/osdk-ts/reference/react/osdk-provider

> React context provider that shares an OSDK client and its normalized cache with every hook below it.

```ts
import { OsdkProvider } from "@osdk/react";

function OsdkProvider(
  props: {
    children: React.ReactNode;
    enableDevTools?: boolean;
  } & (
    | { client: Client; devMode?: ObservableClientOptions["devMode"] }
    | { client: ObservableClient; devMode?: never }
  ),
): React.JSX.Element;
```

Wraps your app so `@osdk/react` hooks can reach the client. Given a `Client`, the provider builds an `ObservableClient` from it, which holds the shared cache, and rebuilds it whenever `client` changes. Given an `ObservableClient`, the provider uses it and its cache as is.

## Props

The props type is not exported, so this table is written by hand.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `client` | `Client \| ObservableClient` | | The client from `createClient` in `@osdk/client`, or an observable client from `createObservableClient` in `@osdk/client/observable`. Create it once at module scope; a new instance starts a new, empty cache. |
| `children` | `React.ReactNode` | | The tree that uses OSDK hooks. |
| `enableDevTools` | `boolean` | `true` when devtools are registered | Turns the devtools integration on or off. Ignored in production builds. |
| `devMode` | `ObservableClientOptions["devMode"]` | | Development-only behavior of the observable client. Ignored in production builds. Only accepted with a plain `Client`; pass it to `createObservableClient` instead when you supply an observable client. See the fields below. |

### `devMode` fields

| Field | Type | Description |
| --- | --- | --- |
| `actionDelayMs` | `number` | Delay, in milliseconds, applied to the result of an action that has an optimistic update, so the optimistic state stays visible. Defaults to `1000`; pass `0` to disable it. |
| `logLevel` | `"trace" \| "debug" \| "info" \| "warn" \| "error" \| "fatal"` | Log level of the observable client. Defaults to `"error"`; pass `"debug"` to see its tracing. |
| `debug.refCounts` | `boolean` | Logs the reference-count lifecycle of cache entries and shortens their retention window. |
| `debug.cacheKeys` | `boolean` | Logs cache-key lookups. |

## Example

```tsx title="src/Root.tsx"
import { $ontologyRid } from "@my-app/sdk";
import { createClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";
import { OsdkProvider } from "@osdk/react";

const foundryUrl = "https://example.palantirfoundry.com";
const auth = createPublicOauthClient(
  "<your-client-id>",
  foundryUrl,
  "http://localhost:8080/auth/callback",
);
const client = createClient(foundryUrl, $ontologyRid, auth);

function App() {
  return <main>My app</main>;
}

export function Root() {
  return (
    <OsdkProvider client={client}>
      <App />
    </OsdkProvider>
  );
}
```

## Share an observable client

To share a cache with code outside React, create an observable client and pass it to `OsdkProvider`:

```tsx title="src/Root.tsx"
import { createObservableClient } from "@osdk/client/observable";
import { OsdkProvider } from "@osdk/react";
import { client } from "./client";

const observableClient = createObservableClient(client, undefined, {
  devMode: { actionDelayMs: 0 },
});

export function Root() {
  return (
    <OsdkProvider client={observableClient}>
      <App />
    </OsdkProvider>
  );
}
```

- `useOsdkClient()` returns the underlying client used by the observable client's store.
- Keep the observable client stable across renders. Replace it when the ontology, branch, or authentication context changes.
- The provider does not clear the shared cache when it unmounts. Each consumer must unsubscribe from its own observations.
- Multiple providers can use the same observable client, and they share its user-agent registrations. Code outside React must use the observable client's APIs to share the cache; plain client fetches do not populate it.

## See also

- [Create a client](https://palantir.github.io/osdk-ts/client.md)
- [Devtools](https://palantir.github.io/osdk-ts/devtools.md)