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

import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { OntologyProposalRid } from "../../api/OntologyProposalRid.js";
import type { ProposalStatusV2 } from "./ProposalStatusV2.js";
import type { ProposalTaskDetails } from "./ProposalTaskDetails.js";
import type { ProposalV2Attribution } from "./ProposalV2Attribution.js";

/**
 * A type to represent a proposal on an OntologyBranch.
 */
export interface OntologyProposalV2 {
  rid: OntologyProposalRid;
  parentBranchRid: OntologyBranchRid;
  attribution: ProposalV2Attribution;
  taskDetails: ProposalTaskDetails;
  status: ProposalStatusV2;
}
