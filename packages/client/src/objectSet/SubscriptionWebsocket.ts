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

import type { Logger } from "@osdk/api";
import WebSocket from "isomorphic-ws";
import invariant from "tiny-invariant";

import type { MinimalClient } from "../MinimalClientContext.js";
import type { SubscriptionConnection } from "../SubscriptionConnection.js";
import { ExponentialBackoff } from "../util/exponentialBackoff.js";
import {
  EXPONENTIAL_BACKOFF_INITIAL_DELAY_MS,
  EXPONENTIAL_BACKOFF_JITTER_FACTOR,
  EXPONENTIAL_BACKOFF_MAX_DELAY_MS,
  EXPONENTIAL_BACKOFF_MULTIPLIER,
  nextUuid,
  WEBSOCKET_HEARTBEAT_INTERVAL_MS,
  WEBSOCKET_IDLE_DISCONNECT_DELAY_MS,
} from "./websocketUtils.js";

export type SubscriptionStatus =
  | "done"
  | "error"
  | "expired"
  | "preparing"
  | "reconnecting"
  | "subscribed";

export interface BaseSubscription {
  status: SubscriptionStatus;

  subscriptionId: string;
}

export interface SubscribeRequests {
  readonly id: string;
}

export function isSubscriptionDone(subscription: BaseSubscription): boolean {
  return subscription.status === "done" || subscription.status === "error";
}

/** @internal */
export abstract class SubscriptionWebsocket<S extends BaseSubscription, M> {
  protected readonly client: MinimalClient;
  protected readonly logger: Logger | undefined;

  /**
   * map of requestId to all active subscriptions at the time of the request
   */
  protected pendingSubscriptions = new Map<string, S[]>();

  /**
   * Map of subscriptionId to Subscription. Note: the subscriptionId may be
   * temporary and not the actual subscriptionId from the server.
   */
  protected subscriptions = new Map<string, S>();

  protected ws: SubscriptionConnection | undefined;

  #backoff: ExponentialBackoff;
  #isFirstConnection = true;
  #connecting: Promise<void> | undefined;
  #connectionAbort: AbortController | undefined;
  #removeConnectionListeners: (() => void) | undefined;
  #heartbeatInterval: ReturnType<typeof setInterval> | undefined;
  #maybeDisconnectTimeout: ReturnType<typeof setTimeout> | undefined;

