/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { BranchId } from "../../api/BranchId.js";
import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { OntologyVersion } from "../../api/OntologyVersion.js";
import type { BranchType } from "./BranchType.js";
import type { OntologyBranchDescription } from "./OntologyBranchDescription.js";
import type { OntologyBranchDisplayName } from "./OntologyBranchDisplayName.js";
export interface CreateOntologyServiceBranchRequest {
  displayName: OntologyBranchDisplayName;
  description: OntologyBranchDescription;
  createAtOntologyVersion: OntologyVersion | undefined;
  datasourceBranchId: BranchId | undefined;
  branchType: BranchType;
  parentBranchRid: OntologyBranchRid | undefined;
}
