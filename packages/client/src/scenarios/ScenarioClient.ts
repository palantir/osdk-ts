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

import { additionalContext, type Client } from "../Client.js";
import { createClientWithScenario } from "../createClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";

declare const scenarioBrand: unique symbol;

/**
 * A {@link Client} attached to an ontology scenario. All read and write operations performed via this client are
 * scoped to that scenario. `ScenarioClient` is a superset of {@link Client}: it is usable anywhere a `Client` is
 * accepted (e.g. as the `scenarioReference` parameter on a scenario-merge action).
 *
 * @beta This is an experimental, unstable feature subject to change.
 */
export interface ScenarioClient extends Client {
  /** @internal */
  readonly [scenarioBrand]: true;

  /**
   * Returns the scenario reference for this client. Pass directly to an action whose parameter is typed as
   * `scenarioReference`, or use to inspect the underlying scenario RID.
   */
  getScenarioReference(): { scenarioRid: string };
}

/**
 * The set of clients that may be passed to {@link withScenario} or {@link createScenario}. Excludes already-branded
 * {@link ScenarioClient} instances at compile time to prevent nested-scenario anti-patterns.
 */
export type NonScenarioClient = Client & {
  readonly [scenarioBrand]?: never;
};

/**
 * Shared internal builder used by both {@link withScenario} and {@link createScenario}. Validates the parent client
 * is not already inside a scenario or transaction, then constructs a fresh {@link Client} via
 * `createClientWithScenario` and decorates it with {@link ScenarioClient}-only methods.
 *
 * @internal
 */
export function buildScenarioClient(
  parent: NonScenarioClient,
  scenarioRid: string,
): ScenarioClient {
  const ctx: MinimalClient = parent[additionalContext];

  if (ctx.transactionId != null) {
    throw new Error(
      "withScenario / createScenario: the supplied client already has an active transaction. Scenarios cannot be nested on transactions.",
    );
  }
  if (ctx.scenarioRid != null) {
    throw new Error(
      "withScenario / createScenario: the supplied client already has an active scenario. Scenarios cannot be nested.",
    );
  }

  const inner: Client = createClientWithScenario(
    scenarioRid,
    ctx.baseUrl,
    ctx.ontologyRid,
    ctx.tokenProvider,
    {
      logger: ctx.logger,
      UNSTABLE_DO_NOT_USE_BRANCH: ctx.branch,
    },
    ctx.fetch,
  );

  return Object.defineProperties(inner, {
    getScenarioReference: {
      value: () => ({ scenarioRid }),
    },
  }) as ScenarioClient;
}
