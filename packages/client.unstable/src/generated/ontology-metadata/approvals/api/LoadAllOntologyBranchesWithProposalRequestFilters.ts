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

import type { UserId } from "../../api/UserId.js";
import type { ProposalStatus } from "./ProposalStatus.js";

/**
 * Represents the filters that the user can apply while loading OntologyBranchesWithProposal. In case if multiple `ProposalStatus` are requested, the result will consist of `OntologyBranchesWithProposal` in either of those states. Note that in case of multiple filters, results will consist of only the `OntologyBranchesWithProposal` which satisfy all of them i.e. AND filter will be applied.
 */
export interface LoadAllOntologyBranchesWithProposalRequestFilters {
  proposalStatus: Array<ProposalStatus>;
  author: UserId | undefined;
}
