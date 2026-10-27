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

import { column, defineObject } from "@osdk/maker";
import { createDatasetReference } from "@osdk/resource";

const schema = { columns: { EMPLOYEE_ID: { type: "string" } } } as const;
const datasets = {
  RidEmployees: createDatasetReference(
    {
      type: "rid",
      rid: "ri.foundry.main.dataset.12345678-1234-1234-1234-123456789abc",
    },
    { schema },
  ),
  LegacyEmployees: undefined,
};

for (const [apiName, dataset] of Object.entries(datasets)) {
  defineObject({
    apiName,
    displayName: apiName,
    pluralDisplayName: apiName,
    primaryKeyPropertyApiName: "id",
    titlePropertyApiName: "id",
    properties: {
      id: {
        type: "string",
        ...(dataset ? { source: column(dataset, "EMPLOYEE_ID") } : {}),
      },
      note: { type: "string", editOnly: true },
    },
    datasources: [{ type: "dataset", dataset }],
  });
}
