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
  BaseType,
  DataConstraint,
  ValueTypeBlockData,
  ValueTypeDataConstraint,
  ValueTypeDataConstraintReference,
} from "@osdk/client.unstable";
import type {
  AuthoringDataConstraint,
  AuthoringValueTypeDataConstraint,
  OntologyDefinition,
  ValueTypeDefinitionVersion,
} from "@osdk/maker";
import { OntologyEntityTypeEnum } from "@osdk/maker";

import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { convertValueType } from "./convertValueType.js";

export interface ValueTypeDependency {
  /** The temporary identity written into the wire constraint. */
  reference: ValueTypeDataConstraintReference;
  /** Target metadata used for input shapes and upstream package recommendations. */
  target: Pick<
    ValueTypeDefinitionVersion,
    "apiName" | "version" | "displayMetadata" | "packageNamespace"
  >;
  /** The base type expected by the consuming field. */
  baseType: BaseType;
}

export interface ValueTypeBlockDataWithDependencies {
  blockData: ValueTypeBlockData;
  dependencies: ValueTypeDependency[];
}

export function convertValueTypeToWireBlockData(
  ontology: OntologyDefinition,
  ridGenerator: OntologyRidGenerator,
): ValueTypeBlockDataWithDependencies[] {
  return Object.values(ontology[OntologyEntityTypeEnum.VALUE_TYPE]).map(
    (definitions): ValueTypeBlockDataWithDependencies => {
      const latestVersion = getLatestVersion(definitions);
      const convertedVersions = Array.from(
        new Map(
          definitions.map((definition) => [definition.version, definition]),
        ).values(),
      ).map((definition) => {
        const convertedConstraints = convertConstraints(
          definition.constraints,
          definition.baseType,
          ridGenerator,
        );
        return {
          version: {
            version: definition.version,
            baseType: definition.baseType,
            constraints: convertedConstraints.constraints,
            exampleValues: definition.exampleValues,
          },
          dependencies: convertedConstraints.dependencies,
        };
      });
      const blockData: ValueTypeBlockData = {
        metadata: {
          apiName: definitions[0].apiName,
          baseType: latestVersion.baseType,
          displayMetadata: definitions[0].displayMetadata,
          status: definitions[0].status,
        },
        versions: convertedVersions.map(({ version }) => version),
      };
      return {
        blockData,
        dependencies: convertedVersions.flatMap(
          ({ dependencies }) => dependencies,
        ),
      };
    },
  );
}

interface ConvertedConstraints {
  constraints: ValueTypeDataConstraint[];
  dependencies: ValueTypeDependency[];
}

function convertConstraints(
  constraints: AuthoringValueTypeDataConstraint[],
  baseType: BaseType,
  ridGenerator: OntologyRidGenerator,
): ConvertedConstraints {
  const converted = constraints.map((valueTypeConstraint) => {
    const wrapper = valueTypeConstraint.constraint;
    const convertedConstraint = convertConstraintWithDependencies(
      wrapper.constraint,
      baseType,
      ridGenerator,
    );
    return {
      constraint: {
        constraint: {
          constraint: convertedConstraint.constraint,
          failureMessage: wrapper.failureMessage,
        },
      },
      dependencies: convertedConstraint.dependencies,
    };
  });
  return {
    constraints: converted.map(({ constraint }) => constraint),
    dependencies: converted.flatMap(({ dependencies }) => dependencies),
  };
}

interface ConvertedConstraint {
  constraint: DataConstraint;
  dependencies: ValueTypeDependency[];
}

export function convertConstraint(
  constraint: AuthoringDataConstraint,
  baseType: BaseType,
  ridGenerator: OntologyRidGenerator,
): DataConstraint {
  return convertConstraintWithDependencies(constraint, baseType, ridGenerator)
    .constraint;
}

