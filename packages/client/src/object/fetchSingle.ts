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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { ObjectSet } from "@osdk/gateway/types";
import { type ClientContext, PalantirApiError } from "@osdk/shared.net";
import type { Osdk } from "../index.js";
import {
  fetchPage,
  type FetchPageArgs,
  type SelectArgToKeys,
} from "./fetchPage.js";

export async function fetchSingle<
  Q extends ObjectOrInterfaceDefinition,
  const A extends FetchPageArgs<Q, any, any>,
>(
  client: ClientContext<any>,
  objectType: Q,
  args: A,
  objectSet: ObjectSet,
): Promise<
  Osdk<
    Q,
    A["includeRid"] extends true ? SelectArgToKeys<Q, A> | "$rid"
      : SelectArgToKeys<Q, A>
  >
> {
  const result = await fetchPage(
    client,
    objectType,
    { ...args, pageSize: 1 },
    objectSet,
  );

  if (result.data.length !== 1 || result.nextPageToken != null) {
    throw new PalantirApiError(
      `Expected a single result but got ${result.data.length} instead${
        result.nextPageToken != null ? " with nextPageToken set" : ""
      }`,
    );
  }

  return result.data[0] as any;
}
