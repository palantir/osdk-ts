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

import * as path from "node:path";
import type { MinimalFs } from "../../MinimalFs.js";
import { formatTs } from "../../util/test/formatTs.js";
import { generateConfidentialClientDir } from "./internal-foundry-oauth-dist/generateConfidentialClientDir.js";
import { generatePublicClientDir } from "./internal-foundry-oauth-dist/generatePublicClientDir.js";
import { generateUserTokenDir } from "./internal-foundry-oauth-dist/generateUserTokenDir.js";
import { reexportConsts } from "./util/reexportConsts.js";
import { reexportTypes } from "./util/reexportTypes.js";
export async function generateOAuthClientDistDir(
  outDir: string,
  fs: MinimalFs,
  importExt = "",
) {
  const oauthDistDir = path.join(
    outDir,
    "internal",
    "@foundry",
    "oauth-client",
    "dist",
  );
  await fs.mkdir(oauthDistDir, { recursive: true });

  await fs.writeFile(
    path.join(oauthDistDir, "index.ts"),
    await formatTs(`
    export * from "./Auth${importExt}";
    export * from "./ConfidentialClient/index${importExt}";
    export * from "./OAuthClient${importExt}";
    export * from "./PublicClient/index${importExt}";
    export * from "./Token${importExt}";
    export * from "./UserToken/index${importExt}";
`),
  );

  await fs.writeFile(
    path.join(oauthDistDir, "Auth.ts"),
    await formatTs(
      reexportTypes(["Auth"]),
    ),
  );

  await fs.writeFile(
    path.join(oauthDistDir, "Token.ts"),
    await formatTs(
      reexportTypes(["Token", "TokenValue"]),
    ),
  );

  await fs.writeFile(
    path.join(oauthDistDir, "OAuthClient.ts"),
    await formatTs(
      reexportTypes([
        "AuthSubscription",
        "UnsubscribeFunction",
        "SignInResponse",
        "RefreshResponse",
        "SignOutResponse",
      ]),
    ),
  );

  await fs.writeFile(
    path.join(oauthDistDir, "OAuthToken.ts"),
    await formatTs(
      reexportConsts(["OAuthToken"]),
    ),
  );

  await fs.writeFile(
    path.join(oauthDistDir, "Auth.ts"),
    await formatTs(
      reexportTypes(["Auth"]),
    ),
  );

  await generateConfidentialClientDir(fs, oauthDistDir, importExt);
  await generatePublicClientDir(fs, oauthDistDir, importExt);
  await generateUserTokenDir(fs, oauthDistDir, importExt);
}
