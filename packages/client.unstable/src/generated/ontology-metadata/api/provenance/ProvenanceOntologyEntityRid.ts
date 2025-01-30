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

import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { FunctionReference } from "../FunctionReference.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { NotepadReference } from "../NotepadReference.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { QuiverDashboardReference } from "../QuiverDashboardReference.js";
import type { ValueTypeReference } from "../ValueTypeReference.js";
import type { WorkshopReference } from "../WorkshopReference.js";
import type { PropertyTypeRidWithObjectTypeRid } from "./PropertyTypeRidWithObjectTypeRid.js";
export interface ProvenanceOntologyEntityRid_propertyType {
  type: "propertyType";
  propertyType: PropertyTypeRidWithObjectTypeRid;
}

export interface ProvenanceOntologyEntityRid_objectType {
  type: "objectType";
  objectType: ObjectTypeRid;
}

export interface ProvenanceOntologyEntityRid_linkType {
  type: "linkType";
  linkType: LinkTypeRid;
}

export interface ProvenanceOntologyEntityRid_actionType {
  type: "actionType";
  actionType: ActionTypeRid;
}

export interface ProvenanceOntologyEntityRid_versionedValueType {
  type: "versionedValueType";
  versionedValueType: ValueTypeReference;
}

export interface ProvenanceOntologyEntityRid_versionedFunction {
  type: "versionedFunction";
  versionedFunction: FunctionReference;
}

export interface ProvenanceOntologyEntityRid_workshop {
  type: "workshop";
  workshop: WorkshopReference;
}

export interface ProvenanceOntologyEntityRid_notepad {
  type: "notepad";
  notepad: NotepadReference;
}

export interface ProvenanceOntologyEntityRid_quiverDashboard {
  type: "quiverDashboard";
  quiverDashboard: QuiverDashboardReference;
}
/**
 * The resource identifier of an Ontology entity.
 */
export type ProvenanceOntologyEntityRid =
  | ProvenanceOntologyEntityRid_propertyType
  | ProvenanceOntologyEntityRid_objectType
  | ProvenanceOntologyEntityRid_linkType
  | ProvenanceOntologyEntityRid_actionType
  | ProvenanceOntologyEntityRid_versionedValueType
  | ProvenanceOntologyEntityRid_versionedFunction
  | ProvenanceOntologyEntityRid_workshop
  | ProvenanceOntologyEntityRid_notepad
  | ProvenanceOntologyEntityRid_quiverDashboard;
