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
PUBLIC_FOUNDRY_API_URL=https://example.palantirfoundry.com
PUBLIC_FOUNDRY_REDIRECT_URL=http://localhost:8080/auth/callback
PUBLIC_FOUNDRY_CLIENT_ID=123
`.trimStart();

const expectedEnvProduction = `
PUBLIC_FOUNDRY_API_URL=https://example.palantirfoundry.com
PUBLIC_FOUNDRY_REDIRECT_URL=https://app.com/auth/callback
PUBLIC_FOUNDRY_CLIENT_ID=123
`.trimStart();

const expectedEnvProductionNoAppUrl = `
PUBLIC_FOUNDRY_API_URL=https://example.palantirfoundry.com
PUBLIC_FOUNDRY_REDIRECT_URL=<Fill in the domain at which you deploy your application>/auth/callback
PUBLIC_FOUNDRY_CLIENT_ID=123
`.trimStart();

test("it generates .env.development", () => {
  expect(generateEnvDevelopment({
    envPrefix: "PUBLIC_",
    foundryUrl: "https://example.palantirfoundry.com",
    clientId: "123",
  })).toEqual(expectedEnvDevelopment);
});

test("it generates .env.production", () => {
  expect(generateEnvProduction({
    envPrefix: "PUBLIC_",
    foundryUrl: "https://example.palantirfoundry.com",
    applicationUrl: "https://app.com",
    clientId: "123",
  })).toEqual(expectedEnvProduction);
});

test("it generates .env.production without app url", () => {
  expect(generateEnvProduction({
    envPrefix: "PUBLIC_",
    foundryUrl: "https://example.palantirfoundry.com",
    applicationUrl: undefined,
    clientId: "123",
  })).toEqual(expectedEnvProductionNoAppUrl);
});
