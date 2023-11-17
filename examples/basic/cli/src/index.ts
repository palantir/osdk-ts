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

import { createThinClient } from "@osdk/api";
import { createClient } from "@osdk/client";
import { Ontology } from "@osdk/examples.basic.sdk";
import invariant from "tiny-invariant";
import { fetchAggregationForEmployees } from "./examples/fetchAggregationForEmployees";
import { fetchAggregationForEmployeesGrouped } from "./examples/fetchAggregationForEmployeesGrouped";
import { fetchAggregationForEmployeesGroupedThin } from "./examples/fetchAggregationForEmployeesGroupedThin";
import { fetchEmployeeLead } from "./examples/fetchEmployeeLead";
import { fetchEmployeePage } from "./examples/fetchEmployeePage";
import { fetchEmployeePageByAdUsername } from "./examples/fetchEmployeePageByAdUsername";
import { fetchEmployeePageByAdUsernameAndLimit } from "./examples/fetchEmployeePageByAdUsernameAndLimit";
import { fetchEmployeePageThin } from "./examples/fetchEmployeePageThin";
import type { OntologyType } from "./OntologyType";
import { typeChecks } from "./typeChecks";
import type {} from "./__global";

invariant(process.env.FOUNDRY_STACK != undefined);
invariant(process.env.FOUNDRY_USER_TOKEN != undefined);

/**
 * TLDR: If you're starting out, just use `client` and ignore `thinClient`.
 *
 * The client and thinClient simply demonstrate two different ways to use the OSDK.
 *
 * The `client`, being concrete, won't tree shake as well. So if you're doing something
 * like really tiny lazily loaded pages, there may be a cost you don't want to pay.
 *
 * That said, the `client` provides entire intellisense/discovery of what you can
 * do and thus is the suggested starting point.
 */
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

    await typeChecks(client);
  } catch (e) {
    console.error("Caught an error we did not expect", typeof e);
    console.error(e);
  }
}

runTests();
