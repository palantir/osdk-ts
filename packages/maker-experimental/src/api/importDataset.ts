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

import {
  type DatasetDefinition,
  normalizeDatasetDefinition,
} from "./defineDataset.js";

export type ImportedDatasetDefinition = DatasetDefinition & {
  packageName: string;
  /** The randomness key used to generate the upstream product. */
  randomnessKey?: string;
};

/** References a dataset exported by another product. */
export function importDataset(
  definition: ImportedDatasetDefinition,
): ImportedDatasetDefinition {
  const dataset = normalizeDatasetDefinition(definition);
  invariant(
    typeof definition.packageName === "string" &&
      /^[a-z0-9-]+(\.[a-z0-9-]+)*$/u.test(definition.packageName),
    `Dataset "${dataset.name}" packageName must be a non-empty product namespace without a trailing period`,
  );
  invariant(
    definition.randomnessKey === undefined ||
      (typeof definition.randomnessKey === "string" &&
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/u.test(
          definition.randomnessKey,
        )),
    `Dataset "${dataset.name}" randomnessKey must be a UUID`,
  );
  return {
    ...dataset,
    packageName: definition.packageName,
    randomnessKey: definition.randomnessKey,
  };
}
