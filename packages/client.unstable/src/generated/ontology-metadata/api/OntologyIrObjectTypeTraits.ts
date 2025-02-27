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

import type { ActionLogMetadata } from "./ActionLogMetadata.js";
import type { ObjectTypePeeringMetadata } from "./ObjectTypePeeringMetadata.js";
import type { OntologyIrEventMetadata } from "./OntologyIrEventMetadata.js";
import type { OntologyIrSensorTrait } from "./OntologyIrSensorTrait.js";
import type { OntologyIrTimeSeriesMetadata } from "./OntologyIrTimeSeriesMetadata.js";
import type { OntologyIrWorkflowObjectTypeTraitImpl } from "./OntologyIrWorkflowObjectTypeTraitImpl.js";
import type { WorkflowObjectTypeTraitId } from "./WorkflowObjectTypeTraitId.js";
import type { WorkflowObjectTypeTraitVersion } from "./WorkflowObjectTypeTraitVersion.js";
export interface OntologyIrObjectTypeTraits {
  eventMetadata: OntologyIrEventMetadata | undefined;
  actionLogMetadata: ActionLogMetadata | undefined;
  timeSeriesMetadata: OntologyIrTimeSeriesMetadata | undefined;
  peeringMetadata: ObjectTypePeeringMetadata | undefined;
  sensorTrait: OntologyIrSensorTrait | undefined;
  workflowObjectTypeTraits: Record<
    WorkflowObjectTypeTraitId,
    Record<
      WorkflowObjectTypeTraitVersion,
      OntologyIrWorkflowObjectTypeTraitImpl
    >
  >;
}
