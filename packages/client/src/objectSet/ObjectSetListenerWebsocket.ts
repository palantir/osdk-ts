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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { Osdk } from "@osdk/client.api";
import type {
  __EXPERIMENTAL__NOT_SUPPORTED_YET_subscribe,
  EXPERIMENTAL_ObjectSetListener as ObjectSetListener,
} from "@osdk/client.api/unstable";
import type { LoadAllOntologiesResponse } from "@osdk/client.unstable";
import {
  bulkLoadOntologyEntities,
  createTemporaryObjectSet,
  loadAllOntologies,
} from "@osdk/client.unstable";
import type {
  FoundryObject,
  Message,
  Message_objectSetChanged,
  ObjectSetSubscribeRequest,
  ObjectSetSubscribeRequests,
  ObjectSetSubscribeResponses,
  ObjectUpdate_object,
  RefreshObjectSet,
  StreamMessage,
  StreamMessage_objectSetChanged,
  SubscriptionClosed,
} from "@osdk/client.unstable.osw";
import { batchEnableWatcher } from "@osdk/client.unstable.osw";
import {
  type ObjectSet,
  type OntologyObjectV2,
} from "@osdk/internal.foundry.core";
import * as OntologiesV2 from "@osdk/internal.foundry.ontologiesv2";
import type { ConjureContext } from "conjure-lite";
import WebSocket from "isomorphic-ws";
import invariant from "tiny-invariant";
import { metadataCacheClient } from "../__unstable/ConjureSupport.js";
import type { Logger } from "../Logger.js";
import type { ClientCacheKey, MinimalClient } from "../MinimalClientContext.js";
import { convertWireToOsdkObjects } from "../object/convertWireToOsdkObjects.js";
import {
  getObjectSetBaseType,
  toConjureObjectSet,
} from "./toConjureObjectSet.js";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const MINIMUM_RECONNECT_DELAY_MS = 5 * 1000;

/** Noop function to reduce conditional checks */
function doNothing() {}

/**
 * Converts an ObjectSetListener to one where all the functions are defined.
 */
function fillOutListener<Q extends ObjectOrInterfaceDefinition>(
  { onChange = doNothing, onError = doNothing, onOutOfDate = doNothing }:
    ObjectSetListener<Q>,
): Required<ObjectSetListener<Q>> {
  return { onChange, onError, onOutOfDate };
}

interface Subscription<Q extends ObjectOrInterfaceDefinition> {
  temporaryObjectSetId?: string;
  listener: Required<ObjectSetListener<Q>>;
  objectSet: ObjectSet;
  expiry?: ReturnType<typeof setTimeout>;
  subscriptionId: string;
  status:
    | "preparing"
    | "subscribed"
    | "done"
    | "expired"
    | "error"
    | "reconnecting";
}

function isReady<Q extends ObjectOrInterfaceDefinition>(
  sub: Subscription<Q>,
): sub is Subscription<Q> & { temporaryObjectSetId: string } {
  return sub.temporaryObjectSetId != null;
}

function subscriptionIsDone(sub: Subscription<any>) {
  return sub.status === "done" || sub.status === "error";
}

/** @internal */
export class ObjectSetListenerWebsocket {
  static #instances = new WeakMap<
    ClientCacheKey,
    ObjectSetListenerWebsocket
  >();
  readonly OBJECT_SET_EXPIRY_MS: number;
  readonly MINIMUM_RECONNECT_DELAY_MS: number;

