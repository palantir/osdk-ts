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
  CacheSnapshot,
  ObservableClient,
  ObserveObjectArgs,
  ObserveObjectsArgs,
  Unsubscribable,
} from "@osdk/client/unstable-do-not-use";
import type { MockManager } from "../mocking/MockManager.js";
import type { MetricsStore } from "../store/MetricsStore.js";
import type { ActionError } from "../types/index.js";
import { componentContextCapture } from "./ComponentContextCapture.js";
import type { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";
import type { EventTimeline } from "./EventTimeline.js";
import type { LinkTraversalTracker } from "./LinkTraversalTracker.js";
import { ObservableClientMonitor } from "./ObservableClientInterceptor.js";
import type { PropertyAccessTracker } from "./PropertyAccessTracker.js";

export interface EnhancedMonitorConfig {
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

function getDebugMetadata(value: unknown): any {
  if (
    typeof value === "object"
    && value != null
    && "__debugMetadata" in value
  ) {
    return (value as any).__debugMetadata;
  }
  return undefined;
}

export class EnhancedObservableClientMonitor {
  private baseMonitor: ObservableClientMonitor;
  private componentRegistry: ComponentQueryRegistry;
  private linkTraversalTracker: LinkTraversalTracker;
  private propertyAccessTracker: PropertyAccessTracker;
  private eventTimeline: EventTimeline | null;
  private captureComponentContext: boolean;
  private captureQueryParams: boolean;
  private mockManager: MockManager | null;
  private wrappedClient: ObservableClient | null = null;

  constructor(config: EnhancedMonitorConfig) {
    this.baseMonitor = new ObservableClientMonitor(
      config.metricsStore,
      config.cleanupIntervalMs,
      config.cacheThresholdMs,
      config.eventTimeline,
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
    const baseWrapped = this.baseMonitor.wrapClient(client);

    // Store reference to the wrapped client for accessing Store
    this.wrappedClient = baseWrapped;

    return new Proxy(baseWrapped, {
      get: (target, prop: string | symbol) => {
        if (prop === "observeObject") {
          return this.wrapObserveObject(target.observeObject.bind(target));
        }
        if (prop === "observeList") {
          return this.wrapObserveList(target.observeList.bind(target));
        }
        if (prop === "observeLinks" && (target as any).observeLinks) {
          return this.wrapObserveLinks(
            (target as any).observeLinks.bind(target),
          );
        }
        if (prop === "applyAction") {
          return this.wrapApplyAction(target.applyAction.bind(target));
        }
        if (prop === "registerActionHook") {
          return this.wrapRegisterActionHook(
            (target as any).registerActionHook?.bind(target),
          );
        }
        if (prop === "registerObjectHook") {
          return this.wrapRegisterObjectHook(
            (target as any).registerObjectHook?.bind(target),
          );
        }
        if (prop === "registerListHook") {
          return this.wrapRegisterListHook(
            (target as any).registerListHook?.bind(target),
          );
        }
        if (prop === "registerLinkHook") {
          return this.wrapRegisterLinkHook(
            (target as any).registerLinkHook?.bind(target),
          );
        }
        if (prop === "registerObjectSetHook") {
          return this.wrapRegisterObjectSetHook(
            (target as any).registerObjectSetHook?.bind(target),
          );
        }
        if (prop === "getCacheSnapshot") {
          return (target as any).getCacheSnapshot?.bind(target);
        }
        if (prop === "invalidateAll") {
          return (target as any).invalidateAll?.bind(target);
        }
        if (prop === "invalidateObjects") {
          return (target as any).invalidateObjects?.bind(target);
        }
        if (prop === "invalidateObjectType") {
          return (target as any).invalidateObjectType?.bind(target);
        }
        return (target as any)[prop];
      },
    }) as ObservableClient;
  }

  private wrapObserveObject<T extends ObjectTypeDefinition>(
    original: ObservableClient["observeObject"],
  ): ObservableClient["observeObject"] {
    return (apiName, primaryKey, options, observer): Unsubscribable => {
      const componentContext = this.captureComponentContext
        ? componentContextCapture.getCurrentContext()
        : null;

      const apiNameStr = typeof apiName === "string"
        ? apiName
        : apiName.apiName;
      const signature = `object:${apiNameStr}:${String(primaryKey)}`;

      let bindingId: string | null = null;
      if (componentContext && this.captureQueryParams) {
        bindingId = this.componentRegistry.registerBinding({
          componentId: componentContext.id,
          componentName: componentContext.name,
          componentDisplayName: componentContext.displayName,
          hookType: "useOsdkObject",
          hookIndex: 0,
          querySignature: signature,
          queryParams: {
            type: "object",
            objectType: apiNameStr,
            primaryKey: String(primaryKey),
          },
          fiberNode: componentContext.fiberNode,
        });
      }

      // No longer check for mocks here - let Store's MockLayer handle it
      // The mock will be served from the cache layer if configured

      const wrappedObserver = {
        next: (value: ObserveObjectArgs<T>) => {
          // Check if this was served from mock
          const metadata = getDebugMetadata(value);
          if (metadata?.servedFromMock) {
            // Log to timeline as mock event
            if (this.eventTimeline) {
              this.eventTimeline.record({
                type: "MOCK_HIT",
                subscriptionId: signature,
                timestamp: Date.now(),
                mockId: metadata.mockId,
              });
            }
          }

          // Record EMISSION event to timeline
          if (this.eventTimeline) {
            const objectKey = `${apiNameStr}:${primaryKey}`;
            this.eventTimeline.record({
              type: "EMISSION",
              subscriptionId: signature,
              objectKey,
              timestamp: Date.now(),
              isOptimistic: false,
            });
          }

          if (value.object && componentContext) {
            const objectKey = `${apiNameStr}:${primaryKey}`;
            (value as any).object = this.propertyAccessTracker.wrapObject(
              value.object as any,
              objectKey,
              componentContext.id,
            );
          }

          observer.next(value as any);
        },
        error: (err: unknown) => {
          if (componentContext) {
            this.componentRegistry.unregisterComponent(componentContext.id);
          }
          observer.error(err);
        },
        complete: () => {
          if (componentContext) {
            this.componentRegistry.unregisterComponent(componentContext.id);
          }
          observer.complete();
        },
      };

      return original(
        apiName,
        primaryKey,
        options,
        wrappedObserver as typeof observer,
      );
    };
  }

  private wrapObserveList(
    original: ObservableClient["observeList"],
  ): ObservableClient["observeList"] {
    return ((options, observer): Unsubscribable => {
      const componentContext = this.captureComponentContext
        ? componentContextCapture.getCurrentContext()
        : null;

      const apiNameStr = typeof options.type === "string"
        ? options.type
        : options.type.apiName;

      const whereClause = JSON.stringify(options.where ?? {});
      const signature = `list:${apiNameStr}:${whereClause}`;

      let bindingId: string | null = null;
      if (componentContext && this.captureQueryParams) {
        bindingId = this.componentRegistry.registerBinding({
          componentId: componentContext.id,
          componentName: componentContext.name,
          componentDisplayName: componentContext.displayName,
          hookType: "useOsdkObjects",
          hookIndex: 0,
          querySignature: signature,
          queryParams: {
            type: "list",
            objectType: apiNameStr,
            where: options.where,
            orderBy: options.orderBy,
            pageSize: options.pageSize,
          },
          fiberNode: componentContext.fiberNode,
        });
      }

      // No longer check for mocks here - let Store's MockLayer handle it
      // The mock will be served from the cache layer if configured

      const wrappedObserver = {
        next: (
          value: ObserveObjectsArgs<
            ObjectTypeDefinition | InterfaceDefinition
          >,
        ) => {
          // Check if this was served from mock
          const metadata = getDebugMetadata(value);
          if (metadata?.servedFromMock) {
            // Log to timeline as mock event
            if (this.eventTimeline) {
              this.eventTimeline.record({
                type: "MOCK_HIT",
                subscriptionId: signature,
                timestamp: Date.now(),
                mockId: metadata.mockId,
              });
            }
          }

          // Record EMISSION event to timeline
          if (this.eventTimeline) {
            this.eventTimeline.record({
              type: "EMISSION",
              subscriptionId: signature,
              timestamp: Date.now(),
              isOptimistic: false,
            });
          }

          if (value.resolvedList && componentContext) {
            (value as any).resolvedList = value.resolvedList.map(
              (obj: any, index) => {
                const objectKey = `${apiNameStr}:${obj.$primaryKey || index}`;
                return this.propertyAccessTracker.wrapObject(
                  obj,
                  objectKey,
                  componentContext.id,
                );
              },
            );
          }

          observer.next(value as any);
        },
        error: (err: unknown) => {
          if (componentContext) {
            this.componentRegistry.unregisterComponent(componentContext.id);
          }
          observer.error(err);
        },
        complete: () => {
          if (componentContext) {
            this.componentRegistry.unregisterComponent(componentContext.id);
          }
          observer.complete();
        },
      };

      return original(options, wrappedObserver as typeof observer);
    }) as ObservableClient["observeList"];
  }

  private wrapObserveLinks(original: any): any {
    return ((
      sourceObject: any,
      linkName: string,
      options: any,
      observer: any,
    ): Unsubscribable => {
      const componentContext = this.captureComponentContext
        ? componentContextCapture.getCurrentContext()
        : null;

      const sourceObjectKey =
        `${sourceObject.$apiName}:${sourceObject.$primaryKey}`;
      const signature = `links:${sourceObjectKey}:${linkName}`;

      let bindingId: string | null = null;
      if (componentContext && this.captureQueryParams) {
        bindingId = this.componentRegistry.registerBinding({
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
          fiberNode: componentContext.fiberNode,
        });
      }

      this.linkTraversalTracker.recordTraversal({
        sourceObjectType: sourceObject.$apiName,
        sourceObjectKey: sourceObject.$primaryKey,
        linkName,
        timestamp: Date.now(),
        componentId: componentContext?.id,
        subscriptionId: signature,
      });

      // No longer check for mocks here - let Store's MockLayer handle it
      // The mock will be served from the cache layer if configured

      const wrappedObserver = {
        next: (value: any) => {
          // Check if this was served from mock
          const metadata = getDebugMetadata(value);
          if (metadata?.servedFromMock) {
            // Log to timeline as mock event
            if (this.eventTimeline) {
              this.eventTimeline.record({
                type: "MOCK_HIT",
                subscriptionId: signature,
                timestamp: Date.now(),
                mockId: metadata.mockId,
              });
            }
          }

          // Record EMISSION event to timeline
          if (this.eventTimeline) {
            this.eventTimeline.record({
              type: "EMISSION",
              subscriptionId: signature,
              timestamp: Date.now(),
              isOptimistic: false,
            });
          }

          if (value.resolvedList && componentContext) {
            this.linkTraversalTracker.recordLinkedObjects({
              subscriptionId: signature,
              linkName,
              objects: value.resolvedList.map((obj: any) => ({
                objectType: obj.$apiName,
                primaryKey: obj.$primaryKey,
              })),
            });

            value.resolvedList = value.resolvedList.map((obj: any) =>
              this.propertyAccessTracker.wrapObject(
                obj,
                `${obj.$apiName}:${obj.$primaryKey}`,
                componentContext.id,
              )
            );
          }

          observer.next(value);
        },
        error: observer.error,
        complete: observer.complete,
      };

      return original(sourceObject, linkName, options, wrappedObserver);
    });
  }

  private wrapRegisterActionHook(
    original?: any,
  ): any {
    return (actionDef: any) => {
      const actionName = typeof actionDef === "string"
        ? actionDef
        : actionDef.apiName;

      // Use synchronous capture during render phase
      const componentContext = this.captureComponentContext
        ? componentContextCapture.captureNow()
        : null;

      const signature = `action:${actionName}`;

      if (componentContext && this.captureQueryParams) {
        const existingBindings = this.componentRegistry.getComponentBindings(
          componentContext.id,
        );
        const alreadyRegistered = existingBindings.some(b =>
          b.hookType === "useOsdkAction" && b.querySignature === signature
        );

        if (!alreadyRegistered) {
          this.componentRegistry.registerBinding({
            componentId: componentContext.id,
            componentName: componentContext.name,
            componentDisplayName: componentContext.displayName,
            hookType: "useOsdkAction",
            hookIndex: 0,
            querySignature: signature,
            queryParams: {
              type: "action",
              actionName,
            },
            fiberNode: componentContext.fiberNode,
          });
        }
      }

      original?.(actionDef);
    };
  }

  private wrapRegisterObjectHook(
    original?: any,
  ): any {
    return (objectType: any, primaryKey: any) => {
      const objectTypeStr = typeof objectType === "string"
        ? objectType
        : objectType.apiName;

      // Use synchronous capture during render phase
      const componentContext = this.captureComponentContext
        ? componentContextCapture.captureNow()
        : null;

      const signature = primaryKey
        ? `object:${objectTypeStr}:${String(primaryKey)}`
        : `object:${objectTypeStr}`;

      if (componentContext && this.captureQueryParams) {
        const existingBindings = this.componentRegistry.getComponentBindings(
          componentContext.id,
        );
        const alreadyRegistered = existingBindings.some(b =>
          b.hookType === "useOsdkObject" && b.querySignature === signature
        );

        if (!alreadyRegistered) {
          this.componentRegistry.registerBinding({
            componentId: componentContext.id,
            componentName: componentContext.name,
            componentDisplayName: componentContext.displayName,
            hookType: "useOsdkObject",
            hookIndex: 0,
            querySignature: signature,
            queryParams: {
              type: "object",
              objectType: objectTypeStr,
              primaryKey: primaryKey ? String(primaryKey) : "",
            },
            fiberNode: componentContext.fiberNode,
          });
        }
      }

      original?.(objectType, primaryKey);
    };
  }

  private wrapRegisterListHook(
    original?: any,
  ): any {
    return (objectType: any, options: any) => {
      const objectTypeStr = typeof objectType === "string"
        ? objectType
        : objectType.apiName;

      // Use synchronous capture during render phase
      const componentContext = this.captureComponentContext
        ? componentContextCapture.captureNow()
        : null;

      const whereClause = JSON.stringify(options?.where ?? {});
      const signature = `list:${objectTypeStr}:${whereClause}`;

      if (componentContext && this.captureQueryParams) {
        const existingBindings = this.componentRegistry.getComponentBindings(
          componentContext.id,
        );
        const alreadyRegistered = existingBindings.some(b =>
          b.hookType === "useOsdkObjects" && b.querySignature === signature
        );

        if (!alreadyRegistered) {
          this.componentRegistry.registerBinding({
            componentId: componentContext.id,
            componentName: componentContext.name,
            componentDisplayName: componentContext.displayName,
            hookType: "useOsdkObjects",
            hookIndex: 0,
            querySignature: signature,
            queryParams: {
              type: "list",
              objectType: objectTypeStr,
              where: options?.where,
              orderBy: options?.orderBy,
              pageSize: options?.pageSize,
            },
            fiberNode: componentContext.fiberNode,
          });
        }
      }

      original?.(objectType, options);
    };
  }

  private wrapRegisterLinkHook(
    original?: any,
  ): any {
    return (sourceObject: any, linkName: any) => {
      // Use synchronous capture during render phase
      const componentContext = this.captureComponentContext
        ? componentContextCapture.captureNow()
        : null;

      const sourceKeys = Array.isArray(sourceObject)
        ? sourceObject.map(obj => `${obj.$apiName}:${obj.$primaryKey}`).join(
          ",",
        )
        : `${sourceObject.$apiName}:${sourceObject.$primaryKey}`;
      const signature = `links:${sourceKeys}:${linkName}`;

      if (componentContext && this.captureQueryParams) {
        const existingBindings = this.componentRegistry.getComponentBindings(
          componentContext.id,
        );
        const alreadyRegistered = existingBindings.some(b =>
          b.hookType === "useLinks" && b.querySignature === signature
        );

        if (!alreadyRegistered) {
          this.componentRegistry.registerBinding({
            componentId: componentContext.id,
            componentName: componentContext.name,
            componentDisplayName: componentContext.displayName,
            hookType: "useLinks",
            hookIndex: 0,
            querySignature: signature,
            queryParams: {
              type: "links",
              sourceObject: sourceKeys,
              linkName,
            },
            fiberNode: componentContext.fiberNode,
          });
        }
      }

      original?.(sourceObject, linkName);
    };
  }

  private wrapRegisterObjectSetHook(
    original?: any,
  ): any {
    return (objectSet: any) => {
      // Use synchronous capture during render phase
      const componentContext = this.captureComponentContext
        ? componentContextCapture.captureNow()
        : null;

      // Generate a unique signature for the object set
      const signature = `objectset:${JSON.stringify(objectSet)}`;

      if (componentContext && this.captureQueryParams) {
        const existingBindings = this.componentRegistry.getComponentBindings(
          componentContext.id,
        );
        const alreadyRegistered = existingBindings.some(b =>
          b.hookType === "useObjectSet" && b.querySignature === signature
        );

        if (!alreadyRegistered) {
          this.componentRegistry.registerBinding({
            componentId: componentContext.id,
            componentName: componentContext.name,
            componentDisplayName: componentContext.displayName,
            hookType: "useObjectSet",
            hookIndex: 0,
            querySignature: signature,
            queryParams: {
              type: "objectSet",
              objectSet,
            } as any,
            fiberNode: componentContext.fiberNode,
          });
        }
      }

      original?.(objectSet);
    };
  }

  private wrapApplyAction(
    original: ObservableClient["applyAction"],
  ): ObservableClient["applyAction"] {
    return async (actionDef, args, options) => {
      const actionName = typeof actionDef === "string"
        ? actionDef
        : actionDef.apiName;

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
            // Check if we have a custom payload to use
            let actualArgs = args;
            if (mock.usePayload && mock.payload) {
              try {
                const payloadData = JSON.parse(mock.payload);
                actualArgs = payloadData.parameters || args;
              } catch (_e) {
                // Failed to parse mock payload, use original args
              }
            }

            // In passthrough mode, call the original action with potentially modified args
            try {
              const result = await original(actionDef, actualArgs, options);
              return result;
            } catch (error) {
              // Capture passthrough action errors
              const metricsStore = this.baseMonitor.getMetricsStore();
              if (metricsStore) {
                metricsStore.recordActionError({
                  id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
                  actionType: actionName,
                  timestamp: Date.now(),
                  message: error instanceof Error
                    ? error.message
                    : String(error),
                  stack: error instanceof Error ? error.stack : undefined,
                  parameters: actualArgs as Record<string, unknown>,
                  validationErrors: (error as Record<string, unknown>)
                    ?.validationErrors as ActionError["validationErrors"],
                });
              }
              throw error;
            }
          } else if (mock.response.type === "error") {
            throw new Error(mock.response.error);
          } else if (mock.response.type === "action") {
            const mockResult: any = mock.response.result;

            // Trigger cache invalidation for affected objects
            const store = (this.wrappedClient as any)?.__experimentalStore;

            if (store && mockResult?.type === "edits") {
              const promises: Promise<any>[] = [];

              // Invalidate added objects
              for (const obj of (mockResult.addedObjects || [])) {
                if (store.invalidateObject) {
                  promises.push(
                    store.invalidateObject(obj.objectType, obj.primaryKey),
                  );
                }
              }

              // Invalidate modified objects
              for (const obj of (mockResult.modifiedObjects || [])) {
                if (store.invalidateObject) {
                  promises.push(
                    store.invalidateObject(obj.objectType, obj.primaryKey),
                  );
                }
              }

              // Invalidate deleted objects
              for (const obj of (mockResult.deletedObjects || [])) {
                if (store.invalidateObject) {
                  promises.push(
                    store.invalidateObject(obj.objectType, obj.primaryKey),
                  );
                }
              }

              // Also invalidate the object types to refresh lists
              for (const objectType of (mockResult.editedObjectTypes || [])) {
                if (store.invalidateObjectType) {
                  promises.push(store.invalidateObjectType(objectType));
                }
              }

              await Promise.allSettled(promises);
            }

            return mockResult;
          }
        }
      }

      try {
        return await original(actionDef, args, options);
      } catch (error) {
        // Capture action errors for the Errors & Warnings tab
        const metricsStore = this.baseMonitor.getMetricsStore();
        if (metricsStore) {
          metricsStore.recordActionError({
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
        throw error; // Re-throw to maintain existing behavior
      }
    };
  }

  getMetricsStore(): MetricsStore {
    return this.baseMonitor.getMetricsStore();
  }

  getComponentRegistry(): ComponentQueryRegistry {
    return this.componentRegistry;
  }

  getLinkTraversalTracker(): LinkTraversalTracker {
    return this.linkTraversalTracker;
  }

  getPropertyAccessTracker(): PropertyAccessTracker {
    return this.propertyAccessTracker;
  }

  getCacheSnapshot(): Promise<CacheSnapshot> {
    if (!this.wrappedClient) {
      return Promise.reject(new Error("No wrapped client available"));
    }
    return (this.wrappedClient as unknown as {
      getCacheSnapshot(): Promise<CacheSnapshot>;
    }).getCacheSnapshot();
  }

  invalidateObjects(objects: unknown): Promise<void> {
    if (!this.wrappedClient) {
      return Promise.reject(new Error("No wrapped client available"));
    }
    return (this.wrappedClient as {
      invalidateObjects(objects: unknown): Promise<void>;
    }).invalidateObjects(objects);
  }

  invalidateObjectType(objectType: string): Promise<void> {
    if (!this.wrappedClient) {
      return Promise.reject(new Error("No wrapped client available"));
    }
    return (this.wrappedClient as {
      invalidateObjectType(objectType: string): Promise<void>;
    }).invalidateObjectType(objectType);
  }

  invalidateAll(): Promise<void> {
    if (!this.wrappedClient) {
      return Promise.reject(new Error("No wrapped client available"));
    }
    return (this.wrappedClient as { invalidateAll(): Promise<void> })
      .invalidateAll();
  }

  dispose(): void {
    this.baseMonitor.dispose();
  }
}
