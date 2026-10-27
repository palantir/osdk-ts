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

import type {
  InputPreset,
  ResolvedBlockSetInputShape,
} from "@osdk/client.unstable/api";
import {
  getPropertySource,
  OntologyEntityTypeEnum,
  type OntologyDefinition,
} from "@osdk/maker";
import invariant from "tiny-invariant";

import {
  type OntologyRidGenerator,
  type ReadableId,
  ReadableIdGenerator,
} from "../../util/generateRid.js";

export function getDatasetInputPresets(
  ontology: OntologyDefinition,
  ridGenerator: OntologyRidGenerator,
): Map<ReadableId, InputPreset> {
  const presets = new Map<ReadableId, InputPreset>();
  for (const object of Object.values(
    ontology[OntologyEntityTypeEnum.OBJECT_TYPE],
  )) {
    const datasource = object.datasources?.find(
      (source) => source.type === "dataset",
    );
    if (datasource?.type !== "dataset" || datasource.dataset === undefined) {
      continue;
    }

    const reference = datasource.dataset;
    invariant(
      reference.locator.type === "rid",
      "Dataset presets require a RID locator",
    );

    const input = ReadableIdGenerator.getForDataset(object.apiName);
    const locator = ridGenerator.getDatasourceLocators().asMap().get(input);
    invariant(
      locator?.type === "dataset",
      "Dataset input must have a registered locator",
    );

    // Use the branch resolved by the ontology adapter.
    const datasourceLocator = {
      type: "dataset" as const,
      dataset: { rid: reference.locator.rid, branch: locator.dataset.branch },
    };
    presets.set(
      input,
      preset({
        type: "tabularDatasource",
        tabularDatasource: { datasourceLocator },
      }),
    );

    for (const property of object.properties ?? []) {
      const source = getPropertySource(property);
      if (source?.type === "editOnly") continue;
      invariant(
        source?.type === "column" || source?.type === "struct",
        "Dataset properties require explicit column sources",
      );

      const selected = source.type === "struct" ? source.column : source;
      presets.set(
        ReadableIdGenerator.getForDatasetColumn(
          object.apiName,
          selected.column,
        ),
        preset({
          type: "datasourceColumn",
          datasourceColumn: {
            datasource: datasourceLocator,
            name: selected.column,
          },
        }),
      );
    }
  }
  return presets;
}

function preset(shape: ResolvedBlockSetInputShape): InputPreset {
  return {
    value: {
      type: "fromSource",
      fromSource: {
        resolver: {
          type: "resolvedShapeResolver",
          resolvedShapeResolver: shape,
        },
      },
    },
    exportCompatibility: "INCOMPATIBLE",
    enforcement: "SUGGESTED",
    // Downstream consumers may apply presets without consulting this flag.
    isDefault: true,
  };
}
