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

import { defineInterface } from "@osdk/maker";

const person = defineInterface({
  apiName: "Person",
  displayName: "Person",
  properties: { firstName: { type: "string" } },
});

defineInterface({
  apiName: "LegacyPerson",
  displayName: "Legacy person",
  status: {
    type: "deprecated",
    message: "Use Person instead",
    deadline: "2027-01-01T00:00:00Z",
  },
  properties: { fullName: { type: "string" } },
  schemaMigrations: {
    transitions: [
      {
        id: "replaceWithPerson",
        title: "Replace with Person",
        gracePeriod: { type: "afterInstall", days: 30 },
        instructions: [
          {
            type: "replace",
            replacement: {
              interfaceType: person,
              propertyMappings: { fullName: "firstName" },
            },
          },
        ],
      },
    ],
  },
});
