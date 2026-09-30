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

import type { OsdkMetadata } from "../OsdkMetadata.js";

/** @experimental */
export interface AgentMetadata {
  type: "agent";
  apiName: string;
  version: string;
  arguments: Record<string, AgentMetadata.DataType>;
}

/** @experimental */
export namespace AgentMetadata {
  /** @experimental */
  export type DataType =
    | DataType.Primitive
    | DataType.Object
    | DataType.ObjectSet
    | DataType.Nullable
    | DataType.List
    | DataType.Record
    | DataType.Struct
    | DataType.DiscriminatedUnion;

  /** @experimental */
  export namespace DataType {
    /** @experimental */
    export interface Primitive {
      type:
        | "boolean"
        | "string"
        | "date"
        | "timestamp"
        | "integer"
        | "long"
        | "short"
        | "double"
        | "float";
    }

    /** @experimental */
    export interface Object {
      type: "object";
      objectTypeRid: string;
    }

    /** @experimental */
    export interface ObjectSet {
      type: "objectSet";
      objectTypeRid: string;
    }

    /** @experimental */
    export interface Nullable {
      type: "nullable";
      wrappedType: AgentMetadata.DataType;
    }

    /** @experimental */
    export interface List {
      type: "list";
      elementType: AgentMetadata.DataType;
    }

    /** @experimental */
    export interface Record {
      type: "record";
      valueType: AgentMetadata.DataType;
    }

    /** @experimental */
    export interface Struct {
      type: "struct";
      fields: { [key: string]: AgentMetadata.DataType };
    }

    /** @experimental */
    export interface DiscriminatedUnion {
      type: "discriminatedUnion";
      discriminatorKey: string;
      members: { [key: string]: { [key: string]: AgentMetadata.DataType } };
    }
  }
}

/** @experimental */
export interface AgentCompileTimeMetadata<T> {
  signatures: T;
}

/** @experimental */
export interface AgentDefinition<T = never> {
  type: "agent";
  apiName: string;
  version: string;
  osdkMetadata?: OsdkMetadata;
  __DefinitionMetadata?: AgentCompileTimeMetadata<T> & AgentMetadata;
}
