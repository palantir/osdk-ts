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

import type { TaskDetailsV1 } from "./TaskDetailsV1.js";
import type { TaskDetailsV2 } from "./TaskDetailsV2.js";
export interface ProposalTaskDetails_v1 {
  type: "v1";
  v1: TaskDetailsV1;
}

export interface ProposalTaskDetails_v2 {
  type: "v2";
  v2: TaskDetailsV2;
}
/**
 * Encodes the task details for the Approvals Task associated with this Proposal.
 */
export type ProposalTaskDetails =
  | ProposalTaskDetails_v1
  | ProposalTaskDetails_v2;
