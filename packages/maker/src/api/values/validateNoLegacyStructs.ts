/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { BaseType, DataConstraint } from "@osdk/client.unstable";

import type {
  MakerValidationIssue,
  MakerValidationIssueCollector,
} from "../../validation.js";
import type { ValueTypeDefinitionVersion } from "./ValueTypeDefinitionVersion.js";
import type { AuthoringDataConstraint } from "./ValueTypeType.js";

type ValidationPath = MakerValidationIssue["path"];

type PossiblyLegacyDataConstraint =
  | AuthoringDataConstraint
  | Extract<DataConstraint, { type: "struct" }>;

type ValueTypeIdentity = Pick<
  ValueTypeDefinitionVersion,
  "apiName" | "version"
>;

/**
 * Rejects legacy struct constraints nested in an authored constraint payload.
 * Reported paths point at each offending `struct` payload, starting from
 * `payloadPath`, the location of the payload of `constraint` itself.
 */
export function validateNoLegacyStructConstraint(
  valueType: ValueTypeIdentity,
  constraint: AuthoringDataConstraint,
  payloadPath: ValidationPath,
  collector: MakerValidationIssueCollector,
): void {
  for (const path of legacyStructConstraintPaths(constraint, payloadPath)) {
    collector.addIssue(false, legacyStructConstraintIssue(valueType, path));
  }
}

export function validateNoLegacyStructs(
  valueType: ValueTypeDefinitionVersion,
  collector: MakerValidationIssueCollector,
): void {
  for (const path of legacyStructBaseTypePaths(valueType.baseType, [
    "baseType",
  ])) {
    collector.addIssue(false, {
      code: "legacy_struct_base_type",
      message: `${describe(valueType)} uses a legacy struct base type, which Ontology Metadata Service does not support.`,
      path,
      suggestion: "Use a structV2 base type instead.",
    });
  }
  valueType.constraints.forEach(({ constraint: { constraint } }, index) => {
    for (const path of legacyStructConstraintPaths(constraint, [
      "constraints",
      index,
      "constraint",
      "constraint",
      constraint.type,
    ])) {
      collector.addIssue(false, legacyStructConstraintIssue(valueType, path));
    }
  });
}

function legacyStructConstraintPaths(
  constraint: PossiblyLegacyDataConstraint,
  payloadPath: ValidationPath,
): ValidationPath[] {
  switch (constraint.type) {
    case "struct":
      return [payloadPath];
    case "array": {
      const { elementsConstraint } = constraint.array;
      return elementsConstraint === undefined
        ? []
        : nestedLegacyStructConstraintPaths(elementsConstraint, [
            ...payloadPath,
            "elementsConstraint",
          ]);
    }
    case "map":
      return (
        ["keyTypeDataConstraints", "valueTypeDataConstraints"] as const
      ).flatMap((key) =>
        constraint.map[key].flatMap((nested, index) =>
          nestedLegacyStructConstraintPaths(nested, [
            ...payloadPath,
            key,
            index,
          ]),
        ),
      );
    default:
      return [];
  }
}

function nestedLegacyStructConstraintPaths(
  constraint: PossiblyLegacyDataConstraint,
  path: ValidationPath,
): ValidationPath[] {
  return legacyStructConstraintPaths(constraint, [...path, constraint.type]);
}

function legacyStructBaseTypePaths(
  baseType: BaseType,
  path: ValidationPath,
): ValidationPath[] {
  switch (baseType.type) {
    case "struct":
      return [[...path, "struct"]];
    case "array":
      return legacyStructBaseTypePaths(baseType.array.elementType, [
        ...path,
        "array",
        "elementType",
      ]);
    case "map":
      return [
        ...legacyStructBaseTypePaths(baseType.map.keyType, [
          ...path,
          "map",
          "keyType",
        ]),
        ...legacyStructBaseTypePaths(baseType.map.valueType, [
          ...path,
          "map",
          "valueType",
        ]),
      ];
    case "optional":
      return legacyStructBaseTypePaths(baseType.optional.wrappedType, [
        ...path,
        "optional",
        "wrappedType",
      ]);
    case "structV2":
      return baseType.structV2.fields.flatMap((field, index) =>
        legacyStructBaseTypePaths(field.baseType, [
          ...path,
          "structV2",
          "fields",
          index,
          "baseType",
        ]),
      );
    case "union":
      return baseType.union.memberTypes.flatMap((member, index) =>
        legacyStructBaseTypePaths(member, [
          ...path,
          "union",
          "memberTypes",
          index,
        ]),
      );
    default:
      return [];
  }
}

function legacyStructConstraintIssue(
  valueType: ValueTypeIdentity,
  path: ValidationPath,
): MakerValidationIssue {
  return {
    code: "legacy_struct_constraint",
    message: `${describe(valueType)} uses a legacy struct constraint, which Ontology Metadata Service does not support.`,
    path,
    suggestion:
      "Use a structV2 constraint that references a value type for each constrained field.",
  };
}

function describe({ apiName, version }: ValueTypeIdentity): string {
  return `Value type "${apiName}" version "${version}"`;
}
