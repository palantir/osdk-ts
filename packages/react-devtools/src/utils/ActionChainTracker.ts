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

export interface ActionChain {
  chainId: string;
  rootActionId: string;
  actions: ActionInChain[];
  totalDuration: number;
  depth: number;
  isCircular: boolean;
  circularityPoint?: number;
}

export interface ActionInChain {
  actionId: string;
  actionName: string;
  triggeredBy?: {
    actionId: string;
    mechanism:
      | "explicit"
      | "hook-effect"
      | "optimistic-rollback"
      | "refetch-trigger";
  };
  startTime: number;
  endTime: number;
  duration: number;
  status: "success" | "error";
  objectsModified: string[];
  subsequentActions: string[];
}

export interface ActionTrigger {
  sourceActionId: string;
  targetActionId: string;
  mechanism:
    | "explicit"
    | "hook-effect"
    | "optimistic-rollback"
    | "refetch-trigger";
  timestamp: number;
  componentId?: string;
}

/**
 * Tracks cascading actions where one action triggers another.
 * Detects chains like: action A → action B → action C
 * Also detects circular action loops.
 *
 * Uses heuristic temporal correlation (~80% accuracy) since we can't
 * always determine causality with certainty without code instrumentation.
 */
export class ActionChainTracker {
  private activeChains = new Map<string, ActionChain>();
  private completedChains: ActionChain[] = [];
  private readonly maxHistory = 100;
  private activeActions = new Set<string>();
  private recentActions = new Map<string, ActionInChain>();
  private subscribers = new Set<(chain: ActionChain) => void>();
  private readonly TRIGGER_WINDOW_MS = 1000;

  constructor(private eventTimeline: EventTimeline) {
    this.subscribeToEvents();
  }

