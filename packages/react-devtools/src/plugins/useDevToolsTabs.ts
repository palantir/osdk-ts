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

import { useMemo, useSyncExternalStore } from "react";

import { BASE_TABS } from "./baseTabs.js";
import { getRegisteredPlugins, subscribePlugins } from "./registry.js";
import type { DevToolsPlugin } from "./types.js";

export function useDevToolsTabs(): readonly DevToolsPlugin[] {
  const plugins = useSyncExternalStore(subscribePlugins, getRegisteredPlugins);

  return useMemo(() => {
    const seen = new Set<string>();
    const deduped: DevToolsPlugin[] = [];
    for (const plugin of [...BASE_TABS, ...plugins]) {
      if (seen.has(plugin.id)) {
        continue;
      }
      seen.add(plugin.id);
      deduped.push(plugin);
    }
    return deduped;
  }, [plugins]);
}
