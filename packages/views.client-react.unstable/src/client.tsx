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
  ParameterConfig,
} from "@osdk/views-client.unstable";
import { createFoundryViewClient } from "@osdk/views-client.unstable";
import React, { useEffect, useMemo } from "react";
import type { FoundryViewClientContext } from "./context.js";
import { FoundryViewContext } from "./context.js";
import { initializeParameters } from "./utils/initializeParameters.js";

interface FoundryViewProps<CONFIG extends ParameterConfig> {
  children: React.ReactNode;

  /**
   * Parameter configuration for the view
   */
  config: CONFIG;

  /**
   * Customize what the initial value of each parameter should be
   *
   * @default Sets all parameters to the "not-started" loading state
   */
  initialValues?: AsyncParameterValueMap<CONFIG>;
}

/**
 * Handles subscribing to messages from the host Foundry UI and updating the view's parameter values accordingly via React context
 */
export const FoundryView = <CONFIG extends ParameterConfig>({
  children,
  config,
  initialValues,
}: FoundryViewProps<CONFIG>): React.ReactElement<FoundryViewProps<CONFIG>> => {
  const client = useMemo(() => createFoundryViewClient<CONFIG>(), []);
  const [parameterValues, setParameterValues] = React.useState<
    AsyncParameterValueMap<CONFIG>
  >(initialValues ?? initializeParameters(config, "not-started"));

  useEffect(() => {
    client.subscribe();
    client.hostEventTarget.addEventListener(
      "host.update-parameters",
      (payload) => {
        setParameterValues((currentParameters) => ({
          ...currentParameters,
          ...payload,
        }));
      },
    );
    client.ready();
    return () => {
      client.unsubscribe();
    };
  }, []);

  return (
    <FoundryViewContext.Provider
      value={{
        emitEvent: client.emit,
        hostEventTarget: client.hostEventTarget,
        parameterValues,
        // Unfortunately the context is statically defined so we can't use the generic type, hence the cast
      } as FoundryViewClientContext<ParameterConfig>}
    >
      {children}
    </FoundryViewContext.Provider>
  );
};
