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

import {
  type CreateOntologyScenarioRequest,
  OntologyScenarios,
} from "@osdk/foundry.ontologies";

import { additionalContext, type Client } from "../Client.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { buildScenarioClient, type ScenarioClient } from "./ScenarioClient.js";

/**
 * Mint a fresh ontology scenario and return a client scoped to it.
 *
 * @param client - The base {@link Client} to derive authentication and ontology context from.
 *   The scenario uses the client's branch, or main if no branch is set, without the client's
 *   transaction edits or scenario state. The original client is unchanged. Rolling back its transaction
 *   does not undo the new scenario or its edits.
 * @param options - Optional settings for the new scenario.
 * @returns a {@link ScenarioClient} bound to the freshly minted scenario RID.
 *
 * @example
 * ```ts
 * import { createScenario } from "@osdk/client";
 *
 * const expireAfter = new Date(Date.now() + 60 * 60 * 1000);
 * const scenario = await createScenario(client, { expireAfter });
 * const scenarioRid = scenario.getScenarioReference();
 * ```
 */
export async function createScenario(
  client: Client,
  options?: {
    expireAfter?: Date;
  },
): Promise<ScenarioClient> {
  const ctx: MinimalClient = {
    ...client[additionalContext],
    transactionId: undefined,
    flushEdits: undefined,
    scenarioRid: undefined,
  };

  const request: CreateOntologyScenarioRequest = {};

  if (ctx.branch != null) {
    request.base = { type: "branch", branch: ctx.branch };
  }

  if (options?.expireAfter != null) {
    request.expireAfter = options.expireAfter.toISOString();
  }

  const response = await OntologyScenarios.createScenario(
    ctx,
    await ctx.ontologyRid,
    request,
    { preview: true },
  );

  return buildScenarioClient(client, response.scenarioRid);
}
