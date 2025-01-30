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

import type { ActionTypeCreatedEvent } from "./ActionTypeCreatedEvent.js";
import type { ActionTypeDeletedEvent } from "./ActionTypeDeletedEvent.js";
import type { ActionTypeUpdatedEvent } from "./ActionTypeUpdatedEvent.js";
import type { BranchClosedEvent } from "./BranchClosedEvent.js";
import type { BranchDeletedEvent } from "./BranchDeletedEvent.js";
import type { BranchMergedEvent } from "./BranchMergedEvent.js";
import type { InterfaceTypeCreatedEvent } from "./InterfaceTypeCreatedEvent.js";
import type { InterfaceTypeDeletedEvent } from "./InterfaceTypeDeletedEvent.js";
import type { InterfaceTypeUpdatedEvent } from "./InterfaceTypeUpdatedEvent.js";
import type { LinkTypeCreatedEvent } from "./LinkTypeCreatedEvent.js";
import type { LinkTypeDeletedEvent } from "./LinkTypeDeletedEvent.js";
import type { LinkTypeUpdatedEvent } from "./LinkTypeUpdatedEvent.js";
import type { ObjectTypeCreatedEvent } from "./ObjectTypeCreatedEvent.js";
import type { ObjectTypeDeletedEvent } from "./ObjectTypeDeletedEvent.js";
import type { ObjectTypeUpdatedEvent } from "./ObjectTypeUpdatedEvent.js";
import type { SharedPropertyTypeCreatedEvent } from "./SharedPropertyTypeCreatedEvent.js";
import type { SharedPropertyTypeDeletedEvent } from "./SharedPropertyTypeDeletedEvent.js";
import type { SharedPropertyTypeUpdatedEvent } from "./SharedPropertyTypeUpdatedEvent.js";
export interface OntologyModificationEvent_objectTypeCreated {
  type: "objectTypeCreated";
  objectTypeCreated: ObjectTypeCreatedEvent;
}

export interface OntologyModificationEvent_objectTypeUpdated {
  type: "objectTypeUpdated";
  objectTypeUpdated: ObjectTypeUpdatedEvent;
}

export interface OntologyModificationEvent_objectTypeDeleted {
  type: "objectTypeDeleted";
  objectTypeDeleted: ObjectTypeDeletedEvent;
}

export interface OntologyModificationEvent_linkTypeCreated {
  type: "linkTypeCreated";
  linkTypeCreated: LinkTypeCreatedEvent;
}

export interface OntologyModificationEvent_linkTypeUpdated {
  type: "linkTypeUpdated";
  linkTypeUpdated: LinkTypeUpdatedEvent;
}

export interface OntologyModificationEvent_linkTypeDeleted {
  type: "linkTypeDeleted";
  linkTypeDeleted: LinkTypeDeletedEvent;
}

export interface OntologyModificationEvent_actionTypeCreated {
  type: "actionTypeCreated";
  actionTypeCreated: ActionTypeCreatedEvent;
}

export interface OntologyModificationEvent_actionTypeUpdated {
  type: "actionTypeUpdated";
  actionTypeUpdated: ActionTypeUpdatedEvent;
}

export interface OntologyModificationEvent_actionTypeDeleted {
  type: "actionTypeDeleted";
  actionTypeDeleted: ActionTypeDeletedEvent;
}

export interface OntologyModificationEvent_sharedPropertyTypeCreated {
  type: "sharedPropertyTypeCreated";
  sharedPropertyTypeCreated: SharedPropertyTypeCreatedEvent;
}

export interface OntologyModificationEvent_sharedPropertyTypeUpdated {
  type: "sharedPropertyTypeUpdated";
  sharedPropertyTypeUpdated: SharedPropertyTypeUpdatedEvent;
}

export interface OntologyModificationEvent_sharedPropertyTypeDeleted {
  type: "sharedPropertyTypeDeleted";
  sharedPropertyTypeDeleted: SharedPropertyTypeDeletedEvent;
}

export interface OntologyModificationEvent_interfaceTypeCreated {
  type: "interfaceTypeCreated";
  interfaceTypeCreated: InterfaceTypeCreatedEvent;
}

export interface OntologyModificationEvent_interfaceTypeUpdated {
  type: "interfaceTypeUpdated";
  interfaceTypeUpdated: InterfaceTypeUpdatedEvent;
}

export interface OntologyModificationEvent_interfaceTypeDeleted {
  type: "interfaceTypeDeleted";
  interfaceTypeDeleted: InterfaceTypeDeletedEvent;
}

export interface OntologyModificationEvent_branchClosed {
  type: "branchClosed";
  branchClosed: BranchClosedEvent;
}

export interface OntologyModificationEvent_branchMerged {
  type: "branchMerged";
  branchMerged: BranchMergedEvent;
}

export interface OntologyModificationEvent_branchDeleted {
  type: "branchDeleted";
  branchDeleted: BranchDeletedEvent;
}
export type OntologyModificationEvent =
  | OntologyModificationEvent_objectTypeCreated
  | OntologyModificationEvent_objectTypeUpdated
  | OntologyModificationEvent_objectTypeDeleted
  | OntologyModificationEvent_linkTypeCreated
  | OntologyModificationEvent_linkTypeUpdated
  | OntologyModificationEvent_linkTypeDeleted
  | OntologyModificationEvent_actionTypeCreated
  | OntologyModificationEvent_actionTypeUpdated
  | OntologyModificationEvent_actionTypeDeleted
  | OntologyModificationEvent_sharedPropertyTypeCreated
  | OntologyModificationEvent_sharedPropertyTypeUpdated
  | OntologyModificationEvent_sharedPropertyTypeDeleted
  | OntologyModificationEvent_interfaceTypeCreated
  | OntologyModificationEvent_interfaceTypeUpdated
  | OntologyModificationEvent_interfaceTypeDeleted
  | OntologyModificationEvent_branchClosed
  | OntologyModificationEvent_branchMerged
  | OntologyModificationEvent_branchDeleted;
