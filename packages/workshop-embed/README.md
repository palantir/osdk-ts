# @osdk/workshop-embed

Experimental, React-free helpers for connecting an application to an embedded Workshop module. Workshop uses this package internally for its side of the connection. There are no runtime dependencies.

## Connecting to a Workshop module

Set `embedded=true&workshopEmbed=1` on the module URL and connect to the iframe from the parent application:

```ts
import { connectToWorkshopModule } from "@osdk/workshop-embed";

const controller = new AbortController();
const connection = await connectToWorkshopModule({
  targetWindow: iframe.contentWindow!,
  targetOrigin: new URL(iframe.src).origin,
  signal: controller.signal,
});

// On teardown, or before reconnecting after navigation:
controller.abort(); // Also closes a connection that has already resolved.
```

Start a fresh attempt on each iframe `load`, URL change, and parent `pageshow`. Abort the old attempt first. The handshake retries until Workshop responds and times out after 10 seconds by default (`timeoutMs` overrides this). The promise rejects on cancellation, timeout, or handshake failure. An older Workshop deployment can still render without completing the handshake. Pass `hostWindow` if the iframe belongs to a document other than the current window.

## Connection lifecycle

The promise resolves after Workshop acknowledges a dedicated `MessagePort`. This confirms that the transport is connected; it does not indicate that the module has loaded or supports variable inputs.

The connection exposes its `sessionId`, `port`, and `disconnect()` method. Add port listeners with `addEventListener`. Call `connection.disconnect()` or abort the signal to notify Workshop and close the connection, rather than closing the port directly. Dispose the connection when the embedding application unmounts or navigates to another module.

## Sending scalar variable inputs

The connection can send inputs keyed by a module variable's external ID:

```ts
connection.setVariables({
  searchText: "Ada",
  maxResults: 25,
  includeArchived: false,
  selectedName: null,
});
```

Values may be strings, finite numbers, booleans, or `null` to request clearing a variable. Each message is a partial update; omitted variables remain unchanged. Arrays and object-set values are not supported yet. Invalid input values or empty external IDs throw a `TypeError` before sending.

This API provides the messaging layer. Applying inputs requires a Workshop integration that checks module readiness, external IDs, variable types, and whether each variable can be set. Handshake-only deployments ignore variable messages. A successful `setVariables` call does not acknowledge that Workshop received or applied the update.

Connections expose `onVariablesSet(listener)` for receiving validated input messages for the current session. The returned function unsubscribes the listener, and disconnecting removes all listeners. Calling either variable method on a closed connection throws. Output subscriptions and notifications of variable state changes are not implemented yet.

## Declaring variable types

Declare the module's external IDs and their value types with a TypeScript type:

```ts
import { connectToWorkshopModule } from "@osdk/workshop-embed";

type ModuleVariables = {
  searchText: string;
  maxResults: number;
  includeArchived: boolean;
};

const connection = await connectToWorkshopModule<ModuleVariables>({
  targetWindow: iframe.contentWindow!,
  targetOrigin: new URL(iframe.src).origin,
});

connection.setVariables({ searchText: "Ada", maxResults: 25 });
connection.setVariables({ searchText: null }); // Request clearing a value.

// TypeScript errors:
// connection.setVariables({ maxResults: "25" });
// connection.setVariables({ unknownVariable: true });
```

The type also determines the values received by `onVariablesSet`. Updates are partial, so a received field may be omitted (`undefined`) or cleared (`null`). Use `WorkshopVariableValues<ModuleVariables>` to refer to the update type. Without a type argument, the connection accepts any non-empty external ID with a supported scalar value.

This declaration provides compile-time checking only. The transport validates the message envelope and supported scalar values, but does not check values against the declared variable names or types. Incoming values are typed using the caller's declaration.

The type can be authored manually or emitted by future code generation. It describes the app's expectations; it does not discover or verify the actual Workshop module's variables. The Workshop integration must still validate the module interface and apply inputs when the module is ready.
