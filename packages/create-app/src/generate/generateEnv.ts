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

export function generateEnvDevelopment({
  envPrefix,
  foundryUrl,
  clientId,
  corsProxy,
}: {
  envPrefix: string;
  foundryUrl: string;
  clientId: string;
  corsProxy: boolean;
}): string {
  return generateEnv({
    envPrefix,
    foundryUrl: corsProxy ? "http://localhost:8080" : foundryUrl,
    applicationUrl: "http://localhost:8080",
    clientId,
  });
}

export function generateEnvProduction({
  envPrefix,
  foundryUrl,
  applicationUrl,
  clientId,
}: {
  envPrefix: string;
  foundryUrl: string;
  applicationUrl: string | undefined;
  clientId: string;
}): string {
  return generateEnv({
    envPrefix,
    foundryUrl,
    applicationUrl,
    clientId,
  });
}

function generateEnv({
  envPrefix,
  foundryUrl,
  applicationUrl,
  clientId,
}: {
  envPrefix: string;
  foundryUrl: string;
  applicationUrl: string | undefined;
  clientId: string;
}): string {
  return `${envPrefix}FOUNDRY_API_URL=${foundryUrl}\n`
    + `${applicationUrl == null ? "# " : ""}${envPrefix}FOUNDRY_REDIRECT_URL=${
      applicationUrl
        ?? "<Fill in the domain at which you deploy your application>"
    }/auth/callback\n`
    + `${envPrefix}FOUNDRY_CLIENT_ID=${clientId}\n`;
}
