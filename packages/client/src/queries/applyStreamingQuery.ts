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

import type {
  CompileTimeMetadata,
  QueryDefinition,
  QueryMetadata,
} from "@osdk/api";
import * as Functions from "@osdk/foundry.functions/Query";
import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import {
  iterateReadableStream,
  parseNdjsonStream,
} from "../util/streamutils.js";
import {
  getRequiredDefinitions,
  remapQueryParams,
  remapQueryResponse,
} from "./applyQuery.js";
import type { QueryParameterType, QueryReturnType } from "./types.js";

export async function* applyStreamingQuery<
  QD extends QueryDefinition<any>,
  P extends QueryParameterType<CompileTimeMetadata<QD>["parameters"]>,
>(
  client: MinimalClient,
  query: QD,
  params?: P,
): AsyncGenerator<
  QueryReturnType<CompileTimeMetadata<QD>["output"]>,
  void,
  unknown
> {
  const qd: QueryMetadata = await client.ontologyProvider.getQueryDefinition(
    query.apiName,
    query.isFixedVersion ? query.version : undefined,
  );

  if (client.flushEdits != null) {
    await client.flushEdits();
  }

  const response = await Functions.streamingExecute(
    addUserAgentAndRequestContextHeaders(
      augmentRequestContext(client, _ => ({
        finalMethodCall: "applyStreamingQuery",
      })),
      query,
    ),
    query.apiName,
    {
      ontology: await client.ontologyRid,
      parameters: params
        ? await remapQueryParams(
          params as { [parameterId: string]: any },
          client,
          qd.parameters,
        )
        : {},
      version: query.isFixedVersion ? query.version : undefined,
      branch: client.branch,
    },
    {
      transactionId: client.transactionId,
    },
  );

  if (response.body == null) {
    throw new Error("streamingExecute returned no response body");
  }

  const definitions = await getRequiredDefinitions(qd.output, client);
  const reader = response.body.getReader();
  for await (
    const line of parseNdjsonStream(iterateReadableStream(reader))
  ) {
    if (line.type === "error") {
      const err = new Error(
        `${line.errorName} (${line.errorCode}) [${line.errorInstanceId}]: ${
          line.errorDescription ?? ""
        }`,
      );
      Object.assign(err, line);
      throw err;
    }
    const remapped = await remapQueryResponse(
      client,
      qd.output,
      line.value,
      definitions,
    );
    if (qd.output.type === "array" && Array.isArray(remapped)) {
      for (const item of remapped) {
        yield item as QueryReturnType<CompileTimeMetadata<QD>["output"]>;
      }
    } else {
      yield remapped as QueryReturnType<CompileTimeMetadata<QD>["output"]>;
    }
  }
}
