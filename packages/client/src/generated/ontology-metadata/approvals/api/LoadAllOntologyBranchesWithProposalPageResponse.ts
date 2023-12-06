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

import type { LoadAllOntologyBranchesPageToken } from "./LoadAllOntologyBranchesPageToken.js";
import type { OntologyBranchWithProposal } from "./OntologyBranchWithProposal.js";

/**
 * A type to represent the response to load all the branches the user has access to
 */
export interface LoadAllOntologyBranchesWithProposalPageResponse {
  ontologyBranchesWithProposal: Array<OntologyBranchWithProposal>;
  nextPageToken: LoadAllOntologyBranchesPageToken | undefined;
}
