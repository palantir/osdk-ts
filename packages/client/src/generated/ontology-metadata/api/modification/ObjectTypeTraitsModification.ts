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

import type { WorkflowObjectTypeTraitId } from "../WorkflowObjectTypeTraitId.js";
import type { WorkflowObjectTypeTraitVersion } from "../WorkflowObjectTypeTraitVersion.js";
import type { ActionLogMetadataModification } from "./ActionLogMetadataModification.js";
import type { EventMetadataModification } from "./EventMetadataModification.js";
import type { SensorTraitModification } from "./SensorTraitModification.js";
import type { TimeSeriesMetadataModification } from "./TimeSeriesMetadataModification.js";
import type { WorkflowObjectTypeTraitImplModification } from "./WorkflowObjectTypeTraitImplModification.js";
export interface ObjectTypeTraitsModification {
  eventMetadata: EventMetadataModification | undefined;
  actionLogMetadata: ActionLogMetadataModification | undefined;
  timeSeriesMetadata: TimeSeriesMetadataModification | undefined;
  sensorTrait: SensorTraitModification | undefined;
  workflowObjectTypeTraits: Record<
    WorkflowObjectTypeTraitId,
    Record<
      WorkflowObjectTypeTraitVersion,
      WorkflowObjectTypeTraitImplModification
    >
  >;
}
