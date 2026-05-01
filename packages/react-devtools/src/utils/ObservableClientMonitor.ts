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
  ActionEditResponse,
  InterfaceDefinition,
  ObjectTypeDefinition,
} from "@osdk/api";
import type {
  CacheSnapshot,
  ObservableClient,
  ObserveObjectCallbackArgs,
  ObserveObjectsCallbackArgs,
  Unsubscribable,
} from "@osdk/client/unstable-do-not-use";
import type { MockManager } from "../mocking/MockManager.js";
import { MetricsStore } from "../store/MetricsStore.js";
import type {
  ActionError,
  ObservableDebugMetadata,
  OperationMetadata,
} from "../types/index.js";
import { ActionLifecycleTracker } from "./ActionLifecycleTracker.js";
import type { ComponentContext } from "./ComponentContextCapture.js";
import { componentContextCapture } from "./ComponentContextCapture.js";
import type {
  ComponentHookBinding,
  ComponentQueryRegistry,
  QueryParams,
} from "./ComponentQueryRegistry.js";
import type { EventTimeline } from "./EventTimeline.js";
import type { LinkTraversalTracker } from "./LinkTraversalTracker.js";
import type { PropertyAccessTracker } from "./PropertyAccessTracker.js";
import { SubscriptionTracker } from "./SubscriptionTracker.js";

interface OsdkObject {
  $apiName: string;
  $primaryKey: string | number;
  [key: string]: unknown;
}

interface ObserveLinksObserver {
  next(
    value: ObserveObjectsCallbackArgs<
      ObjectTypeDefinition | InterfaceDefinition
    >,
  ): void;
  error(err: unknown): void;
  complete(): void;
}

interface AggregationObserver {
  next(value: {
    result: unknown;
    status: string;
    lastUpdated: number;
    error?: Error;
  }): void;
  error(err: unknown): void;
  complete(): void;
}

interface ExtendedClientMethods {
  observeLinks?(
    sourceObject: OsdkObject,
    linkName: string,
    options: Record<string, unknown>,
    observer: ObserveLinksObserver,
  ): Unsubscribable;
  getCacheSnapshot?(): Promise<CacheSnapshot>;
  invalidateAll?(): Promise<void>;
  invalidateObjects?(objects: unknown): Promise<void>;
  invalidateObjectType?(objectType: string): Promise<void>;
}

type ExtendedObservableClient = ObservableClient & ExtendedClientMethods;

interface MockActionEdits {
  type: "edits";
  addedObjects?: Array<{ objectType: string; primaryKey: string }>;
  modifiedObjects?: Array<{ objectType: string; primaryKey: string }>;
  deletedObjects?: Array<{ objectType: string; primaryKey: string }>;
  editedObjectTypes?: string[];
}

interface ExperimentalStore {
  invalidateObject?(
    objectType: string,
    primaryKey: string,
  ): Promise<void>;
  invalidateObjectType?(objectType: string): Promise<void>;
}

function getDebugMetadata(value: unknown): ObservableDebugMetadata | undefined {
  if (
    typeof value === "object"
    && value != null
    && "__debugMetadata" in value
  ) {
    return (value as { __debugMetadata: ObservableDebugMetadata })
      .__debugMetadata;
  }
  return undefined;
}

function isMockActionEdits(value: unknown): value is MockActionEdits {
  return (
    typeof value === "object"
    && value != null
    && "type" in value
    && (value as Record<string, unknown>).type === "edits"
  );
}

function hasExperimentalStore(
  client: ObservableClient,
): client is ObservableClient & { __experimentalStore: ExperimentalStore } {
  return (
    "__experimentalStore" in client
    && typeof (client as Record<string, unknown>).__experimentalStore
      === "object"
    && (client as Record<string, unknown>).__experimentalStore != null
  );
}

