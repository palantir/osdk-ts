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
import { generateDeploymentConfigJson } from "./generateDeploymentConfigJson.js";

const expectedWithAppUrl = `
{
  "clientId": "example-client-id",
  "redirectUrl": "https://example.app.com/auth/callback",
  "foundryUrl": "https://example.palantirfoundry.com",
  "ontologyRid": "example-ontology-rid"
}
`.trimStart();

const expectedWithoutAppUrl = `
{
  "clientId": "example-client-id",
  "redirectUrl": "<Fill in the domain at which you deploy your application>/auth/callback",
  "foundryUrl": "https://example.palantirfoundry.com",
  "ontologyRid": "example-ontology-rid"
}
`.trimStart();

test("it generates deployment.config.json with applicationUrl", () => {
  expect(
    generateDeploymentConfigJson({
      clientId: "example-client-id",
      foundryUrl: "https://example.palantirfoundry.com",
      applicationUrl: "https://example.app.com",
      ontologyRid: "example-ontology-rid",
    }),
  ).toEqual(expectedWithAppUrl);
});

test("it generates deployment.config.json without applicationUrl", () => {
  expect(
    generateDeploymentConfigJson({
      clientId: "example-client-id",
      foundryUrl: "https://example.palantirfoundry.com",
      applicationUrl: undefined,
      ontologyRid: "example-ontology-rid",
    }),
  ).toEqual(expectedWithoutAppUrl);
});
