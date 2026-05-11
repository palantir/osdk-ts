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

import type { DiscoveredComponent } from "../fiber/HookStateInspector.js";

export interface ComponentHookBinding {
  componentId: string;
  componentName: string;
  componentDisplayName?: string;

  hookType:
    | "useOsdkObject"
    | "useOsdkObjects"
    | "useOsdkAction"
    | "useOsdkAggregation"
    | "useLinks"
    | "useObjectSet";
  hookIndex: number;

  subscriptionId: string;
  querySignature: string;
  queryParams: QueryParams;

  stackTrace: string;
  filePath?: string;
  lineNumber?: number;
  columnNumber?: number;
  mountedAt: number;
  unmountedAt?: number;
  renderCount: number;

  lastRenderDuration: number;
  avgRenderDuration: number;
}

export type QueryParams =
  | { type: "object"; objectType: string; primaryKey: string }
  | {
    type: "list";
    objectType: string;
    where?: unknown;
    orderBy?: unknown;
    pageSize?: number;
  }
  | { type: "action"; actionName: string }
  | { type: "links"; sourceObject: string; linkName: string }
  | { type: "objectSet"; baseObjectSet: string; operations: unknown[] }
  | {
    type: "aggregation";
    objectType: string;
    where?: unknown;
    aggregate?: unknown;
  };

const INTERNAL_FRAME_PATTERNS = [
  /node_modules/,
  /@osdk\/react/,
  /react-devtools/,
  /ComponentContextCapture/,
  /ObservableClientMonitor/,
  /ComponentQueryRegistry/,
  /packages\/react\/build/,
  /packages\/react\/esm/,
  /packages\/react\/src/,
];

const CHROME_STACK_RE = /\((.*?):(\d+):(\d+)\)/;
const FIREFOX_STACK_RE = /@(.*?):(\d+):(\d+)/;

function isInternalFrame(filePath: string): boolean {
  for (const pattern of INTERNAL_FRAME_PATTERNS) {
    if (pattern.test(filePath)) {
      return true;
    }
  }
  return false;
}

export class ComponentQueryRegistry {
  private bindings = new Map<string, ComponentHookBinding>();
  private componentToBindings = new Map<string, Set<string>>();
  private queryToBindings = new Map<string, Set<string>>();
  private subscriptionToBinding = new Map<string, string>();

  private bindingIdCounter = 0;
  private changeVersion = 0;
  private changeListeners = new Set<() => void>();

  getVersion(): number {
    return this.changeVersion;
  }

  subscribe(listener: () => void): () => void {
    this.changeListeners.add(listener);
    return () => this.changeListeners.delete(listener);
  }

  private notifyChange(): void {
    this.changeVersion++;
    for (const listener of this.changeListeners) {
      listener();
    }
  }

  registerBinding(options: {
    componentId: string;
    componentName: string;
    componentDisplayName?: string;
    hookType: ComponentHookBinding["hookType"];
    hookIndex: number;
    querySignature: string;
    queryParams: QueryParams;
    subscriptionId?: string;
  }): string {
    const existingBindings = this.componentToBindings.get(options.componentId);
    if (existingBindings) {
      for (const existingId of existingBindings) {
        const existing = this.bindings.get(existingId);
        if (
          existing
          && existing.hookType === options.hookType
          && existing.querySignature === options.querySignature
          && !existing.unmountedAt
        ) {
          return existingId;
        }
      }
    }

    const bindingId = `binding-${this.bindingIdCounter++}`;

    const stack = new Error().stack || "";
    const location = this.parseStackTrace(stack);

    const binding: ComponentHookBinding = {
      ...options,
      subscriptionId: options.subscriptionId || "",
      stackTrace: stack,
      filePath: location.file,
      lineNumber: location.line,
      columnNumber: location.column,
      mountedAt: Date.now(),
      renderCount: 0,
      lastRenderDuration: 0,
      avgRenderDuration: 0,
    };

    this.bindings.set(bindingId, binding);

    if (!this.componentToBindings.has(options.componentId)) {
      this.componentToBindings.set(options.componentId, new Set());
    }
    const componentBindings = this.componentToBindings.get(options.componentId);
    if (componentBindings) {
      componentBindings.add(bindingId);
    }

    if (!this.queryToBindings.has(options.querySignature)) {
      this.queryToBindings.set(options.querySignature, new Set());
    }
    const queryBindings = this.queryToBindings.get(options.querySignature);
    if (queryBindings) {
      queryBindings.add(bindingId);
    }

    if (options.subscriptionId) {
      this.subscriptionToBinding.set(options.subscriptionId, bindingId);
    }

    this.notifyChange();
    return bindingId;
  }

