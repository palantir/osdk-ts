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

import type { WorkflowObjectTypeTraitDescription } from "./WorkflowObjectTypeTraitDescription.js";
import type { WorkflowObjectTypeTraitDisplayName } from "./WorkflowObjectTypeTraitDisplayName.js";
import type { WorkflowObjectTypeTraitId } from "./WorkflowObjectTypeTraitId.js";
import type { WorkflowObjectTypeTraitProperty } from "./WorkflowObjectTypeTraitProperty.js";
import type { WorkflowObjectTypeTraitPropertyId } from "./WorkflowObjectTypeTraitPropertyId.js";
import type { WorkflowObjectTypeTraitVersion } from "./WorkflowObjectTypeTraitVersion.js";

/**
 * A `WorkflowObjectTypeTrait` is a model that represents a template for an ObjectType(s). For example, there could
 * be an Alert WorkflowObjectTypeTrait and multiple alert ObjectType(s) can adhere to it.
 */
export interface WorkflowObjectTypeTrait {
  displayName: WorkflowObjectTypeTraitDisplayName;
  id: WorkflowObjectTypeTraitId;
  description: WorkflowObjectTypeTraitDescription | undefined;
  version: WorkflowObjectTypeTraitVersion;
  properties: Record<
    WorkflowObjectTypeTraitPropertyId,
    WorkflowObjectTypeTraitProperty
  >;
}
