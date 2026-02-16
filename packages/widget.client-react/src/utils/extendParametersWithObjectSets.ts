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
import { hydrateObjectSetFromRid } from "@osdk/client/internal";
import type {
  AllowedObjectSetParameterType,
  AsyncParameterValueMap,
  WidgetConfig,
} from "@osdk/widget.api";
import type { ExtendedAsyncParameterValueMap } from "../context.js";

/**
 * Patches parameter values with hydrated object sets for object set parameters.
 *
 * The cache is used to avoid redundant hydration of the same object set RID, which
 * can cause unnecessary re-renders in React components consuming the parameters.
 */
export function extendParametersWithObjectSets<
  C extends WidgetConfig<C["parameters"]>,
>(
  osdkClient: Client | undefined,
  config: C,
  parameters: AsyncParameterValueMap<C>,
  cache: Map<string, { objectSetRid: string; objectSet: ObjectSet }>,
): ExtendedAsyncParameterValueMap<C> {
  const extendedParameters = {
    ...parameters,
  } as ExtendedAsyncParameterValueMap<C>;

  for (const parameterId of Object.keys(extendedParameters)) {
    const param = config.parameters[parameterId];
    if (
      param.type === "objectSet"
      && extendedParameters[parameterId].type === "objectSet"
    ) {
      const parameterValue = extendedParameters[parameterId].value.value;
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
            param.allowedType,
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

  return extendedParameters;
}

function getOrHydrateObjectSet<T extends AllowedObjectSetParameterType>(
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
