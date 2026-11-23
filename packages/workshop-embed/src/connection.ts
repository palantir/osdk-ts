/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createMessage, isWorkshopEmbedMessage } from "./protocol.js";
import {
  createModuleSchemaMessage,
  isModuleSchemaMessage,
  validateVariableValues,
} from "./schema.js";
import type { WorkshopModuleSchema } from "./schema.js";
import {
  createSetVariablesMessage,
  isSetVariablesMessage,
} from "./variables.js";
import type {
  WorkshopVariableMap,
  WorkshopVariableValues,
} from "./variables.js";

/** A dedicated connection to an embedded Workshop module. @public */
export interface WorkshopModuleConnection<
  TVariables extends WorkshopVariableMap = WorkshopVariableMap,
> {
  /** Identifies this connection attempt. */
  readonly sessionId: string;
  /** Dedicated transport. Add listeners with addEventListener; use disconnect to close it. */
  readonly port: MessagePort;
  /** Validates updates against the module schema and sends them to the peer. Throws for invalid updates, a missing schema, or a closed connection. Does not acknowledge application. */
  setVariables: (values: WorkshopVariableValues<TVariables>) => void;
  /** Receives updates validated against the module schema for this session. Invalid updates are ignored. Returns an unsubscribe function; disconnect removes all listeners. Throws if closed. */
  onVariablesSet: (
    listener: (values: WorkshopVariableValues<TVariables>) => void,
  ) => () => void;
  /** Notifies the peer, closes the port, and runs connection cleanup. Idempotent. */
  disconnect: () => void;
}

/** Workshop's side of an embedded module connection. @public */
export interface WorkshopModuleHostConnection<
  TVariables extends WorkshopVariableMap = WorkshopVariableMap,
> extends WorkshopModuleConnection<TVariables> {
  /** Publishes the module's supported interface after it loads and updates local validation. Throws for invalid schemas or a closed connection. */
  setModuleSchema: (schema: WorkshopModuleSchema) => void;
}

/** Callback invoked when Workshop accepts a connection. Its returned cleanup runs on disposal. @public */
export type WorkshopModuleConnectHandler<
  TVariables extends WorkshopVariableMap = WorkshopVariableMap,
> = (
  connection: WorkshopModuleHostConnection<TVariables>,
) => void | (() => void);

interface ManagedConnection<TVariables extends WorkshopVariableMap> {
  connection: WorkshopModuleConnection<TVariables>;
  hasModuleSchema: () => boolean;
  dispose: (notifyPeer: boolean) => void;
  activate: (
    handler: WorkshopModuleConnectHandler<TVariables> | undefined,
  ) => void;
}

export function createConnection<
  TVariables extends WorkshopVariableMap = WorkshopVariableMap,
>(
  port: MessagePort,
  sessionId: string,
  onDispose: () => void,
  role: "parent" | "workshop" = "parent",
): ManagedConnection<TVariables> {
  let disposed = false;
  let cleanup: void | (() => void);
  const variableListeners = new Set<
    (values: WorkshopVariableValues<TVariables>) => void
  >();
  let moduleSchema: WorkshopModuleSchema | undefined;

  function dispose(notifyPeer: boolean) {
    if (disposed) return;
    disposed = true;
    if (notifyPeer) port.postMessage(createMessage("disconnect", sessionId));
    port.removeEventListener("message", handleMessage);
    port.removeEventListener("messageerror", disconnect);
    variableListeners.clear();
    moduleSchema = undefined;
    port.close();
    try {
      cleanup?.();
    } finally {
      onDispose();
    }
  }

  function disconnect() {
    dispose(true);
  }

  function handleMessage(event: MessageEvent<unknown>) {
    if (
      isWorkshopEmbedMessage(event.data) &&
      event.data.sessionId === sessionId &&
      event.data.type === "disconnect"
    ) {
      dispose(false);
    } else if (
      role === "parent" &&
      isModuleSchemaMessage(event.data) &&
      event.data.sessionId === sessionId
    ) {
      moduleSchema = event.data.variables;
    } else if (
      isSetVariablesMessage(event.data) &&
      event.data.sessionId === sessionId
    ) {
      if (moduleSchema == null) return;
      try {
        validateVariableValues(moduleSchema, event.data.values);
      } catch {
        return;
      }
      // Runtime validation uses Workshop's schema; the caller's generic is erased.
      const values = event.data.values as WorkshopVariableValues<TVariables>;
      // Defer listeners added by a callback until the next message.
      const listeners = [...variableListeners];
      for (const listener of listeners) {
        if (variableListeners.has(listener)) listener(values);
      }
    }
  }

  function assertOpen() {
    if (disposed) throw new Error("Workshop connection is closed.");
  }

  const connection: WorkshopModuleConnection<TVariables> = {
    port,
    sessionId,
    disconnect,
    setVariables(values) {
      assertOpen();
      if (moduleSchema == null) {
        throw new Error("Workshop module schema is not ready.");
      }
      validateVariableValues(moduleSchema, values);
      port.postMessage(createSetVariablesMessage(sessionId, values));
    },
    onVariablesSet(listener) {
      assertOpen();
      variableListeners.add(listener);
      return () => {
        variableListeners.delete(listener);
      };
    },
  };
  port.addEventListener("message", handleMessage);
  port.addEventListener("messageerror", disconnect);
  port.start();

  return {
    connection,
    hasModuleSchema: () => moduleSchema != null,
    dispose,
    activate(handler) {
      if (disposed) return;
      port.postMessage(createMessage("connected", sessionId));
      const result = handler?.({
        ...connection,
        setModuleSchema(schema) {
          assertOpen();
          const message = createModuleSchemaMessage(sessionId, schema);
          const snapshot = structuredClone(schema);
          port.postMessage(message);
          moduleSchema = snapshot;
        },
      });
      if (disposed) result?.();
      else cleanup = result;
    },
  };
}
