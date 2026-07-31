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

import invariant from "tiny-invariant";

import type { ResolveBearerTokenOptions } from "./foundry-token.js";
import { readGitRemoteUrl } from "./gitRemote.js";

export type ArtifactPlatform =
  | "linux-amd64"
  | "linux-arm64"
  | "macos-amd64"
  | "macos-arm64"
  | "windows-amd64";

export interface FoundryCliInstallPathsOptions {
  env?: NodeJS.ProcessEnv;
  platform?: NodeJS.Platform;
}

export const getArtifactPlatform = (
  platform: NodeJS.Platform = process.platform,
  arch: string = process.arch,
): ArtifactPlatform => {
  switch (`${platform}-${arch}`) {
    case "linux-x64":
      return "linux-amd64";
    case "linux-arm64":
      return "linux-arm64";
    case "darwin-x64":
      return "macos-amd64";
    case "darwin-arm64":
      return "macos-arm64";
    case "win32-x64":
      return "windows-amd64";
    default:
      invariant(
        false,
        `The Foundry CLI is not published for ${platform}-${arch}`,
      );
  }
};

const parseGitRemoteHost = (gitRemote: string): string | undefined => {
  try {
    // Strips any userinfo (`https://user:token@host/...`), and the port with it:
    // a git remote's port belongs to the git transport (`ssh://...:22/repo`),
    // not to the Foundry endpoint this host is used to build.
    return new URL(gitRemote).hostname || undefined;
  } catch {
    // scp-like remotes (`user@host:path`)
    const host = gitRemote
      .slice(gitRemote.lastIndexOf("@") + 1)
      .split(":")[0]
      .split("/")[0];
    return host === "" ? undefined : host;
  }
};

/**
 * Reads the host out of an explicitly configured value.
 */
const parseConfiguredHost = (value: string): string | undefined => {
  const trimmed = value.trim();
  let fromUrl: string | undefined;
  try {
    fromUrl = new URL(trimmed).host || undefined;
  } catch {
    fromUrl = undefined;
  }
  return fromUrl ?? (trimmed.split("/")[0] || undefined);
};

export const resolveFoundryHost = async (
  options: ResolveBearerTokenOptions = {},
): Promise<string> => {
  const env = options.env ?? process.env;
  const envValue = env.FOUNDRY_EXTERNAL_HOST ?? env.FOUNDRY_HOSTNAME;
  if (envValue) {
    const configured = parseConfiguredHost(envValue);
    if (typeof configured !== "undefined") {
      return configured;
    }
  }
  const gitRemote = await readGitRemoteUrl(options);
  const gitRemoteHost =
    gitRemote === undefined ? undefined : parseGitRemoteHost(gitRemote);
  invariant(
    gitRemoteHost !== undefined,
    "Cannot resolve the Foundry host. Please set FOUNDRY_EXTERNAL_HOST or " +
      "FOUNDRY_HOSTNAME, or configure a git remote pointing at Foundry.",
  );
  return gitRemoteHost;
};
