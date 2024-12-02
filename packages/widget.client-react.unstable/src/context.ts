/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software=
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Client } from "@osdk/client";
import {
  type AsyncParameterValueMap,
  type AsyncValue,
  FoundryHostEventTarget,
  type FoundryWidgetClient,
  type ParameterConfig,
  type ParameterValueMap,
  type WidgetConfig,
} from "@osdk/widget-client.unstable";
import React, { useContext } from "react";

export interface FoundryWidgetClientContext<
  C extends WidgetConfig<C["parameters"]>,
> {
  emitEvent: FoundryWidgetClient<C>["emitEvent"];
  /**
   * Creates a new OSDK client for the given Ontology, automatically inferring the correct URL to make API requests to.
   */
  createOntologyClient: (ontologyRid: string) => Client;
  hostEventTarget: FoundryHostEventTarget<C>;

  /**
   * Object where the individual parameters have their async state represented
   */
  asyncParameterValues: AsyncParameterValueMap<C>;

  /**
   * Convenience object that aggregates the value of all parameters, accounting for their loading states
   */
  parameters: {
    values: Partial<ParameterValueMap<C>>;
    state: AsyncValue<ParameterValueMap<C>>["type"];
  };
}

export const FoundryWidgetContext = React.createContext<
  FoundryWidgetClientContext<WidgetConfig<ParameterConfig>>
>({
  emitEvent: () => {},
  createOntologyClient: () => {
    throw new Error(
      "createOntologyClient is not implemented in this context",
    );
  },
  hostEventTarget: new FoundryHostEventTarget<WidgetConfig<ParameterConfig>>(),
  asyncParameterValues: {},
  parameters: {
    state: "not-started",
    values: {},
  },
});

/**
 * @returns The current FoundryWidgetClientContext, in the context of your specific parameter configuration
 */
export function useFoundryWidgetContext<
  C extends WidgetConfig<C["parameters"]>,
>() {
  return useContext(FoundryWidgetContext) as FoundryWidgetClientContext<C>;
}

export namespace useFoundryWidgetContext {
  export function withTypes<
    C extends WidgetConfig<C["parameters"]>,
  >(): () => FoundryWidgetClientContext<C> {
    return () => {
      return useFoundryWidgetContext<C>();
    };
  }
}
