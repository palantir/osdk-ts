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

import { createInternalClientContext, thirdPartyApplications } from "#net";
import { consola } from "consola";
import { colorize } from "consola/utils";
import { handlePromptCancel } from "../../../../consola/handlePromptCancel.js";
import { loadToken } from "../../../../util/token.js";
import type { VersionDeleteArgs } from "./VersionDeleteArgs.js";

export default async function versionDeleteCommand(
  { version, yes, application, foundryUrl, token, tokenFile }:
    VersionDeleteArgs,
): Promise<void> {
  if (!yes) {
    const confirmed = await consola.prompt(
      `Are you sure you want to delete the version ${version}?\n${
        colorize("bold", "This action cannot be undone.")
      }`,
      { type: "confirm" },
    );
    handlePromptCancel(confirmed);
  }

  consola.start(`Deleting version ${version}`);
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  await thirdPartyApplications.deleteVersion(
    clientCtx,
    application,
    version,
  );
  consola.success(
    `Deleted version ${version}`,
  );
}
