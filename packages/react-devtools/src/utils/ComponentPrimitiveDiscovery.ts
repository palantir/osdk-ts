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

import type {
  ComponentContextCapture,
  Fiber,
} from "./ComponentContextCapture.js";
import type { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";

export interface DiscoveredAction {
  name: string;
  signature: string;
  location: string;
  hookIndex: number;
}

export interface DiscoveredObjectSet {
  type: string;
  whereClause?: unknown;
  orderBy?: unknown;
  pageSize?: number;
  location: string;
  hookIndex: number;
}

export interface DiscoveredObject {
  type: string;
  primaryKey?: string;
  location: string;
  hookIndex: number;
}

export interface DiscoveredLink {
  sourceType: string;
  linkName: string;
  location: string;
  hookIndex: number;
}

export interface DiscoveredQuery {
  signature: string;
  hookType: string;
  location: string;
  hookIndex: number;
}

export interface DiscoveredPrimitives {
  componentId: string;
  componentName: string;
  actions: DiscoveredAction[];
  objectSets: DiscoveredObjectSet[];
  objects: DiscoveredObject[];
  links: DiscoveredLink[];
  queries: DiscoveredQuery[];
}

/**
 * Discovers OSDK ontology primitives used by a component.
 *
 * This class walks the React Fiber tree and ComponentQueryRegistry to find
 * all OSDK hooks (useOsdkObject, useOsdkObjects, useOsdkAction, useLinks, etc.)
 * and extracts their configuration for mock creation.
 */
export class ComponentPrimitiveDiscovery {
  constructor(
    private componentContext: ComponentContextCapture,
    private registry: ComponentQueryRegistry,
  ) {}

  /**
   * Discover all OSDK primitives used by a component or its ancestors.
   *
   * This walks up the fiber tree from the clicked element to find any parent
   * components that have OSDK hooks registered.
   *
   * @param fiber - Fiber node from the clicked element
   * @returns All discovered primitives grouped by type
   */
  discoverPrimitives(fiber: Fiber): DiscoveredPrimitives {
    // First, try type-based discovery if this is a filter/selector component
    const typeBasedPrimitives = this.tryTypeBasedDiscovery(fiber);
    if (typeBasedPrimitives) {
      return typeBasedPrimitives;
    }

    // Fall back to tree traversal
    // Walk up the fiber tree and collect all bindings from ancestor components
    const allBindings: Array<{
      componentId: string;
      componentName: string;
      bindings: ReturnType<ComponentQueryRegistry["getComponentBindings"]>;
    }> = [];

    // Walk up the tree to find parents
    let current: Fiber | null = fiber;
    let depth = 0;
    const maxDepth = 50;

    while (current && depth < maxDepth) {
      const componentId = this.componentContext.getComponentIdForFiber(current);

      if (componentId) {
        const bindings = this.registry.getComponentBindings(componentId);

        if (bindings.length > 0) {
          allBindings.push({
            componentId,
            componentName: bindings[0].componentName,
            bindings,
          });
        }
      }

      current = current.return;
      depth++;
    }

    // If no bindings found in any ancestor, return empty
    if (allBindings.length === 0) {
      const componentName = this.getComponentNameFromFiber(fiber);
      return this.emptyPrimitivesWithName(componentName);
    }

    // Use the first component with bindings as the primary component
    const primaryComponent = allBindings[0];

    const primitives: DiscoveredPrimitives = {
      componentId: primaryComponent.componentId,
      componentName: primaryComponent.componentName,
      actions: [],
      objectSets: [],
      objects: [],
      links: [],
      queries: [],
    };

    // Extract primitives from all collected bindings
    for (const { bindings } of allBindings) {
      for (const binding of bindings) {
        this.addBindingToPrimitives(primitives, binding);
      }
    }

    return primitives;
  }

  /**
   * Try to discover primitives based on type information
   */
  private tryTypeBasedDiscovery(fiber: Fiber): DiscoveredPrimitives | null {
    // Walk up to find a filter/selector component
    let current: Fiber | null = fiber;
    let filterComponent: Fiber | null = null;

    // Keep walking up until we find a filter/selector component or reach the top
    while (current && !filterComponent) {
      if (typeof current.type === "function") {
        const name = this.getComponentNameFromFiber(current);

        if (
          name.toLowerCase().includes("filter")
          || name.toLowerCase().includes("selector")
        ) {
          filterComponent = current;
          break;
        }
      }
      current = current.return;
    }

    if (!filterComponent) {
      return null;
    }

    // Try to extract object type from props
    const objectType = this.extractObjectTypeFromComponent(filterComponent);
    if (!objectType) {
      return null;
    }

    // Find all bindings that operate on this type
    const relatedBindings = this.registry.getBindingsByObjectType(objectType);

    if (relatedBindings.length === 0) {
      return null;
    }

    // Create primitives from the related bindings
    const primitives: DiscoveredPrimitives = {
      componentId: `type-${objectType}`,
      componentName: `Components using ${objectType}`,
      actions: [],
      objectSets: [],
      objects: [],
      links: [],
      queries: [],
    };

    for (const binding of relatedBindings) {
      this.addBindingToPrimitives(primitives, binding);
    }

    return primitives;
  }

  /**
   * Extract object type from component props or context
   */
  private extractObjectTypeFromComponent(fiber: Fiber): string | null {
    // Check props for filter functions or WhereClause types
    const props = fiber.memoizedProps;
    if (!props) return null;

    // For now, we'll use a simple heuristic:
    // If it's a FilterSelector, we know it operates on TodoLike
    const componentName = this.getComponentNameFromFiber(fiber);
    if (componentName === "FilterSelector") {
      // We know from the code that FilterSelector operates on TodoLike
      return "TodoLike";
    }

    // Future: We could examine the actual prop values to determine types
    // For example, check if setFilter function is called with WhereClause<T>

    return null;
  }

  /**
   * Add a single binding to the primitives collection.
   */
  private addBindingToPrimitives(
    primitives: DiscoveredPrimitives,
    binding: ReturnType<ComponentQueryRegistry["getComponentBindings"]>[0],
  ): void {
    const location = this.formatLocation(
      binding.filePath,
      binding.lineNumber,
      binding.columnNumber,
    );

    switch (binding.hookType) {
      case "useOsdkAction": {
        if (binding.queryParams.type === "action") {
          primitives.actions.push({
            name: binding.queryParams.actionName,
            signature: binding.querySignature,
            location,
            hookIndex: binding.hookIndex,
          });
        }
        break;
      }

      case "useOsdkObjects": {
        if (binding.queryParams.type === "list") {
          primitives.objectSets.push({
            type: binding.queryParams.objectType,
            whereClause: binding.queryParams.where,
            orderBy: binding.queryParams.orderBy,
            pageSize: binding.queryParams.pageSize,
            location,
            hookIndex: binding.hookIndex,
          });
        }
        break;
      }

      case "useOsdkObject": {
        if (binding.queryParams.type === "object") {
          primitives.objects.push({
            type: binding.queryParams.objectType,
            primaryKey: binding.queryParams.primaryKey,
            location,
            hookIndex: binding.hookIndex,
          });
        }
        break;
      }

      case "useLinks": {
        if (binding.queryParams.type === "links") {
          const sourceKey = binding.queryParams.sourceObject;
          const [sourceType] = sourceKey.split(":");
          primitives.links.push({
            sourceType,
            linkName: binding.queryParams.linkName,
            location,
            hookIndex: binding.hookIndex,
          });
        }
        break;
      }

      case "useObjectSet": {
        if (binding.queryParams.type === "objectSet") {
          primitives.queries.push({
            signature: binding.querySignature,
            hookType: binding.hookType,
            location,
            hookIndex: binding.hookIndex,
          });
        }
        break;
      }
    }
  }

  /**
   * Get component name from fiber for display purposes.
   */
  private getComponentNameFromFiber(fiber: Fiber): string {
    if (typeof fiber.type === "function") {
      return fiber.type.displayName || fiber.type.name || "Anonymous";
    }
    if (typeof fiber.type === "string") {
      return fiber.type;
    }
    return "Unknown";
  }

  private emptyPrimitivesWithName(componentName: string): DiscoveredPrimitives {
    return {
      componentId: "unknown",
      componentName,
      actions: [],
      objectSets: [],
      objects: [],
      links: [],
      queries: [],
    };
  }

  private formatLocation(
    file?: string,
    line?: number,
    column?: number,
  ): string {
    if (!file) return "Unknown";

    const shortPath = file.split("/").slice(-2).join("/");

    if (line !== undefined) {
      return column !== undefined
        ? `${shortPath}:${line}:${column}`
        : `${shortPath}:${line}`;
    }

    return shortPath;
  }

  /**
   * Check if a component or its ancestors have any OSDK hooks.
   */
  hasOsdkHooks(fiber: Fiber): boolean {
    let current: Fiber | null = fiber;
    let depth = 0;
    const maxDepth = 50;

    while (current && depth < maxDepth) {
      const componentId = this.componentContext.getComponentIdForFiber(current);
      if (componentId) {
        const bindings = this.registry.getComponentBindings(componentId);
        if (bindings.length > 0) {
          return true;
        }
      }
      current = current.return;
      depth++;
    }

    return false;
  }

  /**
   * Get total count of OSDK primitives for a component and its ancestors.
   */
  getPrimitiveCount(fiber: Fiber): number {
    const primitives = this.discoverPrimitives(fiber);
    return (
      primitives.actions.length
      + primitives.objectSets.length
      + primitives.objects.length
      + primitives.links.length
      + primitives.queries.length
    );
  }
}
