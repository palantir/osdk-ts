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

import type { OntologyIrSecurityGroupGranularCondition } from "./OntologyIrSecurityGroupGranularCondition.js";
import type { SecurityGroupMandatoryPolicy } from "./SecurityGroupMandatoryPolicy.js";

/**
 * Ontology-managed granular security applied to the properties in the group. User must also first satisfy the
 * additionalMandatory security markings, if any are specified, to have visibility to the properties within
 * this group that are allowed by the granular policy.
 *
 * The granular policy specified must be authorized by the overall ObjectTypeDatasource's dataSecurity for
 * every "row" (object or relation).
 */
export interface OntologyIrSecurityGroupGranularPolicy {
  granularPolicyCondition: OntologyIrSecurityGroupGranularCondition;
  additionalMandatory: SecurityGroupMandatoryPolicy;
}
