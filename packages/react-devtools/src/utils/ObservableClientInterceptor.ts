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

import type { InterfaceDefinition, ObjectTypeDefinition } from "@osdk/api";
import type {
  ObservableClient,
  ObserveObjectArgs,
  ObserveObjectsArgs,
  Unsubscribable,
} from "@osdk/client/unstable-do-not-use";
import { MetricsStore } from "../store/MetricsStore.js";
import type {
  ObservableDebugMetadata,
  OperationMetadata,
} from "../types/index.js";
import { ActionLifecycleTracker } from "./ActionLifecycleTracker.js";
import { componentContextCapture } from "./ComponentContextCapture.js";
import type { EventTimeline } from "./EventTimeline.js";
import { SubscriptionTracker } from "./SubscriptionTracker.js";

/**
 * Safely extracts debug metadata from Observable emission values
 */
function getDebugMetadata(value: unknown): ObservableDebugMetadata | undefined {
  if (
    typeof value === "object" && value != null
    && "__debugMetadata" in value
  ) {
    return value.__debugMetadata as ObservableDebugMetadata | undefined;
  }
  return undefined;
}

export class ObservableClientMonitor {
  private readonly metricsStore: MetricsStore;
  private readonly subscriptionTracker: SubscriptionTracker;
  private readonly recordedSubscriptions = new Set<string>();
  private readonly actionTracker: ActionLifecycleTracker;
  private readonly eventTimeline: EventTimeline | undefined;
  private readonly cleanupIntervalMs: number;
  private cleanupIntervalId: ReturnType<typeof setInterval> | null = null;
  private observableClient: ObservableClient | null = null;

  constructor(
    metricsStore?: MetricsStore,
    cleanupIntervalMs: number = 60000,
    cacheThresholdMs: number = 10,
    eventTimeline?: EventTimeline,
  ) {
    this.metricsStore = metricsStore ?? new MetricsStore();
    this.subscriptionTracker = new SubscriptionTracker(cacheThresholdMs);
    this.eventTimeline = eventTimeline;
    this.actionTracker = new ActionLifecycleTracker(
      this.metricsStore,
      eventTimeline,
    );
    this.cleanupIntervalMs = cleanupIntervalMs;

    this.cleanupIntervalId = setInterval(
      () => this.subscriptionTracker.cleanup(),
      this.cleanupIntervalMs,
    );
  }

  wrapClient(client: ObservableClient): ObservableClient {
    this.observableClient = client;

    return new Proxy(client, {
      get: (target, prop: keyof ObservableClient) => {
        if (prop === "observeObject") {
          return this.wrapObserveObject(
            target.observeObject.bind(target),
          );
        }
        if (prop === "observeList") {
          return this.wrapObserveList(
            target.observeList.bind(target),
          );
        }
        if (prop === "applyAction") {
          return this.wrapApplyAction(
            target.applyAction.bind(target),
          );
        }
        if (prop === "validateAction") {
          return this.wrapValidateAction(
            target.validateAction.bind(target),
          );
        }
        return target[prop];
      },
    }) as ObservableClient;
  }

  getMetricsStore(): MetricsStore {
    return this.metricsStore;
  }

  dispose(): void {
    if (this.cleanupIntervalId) {
      clearInterval(this.cleanupIntervalId);
      this.cleanupIntervalId = null;
    }

    if (
      "dispose" in this.metricsStore
      && typeof this.metricsStore.dispose === "function"
    ) {
      this.metricsStore.dispose();
    }

    this.actionTracker.dispose();
  }

