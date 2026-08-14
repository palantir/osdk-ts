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
import type { MinimalClient } from "../MinimalClientContext.js";
import { ExponentialBackoff } from "../util/exponentialBackoff.js";
import {
  constructLinkSubscriptionWebsocketUrl,
  EXPONENTIAL_BACKOFF_INITIAL_DELAY_MS,
  EXPONENTIAL_BACKOFF_JITTER_FACTOR,
  EXPONENTIAL_BACKOFF_MAX_DELAY_MS,
  EXPONENTIAL_BACKOFF_MULTIPLIER,
  WEBSOCKET_HEARTBEAT_INTERVAL_MS,
} from "./ObjectSetListenerWebsocket.js";

type Status = "closed" | "preparing" | "reconnecting" | "subscribed";

/** @internal */
export class LinkSubscriptionWebsocket<
  Q extends ObjectTypeDefinition,
  L extends LinkTypeApiNamesFor<Q>,
> {
  readonly #args: LinkSubscription.Args<Q, L>;
  readonly #backoff = new ExponentialBackoff({
    initialDelayMs: EXPONENTIAL_BACKOFF_INITIAL_DELAY_MS,
    jitterFactor: EXPONENTIAL_BACKOFF_JITTER_FACTOR,
    maxDelayMs: EXPONENTIAL_BACKOFF_MAX_DELAY_MS,
    multiplier: EXPONENTIAL_BACKOFF_MULTIPLIER,
  });
  readonly #client: MinimalClient;
  readonly #pendingRequestIds = new Set<string>();

  #heartbeatInterval: ReturnType<typeof setInterval> | undefined;
  #reconnectTimeout: ReturnType<typeof setTimeout> | undefined;
  #request: LinkTypeSubscribeRequest | undefined;
  #status: Status = "preparing";
  #subscriptionId: string | undefined;
  #ws: WebSocket | undefined;

  constructor(
    client: MinimalClient,
    args: LinkSubscription.Args<Q, L>,
  ) {
    this.#args = args;
    this.#client = client;
  }

  subscribe(): { readonly unsubscribe: () => void } {
    void this.#prepare();
    return { unsubscribe: () => this.#close() };
  }

  async #prepare(): Promise<void> {
    try {
      const [firstObject] = this.#args.objects;
      const objectDefinition = await this.#client.ontologyProvider
        .getObjectDefinition(firstObject.$apiName);
      this.#request = {
        linkTypes: [...this.#args.links],
        selectedObjects: this.#args.objects.map((object) => ({
          objectType: object.$apiName,
          primaryKey: {
            [objectDefinition.primaryKeyApiName]: object.$primaryKey,
          },
        })),
      };

      if (this.#status !== "closed") {
        await this.#connect();
      }
    } catch (error) {
      this.#fail(error);
    }
  }

  async #connect(): Promise<void> {
    const [ontologyRid, token] = await Promise.all([
      this.#client.ontologyRid,
      this.#client.tokenProvider(),
    ]);
    if (this.#status === "closed") return;

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
    this.#backoff.reset();
    this.#sendSubscribeRequest();
    this.#heartbeatInterval = setInterval(
      this.#sendSubscribeRequest,
      WEBSOCKET_HEARTBEAT_INTERVAL_MS,
    );
  };

  #handleMessage = (message: WebSocket.MessageEvent): void => {
    const data = JSON.parse(String(message.data)) as LinksMessage;
    switch (data.type) {
      case "refresh": {
        if (data.id === this.#subscriptionId) {
          this.#callListener(() =>
            this.#args.listener.onOutOfDate?.({
              links: data.linkTypes as ReadonlyArray<L>,
            })
          );
        }
        return;
      }
      case "subscribeResponses":
        this.#handleSubscribeResponse(data.id, data.responses[0]);
        return;
      case "subscriptionClosed":
        if (data.id === this.#subscriptionId) {
          this.#fail(data.cause);
        }
        return;
      case "updates": {
        if (data.id === this.#subscriptionId) {
          this.#callListener(() =>
            this.#args.listener.onChange?.({
              updates: data.updates.map((update) => ({
                linkType: update.linkType,
                source: toObjectIdentifiers(update.selectedSide),
                state: update.state,
                target: toObjectIdentifiers(update.linkedSide),
              })) as ReadonlyArray<LinkSubscription.Update<Q, L>>,
            })
          );
        }
        return;
      }
      default: {
        const unexpectedMessage: never = data;
        this.#fail(new Error(`Unexpected message: ${unexpectedMessage}`));
      }
    }
  };

  #handleSubscribeResponse(
    requestId: string,
    response: ObjectSetSubscribeResponse | undefined,
  ): void {
    if (!this.#pendingRequestIds.delete(requestId) || response == null) return;

    switch (response.type) {
      case "error":
        this.#fail(response.errors);
        return;
      case "qos":
        this.#reconnect();
        return;
      case "success": {
        const previousStatus = this.#status;
        this.#status = "subscribed";
        this.#subscriptionId = response.id;
        this.#callListener(() => {
          if (previousStatus === "reconnecting") {
            this.#args.listener.onOutOfDate?.({ links: this.#args.links });
          } else if (previousStatus === "preparing") {
            this.#args.listener.onSuccessfulSubscription?.();
          }
        });
        return;
      }
      default: {
        const unexpectedResponse: never = response;
        this.#fail(new Error(`Unexpected response: ${unexpectedResponse}`));
      }
    }
  }

  #handleClose = (): void => {
    if (this.#status !== "closed") {
      this.#status = this.#status === "subscribed"
        ? "reconnecting"
        : this.#status;
      this.#clearSocket();
      this.#reconnectTimeout = setTimeout(
        () => void this.#connect().catch(error => this.#fail(error)),
        this.#backoff.calculateDelay(),
      );
    }
  };

  #sendSubscribeRequest = (): void => {
    invariant(this.#request, "Expected a prepared subscription request.");
    if (this.#ws?.readyState !== WebSocket.OPEN) return;

    const request: LinkTypeSubscribeRequests = {
      id: nextUuid(),
      requests: [this.#request],
    };
    this.#pendingRequestIds.add(request.id);
    this.#ws.send(JSON.stringify(request));
  };

  #reconnect(): void {
    if (this.#status === "subscribed") {
      this.#status = "reconnecting";
    }
    this.#ws?.close();
  }

  #callListener(callback: () => void): void {
    try {
      callback();
    } catch (error) {
      try {
        this.#args.listener.onError?.({ error, subscriptionClosed: false });
      } catch (onErrorError) {
        this.#fail(onErrorError);
      }
    }
  }

  #fail(error: unknown): void {
    if (this.#status === "closed") return;
    try {
      this.#args.listener.onError?.({ error, subscriptionClosed: true });
    } finally {
      this.#close();
    }
  }

  #close(): void {
    this.#status = "closed";
    this.#clearSocket();
    if (this.#reconnectTimeout != null) {
      clearTimeout(this.#reconnectTimeout);
      this.#reconnectTimeout = undefined;
    }
  }

  #clearSocket(): void {
    if (this.#heartbeatInterval != null) {
      clearInterval(this.#heartbeatInterval);
      this.#heartbeatInterval = undefined;
    }
    this.#pendingRequestIds.clear();
    if (this.#ws != null) {
      this.#ws.removeEventListener("close", this.#handleClose);
      this.#ws.removeEventListener("message", this.#handleMessage);
      this.#ws.removeEventListener("open", this.#handleOpen);
      if (
        this.#ws.readyState !== WebSocket.CLOSED
        && this.#ws.readyState !== WebSocket.CLOSING
      ) {
        this.#ws.close();
      }
      this.#ws = undefined;
    }
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

let uuidCounter = 0;

function nextUuid(): string {
  return `10000000-0000-0000-0000-${
    (uuidCounter++).toString().padStart(12, "0")
  }`;
}