export interface ObservableClientMonitorConfig {
  metricsStore?: MetricsStore;
  componentRegistry: ComponentQueryRegistry;
  linkTraversalTracker: LinkTraversalTracker;
  propertyAccessTracker: PropertyAccessTracker;
  eventTimeline?: EventTimeline;
  captureComponentContext?: boolean;
  captureQueryParams?: boolean;
  cleanupIntervalMs?: number;
  cacheThresholdMs?: number;
  mockManager?: MockManager;
}

export class ObservableClientMonitor {
  private readonly metricsStore: MetricsStore;
  private readonly subscriptionTracker: SubscriptionTracker;
  private readonly signatureLastRecorded = new Map<string, number>();
  private readonly subscriptionHasLoaded = new Map<string, boolean>();
  private readonly DEDUP_WINDOW_MS = 100;
  private readonly actionTracker: ActionLifecycleTracker;
  private readonly cleanupIntervalMs: number;
  private cleanupIntervalId: ReturnType<typeof setInterval> | null = null;
  private componentRegistry: ComponentQueryRegistry;
  private linkTraversalTracker: LinkTraversalTracker;
  private propertyAccessTracker: PropertyAccessTracker;
  private eventTimeline: EventTimeline | null;
  private captureComponentContext: boolean;
  private captureQueryParams: boolean;
  private mockManager: MockManager | null;
  private wrappedClient: ObservableClient | null = null;

  constructor(config: ObservableClientMonitorConfig) {
    this.metricsStore = config.metricsStore ?? new MetricsStore();
    this.subscriptionTracker = new SubscriptionTracker(
      config.cacheThresholdMs ?? 10,
    );
    this.actionTracker = new ActionLifecycleTracker(
      this.metricsStore,
      config.eventTimeline,
    );
    this.cleanupIntervalMs = config.cleanupIntervalMs ?? 60000;
    this.cleanupIntervalId = setInterval(
      () => {
        this.subscriptionTracker.cleanup();
        this.pruneSignatureLastRecorded();
      },
      this.cleanupIntervalMs,
    );

    this.componentRegistry = config.componentRegistry;
    this.linkTraversalTracker = config.linkTraversalTracker;
    this.propertyAccessTracker = config.propertyAccessTracker;
    this.eventTimeline = config.eventTimeline ?? null;
    this.captureComponentContext = config.captureComponentContext ?? true;
    this.captureQueryParams = config.captureQueryParams ?? true;
    this.mockManager = config.mockManager ?? null;
  }

  wrapClient(client: ObservableClient): ObservableClient {
    this.wrappedClient = client;

    // Suppress the client's internal BrowserLogger. It writes to console.*
    // which our ConsoleLogStore intercepts, flooding the devtools console tab
    // with hundreds of internal debug logs. The devtools monitoring proxy
    // already captures all the same operations through its own instrumentation.
    if (hasExperimentalStore(client)) {
      (client.__experimentalStore as { logger: unknown }).logger = undefined;
    }

    const methodCache = new Map<string | symbol, unknown>();

    return new Proxy(client, {
      get: (target, prop: string | symbol) => {
        const cached = methodCache.get(prop);
        if (cached !== undefined) {
          return cached;
        }

        const ext = target as ExtendedObservableClient;
        let wrapped: unknown;

        if (prop === "observeObject") {
          wrapped = this.wrapObserveObject(target.observeObject.bind(target));
        } else if (prop === "observeList") {
          wrapped = this.wrapObserveList(target.observeList.bind(target));
        } else if (prop === "observeAggregation") {
          wrapped = this.wrapObserveAggregation(
            // eslint-disable-next-line @typescript-eslint/no-deprecated
            target.observeAggregation.bind(target),
          );
        } else if (prop === "observeLinks" && ext.observeLinks) {
          wrapped = this.wrapObserveLinks(ext.observeLinks.bind(ext));
        } else if (prop === "applyAction") {
          wrapped = this.wrapApplyAction(target.applyAction.bind(target));
        } else if (prop === "validateAction") {
          wrapped = this.wrapValidateAction(target.validateAction.bind(target));
        } else if (prop === "getCacheSnapshot") {
          wrapped = ext.getCacheSnapshot?.bind(ext);
        } else if (prop === "invalidateAll") {
          wrapped = ext.invalidateAll?.bind(ext);
        } else if (prop === "invalidateObjects") {
          wrapped = ext.invalidateObjects?.bind(ext);
        } else if (prop === "invalidateObjectType") {
          wrapped = ext.invalidateObjectType?.bind(ext);
        }

        if (wrapped !== undefined) {
          methodCache.set(prop, wrapped);
          return wrapped;
        }

        const value = Reflect.get(target, prop);
        if (typeof value === "function") {
          const bound = value.bind(target);
          methodCache.set(prop, bound);
          return bound;
        }
        return value;
      },
    }) as ObservableClient;
  }

