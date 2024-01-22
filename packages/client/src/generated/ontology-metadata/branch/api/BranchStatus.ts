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

/**
 * Represents the status of a branch.
 * Inactive branches were branches that were open but were not modified for a specific timeout period (default
 * 14 days). Any indexed data on the branch is now deindexed. The branch can become open again via reactivating.
 * Open branches are the default state of a branch.
 * Merged branches are branches that had their modifications merged into the default branch of the ontology;
 * these branches cannot ever be modified or merged again.
 * Closed branches are branches that were manually closed. Closed branches are not reopenable and cannot
 * ever be modified or merged.
 */
export type BranchStatus = "INACTIVE" | "OPEN" | "MERGED" | "CLOSED";
