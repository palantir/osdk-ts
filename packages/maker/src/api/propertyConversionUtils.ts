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

import type {
  DataConstraint,
  DataConstraints,
  OntologyIrStructFieldType,
  OntologyIrType,
  PropertyTypeDataConstraints,
  PropertyTypeDataConstraints_array,
  PropertyTypeDataConstraints_boolean,
  PropertyTypeDataConstraints_date,
  PropertyTypeDataConstraints_decimal,
  PropertyTypeDataConstraints_double,
  PropertyTypeDataConstraints_float,
  PropertyTypeDataConstraints_integer,
  PropertyTypeDataConstraints_long,
  PropertyTypeDataConstraints_short,
  PropertyTypeDataConstraints_string,
  PropertyTypeDataConstraints_struct,
  PropertyTypeDataConstraints_timestamp,
  PropertyTypeDataConstraintsWrapper,
  ValueTypeApiNameReference,
  ValueTypeDataConstraint,
} from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import type {
  Nullability,
  PropertyTypeType,
  TypeClass,
  ValueTypeDefinitionVersion,
} from "./types.js";

export const defaultTypeClasses: TypeClass[] = [{
  kind: "render_hint",
  name: "SELECTABLE",
}, { kind: "render_hint", name: "SORTABLE" }];

// ExperimentalTimeDependentV1 and Attachment types should be included here once supported
export function shouldNotHaveRenderHints(type: PropertyTypeType): boolean {
  return ["struct", "mediaReference", "geotimeSeries"].includes(
    getPropertyTypeName(type),
  );
}

export function hasRenderHints(typeClasses: TypeClass[] | undefined): boolean {
  return (typeClasses ?? []).some(tc =>
    tc.kind.toLowerCase() === "render_hint"
  );
}

export function getPropertyTypeName(type: PropertyTypeType): string {
  return typeof type === "object" ? type.type : type;
}

export function convertValueType(
  valueType: ValueTypeDefinitionVersion,
): ValueTypeApiNameReference {
  return {
    apiName: valueType.apiName,
    version: valueType.version,
  };
}

export function convertValueTypeDataConstraints(
  dataConstraints: ValueTypeDataConstraint[],
): DataConstraints | undefined {
  if (dataConstraints.length === 0) {
    return undefined;
  }

  const propertyTypeConstraints: PropertyTypeDataConstraintsWrapper[] =
    dataConstraints.map(
      (constraint): PropertyTypeDataConstraintsWrapper => ({
        constraints: dataConstraintToPropertyTypeDataConstraint(
          constraint.constraint.constraint,
        ),
        failureMessage: constraint.constraint.failureMessage,
      }),
    );

  return {
    propertyTypeConstraints,
  };
}

export function dataConstraintToPropertyTypeDataConstraint(
  dc: DataConstraint,
): PropertyTypeDataConstraints {
  switch (dc.type) {
    case "array":
      return { ...dc } as PropertyTypeDataConstraints_array;

    case "boolean":
      return { ...dc } as PropertyTypeDataConstraints_boolean;

    case "binary":
      throw new Error("Binary type constraints are not supported");

    case "date":
      return { ...dc } as PropertyTypeDataConstraints_date;

    case "decimal":
      return { ...dc } as PropertyTypeDataConstraints_decimal;

    case "double":
      return { ...dc } as PropertyTypeDataConstraints_double;

    case "float":
      return { ...dc } as PropertyTypeDataConstraints_float;

    case "integer":
      return { ...dc } as PropertyTypeDataConstraints_integer;

    case "long":
      return { ...dc } as PropertyTypeDataConstraints_long;

    case "map":
      throw new Error("Map type constraints are not supported");

    case "nullable":
      throw new Error("Nullable constraints are not supported");

    case "short":
      return { ...dc } as PropertyTypeDataConstraints_short;

    case "string":
      return { ...dc } as PropertyTypeDataConstraints_string;

    case "struct":
      return {
        type: "struct",
        struct: {
          elementConstraints: Object.fromEntries(
            Object.entries(dc.struct.elementConstraints).map((
              [field, constraint],
            ) => [
              field,
              convertDataConstraintToDataConstraints(constraint),
            ]),
          ),
        },
      } as PropertyTypeDataConstraints_struct;

    case "structV2":
      throw new Error("StructV2 constraints are not supported");

    case "timestamp":
      return { ...dc } as PropertyTypeDataConstraints_timestamp;

    default:
      throw new Error(`Unknown DataConstraint type: ${(dc as any).type}`);
  }
}

export function convertDataConstraintToDataConstraints(
  dc: DataConstraint,
): DataConstraints {
  return {
    propertyTypeConstraints: [
      {
        constraints: dataConstraintToPropertyTypeDataConstraint(dc),
        // known limitation: structs don't carry field-level data constraint failure messages
      },
    ],
  };
}

export function convertNullabilityToDataConstraint(
  prop: { type: PropertyTypeType; nullability?: Nullability },
): DataConstraints | undefined {
  if (typeof prop.type === "object" && prop.type.type === "marking") {
    if (prop.nullability === undefined) {
      return {
        propertyTypeConstraints: [],
        nullability: undefined,
        nullabilityV2: { noEmptyCollections: true, noNulls: true },
      };
    }
    invariant(
      prop.nullability?.noNulls,
      "Marking property type has noNulls set to false, marking properties must not be nullable",
    );
    return {
      propertyTypeConstraints: [],
      nullability: undefined,
      nullabilityV2: prop.nullability,
    };
  }
  return prop.nullability === undefined ? undefined : {
    propertyTypeConstraints: [],
    nullability: undefined,
    nullabilityV2: prop.nullability,
  };
}

export function convertType(
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
            fieldType: convertType(fieldTypeDefinition),
          };
        } else {
          // If it is a full form type definition then process it as such
          if ("fieldType" in fieldTypeDefinition) {
            field = {
              ...fieldTypeDefinition,
              apiName: key,
              fieldType: convertType(fieldTypeDefinition.fieldType),
              typeClasses: fieldTypeDefinition.typeClasses ?? [],
              aliases: fieldTypeDefinition.aliases ?? [],
            };
          } else {
            field = {
              apiName: key,
              displayMetadata: { displayName: key, description: undefined },
              typeClasses: [],
              aliases: [],
              fieldType: convertType(fieldTypeDefinition),
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

/**
 * Helper function to avoid duplication. Makes the types match properly with the correct
 * behavior without needing to switch on type.
 * @param type
 * @returns
 */
export function distributeTypeHelper<T extends string>(
  type: T,
): T extends any ? { type: T } & { [K in T]: {} } : never {
  return { type, [type]: {} } as any; // any cast to match conditional return type
}
