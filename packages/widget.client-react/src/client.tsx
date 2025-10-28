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
import type { ObjectType } from "@osdk/widget.api";
import type {
  AsyncValue,
  ParameterConfig,
  WidgetConfig,
} from "@osdk/widget.client";
import { createFoundryWidgetClient } from "@osdk/widget.client";
import React, { useEffect, useMemo, useRef } from "react";
import type {
  ExtendedAsyncParameterValueMap,
  ExtendedParameterValueMap,
  FoundryWidgetClientContext,
} from "./context.js";
import { FoundryWidgetContext } from "./context.js";
import { augmentParametersWithObjectSets } from "./utils/augmentParametersWithObjectSets.js";
import { initializeParameters } from "./utils/initializeParameters.js";

type ExtractObjectTypes<C extends WidgetConfig<C["parameters"]>> =
  C["parameters"][keyof C["parameters"]] extends infer Param
    ? Param extends { type: "objectSet"; objectType: infer OT }
      ? OT extends ObjectType ? OT : never
    : never
    : never;

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

  useEffect(() => {
    client.subscribe();
    client.hostEventTarget.addEventListener(
      "host.update-parameters",
      (payload) => {
        const processedParameters = augmentParametersWithObjectSets(
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
    return () => {
      client.unsubscribe();
    };
  }, []);

  return (
    <FoundryWidgetContext.Provider
      value={{
        emitEvent: client.emitEvent,
        hostEventTarget: client.hostEventTarget,
        asyncParameterValues,
        parameters: {
          values: allParameterValues.value ?? {},
          state: allParameterValues.type,
        },
        // Unfortunately the context is statically defined so we can't use the generic type, hence the cast
      } as FoundryWidgetClientContext<WidgetConfig<ParameterConfig>>}
    >
      {children}
    </FoundryWidgetContext.Provider>
  );
};
