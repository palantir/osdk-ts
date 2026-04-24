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
  ComponentHookBinding,
  ComponentQueryRegistry,
} from "./ComponentQueryRegistry.js";
import type { EventTimeline } from "./EventTimeline.js";

export type WaterfallType =
  | "LINK_WATERFALL"
  | "MAP_WATERFALL"
  | "SEQUENTIAL_WATERFALL";

export interface Waterfall {
  type: WaterfallType;
  priority: "high" | "medium" | "low";
  timeSaved: number; // ms that could be saved
  suggestion: string;
  code: string;
  details: {
    parentQuery?: string;
    childQuery?: string;
    component?: string;
    count?: number;
    objectType?: string;
  };
}

export class WaterfallDetector {
  constructor(
    private registry: ComponentQueryRegistry,
    private timeline: EventTimeline,
  ) {}

  detectWaterfalls(timingThresholdMs: number = 50): Waterfall[] {
    const waterfalls: Waterfall[] = [];

    waterfalls.push(...this.detectLinkWaterfalls(timingThresholdMs));
    waterfalls.push(...this.detectMapWaterfalls());
    waterfalls.push(...this.detectSequentialPatterns(timingThresholdMs));

    return waterfalls.sort((a, b) => b.timeSaved - a.timeSaved);
  }

  private detectLinkWaterfalls(timingThresholdMs: number): Waterfall[] {
    const waterfalls: Waterfall[] = [];

    const emissions = this.timeline.getEventsByType("EMISSION");
    const linkTraversals = this.timeline.getEventsByType("LINK_TRAVERSAL");

    for (let i = 0; i < emissions.length - 1; i++) {
      const emissionA = emissions[i];
      const emissionB = emissions[i + 1];

      const timeBetween = emissionB.timestamp - emissionA.timestamp;
      if (timeBetween > 0 && timeBetween < timingThresholdMs) {
        const linkInWindow = linkTraversals.find(link =>
          link.timestamp > emissionA.timestamp
          && link.timestamp < emissionB.timestamp
        );

        if (linkInWindow) {
          const estimatedFetchTime = emissionB.timestamp - emissionA.timestamp;

          waterfalls.push({
            type: "LINK_WATERFALL",
            priority: estimatedFetchTime > 200 ? "high" : "medium",
            timeSaved: estimatedFetchTime,
            suggestion:
              `Prefetch the "${linkInWindow.linkName}" relationship to run queries in parallel`,
            code: this.generateLinkWaterfallCode(
              emissionA.subscriptionId,
              emissionB.subscriptionId,
              linkInWindow.linkName,
            ),
            details: {
              parentQuery: emissionA.subscriptionId,
              childQuery: emissionB.subscriptionId,
            },
          });
        }
      }
    }

    return waterfalls;
  }

  private detectMapWaterfalls(): Waterfall[] {
    const waterfalls: Waterfall[] = [];
    const components = this.registry.getActiveComponents();

    for (const [componentId, bindings] of components) {
      const objectQueries = bindings.filter(b =>
        b.hookType === "useOsdkObject"
      );
      const grouped = new Map<string, ComponentHookBinding[]>();

      for (const query of objectQueries) {
        if (query.queryParams.type === "object") {
          const key = query.queryParams.objectType;
          if (!grouped.has(key)) {
            grouped.set(key, []);
          }
          const group = grouped.get(key);
          if (group) {
            group.push(query);
          }
        }
      }

      for (const [objectType, queries] of grouped) {
        if (queries.length > 3) {
          const bindings = this.registry.getComponentBindings(componentId);
          const binding = bindings.length > 0 ? bindings[0] : undefined;

          waterfalls.push({
            type: "MAP_WATERFALL",
            priority: queries.length > 10 ? "high" : "medium",
            timeSaved: queries.length * 100, // Rough estimate
            suggestion:
              `Replace ${queries.length} useOsdkObject calls with single useOsdkObjects batch query`,
            code: this.generateMapWaterfallCode(objectType, queries.length),
            details: {
              component: binding ? binding.componentName : undefined,
              count: queries.length,
              objectType,
            },
          });
        }
      }
    }

    return waterfalls;
  }

