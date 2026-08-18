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

import { createHash } from "node:crypto";

const NAMESPACE = "ri.ontology.oac";

export function deterministicRid(
  randomnessKey: string | undefined,
  kind: string,
  ...parts: string[]
): string {
  const key = randomnessKey ?? "oac-default-randomness-key";
  const digest = createHash("sha256")
    .update([key, kind, ...parts].join("\0"))
    .digest("hex")
    .slice(0, 32);
  return `${NAMESPACE}.${kind}.${digest}`;
}

export function existingOrDeterministicRid(
  candidate: string | undefined,
  randomnessKey: string | undefined,
  kind: string,
  ...parts: string[]
): string {
  if (candidate != null && candidate.startsWith("ri.")) {
    return candidate;
  }
  return deterministicRid(randomnessKey, kind, ...parts);
}
