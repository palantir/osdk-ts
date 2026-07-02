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
  createScenario,
  type EXPERIMENTAL_ScenarioClient,
} from "@osdk/client/unstable-do-not-use";
import {
  createScenarioTestOsdk,
  scenarioOsdkTestAction,
  ScenarioTestOsdk,
} from "@osdk/e2e.generated.catchall";

import { client } from "./client.js";
import { logger } from "./logger.js";

export async function runScenariosTest(): Promise<void> {
  const scenario: EXPERIMENTAL_ScenarioClient = await createScenario(client);
  const scenarioRid = scenario.getScenarioReference();
  logger.info({ scenarioRid }, "createScenario minted a fresh scenario");

  await scenario(createScenarioTestOsdk).applyAction({
    string: "applied under scenario context",
    scenarioRidCreatedOn: scenarioRid,
  });
  logger.info("applied createScenarioTestOsdk under scenario context");

  const editedTypes = await scenario.getEditedEntityTypes();
  logger.info(editedTypes, "scenario edited entity types after action");

  const editedEntities = await scenario.getEditedEntities(ScenarioTestOsdk, {
    pageSize: 50,
  });
  logger.info(
    {
      count: editedEntities.data.length,
      sample: editedEntities.data.slice(0, 3),
    },
    "scenario edited ScenarioTestOsdk entities"
  );

  const res = await client(scenarioOsdkTestAction).applyAction(
    { scenario },
    {
      $returnEdits: true,
    }
  );
  logger.info(res);
}

void runScenariosTest();
