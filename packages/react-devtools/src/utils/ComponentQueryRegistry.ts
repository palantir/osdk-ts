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

import type { Fiber } from "./ComponentContextCapture.js";
import { sourceMapResolver } from "./SourceMapResolver.js";

export interface ComponentHookBinding {
  componentId: string;
  componentName: string;
  componentDisplayName?: string;

  hookType:
    | "useOsdkObject"
    | "useOsdkObjects"
    | "useOsdkAction"
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
  originalFilePath?: string;
  originalLineNumber?: number;

  mountedAt: number;
  unmountedAt?: number;
  renderCount: number;

  lastRenderDuration: number;
  avgRenderDuration: number;

  fiberNode?: WeakRef<Fiber>;
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
  | { type: "objectSet"; baseObjectSet: string; operations: unknown[] };

export interface ComponentTreeNode {
  componentId: string;
  componentName: string;
  children: ComponentTreeNode[];
  hookCount: number;
  totalHookCount: number;
}

export class ComponentQueryRegistry {
  private bindings = new Map<string, ComponentHookBinding>();
  private componentToBindings = new Map<string, Set<string>>();
  private queryToBindings = new Map<string, Set<string>>();
  private subscriptionToBinding = new Map<string, string>();

  private componentTree: ComponentTreeNode | null = null;
  private bindingIdCounter = 0;

