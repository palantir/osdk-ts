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

import type { Client, ObjectSet, ObjectTypeDefinition } from "@osdk/client";
import { hydrateObjectSetFromRid } from "@osdk/client/internal";
import type { AsyncParameterValueMap, WidgetConfig } from "@osdk/widget.api";
import type { ExtendedAsyncParameterValueMap } from "../context.js";

export function augmentParametersWithObjectSets<
  C extends WidgetConfig<C["parameters"]>,
>(
  osdkClient: Client | undefined,
  config: C,
  parameters: AsyncParameterValueMap<C>,
  cache: Map<string, { objectSetRid: string; objectSet: ObjectSet }>,
): ExtendedAsyncParameterValueMap<C> {
  const augmentedParameters = {
    ...parameters,
  } as ExtendedAsyncParameterValueMap<C>;

  for (const parameterId of Object.keys(augmentedParameters)) {
    const param = config.parameters[parameterId];
    if (
      param.type === "objectSet"
      && augmentedParameters[parameterId].type === "objectSet"
    ) {
      const parameterValue = augmentedParameters[parameterId].value.value;
      if (parameterValue != null) {
        if (
          typeof parameterValue === "object"
          && "objectSetRid" in parameterValue
          && typeof parameterValue.objectSetRid === "string"
        ) {
          const objectSetRid = parameterValue.objectSetRid;
          const objectSet = getOrHydrateObjectSet(
            osdkClient,
            cache,
            parameterId,
            objectSetRid,
            param.objectType as ObjectTypeDefinition,
          );
          (parameterValue as any).objectSet = objectSet;
        } else {
          throw new Error(
            `Invalid object set parameter value for parameter "${parameterId}"`,
          );
        }
      } else {
        cache.delete(parameterId);
      }
    }
  }

  return augmentedParameters;
}

function getOrHydrateObjectSet<T extends ObjectTypeDefinition>(
  osdkClient: Client | undefined,
  cache: Map<string, { objectSetRid: string; objectSet: ObjectSet<T> }>,
  paramKey: string,
  objectSetRid: string,
  definition: T,
) {
  if (osdkClient == null) {
    throw new Error("Not provided an OSDK client");
  }
  const cached = cache.get(paramKey);
  if (cached?.objectSetRid === objectSetRid) {
    return cached.objectSet;
  }
  const objectSet = hydrateObjectSetFromRid(
    osdkClient,
    definition,
    objectSetRid,
  );
  cache.set(paramKey, { objectSetRid, objectSet });
  return objectSet;
}
