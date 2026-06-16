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
  DataConstraint,
  DataConstraintWrapper,
  FailureMessage,
  ValueTypeDataConstraint,
  ValueTypeRid,
  ValueTypeStatus,
} from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import { cloneDefinition } from "./cloneDefinition.js";
import { OntologyEntityTypeEnum } from "./common/OntologyEntityTypeEnum.js";
import {
  namespace,
  ontologyDefinition,
  updateOntology,
} from "./defineOntology.js";
import { type ValueTypeDefinitionVersion } from "./values/ValueTypeDefinitionVersion.js";
import { type ValueTypeType } from "./values/ValueTypeType.js";

type ZipBaseAndConstraint<Base, Constraint> = {
  [PropertyType in (BaseType["type"] & DataConstraint["type"])]: Base extends
    { type: PropertyType } ? {
      baseType: Omit<Base, "type">;
      constraints?: Constraint extends { type: PropertyType } ? {
          constraint: Omit<Constraint, "type">;
          failureMessage?: FailureMessage;
        }[]
        : undefined;
    }
    : never;
};

type MappedZip = ZipBaseAndConstraint<BaseType, DataConstraint>;

type TypeNames = ValueTypeType["type"];

type ValueTypeDefinitionBacking = {
  [Type in ValueTypeType["type"] & DataConstraint["type"]]: {
    baseType: { "type": Extract<ValueTypeType, { type: Type }>["value"] } & {
      constraints: {
        constraint: Extract<
          DataConstraint,
          { type: Type }
        >[keyof Omit<Extract<DataConstraint, { type: Type }>, "type">];
        failureMessage?: FailureMessage;
      }[];
    };
  };
};

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
  if (typeof valueType === "string") {
  }
  switch (true) {
    case (typeof valueType === "object" && valueType.type === "array"):
      return {
        type: "array",
        array: {
          elementType: convertValueTypeTypeToBaseType(valueType.elementType),
        },
      };
    case (typeof valueType === "object" && valueType.type === "struct"):
      return {
        type: "structV2",
        structV2: {
          fields: valueType.fields.map(field => ({
            identifier: field.identifier,
            baseType: convertValueTypeTypeToBaseType(field.baseType),
          })),
        },
      };
    case (typeof valueType === "object" && valueType.type === "map"):
      return {
        type: "map",
        map: {
          keyType: convertValueTypeTypeToBaseType(valueType.keyType),
          valueType: convertValueTypeTypeToBaseType(valueType.valueType),
        },
      };
    case (typeof valueType === "object" && valueType.type === "optional"):
      return {
        type: "optional",
        optional: {
          wrappedType: convertValueTypeTypeToBaseType(valueType.wrappedType),
        },
      };
    case (typeof valueType === "string"):
      return { type: valueType, [valueType]: {} } as any;
    default:
      throw new Error("Invalid ValueTypeType");
  }
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

export type UserValueTypeStatus = "active" | {
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
    /^((([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)$/;
  invariant(semverValidation.test(version), "Version is not a valid semver");

  const existingVersions =
    ontologyDefinition[OntologyEntityTypeEnum.VALUE_TYPE][apiName] ?? [];
  const duplicateVersion = existingVersions.find(vt => vt.version === version);
  invariant(
    duplicateVersion === undefined,
    `Value type with apiName ${apiName} and version ${version} is already defined`,
  );

  const typeName: TypeNames = typeof type.type === "string"
    ? type.type
    : type.type.type === "struct"
    ? "structV2"
    : type.type.type;
  // These suck but TS doesn't understand the relationship from the key of the base type to the type string
  const constraints = type.constraints
    ? type.constraints.map<ValueTypeDataConstraint>(constraint => {
      const output: any = {
        constraint: { type: typeName, [typeName]: constraint.constraint },
        failureMessage: constraint.failureMessage,
      };
      return { constraint: output as DataConstraintWrapper };
    })
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