  linkSubscription(bindingId: string, subscriptionId: string): void {
    const binding = this.bindings.get(bindingId);
    if (!binding) return;

    binding.subscriptionId = subscriptionId;
    this.subscriptionToBinding.set(subscriptionId, bindingId);
  }

  unregisterComponent(componentId: string): void {
    const bindingIds = this.componentToBindings.get(componentId);
    if (!bindingIds) {
      return;
    }

    const now = Date.now();
    for (const bindingId of bindingIds) {
      const binding = this.bindings.get(bindingId);
      if (binding) {
        binding.unmountedAt = now;
      }
    }
    this.notifyChange();
  }

  recordRender(componentId: string, duration: number): void {
    const bindingIds = this.componentToBindings.get(componentId);
    if (!bindingIds) return;

    for (const bindingId of bindingIds) {
      const binding = this.bindings.get(bindingId);
      if (binding && !binding.unmountedAt) {
        binding.renderCount++;
        binding.lastRenderDuration = duration;
        binding.avgRenderDuration =
          (binding.avgRenderDuration * (binding.renderCount - 1) + duration)
          / binding.renderCount;
      }
    }
  }

  getComponentBindings(componentId: string): ComponentHookBinding[] {
    const bindingIds = this.componentToBindings.get(componentId);
    if (!bindingIds) return [];

    return Array.from(bindingIds)
      .map((id) => this.bindings.get(id))
      .filter((b): b is ComponentHookBinding => b !== undefined);
  }

  getQuerySubscribers(querySignature: string): ComponentHookBinding[] {
    const bindingIds = this.queryToBindings.get(querySignature);
    if (!bindingIds) return [];

    return Array.from(bindingIds)
      .map((id) => this.bindings.get(id))
      .filter((b): b is ComponentHookBinding => b !== undefined)
      .filter((b) => !b.unmountedAt);
  }

  getBindingBySubscription(
    subscriptionId: string,
  ): ComponentHookBinding | undefined {
    const bindingId = this.subscriptionToBinding.get(subscriptionId);
    return bindingId ? this.bindings.get(bindingId) : undefined;
  }

  getActiveComponents(): Map<string, ComponentHookBinding[]> {
    const result = new Map<string, ComponentHookBinding[]>();

    for (const [componentId, bindingIds] of this.componentToBindings) {
      const bindings = Array.from(bindingIds)
        .map((id) => this.bindings.get(id))
        .filter(
          (b): b is ComponentHookBinding => b !== undefined && !b.unmountedAt,
        );

      if (bindings.length > 0) {
        result.set(componentId, bindings);
      }
    }

    return result;
  }

  private parseStackTrace(
    stack: string,
  ): { file?: string; line?: number; column?: number } {
    const lines = stack.split("\n");

    for (let i = 3; i < Math.min(lines.length, 25); i++) {
      const line = lines[i];

      const chromeMatch = line.match(CHROME_STACK_RE);
      if (chromeMatch) {
        const filePath = chromeMatch[1];
        if (!isInternalFrame(filePath)) {
          return {
            file: filePath,
            line: parseInt(chromeMatch[2], 10),
            column: parseInt(chromeMatch[3], 10),
          };
        }
        continue;
      }

      const firefoxMatch = line.match(FIREFOX_STACK_RE);
      if (firefoxMatch) {
        const filePath = firefoxMatch[1];
        if (!isInternalFrame(filePath)) {
          return {
            file: filePath,
            line: parseInt(firefoxMatch[2], 10),
            column: parseInt(firefoxMatch[3], 10),
          };
        }
        continue;
      }
    }

    return {};
  }

  updateFromFiberDiscovery(
    discovered: Map<string, DiscoveredComponent>,
  ): void {
    const seenComponentIds = new Set<string>();

    for (const [componentId, component] of discovered) {
      seenComponentIds.add(componentId);

      const existingBindingIds = this.componentToBindings.get(componentId);

      if (existingBindingIds && existingBindingIds.size > 0) {
        for (const bindingId of existingBindingIds) {
          const binding = this.bindings.get(bindingId);
          if (binding && !binding.unmountedAt) {
            binding.componentName = component.componentName;
          }
        }
      } else {
        for (const hookMeta of component.hooks) {
          const querySignature = this.buildQuerySignature(hookMeta);
          const hookType = this.mapHookType(hookMeta.hookType);
          const queryParams = this.buildQueryParams(hookMeta);

          this.registerBinding({
            componentId,
            componentName: component.componentName,
            hookType,
            hookIndex: 0,
            querySignature,
            queryParams,
          });
        }
      }
    }

    const now = Date.now();
    for (const [componentId, bindingIds] of this.componentToBindings) {
      if (!seenComponentIds.has(componentId)) {
        for (const bindingId of bindingIds) {
          const binding = this.bindings.get(bindingId);
          if (binding && !binding.unmountedAt) {
            binding.unmountedAt = now;
          }
        }
      }
    }
  }

