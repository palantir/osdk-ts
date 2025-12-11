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

import type { UnusedProperty, WastedRender } from "../types/index.js";
import type { EventTimeline } from "./EventTimeline.js";

export interface PropertyAccessEvent {
  componentId: string;
  objectKey: string;
  property: string;
  timestamp: number;
  renderCycle?: number;
}

export class PropertyAccessTracker {
  private accesses: PropertyAccessEvent[] = [];
  private componentRenderCycles = new Map<string, number>();
  private wrappedObjects = new WeakMap<object, string>();
  private maxAccesses = 10000;
  private eventTimeline: EventTimeline | null = null;
  private componentNames = new Map<string, string>();
  private componentRenders = new Map<string, number>();
  private componentAccessesPerRender = new Map<string, Set<number>>();

  wrapObject<T extends object>(
    obj: T,
    objectKey: string,
    componentId: string,
  ): T {
    if (this.wrappedObjects.has(obj)) {
      return obj;
    }

    const renderCycle = this.componentRenderCycles.get(componentId) || 0;

    const proxy = new Proxy(obj, {
      get: (target, prop: string | symbol, receiver) => {
        // Only track string properties that are not OSDK internal properties
        if (typeof prop === "string" && !prop.startsWith("$")) {
          this.recordAccess({
            componentId,
            objectKey,
            property: prop,
            timestamp: Date.now(),
            renderCycle,
          });
        }

        // Use Reflect.get to properly handle getters and symbol properties
        const value = Reflect.get(target, prop, receiver);

        // JavaScript proxies have strict invariants: if a property on the target is
        // non-configurable, the proxy's get trap MUST return the exact same value as
        // the target. OSDK objects often have non-configurable properties (like geo
        // fields such as `location`), so we need to skip wrapping those to avoid
        // "proxy invariant violation" errors at runtime.
        if (typeof prop === "string") {
          const descriptor = Object.getOwnPropertyDescriptor(target, prop);
          if (descriptor && !descriptor.configurable) {
            return value;
          }
        }

        // Only wrap plain objects, not functions, arrays, or primitives
        if (
          value
          && typeof value === "object"
          && !Array.isArray(value)
          && typeof prop === "string"
          && !prop.startsWith("$")
        ) {
          return this.wrapObject(
            value,
            `${objectKey}.${prop}`,
            componentId,
          );
        }

        return value;
      },
    });

    this.wrappedObjects.set(proxy, objectKey);
    return proxy;
  }

  recordAccess(event: PropertyAccessEvent): void {
    this.accesses.push(event);

    if (this.accesses.length > this.maxAccesses) {
      this.accesses.shift();
    }

    // Also record to EventTimeline if available
    if (this.eventTimeline) {
      this.eventTimeline.record({
        type: "PROPERTY_ACCESS",
        componentId: event.componentId,
        objectKey: event.objectKey,
        property: event.property,
        timestamp: event.timestamp,
        renderCycle: event.renderCycle,
      });
    }
  }

  /**
   * Set the EventTimeline to record events to.
   * This allows PropertyAccessTracker events to be included in the central timeline.
   */
  setEventTimeline(timeline: EventTimeline | null): void {
    this.eventTimeline = timeline;
  }

  incrementRenderCycle(componentId: string): void {
    const current = this.componentRenderCycles.get(componentId) || 0;
    this.componentRenderCycles.set(componentId, current + 1);

    // Track total renders for this component
    const renders = this.componentRenders.get(componentId) || 0;
    this.componentRenders.set(componentId, renders + 1);
  }

  /**
   * Register a component name for tracking.
   * This should be called when a component mounts or is first detected.
   */
  registerComponent(componentId: string, componentName: string): void {
    this.componentNames.set(componentId, componentName);
  }

  getAccessedProperties(
    componentId: string,
    objectKey: string,
  ): Set<string> {
    const properties = new Set<string>();

    for (const access of this.accesses) {
      if (
        access.componentId === componentId
        && access.objectKey === objectKey
      ) {
        properties.add(access.property);
      }
    }

    return properties;
  }

  getUnusedPropertiesForObject(
    componentId: string,
    objectKey: string,
    availableProperties: string[],
  ): string[] {
    const accessed = this.getAccessedProperties(componentId, objectKey);
    return availableProperties.filter((prop) => !accessed.has(prop));
  }

  findWastedRenders(componentId: string): Array<{
    objectKey: string;
    accessedProperties: Set<string>;
    renderCycles: Set<number>;
    wastedRenders: number;
  }> {
    const objectAccesses = new Map<
      string,
      {
        accessedProperties: Set<string>;
        renderCycles: Set<number>;
      }
    >();

    for (const access of this.accesses) {
      if (access.componentId === componentId && access.renderCycle != null) {
        const key = access.objectKey;
        if (!objectAccesses.has(key)) {
          objectAccesses.set(key, {
            accessedProperties: new Set(),
            renderCycles: new Set(),
          });
        }

        const data = objectAccesses.get(key)!;
        data.accessedProperties.add(access.property);
        data.renderCycles.add(access.renderCycle);
      }
    }

    return Array.from(objectAccesses.entries()).map(([objectKey, data]) => {
      const totalRenders = data.renderCycles.size;
      const propertiesAccessed = data.accessedProperties.size;
      const wastedRenders = Math.max(
        0,
        totalRenders - propertiesAccessed,
      );

      return {
        objectKey,
        accessedProperties: data.accessedProperties,
        renderCycles: data.renderCycles,
        wastedRenders,
      };
    });
  }

