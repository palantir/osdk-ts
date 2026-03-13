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
  findOsdkConsumersInAncestors,
  findOsdkConsumersInDescendants,
  findOsdkConsumersInSiblings,
  hasOsdkConsumerInTree,
  type OsdkConsumerFiber,
  type OsdkHookMetadata,
} from "../fiber/HookStateInspector.js";
import type { Fiber } from "../fiber/types.js";

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
  discoverPrimitives(fiber: Fiber): DiscoveredPrimitives {
    const ancestorConsumers = findOsdkConsumersInAncestors(fiber);

    if (ancestorConsumers.length > 0) {
      return this.buildPrimitivesFromConsumers(
        ancestorConsumers,
        getComponentName(fiber),
      );
    }

    const siblingConsumers = findOsdkConsumersInSiblings(fiber);
    const descendantConsumers = findOsdkConsumersInDescendants(fiber);
    const allConsumers = this.deduplicateConsumers([
      ...siblingConsumers,
      ...descendantConsumers,
    ]);

    if (allConsumers.length === 0) {
      return this.emptyPrimitivesWithName(getComponentName(fiber));
    }

    return this.buildPrimitivesFromConsumers(
      allConsumers,
      getComponentName(fiber),
    );
  }

  private buildPrimitivesFromConsumers(
    consumers: OsdkConsumerFiber[],
    clickedComponentName: string,
  ): DiscoveredPrimitives {
    const firstConsumer = consumers[0];
    const primitives: DiscoveredPrimitives = {
      componentId: firstConsumer.sourceBasedId || "unknown",
      componentName: clickedComponentName,
      actions: [],
      objectSets: [],
      objects: [],
      links: [],
      queries: [],
      aggregations: [],
    };

    const seenSignatures = new Set<string>();
    const hookIndexCounters = new Map<string, number>();
    for (const consumer of consumers) {
      const metadata = extractOsdkMetadataFromFiber(consumer.fiber);
      for (const meta of metadata) {
        const sig = this.metadataSignature(meta);
        if (!seenSignatures.has(sig)) {
          seenSignatures.add(sig);
          const idx = hookIndexCounters.get(meta.hookType) ?? 0;
          hookIndexCounters.set(meta.hookType, idx + 1);
          this.addMetadataToPrimitives(
            primitives,
            meta,
            consumer.componentName,
            idx,
          );
        }
      }
    }

    return primitives;
  }

  private deduplicateConsumers(
    consumers: OsdkConsumerFiber[],
  ): OsdkConsumerFiber[] {
    const seen = new Set<string>();
    return consumers.filter(consumer => {
      const key = consumer.sourceBasedId
        || `${consumer.componentName}-${consumer.fiber.type?.toString() || ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  private metadataSignature(meta: OsdkHookMetadata): string {
    switch (meta.hookType) {
      case "useOsdkAction":
        return `useOsdkAction:${meta.actionName || "unknown"}`;
      case "useOsdkObjects":
        return `useOsdkObjects:${meta.objectType || "unknown"}:${
          JSON.stringify(meta.where ?? {})
        }:${JSON.stringify(meta.orderBy ?? {})}`;
      case "useOsdkObject":
        return `useOsdkObject:${meta.objectType || "unknown"}:${
          meta.primaryKey ?? ""
        }`;
      case "useLinks":
        return `useLinks:${meta.sourceObjectType || "unknown"}:${
          meta.linkName || "unknown"
        }`;
      case "useOsdkAggregation":
        return `useOsdkAggregation:${meta.objectType || "unknown"}:${
          JSON.stringify(meta.where ?? {})
        }:${JSON.stringify(meta.aggregate ?? {})}`;
      default:
        return `unknown:${JSON.stringify(meta)}`;
    }
  }

  private addMetadataToPrimitives(
    primitives: DiscoveredPrimitives,
    meta: OsdkHookMetadata,
    location: string,
    hookIndex: number,
  ): void {
    switch (meta.hookType) {
      case "useOsdkAction":
        primitives.actions.push({
          name: meta.actionName || "Unknown Action",
          signature: `action:${meta.actionName || "unknown"}`,
          location,
          hookIndex,
        });
        break;
      case "useOsdkObjects":
        primitives.objectSets.push({
          type: meta.objectType || "Unknown",
          whereClause: meta.where as Record<string, unknown> | undefined,
          orderBy: meta.orderBy as Record<string, "asc" | "desc"> | undefined,
          pageSize: meta.pageSize,
          location,
          hookIndex,
          querySignature: `useOsdkObjects:${meta.objectType || "unknown"}:${
            JSON.stringify(meta.where ?? {})
          }:${JSON.stringify(meta.orderBy ?? {})}`,
        });
        break;
      case "useOsdkObject":
        primitives.objects.push({
          type: meta.objectType || "Unknown",
          primaryKey: meta.primaryKey,
          location,
          hookIndex,
        });
        break;
      case "useLinks":
        primitives.links.push({
          sourceType: meta.sourceObjectType || "Unknown",
          linkName: meta.linkName || "Unknown",
          location,
          hookIndex,
        });
        break;
      case "useOsdkAggregation":
        primitives.aggregations.push({
          type: meta.objectType || "Unknown",
          whereClause: meta.where as Record<string, unknown> | undefined,
          aggregate: meta.aggregate as Record<string, unknown> | undefined,
          location,
          hookIndex,
          querySignature: `useOsdkAggregation:${meta.objectType || "unknown"}:${
            JSON.stringify(meta.where ?? {})
          }:${JSON.stringify(meta.aggregate ?? {})}`,
        });
        break;
    }
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
    return hasOsdkConsumerInTree(fiber);
  }

  getPrimitiveCount(fiber: Fiber): number {
    const primitives = this.discoverPrimitives(fiber);
    return (
      primitives.actions.length
      + primitives.objectSets.length
      + primitives.objects.length
      + primitives.links.length
      + primitives.aggregations.length
    );
  }
}
