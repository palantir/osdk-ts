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

import type { RenderStorm } from "../types/index.js";
import type { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";
import type { EventTimeline } from "./EventTimeline.js";

export interface RenderEvent {
  componentId: string;
  componentName: string;
  timestamp: number;
  duration: number;
  renderNumber: number;
  trigger: RenderTrigger;
  phase: "mount" | "update";
}

export interface RenderTrigger {
  type:
    | "osdk-data-change"
    | "parent-render"
    | "state-change"
    | "props-change"
    | "force-update"
    | "context-change";
  confidence: number;
  osdkDetails?: {
    subscriptionId: string;
    objectKey?: string;
    changeReason:
      | "network-fetch"
      | "optimistic-update"
      | "action-result"
      | "cache-invalidation";
  };
  parentDetails?: {
    parentComponentId: string;
    parentComponentName: string;
  };
}

export interface EmissionSnapshot {
  subscriptionId: string;
  timestamp: number;
  objectKey?: string;
  isOptimistic: boolean;
}

export interface RenderStats {
  totalRenders: number;
  avgDuration: number;
  triggerBreakdown: Record<RenderTrigger["type"], number>;
  renderStorms: number;
}

export class RenderAttributionTracker {
  private events: RenderEvent[] = [];
  private lastEmissions = new Map<string, EmissionSnapshot>();
  private componentRenderCounts = new Map<string, number>();
  private renderStormWarnings = new Set<string>();
  private maxEvents = 10000;
  private eventTimeline: EventTimeline | null = null;
  private detectedRenderStorms: RenderStorm[] = [];

  constructor(private registry: ComponentQueryRegistry) {}

  setEventTimeline(timeline: EventTimeline | null): void {
    this.eventTimeline = timeline;
  }

  recordRender(
    componentId: string,
    phase: "mount" | "update",
    actualDuration: number,
  ): void {
    const componentName = this.getComponentName(componentId);
    const renderNumber = this.incrementRenderCount(componentId);
    const timestamp = Date.now();

    const trigger = this.attributeTrigger(componentId, timestamp);

    const event: RenderEvent = {
      componentId,
      componentName,
      timestamp,
      duration: actualDuration,
      renderNumber,
      trigger,
      phase,
    };

    this.events.push(event);

    if (this.events.length > this.maxEvents) {
      this.events.shift();
    }

    if (this.eventTimeline) {
      this.eventTimeline.record({
        type: "RENDER",
        componentId,
        componentName,
        duration: actualDuration,
        timestamp,
        renderCycle: renderNumber,
      });
    }

    this.detectRenderStorm(componentId);
  }

  recordEmission(emission: EmissionSnapshot): void {
    this.lastEmissions.set(emission.subscriptionId, emission);

    setTimeout(() => {
      this.lastEmissions.delete(emission.subscriptionId);
    }, 1000);
  }

  private attributeTrigger(
    componentId: string,
    timestamp: number,
  ): RenderTrigger {
    const bindings = this.registry.getComponentBindings(componentId);

    for (const binding of bindings) {
      const subscriptionId = `${binding.hookType}:${binding.querySignature}`;
      const lastEmission = this.lastEmissions.get(subscriptionId);

      if (lastEmission && timestamp - lastEmission.timestamp < 16) {
        return {
          type: "osdk-data-change",
          confidence: 0.95,
          osdkDetails: {
            subscriptionId,
            objectKey: lastEmission.objectKey,
            changeReason: lastEmission.isOptimistic
              ? "optimistic-update"
              : "network-fetch",
          },
        };
      }
    }

    const parentRender = this.findRecentParentRender(componentId, timestamp);
    if (parentRender) {
      return {
        type: "parent-render",
        confidence: 0.8,
        parentDetails: {
          parentComponentId: parentRender.componentId,
          parentComponentName: parentRender.componentName,
        },
      };
    }

    return { type: "force-update", confidence: 0.3 };
  }

  private findRecentParentRender(
    componentId: string,
    timestamp: number,
  ): RenderEvent | null {
    const recentRenders = this.events.filter(
      (e) => e.componentId !== componentId && timestamp - e.timestamp < 5,
    );

    if (recentRenders.length > 0) {
      return recentRenders[recentRenders.length - 1];
    }

    return null;
  }

  private detectRenderStorm(componentId: string): void {
    const now = Date.now();
    const recentRenders = this.events.filter(
      (e) => e.componentId === componentId && now - e.timestamp < 1000,
    );

    if (
      recentRenders.length > 10 && !this.renderStormWarnings.has(componentId)
    ) {
      this.renderStormWarnings.add(componentId);

      const componentName = this.getComponentName(componentId);
      const windowStart = recentRenders[0].timestamp;
      const windowEnd = recentRenders[recentRenders.length - 1].timestamp;
      const triggers = recentRenders.map(r => r.trigger.type);

      // Store the render storm for reporting
      this.detectedRenderStorms.push({
        componentId,
        componentName,
        renderCount: recentRenders.length,
        duration: windowEnd - windowStart,
        windowStart,
        windowEnd,
        triggers,
      });

      // Keep only the most recent 50 render storms
      if (this.detectedRenderStorms.length > 50) {
        this.detectedRenderStorms.shift();
      }

      // eslint-disable-next-line no-console
      console.warn(
        `[RenderAttributionTracker] Render storm detected: ${componentName} rendered ${recentRenders.length} times in ${
          windowEnd - windowStart
        }ms`,
      );

      setTimeout(() => {
        this.renderStormWarnings.delete(componentId);
      }, 5000);
    }
  }

  private getComponentName(componentId: string): string {
    const bindings = this.registry.getComponentBindings(componentId);
    if (bindings.length > 0) {
      return bindings[0].componentDisplayName || bindings[0].componentName;
    }
    return componentId;
  }

  private incrementRenderCount(componentId: string): number {
    const current = this.componentRenderCounts.get(componentId) || 0;
    const next = current + 1;
    this.componentRenderCounts.set(componentId, next);
    return next;
  }

  getTimeline(componentId?: string, since?: number): RenderEvent[] {
    let filtered = this.events;

    if (componentId) {
      filtered = filtered.filter((e) => e.componentId === componentId);
    }

    if (since) {
      filtered = filtered.filter((e) => e.timestamp >= since);
    }

    return filtered.sort((a, b) => a.timestamp - b.timestamp);
  }

  getStats(componentId: string): RenderStats {
    const renders = this.events.filter((e) => e.componentId === componentId);

    const totalRenders = renders.length;
    const avgDuration = totalRenders > 0
      ? renders.reduce((sum, e) => sum + e.duration, 0) / totalRenders
      : 0;

    const triggerBreakdown: Record<RenderTrigger["type"], number> = {
      "osdk-data-change": 0,
      "parent-render": 0,
      "state-change": 0,
      "props-change": 0,
      "force-update": 0,
      "context-change": 0,
    };

    for (const event of renders) {
      triggerBreakdown[event.trigger.type]++;
    }

    const renderStormsInLast10s = this.events.filter((e) => {
      if (e.componentId !== componentId) return false;
      const recentRenders = renders.filter(
        (r) => Math.abs(r.timestamp - e.timestamp) < 1000,
      );
      return recentRenders.length > 10;
    }).length;

    return {
      totalRenders,
      avgDuration,
      triggerBreakdown,
      renderStorms: renderStormsInLast10s,
    };
  }

  getRecentRenders(limit: number = 100): RenderEvent[] {
    return this.events.slice(-limit);
  }

  clear(): void {
    this.events = [];
    this.lastEmissions.clear();
    this.componentRenderCounts.clear();
    this.renderStormWarnings.clear();
  }

  clearComponent(componentId: string): void {
    this.events = this.events.filter((e) => e.componentId !== componentId);
    this.componentRenderCounts.delete(componentId);
    this.renderStormWarnings.delete(componentId);
  }

  /**
   * Get all detected render storms.
   * Returns storms in reverse chronological order (newest first).
   */
  getRenderStorms(): RenderStorm[] {
    return [...this.detectedRenderStorms].reverse();
  }
}
