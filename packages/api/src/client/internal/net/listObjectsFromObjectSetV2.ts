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

import type { FetchAsJsonFn } from "#util";
import type {
  LoadObjectSetRequestV2,
  OntologyObjectV2,
  PagedResponse,
} from "./types";
import { V2_BASE } from "./V2_BASE";

export default async function listObjectsFromObjectSetV2(
  fetchAsJson: FetchAsJsonFn,
  foundryHost: string,
  ontologyApiName: string,
  body: LoadObjectSetRequestV2,
): Promise<PagedResponse<OntologyObjectV2>> {
  return fetchAsJson(
    new URL(
      `${V2_BASE}/${ontologyApiName}/objectSets/loadObjects`,
      `https://${foundryHost}`,
    ),
    {
      method: "POST",
      body,
    },
  );
}
