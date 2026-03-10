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

import type { QueryMetadata } from "@osdk/api";
import * as QueryTypes from "@osdk/foundry.ontologies/QueryType";
import type { MinimalClient } from "../MinimalClientContext.js";

export async function loadQueryMetadata(
  client: MinimalClient,
  queryTypeApiNameAndVersion: string,
): Promise<QueryMetadata> {
  const [apiName, version] = queryTypeApiNameAndVersion.split(":");
  const r = await QueryTypes.get(
    client,
    await client.ontologyRid,
    apiName,
    { version },
  );

  const { wireQueryTypeV2ToSdkQueryMetadata } = await import(
    "@osdk/generator-converters"
  );
  return wireQueryTypeV2ToSdkQueryMetadata(r);
}
