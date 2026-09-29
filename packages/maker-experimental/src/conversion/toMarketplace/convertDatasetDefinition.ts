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

import invariant from "tiny-invariant";

import type { DatasetDefinition } from "../../api/defineDataset.js";
import type { DatasetBlockDefinition } from "../../cli/generateBackingDataset.js";
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { propertyTypeTypeToOntologyIrType } from "./propertyTypeTypeToOntologyIrType.js";

export function convertDatasetDefinition(
  dataset: DatasetDefinition,
  ridGenerator: OntologyRidGenerator,
): DatasetBlockDefinition {
  invariant(
    dataset.schemaType !== "none",
    `Dataset "${dataset.name}" schemaType "none" is not supported for generation yet`,
  );
  return {
    name: dataset.name,
    inputType: dataset.inputType ?? "batch",
    schemaType: dataset.schemaType ?? "tabular",
    columns: Object.entries(dataset.columns).map(([columnName, column]) => {
      const type = propertyTypeTypeToOntologyIrType(
        column.type,
        ridGenerator,
        `dataset.${dataset.name}.${columnName}`,
      );
      return {
        name: columnName,
        type: column.array
          ? { type: "array", array: { subtype: type, reducers: [] } }
          : type,
      };
    }),
  };
}
