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

import type {
  ObjectOrInterfaceKeysFrom,
  ObjectTypeKeysFrom,
  OntologyDefinition,
} from "@osdk/api";
import { getObjectTypeV2 } from "@osdk/gateway/requests";
import type { ObjectSet, OntologyObjectV2 } from "@osdk/gateway/types";
import { type ClientContext, createOpenApiRequest } from "@osdk/shared.net";
import type { ConjureContext } from "conjure-lite";
import WebSocket from "isomorphic-ws";
import invariant from "tiny-invariant";
import { createTemporaryObjectSet } from "../generated/object-set-service/api/ObjectSetService.js";
import type {
  Message,
  ObjectSetSubscribeRequests,
} from "../generated/object-set-watcher/index.js";
import type { FoundryObject } from "../generated/object-set-watcher/object/FoundryObject.js";
import { batchEnableWatcher } from "../generated/object-set-watcher/ObjectSetWatchService.js";
import type {
  StreamMessage,
  StreamMessage_objectSetChanged,
} from "../generated/object-set-watcher/StreamMessage.js";
import type { LoadAllOntologiesResponse } from "../generated/ontology-metadata/api/LoadAllOntologiesResponse.js";
import {
  loadAllOntologies,
  loadOntologyEntities,
} from "../generated/ontology-metadata/api/OntologyMetadataService.js";
import { convertWireToOsdkObjects } from "../object/convertWireToOsdkObjects.js";
import type { OsdkObjectFrom } from "../OsdkObjectFrom.js";
import type { ObjectSetListener } from "./ObjectSetListener.js";
import {
  getObjectSetBaseType,
  toConjureObjectSet,
} from "./toConjureObjectSet.js";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const MINIMUM_RECONNECT_DELAY_MS = 5 * 1000;

export class ObjectSetListenerWebsocket<
  O extends OntologyDefinition<any, any, any>,