  private subscribeToEvents(): void {
    this.eventTimeline.subscribe((event) => {
      if (event.type === "ACTION_START") {
        this.handleActionStart(event);
      } else if (event.type === "ACTION_COMPLETE") {
        this.handleActionComplete(event);
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
    const action: ActionInChain = {
      actionId: event.actionId,
      actionName: event.actionName,
      startTime: event.timestamp,
      endTime: 0,
      duration: 0,
      status: "success",
      objectsModified: [],
      subsequentActions: [],
    };

    this.activeActions.add(event.actionId);
    this.recentActions.set(event.actionId, action);

    const trigger = this.detectTrigger(
      event.actionId,
      event.timestamp,
      event.componentId,
    );

    if (trigger) {
      action.triggeredBy = {
        actionId: trigger.sourceActionId,
        mechanism: trigger.mechanism,
      };

      this.addToChain(action, trigger.sourceActionId);
    } else {
      this.startNewChain(action);
    }
  }

  private handleActionComplete(event: {
    type: "ACTION_COMPLETE";
    actionId: string;
    timestamp: number;
    success: boolean;
  }): void {
    this.activeActions.delete(event.actionId);

    const action = this.recentActions.get(event.actionId);
    if (!action) return;

    action.endTime = event.timestamp;
    action.duration = event.timestamp - action.startTime;
    action.status = event.success ? "success" : "error";

    const causality = this.eventTimeline.buildActionCausality(event.actionId);
    action.objectsModified = [
      ...causality.optimisticUpdates.map((e) => e.objectKey || ""),
      ...causality.refetches.map((e) => e.objectKey || ""),
    ].filter((key) => key !== "");

    this.updateChain(event.actionId);
  }

  private detectTrigger(
    actionId: string,
    timestamp: number,
    componentId?: string,
  ): ActionTrigger | null {
    for (const [prevActionId, prevAction] of this.recentActions) {
      if (prevActionId === actionId) continue;

      const timeSince = timestamp - prevAction.endTime;
      if (
        timeSince > this.TRIGGER_WINDOW_MS
        || timeSince < 0
        || prevAction.endTime === 0
      ) {
        continue;
      }

      const mechanism = this.inferTriggerMechanism(
        prevAction,
        timeSince,
        componentId,
      );

      if (mechanism) {
        return {
          sourceActionId: prevActionId,
          targetActionId: actionId,
          mechanism,
          timestamp,
          componentId,
        };
      }
    }

    return null;
  }

  private inferTriggerMechanism(
    prevAction: ActionInChain,
    timeSince: number,
    componentId?: string,
  ):
    | "explicit"
    | "hook-effect"
    | "optimistic-rollback"
    | "refetch-trigger"
    | null
  {
    if (timeSince < 16) {
      return "explicit";
    }

    if (timeSince < 100 && prevAction.objectsModified.length > 0) {
      return "hook-effect";
    }

    if (timeSince < 500 && prevAction.status === "error") {
      return "optimistic-rollback";
    }

    if (timeSince < this.TRIGGER_WINDOW_MS) {
      return "refetch-trigger";
    }

    return null;
  }

  private addToChain(action: ActionInChain, parentActionId: string): void {
    for (const chain of this.activeChains.values()) {
      const parentIndex = chain.actions.findIndex(
        (a) => a.actionId === parentActionId,
      );

      if (parentIndex !== -1) {
        const parent = chain.actions[parentIndex];
        parent.subsequentActions.push(action.actionId);

        chain.actions.push(action);
        chain.depth = this.calculateDepth(chain);

        if (this.isCircular(chain)) {
          chain.isCircular = true;
          chain.circularityPoint = chain.actions.length - 1;

          // eslint-disable-next-line no-console
          console.warn(
            `[ActionChainTracker] Circular action chain detected: ${
              this.getChainPath(chain)
            }`,
          );
        }

        return;
      }
    }

    this.startNewChain(action);
  }

  private startNewChain(action: ActionInChain): void {
    const chainId = crypto.randomUUID();

    const chain: ActionChain = {
      chainId,
      rootActionId: action.actionId,
      actions: [action],
      totalDuration: 0,
      depth: 1,
      isCircular: false,
    };

    this.activeChains.set(chainId, chain);
  }

  private updateChain(actionId: string): void {
    for (const chain of this.activeChains.values()) {
      const hasAction = chain.actions.some((a) => a.actionId === actionId);
      if (!hasAction) continue;

      const allComplete = chain.actions.every((a) => a.endTime > 0);

      if (allComplete) {
        const firstStart = Math.min(...chain.actions.map((a) => a.startTime));
        const lastEnd = Math.max(...chain.actions.map((a) => a.endTime));
        chain.totalDuration = lastEnd - firstStart;

        this.activeChains.delete(chain.chainId);
        this.completedChains.push(chain);

        if (this.completedChains.length > this.maxHistory) {
          this.completedChains.shift();
        }

        this.notifySubscribers(chain);
      }
    }
  }

  private calculateDepth(chain: ActionChain): number {
    const buildTree = (actionId: string, visited: Set<string>): number => {
      if (visited.has(actionId)) return 0;
      visited.add(actionId);

      const action = chain.actions.find((a) => a.actionId === actionId);
      if (!action || action.subsequentActions.length === 0) return 1;

      const depths = action.subsequentActions.map((childId) =>
        buildTree(childId, new Set(visited))
      );
      return 1 + Math.max(...depths);
    };

    return buildTree(chain.rootActionId, new Set());
  }

  private isCircular(chain: ActionChain): boolean {
    const actionNames = chain.actions.map((a) => a.actionName);
    const seen = new Set<string>();

    for (const name of actionNames) {
      if (seen.has(name)) {
        return true;
      }
      seen.add(name);
    }

    return false;
  }

  private getChainPath(chain: ActionChain): string {
    return chain.actions.map((a) => a.actionName).join(" → ");
  }

  getChain(chainId: string): ActionChain | undefined {
    return (
      this.activeChains.get(chainId)
      || this.completedChains.find((c) => c.chainId === chainId)
    );
  }

  getAllChains(): ActionChain[] {
    return [
      ...Array.from(this.activeChains.values()),
      ...this.completedChains,
    ];
  }

  getRecentChains(limit: number = 10): ActionChain[] {
    return this.completedChains.slice(-limit).reverse();
  }

  getChainsContainingAction(actionId: string): ActionChain[] {
    return this.getAllChains().filter((chain) =>
      chain.actions.some((a) => a.actionId === actionId)
    );
  }

  subscribe(callback: (chain: ActionChain) => void): () => void {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  private notifySubscribers(chain: ActionChain): void {
    for (const callback of this.subscribers) {
      try {
        callback(chain);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("[ActionChainTracker] Subscriber error:", e);
      }
    }
  }

  dispose(): void {
    this.activeChains.clear();
    this.completedChains = [];
    this.activeActions.clear();
    this.recentActions.clear();
    this.subscribers.clear();
  }
}
