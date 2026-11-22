/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { QueryDefinition } from "@osdk/api";
import type { FunctionExecution } from "@osdk/api/unstable";
import * as Functions from "@osdk/foundry.functions/Query";

import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgentHeader } from "../util/addUserAgentHeader.js";
import {
  getRequiredDefinitions,
  remapQueryParams,
  remapQueryResponse,
} from "./applyQuery.js";
import { createFunctionExecutionHandle } from "./createFunctionExecutionHandle.js";

export async function applyQueryAsync(
  client: MinimalClient,
  query: QueryDefinition<unknown>,
  params?: Record<string, unknown>,
): Promise<FunctionExecution<unknown>> {
  if (client.scenarioRid != null) {
    throw new Error(
      "Asynchronous function execution is not supported in scenarios",
    );
  }
  const clientWithHeaders = addUserAgentHeader(client, query);
  const version = query.isFixedVersion ? query.version : undefined;
  const { output, parameters } =
    await client.ontologyProvider.getQueryDefinition(query.apiName, version);

  if (client.flushEdits != null) {
    await client.flushEdits();
  }

  const response = await Functions.executeAsync(
    clientWithHeaders,
    query.apiName,
    {
      ontology: await client.ontologyRid,
      parameters: params
        ? await remapQueryParams(params, client, parameters)
        : {},
      version,
      branch: clientWithHeaders.branch,
      // Ontologies resolves unpinned queries by publish time on the default branch.
      latestVersionResolution:
        version == null && clientWithHeaders.branch == null
          ? "PUBLISH_TIME"
          : undefined,
    },
    { transactionId: client.transactionId, preview: true },
  );

  return createFunctionExecutionHandle(
    clientWithHeaders,
    response,
    async (value) => {
      const definitions = await getRequiredDefinitions(output, client);
      return remapQueryResponse(client, output, value, definitions);
    },
  );
}
