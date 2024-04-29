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

import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { OntologyVersion } from "../../api/OntologyVersion.js";
import type { OntologyBranchAttribution } from "../../branch/api/OntologyBranchAttribution.js";
import type { OntologyBranchDescription } from "../../branch/api/OntologyBranchDescription.js";
import type { OntologyBranchDisplayName } from "../../branch/api/OntologyBranchDisplayName.js";
import type { OntologyBranchModificationData } from "../../branch/api/OntologyBranchModificationData.js";
import type { OntologyBranchProposal } from "./OntologyBranchProposal.js";

/**
 * A type to represent the `OntologyBranch` with `OntologyBranchProposal`. Note that the default OntologyBranch is
 * not an OntologyBranchWithProposal since it is not associated with any proposal.
 */
export interface OntologyBranchWithProposal {
  rid: OntologyBranchRid;
  displayName: OntologyBranchDisplayName;
  description: OntologyBranchDescription;
  attribution: OntologyBranchAttribution;
  createdAtOntologyVersion: OntologyVersion;
  proposal: OntologyBranchProposal;
  ontologyBranchModificationData: OntologyBranchModificationData;
  latestOntologyVersion: OntologyVersion;
  latestRebasedOntologyVersion: OntologyVersion;
}