function convertConstraintWithDependencies(
  constraint: AuthoringDataConstraint,
  baseType: BaseType,
  ridGenerator: OntologyRidGenerator,
): ConvertedConstraint {
  switch (constraint.type) {
    case "array": {
      if (baseType.type !== "array") {
        throwConstraintTypeMismatch("array", baseType.type);
      }
      const elementsConstraint =
        constraint.array.elementsConstraint === undefined
          ? undefined
          : convertConstraintWithDependencies(
              constraint.array.elementsConstraint,
              baseType.array.elementType,
              ridGenerator,
            );
      return {
        constraint: {
          type: "array",
          array: {
            size: constraint.array.size,
            elementsConstraint: elementsConstraint?.constraint,
            elementsUnique: constraint.array.elementsUnique,
          },
        },
        dependencies: elementsConstraint?.dependencies ?? [],
      };
    }
    case "map": {
      if (baseType.type !== "map") {
        throwConstraintTypeMismatch("map", baseType.type);
      }
      const keyConstraints = constraint.map.keyTypeDataConstraints.map(
        (nestedConstraint) =>
          convertConstraintWithDependencies(
            nestedConstraint,
            baseType.map.keyType,
            ridGenerator,
          ),
      );
      const valueConstraints = constraint.map.valueTypeDataConstraints.map(
        (nestedConstraint) =>
          convertConstraintWithDependencies(
            nestedConstraint,
            baseType.map.valueType,
            ridGenerator,
          ),
      );
      return {
        constraint: {
          type: "map",
          map: {
            keyTypeDataConstraints: keyConstraints.map(
              ({ constraint }) => constraint,
            ),
            valueTypeDataConstraints: valueConstraints.map(
              ({ constraint }) => constraint,
            ),
            uniqueValues: constraint.map.uniqueValues,
          },
        },
        dependencies: [...keyConstraints, ...valueConstraints].flatMap(
          ({ dependencies }) => dependencies,
        ),
      };
    }
    case "struct": {
      if (baseType.type !== "struct") {
        throwConstraintTypeMismatch("struct", baseType.type);
      }
      const fieldTypes = new Map(
        baseType.struct.fields.map((field) => [field.name, field.type]),
      );
      const elements = Object.entries(constraint.struct.elementConstraints).map(
        ([field, nestedConstraint]) => {
          const fieldType = fieldTypes.get(field);
          if (fieldType === undefined) {
            throw new Error(`Missing base type for struct field ${field}`);
          }
          return {
            field,
            converted: convertConstraintWithDependencies(
              nestedConstraint,
              fieldType,
              ridGenerator,
            ),
          };
        },
      );
      return {
        constraint: {
          type: "struct",
          struct: {
            elementConstraints: Object.fromEntries(
              elements.map(({ field, converted }) => [
                field,
                converted.constraint,
              ]),
            ),
          },
        },
        dependencies: elements.flatMap(
          ({ converted }) => converted.dependencies,
        ),
      };
    }
    case "structV2": {
      if (baseType.type !== "structV2") {
        throwConstraintTypeMismatch("structV2", baseType.type);
      }
      const fieldTypes = new Map(
        baseType.structV2.fields.map((field) => [
          field.identifier,
          field.baseType,
        ]),
      );
      const elements = Object.entries(
        constraint.structV2.elementConstraints,
      ).map(([field, valueType]) => {
        const fieldType = fieldTypes.get(field);
        if (fieldType === undefined) {
          throw new Error(`Missing base type for struct field ${field}`);
        }
        const reference = convertValueType(valueType, ridGenerator);
        return {
          field,
          reference,
          dependency: {
            reference,
            target: {
              apiName: valueType.apiName,
              version: valueType.version,
              displayMetadata: valueType.displayMetadata,
              packageNamespace: valueType.packageNamespace,
            },
            baseType: fieldType,
          },
        };
      });
      return {
        constraint: {
          type: "structV2",
          structV2: {
            elementConstraints: Object.fromEntries(
              elements.map(({ field, reference }) => [field, reference]),
            ),
          },
        },
        dependencies: elements.map(({ dependency }) => dependency),
      };
    }
    default:
      return { constraint, dependencies: [] };
  }
}

function throwConstraintTypeMismatch(
  constraintType: AuthoringDataConstraint["type"],
  baseType: BaseType["type"],
): never {
  throw new Error(
    `Constraint type ${constraintType} does not match base type ${baseType}`,
  );
}

function getLatestVersion(
  versions: ValueTypeDefinitionVersion[],
): ValueTypeDefinitionVersion {
  if (versions.length === 0) {
    throw new Error("Value type must have at least one version");
  }
  return versions.reduce((latest, current) => {
    return compareSlsVersions(current.version, latest.version) > 0
      ? current
      : latest;
  });
}

function compareSlsVersions(a: string, b: string): number {
  const partsA = a.split(".").map(Number);
  const partsB = b.split(".").map(Number);
  const maxLen = Math.max(partsA.length, partsB.length);
  for (let i = 0; i < maxLen; i++) {
    const segA = partsA[i] ?? 0;
    const segB = partsB[i] ?? 0;
    if (segA !== segB) return segA - segB;
  }
  return 0;
}