> {
  static #instances = new WeakMap<
    ClientContext<any>,
    ObjectSetListenerWebsocket<any>
  >();

  static getInstance<O extends OntologyDefinition<any, any, any>>(
    client: ClientContext<O>,
  ): ObjectSetListenerWebsocket<O> {
    let instance = ObjectSetListenerWebsocket.#instances.get(client);
    if (instance == null) {
      instance = new ObjectSetListenerWebsocket(client);
      ObjectSetListenerWebsocket.#instances.set(client, instance);
    }
    return instance;
  }

  #ws: WebSocket | undefined;
  #lastWsConnect = 0;
  #client: ClientContext<O>;

  /** map of listenerId to listener */
  #listeners = new Map<
    string,
    {
      listener: ObjectSetListener<O, any>;
      subscriptionId?: string;
      objectSet: ObjectSet;
      expiry: NodeJS.Timeout;
    }
  >();

  /** map of subscriptionId to listenerId */
  #subscriptionToRequestId = new Map<string, string>();

  #conjureContext: ConjureContext;
  #metadataContext: ConjureContext;
  #ossContext: ConjureContext;

  private constructor(client: ClientContext<O>) {
    this.#client = client;

    const stackUrl = new URL(client.stack);
    this.#conjureContext = {
      baseUrl: stackUrl.origin,
      servicePath: "/object-set-watcher/api",
      fetchFn: client.fetch,
      tokenProvider: async () => await client.tokenProvider(),
    };
    this.#ossContext = {
      baseUrl: stackUrl.origin,
      servicePath: "/object-set-service/api",
      fetchFn: client.fetch,
      tokenProvider: async () => await client.tokenProvider(),
    };
    this.#metadataContext = {
      baseUrl: stackUrl.origin,
      servicePath: "/ontology-metadata/api",
      fetchFn: client.fetch,
      tokenProvider: async () => await client.tokenProvider(),
    };
  }

  subscribe<K extends ObjectOrInterfaceKeysFrom<O>>(
    objectSet: ObjectSet,
    listener: ObjectSetListener<O, K>,
  ): () => void {
    const requestId = crypto.randomUUID();
    const expiry = setTimeout(() => {
      this.#expire(requestId);
    }, ONE_DAY_MS);
    this.#listeners.set(requestId, { listener, objectSet, expiry });
    this.#subscribe(requestId, objectSet);
    return () => {
      this.#unsubscribe(requestId);
    };
  }

  async #subscribe(requestId: string, objectSet: ObjectSet) {
    try {
      const [temporaryObjectSet] = await Promise.all([
        // create a time-bounded object set representation for watching
        this.#createTemporaryObjectSet(objectSet),

        this.#ensureWebsocket(),

        // look up the object type's rid and ensure that we have enabled object set watcher for that rid
        // TODO ???
        getObjectSetBaseType(objectSet).then(baseType =>
          getObjectTypeV2(
            createOpenApiRequest(this.#client.stack, this.#client.fetch),
            this.#client.ontology.metadata.ontologyApiName,
            baseType,
          )
        ).then(
          objectType => this.#enableObjectSetsWatcher([objectType.rid]),
        ),
      ]);

      // the consumer may have already unsubscribed before we are ready to request a subscription
      if (!this.#listeners.has(requestId)) {
        return;
      }

      // subscribe to object set
      const subscribe: ObjectSetSubscribeRequests = {
        id: requestId,
        requests: [{
          objectSet: temporaryObjectSet.objectSetRid,
          objectSetContext: {
            objectSetFilterContext: { parameterOverrides: {} },
          },
          watchAllLinks: false,
        }],
      };

      this.#ws?.send(JSON.stringify(subscribe));
    } catch (error) {
      this.#getCallbackByRequestId(requestId, "onError")?.(error);
    }
  }

  #expire(requestId: string) {
    // the temporary ObjectSet has expired, we should re-subscribe which will cause the
    // listener to get an onOutOfDate message when it becomes subscribed again
    const state = this.#listeners.get(requestId);
    if (state) {
      const { subscriptionId, objectSet } = state;
      if (subscriptionId) {
        state.subscriptionId = undefined;
        this.#subscriptionToRequestId.delete(subscriptionId);
      }
      this.#subscribe(requestId, objectSet);
    }
  }

  #unsubscribe(requestId: string) {
    const data = this.#listeners.get(requestId);
    if (data == null) {
      return;
    }
    this.#listeners.delete(requestId);
    clearTimeout(data.expiry);
    const { subscriptionId } = data;
    if (subscriptionId != null) {
      this.#subscriptionToRequestId.delete(subscriptionId);
    }

    if (this.#listeners.size === 0) {
      this.#destroyWebsocket();
    } else {
      // TODO backend does not yet have an unsubscribe message payload
    }
  }

  async #ensureWebsocket() {
    if (this.#ws == null) {
      const { stack, tokenProvider } = this.#client;
      const base = new URL(stack);
      // TODO: This should be a different endpoint
      const url = `wss://${base.host}/object-set-watcher/ws/subscriptions`;
      const token = await tokenProvider();

      // tokenProvider is async, there could potentially be a race to create the websocket.
      // Only the first call to reach here will find a null this.#ws, the rest will bail out
      if (this.#ws == null) {
        // TODO this can probably be exponential backoff with jitter
        // don't reconnect more quickly than MINIMUM_RECONNECT_DELAY
        const nextConnectTime = (this.#lastWsConnect ?? 0)
          + MINIMUM_RECONNECT_DELAY_MS;
        if (nextConnectTime > Date.now()) {
          await new Promise((resolve) => {
            setTimeout(resolve, nextConnectTime - Date.now());
          });
        }

        this.#lastWsConnect = Date.now();

        // we again may have lost the race after our minimum backoff time
        if (this.#ws == null) {
          this.#ws = new WebSocket(url, [`Bearer-${token}`]);
          this.#ws.addEventListener("close", this.#onClose);
          this.#ws.addEventListener("message", this.#onMessage);
          this.#ws.addEventListener("open", this.#onOpen);
        }
      }

      // Allow await-ing the websocket open event if it isn't open already.
      // This needs to happen even for callers that didn't just create this.#ws
      if (this.#ws.readyState === WebSocket.CONNECTING) {
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
  }

  #onOpen = () => {
    // resubscribe all of the listeners
    for (const [requestId, state] of this.#listeners) {
      this.#subscribe(requestId, state.objectSet);
    }
  };

  #onMessage = async (message: WebSocket.MessageEvent) => {
    const data = JSON.parse(message.data.toString()) as
      | StreamMessage
      | Message;

    switch (data.type) {
      case "objectSetChanged": {
        if ((data.objectSetChanged as any).confidenceValue) {
          this.#getCallback(
            data.objectSetChanged.id,
            "onOutOfDate",
          )?.();
          break;
        }

        const { id: subscriptionId, objects } =
          (data as StreamMessage_objectSetChanged).objectSetChanged;
        const callback = this.#getCallback(
          subscriptionId,
          "onChange",
        );

        if (callback) {
          callback(
            await convertFoundryToOsdkObjects(
              this.#client,
              this.#metadataContext,
              objects,
            ),
          );
        }
        break;
      }

      case "refreshObjectSet": {
        const { id: subscriptionId } = data.refreshObjectSet;
        this.#getCallback(subscriptionId, "onOutOfDate")?.();
        break;
      }

      case "subscribeResponses": {
        const { id: requestId, responses } = data.subscribeResponses;

        const listenerData = this.#listeners.get(requestId);
        if (listenerData == null) {
          // we got a subscription response for a requestId that we no longer have access to
          // this can happen if a consumer subscribes and unsubscribes before the subscription can come through
          return;
        }

        if (responses.length !== 1) {
          // the subscriptions that we create currently only contain a single item
          throw new Error(
            "Got more than one response but we only expect a single one",
          );
        }

        const response = responses[0];
        switch (response.type) {
          case "error":
            this.#getCallbackByRequestId(requestId, "onError")?.(
              response.error,
            );
            this.#unsubscribe(requestId);
            return;
          case "qos":
            // the server has requested that we tear down our websocket and reconnect to help load balance
            this.#destroyWebsocket();
            this.#ensureWebsocket();
            return;
          case "success":
            const { id: subscriptionId } = response.success;
            listenerData.subscriptionId = subscriptionId;
            this.#subscriptionToRequestId.set(subscriptionId, requestId);
            this.#getCallbackByRequestId(requestId, "onOutOfDate")?.();
            break;
          default:
            const _: never = response;
            this.#getCallbackByRequestId(requestId, "onError")?.(response);
        }

        break;
      }

      default:
        const _: never = data;
    }
  };

  #onClose = () => {
    this.#destroyWebsocket();
  };

  async #enableObjectSetsWatcher(objectTypeRids: string[]) {
    return batchEnableWatcher(this.#conjureContext, {
      requests: objectTypeRids,
    });
  }

  async #createTemporaryObjectSet<K extends ObjectTypeKeysFrom<O>>(
    objectSet: ObjectSet,
  ) {
    const objectSetBaseType = await getObjectSetBaseType(objectSet);
    const mapping = await getOntologyPropertyMappingForApiName(
      this.#client,
      this.#metadataContext,
      objectSetBaseType,
    );

    const temporaryObjectSet = await createTemporaryObjectSet(
      this.#ossContext,
      {
        objectSet: toConjureObjectSet(objectSet, mapping!),
        timeToLive: "ONE_DAY",
        objectSetFilterContext: { parameterOverrides: {} },
      },
    );
    return { objectSetRid: temporaryObjectSet.objectSetRid };
  }

  #destroyWebsocket = () => {
    if (this.#ws) {
      this.#ws.removeEventListener("open", this.#onOpen);
      this.#ws.removeEventListener("message", this.#onMessage);
      this.#ws.removeEventListener("close", this.#onClose);

      if (
        this.#ws.readyState !== WebSocket.CLOSING
        && this.#ws.readyState !== WebSocket.CLOSED
      ) {
        this.#ws.close();
      }
      this.#ws = undefined;
    }

    // closing the websocket clears the subscription to requestIds
    this.#subscriptionToRequestId.clear();
    for (const state of this.#listeners.values()) {
      state.subscriptionId = undefined;
    }

    // if we have any listeners that are still depending on us, go ahead and reopen the websocket
    if (this.#listeners.size > 0) {
      this.#ensureWebsocket();
    }
  };

  #getCallbackByRequestId<T extends keyof ObjectSetListener<O, any>>(
    requestId: string,
    type: T,
  ): ObjectSetListener<O, any>[T] | undefined {
    const maybeListener = this.#listeners.get(requestId);
    return maybeListener?.listener?.[type];
  }

  #getCallback<T extends keyof ObjectSetListener<O, any>>(
    subscriptionId: string,
    type: T,
  ): ObjectSetListener<O, any>[T] | undefined {
    const requestId = this.#subscriptionToRequestId.get(subscriptionId);
    if (requestId) {
      return this.#getCallbackByRequestId(requestId, type);
    }
    return;
  }
}

