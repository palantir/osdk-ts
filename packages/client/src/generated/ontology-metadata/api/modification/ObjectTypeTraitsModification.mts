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

import type { WorkflowObjectTypeTraitId } from "../WorkflowObjectTypeTraitId.mjs";
import type { WorkflowObjectTypeTraitVersion } from "../WorkflowObjectTypeTraitVersion.mjs";
import type { ActionLogMetadataModification } from "./ActionLogMetadataModification.mjs";
import type { EventMetadataModification } from "./EventMetadataModification.mjs";
import type { SensorTraitModification } from "./SensorTraitModification.mjs";
import type { TimeSeriesMetadataModification } from "./TimeSeriesMetadataModification.mjs";
import type { WorkflowObjectTypeTraitImplModification } from "./WorkflowObjectTypeTraitImplModification.mjs";

export interface ObjectTypeTraitsModification {
  eventMetadata: EventMetadataModification | undefined;
  actionLogMetadata: ActionLogMetadataModification | undefined;
  timeSeriesMetadata: TimeSeriesMetadataModification | undefined;
  sensorTrait: SensorTraitModification | undefined;
  workflowObjectTypeTraits: Map<
    WorkflowObjectTypeTraitId,
    Map<WorkflowObjectTypeTraitVersion, WorkflowObjectTypeTraitImplModification>
  >;
}
