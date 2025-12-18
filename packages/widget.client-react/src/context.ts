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

import type { ObjectSet } from "@osdk/client";
import type {
  EventId,
  EventParameterValueMap,
  ObjectType,
  WidgetMessage,
} from "@osdk/widget.api";
import {
  type AsyncParameterValueMap,
  type AsyncValue,
  FoundryHostEventTarget,
  type ParameterConfig,
  type ParameterValueMap,
  type WidgetConfig,
} from "@osdk/widget.client";
import React, { useContext } from "react";

export type AugmentedEventParameterValueMap<
  C extends WidgetConfig<C["parameters"]>,
  K extends EventId<C>,
> = {
  [P in keyof EventParameterValueMap<C, K>]: P extends keyof C["parameters"]
    ? C["parameters"][P] extends { type: "objectSet"; objectType: infer T }
      ? T extends ObjectType ? ObjectSet<T>
      : EventParameterValueMap<C, K>[P]
    : EventParameterValueMap<C, K>[P]
    : EventParameterValueMap<C, K>[P];
};

type AugmentedEmitEventIdMap<C extends WidgetConfig<C["parameters"]>> = {
  [K in EventId<C>]: {
    eventId: K;
    parameterUpdates: AugmentedEventParameterValueMap<C, K>;
  };
};

interface AugmentedWidgetEmitEvent<C extends WidgetConfig<C["parameters"]>>
  extends Omit<WidgetMessage.EmitEvent<C>, "payload">
{
  payload: AugmentedEmitEventIdMap<C>[EventId<C>];
}

/**
 * Emits a widget event with parameter updates to the host Foundry UI.
 *
 * For object set parameters, pass `ObjectSet<T>` directly.
 * If the same event is emitted multiple times in quick succession and involves Object Set parameters, only the last call will be sent.
 * Errors (e.g., network failures when serializing ObjectSet parameters) are not surfaced to the caller.
 */
export type AugmentedEmitEvent<C extends WidgetConfig<C["parameters"]>> = <
  M extends AugmentedWidgetEmitEvent<C>,
  ID extends M["payload"]["eventId"],
>(
  eventId: ID,
  payload: Omit<Extract<M["payload"], { eventId: ID }>, "eventId">,
) => void;

export interface FoundryWidgetClientContext<
  C extends WidgetConfig<C["parameters"]>,
> {
  /**
   * Emits a widget event with parameter updates to the host Foundry UI.
   *
   * - For ObjectSet parameters, pass `ObjectSet<T>` directly
   * - If the same event is emitted multiple times rapidly and involves Object Set parameters, only the last call is sent
   * - Errors are not surfaced to the caller
   */
  emitEvent: AugmentedEmitEvent<C>;
  hostEventTarget: FoundryHostEventTarget<C>;

  /**
   * Object where the individual parameters have their async state represented
   */
  asyncParameterValues: ExtendedAsyncParameterValueMap<C>;

  /**
   * Convenience object that aggregates the value of all parameters, accounting for their loading states
   */
  parameters: {
    values: Partial<ExtendedParameterValueMap<C>>;
    state: AsyncValue<ParameterValueMap<C>>["type"];
  };
}

export type ExtendedParameterValueMap<C extends WidgetConfig<C["parameters"]>> =
  {
    [K in keyof C["parameters"]]: K extends keyof ParameterValueMap<C>
      ? C["parameters"][K] extends { type: "objectSet"; objectType: infer T }
        ? T extends ObjectType
          ? ParameterValueMap<C>[K] & { objectSet: ObjectSet<T> }
        : ParameterValueMap<C>[K]
      : ParameterValueMap<C>[K]
      : never;
  };

export type ExtendedAsyncParameterValueMap<
  C extends WidgetConfig<C["parameters"]>,
> = {
  [K in keyof C["parameters"]]: K extends keyof AsyncParameterValueMap<C>
    ? C["parameters"][K] extends { type: "objectSet"; objectType: infer T }
      ? T extends ObjectType ? AsyncParameterValueMap<C>[K] & {
          value: AsyncValue<
            ParameterValueMap<C>[K] & { objectSet: ObjectSet<T> }
          >;
        }
      : AsyncParameterValueMap<C>[K]
    : AsyncParameterValueMap<C>[K]
    : never;
};

export const FoundryWidgetContext: React.Context<
  FoundryWidgetClientContext<WidgetConfig<ParameterConfig>>
> = React.createContext<
  FoundryWidgetClientContext<WidgetConfig<ParameterConfig>>
>({
  emitEvent: () => {},
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
>(): FoundryWidgetClientContext<C> {
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
