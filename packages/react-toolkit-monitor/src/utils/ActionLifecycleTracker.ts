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

import type { MetricsStore } from "../store/MetricsStore.js";
import type { OperationMetadata } from "../types/index.js";

interface ActionLifecycleData {
  readonly actionId: string;
  readonly signature: string;
  readonly metadata?: OperationMetadata;
  readonly startedAt: number;
  readonly optimisticConfigured: boolean;
  readonly actionName?: string;
  optimisticSeen: boolean;
  optimisticRenderTimestamp?: number;
  firstConfirmationTimestamp?: number;
  lastLayerClearedTimestamp?: number;
  completedAt?: number;
  rollback: boolean;
  optimisticObjectsAffected: number;
  optimisticLayerIds: Set<unknown>;
  optimisticLayerCount: number;
}

interface SubscriptionState {
  actionId?: string;
  optimisticId?: unknown;
  counted?: boolean;
}

interface StartActionOptions {
  signature: string;
  actionName?: string;
  metadata?: OperationMetadata;
  optimisticConfigured: boolean;
}

interface SettleActionOptions {
  actionId: string;
  succeeded: boolean;
  completedAt: number;
}

interface EmissionOptions {
  subscriptionId: string;
  optimisticId?: unknown;
  isOptimistic: boolean;
  timestamp: number;
  objectCount: number;
}

export class ActionLifecycleTracker {
  private readonly actions = new Map<string, ActionLifecycleData>();
  private readonly layerToAction = new Map<unknown, string>();
  private readonly subscriptions = new Map<string, SubscriptionState>();

  constructor(private readonly metricsStore: MetricsStore) {}

  startAction(options: StartActionOptions): string {
    const actionId = crypto.randomUUID();
    this.actions.set(actionId, {
      actionId,
      signature: options.signature,
      metadata: options.metadata,
      actionName: options.actionName,
      startedAt: Date.now(),
      optimisticConfigured: options.optimisticConfigured,
      optimisticSeen: false,
      rollback: false,
      optimisticObjectsAffected: 0,
      optimisticLayerIds: new Set(),
      optimisticLayerCount: 0,
    });

    return actionId;
  }

  registerOptimisticLayer(actionId: string, layerId: unknown): void {
    const action = this.actions.get(actionId);
    if (!action) return;

    action.optimisticLayerIds.add(layerId);
    action.optimisticSeen = true;
    action.optimisticLayerCount++;
    this.layerToAction.set(layerId, actionId);
  }

  handleLayerCleared(layerId: unknown, timestamp: number): void {
    const actionId = this.layerToAction.get(layerId);
    if (!actionId) return;

    const action = this.actions.get(actionId);
    if (!action) {
      this.layerToAction.delete(layerId);
      return;
    }

    action.optimisticLayerIds.delete(layerId);
    action.lastLayerClearedTimestamp = timestamp;
    if (action.firstConfirmationTimestamp === undefined) {
      action.firstConfirmationTimestamp = timestamp;
    }

    this.layerToAction.delete(layerId);
  }

  noteEmission(options: EmissionOptions): void {
    const {
      subscriptionId,
      optimisticId,
      isOptimistic,
      timestamp,
      objectCount,
    } = options;

    if (isOptimistic && optimisticId != null) {
      const actionId = this.layerToAction.get(optimisticId);
      if (!actionId) {
        return;
      }

      const action = this.actions.get(actionId);
      if (!action) {
        return;
      }

      action.optimisticSeen = true;
      if (
        action.optimisticRenderTimestamp === undefined
        || timestamp < action.optimisticRenderTimestamp
      ) {
        action.optimisticRenderTimestamp = timestamp;
      }

      const state = this.subscriptions.get(subscriptionId) ?? {};
      if (state.actionId !== actionId) {
        state.counted = false;
      }
      state.actionId = actionId;
      state.optimisticId = optimisticId;

      if (objectCount > 0 && state.counted !== true) {
        action.optimisticObjectsAffected += objectCount;
        state.counted = true;
      }

      this.subscriptions.set(subscriptionId, state);
      return;
    }

    const state = this.subscriptions.get(subscriptionId);
    if (!state?.actionId) {
      return;
    }

    const action = this.actions.get(state.actionId);
    if (!action) {
      this.subscriptions.delete(subscriptionId);
      return;
    }

    if (action.firstConfirmationTimestamp === undefined) {
      action.firstConfirmationTimestamp = timestamp;
    }

    if (!isOptimistic) {
      this.subscriptions.delete(subscriptionId);
    }
  }

  clearSubscription(subscriptionId: string): void {
    this.subscriptions.delete(subscriptionId);
  }

  markActionSettled(options: SettleActionOptions): void {
    const action = this.actions.get(options.actionId);
    if (!action) return;

    action.completedAt = options.completedAt;
    action.rollback = !options.succeeded;

    if (action.firstConfirmationTimestamp === undefined) {
      action.firstConfirmationTimestamp = action.lastLayerClearedTimestamp
        ?? options.completedAt;
    }

    this.finalizeAction(action);
  }

  private finalizeAction(action: ActionLifecycleData): void {
    const completedAt = action.completedAt ?? Date.now();
    const serverRoundTripTime = completedAt - action.startedAt;
    const optimisticRenderTime = action.optimisticRenderTimestamp != null
      ? action.optimisticRenderTimestamp - action.startedAt
      : undefined;
    const perceivedSpeedup = optimisticRenderTime != null
      ? serverRoundTripTime - optimisticRenderTime
      : undefined;
    const renderGapBeforeServer = action.optimisticRenderTimestamp != null
        && action.firstConfirmationTimestamp != null
      ? action.firstConfirmationTimestamp
        - action.optimisticRenderTimestamp
      : undefined;
    const optimisticObserved = action.optimisticLayerCount > 0
      || action.optimisticSeen;

    this.metricsStore.recordActionLifecycle({
      id: action.actionId,
      type: "action",
      signature: action.signature,
      timestamp: completedAt,
      metadata: action.metadata,
      actionName: action.actionName,
      optimisticConfigured: action.optimisticConfigured,
      optimisticObserved,
      optimisticRenderTime,
      serverRoundTripTime,
      perceivedSpeedup,
      rollback: action.rollback,
      optimisticObjectsAffected: action.optimisticObjectsAffected,
      renderGapBeforeServer,
      optimisticLayerCount: action.optimisticLayerCount,
    });

    this.actions.delete(action.actionId);
  }

  dispose(): void {
    this.actions.clear();
    this.layerToAction.clear();
    this.subscriptions.clear();
  }
}
