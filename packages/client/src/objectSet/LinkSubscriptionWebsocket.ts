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

import type {
  LinkTypeApiNamesFor,
  ObjectIdentifiers,
  ObjectTypeDefinition,
} from "@osdk/api";
import type { LinkSubscription } from "@osdk/api/unstable";
import type {
  LinkSubscriptionObjectLocator,
  LinksMessage,
  LinkTypeSubscribeRequest,
  LinkTypeSubscribeRequests,
  ObjectSetSubscribeResponse,
} from "@osdk/foundry.ontologies";
import WebSocket from "isomorphic-ws";
import invariant from "tiny-invariant";

import type { ClientCacheKey, MinimalClient } from "../MinimalClientContext.js";
import type { SubscriptionConnection } from "../SubscriptionConnection.js";
import { ExponentialBackoff } from "../util/exponentialBackoff.js";
import {
  constructLinkSubscriptionWebsocketUrl,
  EXPONENTIAL_BACKOFF_INITIAL_DELAY_MS,
  EXPONENTIAL_BACKOFF_JITTER_FACTOR,
  EXPONENTIAL_BACKOFF_MAX_DELAY_MS,
  EXPONENTIAL_BACKOFF_MULTIPLIER,
  nextUuid,
  WEBSOCKET_HEARTBEAT_INTERVAL_MS,
  WEBSOCKET_IDLE_DISCONNECT_DELAY_MS,
} from "./ObjectSetListenerWebsocket.js";

interface Subscription<
  Q extends ObjectTypeDefinition,
  L extends LinkTypeApiNamesFor<Q>,
> {
  readonly links: readonly [L, ...ReadonlyArray<L>];
  listener: LinkSubscription.Listener<Q, L>;
  readonly objects: LinkSubscription.Args<Q, L>["objects"];
  request?: LinkTypeSubscribeRequest;
  status: "done" | "error" | "preparing" | "reconnecting" | "subscribed";
  subscriptionId: string;
}

function isReady(
  subscription: Subscription<any, any>,
): subscription is Subscription<any, any> & {
  request: LinkTypeSubscribeRequest;
} {
  return subscription.request != null;
}

function isDone(subscription: Subscription<any, any>): boolean {
  return subscription.status === "done" || subscription.status === "error";
}

/** @internal */
export class LinkSubscriptionWebsocket {
  static #instances = new WeakMap<ClientCacheKey, LinkSubscriptionWebsocket>();

