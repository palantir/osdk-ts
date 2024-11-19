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

import {
  type AsyncParameterValueMap,
  FoundryHostEventTarget,
  type FoundryViewClient,
  type ParameterConfig,
} from "@osdk/views-client.unstable";
import React, { useContext } from "react";

export interface FoundryViewClientContext<CONFIG extends ParameterConfig> {
  emitEvent: FoundryViewClient<CONFIG>["emit"];
  hostEventTarget: FoundryHostEventTarget<CONFIG>;
  parameterValues: AsyncParameterValueMap<CONFIG>;
}

export const FoundryViewContext = React.createContext<
  FoundryViewClientContext<ParameterConfig>
>({
  emitEvent: () => {},
  hostEventTarget: new FoundryHostEventTarget<ParameterConfig>(),
  parameterValues: {},
});

/**
 * @returns The current FoundryViewClientContext, in the context of your specific parameter configuration
 */
export function useFoundryViewContext<CONFIG extends ParameterConfig>() {
  return useContext(FoundryViewContext) as FoundryViewClientContext<CONFIG>;
}

export namespace useFoundryViewContext {
  export function withTypes<
    CONFIG extends ParameterConfig,
  >(): () => FoundryViewClientContext<CONFIG> {
    return () => {
      return useFoundryViewContext<CONFIG>();
    };
  }
}
