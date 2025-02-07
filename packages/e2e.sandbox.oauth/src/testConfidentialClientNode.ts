/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { createConfidentialOauthClient } from "@osdk/oauth";
import consola from "consola";
import invariant from "tiny-invariant";

declare const process: {
  env: Record<string, string | undefined>;
};

export async function testConfidentialClientNode(): Promise<void> {
  const prefix = "TS_OSDK_E2E_OAUTH_CONFIDENTIAL_";
  const FOUNDRY_CLIENT_ID = process.env[`${prefix}FOUNDRY_CLIENT_ID`];
  const FOUNDRY_URL = process.env[`${prefix}FOUNDRY_URL`];
  const FOUNDRY_CLIENT_SECRET = process.env[`${prefix}FOUNDRY_CLIENT_SECRET`];

  invariant(
    FOUNDRY_CLIENT_ID != null,
    `${prefix}FOUNDRY_CLIENT_ID is required`,
  );
  invariant(
    FOUNDRY_URL != null,
    `${prefix}FOUNDRY_URL is required`,
  );
  invariant(
    FOUNDRY_CLIENT_SECRET != null,
    `${prefix}FOUNDRY_URL is required`,
  );

  const auth = createConfidentialOauthClient(
    FOUNDRY_CLIENT_ID,
    FOUNDRY_CLIENT_SECRET,
    FOUNDRY_URL,
  );

  const token = await auth();
  invariant(
    token != null && token.length > 0,
    "token should have been received",
  );
  consola.log(token);
}
