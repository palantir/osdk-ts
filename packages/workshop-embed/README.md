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

The promise resolves after Workshop acknowledges a dedicated `MessagePort`. This confirms that the transport is connected; it does not indicate that the module has loaded. Interface-variable updates are not implemented by this package.

The connection exposes its `sessionId`, `port`, and `disconnect()` method. Add port listeners with `addEventListener`. Call `connection.disconnect()` or abort the signal to notify Workshop and close the connection, rather than closing the port directly. Dispose the connection when the embedding application unmounts or navigates to another module.
