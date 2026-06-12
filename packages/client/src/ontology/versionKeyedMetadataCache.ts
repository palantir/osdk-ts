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

import type { MinimalClient } from "../MinimalClientContext.js";

/**
 * Resolve a cache-busting version token for the active ontology.
 *
 * Decision (v1): the token is the ontology rid plus any branch. On a known
 * version bump, callers invalidate by observing a changed token. A live
 * per-request ontology version token is a v2 refinement and is intentionally
 * left as a seam here so a future implementer does not mistake this for an
 * oversight.
 */
export async function ontologyVersionKey(
  client: MinimalClient,
): Promise<string> {
  const rid = await client.ontologyRid;
  return `${rid} ${client.branch ?? ""}`;
}
