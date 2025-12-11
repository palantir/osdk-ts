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

/**
 * Result of action causality analysis
 */
export interface ActionCausality {
  start: ActionStartEvent;
  complete: ActionCompleteEvent;
  optimisticUpdates: EmissionEvent[];
  refetches: EmissionEvent[];
  renders: RenderEvent[];
  duration: number;
}

/**
 * Central event bus that records and correlates all monitoring events.
 *
 * Provides temporal correlation to determine causality:
 * - Which emission caused a render?
 * - What happened during an action?
 * - What renders followed an optimistic update?
 *
 * Uses a circular buffer to bound memory usage at ~1MB for 10k events.
 *
 * @example
 * ```typescript
 * const timeline = new EventTimeline(10000);
 *
 * // Record events
 * timeline.record({
 *   type: 'EMISSION',
 *   subscriptionId: 'query-123',
 *   timestamp: Date.now()
 * });
 *
 * timeline.record({
 *   type: 'RENDER',
 *   componentId: 'TodoList',
 *   componentName: 'TodoList',
 *   duration: 5.2,
 *   timestamp: Date.now()
 * });
 *
 * // Find what caused the render
 * const trigger = timeline.findRenderTrigger(renderEvent);
 * ```
 */
export class EventTimeline {
  private events: CircularBuffer<MonitorEvent>;
  private eventIndex = new Map<MonitorEvent["type"], number[]>();
  private subscribers = new Set<(event: MonitorEvent) => void>();

  constructor(maxEvents: number = 10000) {
    this.events = new CircularBuffer(maxEvents);
  }

  /**
   * Record an event in the timeline.
   * Events are indexed by type for fast filtering.
   *
   * @param event The event to record
   */
  record(event: MonitorEvent): void {
    const index = this.events.push(event);

    // Index by type for fast filtering
    if (!this.eventIndex.has(event.type)) {
      this.eventIndex.set(event.type, []);
    }
    this.eventIndex.get(event.type)!.push(index);

    // Notify subscribers
    this.notifySubscribers(event);
  }

  /**
   * Find all events within a time window.
   *
   * @param timestamp Center timestamp
   * @param windowMs Time window in milliseconds (± windowMs)
   * @param eventType Optional filter by event type
   * @returns Array of events within the window
   */
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

  /**
   * Find events within a time window before a specific timestamp.
   *
   * @param timestamp End timestamp
   * @param windowMs Look-back window in milliseconds
   * @param eventType Optional filter by event type
   * @returns Array of events before the timestamp
   */
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

  /**
   * Correlate a render with its likely trigger emission.
   *
   * Hypothesis: If an emission happened within 16ms before the render,
   * it likely caused that render (React's frame batching window).
   *
   * @param renderEvent The render event to analyze
   * @returns The likely trigger emission, or null if none found
   */
  findRenderTrigger(renderEvent: RenderEvent): EmissionEvent | null {
    const CORRELATION_WINDOW = 16; // One frame time

    // Find emissions just before this render
    const recentEmissions = this.findEventsBefore(
      renderEvent.timestamp,
      CORRELATION_WINDOW,
      "EMISSION",
    ) as EmissionEvent[];

    if (recentEmissions.length === 0) {
      return null;
    }

    // Return most recent emission (closest to render)
    return recentEmissions.reduce((latest, current) =>
      current.timestamp > latest.timestamp ? current : latest
    );
  }

  /**
   * Build a complete causality chain for an action.
   *
   * Finds all events that occurred between action start and completion:
   * - Optimistic updates (emissions marked optimistic)
   * - Server refetches (emissions after action complete)
   * - Component renders triggered by the action
   *
   * @param actionId The action ID to analyze
   * @returns Complete action causality data
   * @throws Error if action start or complete event not found
   */
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

  /**
   * Subscribe to real-time event notifications.
   *
   * @param callback Function called for each new event
   * @returns Unsubscribe function
   */
  subscribe(callback: (event: MonitorEvent) => void): () => void {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  /**
   * Get all events of a specific type.
   *
   * @param type Event type to filter
   * @returns Array of events of that type
   */
  getEventsByType<T extends MonitorEvent["type"]>(
    type: T,
  ): Extract<MonitorEvent, { type: T }>[] {
    const indices = this.eventIndex.get(type) || [];
    return indices
      .map((i) => this.events.get(i))
      .filter((e): e is Extract<MonitorEvent, { type: T }> =>
        e !== undefined && e.type === type
      );
  }

  /**
   * Get all events in chronological order.
   *
   * @returns Array of all events
   */
  getAllEvents(): MonitorEvent[] {
    return this.events.toArray();
  }

  /**
   * Get event count by type.
   *
   * @returns Map of event type to count
   */
  getEventCounts(): Map<MonitorEvent["type"], number> {
    const counts = new Map<MonitorEvent["type"], number>();
    for (const [type, indices] of this.eventIndex) {
      counts.set(type, indices.length);
    }
    return counts;
  }

  /**
   * Clear all events and indices.
   */
  clear(): void {
    this.events.clear();
    this.eventIndex.clear();
  }

  /**
   * Get current event count.
   */
  getSize(): number {
    return this.events.getSize();
  }

  /**
   * Notify all subscribers of a new event.
   */
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

  /**
   * Get the most recent emission event for a specific subscription.
   * Used by hook status indicators to show data freshness.
   *
   * @param subscriptionId The subscription ID to search for
   * @returns The most recent emission event, or null if none found
   */
  getLastEmission(subscriptionId: string): EmissionEvent | null {
    const emissions = this.getEventsByType("EMISSION")
      .filter(e => e.subscriptionId === subscriptionId)
      .sort((a, b) => b.timestamp - a.timestamp);

    return emissions[0] || null;
  }
}
