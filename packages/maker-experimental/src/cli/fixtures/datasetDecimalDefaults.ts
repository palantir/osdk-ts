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
  name: "Decimals",
  columns: {
    scalar: { type: "decimal" },
    precisionOnly: { type: { type: "decimal", precision: 12 } },
    scaleOnly: { type: { type: "decimal", scale: 2 } },
    arrayValues: { type: "decimal", array: true },
    structValues: {
      type: {
        type: "struct",
        structDefinition: {
          amount: { type: "decimal" },
          minimum: { type: "decimal", precision: 1, scale: 0 },
          maximum: { type: "decimal", precision: 38, scale: 38 },
        },
      },
      array: true,
    },
    emptyStruct: { type: { type: "struct", structDefinition: {} } },
  },
});

defineDataset({ name: "Empty dataset", columns: {} });
