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

import type { BlockShapeId } from "@osdk/client.unstable";
import { createHash } from "crypto";
import { v5 as uuidv5 } from "uuid";

/**
 * Converts a string to a BlockShapeId by:
 * 1. Creating a SHA-256 hash of the input string
 * 2. Using that hash to generate a name-based UUID (v5)
 * 3. Returning the UUID as a BlockShapeId
 *
 * @param input The string to convert to a BlockShapeId
 * @returns A BlockShapeId generated from the input string
 */
export function toBlockShapeId(input: string): BlockShapeId {
  try {
    // Create SHA-256 hash of the input string
    const hash = createHash("sha256").update(input, "utf8").digest();

    // Generate a name-based UUID (v5) from the hash
    // Using a nil UUID as namespace since we're already using a hash
    const NIL_UUID = "00000000-0000-0000-0000-000000000000";
    return uuidv5(hash, NIL_UUID);
  } catch (error) {
    throw new Error(
      `Failed to create BlockShapeId: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
}