async function convertFoundryToOsdkObjects<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
>(
  client: ClientContext<O>,
  ctx: ConjureContext,
  objects: ReadonlyArray<FoundryObject>,
): Promise<Array<OsdkObjectFrom<K, O>>> {
  const osdkObjects: OntologyObjectV2[] = await Promise.all(
    objects.map(async object => {
      const propertyMapping = await getOntologyPropertyMappingForRid(
        ctx,
        client.ontology.metadata.ontologyRid,
        object.type,
      );
      const convertedObject: OntologyObjectV2 = Object.fromEntries([
        ...Object.entries(object.properties).map(([key, value]) => {
          return [propertyMapping?.propertyIdToApiNameMapping[key], value];
        }),
        [
          propertyMapping
            ?.propertyIdToApiNameMapping[Object.entries(object.key)[0][0]],
          Object.entries(object.key)[0][1],
        ],
        [
          "__apiName",
          propertyMapping?.apiName,
        ],
      ]);
      return convertedObject;
    }),
  );

  convertWireToOsdkObjects(client, osdkObjects);

  return osdkObjects as OsdkObjectFrom<K & String, O>[];
}

export type ObjectPropertyMapping = {
  apiName: string;
  id: string;
  propertyIdToApiNameMapping: Record<string, string>;
  propertyApiNameToIdMapping: Record<string, string>;
};

