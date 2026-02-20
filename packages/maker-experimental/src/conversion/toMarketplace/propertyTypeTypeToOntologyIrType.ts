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

import type { StructFieldType, Type } from "@osdk/client.unstable";
import type { PropertyTypeType } from "@osdk/maker";
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { distributeTypeHelper } from "../toConjure/distributeTypeHelper.js";

export function propertyTypeTypeToOntologyIrType(
  type: PropertyTypeType,
  ridGenerator: OntologyRidGenerator,
): Type {
  switch (true) {
    case (typeof type === "object" && type.type === "marking"):
      return {
        "type": "marking",
        marking: { markingType: type.markingType },
      };

    case (typeof type === "object" && type.type === "struct"):
      const structFields: Array<StructFieldType> = new Array();
      for (const key in type.structDefinition) {
        const fieldTypeDefinition = type.structDefinition[key];
        let field: StructFieldType;
        if (typeof fieldTypeDefinition === "string") {
          field = {
            structFieldRid: ridGenerator.generateRid(`structfield.${key}`),
            apiName: key,
            displayMetadata: { displayName: key, description: undefined },
            typeClasses: [],
            aliases: [],
            fieldType: propertyTypeTypeToOntologyIrType(
              fieldTypeDefinition,
              ridGenerator,
            ),
          };
        } else {
          // If it is a full form type definition then process it as such
          if ("fieldType" in fieldTypeDefinition) {
            field = {
              ...fieldTypeDefinition,
              structFieldRid: ridGenerator.generateRid(`structfield.${key}`),
              apiName: key,
              fieldType: propertyTypeTypeToOntologyIrType(
                fieldTypeDefinition.fieldType,
                ridGenerator,
              ),
              displayMetadata: fieldTypeDefinition.displayMetadata
                ?? { displayName: key, description: undefined },
              typeClasses: fieldTypeDefinition.typeClasses ?? [],
              aliases: fieldTypeDefinition.aliases ?? [],
            };
          } else {
            field = {
              structFieldRid: ridGenerator.generateRid(`structfield.${key}`),
              apiName: key,
              displayMetadata: { displayName: key, description: undefined },
              typeClasses: [],
              aliases: [],
              fieldType: propertyTypeTypeToOntologyIrType(
                fieldTypeDefinition,
                ridGenerator,
              ),
            };
          }
        }

        structFields.push(field);
      }

      return {
        type: "struct",
        struct: { structFields },
      };

    case (typeof type === "object" && type.type === "string"):
      return {
        "type": "string",
        "string": {
          analyzerOverride: undefined,
          enableAsciiFolding: type.enableAsciiFolding,
          isLongText: type.isLongText ?? false,
          supportsEfficientLeadingWildcard:
            type.supportsEfficientLeadingWildcard ?? false,
          supportsExactMatching: type.supportsExactMatching ?? true,
          supportsFullTextRegex: type.supportsFullTextRegex,
        },
      };

    case (typeof type === "object" && type.type === "decimal"):
      return {
        "type": "decimal",
        "decimal": {
          precision: type.precision,
          scale: type.scale,
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
    case (type === "attachment"):
      return {
        type: "attachment",
        attachment: {},
      };

    default:
      // use helper function to distribute `type` properly
      if (typeof type === "object") {
        throw new Error(`Unhandled exotic type: ${JSON.stringify(type)}`);
      }
      return distributeTypeHelper(type);
  }
}
