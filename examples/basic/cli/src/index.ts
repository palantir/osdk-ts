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

import { createClient, createThinClient } from "@osdk/api";
import { Ontology } from "@osdk/examples.basic.sdk";
import type { OntologyType } from "./OntologyType";
import { fetchAggregationForEmployees } from "./examples/fetchAggregationForEmployees";
import { fetchAggregationForEmployeesGrouped } from "./examples/fetchAggregationForEmployeesGrouped";
import { fetchAggregationForEmployeesGroupedThin } from "./examples/fetchAggregationForEmployeesGroupedThin";
import { fetchEmployeeLead } from "./examples/fetchEmployeeLead";
import { fetchEmployeePage } from "./examples/fetchEmployeePage";
import { fetchEmployeePageByAdUsername } from "./examples/fetchEmployeePageByAdUsername";
import { fetchEmployeePageByAdUsernameAndLimit } from "./examples/fetchEmployeePageByAdUsernameAndLimit";
import { fetchEmployeePageThin } from "./examples/fetchEmployeePageThin";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FOUNDRY_USER_TOKEN: string;
      FOUNDRY_STACK: string;
    }
  }
}

export const client = createClient(
  Ontology as OntologyType,
  process.env.FOUNDRY_STACK,
  () => process.env.FOUNDRY_USER_TOKEN,
);

export const thinClient = createThinClient(
  Ontology as OntologyType,
  process.env.FOUNDRY_STACK,
  () => process.env.FOUNDRY_USER_TOKEN,
);

async function runTests() {
  try {
    await fetchEmployeePage(client);
    await fetchEmployeePageByAdUsername(client, "fish");
    await fetchEmployeePageByAdUsernameAndLimit(client, "fish");
    await fetchAggregationForEmployees(client);
    await fetchAggregationForEmployeesGrouped(client);
    await fetchEmployeePageThin(thinClient);

    await fetchAggregationForEmployeesGroupedThin(thinClient);
    await fetchEmployeeLead(client, "bob");
  } catch (e) {
    console.error("Caught an error we did not expect", typeof e);
    console.error(e);
  }
}

runTests();
