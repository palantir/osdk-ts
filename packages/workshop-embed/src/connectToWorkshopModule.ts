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
import type { WorkshopVariableValue } from "./variables.js";

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
export function connectToWorkshopModule<
  TVariables extends Record<keyof TVariables, WorkshopVariableValue> = Record<
    string,
    WorkshopVariableValue
  >,
>({
  targetWindow,
  targetOrigin,
  signal,
  timeoutMs = 10_000,
  hostWindow = window,
}: ConnectToWorkshopModuleOptions): Promise<
  WorkshopModuleConnection<TVariables>
> {
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
      throw new DOMException("Workshop connection aborted.", "AbortError");
    }
    const origin = url.origin;
    const sessionId = createSessionId();
    const { port1, port2 } = new MessageChannel();
    let transferred = false;
    const handshakeTimeout = setTimeout(
      () => fail(new Error("Workshop handshake timed out.")),
      timeoutMs,
    );
    const probeInterval = setInterval(sendProbe, 250);

    const { connection, dispose } = createConnection<TVariables>(
      port1,
      sessionId,
      () => {
        stopHandshake();
        signal?.removeEventListener("abort", abort);
        hostWindow.removeEventListener("pagehide", abort);
        if (!transferred) port2.close();
        fail(new Error("Workshop port closed before acknowledgement."));
      },
    );

    function stopHandshake() {
      clearTimeout(handshakeTimeout);
      clearInterval(probeInterval);
      hostWindow.removeEventListener("message", handleWindowMessage);
      port1.removeEventListener("message", handlePortMessage);
    }

    function fail(error: unknown) {
      reject(error instanceof Error ? error : new Error(String(error)));
      dispose(true);
    }

    function abort() {
      fail(new DOMException("Workshop connection aborted.", "AbortError"));
    }

    function handleWindowMessage(event: MessageEvent<unknown>) {
      const message = event.data;
      if (
        transferred ||
        event.source !== targetWindow ||
        event.origin !== origin ||
        event.ports.length !== 0 ||
        !isWorkshopEmbedMessage(message) ||
        message.type !== "available" ||
        message.sessionId !== sessionId
      )
        return;

      clearInterval(probeInterval);
      try {
        targetWindow.postMessage(createMessage("connect", sessionId), origin, [
          port2,
        ]);
        transferred = true;
      } catch (error) {
        fail(error);
      }
    }

    function handlePortMessage(event: MessageEvent<unknown>) {
      const message = event.data;
      if (
        isWorkshopEmbedMessage(message) &&
        message.type === "connected" &&
        message.sessionId === sessionId
      ) {
        stopHandshake();
        resolve(connection);
      }
    }

    function sendProbe() {
      try {
        targetWindow.postMessage(createMessage("probe", sessionId), origin);
      } catch (error) {
        fail(error);
      }
    }

    port1.addEventListener("message", handlePortMessage);
    hostWindow.addEventListener("message", handleWindowMessage);
    hostWindow.addEventListener("pagehide", abort);
    signal?.addEventListener("abort", abort);
    sendProbe();
  });
}

function createSessionId(): string {
  // randomUUID is only available in secure contexts and in Node 19+.
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
