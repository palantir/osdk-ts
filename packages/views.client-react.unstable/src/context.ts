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
  type EventId,
  FoundryHostEventTarget,
  type ViewConfig,
  type ViewMessage,
} from "@osdk/views-client.unstable";
import React, { useContext } from "react";

export interface FoundryViewClientContext<
  CONFIG extends ViewConfig<{ parameters: CONFIG["parameters"] }>,
> {
  emitEvent: <
    M extends Extract<ViewMessage<CONFIG>, ViewMessage.EmitEvent<CONFIG>>,
  >(
    type: M["type"],
    payload: M["payload"],
  ) => void;
  hostEventTarget: FoundryHostEventTarget<CONFIG>;
  parameterValues: AsyncParameterValueMap<CONFIG>;
}

export const FoundryViewContext = React.createContext<
  FoundryViewClientContext<ViewConfig>
>({
  emitEvent: () => {},
  hostEventTarget: new FoundryHostEventTarget<ViewConfig>(),
  parameterValues: {},
});

/**
 * @returns The current FoundryViewClientContext, in the context of your specific parameter configuration
 */
export function useFoundryViewContext<
  CONFIG extends ViewConfig<{ parameters: CONFIG["parameters"] }>,
>() {
  return useContext(FoundryViewContext) as FoundryViewClientContext<CONFIG>;
}

export namespace useFoundryViewContext {
  export function withTypes<
    CONFIG extends ViewConfig<{ parameters: CONFIG["parameters"] }>,
  >(): () => FoundryViewClientContext<CONFIG> {
    return () => {
      return useFoundryViewContext<CONFIG>();
    };
  }
}
