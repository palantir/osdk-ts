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

import { expect, test } from "vitest";
import {
  generateEnvDevelopment,
  generateEnvProduction,
} from "./generateEnv.js";

const expectedEnvDevelopment = `
# This env file is intended for developing on your local computer.
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

PUBLIC_FOUNDRY_REDIRECT_URL=http://localhost:8080/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

PUBLIC_FOUNDRY_API_URL=https://example.palantirfoundry.com


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

PUBLIC_FOUNDRY_CLIENT_ID=123


# This Ontology RID must match the Ontology RID your Developer Console is associated with.
# You can check the Ontology on the "Ontology SDK" tab of Developer Console.
# It typically does not need to be changed.

PUBLIC_FOUNDRY_ONTOLOGY_RID=ri.ontology.main.ontology.fake
`.trimStart();

const expectedEnvDevelopmentCorsProxy = `
# This env file is intended for developing on your local computer.
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

PUBLIC_FOUNDRY_REDIRECT_URL=http://localhost:8080/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

PUBLIC_FOUNDRY_API_URL=http://localhost:8080


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

PUBLIC_FOUNDRY_CLIENT_ID=123


# This Ontology RID must match the Ontology RID your Developer Console is associated with.
# You can check the Ontology on the "Ontology SDK" tab of Developer Console.
# It typically does not need to be changed.

PUBLIC_FOUNDRY_ONTOLOGY_RID=ri.ontology.main.ontology.fake
`.trimStart();

const expectedEnvProduction = `
# This env file is intended for deploying your application to production.
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

PUBLIC_FOUNDRY_REDIRECT_URL=https://app.com/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

PUBLIC_FOUNDRY_API_URL=https://example.palantirfoundry.com


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

PUBLIC_FOUNDRY_CLIENT_ID=123


# This Ontology RID must match the Ontology RID your Developer Console is associated with.
# You can check the Ontology on the "Ontology SDK" tab of Developer Console.
# It typically does not need to be changed.

PUBLIC_FOUNDRY_ONTOLOGY_RID=ri.ontology.main.ontology.fake
`.trimStart();

const expectedEnvProductionNoAppUrl = `
# This env file is intended for deploying your application to production.
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

# PUBLIC_FOUNDRY_REDIRECT_URL=<Fill in the domain at which you deploy your application>/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

PUBLIC_FOUNDRY_API_URL=https://example.palantirfoundry.com


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

PUBLIC_FOUNDRY_CLIENT_ID=123


# This Ontology RID must match the Ontology RID your Developer Console is associated with.
# You can check the Ontology on the "Ontology SDK" tab of Developer Console.
# It typically does not need to be changed.

PUBLIC_FOUNDRY_ONTOLOGY_RID=ri.ontology.main.ontology.fake
`.trimStart();

const expectedEnvDevelopmentNoOntologyRid = `
# This env file is intended for developing on your local computer.
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

PUBLIC_FOUNDRY_REDIRECT_URL=http://localhost:8080/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

PUBLIC_FOUNDRY_API_URL=https://example.palantirfoundry.com


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

PUBLIC_FOUNDRY_CLIENT_ID=123
`.trimStart();

const expectedEnvProductionNoOntologyRid = `
# This env file is intended for deploying your application to production.
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

PUBLIC_FOUNDRY_REDIRECT_URL=https://app.com/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

PUBLIC_FOUNDRY_API_URL=https://example.palantirfoundry.com


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

PUBLIC_FOUNDRY_CLIENT_ID=123
`.trimStart();

test("it generates .env.development", () => {
  expect(generateEnvDevelopment({
    envPrefix: "PUBLIC_",
    foundryUrl: "https://example.palantirfoundry.com",
    clientId: "123",
    corsProxy: false,
    ontology: "ri.ontology.main.ontology.fake",
  })).toEqual(expectedEnvDevelopment);
});

test("it generates .env.development without ontology rid", () => {
  expect(generateEnvDevelopment({
    envPrefix: "PUBLIC_",
    foundryUrl: "https://example.palantirfoundry.com",
    clientId: "123",
    corsProxy: false,
    ontology: undefined,
  })).toEqual(expectedEnvDevelopmentNoOntologyRid);
});

test("it generates .env.development assuming CORS proxy", () => {
  expect(generateEnvDevelopment({
    envPrefix: "PUBLIC_",
    foundryUrl: "https://example.palantirfoundry.com",
    clientId: "123",
    corsProxy: true,
    ontology: "ri.ontology.main.ontology.fake",
  })).toEqual(expectedEnvDevelopmentCorsProxy);
});

test("it generates .env.production", () => {
  expect(generateEnvProduction({
    envPrefix: "PUBLIC_",
    foundryUrl: "https://example.palantirfoundry.com",
    applicationUrl: "https://app.com",
    clientId: "123",
    ontology: "ri.ontology.main.ontology.fake",
  })).toEqual(expectedEnvProduction);
});

test("it generates .env.production without app url", () => {
  expect(generateEnvProduction({
    envPrefix: "PUBLIC_",
    foundryUrl: "https://example.palantirfoundry.com",
    applicationUrl: undefined,
    clientId: "123",
    ontology: "ri.ontology.main.ontology.fake",
  })).toEqual(expectedEnvProductionNoAppUrl);
});

test("it generates .env.production without ontology rid", () => {
  expect(generateEnvProduction({
    envPrefix: "PUBLIC_",
    foundryUrl: "https://example.palantirfoundry.com",
    applicationUrl: "https://app.com",
    clientId: "123",
    ontology: undefined,
  })).toEqual(expectedEnvProductionNoOntologyRid);
});
