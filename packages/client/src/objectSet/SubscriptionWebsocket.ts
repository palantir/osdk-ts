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

/**
 * The lifecycle of a single subscription multiplexed onto a shared websocket.
 *
 * `preparing` covers everything up to the first successful subscribe response,
 * `expired`/`reconnecting` mean the subscription needs to be re-established (and
 * that the consumer should be told its data is out of date), and `done`/`error`
 * are terminal.
 */
export type SubscriptionStatus =
  | "done"
  | "error"
  | "expired"
  | "preparing"
  | "reconnecting"
  | "subscribed";

export interface BaseSubscription {
  status: SubscriptionStatus;

  /**
   * Note: this may be a temporary client-generated id until the server replies
   * with a subscribe response.
   */
  subscriptionId: string;
}

/** Every subscribe request envelope is correlated back to its responses by `id`. */
export interface SubscribeRequests {
  readonly id: string;
}

export function isSubscriptionDone(subscription: BaseSubscription): boolean {
  return subscription.status === "done" || subscription.status === "error";
}

/**
 * Shared websocket plumbing for the ontology subscription endpoints.
 *
 * Owns the single multiplexed connection and everything that is identical
 * across endpoints: connecting (with exponential backoff), resubscribing on
 * open, the keepalive heartbeat, correlating subscribe responses back to their
 * requests, tearing down and cycling the socket, and disconnecting once the last
 * subscription goes away. Subclasses supply the endpoint-specific pieces: how to
 * open a connection, how to serialize a subscribe request, and how to interpret
 * a server message.
 *
 * @internal
 */
export abstract class SubscriptionWebsocket<S extends BaseSubscription, M> {
  protected readonly client: MinimalClient;
  protected readonly logger: Logger | undefined;

  /** Map of requestId to all subscriptions included in that request. */
  protected readonly pendingSubscriptions = new Map<string, Array<S>>();

  /** Map of subscriptionId (possibly still temporary) to subscription. */
  protected readonly subscriptions = new Map<string, S>();

  protected ws: SubscriptionConnection | undefined;

  #backoff: ExponentialBackoff;
  #heartbeatInterval: ReturnType<typeof setInterval> | undefined;
  #isFirstConnection = true;
  #maybeDisconnectTimeout: ReturnType<typeof setTimeout> | undefined;

