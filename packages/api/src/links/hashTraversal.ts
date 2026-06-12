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

import { stableStringify } from "../util/stableStringify.js";
import type { LinkTraversalDescriptor } from "./LinkTraversalDescriptor.js";

/**
 * Produces a stable structural hash of a {@link LinkTraversalDescriptor}.
 *
 * Two descriptors with identical content but different object-key insertion
 * order hash equal; descriptors differing in any structural field (kind, hop
 * api names, multiplicity, where clause, orderBy, limit, projection shape id,
 * recursive depth/budget) hash differently. Function-valued fields are ignored
 * so transient closures attached during construction do not affect the hash.
 *
 * Used as the subscription/cache key for token-driven traversals so re-renders
 * that rebuild a structurally-identical descriptor reuse the same subscription.
 */
export function hashTraversal(descriptor: LinkTraversalDescriptor): string {
  return stableStringify(descriptor);
}
