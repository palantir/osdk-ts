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

export class BidirectionalRegistry {
  private componentToQueries = new Map<string, Set<string>>();
  private queryToComponents = new Map<string, Set<string>>();

  private objectToComponents = new Map<string, Set<string>>();
  private componentToObjects = new Map<string, Set<string>>();

  private actionToComponents = new Map<string, Set<string>>();
  private componentToActions = new Map<string, Set<string>>();

  private subscriptionToComponent = new Map<string, string>();
  private subscriptionToQuery = new Map<string, string>();

  linkComponentQuery(componentId: string, querySignature: string): void {
    if (!this.componentToQueries.has(componentId)) {
      this.componentToQueries.set(componentId, new Set());
    }
    this.componentToQueries.get(componentId)!.add(querySignature);

    if (!this.queryToComponents.has(querySignature)) {
      this.queryToComponents.set(querySignature, new Set());
    }
    this.queryToComponents.get(querySignature)!.add(componentId);
  }

  linkComponentObject(componentId: string, objectKey: string): void {
    if (!this.componentToObjects.has(componentId)) {
      this.componentToObjects.set(componentId, new Set());
    }
    this.componentToObjects.get(componentId)!.add(objectKey);

    if (!this.objectToComponents.has(objectKey)) {
      this.objectToComponents.set(objectKey, new Set());
    }
    this.objectToComponents.get(objectKey)!.add(componentId);
  }

  linkComponentAction(componentId: string, actionName: string): void {
    if (!this.componentToActions.has(componentId)) {
      this.componentToActions.set(componentId, new Set());
    }
    this.componentToActions.get(componentId)!.add(actionName);

    if (!this.actionToComponents.has(actionName)) {
      this.actionToComponents.set(actionName, new Set());
    }
    this.actionToComponents.get(actionName)!.add(componentId);
  }

  linkSubscription(
    subscriptionId: string,
    componentId: string,
    querySignature: string,
  ): void {
    this.subscriptionToComponent.set(subscriptionId, componentId);
    this.subscriptionToQuery.set(subscriptionId, querySignature);
  }

  getComponentQueries(componentId: string): string[] {
    return Array.from(this.componentToQueries.get(componentId) || []);
  }

  getQueryComponents(querySignature: string): string[] {
    return Array.from(this.queryToComponents.get(querySignature) || []);
  }

  getComponentObjects(componentId: string): string[] {
    return Array.from(this.componentToObjects.get(componentId) || []);
  }

  getObjectComponents(objectKey: string): string[] {
    return Array.from(this.objectToComponents.get(objectKey) || []);
  }

  getComponentActions(componentId: string): string[] {
    return Array.from(this.componentToActions.get(componentId) || []);
  }

  getActionComponents(actionName: string): string[] {
    return Array.from(this.actionToComponents.get(actionName) || []);
  }

  getSubscriptionComponent(subscriptionId: string): string | undefined {
    return this.subscriptionToComponent.get(subscriptionId);
  }

  getSubscriptionQuery(subscriptionId: string): string | undefined {
    return this.subscriptionToQuery.get(subscriptionId);
  }

  unlinkComponent(componentId: string): void {
    const queries = this.componentToQueries.get(componentId) || new Set();
    for (const query of queries) {
      this.queryToComponents.get(query)?.delete(componentId);
    }
    this.componentToQueries.delete(componentId);

    const objects = this.componentToObjects.get(componentId) || new Set();
    for (const obj of objects) {
      this.objectToComponents.get(obj)?.delete(componentId);
    }
    this.componentToObjects.delete(componentId);

    const actions = this.componentToActions.get(componentId) || new Set();
    for (const action of actions) {
      this.actionToComponents.get(action)?.delete(componentId);
    }
    this.componentToActions.delete(componentId);

    for (const [subId, compId] of this.subscriptionToComponent.entries()) {
      if (compId === componentId) {
        this.subscriptionToComponent.delete(subId);
        this.subscriptionToQuery.delete(subId);
      }
    }
  }

  clear(): void {
    this.componentToQueries.clear();
    this.queryToComponents.clear();
    this.objectToComponents.clear();
    this.componentToObjects.clear();
    this.actionToComponents.clear();
    this.componentToActions.clear();
    this.subscriptionToComponent.clear();
    this.subscriptionToQuery.clear();
  }

  getStats(): {
    components: number;
    queries: number;
    objects: number;
    actions: number;
    subscriptions: number;
    totalRelationships: number;
  } {
    return {
      components: this.componentToQueries.size,
      queries: this.queryToComponents.size,
      objects: this.objectToComponents.size,
      actions: this.actionToComponents.size,
      subscriptions: this.subscriptionToComponent.size,
      totalRelationships: Array.from(this.componentToQueries.values()).reduce(
        (sum, set) => sum + set.size,
        0,
      )
        + Array.from(this.componentToObjects.values()).reduce(
          (sum, set) => sum + set.size,
          0,
        )
        + Array.from(this.componentToActions.values()).reduce(
          (sum, set) => sum + set.size,
          0,
        ),
    };
  }
}
