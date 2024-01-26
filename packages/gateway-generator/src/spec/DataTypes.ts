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

import type { PrimitiveType } from "./BuiltInTypes";
import type { Documentation, Safety } from "./Common";

export interface ObjectSpec {
  properties: {
    [key: string]: PropertySpec;
  };
}

export interface PropertySpec {
  type: DataType;
  safety: Safety;
  documentation: Documentation;
}

export interface ObjectType {
  type: "object";
  object: ObjectSpec;
}

export interface BuiltInType {
  type: "builtin";
  builtin: PrimitiveType;
}

export interface UnionType {
  type: "union";
  union: {
    discriminator: string;
    subTypes: {
      [key: string]: string;
    };
  };
}

export interface EnumType {
  type: "enum";
  enum: {
    values: string[];
  };
}

export interface BinaryType {
  type: "binary";
  binary: {
    mediaType: string;
  };
}

export interface AsyncOperationType {
  type: "asyncOperation";
  asyncOperation: {
    operationType: string;
    resultType: string;
    stageType: string;
  };
}

export interface OptionalType {
  type: "optional";
  optional: {
    subType: DataType;
  };
}

export interface ListType {
  type: "list";
  list: {
    subType: DataType;
    minItems?: number;
    maxItems?: number;
  };
}

export interface ReferenceType {
  type: "reference";
  reference: string;
}

export interface MapType {
  type: "map";
  map: {
    keyType: DataType;
    valueType: DataType;
  };
}

export interface ExternalType {
  type: "external";
  external: string;
}

export type DataType =
  | ObjectType
  | BuiltInType
  | ReferenceType
  | ListType
  | OptionalType
  | UnionType
  | EnumType
  | MapType
  | BinaryType
  | ExternalType
  | AsyncOperationType;
