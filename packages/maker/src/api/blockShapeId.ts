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
import crypto from "crypto";

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
  const sha256hash = crypto.createHash("sha256").update(input, "utf8").digest();
  const md5Hash = crypto.createHash("md5").update(sha256hash)
    .digest();

  md5Hash[6] &= 0x0f;
  md5Hash[6] |= 0x30;
  md5Hash[8] &= 0x3f;
  md5Hash[8] |= 0x80;

  return [
    md5Hash.subarray(0, 4).toString("hex"),
    md5Hash.subarray(4, 6).toString("hex"),
    md5Hash.subarray(6, 8).toString("hex"),
    md5Hash.subarray(8, 10).toString("hex"),
    md5Hash.subarray(10, 16).toString("hex"),
  ].join("-");
}
