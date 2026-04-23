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

import type { Client, ObjectSet } from "@osdk/client";
import type {
  AsyncValue,
  EventId,
  EventParameterValueMap,
  ParameterValue,
} from "@osdk/widget.api";
import type { WidgetConfig } from "@osdk/widget.client";
import type { AugmentedEventParameterValueMap } from "../context.js";

type ObjectSetEmitEventPayload = ParameterValue.ObjectSet["value"] extends
  AsyncValue<infer T> ? T : never;

type TransformedEmitEventPayload<
  C extends WidgetConfig<C["parameters"]>,
  K extends EventId<C>,
> = {
  parameterUpdates: EventParameterValueMap<C, K>;
};

type TransformedEmitEventPayloadResult<
  C extends WidgetConfig<C["parameters"]>,
  K extends EventId<C>,
> = {
  type: "async";
  payload: Promise<TransformedEmitEventPayload<C, K>>;
} | {
  type: "passThrough";
  payload: TransformedEmitEventPayload<C, K>;
};

export function transformEmitEventPayload<
  C extends WidgetConfig<C["parameters"]>,
  K extends EventId<C>,
>(
  config: C,
  eventId: K,
  payload: { parameterUpdates: AugmentedEventParameterValueMap<C, K> },
  osdkClient?: Client,
): TransformedEmitEventPayloadResult<C, K> {
  for (const paramId of Object.keys(payload.parameterUpdates)) {
    const paramConfig = config.parameters[paramId];
    if (paramConfig?.type === "objectSet") {
      return {
        type: "async",
        payload: transformEmitEventPayloadAsync(
          config,
          eventId,
          payload,
          osdkClient,
        ),
      };
    }
  }

  // No object set parameters, pass through synchronously
  return {
    type: "passThrough",
    payload: {
      parameterUpdates: payload.parameterUpdates as EventParameterValueMap<
        C,
        K
      >,
    },
  };
}

/**
 * Transforms an augmented emit event payload by creating temporary object sets
 * from ObjectSet instances.
 *
 * Multiple ObjectSet parameters are transformed in parallel for better performance.
 */
export async function transformEmitEventPayloadAsync<
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
          eventId,
          paramId,
          paramValue as ObjectSet,
        );
        return [paramId, { objectSetRid } satisfies ObjectSetEmitEventPayload];
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

async function createAndFetchTempObjectSetRid(
  osdkClient: Client,
  eventId: string | number | symbol,
  paramId: string,
  objectSet: ObjectSet,
): Promise<string> {
  return import("@osdk/client/internal").catch(() => {
    throw new Error(
      "@osdk/client is required for ObjectSet parameters. Install it with: npm install @osdk/client",
    );
  }).then(mod => mod.createAndFetchTempObjectSetRid(osdkClient, objectSet));
}
