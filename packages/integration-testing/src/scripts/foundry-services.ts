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
import { parse as parseYaml } from "yaml";

import { resolveFoundryHost } from "./foundry-host.js";
import type { ResolveBearerTokenOptions } from "./foundry-token.js";

const trimTrailingSlashes = (url: string): string => {
  let trimmed = url;
  while (trimmed.endsWith("/")) {
    trimmed = trimmed.slice(0, -1);
  }
  return trimmed;
};

const getServiceUrl = (
  discovery: Record<string, unknown>,
  serviceName: "code" | "artifacts",
): string => {
  const config = discovery[serviceName];
  const uris =
    typeof config === "object" && config != null && "uris" in config
      ? config.uris
      : config;
  invariant(
    Array.isArray(uris) && typeof uris[0] === "string" && uris[0].length > 0,
    `No URL found for ${serviceName}`,
  );
  const url = new URL(uris[0]);
  invariant(
    url.protocol === "https:" || url.protocol === "http:",
    `Invalid URL for ${serviceName}`,
  );
  return trimTrailingSlashes(uris[0]);
};

export const resolveFoundryServices = async (
  options: ResolveBearerTokenOptions = {},
): Promise<{ codeUrl: string; installerBaseUrl: string }> => {
  const env = options.env ?? process.env;
  const discoveryPath = env.FOUNDRY_SERVICE_DISCOVERY_V2;
  if (!discoveryPath) {
    const host = await resolveFoundryHost(options);
    return {
      codeUrl: `https://${host}/code/api/`,
      installerBaseUrl: `https://${host}`,
    };
  }

  let discovery: Record<string, unknown>;
  try {
    discovery = parseYaml(await readFile(discoveryPath, "utf-8"));
  } catch (error) {
    throw new Error(
      `Failed to read or parse Foundry service discovery file at ${discoveryPath}`,
      { cause: error },
    );
  }
  invariant(
    typeof discovery === "object" &&
      discovery != null &&
      !Array.isArray(discovery),
    `Invalid Foundry service discovery file at ${discoveryPath}`,
  );
  const codeUrl = getServiceUrl(discovery, "code");
  const artifactsUrl = getServiceUrl(discovery, "artifacts");
  const artifactsApiSuffix = "/artifacts/api";
  return {
    codeUrl: `${codeUrl}/`,
    installerBaseUrl: artifactsUrl.endsWith(artifactsApiSuffix)
      ? artifactsUrl.slice(0, -artifactsApiSuffix.length)
      : artifactsUrl,
  };
};
