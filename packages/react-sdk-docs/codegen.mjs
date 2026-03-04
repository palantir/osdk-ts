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

// @ts-check

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "yaml";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const docsContent = fs.readFileSync(
  path.join(__dirname, "./src/documentation.yml"),
  "utf-8",
);

const docs = yaml.parse(docsContent);

const docsJson = JSON.stringify(docs, null, 2);

fs.mkdirSync(path.join(__dirname, "./src/generatedNoCheck"), {
  recursive: true,
});

fs.writeFileSync(
  path.join(__dirname, "./src/generatedNoCheck/docsNoComputedVariables.ts"),
  `
// THIS FILE IS GENERATED. DO NOT MODIFY.
// You probably want to modify ../documentation.yml instead.

import type { SdkSnippets } from "@osdk/docs-spec-core";
import type { OSDK_SNIPPETS_SPEC } from "@osdk/docs-spec-sdk";

export const snippets: SdkSnippets<typeof OSDK_SNIPPETS_SPEC> = ${docsJson};
  `,
);
