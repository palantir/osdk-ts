/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  Logger,
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
  RefreshObjectSet,
  StreamMessage,
  SubscriptionClosed,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import type { ClientCacheKey, MinimalClient } from "../MinimalClientContext.js";
import { ExponentialBackoff } from "../util/exponentialBackoff.js";
import { parseSseEvents } from "../util/sseParser.js";

function doNothing() {}

function fillOutListener<
  Q extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<Q>,
  R extends boolean = false,
>(
  {
    onChange = doNothing,
    onError = doNothing,
    onOutOfDate = doNothing,
    onSuccessfulSubscription = doNothing,
    onInitialLoadComplete = doNothing,
  }: ObjectSetSubscription.Listener<Q, P, R>,
): Required<ObjectSetSubscription.Listener<Q, P, R>> {
  return {
    onChange,
    onError,
    onOutOfDate,
    onSuccessfulSubscription,
    onInitialLoadComplete,
  };
}

interface InitialLoadCompleted {
  type: "initialLoadCompleted";
  initialLoadCompleted: { id: string };
}

type ExtendedStreamMessage = StreamMessage | InitialLoadCompleted;

/** @internal */
export class ObjectSetListenerSSE {
  static #instances = new WeakMap<ClientCacheKey, ObjectSetListenerSSE>();

  static getInstance(client: MinimalClient): ObjectSetListenerSSE {
    let instance = ObjectSetListenerSSE.#instances.get(client.clientCacheKey);
    if (instance == null) {
      instance = new ObjectSetListenerSSE(client);
      ObjectSetListenerSSE.#instances.set(client.clientCacheKey, instance);
    }
    return instance;
  }

  #client: MinimalClient;
  #logger?: Logger;

