/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectTypesFrom, OntologyDefinition } from "@osdk/api";
import type { ClientContext } from "@osdk/shared.net";
import type { ConjureContext } from "conjure-lite";
import WebSocket from "isomorphic-ws";
import { createTemporaryObjectSet } from "../generated/object-set-service/api/ObjectSetService.js";
import type { FoundryObject } from "../generated/object-set-watcher/object/FoundryObject.js";
import { batchEnableWatcher } from "../generated/object-set-watcher/ObjectSetWatchService.js";
import type { StreamMessage } from "../generated/object-set-watcher/StreamMessage.js";
import type { OsdkObject } from "../OsdkObject.js";
import { Deferred } from "./Deferred.js";
import type { ObjectSet } from "./ObjectSet.js";
import type { ObjectSetListener } from "./ObjectSetWatcher.js";

export class ObjectSetWatcherWebsocket<
  O extends OntologyDefinition<any, any, any>,
> {
  static #instances = new WeakMap<
    ClientContext<any>,
    ObjectSetWatcherWebsocket<any>
  >();

  static getInstance<O extends OntologyDefinition<any, any, any>>(
    client: ClientContext<O>,
  ) {
    let instance = ObjectSetWatcherWebsocket.#instances.get(client);
    if (instance == null) {
      instance = new ObjectSetWatcherWebsocket(client);
      ObjectSetWatcherWebsocket.#instances.set(client, instance);
    }
    return instance;
  }

  #ws: WebSocket | undefined;
  #client: ClientContext<O>;
  #pendingListeners = new Map<
    string,
    { deferred: Deferred<() => void>; listener: ObjectSetListener<O, any> }
  >();
  #listeners = new Map<string, ObjectSetListener<O, any>>();
  #conjureContext: ConjureContext;

  private constructor(client: ClientContext<O>) {
    this.#client = client;

    const stackUrl = new URL(client.stack);
    this.#conjureContext = {
      baseUrl: stackUrl.origin,
      servicePath: "object-set-watcher/api",
      fetchFn: client.fetch,
      tokenProvider: async () => await client.tokenProvider(),
    };
  }

  async subscribe<K extends ObjectTypesFrom<O>>(
    objectSet: ObjectSet<O, K>,
    listener: ObjectSetListener<O, K>,
  ): Promise<() => void> {
    const [temporaryObjectSet] = await Promise.all([
      // create a time-bounded object set representation for watching
      this.#createTemporaryObjectSet(objectSet),

      this.#ensureWebsocket(),

      // look up the object type's rid and ensure that we have enabled object set watcher for that rid
      this.#getObjectType(
        this.#client.ontology.metadata.ontologyRid,
        getObjectSetBaseType(objectSet),
      ).then(objectTypeMetadata =>
        this.#enableObjectSetsWatcher([objectTypeMetadata.rid])
      ),
    ]);

    // subscribe to object set
    const requestId = crypto.randomUUID();
    const subscribe = {};

    const deferred = new Deferred<() => void>();

    this.#pendingListeners.set(requestId, { deferred, listener });
    this.#ws?.send(JSON.stringify(subscribe));

    return deferred.promise;
  }

  async #ensureWebsocket() {
    if (this.#ws == null) {
      const { stack, tokenProvider } = this.#client;
      const base = new URL(stack);
      // TODO support alternate contextPath values
      const url =
        `wss://${base.host}/object-set-watcher/ws/streamSubscriptions`;
      const token = await tokenProvider();
      this.#ws = new WebSocket(url, [`Bearer-${token}`]);

      this.#ws.addEventListener("error", () => {
        this.#destroyWebsocket();
      });

      this.#ws.addEventListener("close", () => {
        this.#destroyWebsocket();
      });

      this.#ws.addEventListener("message", this.#onMessage);

      return new Promise<void>((resolve, reject) => {
        this.#ws!.addEventListener("open", () => {
          resolve();
        });
        this.#ws!.addEventListener("error", (event: WebSocket.ErrorEvent) => {
          reject(new Error(event.toString()));
        });
      });
    }
  }

  #onMessage(message: WebSocket.MessageEvent) {
    const data = JSON.parse(message.data.toString()) as StreamMessage;
    switch (data.type) {
      case "objectSetChanged": {
        const { id: subscriptionId, objects } = data.objectSetChanged;
        const listener = this.#listeners.get(subscriptionId);
        listener?.change?.(convertFoundryToOsdkObjects(objects));
        break;
      }

      case "refreshObjectSet": {
        const { id: subscriptionId } = data.refreshObjectSet;
        const listener = this.#listeners.get(subscriptionId);
        listener?.refresh?.();
        break;
      }

      case "subscribeResponses": {
        const { id: requestId, responses } = data.subscribeResponses;

        const pendingData = this.#pendingListeners.get(requestId);

        if (pendingData == null) {
          throw new Error(
            "Got a subscription response for a requestId we weren't expecting",
          );
        }

        const { deferred, listener } = pendingData;
        this.#pendingListeners.delete(requestId);

        if (responses.length !== 1) {
          deferred.reject(
            "Got more than one response but we only expect a single one",
          );
        }

        const response = responses[0];
        switch (response.type) {
          case "error":
            deferred.reject(response.error);
            return;
          case "qos":
            deferred.reject(response.qos);
            this.#destroyWebsocket();
            return;
          case "success":
            const { id: subscriptionId } = response.success;
            this.#listeners.set(subscriptionId, listener);
            deferred.resolve(() => {
              // TODO there isn't actually a network call to unsubscribe the socket yet
              this.#listeners.delete(subscriptionId);
              if (this.#listeners.size === 0) {
                this.#destroyWebsocket();
              }
            });
            break;
          default:
            const _: never = response;
            deferred.reject(response);
        }

        break;
      }

      default:
        const _: never = data;
    }
  }

  async #getObjectType(ontologyRid: string, objectApiName: string) {
    // call getObjectType from conjure
    return { rid: "rid" };
  }

  async #enableObjectSetsWatcher(objectTypeRids: string[]) {
    return batchEnableWatcher(this.#conjureContext, {
      requests: objectTypeRids,
    });
  }

  async #createTemporaryObjectSet<K extends ObjectTypesFrom<O>>(
    objectSet: ObjectSet<O, K>,
  ) {
    // TODO do we need to do something when the subscription expires on the server?
    createTemporaryObjectSet(this.#conjureContext, {
      objectSet: toConjureObjectSet(objectSet),
      timeToLive: "ONE_DAY",
      objectSetFilterContext: { parameterOverrides: {} as Map<any, any> },
    });
    return { objectSetRid: "objectSetRid" };
  }

  #destroyWebsocket() {
    if (this.#ws) {
      this.#ws.close();
      this.#ws = undefined;
    }

    for (const listener of this.#listeners.values()) {
      listener.cancelled?.();
    }
    this.#listeners.clear();
  }
}

function getObjectSetBaseType<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(objectSet: ObjectSet<O, K>) {
  return "baseType";
}

function toConjureObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(objectSet: ObjectSet<O, K>) {
  return undefined as any;
}

function convertFoundryToOsdkObjects<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(
  objects: ReadonlyArray<FoundryObject>,
): Array<OsdkObject<K & string>> {
  return [];
}