  registerBinding(options: {
    componentId: string;
    componentName: string;
    componentDisplayName?: string;
    hookType: ComponentHookBinding["hookType"];
    hookIndex: number;
    querySignature: string;
    queryParams: QueryParams;
    subscriptionId?: string;
    fiberNode?: WeakRef<Fiber>;
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

    if (location.file && location.line) {
      sourceMapResolver
        .resolveOriginalLocation(location.file, location.line, location.column)
        .then((resolved) => {
          if (resolved.filePath !== location.file) {
            binding.originalFilePath = resolved.filePath;
            binding.originalLineNumber = resolved.line;
          }
        })
        .catch(() => {});
    }

    this.bindings.set(bindingId, binding);

    if (!this.componentToBindings.has(options.componentId)) {
      this.componentToBindings.set(options.componentId, new Set());
    }
    this.componentToBindings.get(options.componentId)!.add(bindingId);

    if (!this.queryToBindings.has(options.querySignature)) {
      this.queryToBindings.set(options.querySignature, new Set());
    }
    this.queryToBindings.get(options.querySignature)!.add(bindingId);

    if (options.subscriptionId) {
      this.subscriptionToBinding.set(options.subscriptionId, bindingId);
    }

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
    if (!bindingIds) return;

    const now = Date.now();
    for (const bindingId of bindingIds) {
      const binding = this.bindings.get(bindingId);
      if (binding) {
        binding.unmountedAt = now;
      }
    }
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

  getBindingsByObjectType(objectType: string): ComponentHookBinding[] {
    const results: ComponentHookBinding[] = [];

    // Search through existing bindings
    for (const binding of this.bindings.values()) {
      if (!binding.unmountedAt) {
        // Check for list queries (useOsdkObjects)
        if (
          binding.queryParams.type === "list"
          && binding.queryParams.objectType === objectType
        ) {
          results.push(binding);
        } // Check for single object queries (useOsdkObject)
        else if (
          binding.queryParams.type === "object"
          && binding.queryParams.objectType === objectType
        ) {
          results.push(binding);
        } // Include all actions - they may operate on this object type
        else if (binding.queryParams.type === "action") {
          results.push(binding);
        }
      }
    }

    return results;
  }

  private parseStackTrace(
    stack: string,
  ): { file?: string; line?: number; column?: number } {
    const lines = stack.split("\n");

    for (let i = 3; i < Math.min(lines.length, 10); i++) {
      const line = lines[i];

      const chromeMatch = line.match(/\((.*?):(\d+):(\d+)\)/);
      if (chromeMatch) {
        return {
          file: chromeMatch[1],
          line: parseInt(chromeMatch[2], 10),
          column: parseInt(chromeMatch[3], 10),
        };
      }

      const firefoxMatch = line.match(/@(.*?):(\d+):(\d+)/);
      if (firefoxMatch) {
        return {
          file: firefoxMatch[1],
          line: parseInt(firefoxMatch[2], 10),
          column: parseInt(firefoxMatch[3], 10),
        };
      }
    }

    return {};
  }

  buildComponentTree(rootFiber: Fiber): ComponentTreeNode {
    const tree = this.buildTreeRecursive(rootFiber);
    this.componentTree = tree;
    return tree;
  }

  private buildTreeRecursive(fiber: Fiber): ComponentTreeNode {
    const componentId = this.getFiberId(fiber);
    const componentName = this.getFiberName(fiber);
    const hookCount = this.componentToBindings.get(componentId)?.size || 0;

    const children: ComponentTreeNode[] = [];
    let child = fiber.child;
    while (child) {
      if (typeof child.type === "function") {
        children.push(this.buildTreeRecursive(child));
      }
      child = child.sibling;
    }

    const totalHookCount = hookCount
      + children.reduce((sum, c) => sum + c.totalHookCount, 0);

    return {
      componentId,
      componentName,
      children,
      hookCount,
      totalHookCount,
    };
  }

  private getFiberId(fiber: Fiber): string {
    return fiber._debugID?.toString() || `fiber-${Math.random()}`;
  }

  private getFiberName(fiber: Fiber): string {
    if (typeof fiber.type === "function") {
      return fiber.type.displayName || fiber.type.name || "Anonymous";
    }
    if (typeof fiber.type === "string") {
      return fiber.type;
    }
    return "Unknown";
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
    this.componentTree = null;
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
      activeBindings: activeBindings,
      unmountedBindings: unmountedBindings,
      components: this.componentToBindings.size,
      queries: this.queryToBindings.size,
    };
  }

  /**
   * Get all bindings (including unmounted ones).
   * Used by the Query Status tab to analyze all queries.
   */
  getAllBindings(): ComponentHookBinding[] {
    return Array.from(this.bindings.values());
  }

  /**
   * Find the parent component of a given component.
   * Uses fiber tree traversal.
   */
  findParentComponent(
    componentId: string,
  ): { name: string; fiber: Fiber } | null {
    const binding = this.getComponentBindings(componentId)[0];
    if (!binding?.fiberNode) return null;

    const fiberRef = binding.fiberNode;
    const fiber = fiberRef.deref();
    if (!fiber) return null;

    let parent = fiber.return;
    while (parent) {
      if (
        parent.type && typeof parent.type === "function" && parent.type.name
      ) {
        return {
          name: this.getFiberName(parent),
          fiber: parent,
        };
      }
      parent = parent.return;
    }

    return null;
  }

  /**
   * Find all ancestors of a component (up the tree).
   */
  findAncestors(componentId: string): Array<{ name: string; fiber: Fiber }> {
    const ancestors: Array<{ name: string; fiber: Fiber }> = [];

    const binding = this.getComponentBindings(componentId)[0];
    if (!binding?.fiberNode) return ancestors;

    const fiberRef = binding.fiberNode;
    let current: Fiber | null | undefined = fiberRef.deref();
    while (current) {
      if (current.type && typeof current.type === "function") {
        ancestors.push({
          name: this.getFiberName(current),
          fiber: current,
        });
      }
      current = current.return;
    }

    return ancestors;
  }

  /**
   * Find the common ancestor of multiple components.
   */
  findCommonAncestor(
    componentIds: string[],
  ): { name: string; fiber: Fiber } | null {
    if (componentIds.length === 0) return null;

    // Get fiber nodes for all components
    const fibers: Fiber[] = componentIds
      .map(id => this.getComponentBindings(id)[0]?.fiberNode?.deref())
      .filter((fiber): fiber is Fiber => fiber != null);

    if (fibers.length === 0) return null;

    // Build ancestor chains for each component
    const ancestorChains: Fiber[][] = fibers.map(fiber => {
      const chain: Fiber[] = [];
      let current: Fiber | null | undefined = fiber;
      while (current) {
        chain.push(current);
        current = current.return;
      }
      return chain;
    });

    if (ancestorChains.length === 0) return null;

    // Find first common ancestor using Set for O(1) lookups
    const [firstChain, ...restChains] = ancestorChains;
    const ancestorSets = restChains.map(chain => new Set(chain));

    for (const ancestor of firstChain) {
      if (ancestorSets.every(set => set.has(ancestor))) {
        return {
          name: this.getFiberName(ancestor),
          fiber: ancestor,
        };
      }
    }

    return null;
  }
}
