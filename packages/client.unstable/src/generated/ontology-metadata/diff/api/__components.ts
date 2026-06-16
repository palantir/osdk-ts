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

import type {
  ObjectTypeId as _api_ObjectTypeId,
  ObjectTypeRid as _api_ObjectTypeRid,
  OntologyVersion as _api_OntologyVersion,
} from "../../api/__components.js";
export interface LoadOntologyDiffRequest {
  baseOntologyVersion: _api_OntologyVersion;
  targetOntologyVersion: _api_OntologyVersion;
}
export interface LoadOntologyDiffResponse {
  ontologyDiffModificationData: OntologyDiffModificationData;
}
/**
 * An optional object type, where if the value of any field is empty, there was no diff.
 * if the value exists, it is the new value at the provided target ontology version.
 */
export interface ObjectTypeDiff {
  optionalObjectType: OptionalObjectType;
}
/**
 * A type to represent the full ontology diff between two object types
 */
export interface OntologyDiffModificationData {
  createdObjectTypes: Array<_api_ObjectTypeRid>;
  deletedObjectTypes: Array<_api_ObjectTypeRid>;
  modifiedObjectTypeDiffs: Record<_api_ObjectTypeRid, ObjectTypeDiff>;
}
/**
 * An optional ObjectType is similiar to an ObjectType, except that most of its fields are optional
 * Optional object types must always have an id and a rid.
 */
export interface OptionalObjectType {
  displayMetadata: OptionalObjectTypeDisplayMetadata;
  id: _api_ObjectTypeId;
  rid: _api_ObjectTypeRid;
}
/**
 * Optional version of ObjectTypeDisplayMetadata
 */
export interface OptionalObjectTypeDisplayMetadata {
  displayName?: string | null | undefined;
}
