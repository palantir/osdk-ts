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

import type { AssociatedDataConnectorIdentifier } from "./AssociatedDataConnectorIdentifier.mjs";
import type { AssociatedObjectViewIdentifier } from "./AssociatedObjectViewIdentifier.mjs";
import type { AssociatedRepositoryIdentifier } from "./AssociatedRepositoryIdentifier.mjs";
import type { AssociatedSlateDocumentIdentifier } from "./AssociatedSlateDocumentIdentifier.mjs";
import type { AssociatedTaurusWorkflowIdentifier } from "./AssociatedTaurusWorkflowIdentifier.mjs";
import type { AssociatedVertexGraphTemplateIdentifier } from "./AssociatedVertexGraphTemplateIdentifier.mjs";
import type { AssociatedWorkshopModuleIdentifier } from "./AssociatedWorkshopModuleIdentifier.mjs";
export interface AssociatedResourceIdentifier_slateDocumentIdentifier {
  type: "slateDocumentIdentifier";
  slateDocumentIdentifier: AssociatedSlateDocumentIdentifier;
}

export interface AssociatedResourceIdentifier_repositoryIdentifier {
  type: "repositoryIdentifier";
  repositoryIdentifier: AssociatedRepositoryIdentifier;
}

export interface AssociatedResourceIdentifier_workshopModuleIdentifier {
  type: "workshopModuleIdentifier";
  workshopModuleIdentifier: AssociatedWorkshopModuleIdentifier;
}

export interface AssociatedResourceIdentifier_objectViewIdentifier {
  type: "objectViewIdentifier";
  objectViewIdentifier: AssociatedObjectViewIdentifier;
}

export interface AssociatedResourceIdentifier_dataConnectorIdentifier {
  type: "dataConnectorIdentifier";
  dataConnectorIdentifier: AssociatedDataConnectorIdentifier;
}

export interface AssociatedResourceIdentifier_taurusWorkflowIdentifier {
  type: "taurusWorkflowIdentifier";
  taurusWorkflowIdentifier: AssociatedTaurusWorkflowIdentifier;
}

export interface AssociatedResourceIdentifier_vertexGraphTemplateIdentifier {
  type: "vertexGraphTemplateIdentifier";
  vertexGraphTemplateIdentifier: AssociatedVertexGraphTemplateIdentifier;
}

export type AssociatedResourceIdentifier =
  | AssociatedResourceIdentifier_slateDocumentIdentifier
  | AssociatedResourceIdentifier_repositoryIdentifier
  | AssociatedResourceIdentifier_workshopModuleIdentifier
  | AssociatedResourceIdentifier_objectViewIdentifier
  | AssociatedResourceIdentifier_dataConnectorIdentifier
  | AssociatedResourceIdentifier_taurusWorkflowIdentifier
  | AssociatedResourceIdentifier_vertexGraphTemplateIdentifier;
