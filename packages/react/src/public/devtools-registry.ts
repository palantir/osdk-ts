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

import type { ReactNode } from "react";

export interface DevToolsRegistry {
  wrapClient: (client: unknown) => unknown;
  wrapChildren: (children: ReactNode, client: unknown) => ReactNode;
  renderPanel: (client: unknown) => ReactNode;
  dispose?: (client: unknown) => void;
}

let registeredDevTools: DevToolsRegistry | null = null;

/**
 * Register devtools to be used by OsdkProvider2.
 * This allows @osdk/react to integrate with devtools without a direct dependency.
 */
export function registerDevTools(tools: DevToolsRegistry): void {
  registeredDevTools = tools;
}

/**
 * Get the registered devtools, if any.
 * Returns null if no devtools have been registered.
 */
export function getRegisteredDevTools(): DevToolsRegistry | null {
  return registeredDevTools;
}
