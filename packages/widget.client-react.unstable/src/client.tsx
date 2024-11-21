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

import type {
  AsyncParameterValueMap,
  AsyncValue,
  ParameterConfig,
  ParameterValueMap,
  WidgetConfig,
} from "@osdk/widget-client.unstable";
import { createFoundryWidgetClient } from "@osdk/widget-client.unstable";
import React, { useEffect, useMemo } from "react";
import type { FoundryWidgetClientContext } from "./context.js";
import { FoundryWidgetContext } from "./context.js";
import { initializeParameters } from "./utils/initializeParameters.js";

interface FoundryWidgetProps<C extends WidgetConfig<C["parameters"]>> {
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
  initialValues?: AsyncParameterValueMap<C>;
}

/**
 * Handles subscribing to messages from the host Foundry UI and updating the widget's parameter values accordingly via React context
 */
export const FoundryWidget = <C extends WidgetConfig<C["parameters"]>>({
  children,
  config,
  initialValues,
}: FoundryWidgetProps<C>): React.ReactElement<FoundryWidgetProps<C>> => {
  const client = useMemo(() => createFoundryWidgetClient<C>(), []);
  const [asyncParameterValues, setAsyncParameterValues] = React.useState<
    AsyncParameterValueMap<C>
  >(initialValues ?? initializeParameters(config, "not-started"));
  const [allParameterValues, setAllParameterValues] = React.useState<
    AsyncValue<ParameterValueMap<C>>
  >({
    type: "not-started",
  });

  useEffect(() => {
    client.subscribe();
    client.hostEventTarget.addEventListener(
      "host.update-parameters",
      (payload) => {
        setAsyncParameterValues((currentParameters) => ({
          ...currentParameters,
          ...payload.detail.parameters,
        }));
        setAllParameterValues((currentParameters) => {
          let aggregatedLoadedState: AsyncValue<any>["type"] = "loaded";
          let firstError: Error | undefined;
          const newParameterValues: ParameterValueMap<
            WidgetConfig<ParameterConfig>
          > = {};
          for (const key in payload.detail.parameters) {
            const value = payload.detail.parameters[key].value;
            // If any fails, consider the whole thing failed
            if (value.type === "failed") {
              aggregatedLoadedState = "failed";
              firstError = firstError ?? value.error;
              newParameterValues[key as any] = value.value as any;
              continue;
            }
            // If any is loading, consider all of it loading unless we have failed somewhere
            if (
              value.type === "loading" && aggregatedLoadedState !== "failed"
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
            } as ParameterValueMap<C>;
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
        createOntologyClient: client.createOntologyClient,
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
