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

// Writes a GitHub App installation token to stdout (never log it), or nothing
// on failure so the caller can skip commenting.

// cspell:words REPONAME
import { createSign } from "node:crypto";

const { GITHUB_APP_ID, GITHUB_APP_PRIVATE_KEY, GITHUB_APP_INSTALLATION_ID } =
  process.env;

try {
  const now = Math.floor(Date.now() / 1000);
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${enc({ alg: "RS256", typ: "JWT" })}.${
    enc({ iat: now - 60, exp: now + 540, iss: GITHUB_APP_ID })
  }`;
  // Accept the raw .pem too, not just base64. CircleCI's single-line env var
  // field turns the .pem's newlines into spaces, so rebuild the PEM layout.
  const value = GITHUB_APP_PRIVATE_KEY.includes("-----BEGIN")
    ? GITHUB_APP_PRIVATE_KEY
    : Buffer.from(GITHUB_APP_PRIVATE_KEY, "base64").toString("utf8");
  const pem = /-----BEGIN ([A-Z ]*PRIVATE KEY)-----([\s\S]*?)-----END \1-----/
    .exec(value.replaceAll("\\n", "\n"));
  if (!pem) {
    throw new Error(
      `GITHUB_APP_PRIVATE_KEY (${GITHUB_APP_PRIVATE_KEY.length} chars) is not a complete .pem private key (raw or base64-encoded); check it has both the BEGIN and END lines`,
    );
  }
  const key = `-----BEGIN ${pem[1]}-----\n${
    pem[2].replace(/\s+/g, "").replace(/.{64}/g, "$&\n")
  }\n-----END ${pem[1]}-----\n`;
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
      // Limit the token to commenting on this repo's PRs, whatever else the
      // App can do.
      body: JSON.stringify({
        repositories: [process.env.CIRCLE_PROJECT_REPONAME],
        permissions: { pull_requests: "write" },
      }),
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
