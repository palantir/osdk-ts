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

import { CircularBuffer } from "./CircularBuffer.js";

/**
 * Union type for all monitoring events.
 * Each event type has a timestamp for temporal correlation.
 */
export type MonitorEvent =
  | RenderEvent
  | EmissionEvent
  | ActionStartEvent
  | ActionCompleteEvent
  | PropertyAccessEvent
  | LinkTraversalEvent
  | ObjectModifiedEvent
  | MockHitEvent;

export interface RenderEvent {
  type: "RENDER";
  componentId: string;
  componentName: string;
  duration: number;
  timestamp: number;
  renderCycle?: number;
}

export interface EmissionEvent {
  type: "EMISSION";
  subscriptionId: string;
  objectKey?: string;
  timestamp: number;
  isOptimistic?: boolean;
}

export interface ActionStartEvent {
  type: "ACTION_START";
  actionId: string;
  actionName: string;
  timestamp: number;
  componentId?: string;
}

export interface ActionCompleteEvent {
  type: "ACTION_COMPLETE";
  actionId: string;
  timestamp: number;
  success: boolean;
  error?: string;
}

export interface PropertyAccessEvent {
  type: "PROPERTY_ACCESS";
  componentId: string;
  objectKey: string;
  property: string;
  timestamp: number;
  renderCycle?: number;
}

export interface LinkTraversalEvent {
  type: "LINK_TRAVERSAL";
  sourceKey: string;
  linkName: string;
  timestamp: number;
  componentId?: string;
}

export interface ObjectModifiedEvent {
  type: "OBJECT_MODIFIED";
  actionId: string;
  objectType: string;
  primaryKey: string;
  modifiedBy: "optimistic" | "server";
  timestamp: number;
}

export interface MockHitEvent {
  type: "MOCK_HIT";
  subscriptionId: string;
  timestamp: number;
  mockId?: string;
}

export interface ActionCausality {
  start: ActionStartEvent;
  complete: ActionCompleteEvent;
  optimisticUpdates: EmissionEvent[];
  refetches: EmissionEvent[];
  renders: RenderEvent[];
  duration: number;
}

export class EventTimeline {
  private events: CircularBuffer<MonitorEvent>;
  private eventCounts = new Map<MonitorEvent["type"], number>();
  private subscribers = new Set<(event: MonitorEvent) => void>();

  constructor(maxEvents: number = 10000) {
    this.events = new CircularBuffer(maxEvents);
  }

  record(event: MonitorEvent): void {
    this.events.push(event);

    // Track counts by type
    this.eventCounts.set(
      event.type,
      (this.eventCounts.get(event.type) ?? 0) + 1,
    );

    // Notify subscribers
    this.notifySubscribers(event);
  }

  findEventsInWindow(
    timestamp: number,
    windowMs: number,
    eventType?: MonitorEvent["type"],
  ): MonitorEvent[] {
    const allEvents = eventType
      ? this.getEventsByType(eventType)
      : this.events.toArray();

    return allEvents.filter((e) =>
      Math.abs(e.timestamp - timestamp) <= windowMs
    );
  }

  findEventsBefore(
    timestamp: number,
    windowMs: number,
    eventType?: MonitorEvent["type"],
  ): MonitorEvent[] {
    const allEvents = eventType
      ? this.getEventsByType(eventType)
      : this.events.toArray();

    return allEvents.filter(
      (e) => e.timestamp <= timestamp && timestamp - e.timestamp <= windowMs,
    );
  }

  findRenderTrigger(renderEvent: RenderEvent): EmissionEvent | null {
    const CORRELATION_WINDOW = 16;

    const recentEmissions = this.getEventsByType("EMISSION")
      .filter(e =>
        e.timestamp <= renderEvent.timestamp
        && renderEvent.timestamp - e.timestamp <= CORRELATION_WINDOW
      );

    if (recentEmissions.length === 0) {
      return null;
    }

    // Return most recent emission (closest to render)
    return recentEmissions.reduce((latest, current) =>
      current.timestamp > latest.timestamp ? current : latest
    );
  }

  buildActionCausality(actionId: string): ActionCausality {
    const allEvents = this.events.toArray();

    const start = allEvents.find(
      (e): e is ActionStartEvent =>
        e.type === "ACTION_START" && e.actionId === actionId,
    );

    const complete = allEvents.find(
      (e): e is ActionCompleteEvent =>
        e.type === "ACTION_COMPLETE" && e.actionId === actionId,
    );

    if (!start) {
      throw new Error(`Action start event not found for action ${actionId}`);
    }

    if (!complete) {
      throw new Error(`Action complete event not found for action ${actionId}`);
    }

    // Find all events between start and complete
    const actionEvents = allEvents.filter(
      (e) =>
        e.timestamp >= start.timestamp && e.timestamp <= complete.timestamp,
    );

    // Separate optimistic updates from refetches
    const emissions = actionEvents.filter(
      (e): e is EmissionEvent => e.type === "EMISSION",
    );
    const optimisticUpdates = emissions.filter((e) => e.isOptimistic === true);
    const refetches = emissions.filter((e) => !e.isOptimistic);

    // Find renders triggered during the action
    const renders = actionEvents.filter(
      (e): e is RenderEvent => e.type === "RENDER",
    );

    return {
      start,
      complete,
      optimisticUpdates,
      refetches,
      renders,
      duration: complete.timestamp - start.timestamp,
    };
  }

  subscribe(callback: (event: MonitorEvent) => void): () => void {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  getEventsByType<T extends MonitorEvent["type"]>(
    type: T,
  ): Extract<MonitorEvent, { type: T }>[] {
    return this.events.toArray().filter(
      (e): e is Extract<MonitorEvent, { type: T }> => e.type === type,
    );
  }

  getAllEvents(): MonitorEvent[] {
    return this.events.toArray();
  }

  getEventCounts(): Map<MonitorEvent["type"], number> {
    return new Map(this.eventCounts);
  }

  clear(): void {
    this.events.clear();
    this.eventCounts.clear();
  }

  getSize(): number {
    return this.events.getSize();
  }

  private notifySubscribers(event: MonitorEvent): void {
    for (const callback of this.subscribers) {
      try {
        callback(event);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("[EventTimeline] Subscriber error:", e);
      }
    }
  }

  getLastEmission(subscriptionId: string): EmissionEvent | null {
    const emissions = this.getEventsByType("EMISSION")
      .filter(e => e.subscriptionId === subscriptionId)
      .sort((a, b) => b.timestamp - a.timestamp);

    return emissions[0] || null;
  }
}
