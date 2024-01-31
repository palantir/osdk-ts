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

import * as fs from "node:fs";
import * as path from "node:path";

const TOKEN_ENV_VAR = "FOUNDRY_TOKEN";

/**
 * Loads a JWT Auth Token from a file, environment variable, or argument.
 * @param token The token as a string.
 * @param tokenFile The path to the token file.
 * @returns The token as a string.
 * @throws An error if no token is found.
 */
export function loadToken(token?: string, tokenFile?: string): string {
  if (token) {
    return token;
  }
  if (tokenFile) {
    return loadTokenFile(tokenFile);
  }
  const environmentToken = process.env[TOKEN_ENV_VAR];
  if (environmentToken) {
    return environmentToken;
  }
  throw new Error(
    `No token found. Please supply a --token argument, a --token-file argument or set the ${TOKEN_ENV_VAR} environment variable.`,
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

  if (!isJWT(token)) {
    throw new Error(`Token file "${filePath}" does not contain a valid JWT`);
  }

  return token;
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
