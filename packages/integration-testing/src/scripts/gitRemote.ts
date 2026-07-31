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

import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export interface GitRemoteOptions {
  env?: NodeJS.ProcessEnv;
  cwd?: string;
}

/**
 * Reads `remote.origin.url` from the git config of `cwd`, returning `undefined`
 * when git fails or no remote is configured.
 */
export const readGitRemoteUrl = async (
  options: GitRemoteOptions = {},
): Promise<string | undefined> => {
  const env = options.env ?? process.env;
  const cwd = options.cwd ?? env.INIT_CWD ?? process.cwd();
  try {
    const { stdout } = await execFileAsync(
      "git",
      ["config", "remote.origin.url"],
      { cwd },
    );
    const gitRemote = stdout.trim();
    return gitRemote.length === 0 ? undefined : gitRemote;
  } catch {
    return undefined;
  }
};
