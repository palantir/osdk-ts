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
  BaseType,
  ValueTypeRid,
  ValueTypeStatus,
} from "@osdk/client.unstable";
import invariant from "tiny-invariant";

import { createValidationIssueCollector } from "../validation.js";
import { cloneDefinition } from "./cloneDefinition.js";
import { OntologyEntityTypeEnum } from "./common/OntologyEntityTypeEnum.js";
import {
  namespace,
  ontologyDefinition,
  updateOntology,
} from "./defineOntology.js";
import {
  validateMetadataLength,
  VALUE_TYPE_DESCRIPTION_LIMIT,
  VALUE_TYPE_DISPLAY_NAME_LIMIT,
} from "./validateMetadataLengths.js";
import { type ValueTypeDefinitionVersion } from "./values/ValueTypeDefinitionVersion.js";
import type {
  AuthoringDataConstraint,
  AuthoringValueTypeDataConstraint,
  ValueTypeType,
} from "./values/ValueTypeType.js";

type TypeNames = ValueTypeType["type"];

type NewValueTypeDefinitionBacking = {
  [Type in ValueTypeType as Type["type"]]: {
    type: Type["value"];
    constraints?: Type["constraints"];
  };
};
type NewValueTypeDefinition =
  NewValueTypeDefinitionBacking[keyof NewValueTypeDefinitionBacking];

function convertValueTypeTypeToBaseType(
  valueType: ValueTypeType["value"],
): BaseType {
  switch (true) {
    case typeof valueType === "object" && valueType.type === "array":
      return {
        type: "array",
        array: {
          elementType: convertValueTypeTypeToBaseType(valueType.elementType),
        },
      };
    case typeof valueType === "object" && valueType.type === "struct":
      return {
        type: "structV2",
        structV2: {
          fields: valueType.fields.map((field) => ({
            identifier: field.identifier,
            baseType: convertValueTypeTypeToBaseType(field.baseType),
          })),
        },
      };
    case typeof valueType === "object" && valueType.type === "map":
      return {
        type: "map",
        map: {
          keyType: convertValueTypeTypeToBaseType(valueType.keyType),
          valueType: convertValueTypeTypeToBaseType(valueType.valueType),
        },
      };
    case typeof valueType === "object" && valueType.type === "optional":
      return {
        type: "optional",
        optional: {
          wrappedType: convertValueTypeTypeToBaseType(valueType.wrappedType),
        },
      };
    case typeof valueType === "string":
      return { type: valueType, [valueType]: {} } as any;
    default:
      throw new Error("Invalid ValueTypeType");
  }
}

function createAuthoringDataConstraint(
  typeName: TypeNames,
  constraint: ValueTypeType["constraints"][number]["constraint"],
): AuthoringDataConstraint {
  // ValueTypeDefinition correlates the type name and constraint payload, but
  // TypeScript cannot preserve that relationship through a computed key.
  return {
    type: typeName,
    [typeName]: constraint,
  } as AuthoringDataConstraint;
}

export type ValueTypeDefinition = {
  apiName: string;
  displayName: string;
  description?: string;
  type: NewValueTypeDefinition;
  version: string;
  status?: UserValueTypeStatus;
  namespacePrefix?: boolean;
};

export type UserValueTypeStatus =
  | "active"
  | {
      type: "deprecated";
      message: string;
      deadline: string;
      replacedBy?: ValueTypeRid;
    };

export function defineValueType(
  valueTypeDefInput: ValueTypeDefinition,
): ValueTypeDefinitionVersion {
  const valueTypeDef = cloneDefinition(valueTypeDefInput);
  const {
    apiName: inputApiName,
    displayName,
    description,
    type,
    version,
    namespacePrefix,
  } = valueTypeDef;
  const apiName = namespacePrefix ? namespace + inputApiName : inputApiName;
  const semverValidation =
    /^((([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)$/u;
  invariant(semverValidation.test(version), "Version is not a valid semver");

  const existingVersions =
    ontologyDefinition[OntologyEntityTypeEnum.VALUE_TYPE][apiName] ?? [];
  const duplicateVersion = existingVersions.find(
    (vt) => vt.version === version,
  );
  invariant(
    duplicateVersion === undefined,
    `Value type with apiName ${apiName} and version ${version} is already defined`,
  );

  const typeName: TypeNames =
    typeof type.type === "string"
      ? type.type
      : type.type.type === "struct"
        ? "structV2"
        : type.type.type;
  const constraints = type.constraints
    ? type.constraints.map<AuthoringValueTypeDataConstraint>((constraint) => ({
        constraint: {
          constraint: createAuthoringDataConstraint(
            typeName,
            constraint.constraint,
          ),
          failureMessage: constraint.failureMessage,
        },
      }))
    : [];

  const baseType: BaseType = convertValueTypeTypeToBaseType(type.type);

  const vt: ValueTypeDefinitionVersion = {
    apiName,
    packageNamespace: namespace.substring(0, namespace.length - 1),
    displayMetadata: {
      displayName: displayName,
      description: description ?? "",
    },
    status: convertUserValueTypeStatusToValueTypeStatus(valueTypeDef.status),
    version: version,
    baseType: baseType,
    constraints: constraints,
    exampleValues: [],
    __type: OntologyEntityTypeEnum.VALUE_TYPE,
  };
  const collector = createValidationIssueCollector();
  const context = `Value type "${apiName}" version "${version}"`;
  validateMetadataLength(
    vt.displayMetadata.displayName,
    "displayName",
    context,
    VALUE_TYPE_DISPLAY_NAME_LIMIT,
    collector,
    "UTF-16 code units",
  );
  validateMetadataLength(
    vt.displayMetadata.description,
    "description",
    context,
    VALUE_TYPE_DESCRIPTION_LIMIT,
    collector,
    "UTF-16 code units",
  );
  collector.throwIfAnyIssues();
  updateOntology(vt);
  return vt;
}

export function convertUserValueTypeStatusToValueTypeStatus(
  status: UserValueTypeStatus | undefined,
): ValueTypeStatus {
  if (typeof status === "object" && status.type === "deprecated") {
    return {
      type: "deprecated",
      deprecated: {
        message: status.message,
        deadline: status.deadline,
        replacedBy: status.replacedBy,
      },
    };
  }
  return { type: "active", active: {} };
}
