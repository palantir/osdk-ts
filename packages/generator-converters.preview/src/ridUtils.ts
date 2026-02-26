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
 * Generate a deterministic UUID v5-like identifier from a string.
 * Uses SHA-256 hash truncated to UUID format with version (5) and
 * variant (RFC 4122) bits set for spec compliance.
 */
export function toUuid(str: string): string {
  const hashBytes = createHash("sha256").update(str).digest();
  // Set version to 5 (name-based SHA) in byte 6: clear top nibble, set to 0101
  hashBytes[6] = (hashBytes[6] & 0x0f) | 0x50;
  // Set variant to RFC 4122 in byte 8: clear top 2 bits, set to 10
  hashBytes[8] = (hashBytes[8] & 0x3f) | 0x80;

  const hex = hashBytes.subarray(0, 16).toString("hex");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${
    hex.slice(16, 20)
  }-${hex.slice(20, 32)}`;
}
