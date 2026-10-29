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
  createSetVariablesMessage,
  isSetVariablesMessage,
} from "./variables.js";
import type { WorkshopVariableValues } from "./variables.js";

/** An established transport connection; this does not imply module readiness. @public */
export interface WorkshopModuleConnection {
  /** Identifies this connection attempt. */
  readonly sessionId: string;
  /** Dedicated transport. Add listeners with addEventListener; use disconnect to close it. */
  readonly port: MessagePort;
  /** Sends scalar inputs to the peer. Throws for invalid values or a closed connection. Does not acknowledge application. */
  setVariables: (values: WorkshopVariableValues) => void;
  /** Receives validated inputs for this session. Returns an unsubscribe function; disconnect removes all listeners. Throws if closed. */
  onVariablesSet: (
    listener: (values: WorkshopVariableValues) => void,
  ) => () => void;
  /** Notifies the peer, closes the port, and runs connection cleanup. Idempotent. */
  disconnect: () => void;
}

/** Callback invoked when a connection is established. Its returned cleanup runs on disposal. @public */
export type WorkshopModuleConnectHandler = (
  connection: WorkshopModuleConnection,
) => void | (() => void);

interface ManagedConnection {
  connection: WorkshopModuleConnection;
  dispose: (notifyPeer: boolean) => void;
  activate: (handler: WorkshopModuleConnectHandler | undefined) => void;
}

export function createConnection(
  port: MessagePort,
  sessionId: string,
  onDispose: () => void,
): ManagedConnection {
  let disposed = false;
  let cleanup: void | (() => void);
  const variableListeners = new Set<(values: WorkshopVariableValues) => void>();

  function dispose(notifyPeer: boolean) {
    if (disposed) return;
    disposed = true;
    if (notifyPeer) {
      try {
        port.postMessage(createMessage("disconnect", sessionId));
      } catch {
        // The peer may already have navigated or closed its port.
      }
    }
    port.removeEventListener("message", handleMessage);
    port.removeEventListener("messageerror", disconnect);
    variableListeners.clear();
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
      isSetVariablesMessage(event.data) &&
      event.data.sessionId === sessionId
    ) {
      // Defer listeners added by a callback until the next message.
      const listeners = [...variableListeners];
      for (const listener of listeners) {
        if (variableListeners.has(listener)) listener(event.data.values);
      }
    }
  }

  function assertOpen() {
    if (disposed) throw new Error("Workshop connection is closed.");
  }

  const connection: WorkshopModuleConnection = {
    port,
    sessionId,
    disconnect,
    setVariables(values) {
      assertOpen();
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
    dispose,
    activate(handler) {
      try {
        const result = handler?.(connection);
        if (disposed) result?.();
        else cleanup = result;
      } catch (error) {
        disconnect();
        throw error;
      }
    },
  };
}