  private recordMockHitIfNeeded(value: unknown, signature: string): void {
    const metadata = getDebugMetadata(value);
    if (metadata?.servedFromMock && this.eventTimeline) {
      this.eventTimeline.record({
        type: "MOCK_HIT",
        subscriptionId: signature,
        timestamp: Date.now(),
        mockId: metadata.mockId,
      });
    }
  }

  private recordEmissionEvent(
    signature: string,
    objectKey?: string,
  ): void {
    if (this.eventTimeline) {
      this.eventTimeline.record({
        type: "EMISSION",
        subscriptionId: signature,
        objectKey,
        timestamp: Date.now(),
        isOptimistic: false,
      });
    }
  }

  private classifyCacheEvent(
    signature: string,
    subscriptionId: string,
    servedFromCache: boolean,
  ): "hit" | "miss" | "revalidation" | "skip" {
    const lastRecorded = this.signatureLastRecorded.get(signature) ?? 0;
    const now = Date.now();

    if (now - lastRecorded <= this.DEDUP_WINDOW_MS) {
      return "skip";
    }

    this.signatureLastRecorded.set(signature, now);

    if (servedFromCache) {
      return "hit";
    }
    if (this.subscriptionHasLoaded.has(subscriptionId)) {
      return "revalidation";
    }
    return "miss";
  }

