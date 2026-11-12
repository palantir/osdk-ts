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

Start a fresh attempt on each iframe `load`, URL change, and parent `pageshow`. Abort the old attempt first. The handshake retries until Workshop responds. The attempt has a 10-second timeout covering both the port acknowledgement and module schema (`timeoutMs` overrides this). The promise rejects on cancellation, timeout, or handshake failure. An older Workshop deployment can still render without completing the handshake. Pass `hostWindow` if the iframe belongs to a document other than the current window.

## Connection lifecycle

The promise resolves after Workshop acknowledges a dedicated `MessagePort` and supplies the loaded module's supported variable schema. You can then subscribe to updates and call `setVariables` without managing schema readiness. Older integrations that only acknowledge the port time out waiting for the schema.

The connection exposes its `sessionId`, `port`, and `disconnect()` method. Add port listeners with `addEventListener`. Call `connection.disconnect()` or abort the signal to notify Workshop and close the connection, rather than closing the port directly. Dispose the connection when the embedding application unmounts or navigates to another module.

## Validating the module interface

The connection keeps Workshop's schema internally. Every `setVariables` call validates the entire partial update before sending it. Unknown external IDs or incompatible types throw a `TypeError`; values are not coerced. For a number variable, `{ count: "25" }` fails, `{ count: 25 }` succeeds, and `{ count: null }` clears it. Omitted fields remain unchanged. External IDs are matched exactly.

Incoming updates are checked against the same schema before `onVariablesSet` listeners run. Invalid updates are ignored. Subsequent schemas update validation automatically; the parent does not need to subscribe to schema changes or call a separate validator.

On the Workshop side, the listener's `onConnect` callback runs as soon as the port is established. It receives a `WorkshopModuleHostConnection`, which extends `WorkshopModuleConnection` with `setModuleSchema`. The parent connection does not expose this method. Once the module loads, Workshop publishes its supported interface:

```ts
connection.setModuleSchema({
  count: { type: "number", isList: false },
  searchText: { type: "string", isList: false },
});
```

Workshop must derive this schema from the loaded module's exposed variable definitions. Publish it on each connection and again if the interface changes, before sending values for the new interface. Schemas support strings, numbers, and booleans, with `isList: true` for arrays. Validation checks each element against the declared type, including distinguishing an empty list from a scalar. Object sets use `{ type: "objectSet", isList: false }`; object-set lists are not supported. Unsupported or excluded variables must not be advertised.

`setModuleSchema` installs validation on Workshop's connection and sends a `moduleSchema` message to the parent. Only Workshop can publish schemas; schemas sent by the parent are ignored. Until a schema is available, sending variables throws and incoming updates are ignored. Invalid schema messages and messages for other sessions are ignored. Disconnecting clears the schema.

## Sending variable inputs

The connection can send inputs keyed by a module variable's external ID:

```ts
connection.setVariables({
  searchText: "Ada",
  maxResults: 25,
  includeArchived: false,
  selectedNames: ["Ada", "Grace"],
  selectedName: null,
});
```

Values may be strings, finite numbers, booleans, homogeneous arrays of those primitives, object-set references, or `null` to request clearing a variable. Arrays replace the whole list: `[]` sets an empty list, while `null` clears the variable. Mixed types, nested arrays, sparse arrays, and null or undefined array elements are rejected. Each message is a partial update; omitted variables remain unchanged. Object-set arrays are not supported.

`WorkshopSingleVariableValue` represents one non-null value; `WorkshopVariableValue` also accepts homogeneous arrays and `null`. Declare a specific element type, such as `readonly string[]`, to constrain each variable to its expected type.

External IDs must be non-empty and unique ignoring case within each update. `_open_rebase_dialog` and `_kiosk_mode_session_id` are reserved, including capitalization variants. Original key capitalization is preserved. Invalid updates throw a `TypeError` before sending; malformed incoming updates are ignored.

Array inputs and outputs require a Workshop integration that publishes list-variable schemas.

This API provides the messaging layer and schema validation. Applying inputs requires a Workshop integration that publishes the authoritative schema and checks whether each variable can be set. A successful `setVariables` call does not acknowledge that Workshop received or applied the update.

