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
import type { WorkshopModuleConnection } from "./connection.js";
import { createMessage, isWorkshopEmbedMessage } from "./protocol.js";

/** Options for a single connection attempt to a Workshop iframe. @public */
export interface ConnectToWorkshopModuleOptions {
  /** The iframe's contentWindow. */
  targetWindow: Window;
  /** HTTP(S) origin expected to host Workshop. Wildcards and opaque origins are rejected. */
  targetOrigin: string;
  /** Abort to cancel the attempt or disconnect an established connection. */
  signal?: AbortSignal;
  /** Maximum handshake duration in milliseconds. Defaults to 10000. */
  timeoutMs?: number;
  /** Window hosting the iframe. Defaults to the current window. */
  hostWindow?: Window;
}

/**
 * Establishes a dedicated port using the Workshop embed handshake.
 * Resolves only after the peer acknowledges the transferred port. Rejects on timeout,
 * cancellation, or connection failure. Call again after iframe navigation.
 * @public
 */
export function connectToWorkshopModule({
  targetWindow,
  targetOrigin,
  signal,
  timeoutMs = 10_000,
  hostWindow = window,
}: ConnectToWorkshopModuleOptions): Promise<WorkshopModuleConnection> {
  return new Promise((resolve, reject) => {
    const url = new URL(targetOrigin);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      throw new TypeError("Workshop origin must use http or https.");
    }
    if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
      throw new TypeError(
        "Handshake timeout must be a positive finite number.",
      );
    }
    if (signal?.aborted) {
      reject(new DOMException("Workshop connection aborted.", "AbortError"));
      return;
    }
    const origin = url.origin;
    const sessionId = crypto.randomUUID();
    let handshakeSettled = false;
    let managedConnection: ReturnType<typeof createConnection> | undefined;
    let portToTransfer: MessagePort | undefined;

    function cleanupHandshake() {
      clearTimeout(handshakeTimeout);
      clearInterval(probeInterval);
      hostWindow.removeEventListener("message", handleWindowMessage);
      managedConnection?.connection.port.removeEventListener(
        "message",
        handlePortMessage,
      );
    }

    function cleanup() {
      cleanupHandshake();
      signal?.removeEventListener("abort", abort);
      hostWindow.removeEventListener("pagehide", abort);
      portToTransfer?.close();
      portToTransfer = undefined;
    }

    function fail(error: Error) {
      if (!handshakeSettled) {
        handshakeSettled = true;
        reject(error);
      }
      cleanup();
      managedConnection?.dispose(true);
    }

    function abort() {
      fail(new DOMException("Workshop connection aborted.", "AbortError"));
    }

    function handleConnectionClosed() {
      cleanup();
      if (!handshakeSettled) {
        handshakeSettled = true;
        reject(new Error("Workshop port closed before acknowledgement."));
      }
    }

    function handleWindowMessage(event: MessageEvent<unknown>) {
      const message = event.data;
      if (
        event.source !== targetWindow ||
        event.origin !== origin ||
        !isWorkshopEmbedMessage(message) ||
        message.type !== "available" ||
        message.sessionId !== sessionId ||
        event.ports.length !== 0
      )
        return;

      handleAvailable();
    }

    function handlePortMessage(event: MessageEvent<unknown>) {
      const message = event.data;
      if (
        !isWorkshopEmbedMessage(message) ||
        message.sessionId !== sessionId ||
        message.type !== "connected"
      )
        return;

      handleConnected();
    }

    function sendProbe() {
      try {
        targetWindow.postMessage(createMessage("probe", sessionId), origin);
      } catch (error) {
        fail(
          error instanceof Error ? error : new Error("Workshop probe failed."),
        );
      }
    }

    function handleAvailable() {
      if (handshakeSettled || managedConnection != null) return;

      clearInterval(probeInterval);
      try {
        const channel = new MessageChannel();
        portToTransfer = channel.port2;
        managedConnection = createConnection(
          channel.port1,
          sessionId,
          handleConnectionClosed,
        );
        channel.port1.addEventListener("message", handlePortMessage);
        targetWindow.postMessage(createMessage("connect", sessionId), origin, [
          channel.port2,
        ]);
        portToTransfer = undefined;
      } catch (error) {
        fail(
          error instanceof Error
            ? error
            : new Error("Workshop connection failed."),
        );
      }
    }

    function handleConnected() {
      if (handshakeSettled || managedConnection == null) return;

      handshakeSettled = true;
      cleanupHandshake();
      resolve(managedConnection.connection);
    }

    hostWindow.addEventListener("message", handleWindowMessage);
    hostWindow.addEventListener("pagehide", abort);
    signal?.addEventListener("abort", abort);
    const handshakeTimeout = setTimeout(
      () => fail(new Error("Workshop handshake timed out.")),
      timeoutMs,
    );
    const probeInterval = setInterval(sendProbe, 250);
    sendProbe();
  });
}
