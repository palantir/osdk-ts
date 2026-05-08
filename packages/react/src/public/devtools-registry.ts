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

import type { ObservableClient } from "@osdk/client/observable";
import type { ReactNode } from "react";

export interface DevToolsRegistry {
  wrapClient: (client: ObservableClient) => ObservableClient;
  wrapChildren: (children: ReactNode, client: ObservableClient) => ReactNode;
}

const GLOBAL_KEY = "__OSDK_DEVTOOLS_REGISTRY__";

function getGlobal(): Record<string, unknown> {
  if (typeof globalThis !== "undefined") {
    return globalThis as Record<string, unknown>;
  }
  if (typeof window !== "undefined") {
    return window as unknown as Record<string, unknown>;
  }
  return {};
}

export function registerDevTools(tools: DevToolsRegistry): void {
  getGlobal()[GLOBAL_KEY] = tools;
}

export function getRegisteredDevTools(): DevToolsRegistry | null {
  return (getGlobal()[GLOBAL_KEY] as DevToolsRegistry | undefined) ?? null;
}
