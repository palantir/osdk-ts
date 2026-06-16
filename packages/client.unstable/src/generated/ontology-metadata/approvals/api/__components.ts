/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type {
  OntologyBranchRid as _api_OntologyBranchRid,
  OntologyVersion as _api_OntologyVersion,
  UserId as _api_UserId,
} from "../../api/__components.js";
import type {
  OntologyBranchAttribution as _branch_api_OntologyBranchAttribution,
  OntologyBranchDescription as _branch_api_OntologyBranchDescription,
  OntologyBranchDisplayName as _branch_api_OntologyBranchDisplayName,
  OntologyBranchModificationData as _branch_api_OntologyBranchModificationData,
} from "../../branch/api/__components.js";

/**
 * A type to represent OntologyBranch creation request.
 */
export interface CreateOntologyBranchRequest {
  createdAtOntologyVersion?: _api_OntologyVersion | null | undefined;
  description: _branch_api_OntologyBranchDescription;
  displayName: _branch_api_OntologyBranchDisplayName;
  proposal?: OntologyBranchProposal | null | undefined;
}
/**
 * A type to represent ontology branch creation response
 */
export interface CreateOntologyBranchResponse {
  ontologyBranchRid: _api_OntologyBranchRid;
}
/**
 * A paging token to be passed back to get the next page of results. Clients shouldn't make any assumptions
 * about the content of the paging token and it should not be parsed/modified.
 */
export type LoadAllOntologyBranchesPageToken = string;

/**
 * A type to represent the request to load all the OntologyBranchesWithProposal(s) the user has access to
 */
export interface LoadAllOntologyBranchesWithProposalPageRequest {
  filters?:
    | LoadAllOntologyBranchesWithProposalRequestFilters
    | null
    | undefined;
  limit: number;
  pageToken?: LoadAllOntologyBranchesPageToken | null | undefined;
}
/**
 * A type to represent the response to load all the branches the user has access to
 */
export interface LoadAllOntologyBranchesWithProposalPageResponse {
  nextPageToken?: LoadAllOntologyBranchesPageToken | null | undefined;
  ontologyBranchesWithProposal: Array<OntologyBranchWithProposal>;
}
/**
 * Represents the filters that the user can apply while loading OntologyBranchesWithProposal. In case if multiple `ProposalStatus` are requested, the result will consist of `OntologyBranchesWithProposal` in either of those states. Note that in case of multiple filters, results will consist of only the `OntologyBranchesWithProposal` which satisfy all of them i.e. AND filter will be applied.
 */
export interface LoadAllOntologyBranchesWithProposalRequestFilters {
  author?: _api_UserId | null | undefined;
  proposalStatus: Array<ProposalStatus>;
}
/**
 * A type to represent the request to load the OntologyBranchWithProposal the user has access to.
 */
export interface LoadOntologyBranchWithProposalRequest {
  ontologyBranchRid: _api_OntologyBranchRid;
}
/**
 * A type to represent the response to load all the OntologyBranchWithProposal(s) the user has access to.
 */
export interface LoadOntologyBranchWithProposalResponse {
  ontologyBranchProposalApprovalState: OntologyBranchProposalApprovalState;
  ontologyBranchWithProposal: OntologyBranchWithProposal;
}
/**
 * A type to represent a modification request of an OntologyBranchProposal.
 */
export interface ModifyOntologyBranchProposal {
  status: ProposalStatus;
}
/**
 * A type to represent an OntologyBranch modification request.
 */
export interface ModifyOntologyBranchRequest {
  description: _branch_api_OntologyBranchDescription;
  displayName: _branch_api_OntologyBranchDisplayName;
  proposal: ModifyOntologyBranchProposal;
  rid: _api_OntologyBranchRid;
}
/**
 * A type to represent an OntologyBranch modification response.
 */
export interface ModifyOntologyBranchResponse {
}
/**
 * A type to represent a change request from the OntologyBranch.
 */
export interface OntologyBranchProposal {
  status: ProposalStatus;
  targetOntologyBranchRid: _api_OntologyBranchRid;
}
/**
 * A type to represent the approval state of an OntologyBranchProposal.
 */
export interface OntologyBranchProposalApprovalState {
  hasAllApprovals: boolean;
}
/**
 * A type to represent the `OntologyBranch` with `OntologyBranchProposal`. Note that the default OntologyBranch is
 * not an OntologyBranchWithProposal since it is not associated with any proposal.
 */
export interface OntologyBranchWithProposal {
  attribution: _branch_api_OntologyBranchAttribution;
  createdAtOntologyVersion: _api_OntologyVersion;
  description: _branch_api_OntologyBranchDescription;
  displayName: _branch_api_OntologyBranchDisplayName;
  latestOntologyVersion: _api_OntologyVersion;
  latestRebasedOntologyVersion: _api_OntologyVersion;
  ontologyBranchModificationData: _branch_api_OntologyBranchModificationData;
  proposal: OntologyBranchProposal;
  rid: _api_OntologyBranchRid;
}
/**
 * A type to uniquely represent the status of an OntologyBranchProposal.
 */
export type ProposalStatus = "DRAFT" | "OPEN" | "MERGED" | "CLOSED";
