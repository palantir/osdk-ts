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

import type { ActionTypeRid } from "../../api/ActionTypeRid.js";
import type { InterfaceTypeRid } from "../../api/InterfaceTypeRid.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { RuleSetRid } from "../../api/RuleSetRid.js";
import type { SharedPropertyTypeRid } from "../../api/SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../../api/TypeGroupRid.js";
import type { WorkflowRid } from "../../workflow/api/WorkflowRid.js";
import type { ValidationError } from "./ValidationError.js";

/**
 * A collection of maps where each key is a resource identifier and the corresponding value is a set
 * of validation errors specific to that resource. This allows for errors to be tracked
 * on a per-resource basis.
 */
export interface ResourceErrors {
  objectTypes: Record<ObjectTypeRid, Array<ValidationError>>;
  actionTypes: Record<ActionTypeRid, Array<ValidationError>>;
  linkTypes: Record<LinkTypeRid, Array<ValidationError>>;
  ruleSets: Record<RuleSetRid, Array<ValidationError>>;
  workflows: Record<WorkflowRid, Array<ValidationError>>;
  sharedPropertyTypes: Record<SharedPropertyTypeRid, Array<ValidationError>>;
  typeGroups: Record<TypeGroupRid, Array<ValidationError>>;
  interfaces: Record<InterfaceTypeRid, Array<ValidationError>>;
}
