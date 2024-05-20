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

import type { MinimalFs } from "../MinimalFs.js";

/**
 * Verify that the target outDir does not yet exist OR is empty.
 *
 * Re-generating an ontology on top of itself is not supported and may leave old
 * files around or refuse to update files with new contents in some cases.
 */
export async function verifyOutdir(outDir: string, fs: MinimalFs) {
  // if outDir exists and is not empty, we cannot proceed with the generation
  try {
    const contents = await fs.readdir(outDir);
    if (contents.length !== 0) {
      throw new Error(
        `outDir ${outDir} is not empty, please delete its contents and try again`,
      );
    }
  } catch (e) {
    if ((e as { code: string }).code === "ENOENT") {
      // acceptable, we'll create the directory ourselves
    } else {
      throw e;
    }
  }
}