  private wrapObserveObject<T extends ObjectTypeDefinition>(
    original: ObservableClient["observeObject"],
  ): ObservableClient["observeObject"] {
    return (apiName, primaryKey, options, observer): Unsubscribable => {
      const apiNameStr = typeof apiName === "string"
        ? apiName
        : apiName.apiName;
      const signature = `object:${apiNameStr}:${String(primaryKey)}`;

      const metadata: OperationMetadata = {
        apiName: apiNameStr,
        primaryKey: String(primaryKey),
      };

      // Check if this subscription will be deduplicated
      const isDeduplicated = this.subscriptionTracker
        .isDeduplicatedSubscription(signature);
      if (isDeduplicated) {
        this.metricsStore.recordDeduplication(signature, metadata);
      }

      const subscriptionId = this.subscriptionTracker.startSubscription(
        signature,
      );

      const wrappedObserver = {
        next: (value: ObserveObjectArgs<T>) => {
          const timestamp = Date.now();
          const debugMetadata = getDebugMetadata(value);

          this.subscriptionTracker.recordEmission(
            subscriptionId,
            value.status,
            value.object !== undefined,
            value.isOptimistic,
            debugMetadata?.optimisticId,
            timestamp,
          );

          this.actionTracker.noteEmission({
            subscriptionId,
            optimisticId: debugMetadata?.optimisticId,
            isOptimistic: value.isOptimistic,
            timestamp,
            objectCount: value.object !== undefined ? 1 : 0,
          });

          if (value.isOptimistic) {
            this.metricsStore.recordOptimisticUpdate(signature, metadata);
          }

          if (
            value.status === "loaded"
            && !this.recordedSubscriptions.has(subscriptionId)
          ) {
            this.recordedSubscriptions.add(subscriptionId);

            const analysis = this.subscriptionTracker.analyzeEmissions(
              subscriptionId,
            );
            const responseTime = analysis?.loadTime ?? 0;
            const fetchSource = (debugMetadata as any)?.fetchSource;
            const servedFromCache = debugMetadata?.servedFromCache ?? false;
            const objectCount = value.object !== undefined ? 1 : 0;

            if (servedFromCache) {
              this.metricsStore.recordCacheHit(
                signature,
                responseTime,
                metadata,
                objectCount,
              );
            } else {
              this.metricsStore.recordCacheMiss(
                signature,
                responseTime,
                metadata,
                objectCount,
              );
            }
          }

          (observer.next as (v: typeof value) => void)(value);
        },
        error: (err: unknown) => {
          try {
            this.subscriptionTracker.endSubscription(subscriptionId);
            this.recordedSubscriptions.delete(subscriptionId);
            this.actionTracker.clearSubscription(subscriptionId);
          } catch (cleanupError) {
          }
          observer.error(err);
        },
        complete: () => {
          this.subscriptionTracker.endSubscription(subscriptionId);
          this.recordedSubscriptions.delete(subscriptionId);
          this.actionTracker.clearSubscription(subscriptionId);
          observer.complete();
        },
      };

      const unsubscribable = original(
        apiName,
        primaryKey,
        options,
        wrappedObserver,
      );

      // Return wrapped unsubscribable that tracks cleanup
      return {
        unsubscribe: () => {
          try {
            unsubscribable.unsubscribe();
          } finally {
            // Ensure cleanup happens even if unsubscribe throws
            this.subscriptionTracker.endSubscription(subscriptionId);
            this.actionTracker.clearSubscription(subscriptionId);
          }
        },
      };
    };
  }

  private wrapObserveList(
    original: ObservableClient["observeList"],
  ): ObservableClient["observeList"] {
    return ((
      options: Parameters<ObservableClient["observeList"]>[0],
      observer: Parameters<ObservableClient["observeList"]>[1],
    ): Unsubscribable => {
      const apiNameStr = typeof options.type === "string"
        ? options.type
        : options.type.apiName;

      const canonicalWhere = this.observableClient
        ? this.observableClient.canonicalizeWhereClause(options.where ?? {})
        : options.where ?? {};
      const whereClause = JSON.stringify(canonicalWhere);
      const signature = `list:${apiNameStr}:${whereClause}`;

      const metadata: OperationMetadata = {
        objectType: apiNameStr,
        whereClause,
        pageSize: options.pageSize,
      };

      // Check if this subscription will be deduplicated
      const isDeduplicated = this.subscriptionTracker
        .isDeduplicatedSubscription(signature);
      if (isDeduplicated) {
        this.metricsStore.recordDeduplication(signature, metadata);
      }

      const subscriptionId = this.subscriptionTracker.startSubscription(
        signature,
      );

      const wrappedObserver = {
        next: (
          value: ObserveObjectsArgs<ObjectTypeDefinition | InterfaceDefinition>,
        ) => {
          const timestamp = Date.now();
          const debugMetadata = getDebugMetadata(value);

          // Track the emission
          this.subscriptionTracker.recordEmission(
            subscriptionId,
            value.status,
            value.resolvedList !== undefined,
            value.isOptimistic,
            debugMetadata?.optimisticId,
            timestamp,
          );

          this.actionTracker.noteEmission({
            subscriptionId,
            optimisticId: debugMetadata?.optimisticId,
            isOptimistic: value.isOptimistic,
            timestamp,
            objectCount: value.resolvedList ? value.resolvedList.length : 0,
          });

          // Track optimistic updates immediately
          if (value.isOptimistic) {
            this.metricsStore.recordOptimisticUpdate(signature, metadata);
          }

          if (
            value.status === "loaded"
            && !this.recordedSubscriptions.has(subscriptionId)
          ) {
            this.recordedSubscriptions.add(subscriptionId);

            const analysis = this.subscriptionTracker.analyzeEmissions(
              subscriptionId,
            );
            const responseTime = analysis?.loadTime ?? 0;
            const fetchSource = (debugMetadata as any)?.fetchSource;
            const servedFromCache = debugMetadata?.servedFromCache ?? false;
            const objectCount = value.resolvedList
              ? value.resolvedList.length
              : 0;

            if (servedFromCache) {
              this.metricsStore.recordCacheHit(
                signature,
                responseTime,
                metadata,
                objectCount,
              );
            } else {
              this.metricsStore.recordCacheMiss(
                signature,
                responseTime,
                metadata,
                objectCount,
              );
            }
          }

          (observer.next as (v: typeof value) => void)(value);
        },
        error: (err: unknown) => {
          try {
            this.subscriptionTracker.endSubscription(subscriptionId);
            this.recordedSubscriptions.delete(subscriptionId);
            this.actionTracker.clearSubscription(subscriptionId);
          } catch (cleanupError) {
          }
          observer.error(err);
        },
        complete: () => {
          this.subscriptionTracker.endSubscription(subscriptionId);
          this.recordedSubscriptions.delete(subscriptionId);
          this.actionTracker.clearSubscription(subscriptionId);
          observer.complete();
        },
      };

      const unsubscribable = original(
        options,
        wrappedObserver as Parameters<typeof original>[1],
      );

      return {
        unsubscribe: () => {
          try {
            unsubscribable.unsubscribe();
          } finally {
            // Ensure cleanup happens even if unsubscribe throws
            this.subscriptionTracker.endSubscription(subscriptionId);
            this.actionTracker.clearSubscription(subscriptionId);
          }
        },
      };
    }) as ObservableClient["observeList"];
  }

