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

import { ExitProcessError } from "@osdk/cli.common";
import type { LoadedFoundryConfig } from "@osdk/foundry-config-json";
import { loadFoundryConfig } from "@osdk/foundry-config-json";

let siteConfigPromise:
  | Promise<LoadedFoundryConfig<"site"> | undefined>
  | undefined = undefined;
let widgetConfigPromise:
  | Promise<LoadedFoundryConfig<"widgetSet"> | undefined>
  | undefined = undefined;

function getConfig(
  type: "site",
): Promise<LoadedFoundryConfig<"site"> | undefined>;
function getConfig(
  type: "widgetSet",
): Promise<LoadedFoundryConfig<"widgetSet"> | undefined>;
function getConfig(
  type: "site" | "widgetSet",
): Promise<LoadedFoundryConfig<"site" | "widgetSet"> | undefined>;
function getConfig(
  type: "site" | "widgetSet",
): Promise<LoadedFoundryConfig<"site" | "widgetSet"> | undefined> {
  if (type === "site") {
    return getSiteConfig();
  } else {
    return getWidgetSetConfig();
  }
}

function getSiteConfig(): Promise<LoadedFoundryConfig<"site"> | undefined> {
  if (siteConfigPromise == null) {
    siteConfigPromise = loadFoundryConfig("site").catch((e) => {
      throw new ExitProcessError(2, e instanceof Error ? e.message : undefined);
    });
  }
  return siteConfigPromise;
}

function getWidgetSetConfig(): Promise<
  LoadedFoundryConfig<"widgetSet"> | undefined
> {
  if (widgetConfigPromise == null) {
    widgetConfigPromise = loadFoundryConfig("widgetSet").catch((e) => {
      throw new ExitProcessError(2, e instanceof Error ? e.message : undefined);
    });
  }
  return widgetConfigPromise;
}

export default getConfig;
