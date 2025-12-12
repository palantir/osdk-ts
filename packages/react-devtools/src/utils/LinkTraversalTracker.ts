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

import type { EventTimeline } from "./EventTimeline.js";

export interface LinkTraversalEvent {
  sourceObjectType: string;
  sourceObjectKey: string;
  linkName: string;
  timestamp: number;
  componentId?: string;
  subscriptionId: string;
}

export interface LinkedObjectsEvent {
  subscriptionId: string;
  linkName: string;
  objects: Array<{ objectType: string; primaryKey: string }>;
}

export class LinkTraversalTracker {
  private traversals: LinkTraversalEvent[] = [];
  private linkedObjects = new Map<string, LinkedObjectsEvent>();
  private maxTraversals = 1000;
  private eventTimeline: EventTimeline | null = null;

  recordTraversal(event: LinkTraversalEvent): void {
    this.traversals.push(event);

    if (this.traversals.length > this.maxTraversals) {
      this.traversals.shift();
    }

    // Also record to EventTimeline if available
    if (this.eventTimeline) {
      this.eventTimeline.record({
        type: "LINK_TRAVERSAL",
        sourceKey: `${event.sourceObjectType}:${event.sourceObjectKey}`,
        linkName: event.linkName,
        timestamp: event.timestamp,
        componentId: event.componentId,
      });
    }
  }

  /**
   * Set the EventTimeline to record events to.
   */
  setEventTimeline(timeline: EventTimeline | null): void {
    this.eventTimeline = timeline;
  }

  recordLinkedObjects(event: LinkedObjectsEvent): void {
    this.linkedObjects.set(event.subscriptionId, event);
  }

  getTraversalChain(sourceObjectKey: string): LinkTraversalEvent[] {
    const chain: LinkTraversalEvent[] = [];
    const visited = new Set<string>();

    const buildChain = (currentKey: string) => {
      if (visited.has(currentKey)) return;
      visited.add(currentKey);

      const traversal = this.traversals.find(
        (t) => `${t.sourceObjectType}:${t.sourceObjectKey}` === currentKey,
      );

      if (traversal) {
        chain.push(traversal);

        const linkedObjs = this.linkedObjects.get(traversal.subscriptionId);
        if (linkedObjs) {
          for (const obj of linkedObjs.objects) {
            buildChain(`${obj.objectType}:${obj.primaryKey}`);
          }
        }
      }
    };

    buildChain(sourceObjectKey);
    return chain;
  }

  findRedundantTraversals(
    windowMs: number = 5000,
  ): Array<{
    linkKey: string;
    count: number;
    componentIds: Set<string>;
  }> {
    const now = Date.now();
    const recent = this.traversals.filter((t) => now - t.timestamp < windowMs);

    const counts = new Map<
      string,
      { count: number; componentIds: Set<string> }
    >();

    for (const traversal of recent) {
      const key = `${traversal.sourceObjectKey}:${traversal.linkName}`;
      const existing = counts.get(key) || {
        count: 0,
        componentIds: new Set(),
      };

      existing.count++;
      if (traversal.componentId) {
        existing.componentIds.add(traversal.componentId);
      }

      counts.set(key, existing);
    }

    return Array.from(counts.entries())
      .filter(([_, data]) => data.count > 1)
      .map(([linkKey, data]) => ({ linkKey, ...data }))
      .sort((a, b) => b.count - a.count);
  }

  getRecentTraversals(limit: number = 50): LinkTraversalEvent[] {
    return this.traversals.slice(-limit);
  }

  getTraversalsByComponent(componentId: string): LinkTraversalEvent[] {
    return this.traversals.filter((t) => t.componentId === componentId);
  }

  getTraversalsByLink(linkName: string): LinkTraversalEvent[] {
    return this.traversals.filter((t) => t.linkName === linkName);
  }

  clear(): void {
    this.traversals = [];
    this.linkedObjects.clear();
  }

  getStats(): {
    totalTraversals: number;
    uniqueLinks: number;
    uniqueComponents: number;
    mostUsedLinks: Array<[string, number]>;
    linkedObjectsTracked: number;
  } {
    const linkCounts = new Map<string, number>();
    const componentCounts = new Map<string, number>();

    for (const traversal of this.traversals) {
      linkCounts.set(
        traversal.linkName,
        (linkCounts.get(traversal.linkName) || 0) + 1,
      );

      if (traversal.componentId) {
        componentCounts.set(
          traversal.componentId,
          (componentCounts.get(traversal.componentId) || 0) + 1,
        );
      }
    }

    return {
      totalTraversals: this.traversals.length,
      uniqueLinks: linkCounts.size,
      uniqueComponents: componentCounts.size,
      mostUsedLinks: Array.from(linkCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5),
      linkedObjectsTracked: this.linkedObjects.size,
    };
  }
}
