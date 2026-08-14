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

import { readFile } from "node:fs/promises";

import invariant from "tiny-invariant";

import { readGitRemoteUrl } from "./gitRemote.js";

export interface ResolveBearerTokenOptions {
  env?: NodeJS.ProcessEnv;
  cwd?: string;
}

const parseGitRemoteToken = (gitRemote: string): string | undefined => {
  let url: URL;
  try {
    url = new URL(gitRemote);
  } catch {
    return undefined;
  }
  const encodedToken = url.password || url.username;
  return encodedToken.length ? decodeURIComponent(encodedToken) : undefined;
};

const resolveFoundryToken = async (
  options: ResolveBearerTokenOptions = {},
): Promise<string | undefined> => {
  const env = options.env ?? process.env;
  if (env.FOUNDRY_CONTAINER_RUNTIME_TYPE === "CODE_WORKSPACE") {
    const tokenPath = env.FOUNDRY_SCOPED_TOKEN;
    invariant(tokenPath, "FOUNDRY_SCOPED_TOKEN: unbound variable");
    const contents = await readFile(tokenPath, "utf-8");
    return contents.trim();
  }
  if (env.FOUNDRY_HOSTNAME && env.FOUNDRY_TOKEN && env.FOUNDRY_USERNAME) {
    return env.FOUNDRY_TOKEN;
  }
  const gitRemote = await readGitRemoteUrl(options);
  invariant(
    gitRemote !== undefined,
    "Warning: Git remote url not set.\n" +
      "Please ensure the following environment variables are set " +
      "[FOUNDRY_HOSTNAME, FOUNDRY_USERNAME, FOUNDRY_TOKEN]",
  );
  return parseGitRemoteToken(gitRemote);
};

export const getFoundryToken = async (
  options: ResolveBearerTokenOptions = {},
): Promise<string> => {
  const token = await resolveFoundryToken(options);
  invariant(token !== undefined, "Could not resolve token");
  return token;
};
