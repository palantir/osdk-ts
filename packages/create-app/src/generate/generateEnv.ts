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
  ontology,
}: {
  envPrefix: string;
  foundryUrl: string;
  clientId: string;
  corsProxy: boolean;
  ontology: string | undefined;
}): string {
  const foundryApiUrl = corsProxy ? "http://localhost:8080" : foundryUrl;
  const applicationUrl = "http://localhost:8080";
  const ontologyEnvSection = ontology != null
    ? `

# This Ontology RID must match the Ontology RID your Developer Console is associated with.
# You can check the Ontology on the "Ontology SDK" tab of Developer Console.
# It typically does not need to be changed.

${envPrefix}FOUNDRY_ONTOLOGY_RID=${ontology}
`
    : "";

  return `# This env file is intended for developing on your local computer.
# To set up development in Foundry's Code Workspaces, see .env.code-workspaces.
# To deploy your application to production, see .env.production.
# Note that .env.code-workspaces is only present for projects that were set up
# using the "Bootstrap in Foundry" option in Developer Console.


# This URL is the URL your users will be redirected back to after signing in.
# This URL must exactly match one of the URLs listed in the "OAuth & scopes"
# page of Developer Console.
#
# If your application in development is not hosted on port 8080, you will need
# to change this URL here and in Developer Console.

${envPrefix}FOUNDRY_REDIRECT_URL=${applicationUrl}/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

${envPrefix}FOUNDRY_API_URL=${foundryApiUrl}


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

${envPrefix}FOUNDRY_CLIENT_ID=${clientId}
${ontologyEnvSection}`;
}

export function generateEnvProduction({
  envPrefix,
  foundryUrl,
  applicationUrl,
  clientId,
  ontology,
}: {
  envPrefix: string;
  foundryUrl: string;
  applicationUrl: string | undefined;
  clientId: string;
  ontology: string | undefined;
}): string {
  const applicationUrlOrDefault = applicationUrl
    ?? "<Fill in the domain at which you deploy your application>";
  const ontologyEnvSection = ontology != null
    ? `

# This Ontology RID must match the Ontology RID your Developer Console is associated with.
# You can check the Ontology on the "Ontology SDK" tab of Developer Console.
# It typically does not need to be changed.

${envPrefix}FOUNDRY_ONTOLOGY_RID=${ontology}
`
    : "";

  return `# This env file is intended for deploying your application to production.
# To set up development on your local computer, see .env.development.
# To set up development in Foundry's Code Workspaces, see .env.code-workspaces.
# Note that .env.code-workspaces is only present for projects that were set up
# using the "Bootstrap in Foundry" option in Developer Console.


# This URL is the URL your users will be redirected back to after signing in.
# This URL must exactly match one of the URLs listed in the "OAuth & scopes"
# page of Developer Console.
#
# If you change where your application is hosted, you will need to change this
# URL here and in Developer Console.

${
    applicationUrl == null
      ? "# "
      : ""
  }${envPrefix}FOUNDRY_REDIRECT_URL=${applicationUrlOrDefault}/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

${envPrefix}FOUNDRY_API_URL=${foundryUrl}


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

${envPrefix}FOUNDRY_CLIENT_ID=${clientId}
${ontologyEnvSection}`;
}
