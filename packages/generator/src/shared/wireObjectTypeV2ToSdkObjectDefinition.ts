/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectTypeDefinition } from "@osdk/api";
import type { LinkTypeSideV2, ObjectTypeV2 } from "@osdk/gateway/types";
import { wirePropertyV2ToSdkPrimaryKeyTypeDefinition } from "./wirePropertyV2ToSdkPrimaryKeyTypeDefinition";
import { wirePropertyV2ToSdkPropertyDefinition } from "./wirePropertyV2ToSdkPropertyDefinition";

export function wireObjectTypeV2ToSdkObjectDefinition(
  input: ObjectTypeV2,
  linkTypes: LinkTypeSideV2[] = [],
  v2: boolean,
): ObjectTypeDefinition<any, any> {
  return {
    apiName: input.apiName,
    description: input.description,
    primaryKeyType: wirePropertyV2ToSdkPrimaryKeyTypeDefinition(
      input.properties[input.primaryKey],
    ),
    links: Object.fromEntries(linkTypes.map(linkType => {
      return [linkType.apiName, {
        multiplicity: linkType.cardinality === "MANY",
        targetType: linkType.objectTypeApiName,
      }];
    })),
    properties: Object.fromEntries(
      Object.entries(input.properties).map((
        [key, value],
      ) => [
        key,
        wirePropertyV2ToSdkPropertyDefinition(
          value,
          !(v2 && input.primaryKey === key),
        ),
      ]),
    ),
  };
}
