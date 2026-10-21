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

export const site = {
  name: "Palantir Foundry OSDK for TypeScript",
  shortName: "Palantir Foundry OSDK",
  description:
    "Build applications on Palantir Foundry with type-safe TypeScript and React SDKs for the Ontology, Platform APIs, and AIP.",
  origin: "https://palantir.github.io",
  basePath: "/osdk-ts",
  github: {
    owner: "palantir",
    repo: "osdk-ts",
    branch: "main",
  },
};

export const siteUrl = `${site.origin}${site.basePath}`;

export const ogImage = {
  url: `${siteUrl}/og.png`,
  width: 1200,
  height: 630,
  alt: site.name,
};

export const githubUrl =
  `https://github.com/${site.github.owner}/${site.github.repo}`;

export function withBasePath(path: string): string {
  return `${site.basePath}${path}`;
}

export function markdownPath(slugs: string[]): string {
  return `/llms.mdx/${[...slugs, "content.md"].join("/")}`;
}
