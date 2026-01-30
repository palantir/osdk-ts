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

/**
 * Generate a deterministic UUID from a string.
 * Uses SHA-256 hash truncated to UUID format for consistency.
 */
export function toUuid(str: string): string {
  const hashHex = createHash("sha256").update(str).digest("hex");
  // Format as UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  return `${hashHex.slice(0, 8)}-${hashHex.slice(8, 12)}-${
    hashHex.slice(12, 16)
  }-${hashHex.slice(16, 20)}-${hashHex.slice(20, 32)}`;
}