  private processEmission(
    subscriptionId: string,
    signature: string,
    metadata: OperationMetadata,
    status: string,
    hasData: boolean,
    isOptimistic: boolean,
    objectCount: number,
    value: unknown,
    objectKey?: string,
  ): void {
    const timestamp = Date.now();
    const debugMetadata = getDebugMetadata(value);

    this.subscriptionTracker.recordEmission(
      subscriptionId,
      status,
      hasData,
      isOptimistic,
      debugMetadata?.optimisticId,
      timestamp,
    );

    this.actionTracker.noteEmission({
      subscriptionId,
      optimisticId: debugMetadata?.optimisticId,
      isOptimistic,
      timestamp,
      objectCount,
    });

    if (isOptimistic) {
      this.metricsStore.recordOptimisticUpdate(signature, metadata);
    }

    if (status === "loaded") {
      const classification = this.classifyCacheEvent(
        signature,
        subscriptionId,
        debugMetadata?.servedFromCache ?? false,
      );

      if (classification !== "skip") {
        const analysis = this.subscriptionTracker.analyzeEmissions(
          subscriptionId,
        );
        const responseTime = analysis?.loadTime ?? 0;
        const effectiveClassification = analysis?.wasCached
          ? "hit"
          : classification;

        if (effectiveClassification === "hit") {
          this.metricsStore.recordCacheHit(
            signature,
            responseTime,
            metadata,
            objectCount,
          );
        } else if (effectiveClassification === "revalidation") {
          this.metricsStore.recordRevalidation(
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

        this.subscriptionHasLoaded.set(subscriptionId, true);
      }
    }

    this.recordMockHitIfNeeded(value, signature);
    this.recordEmissionEvent(signature, objectKey);
  }

  private cleanupSubscription(subscriptionId: string): void {
    this.subscriptionTracker.endSubscription(subscriptionId);
    this.actionTracker.clearSubscription(subscriptionId);
    this.subscriptionHasLoaded.delete(subscriptionId);
  }

  private createCleanupUnsubscribable(
    original: Unsubscribable,
    subscriptionId: string,
  ): Unsubscribable {
    return {
      unsubscribe: () => {
        try {
          original.unsubscribe();
        } finally {
          this.cleanupSubscription(subscriptionId);
        }
      },
    };
  }

  private setupObservation(params: {
    signature: string;
    metadata: OperationMetadata;
    hookType: ComponentHookBinding["hookType"];
    queryParams: QueryParams;
  }): {
    componentContext: ComponentContext | null;
    subscriptionId: string;
  } {
    const componentContext = this.captureComponentContext
      ? componentContextCapture.captureNow()
      : null;

    if (componentContext && this.captureQueryParams) {
      this.componentRegistry.registerBinding({
        componentId: componentContext.id,
        componentName: componentContext.name,
        componentDisplayName: componentContext.displayName,
        hookType: params.hookType,
        hookIndex: 0,
        querySignature: params.signature,
        queryParams: params.queryParams,
      });
    }

    const isDeduplicated = this.subscriptionTracker
      .isDeduplicatedSubscription(params.signature);
    if (isDeduplicated) {
      this.metricsStore.recordDeduplication(params.signature, params.metadata);
    }

    const subscriptionId = this.subscriptionTracker.startSubscription(
      params.signature,
    );

    return { componentContext, subscriptionId };
  }

  private createCleanupObserverCallbacks(
    subscriptionId: string,
    componentContext: { id: string } | null,
    observer: { error(err: unknown): void; complete(): void },
  ): { error(err: unknown): void; complete(): void } {
    return {
      error: (err: unknown) => {
        try {
          this.cleanupSubscription(subscriptionId);
        } catch (_cleanupError) {
        }
        if (componentContext) {
          this.componentRegistry.unregisterComponent(componentContext.id);
        }
        observer.error(err);
      },
      complete: () => {
        this.cleanupSubscription(subscriptionId);
        if (componentContext) {
          this.componentRegistry.unregisterComponent(componentContext.id);
        }
        observer.complete();
      },
    };
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

      const { componentContext, subscriptionId } = this.setupObservation({
        signature,
        metadata,
        hookType: "useOsdkObject",
        queryParams: {
          type: "object",
          objectType: apiNameStr,
          primaryKey: String(primaryKey),
        },
      });

      const objectKey = `${apiNameStr}:${primaryKey}`;

      const mockManager = this.mockManager;
      const cleanupCallbacks = this.createCleanupObserverCallbacks(
        subscriptionId,
        componentContext,
        observer,
      );

      const wrappedObserver = {
        next: (value: ObserveObjectCallbackArgs<T>) => {
          if (mockManager) {
            const mock = mockManager.findMock({
              type: "object",
              objectType: apiNameStr,
              primaryKey: String(primaryKey),
            });

            if (mock) {
              if (mock.response.type === "error") {
                (observer.next as (v: ObserveObjectCallbackArgs<T>) => void)({
                  ...value,
                  status: "error",
                  object: undefined,
                  isOptimistic: false,
                  error: new Error(mock.response.error),
                } as ObserveObjectCallbackArgs<T>);
                return;
              }

              if (mock.response.type === "object") {
                (observer.next as (v: ObserveObjectCallbackArgs<T>) => void)({
                  ...value,
                  status: "loaded",
                  object: mock.response.object,
                  isOptimistic: false,
                } as ObserveObjectCallbackArgs<T>);
                return;
              }
            }
          }

          this.processEmission(
            subscriptionId,
            signature,
            metadata,
            value.status,
            value.object !== undefined,
            value.isOptimistic,
            value.object !== undefined ? 1 : 0,
            value,
            objectKey,
          );

          if (value.object && componentContext) {
            const wrapped = this.propertyAccessTracker.wrapObject(
              value.object,
              objectKey,
              componentContext.id,
            );
            (value as { object: typeof wrapped }).object = wrapped;
          }

          (observer.next as (v: ObserveObjectCallbackArgs<T>) => void)(value);
        },
        ...cleanupCallbacks,
      };

      const unsubscribable = original(
        apiName,
        primaryKey,
        options,
        wrappedObserver,
      );

      return this.createCleanupUnsubscribable(unsubscribable, subscriptionId);
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

      const canonicalWhere = this.wrappedClient
        ? this.wrappedClient.canonicalizeWhereClause(options.where ?? {})
        : options.where ?? {};
      const whereClause = JSON.stringify(canonicalWhere);

      const signature = (options as { __devtoolsSignature?: string })
        .__devtoolsSignature
        ?? `useOsdkObjects:${apiNameStr}:${whereClause}:${
          JSON.stringify(options.orderBy)
        }`;

      const metadata: OperationMetadata = {
        objectType: apiNameStr,
        whereClause,
        pageSize: options.pageSize,
      };

      const { componentContext, subscriptionId } = this.setupObservation({
        signature,
        metadata,
        hookType: "useOsdkObjects",
        queryParams: {
          type: "list",
          objectType: apiNameStr,
          where: options.where,
          orderBy: options.orderBy,
          pageSize: options.pageSize,
        },
      });

      const mockManager = this.mockManager;
      const cleanupCallbacks = this.createCleanupObserverCallbacks(
        subscriptionId,
        componentContext,
        observer,
      );

      const wrappedObserver = {
        next: (
          value: ObserveObjectsCallbackArgs<
            ObjectTypeDefinition | InterfaceDefinition
          >,
        ) => {
          if (mockManager) {
            const mock = mockManager.findMock({
              type: "list",
              objectType: apiNameStr,
              whereClause: options.where as
                | Record<string, unknown>
                | undefined,
            });

            if (mock) {
              if (mock.response.type === "error") {
                (observer.next as (v: typeof value) => void)(
                  {
                    ...value,
                    status: "error",
                    resolvedList: [],
                    isOptimistic: false,
                    error: new Error(mock.response.error),
                  } as typeof value,
                );
                return;
              }

              if (mock.response.type === "list") {
                (observer.next as (v: typeof value) => void)(
                  {
                    ...value,
                    status: "loaded",
                    resolvedList: mock.response.list,
                    isOptimistic: false,
                  } as typeof value,
                );
                return;
              }
            }
          }

          this.processEmission(
            subscriptionId,
            signature,
            metadata,
            value.status,
            value.resolvedList !== undefined,
            value.isOptimistic,
            value.resolvedList ? value.resolvedList.length : 0,
            value,
          );

          if (value.resolvedList && componentContext) {
            const wrappedList = value.resolvedList.map(
              (obj, index: number) => {
                const osdkObj = obj as OsdkObject;
                const objectKey = `${apiNameStr}:${
                  osdkObj.$primaryKey || index
                }`;
                return this.propertyAccessTracker.wrapObject(
                  obj,
                  objectKey,
                  componentContext.id,
                );
              },
            );
            (value as { resolvedList: typeof wrappedList }).resolvedList =
              wrappedList;
          }

          (observer.next as (v: typeof value) => void)(value);
        },
        ...cleanupCallbacks,
      };

      const unsubscribable = original(
        options,
        wrappedObserver as Parameters<typeof original>[1],
      );

      return this.createCleanupUnsubscribable(unsubscribable, subscriptionId);
    }) as ObservableClient["observeList"];
  }

