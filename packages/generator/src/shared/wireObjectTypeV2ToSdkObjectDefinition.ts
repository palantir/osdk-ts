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
import type { ObjectTypeWithLink } from "@osdk/gateway/types";
import { wirePropertyV2ToSdkPrimaryKeyTypeDefinition } from "./wirePropertyV2ToSdkPrimaryKeyTypeDefinition";
import { wirePropertyV2ToSdkPropertyDefinition } from "./wirePropertyV2ToSdkPropertyDefinition";

export function wireObjectTypeV2ToSdkObjectDefinition(
  objectTypeWithLink: ObjectTypeWithLink,
  v2: boolean,
): ObjectTypeDefinition<any, any> {
  if (
    objectTypeWithLink.objectType
      .properties[objectTypeWithLink.objectType.primaryKey] === undefined
  ) {
    throw new Error(
      `Primary key ${objectTypeWithLink.objectType.primaryKey} not found in ${objectTypeWithLink.objectType.apiName}`,
    );
  }
  return {
    apiName: objectTypeWithLink.objectType.apiName,
    description: objectTypeWithLink.objectType.description,
    primaryKeyType: wirePropertyV2ToSdkPrimaryKeyTypeDefinition(
      objectTypeWithLink.objectType
        .properties[objectTypeWithLink.objectType.primaryKey],
    ),
    links: Object.fromEntries(objectTypeWithLink.linkTypes.map(linkType => {
      return [linkType.apiName, {
        multiplicity: linkType.cardinality === "MANY",
        targetType: linkType.objectTypeApiName,
      }];
    })),
    properties: Object.fromEntries(
      Object.entries(objectTypeWithLink.objectType.properties).map((
        [key, value],
      ) => [
        key,
        wirePropertyV2ToSdkPropertyDefinition(
          value,
          !(v2 && objectTypeWithLink.objectType.primaryKey === key),
        ),
      ]),
    ),
  };
}
