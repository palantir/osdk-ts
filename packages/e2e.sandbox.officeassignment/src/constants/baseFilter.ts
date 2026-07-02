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

import type { WhereClause } from "@osdk/api";

import type { Assignment } from "../generatedNoCheck2/index.js";

/**
 * The app only ever looks at active, permanent assignments. Both tabs scope their object sets to
 * this base filter before any user filtering is applied.
 */
export const ASSIGNMENT_BASE_WHERE: WhereClause<Assignment> = {
  assignmentType: { $eq: "Permanent" },
  assignmentStatus: { $eq: "Active" },
};
