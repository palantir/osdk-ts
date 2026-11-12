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

import type { DatasetInputSpec } from "@osdk/widget.api";
import { ResourceUsage } from "@osdk/widget.api";

const DATASETS_MAX_COUNT = 50;
const DATASET_RID_PATTERN =
  /^ri\.foundry\.([a-z0-9][a-z0-9-]*)?\.dataset\.[a-zA-Z0-9_\-.]+$/u;
const SUPPORTED_USAGES = new Set<string>([ResourceUsage.READ]);

/**
 * Validates the datasets declared in resources.json, since the file content is not type-checked.
 * Aliases are not validated here - validateAliases validates them for all resource types.
 */
export function validateDatasets(
  datasets: unknown,
): asserts datasets is Array<DatasetInputSpec> {
  if (!Array.isArray(datasets)) {
    throw new Error('resources.json "resources.datasets" must be an array');
  }
  if (datasets.length > DATASETS_MAX_COUNT) {
    throw new Error(
      `resources.json can declare at most ${DATASETS_MAX_COUNT} datasets, found ${datasets.length}`,
    );
  }
  datasets.forEach((dataset: unknown, index) => {
    if (typeof dataset !== "object" || dataset == null) {
      throw new Error(`Dataset at index ${index} must be an object`);
    }
    const { identifier, usage } = dataset as Partial<
      Record<keyof DatasetInputSpec, unknown>
    >;
    validateIdentifier(identifier, index);
    validateUsage(usage, index);
  });
}

function validateIdentifier(identifier: unknown, index: number): void {
  const rid =
    typeof identifier === "object" && identifier != null
      ? (identifier as { rid?: unknown }).rid
      : undefined;
  if (typeof rid !== "string" || rid.length === 0) {
    throw new Error(
      `Dataset at index ${index} must have a non-empty "identifier.rid"`,
    );
  }
  if (!DATASET_RID_PATTERN.test(rid)) {
    throw new Error(
      `Dataset rid "${rid}" at index ${index} does not match allowed pattern (must be a dataset rid, e.g. ri.foundry.main.dataset.<id>)`,
    );
  }
}

function validateUsage(usage: unknown, index: number): void {
  if (!Array.isArray(usage) || usage.length === 0) {
    throw new Error(
      `Dataset at index ${index} must have a non-empty "usage" array`,
    );
  }
  for (const value of usage) {
    if (typeof value !== "string" || !SUPPORTED_USAGES.has(value)) {
      throw new Error(
        `Dataset at index ${index} has unsupported usage ${JSON.stringify(
          value,
        )}. Supported dataset usages are: ${[...SUPPORTED_USAGES]
          .map((supportedUsage) => `"${supportedUsage}"`)
          .join(", ")}.`,
      );
    }
  }
}
