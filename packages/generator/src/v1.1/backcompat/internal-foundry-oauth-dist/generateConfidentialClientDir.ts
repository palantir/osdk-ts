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

import path from "node:path";
import type { MinimalFs } from "../../../MinimalFs.js";
import { formatTs } from "../../../util/test/formatTs.js";
import { reexportConsts } from "../util/reexportConsts.js";

export async function generateConfidentialClientDir(
  fs: MinimalFs,
  oauthDistDir: string,
  importExt = "",
) {
  const confidentialClientDistDir = path.join(
    oauthDistDir,
    "ConfidentialClient",
  );
  await fs.mkdir(confidentialClientDistDir, { recursive: true });

  await fs.writeFile(
    path.join(confidentialClientDistDir, "index.ts"),
    await formatTs(`
    export * from "./ConfidentialClientAuth${importExt}";
  `),
  );

  await fs.writeFile(
    path.join(confidentialClientDistDir, "ConfidentialClientAuth.ts"),
    await formatTs(
      `
        ${reexportConsts(["ConfidentialClientAuth"])}
    `,
    ),
  );
}
