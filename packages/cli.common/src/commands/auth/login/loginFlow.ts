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

import consola from "consola";
import { getRandomValues, subtle } from "node:crypto";
import { createServer } from "node:http";
import { join } from "node:path/posix";
import { exit } from "node:process";
import { parse } from "node:url";
import open from "open";
import type { LoginArgs } from "./LoginArgs.js";
import type { TokenResponse, TokenSuccessResponse } from "./token.js";
import { isTokenErrorResponse } from "./token.js";

const BROWSER_PROMPT_TIME_MS = 60 * 1000;

export async function invokeLoginFlow(
  args: LoginArgs,
): Promise<TokenSuccessResponse> {
  consola.start(`Authenticating using application id: ${args.clientId}`);
  const redirectUrl = "http://localhost:8080/auth/callback";
  const port = parse(redirectUrl).port;
  let resolve: (value: string) => void;
  const authCode: Promise<string> = new Promise((_res) => {
    resolve = _res;
  });

  const server = createServer((req, res) => {
    const query = parse(req.url!, true).query;
    res.end("Authenticated");
    resolve(query["code"] as string);
  });

  server.on("error", (e) => {
    if ((e as any).code === "EADDRINUSE") {
      consola.error(
        `Port ${port} is already in use, unable to perform authentication flow.`,
      );
      server.close();
      exit(1);
    }
  });

  server.listen(port);
  const clientId = args.clientId;
  const state = generateRandomString();
  const codeVerifier = generateRandomString();
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  const authorizeUrl = generateAuthorizeUrl(
    args.foundryUrl,
    clientId,
    state,
    redirectUrl,
    codeChallenge,
  );

  try {
    await open(authorizeUrl);
  } catch {
    consola.warn(
      `Unable to open browser, please open this url in your browser to to authenticate: ${authorizeUrl}`,
    );
  }

  // nag the user if we didn't get an auth token for a relatively long time
  const browserPrompt = setTimeout(() => {
    consola.warn(
      `Still waiting for the authentication to complete. Please open a browser to ${authorizeUrl}`,
    );
  }, BROWSER_PROMPT_TIME_MS);

  const code = await authCode;
  server.close();

  clearTimeout(browserPrompt);

  const token = await getTokenWithCodeVerifier(
    clientId,
    redirectUrl,
    code,
    args.foundryUrl,
    codeVerifier,
  );

  if (isTokenErrorResponse(token)) {
    consola.error(
      "Unable to authenticate",
      token.error,
      token.error_description,
    );
    exit(1);
  }

  consola.success(`Successfully authenticated!`);
  return token;
}

function generateRandomString(length = 128) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  let output: string[] = [];
  let array = new Uint8Array(1);
  const maxIndex = 256 - (256 % characters.length);

  while (output.length < length) {
    getRandomValues(array);
    if (array[0] < maxIndex) {
      output.push(characters[array[0] % characters.length]);
    }
  }

  return output.join("");
}
async function generateCodeChallenge(codeVerifier: string) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await subtle.digest("SHA-256", data);
  const codeChallengeMethod = "S256";
  const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\//g, "_")
    .replace(/\+/g, "-")
    .replace(/=/g, "");
  return {
    codeChallenge,
    codeChallengeMethod,
  };
}

function generateAuthorizeUrl(
  baseUrl: string,
  clientId: string,
  state: string,
  redirectUrl: string,
  codeChallenge: { codeChallenge: string; codeChallengeMethod: string },
) {
  const queryParams = new URLSearchParams();
  queryParams.append("client_id", clientId);
  queryParams.append("response_type", "code");
  queryParams.append("state", state);
  queryParams.append("redirect_uri", redirectUrl);
  queryParams.append("code_challenge", codeChallenge.codeChallenge);
  queryParams.append(
    "code_challenge_method",
    codeChallenge.codeChallengeMethod,
  );
  queryParams.append(
    "scope",
    ["offline_access", "api:read-data"].join(" "),
  );

  return join(baseUrl, "multipass", "api", "oauth2", "authorize") + `?`
    + queryParams.toString();
}

async function getTokenWithCodeVerifier(
  clientId: string,
  redirectUrl: string,
  code: string,
  baseUrl: string,
  codeVerifier: string,
): Promise<TokenResponse> {
  const body = new URLSearchParams();
  body.append("client_id", clientId);
  body.append("grant_type", "authorization_code");
  body.append("code", code);
  body.append("redirect_uri", redirectUrl);
  body.append("code_verifier", codeVerifier);

  const tokenUrl = join(baseUrl, "multipass", "api", "oauth2", "token")
    + `?state=${codeVerifier}`;
  try {
    const response = await fetch(tokenUrl, {
      body: body.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const responseText: TokenResponse = await response.json();
    return responseText;
  } catch (e) {
    throw new Error(
      `Failed to get token: ${
        (e as { cause?: any })?.cause?.toString() ?? e?.toString()
          ?? "Unknown error"
      }`,
    );
  }
}