  // FIXME
  static getInstance(client: MinimalClient): ObjectSetListenerWebsocket {
    let instance = ObjectSetListenerWebsocket.#instances.get(
      client.clientCacheKey,
    );
    if (instance == null) {
      instance = new ObjectSetListenerWebsocket(client);
      ObjectSetListenerWebsocket.#instances.set(
        client.clientCacheKey,
        instance,
      );
    }
    return instance;
  }

  #ws: WebSocket | undefined;
  #lastWsConnect = 0;
  #client: MinimalClient;

  #logger?: Logger;

  /**
   * map of requestId to all active subscriptions at the time of the request
   */
  #pendingSubscriptions = new Map<
    string,
    Subscription<any>[]
  >();

  /**
   * Map of subscriptionId to Subscription. Note: the subscriptionId may be
   * temporary and not the actual subscriptionId from the server.
   */
  #subscriptions = new Map<
    string,
    Subscription<any>
  >();

  #oswContext: ConjureContext;
  #metadataContext: ConjureContext;
  #ossContext: ConjureContext;

  #maybeDisconnectTimeout: ReturnType<typeof setTimeout> | undefined;

  // DO NOT CONSTRUCT DIRECTLY. ONLY EXPOSED AS A TESTING SEAM
  constructor(
    client: MinimalClient,
    {
      objectSetExpiryMs = ONE_DAY_MS,
      minimumReconnectDelayMs = MINIMUM_RECONNECT_DELAY_MS,
    } = {},
  ) {
    this.OBJECT_SET_EXPIRY_MS = objectSetExpiryMs;
    this.MINIMUM_RECONNECT_DELAY_MS = minimumReconnectDelayMs;
    this.#client = client;
    this.#logger = client.logger?.child({}, {
      msgPrefix: "<OSW> ",
    });
    invariant(
      client.baseUrl.startsWith("https://")
        || client.baseUrl.startsWith("http://"),
      "Stack must be a URL",
    );

    this.#oswContext = {
      baseUrl: client.baseUrl,
      servicePath: "/object-set-watcher/api",
      fetchFn: client.fetch,
      tokenProvider: async () => await client.tokenProvider(),
    };
    this.#ossContext = {
      ...this.#oswContext,
      servicePath: "/object-set-service/api",
    };
    this.#metadataContext = {
      ...this.#oswContext,
      servicePath: "/ontology-metadata/api",
    };
  }

  async subscribe<Q extends ObjectOrInterfaceDefinition>(
    objectSet: ObjectSet,
    listener: ObjectSetListener<Q>,
  ): Promise<() => void> {
    if (process.env.TARGET !== "browser") {
      // Node 18 does not expose 'crypto' on globalThis, so we need to do it ourselves. This
      // will not be needed after our minimum version is 19 or greater.
      globalThis.crypto ??= (await import("node:crypto")).webcrypto as any;
    }
    const sub: Subscription<Q> = {
      listener: fillOutListener<Q>(listener),
      objectSet,
      status: "preparing",

      // Since we don't have a real subscription id yet but we need to keep
      // track of this reference, we can just use a random uuid.
      subscriptionId: `TMP-${crypto.randomUUID()}`,
    };
    this.#subscriptions.set(sub.subscriptionId, sub);

    // actually prepares the subscription, ensures the ws is ready, and sends
    // a subscribe message. We don't want to block on this.
    this.#initiateSubscribe(sub);

    return () => {
      this.#unsubscribe(sub);
    };
  }

  /**
   * Called at least once for every subscription.
   *
   * - Resets pending expiry
   * - Recreates temporary object set
   * - Triggers a full subscribe message
   *
   * @returns
   */
  async #initiateSubscribe(sub: Subscription<any>) {
    if (process?.env?.NODE_ENV !== "production") {
      this.#logger?.trace("#initiateSubscribe()");
    }
    if (sub.expiry) {
      clearTimeout(sub.expiry);
    }
    // expiry is tied to the temporary object set, which is set to `timeToLive: "ONE_DAY"`
    // in `#createTemporaryObjectSet`. They should be in sync
    sub.expiry = setTimeout(() => this.#expire(sub), this.OBJECT_SET_EXPIRY_MS);

    const ontologyRid = await this.#client.ontologyRid;

    try {
      const [temporaryObjectSet] = await Promise.all([
        // create a time-bounded object set representation for watching
        this.#createTemporaryObjectSet(sub.objectSet),

        this.#ensureWebsocket(),

        // look up the object type's rid and ensure that we have enabled object set watcher for that rid
        // TODO ???
        getObjectSetBaseType(sub.objectSet).then(baseType =>
          OntologiesV2.ObjectTypesV2.get(
            this.#client,
            ontologyRid,
            baseType,
          )
        ).then(
          objectType => this.#enableObjectSetsWatcher([objectType.rid]),
        ),
      ]);

      // the consumer may have already unsubscribed before we are ready to request a subscription
      // so we have to acquire the pendingSubscription after the await.
      if (subscriptionIsDone(sub)) {
        return;
      }

      // Use new temporary object set id
      sub.temporaryObjectSetId = temporaryObjectSet.objectSetRid;

      // if we aren't open, then this happens after we #onConnect
      if (this.#ws?.readyState === WebSocket.OPEN) {
        this.#sendSubscribeMessage();
      }
    } catch (error) {
      this.#logger?.error(error, "Error in #initiateSubscribe");
      sub.listener.onError(error);
    }
  }

  #sendSubscribeMessage() {
    if (process?.env?.NODE_ENV !== "production") {
      this.#logger?.trace("#sendSubscribeMessage()");
    }
    // If two calls to `.subscribe()` happen at once (or if the connection is reset),
    // we may have multiple subscriptions that don't have a subscriptionId yet,
    // so we filter those out.
    const readySubs = [...this.#subscriptions.values()].filter(isReady);

    if (readySubs.length === 0) {
      if (process?.env?.NODE_ENV !== "production") {
        this.#logger?.trace(
          "#sendSubscribeMessage(): aborting due to no ready subscriptions",
        );
      }

      return;
    }

    // Assumes the node 18 crypto fallback to globalThis in `subscribe` has happened.
    const id = crypto.randomUUID();
    // responses come back as an array of subIds, so we need to know the sources
    this.#pendingSubscriptions.set(id, readySubs);

    // every subscribe message "overwrites" the previous ones that are not
    // re-included, so we have to reconstitute the entire list of subscriptions
    const subscribe: ObjectSetSubscribeRequests = {
      id,
      requests: readySubs.map<ObjectSetSubscribeRequest>((
        { temporaryObjectSetId },
      ) => ({
        objectSet: temporaryObjectSetId!,
        objectSetContext: {
          objectSetFilterContext: { parameterOverrides: {} },
        },
        watchAllLinks: false,
      })),
    };

    if (process?.env?.NODE_ENV !== "production") {
      this.#logger?.trace(
        { payload: subscribe },
        "sending subscribe message",
      );
    }

    this.#ws?.send(JSON.stringify(subscribe));
  }

  #expire(sub: Subscription<any>) {
    if (process?.env?.NODE_ENV !== "production") {
      this.#logger?.trace({ subscription: sub }, "#expire()");
    }
    // the temporary ObjectSet has expired, we should re-subscribe which will cause the
    // listener to get an onOutOfDate message when it becomes subscribed again
    sub.status = "expired";
    this.#initiateSubscribe(sub);
  }

  #unsubscribe<Q extends ObjectOrInterfaceDefinition>(
    sub: Subscription<Q>,
    newStatus: "done" | "error" = "done",
  ) {
    if (subscriptionIsDone(sub)) {
      // if we are already done, we don't need to do anything
      return;
    }

    sub.status = newStatus;
    // make sure listeners do nothing now
    sub.listener = fillOutListener<Q>({});
    if (sub.expiry) {
      clearTimeout(sub.expiry);
      sub.expiry = undefined;
    }
    this.#subscriptions.delete(sub.subscriptionId);

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
      if (this.#subscriptions.size === 0) {
        this.#cycleWebsocket();
      }
    }, 15_000 /* ms */);
  }

  async #ensureWebsocket() {
    if (this.#ws == null) {
      const { baseUrl, tokenProvider } = this.#client;
      const base = new URL(baseUrl);
      // TODO: This should be a different endpoint
      const url = `wss://${base.host}/object-set-watcher/ws/subscriptions`;
      const token = await tokenProvider();

      // tokenProvider is async, there could potentially be a race to create the websocket.
      // Only the first call to reach here will find a null this.#ws, the rest will bail out
      if (this.#ws == null) {
        // TODO this can probably be exponential backoff with jitter
        // don't reconnect more quickly than MINIMUM_RECONNECT_DELAY
        const nextConnectTime = (this.#lastWsConnect ?? 0)
          + this.MINIMUM_RECONNECT_DELAY_MS;
        if (nextConnectTime > Date.now()) {
          await new Promise((resolve) => {
            setTimeout(resolve, nextConnectTime - Date.now());
          });
        }

        this.#lastWsConnect = Date.now();

        // we again may have lost the race after our minimum backoff time
        if (this.#ws == null) {
          if (process?.env?.NODE_ENV !== "production") {
            this.#logger?.trace("Creating websocket");
          }
          this.#ws = new WebSocket(url, [`Bearer-${token}`]);
          this.#ws.addEventListener("close", this.#onClose);
          this.#ws.addEventListener("message", this.#onMessage);
          this.#ws.addEventListener("open", this.#onOpen);
        }
      }

      // Allow await-ing the websocket open event if it isn't open already.
      // This needs to happen even for callers that didn't just create this.#ws
      if (this.#ws.readyState === WebSocket.CONNECTING) {
        const ws = this.#ws;
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
          function error(evt: unknown) {
            cleanup();
            reject(evt);
          }
          ws.addEventListener("open", open);
          ws.addEventListener("error", error);
          ws.addEventListener("close", cleanup);
        });
      }
    }
  }

  #onOpen = () => {
    // resubscribe all of the listeners
    this.#sendSubscribeMessage();
  };

  #onMessage = async (message: WebSocket.MessageEvent) => {
    const data = JSON.parse(message.data.toString()) as
      | StreamMessage
      | Message;

    if (process?.env?.NODE_ENV !== "production") {
      this.#logger?.trace({ payload: data }, "received message from ws");
    }

    switch (data.type) {
      case "objectSetChanged":
        return this.#handleMessage_objectSetChanged(data.objectSetChanged);

      case "refreshObjectSet":
        return this.#handleMessage_refreshObjectSet(data.refreshObjectSet);

      case "subscribeResponses":
        return this.#handleMessage_subscribeResponses(data.subscribeResponses);

      case "subscriptionClosed": {
        const payload = data.subscriptionClosed;

        return this.#handleMessage_subscriptionClosed(payload);
      }

      default:
        const _: never = data;
        invariant(false, "Unexpected message type");
    }
  };

  #handleMessage_objectSetChanged = async (
    payload:
      | StreamMessage_objectSetChanged["objectSetChanged"]
      | Message_objectSetChanged["objectSetChanged"],
  ) => {
    const sub = this.#subscriptions.get(payload.id);
    invariant(sub, `Expected subscription id ${payload.id}`);

    if ("confidenceValue" in payload) {
      sub.listener.onOutOfDate();
      return;
    }

    const objects = payload.updates.filter(
      function(a): a is ObjectUpdate_object {
        return a.type === "object";
      },
    ).map(a => a.object);

    invariant(
      objects.length === payload.updates.length,
      "currently only support full updates not reference updates",
    );

    sub.listener.onChange(
      await convertFoundryToOsdkObjects(
        this.#client,
        this.#metadataContext,
        objects,
      ) as Array<Osdk<any>>,
    );
  };

  #handleMessage_refreshObjectSet = (payload: RefreshObjectSet) => {
    const sub = this.#subscriptions.get(payload.id);
    invariant(sub, `Expected subscription id ${payload.id}`);
    sub.listener.onOutOfDate();
  };

  #handleMessage_subscribeResponses = (
    payload: ObjectSetSubscribeResponses,
  ) => {
    const { id, responses } = payload;

    const subs = this.#pendingSubscriptions.get(id);
    invariant(subs, `should have a pending subscription for ${id}`);
    this.#pendingSubscriptions.delete(id);

    for (let i = 0; i < responses.length; i++) {
      const sub = subs[i];
      const response = responses[i];
      switch (response.type) {
        case "error":
          sub.listener.onError(response.error);
          this.#unsubscribe(sub, "error");
          break;

        case "qos":
          // the server has requested that we tear down our websocket and reconnect to help load balance
          this.#cycleWebsocket();
          break;

        case "success":
          // `"preparing"` should only be the status on an initial subscribe.

          const shouldFireOutOfDate = sub.status === "expired"
            || sub.status === "reconnecting";

          if (process?.env?.NODE_ENV !== "production") {
            this.#logger?.trace({ shouldFireOutOfDate }, "success");
          }

          sub.status = "subscribed";
          if (sub.subscriptionId !== response.success.id) {
            // might be the temporary one
            this.#subscriptions.delete(sub.subscriptionId);
            sub.subscriptionId = response.success.id;
            this.#subscriptions.set(sub.subscriptionId, sub); // future messages come by this subId
          }
          if (shouldFireOutOfDate) sub.listener.onOutOfDate();

          break;
        default:
          const _: never = response;
          sub.listener.onError(response);
      }
    }
  };

  #handleMessage_subscriptionClosed(payload: SubscriptionClosed) {
    const sub = this.#subscriptions.get(payload.id);
    invariant(sub, `Expected subscription id ${payload.id}`);
    sub.listener.onError(payload.error);
    this.#unsubscribe(sub, "error");
  }

  #onClose = (event: WebSocket.CloseEvent) => {
    if (process?.env?.NODE_ENV !== "production") {
      this.#logger?.trace({ event }, "Received close event from ws", event);
    }
    // TODO we should probably throttle this so we don't abuse the backend
    this.#cycleWebsocket();
  };

  async #enableObjectSetsWatcher(objectTypeRids: string[]) {
    return batchEnableWatcher(this.#oswContext, {
      requests: objectTypeRids,
    });
  }

  async #createTemporaryObjectSet(
    objectSet: ObjectSet,
  ) {
    const objectSetBaseType = await getObjectSetBaseType(objectSet);
    const mcc = await metadataCacheClient(this.#client);
    const objectInfo = await mcc.forObjectByApiName(objectSetBaseType);
    const propMapping = await objectInfo.getPropertyMapping();

    const temporaryObjectSet = await createTemporaryObjectSet(
      this.#ossContext,
      {
        objectSet: toConjureObjectSet(objectSet, propMapping!),
        timeToLive: "ONE_DAY", // MUST keep in sync with the value for expiry in `#initiateSubscribe`.
        objectSetFilterContext: { parameterOverrides: {} },
      },
    );
    return { objectSetRid: temporaryObjectSet.objectSetRid };
  }

  #cycleWebsocket = () => {
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

    // if we have any listeners that are still depending on us, go ahead and reopen the websocket
    if (this.#subscriptions.size > 0) {
      if (process?.env?.NODE_ENV !== "production") {
        for (const s of this.#subscriptions.values()) {
          invariant(
            s.status !== "done" && s.status !== "error",
            "should not have done/error subscriptions still",
          );
        }
      }

      for (const s of this.#subscriptions.values()) {
        if (s.status === "subscribed") s.status = "reconnecting";
      }

      this.#ensureWebsocket();
    }
  };
}

