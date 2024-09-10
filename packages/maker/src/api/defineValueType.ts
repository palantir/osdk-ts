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
} from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import { ontologyDefinition } from "./defineOntology.js";
import type { ValueTypeDefinitionVersion } from "./types.js";

type ZipBaseAndConstraint<Base, Constraint> = {
  [PropertyType in BaseType["type"]]: Base extends { type: PropertyType } ? {
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

type TypeAndConstraints = MappedZip[keyof MappedZip];
export function defineSharedPropertyType(
  opts: {
    apiName: string;
    displayName: string;
    description?: string;
    typeAndConstraints: TypeAndConstraints;
    version: string;
  },
): ValueTypeDefinitionVersion {
  const { apiName, displayName, description, typeAndConstraints, version } =
    opts;
  const semverValidation =
    /^((([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)$/;
  invariant(semverValidation.test(version), "Version is not a valid semver");

  // These suck but TS doesn't understand the relationship from the key of the base type to the type string
  const constraints = typeAndConstraints.constraints
    ? typeAndConstraints.constraints.map(constraint => {
      return {
        constraint: {
          [Object.keys(constraint["constraint"])[0]]:
            Object.keys(constraint["constraint"])[0],
          ...constraint,
        } as DataConstraintWrapper,
      };
    })
    : [];

  const baseType = {
    [Object.keys(typeAndConstraints.baseType)[0]]:
      Object.keys(typeAndConstraints.baseType)[0],
    ...typeAndConstraints.baseType,
  } as BaseType;

  const vt: ValueTypeDefinitionVersion = {
    apiName,
    displayMetadata: {
      displayName: displayName,
      description: description ?? "",
    },
    status: { type: "active", active: {} },
    version: version,
    baseType: baseType,
    constraints: constraints,
    exampleValues: [],
  };
  ontologyDefinition.valueTypes[apiName].push(vt);
  return vt;
}
