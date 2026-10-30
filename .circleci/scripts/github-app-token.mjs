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

// Prints a GitHub App installation token (valid for an hour), or nothing on
// failure so the caller can skip commenting. GITHUB_APP_PRIVATE_KEY is the
// .pem, either as-is or base64-encoded.

import { createSign } from "node:crypto";

const { GITHUB_APP_ID, GITHUB_APP_PRIVATE_KEY, GITHUB_APP_INSTALLATION_ID } =
  process.env;

try {
  const now = Math.floor(Date.now() / 1000);
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${enc({ alg: "RS256", typ: "JWT" })}.${
    enc({ iat: now - 60, exp: now + 540, iss: GITHUB_APP_ID })
  }`;
  // Accept the raw .pem too (with real or escaped "\n" newlines), not just base64.
  const key = GITHUB_APP_PRIVATE_KEY.includes("-----BEGIN")
    ? GITHUB_APP_PRIVATE_KEY.replaceAll("\\n", "\n")
    : Buffer.from(GITHUB_APP_PRIVATE_KEY, "base64").toString("utf8");
  const sig = createSign("RSA-SHA256").update(unsigned).sign(key, "base64url");

  const res = await fetch(
    `https://api.github.com/app/installations/${GITHUB_APP_INSTALLATION_ID}/access_tokens`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${unsigned}.${sig}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );
  const body = await res.json();
  if (!res.ok) {
    throw new Error(`${res.status}: ${body.message}`);
  }
  process.stdout.write(body.token);
} catch (e) {
  console.error(`Could not get a GitHub App token: ${e.message}`);
}