// Mapping of ObjectRid to Properties
const objectTypeMapping = new WeakMap<
  ConjureContext,
  Map<string, ObjectPropertyMapping>
>();

const objectApiNameToRid = new Map<string, string>();

async function getOntologyPropertyMappingForApiName(
  client: ClientContext<OntologyDefinition<any>>,
  ctx: ConjureContext,
  objectApiName: string,
) {
  if (objectApiNameToRid.has(objectApiName)) {
    return objectTypeMapping.get(ctx)?.get(
      objectApiNameToRid.get(objectApiName)!,
    );
  }

  const wireObjectType = await getObjectTypeV2(
    createOpenApiRequest(client.stack, client.fetch),
    client.ontology.metadata.ontologyApiName,
    objectApiName,
  );

  return getOntologyPropertyMappingForRid(
    ctx,
    client.ontology.metadata.ontologyRid,
    wireObjectType.rid,
  );
}

let cachedAllOntologies: LoadAllOntologiesResponse | undefined;
async function getOntologyVersionForRid(
  ctx: ConjureContext,
  ontologyRid: string,
) {
  cachedAllOntologies ??= await loadAllOntologies(ctx, {});
  invariant(
    cachedAllOntologies.ontologies[ontologyRid],
    "ontology should be loaded",
  );

  return cachedAllOntologies.ontologies[ontologyRid].currentOntologyVersion;
}

async function getOntologyPropertyMappingForRid(
  ctx: ConjureContext,
  ontologyRid: string,
  objectRid: string,
) {
  if (!objectTypeMapping.has(ctx)) {
    objectTypeMapping.set(ctx, new Map());
  }

  if (
    !objectTypeMapping.get(ctx)!.has(objectRid)
  ) {
    const ontologyVersion = await getOntologyVersionForRid(ctx, ontologyRid);

    const body = {
      objectTypeVersions: {
        // TODO: Undefined drops this in the body
        [objectRid]: ontologyVersion,
      },
      linkTypeVersions: {},
      loadRedacted: false,
      includeObjectTypesWithoutSearchableDatasources: true,
    };
    const entities = await loadOntologyEntities(ctx, body);

    invariant(entities.objectTypes[objectRid], "object type should be loaded");

    const propertyIdToApiNameMapping: Record<string, string> = Object
      .fromEntries(
        Object.values(entities.objectTypes[objectRid].propertyTypes).map(
          property => {
            return [property.id, property.apiName!];
          },
        ),
      );

    const propertyApiNameToIdMapping: Record<string, string> = Object
      .fromEntries(
        Object.values(entities.objectTypes[objectRid].propertyTypes).map(
          property => {
            return [property.id, property.apiName!];
          },
        ),
      );

    objectTypeMapping.get(ctx)?.set(objectRid, {
      apiName: entities.objectTypes[objectRid].apiName!,
      id: entities.objectTypes[objectRid].id,
      propertyIdToApiNameMapping,
      propertyApiNameToIdMapping,
    });

    objectApiNameToRid.set(entities.objectTypes[objectRid].apiName!, objectRid);
  }

  return objectTypeMapping.get(ctx)?.get(objectRid);
}
