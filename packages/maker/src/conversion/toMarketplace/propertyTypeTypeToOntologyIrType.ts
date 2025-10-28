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

import type {
  OntologyIrStructFieldType,
  OntologyIrType,
} from "@osdk/client.unstable";
import type { PropertyTypeType } from "../../api/properties/PropertyTypeType.js";
import { distributeTypeHelper } from "../toConjure/distributeTypeHelper.js";

export function propertyTypeTypeToOntologyIrType(
  type: PropertyTypeType,
): OntologyIrType {
  switch (true) {
    case (typeof type === "object" && "markingType" in type):
      return {
        "type": "marking",
        marking: { markingType: type.markingType },
      };

    case (typeof type === "object" && "structDefinition" in type):
      const structFields: Array<OntologyIrStructFieldType> = new Array();
      for (const key in type.structDefinition) {
        const fieldTypeDefinition = type.structDefinition[key];
        let field: OntologyIrStructFieldType;
        if (typeof fieldTypeDefinition === "string") {
          field = {
            apiName: key,
            displayMetadata: { displayName: key, description: undefined },
            typeClasses: [],
            aliases: [],
            fieldType: propertyTypeTypeToOntologyIrType(fieldTypeDefinition),
          };
        } else {
          // If it is a full form type definition then process it as such
          if ("fieldType" in fieldTypeDefinition) {
            field = {
              ...fieldTypeDefinition,
              apiName: key,
              fieldType: propertyTypeTypeToOntologyIrType(
                fieldTypeDefinition.fieldType,
              ),
              typeClasses: fieldTypeDefinition.typeClasses ?? [],
              aliases: fieldTypeDefinition.aliases ?? [],
            };
          } else {
            field = {
              apiName: key,
              displayMetadata: { displayName: key, description: undefined },
              typeClasses: [],
              aliases: [],
              fieldType: propertyTypeTypeToOntologyIrType(fieldTypeDefinition),
            };
          }
        }

        structFields.push(field);
      }

      return {
        type: "struct",
        struct: { structFields },
      };

    case (typeof type === "object" && "isLongText" in type):
      return {
        "type": "string",
        "string": {
          analyzerOverride: undefined,
          enableAsciiFolding: undefined,
          isLongText: type.isLongText,
          supportsEfficientLeadingWildcard:
            type.supportsEfficientLeadingWildcard,
          supportsExactMatching: type.supportsExactMatching,
        },
      };

    case (type === "geopoint"):
      return { type: "geohash", geohash: {} };

    case (type === "decimal"):
      return { type, [type]: { precision: undefined, scale: undefined } };

    case (type === "string"):
      return {
        type,
        [type]: {
          analyzerOverride: undefined,
          enableAsciiFolding: undefined,
          isLongText: false,
          supportsEfficientLeadingWildcard: false,
          supportsExactMatching: true,
        },
      };

    case (type === "mediaReference"):
      return {
        type: type,
        mediaReference: {},
      };

    case (type === "geotimeSeries"):
      return {
        type: "geotimeSeriesReference",
        geotimeSeriesReference: {},
      };

    default:
      // use helper function to distribute `type` properly
      return distributeTypeHelper(type);
  }
}
