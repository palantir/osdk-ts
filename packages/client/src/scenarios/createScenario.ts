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

import { OntologyScenarios } from "@osdk/foundry.ontologies";
import { additionalContext, type Client } from "../Client.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import {
  buildScenarioClient,
  type EXPERIMENTAL_ScenarioClient,
} from "./ScenarioClient.js";

/**
 * Mint a fresh ontology scenario and return a client scoped to it.
 *
 * @param client - The base {@link Client} to derive context (`baseUrl`, `ontologyRid`, `tokenProvider`, `branch`, …)
 *   from. Throws at runtime if the client is already scoped to a scenario. If the client has an active transaction,
 *   the transaction is ignored (a warning is logged) and the client is scoped to the new scenario. When the base
 *   client has a branch set, the newly minted scenario uses that branch as its base.
 * @returns a {@link EXPERIMENTAL_ScenarioClient} bound to the freshly minted scenario RID.
 *
 * @beta This is an experimental, unstable feature subject to change.
 *
 * @example
 * ```ts
 * import { createScenario } from "@osdk/client/unstable-do-not-use";
 *
 * const scenario = await createScenario(client);
 * const scenarioRid = scenario.getScenarioReference();
 * ```
 */
export async function createScenario(
  client: Client,
): Promise<EXPERIMENTAL_ScenarioClient> {
  const ctx: MinimalClient = client[additionalContext];

  if (ctx.scenarioRid != null) {
    throw new Error(
      "createScenario: the supplied client already has an active scenario. Scenarios cannot be nested.",
    );
  }

  const response = await OntologyScenarios.createScenario(
    ctx,
    await ctx.ontologyRid,
    ctx.branch != null
      ? { base: { type: "branch", branch: ctx.branch } }
      : {},
    { preview: true },
  );

  return buildScenarioClient(client, response.scenarioRid);
}
