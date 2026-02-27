/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import * as fs from "fs";
import { getResourcesFilePath } from "./environment.js";
import type { ModelResource, ModelValue, ResourcesFile } from "./types.js";

function loadResourcesFilePreview(): ResourcesFile {
  const path = getResourcesFilePath();
  if (!fs.existsSync(path)) {
    throw new Error(`Resources file not found at ${path}`);
  }

  const data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data) as ResourcesFile;
}

function buildModelAliasMap(
  models: ModelResource[],
): Record<string, ModelValue> {
  const map: Record<string, ModelValue> = {};
  for (const model of models) {
    if (model.alias != null) {
      map[model.alias] = { id: model.identifier };
    }
  }
  return map;
}

export function getCustomPreview(alias: string): string {
  const resourcesFile = loadResourcesFilePreview();

  if (!(alias in resourcesFile.resources.custom)) {
    const available = Object.keys(resourcesFile.resources.custom);
    throw new Error(
      `Custom alias '${alias}' not found. Available aliases: [${
        available.join(", ")
      }]`,
    );
  }

  return resourcesFile.resources.custom[alias];
}

export function getModelPreview(alias: string): ModelValue {
  const resourcesFile = loadResourcesFilePreview();
  const modelAliasMap = buildModelAliasMap(resourcesFile.resources.models);

  if (!(alias in modelAliasMap)) {
    const available = Object.keys(modelAliasMap);
    throw new Error(
      `Model alias '${alias}' not found. Available aliases: [${
        available.join(", ")
      }]`,
    );
  }

  return modelAliasMap[alias];
}
