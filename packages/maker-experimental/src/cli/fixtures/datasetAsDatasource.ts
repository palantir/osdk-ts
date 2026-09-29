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

import { defineObject } from "@osdk/maker";

import { defineDataset } from "../../index.js";

const events = defineDataset({
  name: "Events",
  columns: {
    event_id: { type: "string" },
    description: { type: "string" },
    event_metadata: {
      type: { type: "struct", structDefinition: { source: "string" } },
    },
    unused: { type: "integer" },
  },
});

defineObject({
  apiName: "Event",
  displayName: "Event",
  pluralDisplayName: "Events",
  primaryKeyPropertyApiName: "id",
  titlePropertyApiName: "id",
  properties: {
    id: { type: "string" },
    description: { type: "string" },
    metadata: {
      type: { type: "struct", structDefinition: { source: "string" } },
    },
    notes: { type: "string", editOnly: true },
  },
  datasources: [
    {
      type: "dataset",
      dataset: events,
      propertyMapping: { id: "event_id", metadata: "event_metadata" },
    },
  ],
});

defineObject({
  apiName: "EventSummary",
  displayName: "Event summary",
  pluralDisplayName: "Event summaries",
  primaryKeyPropertyApiName: "id",
  titlePropertyApiName: "id",
  properties: { id: { type: "string" } },
  datasources: [
    {
      type: "dataset",
      dataset: events,
      propertyMapping: { id: "event_id" },
      objectSecurityPolicy: { name: "Events" },
    },
  ],
});
