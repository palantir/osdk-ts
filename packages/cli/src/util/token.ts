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

import { consola } from "consola";
import { promises as fsPromises } from "node:fs";
import path from "node:path";
import { ExitProcessError } from "../ExitProcessError.js";

const TOKEN_ENV_VARS = ["FOUNDRY_TOKEN", "FOUNDRY_SDK_AUTH_TOKEN"] as const;

/**
 * Loads a JWT Auth Token from an argument, a file, or environment variable returning the first found.
 * @param token The token as a string.
 * @param tokenFile The path to the token file.
 * @returns The token as a string.
 * @throws An error if no token is found.
 */
export async function loadToken(
  token?: string,
  tokenFile?: string,
): Promise<string> {
  if (token) {
    consola.debug(`Using token from --token argument`);
    validate(token);
    return token;
  }

  if (tokenFile) {
    const loadedToken = await loadTokenFile(tokenFile);
    consola.debug(
      `Using token from --tokenFile=${loadedToken.filePath} argument`,
    );
    validate(loadedToken.token);
    return loadedToken.token;
  }

  for (const envVar of TOKEN_ENV_VARS) {
    const environmentToken = process.env[envVar];
    if (environmentToken) {
      consola.debug(`Using token from ${envVar} environment variable`);
      validate(environmentToken);
      if (envVar === "FOUNDRY_SDK_AUTH_TOKEN") {
        consola.warn(
          `Using FOUNDRY_SDK_AUTH_TOKEN environment variable is deprecated. Please use FOUNDRY_TOKEN instead.`,
        );
      }
      return environmentToken;
    }
  }

  throw new ExitProcessError(
    2,
    `No token found. Please supply a --token argument, a --token-file argument or set the ${
      TOKEN_ENV_VARS[0]
    } environment variable.`,
  );
}

interface LoadedToken {
  filePath: string;
  token: string;
}
/**
 * Reads a JWT Auth Token from a file.
 * @param filePath The path to the token file.
 * @returns The token as a string.
 * @throws An error if the file cannot be read.
 */
export async function loadTokenFile(filePath: string): Promise<LoadedToken> {
  let token: string;
  let resolvedPath: string;
  try {
    resolvedPath = path.resolve(filePath);
    token = await fsPromises.readFile(resolvedPath, "utf8");
    token = token.trim();
  } catch (error) {
    throw new ExitProcessError(
      2,
      `Unable to read token file "${filePath}": ${error}`,
    );
  }

  return { filePath: resolvedPath, token };
}

export function validate(token: string): void {
  if (!isJWT(token)) {
    throw new ExitProcessError(2, `Token does not appear to be a JWT`);
  }
}

function isJWT(token: string): boolean {
  // https://stackoverflow.com/a/65755789
  const jwtPattern = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  return jwtPattern.test(token);
}
