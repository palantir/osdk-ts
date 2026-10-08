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

import { consola } from "consola";
import { execa } from "execa";

/** The current git branch, or `undefined` if HEAD is detached or git fails. */
export async function getGitBranch(cwd?: string): Promise<string | undefined> {
  try {
    const { stdout } = await execa("git", ["branch", "--show-current"], {
      cwd,
    });
    const branch = stdout.trim();
    if (branch === "") {
      consola.debug("Git HEAD is detached; no current Git branch is available");
    }
    return branch || undefined;
  } catch (error) {
    consola.debug("Unable to read the current Git branch:", error);
    return undefined;
  }
}
