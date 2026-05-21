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
  buildScenarioClient,
  type NonScenarioClient,
  type ScenarioClient,
} from "./ScenarioClient.js";

/**
 * Attach to an existing ontology scenario. Synchronous — no network call is made. The returned client scopes all
 * subsequent operations (`fetchPage`, `applyAction`, `executeFunction`, etc.) to the given `scenarioRid`.
 *
 * @param client - The base {@link Client} to derive context (`baseUrl`, `ontologyRid`, `tokenProvider`, `branch`, …)
 *   from. Must not already be a {@link ScenarioClient} or a transactional client.
 * @param scenarioRid - The RID of the scenario to attach to.
 * @returns a {@link ScenarioClient} bound to `scenarioRid`.
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
  client: NonScenarioClient,
  scenarioRid: string,
): ScenarioClient {
  return buildScenarioClient(client, scenarioRid);
}
