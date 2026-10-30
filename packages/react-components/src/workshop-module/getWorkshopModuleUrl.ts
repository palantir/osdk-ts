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

import invariant from "tiny-invariant";

import type { ResolvedOsdkTheme } from "../theme/types.js";
import type { BaseWorkshopModuleProps } from "./WorkshopModuleApi.js";

export function getWorkshopModuleUrl({
  foundryUrl,
  moduleRid,
  moduleVersion = "published",
  branchRid,
  theme,
}: Pick<
  BaseWorkshopModuleProps,
  "foundryUrl" | "moduleRid" | "moduleVersion" | "branchRid"
> & { theme?: ResolvedOsdkTheme }): string {
  // Workshop URLs historically use "latest" for published and "dev" for latest saved.
  const version = moduleVersion === "published" ? "latest" : "dev";
  const url = new URL(
    `/workspace/module/view/${version}/${encodeURIComponent(moduleRid)}`,
    foundryUrl,
  );
  invariant(
    url.protocol === "https:" || url.protocol === "http:",
    "Foundry URL must use http or https.",
  );
  url.searchParams.set("embedded", "true");
  // An empty value clears Workshop's persisted branch; omitting it restores that branch.
  url.searchParams.set("foundry-branch-rid", branchRid ?? "");
  if (theme != null) {
    url.searchParams.set(
      "themeOverride",
      theme === "dark" ? "DARK_MODE" : "LIGHT_MODE",
    );
  }

  return url.href;
}
