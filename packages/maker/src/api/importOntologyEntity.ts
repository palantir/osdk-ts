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

import { importedTypes } from "./defineOntology.js";
import type { OntologyEntityBase } from "./types.js";
import { OntologyEntityTypeEnum } from "./types.js";

export function importOntologyEntity<T extends OntologyEntityBase>(e: T): void {
  if (e.__type !== OntologyEntityTypeEnum.VALUE_TYPE) {
    importedTypes[e.__type][e.apiName] = e as any;
    return;
  }
  // value types are a special case
  if (
    importedTypes[OntologyEntityTypeEnum.VALUE_TYPE][e.apiName]
      === undefined
  ) {
    importedTypes[OntologyEntityTypeEnum.VALUE_TYPE][e.apiName] = [];
  }
  importedTypes[OntologyEntityTypeEnum.VALUE_TYPE][e.apiName]
    .push(e as any);
}
