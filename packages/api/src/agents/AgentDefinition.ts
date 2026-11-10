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

import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import type { OsdkMetadata } from "../OsdkMetadata.js";

/** @beta */
export interface AgentMetadata {
  type: "agent";
  apiName: string;
  version: string;
  arguments: Record<string, AgentDataTypeDefinition>;
  events: Record<string, AgentDataTypeDefinition>;
  agentState: AgentDataTypeDefinition;
  contextItems: Record<string, AgentDataTypeDefinition>;
}

/** @beta */
export interface AgentCompileTimeMetadata<T> {
  signatures: T;
}

/** @beta */
export interface AgentDefinition<T = never> {
  type: "agent";
  apiName: string;
  version: string;
  osdkMetadata?: OsdkMetadata;
  __DefinitionMetadata?: AgentCompileTimeMetadata<T> & Partial<AgentMetadata>;
}

/** @beta */
export type AgentDataTypeDefinition<
  T_Target extends ObjectTypeDefinition = any,
> =
  | PrimitiveAgentDataType
  | ObjectAgentDataType<T_Target>
  | ObjectSetAgentDataType<T_Target>
  | DiscriminatedUnionAgentDataType
  | StructAgentDataType
  | RecordAgentDataType
  | ArrayAgentDataType
  | BaseAgentDataTypeDefinition<"unknown">;

/** @beta */
export type BaseAgentDataTypeDefinition<T extends string> = {
  nullable?: boolean;
  type: T;
};

/** @beta */
export type WireAgentDataTypes =
  | "double"
  | "float"
  | "integer"
  | "long"
  | "short"
  | "boolean"
  | "string"
  | "date"
  | "timestamp";

/** @beta */
export type PrimitiveAgentDataType<
  Q extends WireAgentDataTypes = WireAgentDataTypes,
> = BaseAgentDataTypeDefinition<Q>;

/** @beta */
export interface ObjectAgentDataType<
  T_Target extends ObjectTypeDefinition = never,
> extends BaseAgentDataTypeDefinition<"object"> {
  object: string;
  ontologyApiName: string;
  __OsdkTargetType?: T_Target;
}

/** @beta */
export interface ObjectSetAgentDataType<
  T_Target extends ObjectTypeDefinition = never,
> extends BaseAgentDataTypeDefinition<"objectSet"> {
  objectSet: string;
  ontologyApiName: string;
  __OsdkTargetType?: T_Target;
}

/** @beta */
export interface ArrayAgentDataType extends BaseAgentDataTypeDefinition<"array"> {
  array: AgentDataTypeDefinition;
}

/** @beta */
export interface DiscriminatedUnionAgentDataType extends BaseAgentDataTypeDefinition<"discriminatedUnion"> {
  discriminatorKey: string;
  members: Record<string, Record<string, AgentDataTypeDefinition>>;
}

/** @beta */
export interface StructAgentDataType extends BaseAgentDataTypeDefinition<"struct"> {
  struct: Record<string, AgentDataTypeDefinition>;
}

/** @beta */
export interface RecordAgentDataType extends BaseAgentDataTypeDefinition<"record"> {
  valueType: AgentDataTypeDefinition;
}