  constructor(client: MinimalClient, loggerPrefix: string) {
    this.client = client;
    this.logger = client.logger?.child({}, { msgPrefix: loggerPrefix });
    this.#backoff = new ExponentialBackoff({
      initialDelayMs: EXPONENTIAL_BACKOFF_INITIAL_DELAY_MS,
      jitterFactor: EXPONENTIAL_BACKOFF_JITTER_FACTOR,
      maxDelayMs: EXPONENTIAL_BACKOFF_MAX_DELAY_MS,
      multiplier: EXPONENTIAL_BACKOFF_MULTIPLIER,
    });
    invariant(
      client.baseUrl.startsWith("https://") ||
        client.baseUrl.startsWith("http://"),
      "Stack must be a URL",
    );
  }

  /** Opens a connection to the endpoint this websocket subscribes against. */
  protected abstract createConnection(): Promise<SubscriptionConnection>;

  /**
   * Builds the full subscribe envelope. Every subscribe message "overwrites" the
   * previous one, so the request must always describe every ready subscription.
   */
  protected abstract createSubscribeRequests(
    requestId: string,
    readySubscriptions: ReadonlyArray<S>,
  ): SubscribeRequests;

  /**
   * Whether the subscription has everything it needs to be included in a
   * subscribe request. Concurrent `subscribe()` calls mean some subscriptions
   * may still be resolving their ontology metadata.
   */
  protected abstract isSubscriptionReady(subscription: S): boolean;

  protected abstract handleWebsocketMessage(message: M): void;

  /** Points the subscription's listener at no-ops so it stops emitting. */
  protected abstract clearListener(subscription: S): void;

  protected sendSubscribeMessage = (): void => {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.debug("sendSubscribeMessage()");
    }

    if (this.ws?.readyState !== WebSocket.OPEN) {
      return;
    }

    const readySubscriptions = [...this.subscriptions.values()].filter(
      (subscription) => this.isSubscriptionReady(subscription),
    );

    // responses come back as an array parallel to the requests, so we need to
    // remember which subscriptions we sent and in what order
    const requestId = nextUuid();
    this.pendingSubscriptions.set(requestId, readySubscriptions);

    const request = this.createSubscribeRequests(requestId, readySubscriptions);
    if (process.env.NODE_ENV !== "production") {
      this.logger?.debug({ payload: request }, "sending subscribe message");
    }
    this.ws.send(JSON.stringify(request));
  };

  /**
   * Registers a new subscription and kicks off the connect/subscribe flow.
   * Cancels any pending idle disconnect so a subscribe that immediately follows
   * an unsubscribe reuses the existing connection.
   */
  protected addSubscription(subscription: S): void {
    this.subscriptions.set(subscription.subscriptionId, subscription);
    if (this.#maybeDisconnectTimeout != null) {
      clearTimeout(this.#maybeDisconnectTimeout);
      this.#maybeDisconnectTimeout = undefined;
    }
  }

  /**
   * Re-keys a subscription from its temporary id to the server-assigned one so
   * that subsequent messages for it can be routed.
   */
  protected adoptSubscriptionId(subscription: S, subscriptionId: string): void {
    if (subscription.subscriptionId === subscriptionId) return;
    this.subscriptions.delete(subscription.subscriptionId);
    subscription.subscriptionId = subscriptionId;
    this.subscriptions.set(subscriptionId, subscription);
  }

  protected endSubscription(
    subscription: S,
    newStatus: "done" | "error" = "done",
  ): void {
    if (isSubscriptionDone(subscription)) {
      return;
    }

    subscription.status = newStatus;
    this.clearListener(subscription);

    this.subscriptions.delete(subscription.subscriptionId);
    this.sendSubscribeMessage();

    // If we have no more subscriptions, we can disconnect the websocket
    // however we should wait a bit to see if we get any more subscriptions.
    // For example, when switching between react views, you may unsubscribe
    // in the old view and subscribe in the new view. We don't need to re-establish
    // the websocket connection in that case.
    if (this.#maybeDisconnectTimeout != null) {
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
    if (this.ws != null) {
      return;
    }

    // Only apply exponential backoff delay on reconnection attempts, not the first connection
    if (!this.#isFirstConnection) {
      const delay = this.#backoff.calculateDelay();
      if (process.env.NODE_ENV !== "production") {
        this.logger?.debug(
          { attempt: this.#backoff.getAttempt(), delay },
          "Waiting before reconnect",
        );
      }
      await new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }

    // we may have lost the race while backing off
    if (this.ws != null) {
      return this.#awaitOpen();
    }

    if (process.env.NODE_ENV !== "production") {
      this.logger?.debug("Creating websocket");
    }
    const connection = await this.createConnection();

    // awaiting the connection factory (token/url) is another chance to lose the race
    if (this.ws != null) {
      connection.close();
    } else {
      this.ws = connection;
      this.ws.addEventListener("close", this.#onClose);
      this.ws.addEventListener("message", this.#onMessage);
      this.ws.addEventListener("open", this.#onOpen);
    }

    return this.#awaitOpen();
  }

  protected cycleWebsocket = (): void => {
    if (this.#heartbeatInterval != null) {
      clearInterval(this.#heartbeatInterval);
      this.#heartbeatInterval = undefined;
    }
    this.pendingSubscriptions.clear();

    if (this.ws != null) {
      this.ws.removeEventListener("close", this.#onClose);
      this.ws.removeEventListener("message", this.#onMessage);
      this.ws.removeEventListener("open", this.#onOpen);

      if (
        this.ws.readyState !== WebSocket.CLOSING &&
        this.ws.readyState !== WebSocket.CLOSED
      ) {
        this.ws.close();
      }
      this.ws = undefined;
    }

    // if we have any listeners that are still depending on us, go ahead and reopen the websocket
    if (this.subscriptions.size > 0) {
      if (process.env.NODE_ENV !== "production") {
        for (const subscription of this.subscriptions.values()) {
          invariant(
            !isSubscriptionDone(subscription),
            "should not have done/error subscriptions still",
          );
        }
      }

      for (const subscription of this.subscriptions.values()) {
        if (subscription.status === "subscribed") {
          subscription.status = "reconnecting";
        }
      }

      // we don't care about the result of this (we want cycleWebsocket to be fire and forget)
      // just that it happens
      void this.ensureWebsocket().catch((error) =>
        this.handleReconnectError(error),
      );
    }
  };

  /** Called when reconnecting after a socket teardown fails. */
  protected handleReconnectError(error: unknown): void {
    this.logger?.error(error, "Error reconnecting websocket");
  }

  /** Resolves once the websocket is no longer `CONNECTING`. */
  #awaitOpen(): Promise<void> {
    const ws = this.ws;
    if (ws == null || ws.readyState !== WebSocket.CONNECTING) {
      return Promise.resolve();
    }
    return awaitWebsocketOpen(ws);
  }

  #onOpen = (): void => {
    // Mark that we've successfully connected at least once
    this.#isFirstConnection = false;
    // Reset backoff on successful connection
    this.#backoff.reset();
    // resubscribe all of the listeners
    this.sendSubscribeMessage();

    // Start heartbeat to keep connection alive
    if (this.#heartbeatInterval != null) {
      clearInterval(this.#heartbeatInterval);
    }
    this.#heartbeatInterval = setInterval(
      this.sendSubscribeMessage,
      WEBSOCKET_HEARTBEAT_INTERVAL_MS,
    );
  };

  #onMessage = (message: WebSocket.MessageEvent): void => {
    const data = JSON.parse(String(message.data)) as M;
    if (process.env.NODE_ENV !== "production") {
      this.logger?.debug({ payload: data }, "received message from ws");
    }
    this.handleWebsocketMessage(data);
  };

  #onClose = (event: WebSocket.CloseEvent): void => {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.debug({ event }, "Received close event from ws");
    }
    this.cycleWebsocket();
  };
}

function awaitWebsocketOpen(ws: SubscriptionConnection): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    function cleanup() {
      ws.removeEventListener("open", open);
      ws.removeEventListener("error", error);
      ws.removeEventListener("close", cleanup);
    }
    function open() {
      cleanup();
      resolve();
    }
    function error(event: unknown) {
      cleanup();
      reject(new Error(String(event)));
    }
    ws.addEventListener("open", open);
    ws.addEventListener("error", error);
    ws.addEventListener("close", cleanup);
  });
}
