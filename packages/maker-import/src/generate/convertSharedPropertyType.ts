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

import type { SharedPropertyType } from "@osdk/maker";
import { OntologyEntityTypeEnum } from "@osdk/maker";
import { consola } from "consola";
import { mapPropertyType } from "./mapPropertyType.js";
import { withoutNamespace } from "./utils.js";

interface GatewaySharedPropertyType {
  apiName: string;
  displayName?: string;
  description?: string;
  dataType: { type: string; [key: string]: unknown };
}

export function convertSharedPropertyType(
  spt: GatewaySharedPropertyType,
): SharedPropertyType | undefined {
  const mapped = mapPropertyType(spt.dataType);
  if (!mapped) {
    consola.warn(
      `Skipping shared property type "${spt.apiName}": unsupported type "${spt.dataType.type}"`,
    );
    return undefined;
  }

  return {
    __type: OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
    apiName: spt.apiName,
    nonNameSpacedApiName: withoutNamespace(spt.apiName),
    displayName: spt.displayName ?? withoutNamespace(spt.apiName),
    type: mapped.type,
    array: mapped.array,
    description: spt.description,
  };
}