Both ends use `setVariables(values)` to send and `onVariablesSet((values) => ...)` to receive validated updates for the current session. Every update uses the same `setVariables` message type; the receiver decides how to apply it.

## Object-set variables

Use `WorkshopObjectSetValue` to declare an object-set variable. Send and receive the same `{ objectSetRid: string }` reference shape used by custom widgets:

```ts
connection.setVariables({
  employees: {
    objectSetRid: "ri.object-set.main.temporary-object-set.example",
  },
});
```

Use `null` to clear the variable. The transport validates the object-set RID format; it does not fetch the set, check access, or convert OSDK `ObjectSet` instances. The receiving application must have access to the referenced set. Object-set arrays are not supported.

Object-set inputs and outputs require object-set support in the Workshop embed integration. Older peers reject messages containing object-set references.

## Timestamp variables

Represent timestamps as ISO 8601 strings, such as `"2026-11-03T12:30:00.000Z"`, using `Date.prototype.toISOString()` when starting from a JavaScript `Date`. Declare timestamp fields as `string` and timestamp lists as `readonly string[]` in the variable contract.

```ts
connection.setVariables({
  startedAt: "2026-11-03T12:30:00.000Z",
  checkpoints: ["2026-11-03T12:30:00.000Z", "2026-11-03T14:00:00.000Z"],
});
```

Workshop advertises timestamp variables with `{ type: "timestamp", isList: false }` and timestamp lists with `{ type: "timestamp", isList: true }`. The connection validates the strings against this schema before sending updates or delivering callbacks. Values remain strings on the wire, without per-value type tags.

Timestamp validation uses `date-fns` `isValid(parseISO(value))`, matching Workshop’s serialized input validation. It accepts UTC and offset timestamps, as well as ISO date-only and timezone-less strings. Values are validated without normalization, so the original strings and their fractional precision are preserved. Use `toISOString()` when starting from a JavaScript `Date`. Strings declared as ordinary string variables are not checked as timestamps.

Timestamp inputs and outputs require timestamp-variable support in the Workshop integration, including list support for timestamp arrays. Use `null` to clear a timestamp or list, and `[]` for an empty timestamp list.

## Receiving Workshop variable changes

Subscribe before sending inputs:

```ts
const unsubscribe = connection.onVariablesSet((changes) => {
  // Merge this partial update into the application's current variable values.
});
connection.setVariables({ maxResults: 25 });
```

The Workshop integration publishes current values with `connection.setVariables(values)` when the module becomes ready and when its interface values change. Input updates and change notifications are independent events, without per-update acknowledgments or conflict resolution for concurrent edits.

Use `null` for cleared values. The connection validates envelopes, external IDs, and values against the module schema in both directions. Input-only deployments continue accepting inputs but do not publish changes. Receiving outputs requires this publisher integration in Workshop.

`onVariablesSet` returns an unsubscribe function, and disconnecting removes all listeners. All variable methods throw on a closed connection.

## Declaring variable types

Declare the module's external IDs and their value types with a TypeScript type alias:

```ts
import { connectToWorkshopModule } from "@osdk/workshop-embed";

type ModuleVariables = {
  searchText: string;
  maxResults: number;
  includeArchived: boolean;
  selectedNames: readonly string[];
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

The type determines the values sent by `setVariables` and received by `onVariablesSet` in either direction. Updates are partial, so a received field may be omitted (`undefined`) or cleared (`null`). Use `WorkshopVariableValues<ModuleVariables>` to refer to the update type. Without a type argument, TypeScript allows any valid external ID with a supported variable value; runtime validation still checks the actual module schema.

This declaration provides compile-time checking only. Runtime validation uses the actual schema supplied by Workshop; it cannot verify the caller's erased TypeScript declaration. Incoming values are typed using that declaration, so it must match the module interface.

The type can be authored manually or emitted by future code generation. It describes the app's expectations; it does not discover or verify the actual Workshop module's variables. The Workshop integration supplies the authoritative schema and applies inputs when the module is ready.
