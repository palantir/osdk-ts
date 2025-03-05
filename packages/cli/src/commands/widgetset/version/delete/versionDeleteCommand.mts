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

import { createInternalClientContext, widgetRegistry } from "#net";
import { consola } from "consola";
import { colorize } from "consola/utils";
import { handlePromptCancel } from "../../../../consola/handlePromptCancel.js";
import type { StemmaRepositoryRid } from "../../../../net/StemmaRepositoryRid.js";
import type { WidgetSetRid } from "../../../../net/WidgetSetRid.js";
import { loadToken } from "../../../../util/token.js";
import type { VersionDeleteArgs } from "./VersionDeleteArgs.js";

export default async function versionDeleteCommand(
  { version, yes, widgetSet, foundryUrl, token, tokenFile }: VersionDeleteArgs,
): Promise<void> {
  if (!yes) {
    const confirmed = await consola.prompt(
      `Are you sure you want to delete the version ${version}?\n${
        colorize("bold", "This action cannot be undone.")
      }`,
      { type: "confirm", cancel: "symbol" },
    );
    handlePromptCancel(confirmed);
  }

  consola.start(`Deleting version ${version}`);
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  const widgetSetRelease = await widgetRegistry.getWidgetSetRelease(
    clientCtx,
    widgetSet,
    version,
  );
  const { repositoryRid, siteVersion } = getSiteLocator(widgetSetRelease);
  await Promise.all([
    widgetRegistry.deleteWidgetSetRelease(clientCtx, widgetSet, version),
    widgetRegistry.deleteSiteVersion(clientCtx, repositoryRid, siteVersion),
  ]);
  consola.success(`Deleted version ${version}`);
}

function getSiteLocator(
  widgetSetRelease: widgetRegistry.WidgetSetRelease,
): { repositoryRid: WidgetSetRid | StemmaRepositoryRid; siteVersion: string } {
  switch (widgetSetRelease.locator.type) {
    case "internalSitesLayout":
      return {
        repositoryRid: widgetSetRelease.widgetSetRid,
        siteVersion: widgetSetRelease.locator.internalSitesLayout.version,
      };
    case "externalSitesLayout":
      return {
        repositoryRid: widgetSetRelease.locator.externalSitesLayout
          .repositoryRid as StemmaRepositoryRid,
        siteVersion: widgetSetRelease.locator.externalSitesLayout.version,
      };
    default:
      const _: never = widgetSetRelease.locator;
      throw new Error(
        `Unknown widget set locator type ${
          (widgetSetRelease.locator as any).type
        }`,
      );
  }
}
