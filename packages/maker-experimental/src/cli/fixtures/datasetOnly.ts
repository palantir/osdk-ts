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

import { defineDataset } from "../../index.js";

defineDataset({
  name: "Audit log",
  columns: {
    event_id: { type: "string" },
    occurred_at: { type: "timestamp" },
    tags: { type: "string", array: true },
    amount: { type: { type: "decimal", precision: 12, scale: 2 } },
    metadata: {
      type: {
        type: "struct",
        structDefinition: { active: "boolean" },
      },
    },
  },
});