  constructor(client: MinimalClient, loggerPrefix: string) {
    this.client = client;
    this.#backoff = new ExponentialBackoff({
      initialDelayMs: EXPONENTIAL_BACKOFF_INITIAL_DELAY_MS,
      maxDelayMs: EXPONENTIAL_BACKOFF_MAX_DELAY_MS,
      multiplier: EXPONENTIAL_BACKOFF_MULTIPLIER,
      jitterFactor: EXPONENTIAL_BACKOFF_JITTER_FACTOR,
    });
    this.logger = client.logger?.child(
      {},
      {
        msgPrefix: loggerPrefix,
      },
    );
    invariant(
      client.baseUrl.startsWith("https://") ||
        client.baseUrl.startsWith("http://"),
      "Stack must be a URL",
    );
  }

  protected abstract createConnection(): Promise<SubscriptionConnection>;

  protected abstract createSubscribeRequests(
    requestId: string,
    readySubscriptions: readonly S[],
  ): SubscribeRequests;

  protected abstract isSubscriptionReady(subscription: S): boolean;

  protected abstract handleWebsocketMessage(message: M): void | Promise<void>;

  protected abstract clearListener(subscription: S): void;

  protected onSubscriptionEnded(_subscription: S): void {}

  protected sendSubscribeMessage = (): void => {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.debug("#sendSubscribeMessage()");
    }

    if (this.ws?.readyState !== WebSocket.OPEN) {
      return;
    }

    // If two calls to `.subscribe()` happen at once (or if the connection is reset),
    // we may have multiple subscriptions that don't have a subscriptionId yet,
    // so we filter those out.
    const readySubs = [...this.subscriptions.values()].filter((sub) =>
      this.isSubscriptionReady(sub),
    );

    const id = nextUuid();
    // responses come back as an array of subIds, so we need to know the sources
    this.pendingSubscriptions.set(id, readySubs);

    // every subscribe message "overwrites" the previous ones that are not
    // re-included, so we have to reconstitute the entire list of subscriptions
    const subscribe = this.createSubscribeRequests(id, readySubs);

    if (process.env.NODE_ENV !== "production") {
      this.logger?.debug({ payload: subscribe }, "sending subscribe message");
    }
    this.ws.send(JSON.stringify(subscribe));
  };

  protected cancelIdleDisconnect(): void {
    if (this.#maybeDisconnectTimeout != null) {
      clearTimeout(this.#maybeDisconnectTimeout);
      this.#maybeDisconnectTimeout = undefined;
    }
  }

  protected endSubscription(
    subscription: S,
    newStatus: "done" | "error" = "done",
  ): void {
    if (isSubscriptionDone(subscription)) {
      // if we are already done, we don't need to do anything
      return;
    }

    subscription.status = newStatus;

    // make sure listeners do nothing now
    this.clearListener(subscription);

    this.subscriptions.delete(subscription.subscriptionId);
    this.onSubscriptionEnded(subscription);
    this.sendSubscribeMessage();

    // If we have no more subscriptions, we can disconnect the websocket
    // however we should wait a bit to see if we get any more subscriptions.
    // For example, when switching between react views, you may unsubscribe
    // in the old view and subscribe in the new view. We don't need to re-establish
    // the websocket connection in that case.
    if (this.#maybeDisconnectTimeout) {
      // We reset the timeout on every unsubscribe so its always at least 15s from
      // the last time we are empty. E.g.:
      //   - 0s: Subscribe(A)
      //   - 10s: Unsubscribe(A)
      //   - 11s: Subscribe(B)
      //   - 20s: Unsubscribe(B)
      // If we do not clear out the timeout we would disconnect at 25s but that would only be
      // 5s after the last subscription was removed instead of at 35s for the desired 15s.
      clearTimeout(this.#maybeDisconnectTimeout);
    }
    this.#maybeDisconnectTimeout = setTimeout(() => {
      this.#maybeDisconnectTimeout = undefined;
      if (this.subscriptions.size === 0) {
        this.cycleWebsocket();
      }
    }, WEBSOCKET_IDLE_DISCONNECT_DELAY_MS);
  }

  protected async ensureWebsocket(): Promise<void> {
    if (this.#connecting != null) return this.#connecting;
    if (this.ws != null || this.subscriptions.size === 0) return;

    const controller = new AbortController();
    this.#connectionAbort = controller;
    // Share the whole attempt, including backoff and token acquisition. A check
    // after the factory resolves is too late to prevent duplicate connections.
    const connecting = Promise.resolve()
      .then(() => this.#connect(controller.signal))
      .catch((error) => {
        if (!controller.signal.aborted) throw error;
      });
    this.#connecting = connecting;
    try {
      await connecting;
    } finally {
      if (this.#connecting === connecting) this.#connecting = undefined;
    }
  }

  async #connect(signal: AbortSignal): Promise<void> {
    if (signal.aborted) return;
    if (!this.#isFirstConnection) {
      const delay = this.#backoff.calculateDelay();
      if (process.env.NODE_ENV !== "production") {
        this.logger?.debug(
          { delay, attempt: this.#backoff.getAttempt() },
          "Waiting before reconnect",
        );
      }
      await new Promise<void>((resolve) => {
        const finish = () => {
          clearTimeout(timeout);
          signal.removeEventListener("abort", finish);
          // eslint-disable-next-line promise/no-multiple-resolved -- clearTimeout cancels the callback; it does not resolve the promise.
          resolve();
        };
        const timeout = setTimeout(finish, delay);
        signal.addEventListener("abort", finish, { once: true });
      });
    }
    if (signal.aborted || this.subscriptions.size === 0) return;

    const connection = await this.createConnection();
    if (signal.aborted || this.subscriptions.size === 0) {
      connection.close();
      return;
    }
    this.ws = connection;
    const isCurrent = () => !signal.aborted && this.ws === connection;
    const onClose = (event: WebSocket.CloseEvent) => {
      if (isCurrent()) this.#onClose(event);
    };
    const onMessage = (event: WebSocket.MessageEvent) => {
      if (isCurrent()) return this.#onMessage(event);
    };
    const onOpen = () => {
      if (isCurrent()) this.#onOpen();
    };
    connection.addEventListener("close", onClose);
    connection.addEventListener("message", onMessage);
    connection.addEventListener("open", onOpen);
    this.#removeConnectionListeners = () => {
      connection.removeEventListener("close", onClose);
      connection.removeEventListener("message", onMessage);
      connection.removeEventListener("open", onOpen);
    };
    if (connection.readyState === WebSocket.CONNECTING) {
      await awaitWebsocketOpen(connection, signal);
    } else if (connection.readyState === WebSocket.OPEN) {
      onOpen();
    }
  }

  protected reconnect(): void {
    // we don't care about the result of this (we want cycleWebsocket to be fire and forget)
    // just that it happens
    void this.ensureWebsocket();
  }

  protected disconnectWebsocket(): void {
    this.#connectionAbort?.abort();
    this.#connectionAbort = undefined;
    this.#connecting = undefined;
    this.pendingSubscriptions.clear();
    this.cancelIdleDisconnect();
    // Clear heartbeat interval
    if (this.#heartbeatInterval) {
      clearInterval(this.#heartbeatInterval);
      this.#heartbeatInterval = undefined;
    }

    if (this.ws) {
      this.#removeConnectionListeners?.();
      this.#removeConnectionListeners = undefined;

      if (
        this.ws.readyState !== WebSocket.CLOSING &&
        this.ws.readyState !== WebSocket.CLOSED
      ) {
        this.ws.close();
      }
      this.ws = undefined;
    }
  }

  protected cycleWebsocket(): void {
    for (const subscription of this.subscriptions.values()) {
      if (subscription.status === "subscribed")
        subscription.status = "reconnecting";
    }
    if (
      this.ws == null &&
      this.#connecting != null &&
      this.subscriptions.size > 0
    ) {
      return;
    }
    this.disconnectWebsocket();

    // if we have any listeners that are still depending on us, go ahead and reopen the websocket
    if (this.subscriptions.size > 0) {
      if (process.env.NODE_ENV !== "production") {
        for (const s of this.subscriptions.values()) {
          invariant(
            s.status !== "done" && s.status !== "error",
            "should not have done/error subscriptions still",
          );
        }
      }

      this.reconnect();
    }
  }

  #onOpen = (): void => {
    // Mark that we've successfully connected at least once
    this.#isFirstConnection = false;
    // Reset backoff on successful connection
    this.#backoff.reset();
    // resubscribe all of the listeners
    this.sendSubscribeMessage();

    // Start heartbeat to keep connection alive
    if (this.#heartbeatInterval) {
      clearInterval(this.#heartbeatInterval);
    }
    this.#heartbeatInterval = setInterval(() => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.sendSubscribeMessage();
      }
    }, WEBSOCKET_HEARTBEAT_INTERVAL_MS);
  };

  #onMessage = async (message: WebSocket.MessageEvent): Promise<void> => {
    const data = JSON.parse(String(message.data)) as M;
    if (process.env.NODE_ENV !== "production") {
      this.logger?.debug({ payload: data }, "received message from ws");
    }
    await this.handleWebsocketMessage(data);
  };

  #onClose = (event: WebSocket.CloseEvent): void => {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.debug({ event }, "Received close event from ws", event);
    }
    this.cycleWebsocket();
  };
}

function awaitWebsocketOpen(
  ws: SubscriptionConnection,
  signal: AbortSignal,
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    function cleanup() {
      ws.removeEventListener("open", open);
      ws.removeEventListener("error", error);
      ws.removeEventListener("close", open);
      signal.removeEventListener("abort", open);
    }
    function open() {
      cleanup();
      resolve();
    }
    function error(evt: unknown) {
      cleanup();
      reject(new Error(String(evt)));
    }
    ws.addEventListener("open", open);
    ws.addEventListener("error", error);
    // A replaced/closed connection must release callers awaiting its opening.
    // The current connection's lifecycle owns any subsequent reconnect.
    ws.addEventListener("close", open);
    signal.addEventListener("abort", open, { once: true });
  });
}
