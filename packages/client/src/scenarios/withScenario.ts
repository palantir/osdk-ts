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

import type { Client } from "../Client.js";
import {
  buildScenarioClient,
  type EXPERIMENTAL_ScenarioClient,
} from "./ScenarioClient.js";

/**
 * Attach to an existing ontology scenario. Synchronous — no network call is made. The returned client scopes all
 * subsequent operations (`fetchPage`, `applyAction`, `executeFunction`, etc.) to the given `scenarioRid`.
 *
 * @param client - The base {@link Client} to derive context (`baseUrl`, `ontologyRid`, `tokenProvider`, `branch`, …)
 *   from. Throws at runtime if the client is already scoped to a scenario. If the client has an active transaction,
 *   the transaction is ignored (a warning is logged) and the client is scoped to the scenario.
 * @param scenarioRid - The RID of the scenario to attach to.
 * @returns a {@link EXPERIMENTAL_ScenarioClient} bound to `scenarioRid`.
 *
 * @beta This is an experimental, unstable feature subject to change.
 *
 * @example
 * ```ts
 * import { withScenario } from "@osdk/client/unstable-do-not-use";
 *
 * const scenario = withScenario(client, "ri.actions..scenario.abc");
 * const page = await scenario(Doctor).fetchPage();
 * await scenario(Schedule).applyAction({ doctor: page.data[0], shift: "AM" });
 * ```
 */
export function withScenario(
  client: Client,
  scenarioRid: string
): EXPERIMENTAL_ScenarioClient {
  return buildScenarioClient(client, scenarioRid);
}
