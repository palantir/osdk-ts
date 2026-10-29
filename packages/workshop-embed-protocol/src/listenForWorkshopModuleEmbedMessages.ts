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

import { createConnection } from "./connection.js";
import type { WorkshopModuleConnectHandler } from "./connection.js";
import {
  createMessage,
  isWorkshopEmbedMessage,
  WORKSHOP_EMBED_QUERY_PARAM,
  WORKSHOP_EMBED_QUERY_VALUE,
} from "./protocol.js";

/** Options for the Workshop-side listener. @public */
export interface ListenForWorkshopModuleEmbedMessagesOptions {
  /** Called for each accepted connection. Return a function to clean up per-connection resources. */
  onConnect?: WorkshopModuleConnectHandler;
  /** Workshop's window. Defaults to the current window. */
  hostWindow?: Window;
}

/**
 * Enables the child-side handshake only when framed with workshopEmbed=1.
 * Accepts the actual parent with a non-opaque origin, including cross-origin parents.
 * Returns an idempotent cleanup that removes listeners and closes the active port.
 * @public
 */
export function listenForWorkshopModuleEmbedMessages({
  onConnect,
  hostWindow = window,
}: ListenForWorkshopModuleEmbedMessagesOptions = {}): () => void {
  if (
    hostWindow.parent === hostWindow ||
    new URLSearchParams(hostWindow.location.search).get(
      WORKSHOP_EMBED_QUERY_PARAM,
    ) !== WORKSHOP_EMBED_QUERY_VALUE
  )
    return () => {};

  let pending: { sessionId: string; origin: string } | undefined;
  let active: ReturnType<typeof createConnection> | undefined;
  let stopped = false;

  function disconnect() {
    pending = undefined;
    active?.dispose(true);
  }

  function handleMessage(event: MessageEvent<unknown>) {
    const message = event.data;
    if (
      event.source !== hostWindow.parent ||
      event.origin === "null" ||
      !isWorkshopEmbedMessage(message)
    )
      return;

    if (message.type === "probe") {
      if (event.ports.length !== 0) {
        for (const unusedPort of event.ports) unusedPort.close();
        return;
      }
      if (active?.connection.sessionId !== message.sessionId) {
        pending = { sessionId: message.sessionId, origin: event.origin };
      }
      hostWindow.parent.postMessage(
        createMessage("available", message.sessionId),
        event.origin,
      );
      return;
    }
    if (message.type !== "connect") return;
    const port = event.ports[0];
    if (
      event.ports.length !== 1 ||
      port == null ||
      pending?.sessionId !== message.sessionId ||
      pending.origin !== event.origin
    ) {
      for (const unusedPort of event.ports) unusedPort.close();
      return;
    }

    try {
      disconnect();
    } catch (error) {
      port.close();
      throw error;
    }
    if (stopped) {
      port.close();
      return;
    }
    const next = createConnection(port, message.sessionId, () => {
      if (active === next) active = undefined;
    });
    active = next;
    try {
      port.postMessage(createMessage("connected", message.sessionId));
      next.activate(onConnect);
    } catch (error) {
      next.dispose(true);
      throw error;
    }
  }

  hostWindow.addEventListener("message", handleMessage);
  hostWindow.addEventListener("pagehide", disconnect);
  return () => {
    stopped = true;
    hostWindow.removeEventListener("message", handleMessage);
    hostWindow.removeEventListener("pagehide", disconnect);
    disconnect();
  };
}
