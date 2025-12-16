/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { Client, ObjectSet } from "@osdk/client";
import { createAndFetchTempObjectSetRid } from "@osdk/client/internal";
import type {
  EventId,
  EventParameterValueMap,
  ObjectType,
} from "@osdk/widget.api";
import {
  type AsyncValue,
  createFoundryWidgetClient,
  type FoundryWidgetClient,
  type ParameterConfig,
  type WidgetConfig,
} from "@osdk/widget.client";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import type {
  AugmentedEmitEvent,
  AugmentedEventParameterValueMap,
  ExtendedAsyncParameterValueMap,
  ExtendedParameterValueMap,
  FoundryWidgetClientContext,
} from "./context.js";
import { FoundryWidgetContext } from "./context.js";
import { ErrorBoundary } from "./ErrorBoundary.js";
import { extendParametersWithObjectSets } from "./utils/extendParametersWithObjectSets.js";
import { initializeParameters } from "./utils/initializeParameters.js";

type ExtractObjectTypes<C extends WidgetConfig<C["parameters"]>> =
  C["parameters"][keyof C["parameters"]] extends infer Param
    ? Param extends { type: "objectSet"; objectType: infer OT }
      ? OT extends ObjectType ? OT
      : never
    : never
    : never;

/**
 * Transforms an augmented emit event payload by converting any ObjectSet values
 * directly to `{ objectSetRid }` for wire compatibility.
 *
 * Multiple ObjectSet parameters are transformed in parallel for better performance.
 */
async function transformEmitEventPayload<
  C extends WidgetConfig<C["parameters"]>,
  K extends EventId<C>,
>(
  config: C,
  eventId: K,
  payload: { parameterUpdates: AugmentedEventParameterValueMap<C, K> },
  osdkClient?: Client,
): Promise<{ parameterUpdates: EventParameterValueMap<C, K> }> {
  const event = config.events[eventId as string];
  if (event == null) {
    throw new Error(
      `Event with ID "${eventId.toString()}" not found in widget config`,
    );
  }

  const entries = Object.entries(payload.parameterUpdates);

  const transformedEntries = await Promise.all(
    entries.map(async ([paramId, paramValue]): Promise<[string, unknown]> => {
      const paramConfig = config.parameters[paramId];
      if (paramConfig?.type === "objectSet") {
        if (osdkClient == null) {
          throw new Error(
            `Cannot emit event "${eventId.toString()}" with ObjectSet parameter "${paramId}" without an osdk client`,
          );
        }
        const objectSetRid = await createAndFetchTempObjectSetRid(
          osdkClient,
          paramValue as ObjectSet,
        );
        return [paramId, { objectSetRid }];
      }
      return [paramId, paramValue];
    }),
  );

  return {
    parameterUpdates: Object.fromEntries(
      transformedEntries,
    ) as EventParameterValueMap<C, K>,
  };
}

type HasObjectSetParameters<C extends WidgetConfig<C["parameters"]>> =
  ExtractObjectTypes<C> extends never ? false : true;

type ObjectSetProps<C extends WidgetConfig<C["parameters"]>> = {
  /**
   * Used to hydrate object sets from their RIDs for object set parameters
   */
  client: Client;
};

type FoundryWidgetProps<C extends WidgetConfig<C["parameters"]>> =
  & {
    children: React.ReactNode;

    /**
     * Parameter configuration for the widget
     */
    config: C;

    /**
     * Customize what the initial value of each parameter should be
     *
     * @default Sets all parameters to the "not-started" loading state
     */
    initialValues?: ExtendedAsyncParameterValueMap<C>;
  }
  & Partial<ObjectSetProps<C>>
  & (HasObjectSetParameters<C> extends true ? ObjectSetProps<C> : {});

/**
 * Handles subscribing to messages from the host Foundry UI and updating the widget's parameter values accordingly via React context
 */