  constructor(client: MinimalClient) {
    this.#client = client;
    this.#logger = client.logger?.child({}, {
      msgPrefix: "<SSE> ",
    });
    invariant(
      client.baseUrl.startsWith("https://")
        || client.baseUrl.startsWith("http://"),
      "Stack must be a URL",
    );
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
    includeInitialState: boolean = false,
  ): Promise<() => void> {
    const objOrInterfaceDef = objectType.type === "object"
      ? await this.#client.ontologyProvider.getObjectDefinition(
        objectType.apiName,
      )
      : await this.#client.ontologyProvider.getInterfaceDefinition(
        objectType.apiName,
      );

    if (properties.length === 0) {
      properties = Object.keys(objOrInterfaceDef.properties) as Array<P>;
    } else {
      properties = properties.filter((p) => p in objOrInterfaceDef.properties);
    }

    const objectProperties = properties.filter((p) =>
      objOrInterfaceDef.properties[p].type !== "geotimeSeriesReference"
    );

    const referenceProperties = properties.filter((p) =>
      objOrInterfaceDef.properties[p].type === "geotimeSeriesReference"
    );

    const interfaceApiName = objOrInterfaceDef.type === "object"
      ? undefined
      : objOrInterfaceDef.apiName;

    const primaryKeyPropertyName = objOrInterfaceDef.type === "interface"
      ? undefined
      : objOrInterfaceDef.primaryKeyApiName;

    const filledListener = fillOutListener<Q, P>(listener);

    const request: ObjectSetStreamSubscribeRequests = {
      id: nextUuid(),
      requests: [
        {
          objectSet,
          propertySet: objectProperties,
          referenceSet: referenceProperties,
          objectLoadingResponseOptions: {
            shouldLoadObjectRids: shouldLoadRids,
          },
        } satisfies ObjectSetStreamSubscribeRequest,
      ],
    };

    const abortController = new AbortController();

    // fire-and-forget: runs the SSE loop in the background with reconnection
    void this.#runSseLoop({
      request,
      listener: filledListener,
      abortController,
      interfaceApiName,
      primaryKeyPropertyName,
      requestedReferenceProperties: referenceProperties,
      includeInitialState,
    });

    return () => {
      abortController.abort();
    };
  }

  async #runSseLoop(opts: {
    request: ObjectSetStreamSubscribeRequests;
    listener: Required<ObjectSetSubscription.Listener<any, any>>;
    abortController: AbortController;
    interfaceApiName: string | undefined;
    primaryKeyPropertyName: string | undefined;
    requestedReferenceProperties: Array<string>;
    includeInitialState: boolean;
  }): Promise<void> {
    const {
      request,
      listener,
      abortController,
      interfaceApiName,
      primaryKeyPropertyName,
      requestedReferenceProperties,
      includeInitialState,
    } = opts;

    const backoff = new ExponentialBackoff();
    let isFirstConnection = true;

    while (!abortController.signal.aborted) {
      try {
        const ontologyRid = await this.#client.ontologyRid;
        const url = constructSseUrl(this.#client.baseUrl, ontologyRid);
        if (includeInitialState) {
          url.searchParams.set("includeInitialState", "true");
        }
        const token = await this.#client.tokenProvider();

        if (abortController.signal.aborted) return;

        if (process.env.NODE_ENV !== "production") {
          this.#logger?.debug("Opening SSE connection");
        }

        const response = await fetch(url.toString(), {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "text/event-stream",
          },
          body: JSON.stringify(request),
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(
            `SSE connection failed: ${response.status} ${response.statusText}`,
          );
        }

        if (!response.body) {
          throw new Error("SSE response has no body");
        }

        backoff.reset();

        for await (const event of parseSseEvents(response.body)) {
          if (abortController.signal.aborted) break;

          let message: ExtendedStreamMessage;
          try {
            message = JSON.parse(event.data) as ExtendedStreamMessage;
          } catch {
            this.#logger?.error("Failed to parse SSE event data");
            continue;
          }

          if (process.env.NODE_ENV !== "production") {
            this.#logger?.debug({ payload: message }, "received SSE event");
          }

          const shouldContinue = await this.#handleMessage(message, {
            listener,
            interfaceApiName,
            primaryKeyPropertyName,
            requestedReferenceProperties,
            isFirstConnection,
          });
          isFirstConnection = false;
          if (!shouldContinue) break;
        }

        // stream ended cleanly: data may be stale on reconnect
        if (!abortController.signal.aborted) {
          if (process.env.NODE_ENV !== "production") {
            this.#logger?.debug("SSE stream ended, will reconnect");
          }
          try {
            listener.onOutOfDate();
          } catch (error) {
            this.#logger?.error(error, "Error in onOutOfDate callback");
          }
        }
      } catch (error) {
        if (abortController.signal.aborted) return;

        if (process.env.NODE_ENV !== "production") {
          this.#logger?.error(error, "SSE connection error, will reconnect");
        }

        try {
          listener.onError({ subscriptionClosed: false, error });
        } catch (onErrorError) {
          // eslint-disable-next-line no-console
          console.error("Error in onError callback", onErrorError);
        }
      }

      // backoff before reconnect
      if (!abortController.signal.aborted) {
        const delay = backoff.calculateDelay();
        if (process.env.NODE_ENV !== "production") {
          this.#logger?.debug(
            { delay, attempt: backoff.getAttempt() },
            "Waiting before SSE reconnect",
          );
        }
        await new Promise<void>((resolve) => {
          const onAbort = () => {
            clearTimeout(timer);
            resolve();
          };
          const timer = setTimeout(() => {
            abortController.signal.removeEventListener("abort", onAbort);
            resolve();
          }, delay);
          abortController.signal.addEventListener("abort", onAbort, {
            once: true,
          });
        });
      }
    }
  }

  async #handleMessage(
    message: ExtendedStreamMessage,
    ctx: {
      listener: Required<ObjectSetSubscription.Listener<any, any>>;
      interfaceApiName: string | undefined;
      primaryKeyPropertyName: string | undefined;
      requestedReferenceProperties: Array<string>;
      isFirstConnection: boolean;
    },
  ): Promise<boolean> {
    switch (message.type) {
      case "subscribeResponses":
        return this.#handleSubscribeResponses(message, ctx);

      case "objectSetChanged":
        await this.#handleObjectSetChanged(message, ctx);
        return true;

      case "refreshObjectSet":
        this.#handleRefreshObjectSet(message, ctx);
        return true;

      case "subscriptionClosed":
        this.#handleSubscriptionClosed(message, ctx);
        return true;

      case "initialLoadCompleted":
        this.#handleInitialLoadCompleted(ctx);
        return true;

      default: {
        const _: never = message;
        this.#logger?.error("Unexpected SSE message type");
        return true;
      }
    }
  }

  #handleSubscribeResponses(
    payload: ObjectSetSubscribeResponses,
    ctx: {
      listener: Required<ObjectSetSubscription.Listener<any, any>>;
      isFirstConnection: boolean;
    },
  ): boolean {
    let shouldContinue = true;
    for (const response of payload.responses) {
      switch (response.type) {
        case "success":
          try {
            if (ctx.isFirstConnection) {
              ctx.listener.onSuccessfulSubscription();
            } else {
              ctx.listener.onOutOfDate();
            }
          } catch (error) {
            this.#logger?.error(error, "Error in subscription callback");
          }
          break;

        case "error":
          try {
            ctx.listener.onError({
              subscriptionClosed: true,
              error: response.errors,
            });
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error("Error in onError callback", error);
          }
          break;

        case "qos":
          shouldContinue = false;
          break;

        default:
          try {
            ctx.listener.onError({
              subscriptionClosed: true,
              error: response,
            });
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error("Error in onError callback", error);
          }
      }
    }
    return shouldContinue;
  }

  async #handleObjectSetChanged(
    payload: ObjectSetUpdates,
    ctx: {
      listener: Required<ObjectSetSubscription.Listener<any, any>>;
      interfaceApiName: string | undefined;
      primaryKeyPropertyName: string | undefined;
      requestedReferenceProperties: Array<string>;
    },
  ): Promise<void> {
    const objectUpdates = payload.updates.filter((u) => u.type === "object");
    const referenceUpdates = payload.updates.filter((u) =>
      u.type === "reference"
    );

    // handle reference updates
    for (const o of referenceUpdates) {
      const osdkObjectArray = await this.#client.objectFactory2(
        this.#client,
        [{
          __apiName: o.objectType,
          __primaryKey: ctx.primaryKeyPropertyName != null
            ? o.primaryKey[ctx.primaryKeyPropertyName]
            : undefined,
          ...o.primaryKey,
          [o.property]: o.value,
        }],
        ctx.interfaceApiName,
        {},
        undefined,
        false,
        undefined,
        false,
        await this.#fetchInterfaceMapping(
          o.objectType,
          ctx.interfaceApiName,
        ),
      );
      const singleOsdkObject = osdkObjectArray[0] ?? undefined;
      if (singleOsdkObject != null) {
        try {
          ctx.listener.onChange({
            object: singleOsdkObject as Osdk.Instance<any, never, any>,
            state: "ADDED_OR_UPDATED",
          });
        } catch (error) {
          this.#logger?.error(error, "Error in onChange callback");
        }
      }
    }

    // handle object updates
    for (const o of objectUpdates) {
      const keysToDelete = Object.keys(o.object).filter((key) =>
        ctx.requestedReferenceProperties.includes(key)
      );
      for (const key of keysToDelete) {
        delete o.object[key];
      }

      const osdkObjectArray = await this.#client.objectFactory2(
        this.#client,
        [o.object],
        ctx.interfaceApiName,
        {},
        undefined,
        false,
        undefined,
        false,
        await this.#fetchInterfaceMapping(
          o.object.__apiName,
          ctx.interfaceApiName,
        ),
      ) as Array<Osdk.Instance<any>>;
      const singleOsdkObject = osdkObjectArray[0] ?? undefined;

      if (singleOsdkObject != null) {
        const rid = singleOsdkObject["$rid"] as string | undefined;
        const update = rid === undefined
          ? { object: singleOsdkObject, state: o.state }
          : { object: singleOsdkObject, state: o.state, rid };
        try {
          ctx.listener.onChange(update);
        } catch (error) {
          this.#logger?.error(error, "Error in onChange callback");
        }
      }
    }
  }

  #handleRefreshObjectSet(
    _payload: RefreshObjectSet,
    ctx: { listener: Required<ObjectSetSubscription.Listener<any, any>> },
  ): void {
    try {
      ctx.listener.onOutOfDate();
    } catch (error) {
      this.#logger?.error(error, "Error in onOutOfDate callback");
    }
  }

  #handleInitialLoadCompleted(
    ctx: { listener: Required<ObjectSetSubscription.Listener<any, any>> },
  ): void {
    try {
      ctx.listener.onInitialLoadComplete();
    } catch (error) {
      this.#logger?.error(error, "Error in onInitialLoadComplete callback");
    }
  }

  #handleSubscriptionClosed(
    payload: SubscriptionClosed,
    ctx: { listener: Required<ObjectSetSubscription.Listener<any, any>> },
  ): void {
    try {
      ctx.listener.onError({
        subscriptionClosed: true,
        error: payload.cause,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error in onError callback", error);
    }
  }

  async #fetchInterfaceMapping(
    objectTypeApiName: string,
    interfaceApiName: string | undefined,
  ): Promise<Record<string, Record<string, Record<string, string>>>> {
    if (interfaceApiName == null) return {};
    const interfaceMap = (await this.#client.ontologyProvider
      .getObjectDefinition(objectTypeApiName)).interfaceMap;
    return {
      [interfaceApiName]: {
        [objectTypeApiName]: interfaceMap[interfaceApiName],
      },
    };
  }
}

/** @internal */
export function constructSseUrl(
  baseUrl: string,
  ontologyRid: string,
): URL {
  return new URL(
    `api/v2/ontologySubscriptions/ontologies/${ontologyRid}/sseSubscriptions`,
    baseUrl,
  );
}

let uuidCounter = 0;

function nextUuid() {
  return `00000000-0000-0000-0001-${
    (uuidCounter++).toString().padStart(12, "0")
  }`;
}