async function convertFoundryToOsdkObjects(
  client: MinimalClient,
  ctx: ConjureContext,
  objects: ReadonlyArray<FoundryObject>,
): Promise<Array<Osdk<any>>> {
  const osdkObjects: OntologyObjectV2[] = await Promise.all(
    objects.map(async object => {
      const propertyMapping = await (await (await metadataCacheClient(client))
        .forObjectByRid(object.type))
        .getPropertyMapping();

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
        [
          "$apiName",
          propertyMapping?.apiName,
        ],
      ]);
      return convertedObject;
    }),
  );

  // doesn't care about interfaces
  return await convertWireToOsdkObjects(client, osdkObjects, undefined) as Osdk<
    any
  >[];
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
  client: MinimalClient,
  ctx: ConjureContext,
  objectApiName: string,
) {
  if (objectApiNameToRid.has(objectApiName)) {
    return objectTypeMapping.get(ctx)?.get(
      objectApiNameToRid.get(objectApiName)!,
    );
  }

  const ontologyRid = await client.ontologyRid;

  const wireObjectType = await OntologiesV2.ObjectTypesV2
    .get(
      client,
      ontologyRid,
      objectApiName,
    );

  return getOntologyPropertyMappingForRid(
    ctx,
    ontologyRid,
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
      datasourceTypes: [],
      objectTypes: [{
        identifier: {
          type: "objectTypeRid" as const,
          objectTypeRid: objectRid,
        },
        versionReference: {
          type: "ontologyVersion" as const,
          ontologyVersion: ontologyVersion,
        },
      }],
      linkTypes: [],
      sharedPropertyTypes: [],
      interfaceTypes: [],
      typeGroups: [],
      loadRedacted: false,
      includeObjectTypeCount: undefined,
      includeObjectTypesWithoutSearchableDatasources: true,
      includeEntityMetadata: undefined,
    };
    const entities = await bulkLoadOntologyEntities(ctx, undefined, body);

    invariant(
      entities.objectTypes[0]?.objectType,
      "object type should be loaded",
    );

    const propertyIdToApiNameMapping: Record<string, string> = Object
      .fromEntries(
        Object.values(entities.objectTypes[0].objectType.propertyTypes).map(
          property => {
            return [property.id, property.apiName!];
          },
        ),
      );

    const propertyApiNameToIdMapping: Record<string, string> = Object
      .fromEntries(
        Object.values(entities.objectTypes[0].objectType.propertyTypes).map(
          property => {
            return [property.apiName!, property.id];
          },
        ),
      );

    objectTypeMapping.get(ctx)?.set(objectRid, {
      apiName: entities.objectTypes[0].objectType.apiName!,
      id: entities.objectTypes[0].objectType.id,
      propertyIdToApiNameMapping,
      propertyApiNameToIdMapping,
    });

    objectApiNameToRid.set(
      entities.objectTypes[0].objectType.apiName!,
      objectRid,
    );
  }

  return objectTypeMapping.get(ctx)?.get(objectRid);
}
