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
import type {
  Icon,
  ObjectTypeFullMetadata,
  PropertyApiName,
  PropertyV2,
} from "@osdk/internal.foundry.core";
import { wirePropertyV2ToSdkPrimaryKeyTypeDefinition } from "./wirePropertyV2ToSdkPrimaryKeyTypeDefinition.js";
import { wirePropertyV2ToSdkPropertyDefinition } from "./wirePropertyV2ToSdkPropertyDefinition.js";

export function wireObjectTypeFullMetadataToSdkObjectTypeDefinition(
  objectTypeWithLink: ObjectTypeFullMetadata & {
    objectType: {
      properties: Record<PropertyApiName, PropertyV2 & { nullable?: boolean }>;
    };
  },
  v2: boolean,
): ObjectTypeDefinition<any> {
  if (
    objectTypeWithLink.objectType
      .properties[objectTypeWithLink.objectType.primaryKey] === undefined
  ) {
    throw new Error(
      `Primary key ${objectTypeWithLink.objectType.primaryKey} not found in ${objectTypeWithLink.objectType.apiName}`,
    );
  }

  // saved ontology.json files may not have this implementsInterfaces2 so we need to handle
  if (
    objectTypeWithLink.implementsInterfaces2 == null
    && objectTypeWithLink.implementsInterfaces != null
  ) {
    throw new Error(
      "Your ontology.json file is missing the implementsInterfaces2 field. Please regenerate it.",
    );
  }

  const interfaceMap = objectTypeWithLink.implementsInterfaces2
    ? Object.fromEntries(
      Object.entries(objectTypeWithLink.implementsInterfaces2).map(
        ([interfaceApiName, impl]) => [interfaceApiName, impl.properties],
      ),
    )
    : {};

  return {
    type: "object",
    apiName: objectTypeWithLink.objectType.apiName,
    description: objectTypeWithLink.objectType.description,
    primaryKeyApiName: objectTypeWithLink.objectType.primaryKey,
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
    implements: objectTypeWithLink.implementsInterfaces as string[],
    interfaceMap,
    inverseInterfaceMap: Object.fromEntries(
      Object.entries(interfaceMap).map((
        [interfaceApiName, props],
      ) => [interfaceApiName, invertProps(props)]),
    ),
    icon: supportedIconTypes.includes(objectTypeWithLink.objectType.icon.type)
      ? objectTypeWithLink.objectType.icon
      : undefined,
    titleProperty: objectTypeWithLink.objectType.titleProperty,
    displayName: objectTypeWithLink.objectType.displayName,
    pluralDisplayName: objectTypeWithLink.objectType.pluralDisplayName,
    status: objectTypeWithLink.objectType.status,
    rid: objectTypeWithLink.objectType.rid,
    visibility: objectTypeWithLink.objectType.visibility,
  };
}

function invertProps(
  a?: Record<string, string>,
): typeof a extends undefined ? typeof a : Record<string, string> {
  return (a
    ? Object.fromEntries(Object.entries(a).map(([k, v]) => [v, k]))
    : undefined) as typeof a extends undefined ? typeof a
      : Record<string, string>;
}

const supportedIconTypes = ["blueprint"];
