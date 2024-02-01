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
import * as fs from "node:fs";
import * as path from "node:path";

const TOKEN_ENV_VARS: string[] = ["FOUNDRY_TOKEN", "FOUNDRY_SDK_AUTH_TOKEN"];

/**
 * Loads a JWT Auth Token from an argument, a file, or environment variable.
 * @param token The token as a string.
 * @param tokenFile The path to the token file.
 * @returns The token as a string.
 * @throws An error if no token is found.
 */
export function loadToken(token?: string, tokenFile?: string): string {
  if (token) {
    checkIsValidToken(token);
    consola.debug(`Using token from --token argument`);
    return token;
  }

  if (tokenFile) {
    const loadedToken = loadTokenFile(tokenFile);
    checkIsValidToken(loadedToken);
    consola.debug(`Using token from --tokenFile argument`);
    return loadedToken;
  }

  for (const envVar of TOKEN_ENV_VARS) {
    const environmentToken = process.env[envVar];
    if (environmentToken) {
      checkIsValidToken(environmentToken);
      consola.debug(`Using token from ${envVar} environment variable`);
      if (envVar === "FOUNDRY_SDK_AUTH_TOKEN") {
        consola.warn(
          `Using FOUNDRY_SDK_AUTH_TOKEN environment variable is deprecated. Please use FOUNDRY_TOKEN instead.`,
        );
      }
      return environmentToken;
    }
  }

  throw new Error(
    `No token found. Please supply a --token argument, a --token-file argument or set the ${
      TOKEN_ENV_VARS[0]
    } environment variable.`,
  );
}

/**
 * Synchronously reads a JWT Auth Token from a file.
 * @param filePath The path to the token file.
 * @returns The token as a string.
 * @throws An error if the file cannot be read or if the file does not contain a valid JWT.
 */
function loadTokenFile(filePath: string): string {
  let token: string;
  let resolvedPath: string;
  try {
    resolvedPath = path.resolve(filePath);
    token = fs.readFileSync(resolvedPath, "utf8").trim();
  } catch (error) {
    throw new Error(`Unable to read token file "${filePath}": ${error}`);
  }

  return token;
}

/**
 * Checks if a given string is a valid token.
 * @param token The string to check.
 * @throws An error if the string is not a valid token.
 */
function checkIsValidToken(token: string) {
  if (!isJWT(token)) {
    throw new Error(`Token "${token}" is not a valid JWT`);
  }
}

/**
 * Checks if a given string is a JWT.
 * @param token The string to check.
 * @returns true if the string is a JWT, false otherwise.
 */
function isJWT(token: string): boolean {
  // https://stackoverflow.com/a/65755789
  const jwtPattern = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  return jwtPattern.test(token);
}
