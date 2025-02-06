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

import { client } from "./client.js";
import { fetchAggregationForEmployees } from "./legacy-examples/fetchAggregationForEmployees.js";
import { fetchAggregationForEmployeesGrouped } from "./legacy-examples/fetchAggregationForEmployeesGrouped.js";
import { fetchEmployeeLead } from "./legacy-examples/fetchEmployeeLead.js";
import { fetchEmployeePage } from "./legacy-examples/fetchEmployeePage.js";
import { fetchEmployeePageByAdUsername } from "./legacy-examples/fetchEmployeePageByAdUsername.js";
import { fetchEmployeePageByAdUsernameAndLimit } from "./legacy-examples/fetchEmployeePageByAdUsernameAndLimit.js";

export async function runLegacyExamples(): Promise<void> {
  await fetchEmployeePage(client);
  await fetchEmployeePageByAdUsername(client, "fish");
  await fetchEmployeePageByAdUsernameAndLimit(client, "fish");
  await fetchAggregationForEmployees(client);
  await fetchAggregationForEmployeesGrouped(client);
  await fetchEmployeeLead(client, "bob");
}

void runLegacyExamples();
