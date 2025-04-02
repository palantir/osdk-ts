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
  ObjectType as _api_ObjectType,
  ObjectTypeId as _api_ObjectTypeId,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyRid as _api_OntologyRid,
} from "../../__components.js";
export type OntologyObjectTypeSemanticSearchStatus =
  | "AVAILABLE"
  | "INDEXING"
  | "AIP_DISABLED"
  | "NOT_READY";
export interface SemanticSearchObjectTypeResponseEntry {
  distance: number | "NaN" | "Infinity" | "-Infinity";
  objectType: _api_ObjectType;
  objectTypeId: _api_ObjectTypeId;
  objectTypeRid: _api_ObjectTypeRid;
  ontologyRid: _api_OntologyRid;
}
export interface SemanticSearchObjectTypesRequest {
  includeObjectTypesWithoutSearchableDatasources?: boolean | null | undefined;
  ontologyRids: Array<_api_OntologyRid>;
  pageLimit: number;
  prompt: string;
}
export interface SemanticSearchObjectTypesResponse {
  ontologySemanticSearchStatuses: Record<
    _api_OntologyRid,
    OntologyObjectTypeSemanticSearchStatus
  >;
  results: Array<SemanticSearchObjectTypeResponseEntry>;
}
