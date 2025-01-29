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

import { replaceHttpIfNotLocalhost } from "@osdk/shared.net";

const httpsProtocol = "https://";
const baseContextPath = "multipass";
const authorizeRequestPath = "/api/oauth2/authorize";
const tokenRequestPath = "/api/oauth2/token";
const revokeRequestPath = "/api/oauth2/revoke_token";

export function getTokenUri(
  baseUri: string,
  contextPath: string = baseContextPath,
): string {
  return createUri(baseUri, contextPath, tokenRequestPath);
}

export function getAuthorizeUri(
  baseUri: string,
  contextPath: string = baseContextPath,
): string {
  return createUri(baseUri, contextPath, authorizeRequestPath);
}

export function getRevokeUri(
  baseUri: string,
  contextPath: string = baseContextPath,
): string {
  return createUri(baseUri, contextPath, revokeRequestPath);
}

function createUri(
  baseUri: string,
  contextPath: string,
  requestPath: string,
): string {
  const protocolRegex = /^https?:\/\//i;
  baseUri = protocolRegex.test(baseUri)
    ? replaceHttpIfNotLocalhost(baseUri)
    : `${httpsProtocol}${baseUri}`;

  const resolvedPath = `${contextPath.replace(/\/$/, "")}/${
    requestPath.replace(/^\//, "")
  }`;

  const url = new URL(
    resolvedPath,
    baseUri.endsWith("/") ? baseUri : baseUri + "/",
  );
  return url.toString();
}
