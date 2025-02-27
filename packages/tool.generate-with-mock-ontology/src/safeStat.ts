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

import type { Stats } from "node:fs";
import * as fs from "node:fs/promises";

export async function safeStat(
  filePath: string,
  type?: "should exist" | "should not exist",
): Promise<Stats | undefined> {
  try {
    const ret = await fs.stat(filePath);
    if (type === "should not exist") {
      throw new Error(`Expected ${filePath} to not exist`);
    }

    // eslint-disable-next-line no-console
    console.log(`safeStat: ${filePath} exists`);
    return ret;
  } catch (e) {
    if (type === "should exist") {
      throw new Error(`Expected ${filePath} to exist`);
    }

    // eslint-disable-next-line no-console
    console.log(`safeStat: ${filePath} does not exist`);
    return undefined;
  }
}
