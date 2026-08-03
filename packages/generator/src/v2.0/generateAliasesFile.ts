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

import { serializeAliasesFile } from "@osdk/aliases";
import path from "node:path";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { formatTs } from "../util/test/formatTs.js";

/**
 * Emits the alias file twice:
 *
 * - `aliases.json` is the auditable artifact that a Marketplace install rewrites.
 * - `aliases.ts` carries the same content into `build/`, because the transpiler
 *   only globs `.ts` sources and a `.json` under `src/` never ships.
 */
export async function generateAliasesFile(
  { fs, outDir, aliases }: GenerateContext,
): Promise<void> {
  const json = serializeAliasesFile(aliases.build());

  await fs.writeFile(path.join(outDir, "aliases.json"), json);

  await fs.writeFile(
    path.join(outDir, "aliases.ts"),
    await formatTs(`
      import type { AliasesFile } from "@osdk/aliases";

      // An explicit annotation rather than \`satisfies\`: consumers build with
      // --isolatedDeclarations, under which \`satisfies\` is not an explicit type
      // and emits TS9010.
      export const $packagedAliases: AliasesFile = ${json.trimEnd()};
    `),
  );
}
