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

import type { PageToken } from "@osdk/foundry.core";
import type { PropertySecurities } from "@osdk/foundry.ontologies";

export interface PagedBodyResponse<T> {
  nextPageToken?: string;
  data: T[];
  propertySecurities: PropertySecurities[];
}

export interface PagedBodyResponseWithTotal<T> extends PagedBodyResponse<T> {
  totalCount: string;
}

export type PagedRequest = {
  excludeRid?: boolean;
  pageSize?: number;
  pageToken?: string;
};

export function pageThroughResponseSearchParams<
  TData,
  TIncludeCount extends boolean,
>(
  iter: Iterable<TData>,
  { pageSize = 1000, pageToken }: {
    pageSize: number | undefined;
    pageToken: PageToken | undefined;
  },
  includeCount?: TIncludeCount,
  propertySecurities?: PropertySecurities[],
):
  | (TIncludeCount extends true ? PagedBodyResponseWithTotal<TData>
    : PagedBodyResponse<TData>)
  | undefined
{
  const data = Array.from(iter);
  const pageCount = Math.ceil(data.length / pageSize);
  const currentPage = pageToken ? Number(pageToken) : 0;

  if (currentPage < 0 || currentPage >= pageCount) {
    return undefined;
  }

  const startIndex = currentPage * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const nextPageToken = currentPage + 1 < pageCount
    ? (currentPage + 1).toString()
    : undefined;

  const ret: PagedBodyResponse<TData> | PagedBodyResponseWithTotal<TData> = {
    nextPageToken,
    data: data.slice(startIndex, endIndex),
    ...(includeCount
      ? { totalCount: String(data.length) }
      : {}),
    propertySecurities: propertySecurities ?? [],
  };

  return ret as
    | (TIncludeCount extends true ? PagedBodyResponseWithTotal<TData>
      : PagedBodyResponse<TData>)
    | undefined;
}