  static getInstance(client: MinimalClient): LinkSubscriptionWebsocket {
    let instance = LinkSubscriptionWebsocket.#instances.get(
      client.clientCacheKey,
    );
    if (instance == null) {
      instance = new LinkSubscriptionWebsocket(client);
      LinkSubscriptionWebsocket.#instances.set(client.clientCacheKey, instance);
    }
    return instance;
  }

  readonly #backoff = new ExponentialBackoff({
    initialDelayMs: EXPONENTIAL_BACKOFF_INITIAL_DELAY_MS,
    jitterFactor: EXPONENTIAL_BACKOFF_JITTER_FACTOR,
    maxDelayMs: EXPONENTIAL_BACKOFF_MAX_DELAY_MS,
    multiplier: EXPONENTIAL_BACKOFF_MULTIPLIER,
  });
  readonly #client: MinimalClient;
  readonly #pendingSubscriptions = new Map<
    string,
    Array<Subscription<any, any>>
  >();
  readonly #subscriptions = new Map<string, Subscription<any, any>>();

  #connectionPromise: Promise<void> | undefined;
  #heartbeatInterval: ReturnType<typeof setInterval> | undefined;
  #isFirstConnection = true;
  #maybeDisconnectTimeout: ReturnType<typeof setTimeout> | undefined;
  #ws: SubscriptionConnection | undefined;

  constructor(client: MinimalClient) {
    this.#client = client;
  }

  subscribe<Q extends ObjectTypeDefinition, L extends LinkTypeApiNamesFor<Q>>(
    args: LinkSubscription.Args<Q, L>,
  ): () => void {
    const subscription: Subscription<Q, L> = {
      links: args.links,
      listener: args.listener,
      objects: args.objects,
      status: "preparing",
      subscriptionId: `TMP-${nextUuid()}`,
    };
    this.#subscriptions.set(subscription.subscriptionId, subscription);

    if (this.#maybeDisconnectTimeout != null) {
      clearTimeout(this.#maybeDisconnectTimeout);
      this.#maybeDisconnectTimeout = undefined;
    }

    void this.#prepare(subscription);
    return () => this.#unsubscribe(subscription);
  }

  async #prepare(subscription: Subscription<any, any>): Promise<void> {
    try {
      const [firstObject] = subscription.objects;
      const objectDefinition =
        await this.#client.ontologyProvider.getObjectDefinition(
          firstObject.$apiName,
        );
      if (isDone(subscription)) return;

      subscription.request = {
        linkTypes: [...subscription.links],
        selectedObjects: subscription.objects.map((object) => ({
          objectType: object.$apiName,
          primaryKey: {
            [objectDefinition.primaryKeyApiName]: object.$primaryKey,
          },
        })),
      };
      await this.#ensureWebsocket();
      if (this.#ws?.readyState === WebSocket.OPEN) {
        this.#sendSubscribeMessage();
      }
    } catch (error) {
      this.#fail(subscription, error);
    }
  }

  async #ensureWebsocket(): Promise<void> {
    if (this.#ws != null) return;
    if (this.#connectionPromise != null) return this.#connectionPromise;

    this.#connectionPromise = this.#connect();
    try {
      await this.#connectionPromise;
    } finally {
      this.#connectionPromise = undefined;
    }
  }

  async #connect(): Promise<void> {
    if (!this.#isFirstConnection) {
      await new Promise((resolve) => {
        setTimeout(resolve, this.#backoff.calculateDelay());
      });
    }
    if (this.#ws != null || this.#subscriptions.size === 0) return;

    const [ontologyRid, token] = await Promise.all([
      this.#client.ontologyRid,
      this.#client.tokenProvider(),
    ]);
    if (this.#ws != null || this.#subscriptions.size === 0) return;

    const url = constructLinkSubscriptionWebsocketUrl(
      this.#client.baseUrl,
      ontologyRid,
    );
    this.#ws = new WebSocket(url, [`Bearer-${token}`]);
    this.#ws.addEventListener("close", this.#handleClose);
    this.#ws.addEventListener("message", this.#handleMessage);
    this.#ws.addEventListener("open", this.#handleOpen);
  }

  #handleOpen = (): void => {
    this.#isFirstConnection = false;
    this.#backoff.reset();
    this.#sendSubscribeMessage();

    if (this.#heartbeatInterval != null) {
      clearInterval(this.#heartbeatInterval);
    }
    this.#heartbeatInterval = setInterval(
      this.#sendSubscribeMessage,
      WEBSOCKET_HEARTBEAT_INTERVAL_MS,
    );
  };

  #handleMessage = (message: WebSocket.MessageEvent): void => {
    const data = JSON.parse(String(message.data)) as LinksMessage;
    switch (data.type) {
      case "refresh": {
        const subscription = this.#subscriptions.get(data.id);
        if (subscription != null) {
          this.#callListener(subscription, () =>
            subscription.listener.onOutOfDate?.({
              links: data.linkTypes,
            }),
          );
        }
        return;
      }
      case "subscribeResponses":
        this.#handleSubscribeResponses(data.id, data.responses);
        return;
      case "subscriptionClosed": {
        const subscription = this.#subscriptions.get(data.id);
        if (subscription != null) {
          this.#fail(subscription, data.cause);
        }
        return;
      }
      case "updates": {
        const subscription = this.#subscriptions.get(data.id);
        if (subscription != null) {
          this.#callListener(subscription, () =>
            subscription.listener.onChange?.({
              updates: data.updates.map((update) => ({
                linkType: update.linkType,
                source: toObjectIdentifiers(update.selectedSide),
                state: update.state,
                target: toObjectIdentifiers(update.linkedSide),
              })),
            }),
          );
        }
        return;
      }
      default: {
        const unexpectedMessage: never = data;
        this.#failAll(new Error(`Unexpected message: ${unexpectedMessage}`));
      }
    }
  };

  #handleSubscribeResponses(
    requestId: string,
    responses: ReadonlyArray<ObjectSetSubscribeResponse>,
  ): void {
    const subscriptions = this.#pendingSubscriptions.get(requestId);
    if (subscriptions == null) return;
    this.#pendingSubscriptions.delete(requestId);

    responses.forEach((response, index) => {
      const subscription = subscriptions[index];
      if (subscription == null || isDone(subscription)) return;

      switch (response.type) {
        case "error":
          this.#fail(subscription, response.errors);
          return;
        case "qos":
          this.#cycleWebsocket();
          return;
        case "success": {
          const previousStatus = subscription.status;
          this.#subscriptions.delete(subscription.subscriptionId);
          subscription.status = "subscribed";
          subscription.subscriptionId = response.id;
          this.#subscriptions.set(subscription.subscriptionId, subscription);
          this.#callListener(subscription, () => {
            if (previousStatus === "reconnecting") {
              subscription.listener.onOutOfDate?.({
                links: subscription.links,
              });
            } else if (previousStatus === "preparing") {
              subscription.listener.onSuccessfulSubscription?.();
            }
          });
          return;
        }
        default: {
          const unexpectedResponse: never = response;
          this.#fail(
            subscription,
            new Error(`Unexpected response: ${unexpectedResponse}`),
          );
        }
      }
    });
  }

  #sendSubscribeMessage = (): void => {
    if (this.#ws?.readyState !== WebSocket.OPEN) return;

    const subscriptions = [...this.#subscriptions.values()].filter(isReady);
    const request: LinkTypeSubscribeRequests = {
      id: nextUuid(),
      requests: subscriptions.map((subscription) => subscription.request),
    };
    this.#pendingSubscriptions.set(request.id, subscriptions);
    this.#ws.send(JSON.stringify(request));
  };

  #unsubscribe(
    subscription: Subscription<any, any>,
    status: "done" | "error" = "done",
  ): void {
    if (isDone(subscription)) return;

    subscription.status = status;
    subscription.listener = {};
    this.#subscriptions.delete(subscription.subscriptionId);
    this.#sendSubscribeMessage();

    if (this.#maybeDisconnectTimeout != null) {
      clearTimeout(this.#maybeDisconnectTimeout);
    }
    this.#maybeDisconnectTimeout = setTimeout(() => {
      this.#maybeDisconnectTimeout = undefined;
      if (this.#subscriptions.size === 0) {
        this.#cycleWebsocket();
      }
    }, WEBSOCKET_IDLE_DISCONNECT_DELAY_MS);
  }

  #handleClose = (): void => {
    this.#cycleWebsocket();
  };

  #cycleWebsocket(): void {
    if (this.#heartbeatInterval != null) {
      clearInterval(this.#heartbeatInterval);
      this.#heartbeatInterval = undefined;
    }
    this.#pendingSubscriptions.clear();

    if (this.#ws != null) {
      this.#ws.removeEventListener("close", this.#handleClose);
      this.#ws.removeEventListener("message", this.#handleMessage);
      this.#ws.removeEventListener("open", this.#handleOpen);
      if (
        this.#ws.readyState !== WebSocket.CLOSED &&
        this.#ws.readyState !== WebSocket.CLOSING
      ) {
        this.#ws.close();
      }
      this.#ws = undefined;
    }

    if (this.#subscriptions.size > 0) {
      for (const subscription of this.#subscriptions.values()) {
        if (subscription.status === "subscribed") {
          subscription.status = "reconnecting";
        }
      }
      void this.#ensureWebsocket().catch((error) => this.#failAll(error));
    }
  }

  #callListener(
    subscription: Subscription<any, any>,
    callback: () => void,
  ): void {
    try {
      callback();
    } catch (error) {
      try {
        subscription.listener.onError?.({
          error,
          subscriptionClosed: false,
        });
      } catch (onErrorError) {
        this.#fail(subscription, onErrorError);
      }
    }
  }

  #fail(subscription: Subscription<any, any>, error: unknown): void {
    if (isDone(subscription)) return;
    try {
      subscription.listener.onError?.({ error, subscriptionClosed: true });
    } finally {
      this.#unsubscribe(subscription, "error");
    }
  }

  #failAll(error: unknown): void {
    for (const subscription of this.#subscriptions.values()) {
      this.#fail(subscription, error);
    }
    this.#cycleWebsocket();
  }
}

function toObjectIdentifiers(
  locator: LinkSubscriptionObjectLocator,
): ObjectIdentifiers<ObjectTypeDefinition> {
  const primaryKey = Object.values(locator.primaryKey)[0];
  invariant(primaryKey != null, "Expected a link object primary key.");
  return {
    $apiName: locator.objectType,
    $primaryKey: primaryKey,
  };
}
