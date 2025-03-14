/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  OntologyObject,
  OntologyObjectV2,
} from "@osdk/foundry.ontologies";
import type {
  PagedBodyResponse,
  PagedBodyResponseWithTotal,
} from "./handlers/endpointUtils.js";

export function subSelectPropertiesUrl<
  T extends OntologyObjectV2 | OntologyObject,
>(
  object: T,
  url: URL,
): T {
  const properties = new Set(url.searchParams.getAll("select"));

  if (properties.size === 0) {
    return object;
  }

  const result = Object.entries(object).reduce<{ [key: string]: any }>(
    (acc, [key, value]) => {
      if (properties.has(key)) {
        acc[key] = value;
      } else if (key === "__primaryKey") {
        acc.__primaryKey = value;
      } else if (key === "__apiName") {
        acc.__apiName = value;
      }

      return acc;
    },
    {},
  );

  return result as T;
}

export function subSelectProperties<
  T extends OntologyObjectV2 | OntologyObject,
  TResponse extends
    | PagedBodyResponse<T>
    | PagedBodyResponseWithTotal<T>,
  TIncludeCount extends (TResponse extends PagedBodyResponseWithTotal<T> ? true
    : false),
>(
  objects: PagedBodyResponse<T>,
  urlOrProperties: URL | string[],
  includeCount: TIncludeCount,
  excludeRid?: boolean,
): TIncludeCount extends true ? PagedBodyResponseWithTotal<T>
  : PagedBodyResponse<T>
{
  let properties: Set<string>;
  if (Array.isArray(urlOrProperties)) {
    properties = new Set(urlOrProperties);
  } else {
    properties = new Set(urlOrProperties.searchParams.getAll("select"));
  }

  if (properties.size === 0) {
    if (excludeRid) {
      objects.data = objects.data.map(object => {
        const { __rid, ...rest } = object as any;
        return rest;
      }) as T[];
    }
    return objects as TIncludeCount extends true ? PagedBodyResponseWithTotal<T>
      : PagedBodyResponse<T>;
  }

  const result = objects.data.map(object =>
    Object.entries(object).reduce<{ [key: string]: any }>(
      (acc, [key, value]) => {
        if (properties.has(key)) {
          acc[key] = value;
        } else if (key === "__primaryKey") {
          acc.__primaryKey = value;
        } else if (key === "__apiName") {
          acc.__apiName = value;
        }

        return acc;
      },
      {},
    )
  );

  const ret:
    | PagedBodyResponse<T>
    | PagedBodyResponseWithTotal<T> = {
      nextPageToken: objects.nextPageToken,
      data: result as T[],
      totalCount: (objects as PagedBodyResponseWithTotal<T>).totalCount,
    };

  return ret as TIncludeCount extends true ? PagedBodyResponseWithTotal<T>
    : PagedBodyResponse<T>;
}