  private wrapObserveAggregation(
    original: ObservableClient["observeAggregation"],
  ): ObservableClient["observeAggregation"] {
    return ((
      options: Parameters<ObservableClient["observeAggregation"]>[0],
      observer: AggregationObserver,
    ): Unsubscribable | Promise<Unsubscribable> => {
      const apiNameStr = typeof options.type === "string"
        ? options.type
        : options.type.apiName;

      const signature = `useOsdkAggregation:${apiNameStr}:${
        JSON.stringify(options.where)
      }:${JSON.stringify(options.aggregate)}`;

      const metadata: OperationMetadata = {
        objectType: apiNameStr,
        whereClause: JSON.stringify(options.where ?? {}),
      };

      const { componentContext, subscriptionId } = this.setupObservation({
        signature,
        metadata,
        hookType: "useOsdkAggregation",
        queryParams: {
          type: "aggregation",
          objectType: apiNameStr,
          where: options.where,
          aggregate: options.aggregate,
        },
      });

      const mockManager = this.mockManager;
      const cleanupCallbacks = this.createCleanupObserverCallbacks(
        subscriptionId,
        componentContext,
        observer,
      );

      const wrappedObserver: AggregationObserver = {
        next: (value) => {
          if (mockManager) {
            const mock = mockManager.findMock({
              type: "list",
              objectType: apiNameStr,
              whereClause: options.where as
                | Record<string, unknown>
                | undefined,
            });

            if (mock) {
              if (mock.response.type === "error") {
                observer.next({
                  result: undefined,
                  status: "error",
                  lastUpdated: Date.now(),
                  error: new Error(mock.response.error),
                });
                return;
              }

              if (
                mock.response.type === "list"
                || mock.response.type === "object"
              ) {
                const mockData = mock.response.type === "list"
                  ? mock.response.list
                  : mock.response.object;
                observer.next({
                  result: mockData,
                  status: "loaded",
                  lastUpdated: Date.now(),
                });
                return;
              }
            }
          }

          this.processEmission(
            subscriptionId,
            signature,
            metadata,
            value.status,
            value.result !== undefined,
            false,
            value.result !== undefined ? 1 : 0,
            value,
          );

          observer.next(value);
        },
        ...cleanupCallbacks,
      };

      const result = original(
        options,
        wrappedObserver as Parameters<typeof original>[1],
      );

      if (result instanceof Promise) {
        return result.then(unsub =>
          this.createCleanupUnsubscribable(unsub, subscriptionId)
        );
      }

      return this.createCleanupUnsubscribable(result, subscriptionId);
    }) as ObservableClient["observeAggregation"];
  }