export const FoundryWidget = <C extends WidgetConfig<C["parameters"]>>({
  children,
  config,
  initialValues,
  client: osdkClient,
}: FoundryWidgetProps<C>): React.ReactElement<FoundryWidgetProps<C>> => {
  const client = useMemo(() => createFoundryWidgetClient<C>(), []);
  const [asyncParameterValues, setAsyncParameterValues] = React.useState<
    ExtendedAsyncParameterValueMap<C>
  >(initialValues ?? initializeParameters(config, "not-started"));
  const [allParameterValues, setAllParameterValues] = React.useState<
    AsyncValue<ExtendedParameterValueMap<C>>
  >({
    type: "not-started",
  });

  const objectSetCache = useRef<
    Map<string, { objectSetRid: string; objectSet: ObjectSet }>
  >(new Map());

  const emitEventCallId = useRef(0);

  /**
   * Wrapped emitEvent that transforms ObjectSet values to objectSetRid before sending.
   * This allows callers to pass ObjectSet<T> directly instead of `{ objectSetRid: string }`.
   *
   * If multiple calls are made before the async transformation completes,
   * only the last call will actually emit the event.
   */
  const emitEvent: AugmentedEmitEvent<C> = useCallback(
    async (eventId, payload) => {
      const thisCallId = ++emitEventCallId.current;

      const transformedPayload = await transformEmitEventPayload(
        config,
        eventId,
        payload,
        osdkClient,
      );

      if (thisCallId !== emitEventCallId.current) {
        return;
      }

      client.emitEvent(
        eventId as Parameters<FoundryWidgetClient<C>["emitEvent"]>[0],
        transformedPayload as Parameters<
          FoundryWidgetClient<C>["emitEvent"]
        >[1],
      );
    },
    [osdkClient, config, client],
  );

  useEffect(() => {
    client.subscribe();
    client.hostEventTarget.addEventListener(
      "host.update-parameters",
      (payload) => {
        const processedParameters = extendParametersWithObjectSets(
          osdkClient,
          config,
          payload.detail.parameters,
          objectSetCache.current,
        );
        setAsyncParameterValues((currentParameters) => ({
          ...currentParameters,
          ...processedParameters,
        }));
        setAllParameterValues((currentParameters) => {
          let aggregatedLoadedState: AsyncValue<any>["type"] = "loaded";
          let firstError: Error | undefined;
          const newParameterValues: ExtendedParameterValueMap<
            WidgetConfig<ParameterConfig>
          > = {};
          for (const key in processedParameters) {
            const value = processedParameters[key].value;
            // If any fails, consider the whole thing failed
            if (value.type === "failed") {
              aggregatedLoadedState = "failed";
              firstError = firstError ?? value.error;
              newParameterValues[key as any] = value.value as any;
              continue;
            }
            // If any is loading, consider all of it loading unless we have failed somewhere
            if (
              value.type === "loading"
              && aggregatedLoadedState !== "failed"
            ) {
              aggregatedLoadedState = "loading";
              continue;
            }
            // If any is reloading, consider it loading unless something is failed or loading for the first time
            if (
              value.type === "reloading"
              && aggregatedLoadedState !== "failed"
              && aggregatedLoadedState !== "loading"
            ) {
              aggregatedLoadedState = "reloading";
              newParameterValues[key as any] = value.value as any;
              continue;
            }
            if (
              value.type === "not-started"
              && aggregatedLoadedState !== "failed"
              && aggregatedLoadedState !== "loading"
              && aggregatedLoadedState !== "reloading"
            ) {
              aggregatedLoadedState = "not-started";
            }

            if (value.type === "loaded") {
              newParameterValues[key as any] = value.value as any;
            }
          }
          const currentParameterValue = currentParameters.type !== "not-started"
              && currentParameters.type !== "loading"
            ? currentParameters.value
            : {};
          if (
            aggregatedLoadedState !== "not-started"
            && aggregatedLoadedState !== "loading"
          ) {
            const updatedValue = {
              ...currentParameterValue,
              ...newParameterValues,
            } as ExtendedParameterValueMap<C>;
            return aggregatedLoadedState === "failed"
              ? {
                type: aggregatedLoadedState,
                value: updatedValue,
                error: firstError ?? new Error("Failed to load parameters"),
              }
              : {
                type: aggregatedLoadedState,
                value: updatedValue,
              };
          } else {
            return { type: aggregatedLoadedState };
          }
        });
      },
    );
    client.ready();

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length !== 1) {
        // eslint-disable-next-line no-console
        console.error(
          "Expected exactly one resize observer entry but received:",
          entries,
        );
        return;
      }
      const entry = entries[0];
      if (entry.borderBoxSize.length !== 1) {
        // eslint-disable-next-line no-console
        console.error(
          "Expected exactly one border box size but received:",
          entry.borderBoxSize,
        );
        return;
      }
      const { inlineSize: width, blockSize: height } = entry.borderBoxSize[0];
      client.resize({ width, height });
    });
    resizeObserver.observe(document.body, { box: "border-box" });

    return () => {
      client.unsubscribe();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <FoundryWidgetContext.Provider
      value={{
        emitEvent,
        hostEventTarget: client.hostEventTarget,
        asyncParameterValues,
        parameters: {
          values: allParameterValues.value ?? {},
          state: allParameterValues.type,
        },
        // Unfortunately the context is statically defined so we can't use the generic type, hence the cast
      } as FoundryWidgetClientContext<WidgetConfig<ParameterConfig>>}
    >
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </FoundryWidgetContext.Provider>
  );
};
