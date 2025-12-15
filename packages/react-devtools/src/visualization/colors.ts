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

export const MONITOR_COLORS = {
  component: "#0066ff",
  object: "#00cc66",
  query: "#ff9900",
  action: "#cc00ff",
  link: "#0099ff",

  optimistic: "#ffaa00",
  loading: "#666666",
  error: "#ff3333",
  success: "#00cc66",

  fast: "#00cc66",
  medium: "#ff9900",
  slow: "#ff3333",

  critical: "#ff3333",
  warning: "#ff9900",
  info: "#0099ff",
} as const;

export type NodeType = "component" | "object" | "query" | "action" | "link";
export type EdgeType = "uses" | "updates" | "triggers" | "traverses";
export type StateType =
  | "optimistic"
  | "loading"
  | "error"
  | "success";
export type PerformanceLevel = "fast" | "medium" | "slow";
export type PriorityLevel = "critical" | "warning" | "info";

export function getPerformanceColor(duration: number): string {
  if (duration < 16) return MONITOR_COLORS.fast;
  if (duration < 50) return MONITOR_COLORS.medium;
  return MONITOR_COLORS.slow;
}

export function getNodeColor(type: NodeType): string {
  return MONITOR_COLORS[type];
}

export function getEdgeColor(type: EdgeType): string {
  const colors: Record<EdgeType, string> = {
    uses: "#999",
    updates: MONITOR_COLORS.success,
    triggers: "#ff6600",
    traverses: MONITOR_COLORS.link,
  };
  return colors[type];
}

export function getStateColor(state: StateType): string {
  return MONITOR_COLORS[state];
}

export function getPriorityColor(priority: PriorityLevel): string {
  return MONITOR_COLORS[priority];
}
