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

import type { ClosedStatusV2 } from "./ClosedStatusV2.js";
import type { MergedStatusV2 } from "./MergedStatusV2.js";
import type { OpenStatusV2 } from "./OpenStatusV2.js";
export interface ProposalStatusV2_open {
  type: "open";
  open: OpenStatusV2;
}

export interface ProposalStatusV2_merged {
  type: "merged";
  merged: MergedStatusV2;
}

export interface ProposalStatusV2_closed {
  type: "closed";
  closed: ClosedStatusV2;
}
export type ProposalStatusV2 =
  | ProposalStatusV2_open
  | ProposalStatusV2_merged
  | ProposalStatusV2_closed;
