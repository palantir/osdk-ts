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
  ObjectSetContext as _api_ObjectSetContext,
  ObjectSetRid as _api_ObjectSetRid,
  ObjectTypeRid as _api_ObjectTypeRid,
} from "../__components.js";

/**
 * Information about the source of the particular debug message.
 */
export type DebugMessageRole = "SYSTEM" | "ASSISTANT";

/**
 * A debug message that was generated during the execution of a Natural Language Request.
 */
export interface NaturalLanguageDebugMessage {
  message: string;
  role: DebugMessageRole;
}
export interface NaturalLanguageObjectSetRequest {
  objectScope: ObjectScope;
  objectSetContext?: _api_ObjectSetContext | null | undefined;
  query: string;
}
export interface NaturalLanguageObjectSetResponse {
  debugMessages: Array<NaturalLanguageDebugMessage>;
  objectSetRid: _api_ObjectSetRid;
}
export interface ObjectScope_objectTypes {
  type: "objectTypes";
  objectTypes: ObjectTypesObjectScope;
}

export interface ObjectScope_objectSets {
  type: "objectSets";
  objectSets: ObjectSetObjectScope;
}
/**
 * The scope of ontology entities that will be provided to the model.
 */
export type ObjectScope = ObjectScope_objectTypes | ObjectScope_objectSets;

/**
 * The object types that the model has access to during execution, as well as the corresponding ObjectSet
 * that the LLM's generated filters will be applied to. ObjectSetRids are used to avoid passing around the entire
 * ObjectSet definition, clients are responsible for creating a temporary ObjectSetRid.
 *
 * A MaximumObjectScopeSizeExceeded error will be thrown if greater than 10 object sets are supplied.
 */
export interface ObjectSetObjectScope {
  objectSetRids: Record<_api_ObjectTypeRid, _api_ObjectSetRid>;
}
/**
 * The object types that the model has access to during execution. The LLM's generated filters will be applied to the BaseObjectSet of the relevant object type selected. A MaximumObjectScopeSizeExceeded error will be thrown if greater than 10 object types are supplied.
 */
export interface ObjectTypesObjectScope {
  objectTypeRids: Array<_api_ObjectTypeRid>;
}