  getRecentAccesses(limit: number = 100): PropertyAccessEvent[] {
    return this.accesses.slice(-limit);
  }

  getAccessesByComponent(componentId: string): PropertyAccessEvent[] {
    return this.accesses.filter((a) => a.componentId === componentId);
  }

  getAccessesByObject(objectKey: string): PropertyAccessEvent[] {
    return this.accesses.filter((a) => a.objectKey === objectKey);
  }

  getAccessFrequency(
    componentId: string,
    objectKey: string,
  ): Map<string, number> {
    const frequency = new Map<string, number>();

    for (const access of this.accesses) {
      if (
        access.componentId === componentId
        && access.objectKey === objectKey
      ) {
        frequency.set(
          access.property,
          (frequency.get(access.property) || 0) + 1,
        );
      }
    }

    return frequency;
  }

  clear(): void {
    this.accesses = [];
    this.componentRenderCycles.clear();
  }

  clearComponent(componentId: string): void {
    this.accesses = this.accesses.filter(
      (a) => a.componentId !== componentId,
    );
    this.componentRenderCycles.delete(componentId);
  }

  getStats(): {
    totalAccesses: number;
    uniqueComponents: number;
    uniqueObjects: number;
    uniqueProperties: number;
    mostAccessedProperties: Array<[string, number]>;
    trackedComponents: number;
  } {
    const componentCounts = new Map<string, number>();
    const objectCounts = new Map<string, number>();
    const propertyCounts = new Map<string, number>();

    for (const access of this.accesses) {
      componentCounts.set(
        access.componentId,
        (componentCounts.get(access.componentId) || 0) + 1,
      );
      objectCounts.set(
        access.objectKey,
        (objectCounts.get(access.objectKey) || 0) + 1,
      );
      propertyCounts.set(
        access.property,
        (propertyCounts.get(access.property) || 0) + 1,
      );
    }

    return {
      totalAccesses: this.accesses.length,
      uniqueComponents: componentCounts.size,
      uniqueObjects: objectCounts.size,
      uniqueProperties: propertyCounts.size,
      mostAccessedProperties: Array.from(propertyCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10),
      trackedComponents: this.componentRenderCycles.size,
    };
  }

  /**
   * Get wasted renders for all components.
   * A wasted render is a render cycle where no properties were accessed.
   * Returns an array of components with wasted renders.
   */
  getWastedRenders(): WastedRender[] {
    const wastedRenders: WastedRender[] = [];

    // Track renders with property access per component
    const componentRenderAccess = new Map<string, Set<number>>();

    for (const access of this.accesses) {
      if (access.renderCycle != null) {
        if (!componentRenderAccess.has(access.componentId)) {
          componentRenderAccess.set(access.componentId, new Set());
        }
        componentRenderAccess.get(access.componentId)!.add(access.renderCycle);
      }
    }

    // Check each component's renders
    for (const [componentId, totalRenders] of this.componentRenders) {
      const rendersWithAccess = componentRenderAccess.get(componentId)?.size
        || 0;
      const wastedCount = totalRenders - rendersWithAccess;

      if (wastedCount > 0 && totalRenders > 5) {
        wastedRenders.push({
          componentId,
          componentName: this.componentNames.get(componentId) || componentId,
          count: wastedCount,
          timestamp: Date.now(),
        });
      }
    }

    return wastedRenders;
  }

  /**
   * Get unused properties for all components.
   * An unused property is one that was loaded but never accessed.
   * This requires tracking what properties are available, which we estimate
   * from the object keys being wrapped.
   */
  getUnusedProperties(): UnusedProperty[] {
    const unused: UnusedProperty[] = [];

    // Track accessed properties per component
    const componentPropertyAccess = new Map<string, Map<string, number>>();

    for (const access of this.accesses) {
      const key = access.componentId;
      if (!componentPropertyAccess.has(key)) {
        componentPropertyAccess.set(key, new Map());
      }
      const propMap = componentPropertyAccess.get(key)!;
      propMap.set(access.property, (propMap.get(access.property) || 0) + 1);
    }

    // Check for properties that were never accessed
    for (const [componentId, propMap] of componentPropertyAccess) {
      const totalRenders = this.componentRenders.get(componentId) || 0;

      if (totalRenders > 5) {
        // Only check components with multiple renders
        for (const [property, accessCount] of propMap) {
          if (accessCount === 0) {
            unused.push({
              componentId,
              componentName: this.componentNames.get(componentId)
                || componentId,
              propertyName: property,
              totalRenders,
              accessCount,
            });
          }
        }
      }
    }

    return unused;
  }
}
