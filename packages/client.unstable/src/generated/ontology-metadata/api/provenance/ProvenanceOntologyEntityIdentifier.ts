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
import type { FunctionRid } from "../FunctionRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { NotepadRid } from "../NotepadRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { QuiverDashboardRid } from "../QuiverDashboardRid.js";
import type { ValueTypeRid } from "../ValueTypeRid.js";
import type { WorkshopModuleRid } from "../WorkshopModuleRid.js";
import type { PropertyTypeRidWithObjectTypeRid } from "./PropertyTypeRidWithObjectTypeRid.js";
export interface ProvenanceOntologyEntityIdentifier_propertyType {
  type: "propertyType";
  propertyType: PropertyTypeRidWithObjectTypeRid;
}

export interface ProvenanceOntologyEntityIdentifier_objectType {
  type: "objectType";
  objectType: ObjectTypeRid;
}

export interface ProvenanceOntologyEntityIdentifier_linkType {
  type: "linkType";
  linkType: LinkTypeRid;
}

export interface ProvenanceOntologyEntityIdentifier_actionType {
  type: "actionType";
  actionType: ActionTypeRid;
}

export interface ProvenanceOntologyEntityIdentifier_valueType {
  type: "valueType";
  valueType: ValueTypeRid;
}

export interface ProvenanceOntologyEntityIdentifier_function {
  type: "function";
  function: FunctionRid;
}

export interface ProvenanceOntologyEntityIdentifier_workshop {
  type: "workshop";
  workshop: WorkshopModuleRid;
}

export interface ProvenanceOntologyEntityIdentifier_notepad {
  type: "notepad";
  notepad: NotepadRid;
}

export interface ProvenanceOntologyEntityIdentifier_quiverDashboard {
  type: "quiverDashboard";
  quiverDashboard: QuiverDashboardRid;
}
/**
 * The resource identifier of an Ontology entity.
 */
export type ProvenanceOntologyEntityIdentifier =
  | ProvenanceOntologyEntityIdentifier_propertyType
  | ProvenanceOntologyEntityIdentifier_objectType
  | ProvenanceOntologyEntityIdentifier_linkType
  | ProvenanceOntologyEntityIdentifier_actionType
  | ProvenanceOntologyEntityIdentifier_valueType
  | ProvenanceOntologyEntityIdentifier_function
  | ProvenanceOntologyEntityIdentifier_workshop
  | ProvenanceOntologyEntityIdentifier_notepad
  | ProvenanceOntologyEntityIdentifier_quiverDashboard;
