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
  ObjectOrInterfaceDefinition,
  ObjectSetSubscription,
  Osdk,
  PropertyKeys,
} from "@osdk/api";
import type {
  ObjectSet,
  ObjectSetStreamSubscribeRequest,
  ObjectSetStreamSubscribeRequests,
  ObjectSetSubscribeResponses,
  ObjectSetUpdates,
  ObjectState,
  RefreshObjectSet,
  StreamMessage,
  SubscriptionClosed,
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
import { constructWebsocketUrl, nextUuid } from "./websocketUtils.js";

const MINIMUM_RECONNECT_DELAY_MS = 5 * 1000;

/** Noop function to reduce conditional checks */
function doNothing() {}

/**
 * Converts an ObjectSetListener to one where all the functions are defined.
 */
function fillOutListener<
  Q extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<Q>,
  R extends boolean = false,
>({
  onChange = doNothing,
  onError = doNothing,
  onOutOfDate = doNothing,
  onSuccessfulSubscription = doNothing,
}: ObjectSetSubscription.Listener<Q, P, R>): Required<
  ObjectSetSubscription.Listener<Q, P, R>
> {
  return { onChange, onError, onOutOfDate, onSuccessfulSubscription };
}

interface Subscription<
  Q extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<Q>,
> extends BaseSubscription {
  listener: Required<ObjectSetSubscription.Listener<Q, P>>;
  requestedProperties: Array<P>;
  requestedReferenceProperties: Array<P>;
  objectSet: ObjectSet;

  isReady?: boolean;

  interfaceApiName?: string;
  primaryKeyPropertyName?: string;
  loadRids: boolean;
}

/** @internal */
export class ObjectSetListenerWebsocket extends SubscriptionWebsocket<
  Subscription<any, any>,
  StreamMessage
> {
  static #instances = new WeakMap<ClientCacheKey, ObjectSetListenerWebsocket>();
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

  #endedSubscriptions = new Set<string>();

  // DO NOT CONSTRUCT DIRECTLY. ONLY EXPOSED AS A TESTING SEAM
  constructor(
    client: MinimalClient,
    { minimumReconnectDelayMs = MINIMUM_RECONNECT_DELAY_MS } = {},
  ) {
    super(client, "<OSW> ");
    this.MINIMUM_RECONNECT_DELAY_MS = minimumReconnectDelayMs;
  }

  /**
   * Default connection factory: constructs a real `WebSocket`, resolving the URL and bearer
   * token from the client. Used when the client provides no `createSubscriptionConnection`.
   */
  protected override async createConnection(): Promise<SubscriptionConnection> {
    const factory = this.client.createSubscriptionConnection;
    if (factory != null) {
      return factory();
    }
    const url = constructWebsocketUrl(
      this.client.baseUrl,
      await this.client.ontologyRid,
    );
    const token = await this.client.tokenProvider();
    return new WebSocket(url, [`Bearer-${token}`]);
  }

  protected override createSubscribeRequests(
    requestId: string,
    readySubscriptions: ReadonlyArray<Subscription<any, any>>,
  ): ObjectSetStreamSubscribeRequests {
    return {
      id: requestId,
      requests: readySubscriptions.map<ObjectSetStreamSubscribeRequest>(
        ({ objectSet, requestedProperties, requestedReferenceProperties }) => ({
          objectSet,
          scenarioRid: this.client.scenarioRid,
          propertySet: requestedProperties,
          referenceSet: requestedReferenceProperties,
          objectLoadingResponseOptions: { shouldLoadObjectRids: true },
        }),
      ),
    };
  }

  protected override isSubscriptionReady(sub: Subscription<any, any>): boolean {
    return sub.isReady != null;
  }

  protected override clearListener(sub: Subscription<any, any>): void {
    sub.listener = fillOutListener({});
  }

  protected override onSubscriptionEnded(sub: Subscription<any, any>): void {
    this.#endedSubscriptions.add(sub.subscriptionId);
  }

  async subscribe<
    Q extends ObjectOrInterfaceDefinition,
    P extends PropertyKeys<Q>,
  >(
    objectType: ObjectOrInterfaceDefinition,
    objectSet: ObjectSet,
    listener: ObjectSetSubscription.Listener<Q, P>,
    properties: Array<P> = [],
    shouldLoadRids: boolean = false,
  ): Promise<() => void> {
    const objOrInterfaceDef =
      objectType.type === "object"
        ? await this.client.ontologyProvider.getObjectDefinition(
            objectType.apiName,
          )
        : await this.client.ontologyProvider.getInterfaceDefinition(
            objectType.apiName,
          );

    let objectProperties: Array<P> = [];
    let referenceProperties: Array<P> = [];

    if (properties.length === 0) {
      properties = Object.keys(objOrInterfaceDef.properties) as Array<P>;
    }

    objectProperties = properties.filter(
      (p) =>
        p in objOrInterfaceDef.properties &&
        objOrInterfaceDef.properties[p].type !== "geotimeSeriesReference",
    );

    referenceProperties = properties.filter(
      (p) =>
        p in objOrInterfaceDef.properties &&
        objOrInterfaceDef.properties[p].type === "geotimeSeriesReference",
    );

    const sub: Subscription<Q, P> = {
      listener: fillOutListener<Q, P>(listener),
      objectSet,
      primaryKeyPropertyName:
        objOrInterfaceDef.type === "interface"
          ? undefined
          : objOrInterfaceDef.primaryKeyApiName,
      requestedProperties: objectProperties,
      requestedReferenceProperties: referenceProperties,
      status: "preparing",
      // Since we don't have a real subscription id yet but we need to keep
      // track of this reference, we can just use a random uuid.
      subscriptionId: `TMP-${nextUuid()}}`,
      interfaceApiName:
        objOrInterfaceDef.type === "object"
          ? undefined
          : objOrInterfaceDef.apiName,
      loadRids: shouldLoadRids,
    };

    this.subscriptions.set(sub.subscriptionId, sub);

    // actually prepares the subscription, ensures the ws is ready, and sends
    // a subscribe message. We don't want to block on this.
    void this.#initiateSubscribe(sub);

    return () => {
      this.endSubscription(sub);
    };
  }

  /**
   * Subscribes to a wire object set without an ontology type lookup.
   *
   * Used when the caller has only an object set RID and does not know (or care
   * about) the underlying object/interface type. No properties are requested,
   * so emitted `object` payloads carry only `$apiName` (and `$rid` when
   * `shouldLoadRids` is true). `$primaryKey` will be `undefined`.
   */
  subscribeWithoutType(
    objectSet: ObjectSet,
    listener: ObjectSetSubscription.Listener<
      ObjectOrInterfaceDefinition,
      never
    >,
    shouldLoadRids: boolean = false,
  ): () => void {
    const sub: Subscription<ObjectOrInterfaceDefinition, never> = {
      listener: fillOutListener(listener),
      objectSet,
      primaryKeyPropertyName: undefined,
      requestedProperties: [],
      requestedReferenceProperties: [],
      status: "preparing",
      subscriptionId: `TMP-${nextUuid()}}`,
      interfaceApiName: undefined,
      loadRids: shouldLoadRids,
    };

    this.subscriptions.set(sub.subscriptionId, sub);

    void this.#initiateSubscribe(sub);

    return () => {
      this.endSubscription(sub);
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
  async #initiateSubscribe(sub: Subscription<any, any>) {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.debug("#initiateSubscribe()");
    }

    try {
      await this.ensureWebsocket();

      // the consumer may have already unsubscribed before we are ready to request a subscription
      // so we have to acquire the pendingSubscription after the await.
      if (isSubscriptionDone(sub)) {
        return;
      }
      sub.isReady = true;
      // if we aren't open, then this happens after we #onConnect
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.sendSubscribeMessage();
      }
    } catch (error) {
      this.logger?.error(error, "Error in #initiateSubscribe");
      this.#tryCatchOnError(sub, true, error);
    }
  }

  protected override async handleWebsocketMessage(
    data: StreamMessage,
  ): Promise<void> {
    switch (data.type) {
      case "objectSetChanged":
        await this.#handleMessage_objectSetChanged(data);
        return;

      case "refreshObjectSet":
        this.#handleMessage_refreshObjectSet(data);
        return;

      case "subscribeResponses":
        this.#handleMessage_subscribeResponses(data);
        return;

      case "subscriptionClosed": {
        this.#handleMessage_subscriptionClosed(data);
        return;
      }

      default:
        const _: never = data;
        invariant(false, "Unexpected message type");
    }
  }

  #handleMessage_objectSetChanged = async (payload: ObjectSetUpdates) => {
    const sub = this.subscriptions.get(payload.id);
    if (sub == null) return;

    const objectUpdates = payload.updates.filter(
      (update) => update.type === "object",
    );
    const referenceUpdates = payload.updates.filter(
      (update) => update.type === "reference",
    );
    const osdkObjectsWithReferenceUpdates = await Promise.all(
      referenceUpdates.map(async (o) => {
        const osdkObjectArray = await this.client.objectFactory(
          this.client,
          [
            {
              __apiName: o.objectType,
              __primaryKey:
                sub.primaryKeyPropertyName != null
                  ? o.primaryKey[sub.primaryKeyPropertyName]
                  : undefined,
              ...o.primaryKey,
              [o.property]: o.value,
            },
          ],
          sub.interfaceApiName,
          {},
          undefined,
          false,
          undefined,
          false,
          await this.#fetchInterfaceMapping(o.objectType, sub.interfaceApiName),
        );
        const singleOsdkObject = osdkObjectArray[0] ?? undefined;
        return singleOsdkObject != null
          ? {
              object: singleOsdkObject as Osdk.Instance<any, never, any>,
              state: "ADDED_OR_UPDATED" as ObjectState,
            }
          : undefined;
      }),
    );

    for (const update of osdkObjectsWithReferenceUpdates) {
      if (update != null) {
        try {
          sub.listener.onChange?.(update);
        } catch (error) {
          this.logger?.error(error, "Error in onChange callback");
          this.#tryCatchOnError(sub, false, error);
        }
      }
    }

    const osdkObjects = await Promise.all(
      objectUpdates.map(async (o) => {
        const keysToDelete = Object.keys(o.object).filter((key) =>
          sub.requestedReferenceProperties.includes(key),
        );
        for (const key of keysToDelete) {
          delete o.object[key];
        }

        const osdkObjectArray = (await this.client.objectFactory(
          this.client,
          [o.object],
          sub.interfaceApiName,
          {},
          undefined,
          false,
          undefined,
          false,
          await this.#fetchInterfaceMapping(
            o.object.__apiName,
            sub.interfaceApiName,
          ),
        )) as Array<Osdk.Instance<any>>;
        const singleOsdkObject = osdkObjectArray[0] ?? undefined;

        const rid = singleOsdkObject.$rid as string | undefined;

        return singleOsdkObject != null
          ? rid === undefined
            ? {
                object: singleOsdkObject,
                state: o.state,
              }
            : {
                object: singleOsdkObject,
                state: o.state,
                rid,
              }
          : undefined;
      }),
    );

    for (const osdkObject of osdkObjects) {
      if (osdkObject != null) {
        try {
          sub.listener.onChange?.(osdkObject);
        } catch (error) {
          this.logger?.error(error, "Error in onChange callback");
          this.#tryCatchOnError(sub, false, error);
        }
      }
    }
  };

  async #fetchInterfaceMapping(
    objectTypeApiName: string,
    interfaceApiName: string | undefined,
  ): Promise<Record<string, Record<string, Record<string, string>>>> {
    if (interfaceApiName == null) return {};
    const interfaceMap = (
      await this.client.ontologyProvider.getObjectDefinition(objectTypeApiName)
    ).interfaceMap;
    return {
      [interfaceApiName]: {
        [objectTypeApiName]: interfaceMap[interfaceApiName],
      },
    };
  }

  #handleMessage_refreshObjectSet = (payload: RefreshObjectSet) => {
    const sub = this.subscriptions.get(payload.id);
    invariant(sub, `Expected subscription id ${payload.id}`);
    try {
      sub.listener.onOutOfDate();
    } catch (error) {
      this.logger?.error(error, "Error in onOutOfDate callback");
      this.#tryCatchOnError(sub, false, error);
    }
  };

  #handleMessage_subscribeResponses = (
    payload: ObjectSetSubscribeResponses,
  ) => {
    const { id, responses } = payload;

    const subs = this.pendingSubscriptions.get(id);
    invariant(subs, `should have a pending subscription for ${id}`);
    this.pendingSubscriptions.delete(id);

    for (let i = 0; i < responses.length; i++) {
      const sub = subs[i];
      const response = responses[i];

      switch (response.type) {
        case "error":
          this.#tryCatchOnError(sub, true, response.errors);
          this.endSubscription(sub, "error");
          break;

        case "qos":
          // the server has requested that we tear down our websocket and reconnect to help load balance
          this.cycleWebsocket();
          break;

        case "success":
          // `"preparing"` should only be the status on an initial subscribe.
          const shouldFireOutOfDate =
            sub.status === "expired" || sub.status === "reconnecting";

          if (process.env.NODE_ENV !== "production") {
            this.logger?.debug({ shouldFireOutOfDate }, "success");
          }
          sub.status = "subscribed";
          if (sub.subscriptionId !== response.id) {
            // might be the temporary one
            this.subscriptions.delete(sub.subscriptionId);
            sub.subscriptionId = response.id;
            this.subscriptions.set(sub.subscriptionId, sub); // future messages come by this subId
          }
          try {
            if (shouldFireOutOfDate) sub.listener.onOutOfDate();
            else sub.listener.onSuccessfulSubscription();
          } catch (error) {
            this.logger?.error(
              error,
              "Error in onOutOfDate or onSuccessfulSubscription callback",
            );
            this.#tryCatchOnError(sub, false, error);
          }
          break;
        default:
          this.#tryCatchOnError(sub, true, response);
      }
    }
  };

  #handleMessage_subscriptionClosed(payload: SubscriptionClosed) {
    const sub = this.subscriptions.get(payload.id);
    if (sub == null && this.#endedSubscriptions.has(payload.id)) return;
    invariant(sub, `Expected subscription id ${payload.id}`);
    this.#tryCatchOnError(sub, true, payload.cause);
    this.endSubscription(sub, "error");
  }

  #tryCatchOnError = (
    sub: Subscription<any, any>,
    subscriptionClosed: boolean,
    error: any,
  ) => {
    try {
      sub.listener.onError({ subscriptionClosed, error });
    } catch (onErrorError) {
      // eslint-disable-next-line no-console
      console.error(
        `Error encountered in an onError callback for an OSDK subscription`,
        onErrorError,
      );
      // eslint-disable-next-line no-console
      console.error(
        `This onError call was triggered by an error in another callback`,
        error,
      );
      // eslint-disable-next-line no-console
      console.error(`The subscription has been closed.`, error);

      if (!subscriptionClosed) {
        this.logger?.error(error, "Error in onError callback");
        this.endSubscription(sub, "error");
        this.#tryCatchOnError(sub, true, onErrorError);
      }
    }
  };
}