  private wrapObserveLinks(
    original: NonNullable<ExtendedObservableClient["observeLinks"]>,
  ): ExtendedObservableClient["observeLinks"] {
    return ((
      sourceObject: OsdkObject,
      linkName: string,
      options: Record<string, unknown>,
      observer: ObserveLinksObserver,
    ): Unsubscribable => {
      const componentContext = this.captureComponentContext
        ? componentContextCapture.captureNow()
        : null;

      const sourceObjectKey =
        `${sourceObject.$apiName}:${sourceObject.$primaryKey}`;
      const signature = `links:${sourceObjectKey}:${linkName}`;

      if (componentContext && this.captureQueryParams) {
        this.componentRegistry.registerBinding({
          componentId: componentContext.id,
          componentName: componentContext.name,
          componentDisplayName: componentContext.displayName,
          hookType: "useLinks",
          hookIndex: 0,
          querySignature: signature,
          queryParams: {
            type: "links",
            sourceObject: sourceObjectKey,
            linkName,
          },
        });
      }

      this.linkTraversalTracker.recordTraversal({
        sourceObjectType: sourceObject.$apiName,
        sourceObjectKey: String(sourceObject.$primaryKey),
        linkName,
        timestamp: Date.now(),
        componentId: componentContext?.id,
        subscriptionId: signature,
      });

      const wrappedObserver: ObserveLinksObserver = {
        next: (
          value: ObserveObjectsCallbackArgs<
            ObjectTypeDefinition | InterfaceDefinition
          >,
        ) => {
          this.recordMockHitIfNeeded(value, signature);
          this.recordEmissionEvent(signature);

          if (value.resolvedList && componentContext) {
            const linkedObjects: Array<
              { objectType: string; primaryKey: string }
            > = [];
            const wrappedList = value.resolvedList.map((obj) => {
              const osdkObj = obj as OsdkObject;
              linkedObjects.push({
                objectType: osdkObj.$apiName,
                primaryKey: String(osdkObj.$primaryKey),
              });
              return this.propertyAccessTracker.wrapObject(
                obj,
                `${osdkObj.$apiName}:${osdkObj.$primaryKey}`,
                componentContext.id,
              );
            });
            this.linkTraversalTracker.recordLinkedObjects({
              subscriptionId: signature,
              linkName,
              objects: linkedObjects,
            });
            (value as { resolvedList: typeof wrappedList }).resolvedList =
              wrappedList;
          }

          observer.next(value);
        },
        error: (err: unknown) => observer.error(err),
        complete: () => observer.complete(),
      };

      return original(sourceObject, linkName, options, wrappedObserver);
    }) as ExtendedObservableClient["observeLinks"];
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

      if (this.mockManager) {
        const mock = this.mockManager.findMock({
          type: "action",
          actionName,
        });

        if (mock) {
          if (mock.delay) {
            await new Promise((resolve) => setTimeout(resolve, mock.delay));
          }

          if (mock.response.type === "passthrough") {
            let actualArgs = args;
            if (mock.usePayload && mock.payload) {
              try {
                const payloadData = JSON.parse(mock.payload);
                actualArgs = payloadData.parameters || args;
              } catch {
              }
            }

            try {
              const result = await original(actionDef, actualArgs, options);
              return result;
            } catch (error) {
              this.captureActionError(actionName, error, actualArgs);
              throw error;
            }
          } else if (mock.response.type === "error") {
            throw new Error(mock.response.error);
          } else if (mock.response.type === "action") {
            const mockResult = mock.response.result;

            this.injectMockedObjectsFromActionResult(mock.id, mockResult);

            const store = this.wrappedClient
                && hasExperimentalStore(this.wrappedClient)
              ? this.wrappedClient.__experimentalStore
              : undefined;

            if (store && isMockActionEdits(mockResult)) {
              const promises: Promise<void>[] = [];

              const allObjects = [
                ...(mockResult.addedObjects || []),
                ...(mockResult.modifiedObjects || []),
                ...(mockResult.deletedObjects || []),
              ];
              for (const obj of allObjects) {
                if (store.invalidateObject) {
                  promises.push(
                    store.invalidateObject(obj.objectType, obj.primaryKey),
                  );
                }
              }

              for (const objectType of (mockResult.editedObjectTypes || [])) {
                if (store.invalidateObjectType) {
                  promises.push(store.invalidateObjectType(objectType));
                }
              }

              await Promise.allSettled(promises);
            }

            return mockResult as ActionEditResponse;
          }
        }
      }

      const componentContext = componentContextCapture.captureNow();
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
        this.captureActionError(actionName, error, args);
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

  private captureActionError(
    actionName: string,
    error: unknown,
    args: unknown,
  ): void {
    this.metricsStore.recordActionError({
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      actionType: actionName,
      timestamp: Date.now(),
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      parameters: args as Record<string, unknown>,
      validationErrors: (error as Record<string, unknown>)
        ?.validationErrors as ActionError["validationErrors"],
    });
  }

  private injectMockedObjectsFromActionResult(
    mockId: string,
    mockResult: unknown,
  ): void {
    if (!this.mockManager || !mockResult) {
      return;
    }

    const objects = this.extractObjectsFromMockResult(mockResult);

    for (const obj of objects) {
      const objectType = obj.$objectType ?? obj.$apiName;
      const primaryKey = obj.$primaryKey ?? obj.id;

      if (
        typeof objectType === "string"
        && (typeof primaryKey === "string" || typeof primaryKey === "number")
      ) {
        this.mockManager.injectMockedObjectToCache(
          mockId,
          objectType,
          primaryKey,
          obj,
        );
      }
    }
  }

  private extractObjectsFromMockResult(
    mockResult: unknown,
  ): Array<Record<string, unknown>> {
    const objects: Array<Record<string, unknown>> = [];

    if (!mockResult || typeof mockResult !== "object") {
      return objects;
    }

    const result = mockResult as Record<string, unknown>;

    if (result.$objectType || result.$apiName) {
      objects.push(result);
      return objects;
    }

    if (Array.isArray(mockResult)) {
      for (const item of mockResult) {
        if (
          item && typeof item === "object"
          && (item.$objectType || item.$apiName)
        ) {
          objects.push(item);
        }
      }
      return objects;
    }

    if (Array.isArray(result.addedObjects)) {
      for (const item of result.addedObjects) {
        if (item && typeof item === "object") {
          objects.push(item as Record<string, unknown>);
        }
      }
    }
    if (Array.isArray(result.modifiedObjects)) {
      for (const item of result.modifiedObjects) {
        if (item && typeof item === "object") {
          objects.push(item as Record<string, unknown>);
        }
      }
    }

    return objects;
  }

  getCacheSnapshot(): Promise<CacheSnapshot> {
    if (!this.wrappedClient) {
      return Promise.reject(new Error("No wrapped client available"));
    }
    const ext = this.wrappedClient as ExtendedObservableClient;
    if (!ext.getCacheSnapshot) {
      return Promise.reject(
        new Error("getCacheSnapshot not available on client"),
      );
    }
    return ext.getCacheSnapshot();
  }

  invalidateObjects(objects: unknown): Promise<void> {
    if (!this.wrappedClient) {
      return Promise.reject(new Error("No wrapped client available"));
    }
    const ext = this.wrappedClient as ExtendedObservableClient;
    if (!ext.invalidateObjects) {
      return Promise.reject(
        new Error("invalidateObjects not available on client"),
      );
    }
    return ext.invalidateObjects(objects);
  }

  invalidateObjectType(objectType: string): Promise<void> {
    if (!this.wrappedClient) {
      return Promise.reject(new Error("No wrapped client available"));
    }
    const ext = this.wrappedClient as ExtendedObservableClient;
    if (!ext.invalidateObjectType) {
      return Promise.reject(
        new Error("invalidateObjectType not available on client"),
      );
    }
    return ext.invalidateObjectType(objectType);
  }

  invalidateAll(): Promise<void> {
    if (!this.wrappedClient) {
      return Promise.reject(new Error("No wrapped client available"));
    }
    const ext = this.wrappedClient as ExtendedObservableClient;
    if (!ext.invalidateAll) {
      return Promise.reject(
        new Error("invalidateAll not available on client"),
      );
    }
    return ext.invalidateAll();
  }

  private pruneSignatureLastRecorded(): void {
    const now = Date.now();
    for (const [key, timestamp] of this.signatureLastRecorded) {
      if (now - timestamp > this.cleanupIntervalMs) {
        this.signatureLastRecorded.delete(key);
      }
    }
  }

  dispose(): void {
    try {
      this.signatureLastRecorded.clear();

      if (
        "dispose" in this.metricsStore
        && typeof this.metricsStore.dispose === "function"
      ) {
        this.metricsStore.dispose();
      }

      this.actionTracker.dispose();
    } finally {
      if (this.cleanupIntervalId) {
        clearInterval(this.cleanupIntervalId);
        this.cleanupIntervalId = null;
      }
    }
  }
}
