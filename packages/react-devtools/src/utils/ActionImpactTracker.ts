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

import type { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";
import type { EventTimeline, ObjectModifiedEvent } from "./EventTimeline.js";
import type { RenderAttributionTracker } from "./RenderAttributionTracker.js";

export interface ActionImpactGraph {
  actionId: string;
  actionName: string;
  actionSignature: string;
  triggeredBy: {
    componentId: string;
    componentName: string;
    filePath?: string;
    lineNumber?: number;
  };
  startTime: number;
  endTime?: number;
  status: "pending" | "success" | "error";

  phases: ActionPhase[];
  affectedObjects: AffectedObject[];
  invalidatedQueries: InvalidatedQuery[];
  renderedComponents: RenderedComponent[];

  totalDuration: number;
  optimisticSpeedup?: number;
}

export interface ActionPhase {
  name:
    | "validation"
    | "optimistic-update"
    | "apply-action"
    | "server-response"
    | "refetch"
    | "rollback";
  startTime: number;
  endTime: number;
  duration: number;
  status: "success" | "error" | "skipped";

  validation?: {
    result: "valid" | "invalid";
    errors?: string[];
  };

  optimisticUpdate?: {
    layerId: unknown;
    objectsModified: string[];
    componentsRendered: string[];
  };

  applyAction?: {
    requestPayload?: unknown;
    requestSize?: number;
  };

  serverResponse?: {
    responsePayload?: unknown;
    responseSize?: number;
    statusCode?: number;
  };

  refetch?: {
    queriesInvalidated: string[];
    queriesRefetched: string[];
    objectsUpdated: string[];
    componentsRendered: string[];
  };

  rollback?: {
    reason: string;
    layersCleared: unknown[];
  };
}

export interface AffectedObject {
  objectKey: string;
  objectType: string;
  primaryKey: string;
  modifiedAt: number;
  modifiedBy: "optimistic" | "server" | "rollback";
  propertiesChanged?: string[];
  oldValues?: Record<string, unknown>;
  newValues?: Record<string, unknown>;
}

export interface InvalidatedQuery {
  querySignature: string;
  invalidatedAt: number;
  refetchedAt?: number;
  refetchDuration?: number;
  subscriberCount: number;
}

export interface RenderedComponent {
  componentId: string;
  componentName: string;
  renderedAt: number;
  renderDuration: number;
  triggerPhase: ActionPhase["name"];
}

/**
 * Tracks action execution flow and impact across the application.
 * Builds complete graphs showing: optimistic updates → network → server → refetch → renders.
 *
 * Uses EventTimeline as source of truth for temporal correlation.
 */
export class ActionImpactTracker {
  private activeActions = new Map<string, ActionImpactGraph>();
  private completedActions: ActionImpactGraph[] = [];
  private readonly maxHistory = 100;
  private subscribers = new Set<(graph: ActionImpactGraph) => void>();

  constructor(
    private eventTimeline: EventTimeline,
    private componentRegistry: ComponentQueryRegistry,
    private renderAttributionTracker: RenderAttributionTracker,
  ) {
    this.subscribeToEvents();
  }

  private subscribeToEvents(): void {
    this.eventTimeline.subscribe((event) => {
      if (event.type === "ACTION_START") {
        this.handleActionStart(event);
      } else if (event.type === "ACTION_COMPLETE") {
        this.handleActionComplete(event);
      } else if (event.type === "EMISSION") {
        this.handleEmission(event);
      } else if (event.type === "RENDER") {
        this.handleRender(event);
      }
    });
  }

  private handleActionStart(event: {
    type: "ACTION_START";
    actionId: string;
    actionName: string;
    timestamp: number;
    componentId?: string;
  }): void {
    const componentId = event.componentId || "unknown";
    const componentName = componentId;

    const graph: ActionImpactGraph = {
      actionId: event.actionId,
      actionName: event.actionName,
      actionSignature: event.actionName,
      triggeredBy: {
        componentId,
        componentName,
      },
      startTime: event.timestamp,
      status: "pending",
      phases: [],
      affectedObjects: [],
      invalidatedQueries: [],
      renderedComponents: [],
      totalDuration: 0,
    };

    this.activeActions.set(event.actionId, graph);

    const applyPhase: ActionPhase = {
      name: "apply-action",
      startTime: event.timestamp,
      endTime: event.timestamp,
      duration: 0,
      status: "success",
      applyAction: {},
    };

    graph.phases.push(applyPhase);
  }

  private handleActionComplete(event: {
    type: "ACTION_COMPLETE";
    actionId: string;
    timestamp: number;
    success: boolean;
    error?: string;
  }): void {
    const graph = this.activeActions.get(event.actionId);
    if (!graph) return;

    const applyPhase = graph.phases.find((p) => p.name === "apply-action");
    if (applyPhase) {
      applyPhase.endTime = event.timestamp;
      applyPhase.duration = event.timestamp - applyPhase.startTime;
      applyPhase.status = event.success ? "success" : "error";
    }

    const actionCausality = this.eventTimeline.buildActionCausality(
      event.actionId,
    );

    // Get all OBJECT_MODIFIED events for this action
    const allEvents = this.eventTimeline.getAllEvents();

    const objectModifiedEvents = allEvents.filter(
      (e): e is ObjectModifiedEvent =>
        e.type === "OBJECT_MODIFIED" && e.actionId === event.actionId,
    );

    const optimisticModifications = objectModifiedEvents.filter(
      (e) => e.modifiedBy === "optimistic",
    );
    const serverModifications = objectModifiedEvents.filter(
      (e) => e.modifiedBy === "server",
    );

    if (optimisticModifications.length > 0) {
      const optimisticObjects = optimisticModifications.map((e) => ({
        objectKey: `${e.objectType}:${e.primaryKey}`,
        objectType: e.objectType,
        primaryKey: e.primaryKey,
        modifiedAt: e.timestamp,
        modifiedBy: "optimistic" as const,
      }));

      const optimisticPhase: ActionPhase = {
        name: "optimistic-update",
        startTime: optimisticModifications[0].timestamp,
        endTime:
          optimisticModifications[optimisticModifications.length - 1].timestamp,
        duration: 0,
        status: "success",
        optimisticUpdate: {
          layerId: undefined,
          objectsModified: optimisticObjects.map((o) => o.objectKey),
          componentsRendered: [],
        },
      };
      optimisticPhase.duration = optimisticPhase.endTime
        - optimisticPhase.startTime;

      graph.phases.unshift(optimisticPhase);
      graph.affectedObjects.push(...optimisticObjects);
    }

    if (
      serverModifications.length > 0 || actionCausality.refetches.length > 0
    ) {
      const serverObjects = serverModifications.map((e) => ({
        objectKey: `${e.objectType}:${e.primaryKey}`,
        objectType: e.objectType,
        primaryKey: e.primaryKey,
        modifiedAt: e.timestamp,
        modifiedBy: "server" as const,
      }));

      const refetchPhase: ActionPhase = {
        name: "refetch",
        startTime: serverModifications[0]?.timestamp
          || actionCausality.refetches[0]?.timestamp
          || event.timestamp,
        endTime: serverModifications[serverModifications.length - 1]?.timestamp
          || actionCausality.refetches[actionCausality.refetches.length - 1]
            ?.timestamp
          || event.timestamp,
        duration: 0,
        status: "success",
        refetch: {
          queriesInvalidated: [],
          queriesRefetched: actionCausality.refetches.map(
            (e) => e.subscriptionId,
          ),
          objectsUpdated: serverObjects.map((o) => o.objectKey),
          componentsRendered: [],
        },
      };
      refetchPhase.duration = refetchPhase.endTime - refetchPhase.startTime;

      graph.phases.push(refetchPhase);
      graph.affectedObjects.push(...serverObjects);
    }

    const renderedComponents = actionCausality.renders.map((render) => ({
      componentId: render.componentId,
      componentName: render.componentName,
      renderedAt: render.timestamp,
      renderDuration: render.duration,
      triggerPhase: this.determineRenderPhase(graph, render.timestamp),
    }));

    graph.renderedComponents.push(...renderedComponents);

    graph.endTime = event.timestamp;
    graph.totalDuration = event.timestamp - graph.startTime;
    graph.status = event.success ? "success" : "error";

    const optimisticPhase = graph.phases.find(
      (p) => p.name === "optimistic-update",
    );
    if (optimisticPhase && optimisticPhase.duration > 0) {
      const timeToOptimistic = optimisticPhase.endTime - graph.startTime;
      graph.optimisticSpeedup = graph.totalDuration - timeToOptimistic;
    }

    this.activeActions.delete(event.actionId);
    this.completedActions.push(graph);

    if (this.completedActions.length > this.maxHistory) {
      this.completedActions.shift();
    }

    this.notifySubscribers(graph);
  }

  private handleEmission(event: {
    type: "EMISSION";
    subscriptionId: string;
    objectKey?: string;
    timestamp: number;
    isOptimistic?: boolean;
  }): void {
    // Emissions are correlated during handleActionComplete
  }

  private handleRender(event: {
    type: "RENDER";
    componentId: string;
    componentName: string;
    duration: number;
    timestamp: number;
  }): void {
    // Renders are correlated during handleActionComplete
  }

  private determineRenderPhase(
    graph: ActionImpactGraph,
    renderTimestamp: number,
  ): ActionPhase["name"] {
    for (const phase of graph.phases) {
      if (
        renderTimestamp >= phase.startTime
        && renderTimestamp <= phase.endTime
      ) {
        return phase.name;
      }
    }
    return "refetch";
  }

  getActionGraph(actionId: string): ActionImpactGraph | undefined {
    return (
      this.activeActions.get(actionId)
      || this.completedActions.find((g) => g.actionId === actionId)
    );
  }

  getAllActionGraphs(): ActionImpactGraph[] {
    return [
      ...Array.from(this.activeActions.values()),
      ...this.completedActions,
    ];
  }

  getRecentActionGraphs(limit: number = 10): ActionImpactGraph[] {
    return this.completedActions.slice(-limit).reverse();
  }

  subscribe(callback: (graph: ActionImpactGraph) => void): () => void {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  private notifySubscribers(graph: ActionImpactGraph): void {
    for (const callback of this.subscribers) {
      try {
        callback(graph);
      } catch (_e) {
        // Subscriber error - silently ignore
      }
    }
  }

  dispose(): void {
    this.activeActions.clear();
    this.completedActions = [];
    this.subscribers.clear();
  }
}
