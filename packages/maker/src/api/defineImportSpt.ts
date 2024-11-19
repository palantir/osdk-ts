/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import { ontologyDefinition } from "./defineOntology.js";
import type { PropertyTypeType, SharedPropertyType } from "./types.js";

/**
 * Defines a foreign shared property type you want to take as an input to your product. The typeHint field is used for OSDK generation
 */
export function importSharedPropertyType(
  opts: {
    apiName: string;
    packageName?: string;
    typeHint: PropertyTypeType;
  },
): SharedPropertyType {
  const { apiName, packageName, typeHint } = opts;
  if (packageName !== undefined) {
    ontologyDefinition.importedTypes.sharedPropertyTypes.add({
      apiName,
      packageName,
    });
    invariant(
      !packageName.endsWith("."),
      "Package name format invalid ends with period",
    );

    invariant(
      packageName.match("[A-Z]") == null,
      "Package name includes upper case characters",
    );

    return { apiName: packageName + "." + apiName, type: typeHint };
  }
  return { apiName: apiName, type: typeHint };
}
