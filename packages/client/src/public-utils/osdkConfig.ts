/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

export function getMetaTagContent(name: string): string {
  const element = document.querySelector(`meta[name="${name}"]`);
  const val = element ? element.getAttribute("content") : null;
  if (val == null) {
    throw new Error(`Missing meta tag: ${name}`);
  }
  return val;
}

function getViteEnvVar(name: string): string {
  const val = import.meta.env[name];
  if (val == null) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return val;
}

export interface OsdkConfig {
  clientId: string;
  redirectUrl: string;
  foundryUrl: string;
  ontologyRid: string;
}

export function getOsdkConfig(ontologyRid: string): OsdkConfig {
  const isProduction = process.env.NODE_ENV === "production";
  return {
    clientId: isProduction
      ? getMetaTagContent("osdk-clientId")
      : getViteEnvVar("VITE_FOUNDRY_CLIENT_ID"),
    redirectUrl: isProduction
      ? getMetaTagContent("osdk-redirectUrl")
      : getViteEnvVar("VITE_FOUNDRY_REDIRECT_URL"),
    foundryUrl: isProduction
      ? getMetaTagContent("osdk-foundryUrl")
      : getViteEnvVar("VITE_FOUNDRY_API_URL"),
    ontologyRid: isProduction
      ? getMetaTagContent("osdk-ontologyRid")
      : ontologyRid,
  };
}
