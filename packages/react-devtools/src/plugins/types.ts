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

import type { ComponentType } from "react";

import type { MonitorStore } from "../store/MonitorStore.js";

export interface DevToolsPanelProps {
  monitorStore: MonitorStore;
  theme: "light" | "dark";
  /** Switch the active devtools tab, e.g. from a cross-navigation link. */
  onNavigate?: (tabId: string) => void;
}
export type DevToolsPanelComponent = ComponentType<DevToolsPanelProps>;

export interface DevToolsPlugin {
  id: string; // stable; persistence + active-tab key, e.g. "cache"
  label: string; // tab-bar label
  icon: string; // Blueprint icon name
  panel: DevToolsPanelComponent; // mounted only while its tab is active
}