  private wrapApplyAction(
    original: ObservableClient["applyAction"],
  ): ObservableClient["applyAction"] {
    return async (actionDef, args, options) => {
      const actionName = typeof actionDef === "string"
        ? actionDef
        : actionDef.apiName;
      const signature = `action:${actionName}`;

      const metadata: OperationMetadata = {
        actionName,
      };

      // Capture component context for action tracking
      const componentContext = componentContextCapture.getCurrentContext();

      const hasOptimisticUpdate = Boolean(options?.optimisticUpdate);
      const actionId = this.actionTracker.startAction({
        signature,
        actionName,
        metadata,
        optimisticConfigured: hasOptimisticUpdate,
        componentId: componentContext?.id,
      });

      const existingListeners = (options as {
        __debugListeners?: {
          onLayerCreated?(id: unknown): void;
          onLayerCleared?(id: unknown): void;
          onObjectModified?(
            objectType: string,
            primaryKey: string,
            operation: "update" | "create" | "delete",
          ): void;
          onServerObjectsModified?(
            objects: Array<{
              objectType: string;
              primaryKey: string;
              operation: "update" | "create" | "delete";
            }>,
          ): void;
        };
      } | undefined)?.__debugListeners;
      const debugListeners = {
        onLayerCreated: (id: unknown) => {
          this.actionTracker.registerOptimisticLayer(actionId, id);
          existingListeners?.onLayerCreated?.(id);
        },
        onLayerCleared: (id: unknown) => {
          this.actionTracker.handleLayerCleared(id, Date.now());
          existingListeners?.onLayerCleared?.(id);
        },
        onObjectModified: (
          objectType: string,
          primaryKey: string,
          operation: "update" | "create" | "delete",
        ) => {
          if (this.eventTimeline) {
            this.eventTimeline.record({
              type: "OBJECT_MODIFIED",
              actionId,
              objectType,
              primaryKey,
              modifiedBy: "optimistic",
              timestamp: Date.now(),
            });
          }
          existingListeners?.onObjectModified?.(
            objectType,
            primaryKey,
            operation,
          );
        },
        onServerObjectsModified: (
          objects: Array<{
            objectType: string;
            primaryKey: string;
            operation: "update" | "create" | "delete";
          }>,
        ) => {
          if (this.eventTimeline) {
            const timestamp = Date.now();
            for (const obj of objects) {
              this.eventTimeline.record({
                type: "OBJECT_MODIFIED",
                actionId,
                objectType: obj.objectType,
                primaryKey: obj.primaryKey,
                modifiedBy: "server",
                timestamp,
              });
            }
          }
          existingListeners?.onServerObjectsModified?.(objects);
        },
      };

      if (hasOptimisticUpdate) {
        this.metricsStore.recordOptimisticUpdate(signature, metadata);
      }

      const instrumentedOptions = {
        ...(options ?? {}),
        __debugListeners: debugListeners,
      } as Parameters<typeof original>[2];

      try {
        const result = await original(actionDef, args, instrumentedOptions);
        this.actionTracker.markActionSettled({
          actionId,
          succeeded: true,
          completedAt: Date.now(),
        });
        return result;
      } catch (error) {
        this.actionTracker.markActionSettled({
          actionId,
          succeeded: false,
          completedAt: Date.now(),
        });
        throw error;
      }
    };
  }

  private wrapValidateAction(
    original: ObservableClient["validateAction"],
  ): ObservableClient["validateAction"] {
    return async (actionDef, args) => {
      const actionName = typeof actionDef === "string"
        ? actionDef
        : actionDef.apiName;
      const signature = `validate:${actionName}`;
      const metadata: OperationMetadata = { actionName };
      const start = Date.now();

      try {
        return await original(actionDef, args);
      } finally {
        const duration = Date.now() - start;
        this.metricsStore.recordActionValidation(
          signature,
          duration,
          metadata,
        );
      }
    };
  }
}