  private detectSequentialPatterns(timingThresholdMs: number): Waterfall[] {
    const waterfalls: Waterfall[] = [];
    const emissions = this.timeline.getEventsByType("EMISSION");

    let sequenceStart = 0;
    let sequenceLength = 1;
    let totalTime = 0;

    for (let i = 1; i < emissions.length; i++) {
      const timeBetween = emissions[i].timestamp - emissions[i - 1].timestamp;

      if (timeBetween < timingThresholdMs) {
        sequenceLength++;
        totalTime += timeBetween;
      } else {
        if (sequenceLength > 3 && totalTime > 300) {
          waterfalls.push({
            type: "SEQUENTIAL_WATERFALL",
            priority: totalTime > 500 ? "high" : "medium",
            timeSaved: totalTime,
            suggestion:
              "Consider parallelizing these queries or prefetching data",
            code:
              "// Analyze the queries in this sequence and look for prefetching opportunities",
            details: {},
          });
        }

        sequenceStart = i;
        sequenceLength = 1;
        totalTime = 0;
      }
    }

    return waterfalls;
  }

  private generateLinkWaterfallCode(
    parentQuery: string,
    childQuery: string,
    linkName: string,
  ): string {
    return `
// ⚠️ WATERFALL DETECTED
// ${parentQuery} loads → triggers ${childQuery} (linked via "${linkName}")

// Problem: Sequential loading adds latency
// Timeline:
//   ━━━━ Parent query (t0-t200ms)
//        ↓ gap
//        ━━━━ Child/link query (t210-t260ms)
// Total: 260ms

// This is a known sequential pattern with useOsdkObject + useLinks.
// The link query cannot start until the parent object is loaded.

// Current pattern:
const { object: parent } = useOsdkObject(ParentType, id);
const { links } = useLinks(parent, "${linkName}");

// Option 1: If you have the linked IDs available upfront, load in parallel:
const [parentResult, childResult] = await Promise.all([
  useOsdkObject(ParentType, parentId),
  useOsdkObjects(ChildType, { where: { id: { $in: knownChildIds } } }),
]);

// Option 2: If data permits, restructure to load the parent object
// at a higher level so the link query starts sooner.
    `.trim();
  }

  private generateMapWaterfallCode(objectType: string, count: number): string {
    return `
// ⚠️ MAP WATERFALL DETECTED (N+1 Pattern)
// ${count} useOsdkObject calls for ${objectType} - each triggers separate fetch!

// Problem: Loads ${count} items sequentially instead of one batch request
// Timeline (Example):
//   ━━ Item 1 (t0-t100ms)
//   ━━ Item 2 (t100-t200ms)
//   ━━ Item 3 (t200-t300ms)
// Total: 300ms for 3 items

// Solution: Use useOsdkObjects for batch loading

// Before (❌ N+1 pattern):
{items.map(item => (
  <Item key={item.id} itemId={item.id} />
))}

// In Item component:
function Item({ itemId }) {
  const { object } = useOsdkObject(${objectType}, itemId); // ❌ Runs ${count} times!
  return <div>{object.name}</div>;
}

// After (✅ Batch query):
function ItemList({ items }) {
  const itemIds = items.map(item => item.id);
  const { data } = useOsdkObjects(${objectType}, {
    where: { id: { $in: itemIds } }  // ✅ Single query!
  });

  return items.map(item => (
    <Item key={item.id} data={data} />
  ));
}

function Item({ data }) {
  // Just receive data as prop - no query needed!
  return <div>{data.name}</div>;
}

// Result: 1 batch request instead of ${count} individual requests
// Time saved: ~${(count - 1) * 100}ms
    `.trim();
  }
}
