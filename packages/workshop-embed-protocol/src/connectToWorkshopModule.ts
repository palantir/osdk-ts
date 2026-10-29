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
import { snapshotVariableSchema } from "./variables.js";
import type { WorkshopVariableSchema } from "./variables.js";

/** Options for a single connection attempt to a Workshop iframe. @public */
export interface ConnectToWorkshopModuleOptions<
  TSchema extends WorkshopVariableSchema = WorkshopVariableSchema,
> {
  /** The iframe's contentWindow. */
  targetWindow: Window;
  /** HTTP(S) origin expected to host Workshop. Wildcards and opaque origins are rejected. */
  targetOrigin: string;
  /** Local definitions used to infer and validate variable inputs. Not sent to Workshop. */
  variableSchema?: TSchema;
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
  const TSchema extends WorkshopVariableSchema,
>(
  options: ConnectToWorkshopModuleOptions<TSchema> & {
    variableSchema: TSchema;
  },
): Promise<WorkshopModuleConnection<TSchema>>;
/** @public */
export function connectToWorkshopModule(
  options: ConnectToWorkshopModuleOptions,
): Promise<WorkshopModuleConnection>;
export function connectToWorkshopModule<
  TSchema extends WorkshopVariableSchema = WorkshopVariableSchema,
>({
  targetWindow,
  targetOrigin,
  signal,
  timeoutMs = 10_000,
  hostWindow = window,
  variableSchema,
}: ConnectToWorkshopModuleOptions<TSchema>): Promise<
  WorkshopModuleConnection<TSchema>
> {
  return new Promise((resolve, reject) => {
    const schema = snapshotVariableSchema(variableSchema);
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
    let settled = false;
    let managed: ReturnType<typeof createConnection<TSchema>> | undefined;
    let transferredPort: MessagePort | undefined;

    function cleanupBootstrap() {
      clearTimeout(timeout);
      clearInterval(retry);
      hostWindow.removeEventListener("message", handleWindowMessage);
      managed?.connection.port.removeEventListener(
        "message",
        handlePortMessage,
      );
    }

    function cleanup() {
      cleanupBootstrap();
      signal?.removeEventListener("abort", abort);
      hostWindow.removeEventListener("pagehide", abort);
      transferredPort?.close();
      transferredPort = undefined;
    }

    function fail(error: Error) {
      if (!settled) {
        settled = true;
        reject(error);
      }
      cleanup();
      managed?.dispose(true);
    }

    function abort() {
      fail(new DOMException("Workshop connection aborted.", "AbortError"));
    }

    function handlePortMessage(event: MessageEvent<unknown>) {
      if (
        !settled &&
        managed != null &&
        isWorkshopEmbedMessage(event.data) &&
        event.data.sessionId === sessionId &&
        event.data.type === "connected"
      ) {
        settled = true;
        cleanupBootstrap();
        resolve(managed.connection);
      }
    }

    function handleWindowMessage(event: MessageEvent<unknown>) {
      if (
        settled ||
        managed != null ||
        event.source !== targetWindow ||
        event.origin !== origin ||
        !isWorkshopEmbedMessage(event.data) ||
        event.data.type !== "available" ||
        event.data.sessionId !== sessionId ||
        event.ports.length !== 0
      )
        return;

      clearInterval(retry);
      try {
        const channel = new MessageChannel();
        transferredPort = channel.port2;
        managed = createConnection(
          channel.port1,
          sessionId,
          () => {
            cleanup();
            if (!settled) {
              settled = true;
              reject(new Error("Workshop port closed before acknowledgement."));
            }
          },
          schema,
        );
        channel.port1.addEventListener("message", handlePortMessage);
        targetWindow.postMessage(createMessage("connect", sessionId), origin, [
          channel.port2,
        ]);
        transferredPort = undefined;
      } catch (error) {
        fail(
          error instanceof Error
            ? error
            : new Error("Workshop connection failed."),
        );
      }
    }

    function probe() {
      try {
        targetWindow.postMessage(createMessage("probe", sessionId), origin);
      } catch (error) {
        fail(
          error instanceof Error ? error : new Error("Workshop probe failed."),
        );
      }
    }

    hostWindow.addEventListener("message", handleWindowMessage);
    hostWindow.addEventListener("pagehide", abort);
    signal?.addEventListener("abort", abort);
    const timeout = setTimeout(
      () => fail(new Error("Workshop handshake timed out.")),
      timeoutMs,
    );
    const retry = setInterval(probe, 250);
    probe();
  });
}