  private buildQuerySignature(
    hookMeta: DiscoveredComponent["hooks"][0],
  ): string {
    switch (hookMeta.hookType) {
      case "useOsdkObject":
        return `object:${hookMeta.objectType}:${hookMeta.primaryKey}`;
      case "useOsdkObjects":
        return `useOsdkObjects:${hookMeta.objectType}:${
          JSON.stringify(hookMeta.where)
        }:${JSON.stringify(hookMeta.orderBy)}`;
      case "useOsdkAction":
        return `action:${hookMeta.actionName}`;
      case "useLinks":
        return `links:${hookMeta.sourceObjectType || "unknown"}:${
          hookMeta.linkName || "unknown"
        }`;
      case "useOsdkAggregation":
        return `aggregation:${hookMeta.objectType}:${
          JSON.stringify(hookMeta.aggregate)
        }`;
      default:
        return `unknown:${JSON.stringify(hookMeta)}`;
    }
  }

  private mapHookType(
    hookType: DiscoveredComponent["hooks"][0]["hookType"],
  ): ComponentHookBinding["hookType"] {
    switch (hookType) {
      case "useOsdkObject":
        return "useOsdkObject";
      case "useOsdkObjects":
        return "useOsdkObjects";
      case "useOsdkAction":
        return "useOsdkAction";
      case "useLinks":
        return "useLinks";
      case "useOsdkAggregation":
        return "useOsdkAggregation";
      default:
        return "useOsdkObject";
    }
  }

  private buildQueryParams(
    hookMeta: DiscoveredComponent["hooks"][0],
  ): QueryParams {
    switch (hookMeta.hookType) {
      case "useOsdkObject":
        return {
          type: "object",
          objectType: hookMeta.objectType || "Unknown",
          primaryKey: hookMeta.primaryKey || "",
        };
      case "useOsdkObjects":
        return {
          type: "list",
          objectType: hookMeta.objectType || "Unknown",
          where: hookMeta.where,
          orderBy: hookMeta.orderBy,
          pageSize: hookMeta.pageSize,
        };
      case "useOsdkAction":
        return {
          type: "action",
          actionName: hookMeta.actionName || "Unknown",
        };
      case "useLinks":
        return {
          type: "links",
          sourceObject: hookMeta.sourceObjectType || "Unknown",
          linkName: hookMeta.linkName || "Unknown",
        };
      case "useOsdkAggregation":
        return {
          type: "aggregation",
          objectType: hookMeta.objectType || "Unknown",
          where: hookMeta.where,
          aggregate: hookMeta.aggregate,
        };
      default:
        return {
          type: "object",
          objectType: "Unknown",
          primaryKey: "",
        };
    }
  }

  cleanupOldBindings(maxAgeMs: number = 5 * 60 * 1000): number {
    const now = Date.now();
    let cleanedCount = 0;

    for (const [bindingId, binding] of this.bindings.entries()) {
      if (
        binding.unmountedAt
        && now - binding.unmountedAt > maxAgeMs
      ) {
        this.bindings.delete(bindingId);

        this.componentToBindings.get(binding.componentId)?.delete(bindingId);
        this.queryToBindings.get(binding.querySignature)?.delete(bindingId);
        if (binding.subscriptionId) {
          this.subscriptionToBinding.delete(binding.subscriptionId);
        }

        cleanedCount++;
      }
    }

    return cleanedCount;
  }

  clear(): void {
    this.bindings.clear();
    this.componentToBindings.clear();
    this.queryToBindings.clear();
    this.subscriptionToBinding.clear();
  }

  getStats(): {
    totalBindings: number;
    activeBindings: number;
    unmountedBindings: number;
    components: number;
    queries: number;
  } {
    let activeBindings = 0;
    let unmountedBindings = 0;

    for (const binding of this.bindings.values()) {
      if (binding.unmountedAt) {
        unmountedBindings++;
      } else {
        activeBindings++;
      }
    }

    return {
      totalBindings: this.bindings.size,
      activeBindings,
      unmountedBindings,
      components: this.componentToBindings.size,
      queries: this.queryToBindings.size,
    };
  }

  getAllBindings(): ComponentHookBinding[] {
    return Array.from(this.bindings.values());
  }
}
