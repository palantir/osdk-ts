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

import { client } from "./client.js";
import { checkUnstableBulkLinks } from "./public/checkUnstableBulkLinks.js";
import { runAggregationGroupByDatesTest } from "./runAggregationGroupByDatesTest.js";
import { runAggregationsTest } from "./runAggregationsTest.js";
import { runAssignEmployeeToVentureTest } from "./runAssignEmployeeToVentureTest.js";
import { runFoundrySdkClientVerificationTest } from "./runFoundrySdkClientVerificationTest.js";
import { runGeoQueriesTest } from "./runGeoQueriesTest.js";
import { runGeotimeSeriesReferenceTests } from "./runGeotimeSeriesTest.js";
import { runInterfacesTest } from "./runInterfacesTest.js";
import { runLegacyExamples } from "./runLegacyExamples.js";
import { runQueriesTest } from "./runQueriesTest.js";
import { runStructsTest } from "./runStructsTest.js";
import { runSubscriptionsTest } from "./runSubscriptionsTest.js";
import { runTimeseriesTest } from "./runTimeseriesTest.js";
import { typeChecks } from "./typeChecks.js";

const runOld = false;
const testSubscriptions = false;

async function runTests() {
  try {
    await checkUnstableBulkLinks();

    if (runOld) {
      await runLegacyExamples();
    }
    if (testSubscriptions) {
      await runSubscriptionsTest();

      // we don't need the console flooded with additional things
      return;
    }

    const datasetRid =
      "ri.foundry.main.dataset.58070dbb-dd3b-4c82-b012-9c2f8a13dd83";
    await runFoundrySdkClientVerificationTest(datasetRid);

    await runInterfacesTest();

    // only works in default ontology
    await runGeoQueriesTest();

    await runAssignEmployeeToVentureTest();

    await runAggregationsTest();

    await runAggregationGroupByDatesTest();

    await runQueriesTest();

    if (runOld) await typeChecks(client);

    await runTimeseriesTest();

    await runGeotimeSeriesReferenceTests();

    await runStructsTest();
  } catch (e) {
    console.error(`Caught an error we did not expect, type: ${typeof e}`);
    console.error(e);
  }
}

void runTests();
