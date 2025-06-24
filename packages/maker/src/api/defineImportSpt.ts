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
import { importOntologyEntity } from "./importOntologyEntity.js";
import {
  OntologyEntityTypeEnum,
  type PropertyTypeType,
  type SharedPropertyType,
} from "./types.js";

/**
 * Defines a foreign shared property type you want to take as an input to your product. The typeHint field is used for OSDK generation
 */
export function importSharedPropertyType(
  opts: {
    apiName: string;
    packageName?: string;
    typeHint: PropertyTypeType;
    array?: boolean;
  },
): SharedPropertyType {
  const { apiName, packageName, typeHint, array } = opts;
  const fullApiName = packageName === undefined
    ? apiName
    : `${packageName}.${apiName}`;
  if (packageName !== undefined) {
    invariant(
      !packageName.endsWith("."),
      "Package name format invalid ends with period",
    );

    invariant(
      packageName.match("[A-Z]") == null,
      "Package name includes upper case characters",
    );
  }
  const spt: SharedPropertyType = {
    apiName: fullApiName,
    type: typeHint,
    nonNameSpacedApiName: apiName,
    array: array ?? false,
    __type: OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
  };
  importOntologyEntity(spt);
  return spt;
}
