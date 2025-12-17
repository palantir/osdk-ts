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
import type { EventId, EventParameterValueMap } from "@osdk/widget.api";
import type { WidgetConfig } from "@osdk/widget.client";
import type { AugmentedEventParameterValueMap } from "../context.js";

/**
 * Transforms an augmented emit event payload by creating temporary object sets
 * from ObjectSet instances.
 *
 * Multiple ObjectSet parameters are transformed in parallel for better performance.
 */
export async function transformEmitEventPayload<
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
