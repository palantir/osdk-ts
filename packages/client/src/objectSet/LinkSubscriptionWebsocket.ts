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
import type { BaseSubscription } from "./SubscriptionWebsocket.js";
import {
  isSubscriptionDone,
  SubscriptionWebsocket,
} from "./SubscriptionWebsocket.js";
import {
  constructLinkSubscriptionWebsocketUrl,
  nextUuid,
} from "./websocketUtils.js";

interface Subscription<
  Q extends ObjectTypeDefinition,
  L extends LinkTypeApiNamesFor<Q>,
> extends BaseSubscription {
  readonly links: ReadonlyArray<L>;
  listener: LinkSubscription.Listener<Q, L>;
  readonly objects: LinkSubscription.Args<Q, L>["objects"];
  readonly objectType: Q;
  request?: LinkTypeSubscribeRequest;
}

/** @internal */
export class LinkSubscriptionWebsocket extends SubscriptionWebsocket<
  Subscription<any, any>,
  LinksMessage
> {
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

  constructor(client: MinimalClient) {
    super(client, "<LSW> ");
  }

  subscribe<Q extends ObjectTypeDefinition, L extends LinkTypeApiNamesFor<Q>>(
    objectType: Q,
    args: LinkSubscription.Args<Q, L>,
  ): () => void {
    invariant(
      args.links.length > 0,
      "At least one link type is required to subscribe to links.",
    );
    invariant(
      args.objects.length > 0,
      "At least one object is required to subscribe to links.",
    );

    const subscription: Subscription<Q, L> = {
      links: args.links,
      listener: args.listener,
      objects: args.objects,
      objectType,
      status: "preparing",
      subscriptionId: `TMP-${nextUuid()}`,
    };
    this.subscriptions.set(subscription.subscriptionId, subscription);
    this.cancelIdleDisconnect();

    void this.#initiateSubscribe(subscription);

    return () => this.endSubscription(subscription);
  }

  protected override async createConnection(): Promise<SubscriptionConnection> {
    const [ontologyRid, token] = await Promise.all([
      this.client.ontologyRid,
      this.client.tokenProvider(),
    ]);
    const url = constructLinkSubscriptionWebsocketUrl(
      this.client.baseUrl,
      ontologyRid,
    );
    return new WebSocket(url, [`Bearer-${token}`]);
  }

  protected override createSubscribeRequests(
    requestId: string,
    readySubscriptions: ReadonlyArray<Subscription<any, any>>,
  ): LinkTypeSubscribeRequests {
    return {
      id: requestId,
      requests: readySubscriptions.map((subscription) => {
        invariant(subscription.request != null, "Expected a prepared request.");
        return subscription.request;
      }),
    };
  }

  protected override isSubscriptionReady(
    subscription: Subscription<any, any>,
  ): boolean {
    return subscription.request != null;
  }

  protected override clearListener(subscription: Subscription<any, any>): void {
    subscription.listener = {};
  }

  protected override reconnect(): void {
    void this.ensureWebsocket().catch((error) => this.#failAll(error));
  }

  protected override cycleWebsocket(): void {
    this.pendingSubscriptions.clear();
    super.cycleWebsocket();
  }

  protected override handleWebsocketMessage(message: LinksMessage): void {
    switch (message.type) {
      case "refresh": {
        const subscription = this.subscriptions.get(message.id);
        if (subscription != null) {
          this.#callListener(subscription, () =>
            subscription.listener.onOutOfDate?.({
              links: message.linkTypes,
            }),
          );
        }
        return;
      }
      case "subscribeResponses":
        this.#handleSubscribeResponses(message.id, message.responses);
        return;
      case "subscriptionClosed": {
        const subscription = this.subscriptions.get(message.id);
        if (subscription != null) {
          this.#fail(subscription, message.cause);
        }
        return;
      }
      case "updates": {
        const subscription = this.subscriptions.get(message.id);
        if (subscription == null) return;
        for (const update of message.updates) {
          this.#callListener(subscription, () =>
            subscription.listener.onChange?.({
              linkType: update.linkType,
              source: toObjectIdentifiers(update.selectedSide),
              state: update.state,
              target: toObjectIdentifiers(update.linkedSide),
            }),
          );
        }
        return;
      }
      default: {
        const unexpectedMessage: never = message;
        this.#failAll(new Error(`Unexpected message: ${unexpectedMessage}`));
      }
    }
  }

  async #initiateSubscribe(
    subscription: Subscription<any, any>,
  ): Promise<void> {
    try {
      const objectDefinition =
        await this.client.ontologyProvider.getObjectDefinition(
          subscription.objectType.apiName,
        );

      if (isSubscriptionDone(subscription)) return;

      subscription.request = {
        linkTypes: [...subscription.links],
        selectedObjects: subscription.objects.map((object) => ({
          objectType: subscription.objectType.apiName,
          primaryKey: {
            [objectDefinition.primaryKeyApiName]:
              typeof object === "object" ? object.$primaryKey : object,
          },
        })),
      };

      await this.ensureWebsocket();
      if (isSubscriptionDone(subscription)) return;
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.sendSubscribeMessage();
      }
    } catch (error) {
      this.logger?.error(error, "Error in #initiateSubscribe");
      this.#fail(subscription, error);
    }
  }

  #handleSubscribeResponses(
    requestId: string,
    responses: ReadonlyArray<ObjectSetSubscribeResponse>,
  ): void {
    const subscriptions = this.pendingSubscriptions.get(requestId);
    if (subscriptions == null) return;
    this.pendingSubscriptions.delete(requestId);

    responses.forEach((response, index) => {
      const subscription = subscriptions[index];
      if (subscription == null || isSubscriptionDone(subscription)) return;

      switch (response.type) {
        case "error":
          this.#fail(subscription, response.errors);
          return;
        case "qos":
          this.cycleWebsocket();
          return;
        case "success": {
          const previousStatus = subscription.status;
          this.subscriptions.delete(subscription.subscriptionId);
          subscription.status = "subscribed";
          subscription.subscriptionId = response.id;
          this.subscriptions.set(subscription.subscriptionId, subscription);
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
    if (isSubscriptionDone(subscription)) return;
    try {
      subscription.listener.onError?.({ error, subscriptionClosed: true });
    } catch (onErrorError) {
      this.logger?.error(onErrorError, "Error in onError callback");
    } finally {
      this.endSubscription(subscription, "error");
    }
  }

  #failAll(error: unknown): void {
    for (const subscription of this.subscriptions.values()) {
      this.#fail(subscription, error);
    }
    this.cycleWebsocket();
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
