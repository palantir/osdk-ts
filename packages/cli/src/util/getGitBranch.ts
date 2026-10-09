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
      // Required for this command to always output US English
      env: { LC_ALL: "C" },
    });
    const branch = stdout.trim();
    if (branch === "") {
      consola.warn("HEAD is detached; no current git branch is available");
      return undefined;
    }
    return branch;
  } catch (error) {
    if (
      error instanceof Error &&
      "stderr" in error &&
      typeof error.stderr === "string" &&
      error.stderr.includes("fatal: not a git repository")
    ) {
      return undefined;
    }
    consola.warn("Unable to read the current git branch:", error);
    return undefined;
  }
}
