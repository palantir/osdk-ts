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

import type { ObjectPropertyType, ObjectType } from "@osdk/maker";
import { OntologyEntityTypeEnum } from "@osdk/maker";
import { consola } from "consola";
import { mapPropertyType } from "./mapPropertyType.js";
import { withoutNamespace } from "./utils.js";

interface GatewayObjectTypeFullMetadata {
  objectType: {
    apiName: string;
    displayName?: string;
    description?: string;
    primaryKey: string;
    titleProperty: string;
    status: string;
    visibility?: string;
    properties: Record<
      string,
      {
        displayName?: string;
        description?: string;
        dataType: { type: string; [key: string]: unknown };
      }
    >;
  };
  sharedPropertyTypeMapping?: Record<string, string>;
}

export function convertObjectType(
  fullMetadata: GatewayObjectTypeFullMetadata,
): ObjectType {
  const obj = fullMetadata.objectType;
  const properties: Array<ObjectPropertyType> = [];

  for (const [propApiName, propV2] of Object.entries(obj.properties)) {
    const mapped = mapPropertyType(propV2.dataType);
    if (!mapped) {
      consola.warn(
        `Skipping property "${propApiName}" on object "${obj.apiName}": unsupported type "${propV2.dataType.type}"`,
      );
      continue;
    }

    const prop: ObjectPropertyType = {
      apiName: propApiName,
      displayName: propV2.displayName ?? propApiName,
      type: mapped.type,
    };
    if (mapped.array) {
      (prop as ObjectPropertyType & { array?: boolean }).array = true;
    }
    properties.push(prop);
  }

  const shortName = withoutNamespace(obj.apiName);

  return {
    __type: OntologyEntityTypeEnum.OBJECT_TYPE,
    apiName: obj.apiName,
    displayName: obj.displayName ?? shortName,
    pluralDisplayName: (obj.displayName ?? shortName) + "s",
    primaryKeyPropertyApiName: obj.primaryKey,
    titlePropertyApiName: obj.titleProperty,
    properties,
    description: obj.description,
    visibility: obj.visibility as "NORMAL" | "PROMINENT" | "HIDDEN" | undefined,
    status: mapObjectStatus(obj.status),
  };
}

function mapObjectStatus(
  status: string,
): "active" | "experimental" | undefined {
  switch (status) {
    case "ACTIVE":
      return "active";
    case "EXPERIMENTAL":
      return "experimental";
    default:
      return "active";
  }
}
