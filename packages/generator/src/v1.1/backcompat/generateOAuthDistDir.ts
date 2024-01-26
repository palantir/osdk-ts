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
import type { MinimalFs } from "../../MinimalFs";
import { formatTs } from "../../util/test/formatTs";
import { generateConfidentialClientDir } from "./internal-foundry-oauth-dist/generateConfidentialClientDir";
import { generatePublicClientDir } from "./internal-foundry-oauth-dist/generatePublicClientDir";
import { generateUserTokenDir } from "./internal-foundry-oauth-dist/generateUserTokenDir";
import { reexportConsts } from "./util/reexportConsts";
import { reexportTypes } from "./util/reexportTypes";
export async function generateOAuthClientDistDir(
  outDir: string,
  fs: MinimalFs,
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
    export * from "./Auth";
    export * from "./ConfidentialClient";
    export * from "./OAuthClient";
    export * from "./PublicClient";
    export * from "./Token";
    export * from "./UserToken";
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

  await generateConfidentialClientDir(fs, oauthDistDir);
  await generatePublicClientDir(fs, oauthDistDir);
  await generateUserTokenDir(fs, oauthDistDir);
}
