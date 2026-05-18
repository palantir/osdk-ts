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

import { getComponentName } from "../fiber/FiberInspection.js";
import {
  extractOsdkMetadataFromFiber,
  type OsdkHookMetadata,
} from "../fiber/HookStateInspector.js";
import type { Fiber } from "../fiber/types.js";
import type { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";

const MAX_ANCESTOR_WALK_DEPTH = 15;

export interface DiscoveredAction {
  name: string;
  signature: string;
  location: string;
  hookIndex: number;
}

export interface DiscoveredObjectSet {
  type: string;
  whereClause?: Record<string, unknown>;
  orderBy?: Record<string, "asc" | "desc">;
  pageSize?: number;
  location: string;
  hookIndex: number;
  querySignature: string;
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

export interface DiscoveredAggregation {
  type: string;
  whereClause?: Record<string, unknown>;
  aggregate?: Record<string, unknown>;
  location: string;
  hookIndex: number;
  querySignature: string;
}

export interface DiscoveredPrimitives {
  componentId: string;
  componentName: string;
  actions: DiscoveredAction[];
  objectSets: DiscoveredObjectSet[];
  objects: DiscoveredObject[];
  links: DiscoveredLink[];
  queries: DiscoveredQuery[];
  aggregations: DiscoveredAggregation[];
}

export class ComponentPrimitiveDiscovery {
  constructor(private registry: ComponentQueryRegistry) {}

  discoverPrimitives(fiber: Fiber): DiscoveredPrimitives {
    const componentName = getComponentName(fiber);

    // Walk up from clicked fiber to find nearest component with OSDK hooks
    let current: Fiber | null = fiber;
    let depth = 0;
    while (current && depth < MAX_ANCESTOR_WALK_DEPTH) {
      if (typeof current.type === "function") {
        const metadata = extractOsdkMetadataFromFiber(current);
        if (metadata.length > 0) {
          return this.buildPrimitivesFromMetadata(metadata, componentName);
        }
      }
      current = current.return;
      depth++;
    }

    return this.emptyPrimitivesWithName(componentName);
  }

  private buildPrimitivesFromMetadata(
    metadata: OsdkHookMetadata[],
    componentName: string,
  ): DiscoveredPrimitives {
    const primitives: DiscoveredPrimitives = {
      componentId: componentName,
      componentName,
      actions: [],
      objectSets: [],
      objects: [],
      links: [],
      queries: [],
      aggregations: [],
    };

    const hookIndexCounters = new Map<string, number>();

    for (const meta of metadata) {
      const idx = hookIndexCounters.get(meta.hookType) ?? 0;
      hookIndexCounters.set(meta.hookType, idx + 1);
      const location = componentName;

      switch (meta.hookType) {
        case "useOsdkAction": {
          primitives.actions.push({
            name: meta.actionName ?? "Unknown Action",
            signature: `action:${meta.actionName ?? "unknown"}`,
            location,
            hookIndex: idx,
          });
          break;
        }
        case "useOsdkObjects": {
          primitives.objectSets.push({
            type: meta.objectType ?? "Unknown",
            whereClause: meta.where as Record<string, unknown> | undefined,
            orderBy: meta.orderBy as
              | Record<string, "asc" | "desc">
              | undefined,
            pageSize: meta.pageSize,
            location,
            hookIndex: idx,
            querySignature: `list:${meta.objectType ?? "unknown"}`,
          });
          break;
        }
        case "useOsdkObject": {
          primitives.objects.push({
            type: meta.objectType ?? "Unknown",
            primaryKey: meta.primaryKey,
            location,
            hookIndex: idx,
          });
          break;
        }
        case "useLinks": {
          primitives.links.push({
            sourceType: meta.sourceObjectType ?? "Unknown",
            linkName: meta.linkName ?? "Unknown",
            location,
            hookIndex: idx,
          });
          break;
        }
        case "useOsdkAggregation": {
          primitives.aggregations.push({
            type: meta.objectType ?? "Unknown",
            whereClause: meta.where as Record<string, unknown> | undefined,
            aggregate: meta.aggregate as Record<string, unknown> | undefined,
            location,
            hookIndex: idx,
            querySignature: `aggregation:${meta.objectType ?? "unknown"}`,
          });
          break;
        }
        case "useOsdkFunction": {
          primitives.queries.push({
            signature: `function:${meta.objectType ?? "unknown"}`,
            hookType: meta.hookType,
            location,
            hookIndex: idx,
          });
          break;
        }
        case "useObjectSet": {
          primitives.objectSets.push({
            type: meta.objectType ?? "Unknown",
            whereClause: meta.where as Record<string, unknown> | undefined,
            orderBy: meta.orderBy as
              | Record<string, "asc" | "desc">
              | undefined,
            pageSize: meta.pageSize,
            location,
            hookIndex: idx,
            querySignature: `objectSet:${meta.objectType ?? "unknown"}`,
          });
          break;
        }
      }
    }

    return primitives;
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
      aggregations: [],
    };
  }

  hasOsdkHooks(fiber: Fiber): boolean {
    let current: Fiber | null = fiber;
    let depth = 0;
    while (current && depth < MAX_ANCESTOR_WALK_DEPTH) {
      if (typeof current.type === "function") {
        const metadata = extractOsdkMetadataFromFiber(current);
        if (metadata.length > 0) {
          return true;
        }
      }
      current = current.return;
      depth++;
    }
    return false;
  }

  getPrimitiveCount(fiber: Fiber): number {
    const primitives = this.discoverPrimitives(fiber);
    return (
      primitives.actions.length
      + primitives.objectSets.length
      + primitives.objects.length
      + primitives.links.length
      + primitives.queries.length
      + primitives.aggregations.length
    );
  }
}
