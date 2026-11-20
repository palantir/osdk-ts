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

/**
 * The types a function-backed action can return.
 */
export type ActionDataTypeDefinition =
  | ActionPrimitiveDataType
  | ActionArrayDataType
  | ActionSetDataType
  | ActionMapDataType
  | ActionStructDataType;

export type BaseActionDataTypeDefinition<T extends string> = {
  nullable?: boolean;
  type: T;
};

export type ActionPrimitiveDataTypes =
  | "boolean"
  | "date"
  | "double"
  | "float"
  | "integer"
  | "long"
  | "string"
  | "timestamp";

export type ActionMapKeyDataTypes = Exclude<
  ActionPrimitiveDataTypes,
  "boolean"
>;

export type ActionPrimitiveDataType<
  T extends ActionPrimitiveDataTypes = ActionPrimitiveDataTypes,
> = BaseActionDataTypeDefinition<T>;

export interface ActionArrayDataType extends BaseActionDataTypeDefinition<"array"> {
  array: ActionDataTypeDefinition;
}

export interface ActionSetDataType extends BaseActionDataTypeDefinition<"set"> {
  set: ActionDataTypeDefinition;
}

export interface ActionMapDataType extends BaseActionDataTypeDefinition<"map"> {
  keyType: ActionPrimitiveDataType<ActionMapKeyDataTypes>;
  valueType: ActionDataTypeDefinition;
}

export interface ActionStructDataType extends BaseActionDataTypeDefinition<"struct"> {
  struct: Record<string, ActionDataTypeDefinition>;
}
